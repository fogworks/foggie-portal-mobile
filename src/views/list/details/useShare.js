import useVariable from './useVariable';
import { ref } from 'vue';
import { showToast } from '@nutui/nutui';
import * as Prox from '@/pb/prox_pb.js';
import * as grpcService from '@/pb/prox_grpc_web_pb.js';

import '@nutui/nutui/dist/packages/toast/style';
import { HmacSHA1, enc } from 'crypto-js';
// import { file_pin } from '@/api';
export default function useShare(orderInfo, header, deviceType) {
  const daySeconds = 86400;
  const monthSeconds = 2592000;
  const { shareRefContent, copyContent, pinData, ipfsDialogShow } = useVariable();
  const showShareDialog = ref(false);
  const periodShow = ref(false);
  const loading = ref(false);
  const isReady = ref(false);
  const desc = ref('1 hour');
  const periodValue = ref([3600]);
  const options = ref([
    {
      text: '1 hour',
      value: 3600,
    },
    {
      text: '1 day',
      value: 3600 * 24,
    },
    {
      text: '7 days',
      value: daySeconds * 7,
    },
    {
      text: '1 month',
      value: monthSeconds,
    },
    {
      text: '3 months',
      value: monthSeconds * 3,
    },
    {
      text: '6 months',
      value: monthSeconds * 6,
    },
    {
      text: '1 year',
      value: monthSeconds * 12,
    },
  ]);
  const ipfsPin = (item, stype, flag, exp = true) => {
    let foggieToken;
    // if (foggieToken && foggieToken.indexOf('bearer ') > -1) {
    //   foggieToken = foggieToken.split('bearer ')[1];
    // }
    let device_type = null;

    if (orderInfo.value.device_type == 'foggie' || !orderInfo.value.device_type) {
      device_type = 1;
    } else if (orderInfo.value.device_type == 'foggie_max') {
      device_type = 2;
    } else if (orderInfo.value.device_type == 'space' || orderInfo.value.device_type == 3) {
      device_type = 3;
      foggieToken = orderInfo.value.sign;
    }

    let token = orderInfo.value.upload_file_token;
    if (deviceType.value != 3) {
      token = foggieToken;
    }

    let poolType = orderInfo.value.pool_type;
    let poolWalletAcc = orderInfo.value.pool_wallet_acc;
    if (device_type == 3) {
      if (!item.cid || !item.originalSize) {
        showToast.fail('The file data is abnormal, please refresh the page and try again.');
        return;
      }
      if (flag !== 'unpin') {
        // let totalPinSize = pinSize + parseInt(fileSize);
      }
    }

    if (poolType == 0 && !poolWalletAcc) {
      showToast.fail('Mining pool wallet account cannot be empty.');
      return;
    }
    let request = new Prox.default.ProxPinRequest();
    request.setCid(item.cid);
    request.setStype(stype);
    request.setExp(exp);
    request.setPin(flag !== 'unpin');
    request.setIsdir(item.isDir);
    request.setKey(encodeURIComponent(item.key));
    let pinPay = new Prox.default.ProxPinPay();
    pinPay.setCopied(0);
    pinPay.setTrxid('');
    let ProxPinReq = new Prox.default.ProxPinReq();
    ProxPinReq.setHeader(header);
    ProxPinReq.setRequest(request);
    ProxPinReq.setPay(pinPay);
    let ip = orderInfo.value.rpc.split(':')[0];
    let server = new grpcService.default.ServiceClient(`http://${ip}:7007`, null, null);
    showToast.text('IPFS link will available later.');
    server.pin(ProxPinReq, {}, (err, res) => {
      if (res) {
      } else if (err) {
      }
    });
  };
  const doShare = async (item) => {
    pinData.item = item;
    let key = item.key;

    if (key) {
      let foggie_id = orderInfo.value.foggie_id;
      let httpStr = `http://${orderInfo.value.rpc.split(':')[0]}/fog/${foggie_id}/${item.cid}`;
      let ipfsStr = item.cid ? `ipfs://${item.cid}` : '';
      shareRefContent.ipfsStr = ipfsStr;
      shareRefContent.httpStr = httpStr;
      if (+pinData.item.originalSize > orderInfo.value.total_space * 0.01) {
        shareRefContent.ipfsStr = '';
        // showToast.fail('File size exceeds 1% of the order space size, sharing is not supported');
      }
      showShareDialog.value = true;
    }
  };
  const copyLink = (text) => {
    var input = document.createElement('input');
    input.value = text;
    document.body.appendChild(input);
    input.select();
    document.execCommand('Copy');
    document.body.removeChild(input);
    // let str = `Copying  ${type} successful!`;
    // this.$message.success(str);
    showToast.success('Copy succeeded');
  };
  const confirmPeriod = ({ selectedValue, selectedOptions }) => {
    desc.value = selectedOptions.map((val) => val.text).join(',');
    periodShow.value = false;
  };
  const shareTwitter = (fileLink, checkData) => {
    let tweetText = checkData?.name || '';
    var twitterUrl = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(tweetText) + '&url=' + encodeURIComponent(fileLink);
    window.open(twitterUrl, '_blank');
  };
  const shareFacebook = (fileLink) => {
    var twitterUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(fileLink);
    window.open(twitterUrl, '_blank');
  };
  const confirmHttpShare = (type, shareOption, awsAccessKeyId, awsSecretAccessKey, bucketName) => {
    shareRefContent.httpStr = getHttpShare(awsAccessKeyId, awsSecretAccessKey, bucketName, pinData.item.fullName);
    if (!type) {
      copyLink(shareRefContent.httpStr);
    } else if (type == 'twitter') {
      shareTwitter(shareRefContent.httpStr, shareOption);
    } else if (type == 'slack') {
      shareFacebook(shareRefContent.httpStr);
    }
    isReady.value = false;
  };

  const getHttpShare = ( awsAccessKeyId, awsSecretAccessKey, bucketName, keyName, thumb) => {
    // awsAccessKeyId = 'FOGpmEBp2rE4dvkP2W1r'
    // awsSecretAccessKey = 'TgKOPvlv3MSQhYjuyNN0MKVBw9mZChtT7E0GVh2h'
    const objectKey = encodeURIComponent(keyName);
    const expirationInSeconds = 3600;
    const expirationTime = Math.floor(Date.now() / 1000) + expirationInSeconds;

    const httpMethod = 'GET';
    const contentType = '';
    const contentMd5 = '';
    const canonicalizedAmzHeaders = '';

    const canonicalizedResource = `${bucketName}/o/${objectKey}`;
    const signature = `${httpMethod}\n${contentMd5}\n${contentType}\n${expirationTime}\n${canonicalizedAmzHeaders}/${canonicalizedResource}`;


    let hmac = HmacSHA1(signature, awsSecretAccessKey);
    const signatureBase64 = enc.Base64.stringify(hmac);

    // let ip = `http://${orderInfo.value.rpc.split(':')[0]}:6008`;
    // const baseUrl = `${ip}/o/${bucketName}/${objectKey}`;

    let ip = `http://${bucketName}.devus.u2i.net:6008`;
    const baseUrl = `${ip}/o/${objectKey}`;
    if (thumb) {
      return `${baseUrl}?AWSAccessKeyId=${awsAccessKeyId}&Expires=${expirationTime}&Signature=${encodeURIComponent(
        signatureBase64,
      )}&thumb=true`;
    }
    return `${baseUrl}?AWSAccessKeyId=${awsAccessKeyId}&Expires=${expirationTime}&Signature=${encodeURIComponent(
      signatureBase64,
    )}`;
  };
  const confirmShare = () => {
    if (orderInfo.value.device_type == 'space' || orderInfo.value.device_type == 3) {
      if (+pinData.item.originalSize > orderInfo.value.total_space * 0.01) {
        shareRefContent.ipfsStr = '';
        showToast.fail('File size exceeds 1% of the order space size, sharing is not supported');
      } else {
        if (!pinData.item.isPin) {
          ipfsPin(pinData.item, 'ipfs', '', periodValue.value[0]);
          copyLink(shareRefContent.ipfsStr);
        }
      }
    } else {
      if (!pinData.item.isPin) {
        ipfsPin(pinData.item, 'ipfs', '', periodValue.value[0]);
        copyLink(shareRefContent.ipfsStr);
      }
    }
  };
  return {
    ipfsPin,
    loading,
    isReady,
    periodShow,
    periodValue,
    desc,
    options,
    doShare,
    confirmPeriod,
    shareRefContent,
    copyContent,
    showShareDialog,
    ipfsDialogShow,
    confirmShare,
    confirmHttpShare,
    getHttpShare,
  };
}

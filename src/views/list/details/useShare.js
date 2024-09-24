import useVariable from './useVariable';
import { ref } from 'vue';
import { showToast, showDialog } from '@nutui/nutui';
import * as Prox from '@/pb/prox_pb.js';
import * as grpcService from '@/pb/prox_grpc_web_pb.js';
import { getLink } from '@/api/index.ts';
import { useUserStore } from '@/store/modules/user';
import { transferUTCTime } from '@/utils/util.ts';
import { shareUrl } from '@/setting.js';
import '@nutui/nutui/dist/packages/toast/style';
import { HmacSHA1, enc } from 'crypto-js';

import IconHttp2 from '~icons/home/http2.svg';
import { poolUrl } from '@/setting.js';
import loadingImg from '@/components/loadingImg/index.vue';
import { browserUrl } from '@/setting';
// import useOrderInfo from './useOrderInfo.js';

export default function useShare(orderInfo, header, deviceType, metadata) {
  const userStore = useUserStore();
  const isMobileDevice = computed(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    // 此正则表达式涵盖了大多数使用的手机和平板设备
    return /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent.toLowerCase());
  });
  const address = computed(() => {
    return userStore.getUserInfo.address;
  });
  const daySeconds = 86400;
  const monthSeconds = 2592000;
  const { shareRefContent, copyContent, pinData, ipfsDialogShow } = useVariable();
  const showShareDialog = ref(false);
  const periodShow = ref(false);
  const loading = ref(false);
  const isReady = ref(false);
  const desc = ref('1 hour');
  const periodValue = ref(isMobileDevice.value ? [3600] : 3600);
  const imgUrl = ref('');
  const imgDesc = ref('Please input description');
  const shareType = ref('');
  const httpCopyLink = ref('');
  const userInfo = computed(() => userStore.getUserInfo);
  const options = ref([
    {
      text: '1 hour',
      name: '1 hour',
      value: 3600,
    },
    {
      text: '1 day',
      name: '1 day',
      value: 3600 * 24,
    },
    {
      text: '7 days',
      name: '7 days',
      value: daySeconds * 7,
    },
    {
      text: '1 month',
      name: '1 month',
      value: monthSeconds,
    },
    {
      text: '3 months',
      name: '3 months',
      value: monthSeconds * 3,
    },
    {
      text: '6 months',
      name: '6 months',
      value: monthSeconds * 6,
    },
    {
      text: '1 year',
      name: '1 year',
      value: monthSeconds * 12,
    },
  ]);
  const cloudPin = async (item, stype = 'ipfs', flag, exp, isShare = true) => {
    let server = null;
    let mp_domain = '';
    mp_domain = `${orderInfo.value.domain}.${poolUrl}`;

    server = new grpcService.default.ServiceClient(`https://${mp_domain}:7007`, null, null);

    console.log(`https://${mp_domain}:7007`, '`https://${mp_domain}:7007`');

    let request = new Prox.default.ProxPinReq();
    let pinRequest = new Prox.default.ProxPinRequest();
    let pinPay = new Prox.default.ProxPinPay();

    pinRequest.setCid(item.cid);
    pinRequest.setStype(stype);
    pinRequest.setExp(exp);
    pinRequest.setPin(flag !== 'unpin');
    pinRequest.setIsdir(item.isDir);
    pinRequest.setKey(item.key);

    pinPay.setCopied(0);
    // pinPay.setTrxid("");

    request.setRequest(pinRequest);
    request.setHeader(header.value);
    request.setPay(pinPay);
    console.log(request, 'request');
    return new Promise((resolve, reject) => {
      showToast.loading('Loading', {
        cover: true,
        coverColor: 'rgba(0,0,0,0.45)',
        customClass: 'app_loading',
        icon: loadingImg,
        loadingRotate: false,
        duration: 0,
        id: 'cloud_pin',
      });
      server.pin(request, metadata.value, (err, response) => {
        if (err) {
          console.log('cloud-pin------err', err);
          showToast.hide('cloud_pin');
          reject(false);
          return;
        } else if (response) {
          showToast.hide('cloud_pin');
          console.log(response, 'response');
          resolve(true);
        }
      });
    });
  };
  const ipfsPin = (item, stype, flag, exp = true) => {
    console.log(item, 'item');
    console.log(orderInfo.value, 'orderInfo.value');
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
    ProxPinReq.setHeader(header.value);
    ProxPinReq.setRequest(request);
    ProxPinReq.setPay(pinPay);
    // let ip = orderInfo.value.rpc.split(':')[0];
    // let server = new grpcService.default.ServiceClient(`http://${ip}:7007`, null, null);
    let bucketName = orderInfo.value.domain;

    let ip = `https://${bucketName}.${poolUrl}:7007`;
    let server = new grpcService.default.ServiceClient(ip, null, null);

    // showToast.text('IPFS link will available later.');
    server.pin(ProxPinReq, metadata.value, (err, res) => {
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
      // let httpStr = `http://${orderInfo.value.rpc.split(':')[0]}/fog/${foggie_id}/${item.cid}`;
      let httpStr = `https://${orderInfo.value.domain}.${poolUrl}:6008/o/${item.cid}`;
      let ipfsStr2 = item.cid ? `ipfs://${item.cid}` : '';
      let ipfsStr = `https://${orderInfo.value.domain}.${poolUrl}:6008/ipfs/${item.cid}`;
      shareRefContent.ipfsStr = ipfsStr;
      shareRefContent.ipfsStr2 = ipfsStr2;
      shareRefContent.httpStr = httpStr;
      if (+pinData.item.originalSize > orderInfo.value.total_space * 0.01) {
        shareRefContent.ipfsStr = '';
        // showToast.fail('File size exceeds 1% of the order space size, sharing is not supported');
      }
      showShareDialog.value = true;
    }
  };
  const copyLink = async (text) => {
    var input = document.createElement('input');
    input.value = text;
    document.body.appendChild(input);
    input.select();
    document.execCommand('Copy');
    document.body.removeChild(input);
    showToast.success('Copy succeeded');
  };

  const confirmPeriod = ({ selectedValue, selectedOptions }) => {
    desc.value = selectedOptions.map((val) => val.text).join(',');
    periodShow.value = false;
  };
  const createLowLink = async (fileLink, shareOption) => {
    let category = shareOption.category;
    console.log(shareOption, 'shareOption');
    if (category == 1 || category == 2) {
      let coverUrl;
      if (category == 2) {
        let linkRes = await getLink({
          url: fileLink + '&thumb=true',
          coverUrl: fileLink + '&thumb=true',
          username: userInfo.value.email || address.value,
          userUuid: userInfo.value.uuid,
          period: isMobileDevice.value ? periodValue.value[0] : periodValue.value,
          imageName: shareOption.name,
          title: shareOption.name,
          detail: imgDesc.value,
        });
        if (linkRes.data) {
          coverUrl = `${shareUrl}/img/` + linkRes.data;
        }
      }
      console.log(isMobileDevice.value ? periodValue.value[0] : periodValue.value, 'periodValue.value[0]');
      return getLink({
        url: fileLink,
        coverUrl: category == 2 ? coverUrl : '',
        username: userInfo.value.email || address.value,
        userUuid: userInfo.value.uuid,
        period: isMobileDevice.value ? periodValue.value[0] : periodValue.value,
        imageName: shareOption.name,
        title: shareOption.name,
        detail: imgDesc.value,
      }).then((res) => {
        if (res.code == 200) {
          imgUrl.value = `${shareUrl}/img/` + res.data;
          return `${shareUrl}/share/` + res.data;
        }
      });
    } else {
      imgUrl.value = '';
      return fileLink;
    }
  };
  const showCopyDialog = (title = 'Http Link', url) => {
    let src = require('@/assets/svg/home/http2.svg');

    // let src = IconHttp2;
    let str = `<div>
      <img style="height:60px; padding:0 20px;" src=${src}> 
      </div> <div  class='http_share_text'>The link has been generated, so go ahead and share it.</div>`;
    showDialog({
      title,
      content: str,
      okText: title == 'Http Link' ? 'Copy' : 'Share',
      noCancelBtn: true,
      customClass: 'BuyOrderClass',
      onOk: () => {
        console.log(url, 'httpCopyLink.value');
        window.open(url);
        httpCopyLink.value = '';
        showShareDialog.value = false;
        // router.push({ name: 'listDetails', query: { id: res.data?.orderId, uuid: res.data?.uuid, amb_uuid: res.data?.ambUuid } });
      },
      beforeClose: () => {
        httpCopyLink.value = '';
        showShareDialog.value = false;
        return true;
      },
    });
  };
  const shareTwitter = async (fileLink, checkData) => {
    // let newWindow = window.open('', '_blank');

    let link = await createLowLink(fileLink, checkData);
    var twitterUrl = 'https://twitter.com/intent/tweet?url=' + encodeURIComponent(link) + '&text=' + encodeURIComponent(checkData.name);

    // newWindow.location = twitterUrl;

    showCopyDialog('Twitter', twitterUrl);

    // openUrl(twitterUrl);
    // window.open(twitterUrl, '_blank');
  };

  const openUrl = (url) => {
    const a = document.createElement('a');
    a.href = url;
    a.target = '_blank';
    document.body.appendChild(a);
    a.click();
  };
  const shareFacebook = async (fileLink, checkData) => {
    // let newWindow = window.open('', '_blank');
    let link = await createLowLink(fileLink, checkData);
    var twitterUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(link);
    // var twitterUrl = 'https://www.facebook.com/dialog/share?href=' + encodeURIComponent(link) + '&display=popup';
    // window.open(twitterUrl, '_blank');
    // newWindow.location = twitterUrl;
    // openUrl(twitterUrl);
    showCopyDialog('Facebook', twitterUrl);
  };
  const sharePinterest = async (fileLink, checkData) => {
    // let newWindow = window.open('', '_blank');
    let link = await createLowLink(fileLink, checkData);
    var twitterUrl = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(link)}&media=${imgUrl.value}&description=${
      imgDesc.value
    }`;
    // newWindow.location = twitterUrl;
    // var twitterUrl = 'https://www.facebook.com/dialog/share?href=' + encodeURIComponent(link) + '&display=popup';
    // openUrl(twitterUrl);
    // window.open(twitterUrl, '_blank');

    showCopyDialog('Pinterest', twitterUrl);
  };
  const shareSlack = async (fileLink, checkData) => {
    let link = await createLowLink(fileLink, checkData);
    let src = require('@/assets/svg/home/slack.svg');
    showShareDialog.value = false;
    // let src = IconHttp2;
    let str = `<div>
      <img style="height:60px; padding:0 20px;" src=${src}> 
      </div> <div  class='http_share_text'>The link has been generated, please copy it.</div>`;
    showDialog({
      title: 'Http Link',
      content: str,
      okText: 'Copy',
      noCancelBtn: true,
      customClass: 'BuyOrderClass',
      onOk: () => {
        copyLink(link);
        showShareDialog.value = false;
        // router.push({ name: 'listDetails', query: { id: res.data?.orderId, uuid: res.data?.uuid, amb_uuid: res.data?.ambUuid } });
      },
      beforeClose: () => {
        showShareDialog.value = false;
        return true;
      },
    });
    // copyLink(link);
  };
  const confirmHttpShare = async (type, shareOption, awsAccessKeyId, awsSecretAccessKey, bucketName) => {
    shareRefContent.httpStr = getHttpShare(awsAccessKeyId, awsSecretAccessKey, bucketName, pinData.item.fullName);
    if (!type) {
      console.log(type, 'type');
      let link = await createLowLink(shareRefContent.httpStr, shareOption);
      showShareDialog.value = false;
      httpCopyLink.value = link;
      console.log(link, 'link.link');
      let src = require('@/assets/svg/home/http2.svg');

      // let src = IconHttp2;
      let str = `<div>
      <img style="height:60px; padding:0 20px;" src=${src}> 
      </div> <div  class='http_share_text'>The link has been generated, please copy it.</div>`;
      showDialog({
        title: 'Http Link',
        content: str,
        okText: 'Copy',
        noCancelBtn: true,
        customClass: 'BuyOrderClass',
        onOk: () => {
          console.log(httpCopyLink.value, 'httpCopyLink.value');
          copyLink(httpCopyLink.value);
          httpCopyLink.value = '';
          showShareDialog.value = false;
          // router.push({ name: 'listDetails', query: { id: res.data?.orderId, uuid: res.data?.uuid, amb_uuid: res.data?.ambUuid } });
        },
        beforeClose: () => {
          httpCopyLink.value = '';
          showShareDialog.value = false;
          return true;
        },
      });
      // copyLink(link);
    } else if (type == 'twitter') {
      shareTwitter(shareRefContent.httpStr, shareOption);
    } else if (type == 'faceBook') {
      shareFacebook(shareRefContent.httpStr, shareOption);
    } else if (type == 'slack') {
      shareSlack(shareRefContent.httpStr, shareOption);
    } else if (type == 'pinterest') {
      sharePinterest(shareRefContent.httpStr, shareOption);
    }
    isReady.value = false;
  };

  const getHttpShare = (awsAccessKeyId, awsSecretAccessKey, bucketName, keyName, thumb) => {
    console.log(awsAccessKeyId, awsSecretAccessKey, bucketName, keyName);
    // awsAccessKeyId = 'FOGpmEBp2rE4dvkP2W1r'
    // awsSecretAccessKey = 'TgKOPvlv3MSQhYjuyNN0MKVBw9mZChtT7E0GVh2h'
    const objectKey = encodeURIComponent(keyName);
    // const expirationInSeconds = periodValue.value[0]
    const expirationTime = Math.floor(Date.now() / 1000) + (isMobileDevice.value ? periodValue.value[0] : periodValue.value);

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

    let ip = `https://${bucketName}.${poolUrl}:6008`;
    const baseUrl = `${ip}/o/${objectKey}`;
    if (thumb) {
      return `${baseUrl}?AWSAccessKeyId=${awsAccessKeyId}&Expires=${expirationTime}&Signature=${encodeURIComponent(
        signatureBase64,
      )}&thumb=true`;
    }
    return `${baseUrl}?AWSAccessKeyId=${awsAccessKeyId}&Expires=${expirationTime}&Signature=${encodeURIComponent(signatureBase64)}`;
  };

  const confirmShare = () => {
    if (orderInfo.value.device_type == 'space' || orderInfo.value.device_type == 3) {
      if (+pinData.item.originalSize > orderInfo.value.total_space * 0.01) {
        shareRefContent.ipfsStr = '';
        showToast.fail('File size exceeds 1% of the bucket space size, sharing is not supported');
      } else {
        if (!pinData.item.isPin) {
          cloudPin(pinData.item, 'ipfs', '', isMobileDevice.value ? periodValue.value[0] : periodValue.value);
          copyLink(shareRefContent.ipfsStr);
        }
      }
    } else {
      if (!pinData.item.isPin) {
        cloudPin(pinData.item, 'ipfs', '', isMobileDevice.value ? periodValue.value[0] : periodValue.value);
        copyLink(shareRefContent.ipfsStr);
      }
    }
  };
  const createNFT = (shareOption, awsAccessKeyId, awsSecretAccessKey, bucketName) => {
    pinData.item = shareOption;
    let key = shareOption.key;

    if (key) {
      // let httpStr = `http://${orderInfo.value.rpc.split(':')[0]}/fog/${foggie_id}/${item.cid}`;
      let httpStr = `https://${orderInfo.value.domain}.${poolUrl}:6008/o/${shareOption.cid}`;
      shareRefContent.httpStr = httpStr;
      // if (+pinData.shareOption.originalSize > orderInfo.value.total_space * 0.01) {
      //   shareRefContent.ipfsStr = '';
      // }
    }
    if (orderInfo.value.expire) {
      let expireTimeStamp = new Date(orderInfo.value.expire).getTime();
      let startTimeStamp = new Date(orderInfo.value.created_at).getTime();

      periodValue.value = isMobileDevice.value
        ? [+((expireTimeStamp - startTimeStamp) / 1000).toFixed(0)]
        : +((expireTimeStamp - startTimeStamp) / 1000).toFixed(0);
      shareRefContent.httpStr = getHttpShare(awsAccessKeyId, awsSecretAccessKey, bucketName, pinData.item.fullName);
      window.open(`https://drops.fogworks.io/personal/#/create/${encodeURIComponent(shareRefContent.httpStr)}`);
    } else {
      periodValue.value = isMobileDevice.value ? [daySeconds * 7] : daySeconds * 7;
      shareRefContent.httpStr = getHttpShare(awsAccessKeyId, awsSecretAccessKey, bucketName, pinData.item.fullName);
      window.open(`https://drops.fogworks.io/personal/#/create/${encodeURIComponent(shareRefContent.httpStr)}`);
    }
  };
  const copyIPFS = (type, item) => {
    let ipfsStr2 = item.cid ? `ipfs://${item.cid}` : '';
    let ipfsStr = `https://${orderInfo.value.domain}.${poolUrl}:6008/ipfs/${item.cid}`;
    if (type == 'ipfs') {
      copyLink(ipfsStr2);
    } else {
      copyLink(ipfsStr);
    }
  };
  const copyNft = (nft) => {
    let content = `${browserUrl}/nft/${nft.getContractid()}/${nft.getTokenid()}`;
    copyLink(content);
  };
  watch(
    isReady,
    (val) => {
      if (val) {
        if (orderInfo.value.expire) {
          imgDesc.value = '';
          let expireTimeStamp = new Date(orderInfo.value.expire).getTime();
          let startTimeStamp = new Date(orderInfo.value.created_at).getTime();
          options.value = options.value.filter((el) => {
            return el.value < (expireTimeStamp - startTimeStamp) / 1000;
          });
          desc.value = transferUTCTime(orderInfo.value.expire);
          options.value.unshift({ text: desc.value, value: +((expireTimeStamp - startTimeStamp) / 1000).toFixed(0) });
          periodValue.value = isMobileDevice.value
            ? [+((expireTimeStamp - startTimeStamp) / 1000).toFixed(0)]
            : +((expireTimeStamp - startTimeStamp) / 1000).toFixed(0);
        } else {
          desc.value = '1 hour';
          periodValue.value = [3600];
          periodValue.value = isMobileDevice.value ? [3600] : 3600;
        }
      } else {
        options.value = [
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
        ];
      }
    },
    { deep: true },
  );
  watch(
    periodValue,
    (val) => {
      console.log(val, 'val');
    },
    { deep: true },
  );

  watch(showShareDialog, (val) => {
    isReady.value = false;
    shareType.value = '';
    if (!val) {
      periodValue.value = isMobileDevice.value ? [3600] : 3600;
    }
    // httpCopyLink.value = '';
  });
  return {
    httpCopyLink,
    copyLink,
    createNFT,
    shareType,
    ipfsPin,
    loading,
    isReady,
    periodShow,
    periodValue,
    desc,
    imgDesc,
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
    cloudPin,
    copyIPFS,
    copyNft,
  };
}

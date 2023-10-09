import useVariable from './useVariable';
import { ref, toRefs } from 'vue';
import { showToast } from '@nutui/nutui';
import * as Prox from '@/pb/prox_pb.js';
import * as grpcService from '@/pb/prox_grpc_web_pb.js';

import '@nutui/nutui/dist/packages/toast/style';
// import { file_pin } from '@/api';
export default function useShare(orderInfo, header) {
  const daySeconds = 86400;
  const monthSeconds = 2592000;
  const { store, uuid, shareRefContent, copyContent, pinData, ipfsDialogShow } = useVariable();
  const showShareDialog = ref(false);
  const periodShow = ref(false);
  const loading = ref(false);
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
  const ipfsPin = (item, stype, flag, exp, isShare = true) => {
    // let foggieToken = tokenMap.value[deviceData.value.device_id];
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
    if (deviceType != 3) {
      token = foggieToken;
    }
    let poolType = orderInfo.pool_type;
    let poolWalletAcc = orderInfo.pool_wallet_acc;
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
    console.log(item);
    let request = new Prox.default.ProxPinRequest();
    request.setCid(item.cid);
    request.setStype(stype);
    request.setExp(exp);
    request.setPin(flag !== 'unpin');
    request.setIsDir(item.isDir);
    request.setKey(encodeURIComponent(item.key));
    let pinPay = new Prox.default.ProxPinPay();
    pinPay.setCopied(0);
    // pinPay.setTrxId(0);
    let ProxPinReq = new Prox.default.ProxPinReq();
    ProxPinReq.setHeader(header);
    ProxPinReq.setRequest(request);
    ProxPinReq.setPay(pinPay);
    let ip = orderInfo.value.rpc.split(':')[0];
    let server = new grpcService.default.ServiceClient(`http://${ip}:7007`, null, null);

    server.pin(ProxPinReq, {}, (err, res) => {
      if (res) {
        resolve(res);
      } else if (err) {
        reject(err);
      }
    });
  };
  const doShare = async (item) => {
    pinData.item = item;
    let key = item.key;
    if (key) {
      let peer_id = orderInfo.value.peer_id;
      let foggie_id = orderInfo.value.foggie_id;
      let foggieStr = `foggie://${peer_id}/${foggie_id}/${item.cid}`;
      let httpStr = `http://${orderInfo.value.rpc.split(':')[0]}/fog/${foggie_id}/${item.cid}`;
      let ipfsStr = item.cid ? `ipfs://${item.cid}` : '';
      shareRefContent.ipfsStr = ipfsStr;
      shareRefContent.httpStr = httpStr;
      shareRefContent.foggieStr = foggieStr;
      showShareDialog.value = true;
    }
  };
  const confirmPeriod = ({ selectedValue, selectedOptions }) => {
    desc.value = selectedOptions.map((val) => val.text).join(',');
    periodShow.value = false;
  };
  const confirmShare = () => {
    loading.value = true;
    let ProxPresignedURL = new Prox.default.ProxPresignedURL();
    ProxPresignedURL.setHeader(header);
    ProxPresignedURL.setUrl(shareRefContent.httpStr);
    ProxPresignedURL.setMethod('GET');
    ProxPresignedURL.setExpires(periodValue.value[0]);
    let ip = orderInfo.value.rpc.split(':')[0];
    let server = new grpcService.default.ServiceClient(`http://${ip}:7007`, null, null);
    server.getPreSigned(ProxPresignedURL, {}, (err, res) => {
      if (res) {
        res = res.toObject();
        console.log(res, 'res');
        if (res?.url) {
          if (orderInfo.value.device_type !== 'space' && orderInfo.value.device_type != 3) {
            shareRefContent.httpStr = res.url.replace(/\/fog/, ':6008/fog');
          } else {
            shareRefContent.httpStr = res.url;
          }
          ipfsPin(pinData.item, 'ipfs', '', periodValue.value[0]);
          if (orderInfo.value.device_type == 'space' || orderInfo.value.device_type == 3) {
            if (+pinData.item.originalSize > orderInfo.value.total_space * 0.01) {
            } else {
              ipfsPin(pinData.item, 'ipfs', '', periodValue.value[0]);
              showToast.text('IPFS link will available later.');
            }
          } else {
            showToast.text('IPFS link will available later');
          }
          loading.value = false;
          isReady.value = true;
        } else {
          loading.value = false;
        }
      } else if (err) {
        loading.value = false;
      }
    });
  };
  return {
    ipfsPin,
    loading,
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
  };
}

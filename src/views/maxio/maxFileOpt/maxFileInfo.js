import { s3Url, poolUrl, maxUrl } from '@/setting.js';

// import * as Prox from '@/pb/net_pb.js';
import * as Prox from '@/pb/prox_pb.js';
import * as grpcService from '@/pb/net_grpc_web_pb.js';
import { get_vood_token } from '@/api/index';
import { showToast, showDialog } from '@nutui/nutui';
import { useUserStore } from '@/store/modules/user';
const userStore = useUserStore();
import moment from 'moment';
import { getfilesize } from '@/utils/util';
import { Base64 } from 'js-base64';
import { HmacSHA1, enc } from 'crypto-js';
const MaxTokenMap = computed(() => userStore.getMaxTokenMap);

export default function initMaxFile() {
  const accessKeyId = ref('');
  const secretAccessKey = ref('');
  const isMobileDevice = computed(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    // 此正则表达式涵盖了大多数使用的手机和平板设备
    return /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent.toLowerCase());
  });
  const periodValue = ref(isMobileDevice.value ? [3600] : 3600);
  const isGetHeader = ref(false);
  const isError = ref(false);
  const filesCount = ref(0);
  const loadingAnmation = ref(false);
  const usedSize = ref(0);

  const header = ref({});
  const initSk = async (deviceData, _token) => {
    // console.log(deviceData, 'initSk');
    if (!deviceData.device_id) {
      return;
    }
    let server = new grpcService.default.APIClient(maxUrl, null, null);
    header.value = new Prox.default.ProxHeader();
    header.value.setPeerid(deviceData.peer_id);
    header.value.setId(deviceData.foggie_id);
    header.value.setToken(_token);
    const appType = import.meta.env.VITE_BUILD_TYPE == 'ANDROID' ? 'android' : 'h5';
    header.value.setApptype(appType);
    let request = new Prox.default.ProxGetCredRequest();
    request.setHeader(header.value);
    let date = moment.utc(new Date().getTime()).format('YYYYMMDDTHHmmss');
    let metadata = {
      'X-Custom-Date': date + 'Z',
      'X-Sid': deviceData.peer_id,
    };
    server.listCreds(request, metadata, (err, res) => {
      if (err) {
        isError.value = true;
        console.log('listCreds------111222:', err);
      } else if (res.array.length > 0) {
        accessKeyId.value = res.array[0][0][0];
        secretAccessKey.value = res.array[0][0][1];
        // console.log(res.array[0][0][1], 'secretAccessKey111111111', res.array[0][0][0]);
      }
    });
  };
  const getSummary = (deviceData, _token) => {
    // console.log(deviceData.device_id, deviceData, 'getSummary');
    if (!deviceData.device_id) {
      return;
    }
    return new Promise((resolve, reject) => {
      let server = new grpcService.default.APIClient(maxUrl, null, null);
      header.value = new Prox.default.ProxHeader();
      header.value.setPeerid(deviceData.peer_id);
      header.value.setId(deviceData.foggie_id);
      header.value.setToken(_token);
      const appType = import.meta.env.VITE_BUILD_TYPE == 'ANDROID' ? 'android' : 'h5';
      header.value.setApptype(appType);
      let request = new Prox.default.ProxRequestSummaryIds();
      request.setHeader(header.value);
      let date = moment.utc(new Date().getTime()).format('YYYYMMDDTHHmmss');
      let metadata = {
        'X-Custom-Date': date + 'Z',
        'X-Sid': deviceData.peer_id,
      };

      request.setIdsList([deviceData.foggie_id]);
      //   console.log(request, 'getSummarygetSummarygetSummary', deviceData);
      server.summaryInfo(request, metadata, (err, res) => {
        if (err) {
          console.log('summaryInfo---err---:', err);
          // reject(false);
          resolve(false);
        } else {
          const contentList = res.getContentsList().map((el) => {
            return {
              count: el.getCount(),
              id: el.getId(),
              total: el.getTotal(),
            };
          });
          filesCount.value = contentList?.[0]?.count || 0;
          usedSize.value = contentList?.[0]?.total || 0;
          console.log('getSummary', filesCount.value, usedSize.value);
        }
      });
    });
  };
  const getHttpShare = (awsAccessKeyId, awsSecretAccessKey, keyName, thumb, deviceData) => {
    const objectKey = encodeURIComponent(keyName);
    // const baseUrl = `http://154.31.41.36:9900`;//9009
    const baseUrl = maxUrl;
    let token = MaxTokenMap.value[deviceData.device_id];
    token = Base64.encode(token.split(' ')[1]);
    if (thumb) {
      let str = `${baseUrl}/o/${deviceData.peer_id}/${deviceData.foggie_id}/${objectKey}?thumb=true&token=${token}`;
      return str;
    }
    let str = `${baseUrl}/o/${deviceData.peer_id}/${deviceData.foggie_id}/${objectKey}?token=${token}`;
    return str;
  };
  const showShareDialog = ref(false);
  const httpCopyLink = ref('');
  const confirmHttpShare = async (deviceData, MaxTokenMap, periodValue, chooseItem) => {
    let token = MaxTokenMap[deviceData.device_id];

    let _token = token.split(' ')[1];
    let server = new grpcService.default.APIClient(maxUrl, null, null);
    header.value = new Prox.default.ProxHeader();
    header.value.setPeerid(deviceData.peer_id);
    header.value.setId(deviceData.foggie_id);
    header.value.setToken(_token);
    const appType = import.meta.env.VITE_BUILD_TYPE == 'ANDROID' ? 'android' : 'h5';
    header.value.setApptype(appType);
    let request = new Prox.default.ProxGExtractCode();
    request.setHeader(header.value);
    request.setCid(chooseItem.cid);
    request.setKey(encodeURIComponent(chooseItem.key));
    let exp = periodValue[0].toString();
    request.setExp(periodValue[0]);
    console.log(deviceData, deviceData.device_id, MaxTokenMap, periodValue[0], exp, chooseItem.cid, chooseItem.key);
    // string cid = 2;
    // string key = 3;
    // string exp = 4;

    let date = moment.utc(new Date().getTime()).format('YYYYMMDDTHHmmss');
    let metadata = {
      'X-Custom-Date': date + 'Z',
      'X-Sid': deviceData.peer_id,
    };
    console.log(request, header.value);
    server.generateExtractCode(request, metadata, (err, res) => {
      if (err) {
        isError.value = true;
        console.log('generateExtractCode------111222:', err);
      } else if (res) {
        console.log(res, 'resss');
      }
    });

    showShareDialog.value = false;
    let link = 'cqy dameilv';
    httpCopyLink.value = link;
    let src = require('@/assets/svg/home/http2.svg');
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
        copyLink(httpCopyLink.value);
        httpCopyLink.value = '';
        showShareDialog.value = false;
      },
      beforeClose: () => {
        httpCopyLink.value = '';
        showShareDialog.value = false;
        return true;
      },
    });
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
  watch(showShareDialog, (val) => {
    if (!val) {
      periodValue.value = isMobileDevice.value ? [3600] : 3600;
    }
  });
  return {
    accessKeyId,
    secretAccessKey,
    getHttpShare,
    initSk,
    getSummary,
    confirmHttpShare,
    showShareDialog,
    httpCopyLink,
    copyLink,
    periodValue,
  };
}

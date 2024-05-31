import { s3Url, poolUrl, maxUrl } from '@/setting.js';

import * as Prox from '@/pb/net_pb.js';
import * as grpcService from '@/pb/net_grpc_web_pb.js';

import { showToast, showDialog } from '@nutui/nutui';
import { useUserStore } from '@/store/modules/user';
const userStore = useUserStore();
import moment from 'moment';
import { getfilesize } from '@/utils/util';
import { Base64 } from 'js-base64';
import { HmacSHA1, enc } from 'crypto-js';
const MaxTokenMap = computed(() => userStore.getMaxTokenMap);
const MyAkList = computed(() => userStore.getMyAkList);

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
    if (!deviceData.device_id) {
      return;
    }
    if (MyAkList.value && MyAkList.value.secretAccessKey) {
      accessKeyId.value = MyAkList.value.accessKeyId;
      secretAccessKey.value = MyAkList.value.secretAccessKey;
    } else {
      console.log(MyAkList.value, ' MyAkList.value');
      let server = new grpcService.default.APIClient(maxUrl, null, null);
      header.value = new Prox.default.Header();
      header.value.setPeerid(deviceData.peer_id);
      header.value.setId(deviceData.foggie_id);
      header.value.setToken(_token);
      const appType = import.meta.env.VITE_BUILD_TYPE == 'ANDROID' ? 'android' : 'h5';
      header.value.setApptype(appType);
      let request = new Prox.default.GetCredRequest();
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
          // console.log('listCreds------success:', res.array);
          accessKeyId.value = res.array[0][0][0];
          secretAccessKey.value = res.array[0][0][1];
          userStore.setMyAkList({
            accessKeyId: accessKeyId.value,
            secretAccessKey: secretAccessKey.value,
          });
          // console.log(res.array[0][0][1], 'secretAccessKey111111111', res.array[0][0][0]);
        }
      });
    }
  };
  const getSummary = (deviceData, _token) => {
    if (!deviceData.device_id) {
      return;
    }
    return new Promise((resolve, reject) => {
      let server = new grpcService.default.APIClient(maxUrl, null, null);
      header.value = new Prox.default.Header();
      header.value.setPeerid(deviceData.peer_id);
      header.value.setId(deviceData.foggie_id);
      header.value.setToken(_token);
      const appType = import.meta.env.VITE_BUILD_TYPE == 'ANDROID' ? 'android' : 'h5';
      header.value.setApptype(appType);
      let request = new Prox.default.RequestSummaryIds();
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
  const getHttpShare = (awsAccessKeyId, awsSecretAccessKey, keyName, thumb, deviceData, item) => {
    // console.log(awsAccessKeyId, awsSecretAccessKey, item, 'itemitem', item.key);
    // 构建要签名的字符串
    const objectKey = encodeURIComponent(keyName);
    const date = new Date().toUTCString();
    const httpMethod = 'GET'; // HTTP 方法，GET
    const contentType = 'application/octet-stream'; // 可选：设置 Content-Type 标头 为：“application/octet-stream”
    const contentMd5 = ''; // 可选：设置 Content-MD5 标头。，设置为“”
    const canonicalizedAmzHeaders = ''; // 可选：设置自定义标头，设置为“”
    const canonicalizedResource = `${keyName}`; // 文件名称，encode 之前的key
    const expirationTime = Math.floor(Date.now() / 1000) + (isMobileDevice.value ? periodValue.value[0] : periodValue.value);
    const signature = `${httpMethod}\n${contentMd5}\n${contentType}\n${expirationTime}\n${canonicalizedAmzHeaders}\n${canonicalizedResource}`;

    // 如果存在thumb 选项 不需要加入到signature中

    // 计算签名
    let hmac = HmacSHA1(signature, awsSecretAccessKey);
    let signatureBase64 = enc.Base64.stringify(hmac);

    signatureBase64 = encodeURIComponent(signatureBase64);
    // const url = `http://xxx/o/peerid/foggieid/key/${objectKey}?AWSAccessKeyId="xxx"&Expires="xxx"&Signature="xxx"`;
    if (thumb) {
      //   let str = `${baseUrl}/o/${deviceData.peer_id}/${deviceData.foggie_id}/${objectKey}?thumb=true&token=${token}`;
      let str = `${maxUrl}/o/${deviceData.peer_id}/${deviceData.foggie_id}/${objectKey}?AWSAccessKeyId=${awsAccessKeyId}&Expires=${expirationTime}&Signature=${signatureBase64}&thumb=true`;
      //   console.log(signature, 'signature', awsAccessKeyId);
      return str;
    }
    let str = `${maxUrl}/o/${deviceData.peer_id}/${deviceData.foggie_id}/${objectKey}?AWSAccessKeyId=${awsAccessKeyId}&Expires=${expirationTime}&Signature=${signatureBase64}`;
    return str;
  };
  const showShareDialog = ref(false);
  const httpCopyLink = ref('');
  const confirmHttpShare = async (deviceData, MaxTokenMap, periodValue, chooseItem) => {
    let token = MaxTokenMap[deviceData.device_id];

    let _token = token.split(' ')[1];
    let server = new grpcService.default.APIClient(maxUrl, null, null);
    header.value = new Prox.default.Header();
    header.value.setPeerid(deviceData.peer_id);
    header.value.setId(deviceData.foggie_id);
    header.value.setToken(_token);
    const appType = import.meta.env.VITE_BUILD_TYPE == 'ANDROID' ? 'android' : 'h5';
    header.value.setApptype(appType);
    let request = new Prox.default.GExtractCode();
    request.setHeader(header.value);
    request.setCid(chooseItem.cid);
    // request.setKey(encodeURIComponent(chooseItem.key));
    let exp = periodValue[0].toString();
    let _date = new Date().getTime() + periodValue[0] * 1000;
    let _tdate = moment.utc(_date).format('YYYY-MM-DDTHH:mm:ss');
    let _exp = _tdate + 'Z';
    request.setExp(_exp);

    let date = moment.utc(new Date().getTime()).format('YYYYMMDDTHHmmss');
    let metadata = {
      'X-Custom-Date': date + 'Z',
      'X-Sid': deviceData.peer_id,
    };
    console.log(
      'generateExtractCode------generateExtractCode------generateExtractCode------',
      request,
      header.value,
      new Date().getTime(),
      periodValue[0],
      _date,
      _exp,
    );
    server.generateExtractCode(request, metadata, (err, res) => {
      if (err) {
        isError.value = true;
        showShareDialog.value = false;
        console.log('generateExtractCode------111222:', err);
      } else if (res) {
        console.log('generateExtractCode--resss', res, res.array, res.array[0]);
        let code = res.array && res.array.length && res.array[0];
        let _str = `foggie://${deviceData.peer_id}/${deviceData.foggie_id}/${chooseItem.cid}?pwd=${code}`;
        // foggie://peerid/foggieid/cid?pwd=xxxx
        showShareDialog.value = false;
        httpCopyLink.value = _str;
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
      }
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

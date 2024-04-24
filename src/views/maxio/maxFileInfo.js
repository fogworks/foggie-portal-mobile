import { s3Url, poolUrl, maxUrl } from '@/setting.js';

import * as Prox from '@/pb/net_pb.js';
import * as grpcService from '@/pb/net_grpc_web_pb.js';

import { get_vood_token } from '@/api/index';
import { useUserStore } from '@/store/modules/user';
const userStore = useUserStore();
import moment from 'moment';
import { getfilesize } from '@/utils/util';

export default function initMaxFile(deviceData) {
  const accessKeyId = ref('');
  const secretAccessKey = ref('');
  const getSummary = () => {
    return new Promise((resolve, reject) => {
      let server = new grpcService.default.ServiceClient(maxUrl, null, null);
      let request = new Prox.default.ProxRequestSummaryIds();
      request.setHeader(header.value);

      request.setIdsList([orderInfo.value.foggie_id]);

      console.log(`https://${bucketName.value}.${poolUrl}:7007`, 'bucketNamebucketNamebucketNamebucketName');

      server.summaryInfo(request, metadata.value, (err, res) => {
        if (err) {
          console.log('errsummry------:', err);
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
          resolve(contentList?.[0]?.total || 0);
        }
      });
    });
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
  return { accessKeyId, getSummary, secretAccessKey, getHttpShare };
}

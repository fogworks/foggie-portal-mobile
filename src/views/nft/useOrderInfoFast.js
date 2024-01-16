import { get_unique_order, get_order_sign } from '@/api/index';
import { useRoute } from 'vue-router';
import { useUserStore } from '@/store/modules/user';
import * as Prox from '@/pb/prox_pb.js';
import * as grpcService from '@/pb/prox_grpc_web_pb.js';
import loadingImg from '@/components/loadingImg/index.vue';
import { showToast } from '@nutui/nutui';
import { poolUrl } from '@/setting.js';

export default function useOrderInfo() {
  const store = useUserStore();
  const orderInfo = reactive({
    value: {},
  });
  const bucketName = ref('');
  const accessKeyId = ref('');
  const secretAccessKey = ref('');
  const filesCount = ref(0);
  const usedSize = ref(0);
  let header = new Prox.default.ProxHeader();
  let metadata = ref({});
  const deviceType = computed(() => orderInfo.value.device_type);
  const token = computed(() => {
    if (deviceType.value == 'space') {
      return orderInfo.value.upload_file_token;
    } else if (deviceType.value === 3) {
      return orderInfo.value.sign;
    }
  });
  const route = useRoute();
  const getOrderInfo = async (getKey = true, uuid) => {
    showToast.loading('Loading', {
      cover: true,
      customClass: 'app_loading',
      icon: loadingImg,
      loadingRotate: false,
      id: 'order_info_id',
    });
    let res = await get_unique_order({ order_uuid: uuid });

    let param = {
      order_uuid: uuid,
    };
    const signData = await get_order_sign(param);

    orderInfo.value = res.result.data;
    orderInfo.value.used_space = 0;
    // orderInfo.value.rpc = '218.2.96.99:6007';
    header.setPeerid(orderInfo.value.peer_id);
    header.setId(orderInfo.value.foggie_id);
    const appType = import.meta.env.VITE_BUILD_TYPE == 'ANDROID' ? 'android' : 'h5';
    header.setApptype(appType);
    
    // header.setId('baeqacmjq');
    // header.setToken(orderInfo.value.sign);
    // console.log('signData==11:', signData);
    let cur_token = signData?.result?.data?.sign;
    const date = signData?.result?.data?.timestamp;
    metadata.value = {
      'X-Custom-Date': date,
    };

    // console.log('cur_token==11:', cur_token);
    header.setToken(cur_token);

    bucketName.value = orderInfo.value.domain;
    orderInfo.value.used_space = 0;
    if (bucketName.value && getKey) {
      return new Promise((resolve, reject) => {
        let server = new grpcService.default.ServiceClient(`https://${bucketName.value}.${poolUrl}:7007`, null, null);
        let request = new Prox.default.ProxGetCredRequest();
        request.setHeader(header);
        server.listCreds(request, metadata.value, (err, res) => {
          if (err) {
            console.log('err------111222:', err);
            showToast.hide('order_info_id');
            reject(false);
          } else if (res.array.length > 0) {
            accessKeyId.value = res.array[0][0][0];
            secretAccessKey.value = res.array[0][0][1];
            showToast.hide('order_info_id');
            resolve(true);
          }
        });
      });
    } else {
      showToast.hide('order_info_id');
      return true;
    }
  };
  const getSummary = () => {
    return new Promise((resolve, reject) => {
      let server = new grpcService.default.ServiceClient(`https://${bucketName.value}.${poolUrl}:7007`, null, null);
      let request = new Prox.default.ProxRequestSummaryIds();
      request.setHeader(header);

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

  return {
    getSummary,
    bucketName,
    orderInfo,
    deviceType,
    getOrderInfo,
    filesCount,
    usedSize,
    token,
    header,
    metadata,
    accessKeyId,
    secretAccessKey,
  };
}

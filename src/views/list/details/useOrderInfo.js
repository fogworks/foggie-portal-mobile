import { get_unique_order, get_order_sign } from '@/api/index';
import { useRoute } from 'vue-router';
import { useUserStore } from '@/store/modules/user';
import { useOrderStore } from '@/store/modules/order';
import * as Prox from '@/pb/prox_pb.js';
import * as grpcService from '@/pb/prox_grpc_web_pb.js';
import loadingImg from '@/components/loadingImg/index.vue';
import { showToast } from '@nutui/nutui';
import { poolUrl } from '@/setting.js';
import { storeToRefs } from 'pinia';

export default function useOrderInfo() {
  const store = useUserStore();
  const orderStore = useOrderStore();
  const { getOrderInfoList } = storeToRefs(orderStore);
  const orderInfo = reactive({
    value: {},
  });
  let orderSignInfo = ref({
    header: new Prox.default.ProxHeader(),
    secretAccessKey: '',
    accessKeyId: '',
    metadata: {},
  });
  const orderInfo2 = computed(() => getOrderInfoList.value(orderInfo.value?.uuid));
  let headerProx = new Prox.default.ProxHeader();
  // let header = new Prox.default.ProxHeader();
  const header = computed(() => orderInfo2.value?.header);
  const secretAccessKey = computed(() => orderInfo2.value?.secretAccessKey);
  const accessKeyId = computed(() => orderInfo2.value?.accessKeyId);
  const metadata = computed(() => orderInfo2.value?.metadata);
  const bucketName = ref('');
  // const accessKeyId = ref('');
  // const secretAccessKey = ref('');
  const filesCount = ref(0);
  const usedSize = ref(0);
  const isError = ref(false);
  // let metadata = ref({});
  const deviceType = computed(() => orderInfo.value.device_type);
  const isAvailableOrder = computed(() => {
    if (
      [4, 5].includes(orderInfo.value.state)
      // || !merkleState.value
    ) {
      return false;
    } else {
      return true;
    }
  });
  const token = computed(() => {
    if (deviceType.value == 'space') {
      return orderInfo.value.upload_file_token;
    } else if (deviceType.value === 3) {
      return orderInfo.value.sign;
    }
  });
  const route = useRoute();
  const getOrderInfo = async (getKey = true, uuid = '') => {
    showToast.loading('Loading', {
      cover: true,
      customClass: 'app_loading',
      icon: loadingImg,
      loadingRotate: false,
      id: 'order_info_id',
      // coverColor: 'rgba(0,0,0,0.45)',
      duration: 0,
    });
    try {
      let res = await get_unique_order({ order_uuid: uuid || route?.query?.uuid });
      orderInfo.value = res.result.data;
      bucketName.value = orderInfo.value.domain;
      orderInfo.value.used_space = 0;
      if (!isError.value && header.value && accessKeyId.value && secretAccessKey.value && metadata.value) {
        showToast.hide('order_info_id');
        return true;
      }
      let param = {
        order_uuid: uuid || route?.query?.uuid,
      };
      const signData = await get_order_sign(param);

      // orderInfo.value.rpc = '218.2.96.99:6007';
      headerProx.setPeerid(orderInfo.value.peer_id);
      headerProx.setId(orderInfo.value.foggie_id);
      const appType = import.meta.env.VITE_BUILD_TYPE == 'ANDROID' ? 'android' : 'h5';
      headerProx.setApptype(appType);
      // header.setId('baeqacmjq');
      // header.setToken(orderInfo.value.sign);
      // console.log('signData==11:', signData);
      let cur_token = signData?.result?.data?.sign;
      const date = signData?.result?.data?.timestamp;
      orderSignInfo.value.metadata = {
        'X-Custom-Date': date,
      };

      // console.log('cur_token==11:', cur_token);
      headerProx.setToken(cur_token);
      orderSignInfo.value.header = headerProx;
      await orderStore.setOrderInfoList(uuid || orderInfo.value.uuid, orderSignInfo.value);
      orderInfo.value.used_space = 0;
    } catch {
      isError.value = true;
      showToast.hide('order_info_id');
    }
    if (bucketName.value && getKey) {
      return new Promise((resolve, reject) => {
        let server = new grpcService.default.ServiceClient(`https://${bucketName.value}.${poolUrl}:7007`, null, null);
        let request = new Prox.default.ProxGetCredRequest();
        request.setHeader(orderSignInfo.value.header ? orderSignInfo.value.header : header.value);
        // console.log('metadata==11:', request, metadata.value);
        server.listCreds(request, metadata.value, async (err, res) => {
          if (err) {
            isError.value = true;
            console.log('err------111222:', err);
            showToast.hide('order_info_id');
            reject(false);
          } else if (res.array.length > 0) {
            // accessKeyId.value = res.array[0][0][0];
            // secretAccessKey.value = res.array[0][0][1];
            orderSignInfo.value.accessKeyId = res.array[0][0][0];
            orderSignInfo.value.secretAccessKey = res.array[0][0][1];
            await orderStore.setOrderInfoList(orderInfo.value.uuid, orderSignInfo.value);
            showToast.hide('order_info_id');
            console.log(secretAccessKey.value, 'secretAccessKey111111111');
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

  return {
    isAvailableOrder,
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
    isError,
  };
}

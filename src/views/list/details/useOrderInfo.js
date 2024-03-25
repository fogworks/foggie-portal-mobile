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
  const header = computed(() => {
    let headerProx2 = new Prox.default.ProxHeader();
    headerProx2.setPeerid(orderInfo2.value?.header?.array?.[0]);
    headerProx2.setId(orderInfo2.value?.header?.array?.[1]);
    headerProx2.setToken(orderInfo2.value?.header?.array?.[2]);
    headerProx2.setApptype(orderInfo2.value?.header?.array?.[3]);
    return headerProx2;
  });
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
      const resData = res.result.data;
      // orderInfo.value.amb_uuid = resData.amb_uuid;
      // orderInfo.value.benchmark = resData.benchmark;
      // orderInfo.value.bill_id = resData.bill_id;
      // orderInfo.value.created_at = resData.created_at;
      // orderInfo.value.device_type = resData.device_type;
      // orderInfo.value.domain = resData.domain;
      // orderInfo.value.electronic_type = resData.electronic_type;
      // orderInfo.value.expire = resData.expire;
      // orderInfo.value.fault = resData.fault;
      // orderInfo.value.foggie_id = resData.foggie_id;
      // orderInfo.value.foggie_version = resData.foggie_version;
      // orderInfo.value.id = resData.id;
      // orderInfo.value.income = resData.income;
      // orderInfo.value.is_domain = resData.is_domain;
      // orderInfo.value.memo = resData.memo;
      // orderInfo.value.miner = resData.miner;
      // orderInfo.value.mp_address = resData.mp_address;
      // orderInfo.value.mp_domain = resData.mp_domain;
      // orderInfo.value.orderId = resData.orderId;
      // orderInfo.value.order_created_at = resData.order_created_at;
      // orderInfo.value.peer_id = resData.peer_id;
      // orderInfo.value.pool_type = resData.pool_type;
      // orderInfo.value.pool_wallet_acc = resData.pool_wallet_acc;
      // orderInfo.value.price = resData.price;
      // orderInfo.value.pst = resData.pst;
      // orderInfo.value.result = resData.result;
      // orderInfo.value.rpc = resData.rpc;
      // orderInfo.value.sign = resData.sign;
      // orderInfo.value.state = resData.state;
      // orderInfo.value.total_price = resData.total_price;
      // orderInfo.value.total_space = resData.total_space;
      // orderInfo.value.transaction_id = resData.transaction_id;
      // orderInfo.value.used_space = resData.used_space;
      // orderInfo.value.user = resData.user;
      // orderInfo.value.uuid = resData.uuid;
      orderInfo.value = resData;
      bucketName.value = orderInfo.value.domain;
      orderInfo.value.used_space = 0;
      if (!isError.value && header.value && accessKeyId.value && secretAccessKey.value && metadata.value) {
        console.log(orderInfo.value?.uuid, 'orderInfo.value?.uuid;');
        console.log(orderInfo2.value, 'orderInfo2');
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
        console.log('metadata==11:', request, metadata.value);
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
            console.log(orderSignInfo.value, 'orderSignInfo.value');
            await orderStore.setOrderInfoList(orderInfo.value.uuid, JSON.parse(JSON.stringify(orderSignInfo.value)));
            // await orderStore.setOrderInfoList(orderInfo.value.uuid, orderSignInfo.value);
            showToast.hide('order_info_id');
            console.log(res.array[0][0][1], 'secretAccessKey111111111');
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

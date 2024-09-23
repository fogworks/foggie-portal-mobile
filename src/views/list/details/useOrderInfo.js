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
  const orderId = ref('');
  const orderInfo2 = computed(() => getOrderInfoList.value(orderId));
  let headerProx = new Prox.default.ProxHeader();
  // let header = new Prox.default.ProxHeader();
  // const header = computed(() => {
  //   let headerProx2 = new Prox.default.ProxHeader();
  //   headerProx2.setPeerid(orderInfo2.value?.header?.array?.[0]);
  //   headerProx2.setId(orderInfo2.value?.header?.array?.[1]);
  //   headerProx2.setToken(orderInfo2.value?.header?.array?.[2]);
  //   headerProx2.setApptype(orderInfo2.value?.header?.array?.[3]);
  //   return headerProx2;
  // });
  const header = computed(() => {
    let headerProx2 = new Prox.default.ProxHeader();
    headerProx2.setPeerid(orderSignInfo.value?.header?.array?.[0]);
    headerProx2.setId(orderSignInfo.value?.header?.array?.[1]);
    headerProx2.setToken(orderSignInfo.value?.header?.array?.[2]);
    headerProx2.setApptype(orderSignInfo.value?.header?.array?.[3]);
    return headerProx2;
  });
  const secretAccessKey = computed(() => orderSignInfo.value?.secretAccessKey);
  const accessKeyId = computed(() => orderSignInfo.value?.accessKeyId);
  const metadata = computed(() => orderSignInfo.value?.metadata);
  const bucketName = ref('');
  // const accessKeyId = ref('');
  // const secretAccessKey = ref('');
  const filesCount = ref(0);
  const loadingAnmation = ref(false);
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
    loadingAnmation.value = true;
    // showToast.loading('Loading', {
    //   cover: true,
    //   customClass: 'app_loading',
    //   icon: loadingImg,
    //   loadingRotate: false,
    //   id: 'order_info_id',
    //   // coverColor: 'rgba(0,0,0,0.45)',
    //   duration: 0,
    // });
    try {
      let res = await get_unique_order({ order_uuid: uuid || route?.query?.uuid });
      const resData = res.result.data;
      orderInfo.value = resData;
      bucketName.value = orderInfo.value.domain;
      orderInfo.value.used_space = 0;
      if (!isError.value && header.value && accessKeyId.value && secretAccessKey.value && metadata.value) {
        console.log(orderInfo.value?.uuid, 'orderInfo.value?.uuid;');
        console.log(orderInfo2.value, 'orderInfo2');
        showToast.hide('order_info_id');
        loadingAnmation.value = false;
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
      loadingAnmation.value = false;
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
            loadingAnmation.value = false;
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
            loadingAnmation.value = false;
            console.log(res.array[0][0][1], 'secretAccessKey111111111');
            resolve(true);
          }
        });
      });
    } else {
      showToast.hide('order_info_id');
      loadingAnmation.value = false;
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
          console.log('res.getContentsList()------:', res.getContentsList());

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


  const getSummary1 = (obj) => {
    let ip = obj.rpc.split(':')[0];
    let peer_id = obj.peer_id;
    let foggie_id = obj.foggie_id;
    let cur_token = obj.signature;
    let date = obj.sign_timestamp;
    let order_id = obj.order_id;
    let domain = obj.domain;

    bucketName.value = domain;
    orderId.value = obj.order_id;
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

  const getOrderInfo1 = async (obj) => {
    let ip = obj.rpc.split(':')[0];
    let peer_id = obj.peer_id;
    let foggie_id = obj.foggie_id;
    let cur_token = obj.signature;
    let date = obj.sign_timestamp;
    let order_id = obj.order_id;
    let domain = obj.domain;
    orderInfo.value = obj;

    bucketName.value = domain;
    orderId.value = obj.order_id;
    try {

      // orderInfo.value.rpc = '218.2.96.99:6007';
      headerProx.setPeerid(peer_id);
      headerProx.setId(foggie_id);
      const appType = import.meta.env.VITE_BUILD_TYPE == 'ANDROID' ? 'android' : 'h5';
      headerProx.setApptype(appType);
      orderSignInfo.value.metadata = {
        'X-Custom-Date': date,
      };
      headerProx.setToken(cur_token);
      orderSignInfo.value.header = headerProx;
    } catch {
      isError.value = true;
      showToast.hide('order_info_id');
      loadingAnmation.value = false;
    }
   
    return new Promise((resolve, reject) => {
      // let server = new grpcService.default.ServiceClient(`https://${ip}:7007`, null, null);
      let server = new grpcService.default.ServiceClient(`https://${domain}.${poolUrl}:7007`, null, null);

      let request = new Prox.default.ProxGetCredRequest();
      request.setHeader(orderSignInfo.value.header);

      console.log('metadata==22:', orderSignInfo.value.metadata);
      console.log('metadata==11:', request, orderSignInfo.value.header);
      server.listCreds(request, orderSignInfo.value.metadata, async (err, res) => {
        if (err) {
          isError.value = true;
          console.log('err------111222:', err);
          showToast.hide('order_info_id');
          loadingAnmation.value = false;
          reject(false);
        } else if (res.array.length > 0) {
          // accessKeyId.value = res.array[0][0][0];
          // secretAccessKey.value = res.array[0][0][1];
          orderSignInfo.value.accessKeyId = res.array[0][0][0];
          orderSignInfo.value.secretAccessKey = res.array[0][0][1];
          console.log(orderSignInfo.value, 'orderSignInfo.value');
          await orderStore.setOrderInfoList(order_id, JSON.parse(JSON.stringify(orderSignInfo.value)));
          // await orderStore.setOrderInfoList(orderInfo.value.uuid, orderSignInfo.value);
          showToast.hide('order_info_id');
          loadingAnmation.value = false;
          console.log(res.array[0][0][1], 'secretAccessKey111111111');
          resolve(true);
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
    getOrderInfo1,
    filesCount,
    usedSize,
    token,
    header,
    metadata,
    accessKeyId,
    secretAccessKey,
    isError,
    loadingAnmation,
  };
}

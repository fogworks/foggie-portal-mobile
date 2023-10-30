import { get_unique_order } from '@/api/index.ts';
import { useRoute } from 'vue-router';
import { useUserStore } from '@/store/modules/user';
import * as Prox from '@/pb/prox_pb.js';
import * as grpcService from '@/pb/prox_grpc_web_pb.js';
import loadingImg from '@/components/loadingImg/index.vue';
import { showToast } from '@nutui/nutui';

export default function useOrderInfo() {
  const store = useUserStore();
  const orderInfo = reactive({
    value: {},
  });
  const bucketName = ref('');
  const accessKeyId = ref('');
  const secretAccessKey = ref('');
  let header = new Prox.default.ProxHeader();
  const deviceType = computed(() => orderInfo.value.device_type);
  const token = computed(() => {
    if (deviceType.value == 'space') {
      return orderInfo.value.upload_file_token;
    } else if (deviceType.value === 3) {
      return orderInfo.value.sign;
    }
  });
  const route = useRoute();
  const getOrderInfo = async (getKey = true) => {
    showToast.loading('Loading', {
      cover: true,
      customClass: 'app_loading',
      icon: loadingImg,
      loadingRotate: false,
      id: 'order_info_id',
    });
    let res = await get_unique_order({ order_uuid: route?.query?.uuid });
    orderInfo.value = res.result.data;
    // orderInfo.value.rpc = '218.2.96.99:6007';
    header.setPeerid(orderInfo.value.peer_id);
    header.setId(orderInfo.value.foggie_id);
    // header.setId('baeqacmjq');
    header.setToken(orderInfo.value.sign);
    bucketName.value = orderInfo.value.domain;
    if (bucketName.value && getKey) {
      return new Promise((resolve, reject) => {
        let server = new grpcService.default.ServiceClient(`http://${bucketName.value}.devus.u2i.net:7007`, null, null);
        let request = new Prox.default.ProxGetCredRequest();
        request.setHeader(header);
        server.listCreds(request, {}, (err, res) => {
          if (err) {
            console.log('err------111:', err);
            showToast.hide('order_info_id');
            reject(false);
          } else if (res.array.length > 0) {
            accessKeyId.value = res.array[0][0][0];
            secretAccessKey.value = res.array[0][0][1];
            showToast.hide('order_info_id');
            console.log('ak ---- sk:', accessKeyId.value, secretAccessKey.value);
            resolve(true);
          }
        });
      });
    } else {
      showToast.hide('order_info_id');
      return true;
    }
  };

  return {
    bucketName,
    orderInfo,
    deviceType,
    getOrderInfo,
    token,
    header,
    accessKeyId,
    secretAccessKey,
  };
}

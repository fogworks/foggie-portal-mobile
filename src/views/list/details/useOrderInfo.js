import { get_unique_order } from '@/api/index.ts';
import { useRoute } from 'vue-router';
import { useUserStore } from '@/store/modules/user';
import * as Prox from '@/pb/prox_pb.js';
export default function useOrderInfo() {
  const store = useUserStore();
  const orderInfo = reactive({
    value: {},
  });
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
  const getOrderInfo = async () => {
    await get_unique_order({ order_uuid: route?.query?.uuid }).then((res) => {
      orderInfo.value = res.result.data;
      // orderInfo.value.rpc = '218.2.96.99:6007';
      header.setPeerid(orderInfo.value.peer_id);
      header.setId(orderInfo.value.foggie_id);
      // header.setId('baeqacmjq');
      header.setToken(orderInfo.value.sign);
    });
  };
  return {
    orderInfo,
    deviceType,
    getOrderInfo,
    token,
    header,
  };
}

import { get_unique_order } from '@/api/index.ts';
import { useRoute } from 'vue-router';
export default function useOrderInfo() {
  const orderInfo = reactive({
    value: {},
  });
  const route = useRoute();
  const getOrderInfo = async () => {
    await get_unique_order({ order_uuid: route?.query?.uuid }).then((res) => {
      orderInfo.value = res.result.data;
    });
  };
  return {
    orderInfo,
    getOrderInfo,
  };
}

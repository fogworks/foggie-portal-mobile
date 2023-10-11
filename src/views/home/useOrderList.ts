import { search_cloud } from '@/api';
import { useOrderStore } from '@/store/modules/order';
import { showToast } from '@nutui/nutui';
import '@nutui/nutui/dist/packages/toast/style';
import { transferUTCTime } from '@/utils/util';

export default function useOrderList() {
  const shortcuts = {
    0: () => {
      return ['', ''];
    },
    1: () => {
      const end = new Date();
      const start = new Date();
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
      return [transferUTCTime(start), transferUTCTime(end)];
    },
    2: () => {
      const end = new Date();
      const start = new Date();
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
      return [transferUTCTime(start), transferUTCTime(end)];
    },
    3: () => {
      const end = new Date();
      const start = new Date();
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
      return [transferUTCTime(start), transferUTCTime(end)];
    },
    4: () => {
      const end = new Date();
      const start = new Date();
      start.setTime(start.getTime() - 3600 * 1000 * 24);
      return [transferUTCTime(start), transferUTCTime(end)];
    },
  };
  const cloudSpaceList = ref([]);
  const orderStore = useOrderStore();
  const listData = computed(() => {
    return orderStore.getOrderList;
  });
  const total = ref(0);
  const hasMore = computed(() => {
    return total.value > pn.value * ps.value;
  });
  const infinityValue = ref(false);
  const pn = ref(1);
  const ps = ref(10);
  const resetData = () => {
    pn.value = 1;
    total.value = 0;
    orderStore.setOrderList([]);
  };
  const loadMore = async (order_state = null, start_time = '', end_time = '', buy_result = 'success') => {
    showToast.loading('Loading', {
      cover: true,
    });
    await search_cloud({ ps: ps.value, pn: pn.value, order_state, start_time, end_time, buy_result })
      .then((res) => {
        total.value = res.result.total;
        const cloudList = res.result.data.filter((el) => {
          const target = cloudSpaceList.value.find((item) => item.order_id == el.order_id);
          if (!target) {
            el.notThisClient = true;
          }
          return true;
        });
        pn.value++;
        orderStore.setOrderList([...listData.value, ...cloudList]);
      })
      .finally(() => {
        showToast.hide();
      });
  };
  return {
    loadMore,
    listData,
    resetData,
    hasMore,
    infinityValue,
    shortcuts,
  };
}

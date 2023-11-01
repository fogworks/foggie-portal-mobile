import { get_user_withdraw } from '@/api/amb';
import { useOrderStore } from '@/store/modules/order';
import { showToast } from '@nutui/nutui';
import '@nutui/nutui/dist/packages/toast/style';
import loadingImg from '@/components/loadingImg/index.vue';

import { transferUTCTimeDay } from '@/utils/util';

export default function useOrderList() {
  const shortcuts = {
    0: () => {
      return ['', ''];
    },
    1: () => {
      const end = new Date();
      const start = new Date();
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
      return [transferUTCTimeDay(start), transferUTCTimeDay(end)];
    },
    2: () => {
      const end = new Date();
      const start = new Date();
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
      return [transferUTCTimeDay(start), transferUTCTimeDay(end)];
    },
    3: () => {
      const end = new Date();
      const start = new Date();
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
      return [transferUTCTimeDay(start), transferUTCTimeDay(end)];
    },
    4: () => {
      const end = new Date();
      const start = new Date();
      start.setTime(start.getTime() - 3600 * 1000 * 24);
      return [transferUTCTimeDay(start), transferUTCTimeDay(end)];
    },
  };
  const cloudSpaceList = ref([]);
  const orderStore = useOrderStore();
  const withdrawListData = ref([] as any);
  const total = ref(0);
  const hasMore = computed(() => {
    return total.value > pn.value * ps.value;
  });
  const infinityValue = ref(false);
  const pn = ref(1);
  const ps = ref(10);
  const resetWithdrawData = () => {
    pn.value = 1;
    total.value = 0;
    orderStore.setOrderList([]);
  };
  const getWithdrawList = async (start_time = '', end_time = '') => {
    showToast.loading('Loading', {
      cover: true,
      customClass: 'app_loading',
      icon: loadingImg,
      loadingRotate: false,
    });
    await get_user_withdraw({ ps: ps.value, pn: pn.value, start_time, end_time })
      .then((res) => {
        total.value = res.result.total;
        const cloudList = res.result.data;
        pn.value++;
        withdrawListData.value = [...withdrawListData.value, ...cloudList];
      })
      .finally(() => {
        showToast.hide();
      });
  };
  return {
    getWithdrawList,
    withdrawListData,
    resetWithdrawData,
    hasMore,
    infinityValue,
    shortcuts,
  };
}

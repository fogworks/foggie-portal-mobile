import { search_user_asset_detail } from '@/api/amb';
import { showToast } from '@nutui/nutui';
import { transferUTCTimeDay } from '@/utils/util';
import loadingImg from '@/components/loadingImg/index.vue';

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
  const listData = ref([] as any);
  const total = ref(0);
  const hasMore = computed(() => {
    return total.value > (pn.value - 1) * ps.value;
  });
  const infinityValue = ref(false);
  const pn = ref(1);
  const ps = ref(10);
  const resetData = () => {
    pn.value = 1;
    total.value = 0;
    listData.value = [];
  };
  const loadMore = async (start_time = '', end_time = '', type = 2, order_id) => {
    console.log(type);
    showToast.loading('Loading', {
      cover: true,
      customClass: 'app_loading',
      icon: loadingImg,
      loadingRotate: false,
    });
    if (type == 0) {
      await search_user_asset_detail({ start_time, end_time, trade_type: 'income', order_id, pn: pn.value, ps: ps.value })
        .then((res) => {
          total.value = res.result.total;
          const cloudList = res.result.data;
          pn.value++;
          listData.value = [...listData.value, ...cloudList];
          infinityValue.value = false;
        })
        .finally(() => {
          showToast.hide();
        });
    } else if (type == 1) {
      await search_user_asset_detail({ start_time, end_time, trade_type: 'payout', order_id, pn: pn.value, ps: ps.value })
        .then((res) => {
          total.value = res.result.total;
          const cloudList = res.result.data;
          pn.value++;
          listData.value = [...listData.value, ...cloudList];
          infinityValue.value = false;
        })
        .finally(() => {
          showToast.hide();
        });
    } else {
      await search_user_asset_detail({ start_time, end_time, trade_type: '', order_id, pn: pn.value, ps: ps.value })
        .then((res) => {
          total.value = res.result.total;
          const cloudList = res.result.data;
          pn.value++;
          listData.value = [...listData.value, ...cloudList];
          infinityValue.value = false;
        })
        .finally(() => {
          showToast.hide();
        });
    }
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

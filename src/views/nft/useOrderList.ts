import { search_cloud } from '@/api';
import { useOrderStore } from '@/store/modules/order';
import { showToast } from '@nutui/nutui';
import '@nutui/nutui/dist/packages/toast/style';
import { transferUTCTimeDay } from '@/utils/util';
import loadingImg from '@/components/loadingImg/index.vue';
import { useUserStore } from '@/store/modules/user';

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
  const useStore = useUserStore();
  const listData = ref([] as any);
  const total = ref(0);
  const hasMore = computed(() => {
    return total.value > (pn.value - 1) * ps.value;
  });
  const cloudCodeIsBind = computed(() => useStore.getCloudCodeIsBind);
  const infinityValue = ref(false);
  const isError = ref(false);
  const pn = ref(1);
  const ps = ref(10);
  const resetData = () => {
    pn.value = 1;
    total.value = 0;
    listData.value = [];
  };
  const loadMore = async (order_state = null, start_time = '', end_time = '', buy_result = 'success', postData = {}, type) => {
    // console.log(cloudCodeIsBind.value, 'cloudCodeIsBindcloudCodeIsBindcloudCodeIsBind');

    if (!cloudCodeIsBind.value) {
      return false;
    }
    if (!total.value) {
      showToast.loading('Loading', {
        cover: true,
        customClass: 'app_loading',
        icon: loadingImg,
        loadingRotate: false,
      });
    }
    if (type === 'search') {
      pn.value = 1;
      listData.value = [];
    }
    await search_cloud({ ps: ps.value, pn: pn.value, order_state, start_time, end_time, buy_result, ...postData })
      .then((res) => {
        total.value = res?.result?.total;
        const cloudList =
          res?.result?.data.filter((el) => {
            const target = cloudSpaceList.value.find((item) => item.order_id == el.order_id);
            if (!target) {
              el.notThisClient = true;
            }
            return true;
          }) || [];
        pn.value++;
        listData.value = [...listData.value, ...cloudList];
        infinityValue.value = false;
        isError.value = false;
      })
      .catch(() => {
        // pn.value--;
        if (pn.value == 1) isError.value = true;
      })
      .finally(() => {
        showToast.hide();
      });
  };
  return {
    isError,
    loadMore,
    listData,
    resetData,
    hasMore,
    infinityValue,
    shortcuts,
    total,
  };
}

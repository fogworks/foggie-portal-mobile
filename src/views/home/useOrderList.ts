import { search_cloud, get_order_sign } from '@/api';
import { useOrderStore } from '@/store/modules/order';
import { showToast } from '@nutui/nutui';
import '@nutui/nutui/dist/packages/toast/style';
import { transferUTCTimeDay } from '@/utils/util';
import loadingImg from '@/components/loadingImg/index.vue';
import { useUserStore } from '@/store/modules/user';
import * as Prox from '@/pb/prox_pb.js';
import * as grpcService from '@/pb/prox_grpc_web_pb.js';
import { poolUrl } from '@/setting.js';

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
  const loadMore = async (
    order_state = null,
    start_time = '',
    end_time = '',
    buy_result = 'success',
    postData = {},
    type,
    getUsedSpace = false,
  ) => {
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
        if (getUsedSpace) {
          getAllUsedSpace();
        }
      })
      .catch(() => {
        // pn.value--;
        if (pn.value == 1) isError.value = true;
      })
      .finally(() => {
        showToast.hide();
      });
  };
  const getAllUsedSpace = () => {
    let foggieIdObject = {};
    let rpcList = [];
    let uuidList = [];
    let bucketObject = {};
    let peerIdObject = {};
    listData.value.forEach((el) => {
      if (rpcList.indexOf(el.rpc) == -1 && el.domain) {
        rpcList.push(el.rpc);
        uuidList.push(el.uuid);
        bucketObject[el.rpc] = [];
        bucketObject[el.rpc].push(el.domain);
        foggieIdObject[el.rpc] = [];
        foggieIdObject[el.rpc].push(el.foggie_id);
        peerIdObject[el.rpc] = [];
        peerIdObject[el.rpc].push(el.peer_id);
      } else if (rpcList.indexOf(el.rpc) > -1 && el.domain) {
        foggieIdObject[el.rpc].push(el.foggie_id);
        peerIdObject[el.rpc].push(el.peer_id);
      }
    });
    console.log();

    rpcList.forEach(async (el, index) => {
      let metadata = {};

      let param = {
        order_uuid: uuidList[index],
      };
      let header = new Prox.default.ProxHeader();
      const signData = await get_order_sign(param);
      header.setPeerid(peerIdObject[el][0]);
      header.setId(foggieIdObject[el][0]);
      let cur_token = signData?.result?.data?.sign;
      const date = signData?.result?.data?.timestamp;
      metadata = {
        'X-Custom-Date': date,
      };
      header.setToken(cur_token);
      const appType = import.meta.env.VITE_BUILD_TYPE == 'ANDROID' ? 'android' : 'h5';
      header.setApptype(appType);

      console.log(metadata, 'metadata');

      return new Promise((resolve, reject) => {
        let server = new grpcService.default.ServiceClient(`https://${bucketObject[el][0]}.${poolUrl}:7007`, null, null);
        let request = new Prox.default.ProxRequestSummaryIds();
        request.setHeader(header);

        request.setIdsList(foggieIdObject[el]);
        console.log(request, 'request');

        server.summaryInfo(request, metadata, (err, res) => {
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
            console.log('contentList', contentList);
            contentList.forEach((el) => {
              let target = listData.value.find((item) => item.foggie_id == el.id);
              if (target) {
                target.used_space = el.total;
              }
            });
            // filesCount.value = contentList?.[0]?.count || 0;
            // usedSize.value = contentList?.[0]?.total || 0;
            resolve(contentList?.[0]?.total || 0);
          }
        });
      });
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

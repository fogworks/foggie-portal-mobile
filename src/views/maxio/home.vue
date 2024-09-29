<template>
  <div class="maxio_home_bg">
    <div class="maxio_home">
      <div class="maxio_home_head">
        <div class="maxio_home_headLogo">
          <div class="maxio_logo" @click="doShowLeft">
            <img src="@/assets/maxio/change.svg" alt="" />
          </div>
        </div>

        <div class="maxio_title_box">
          <img src="@/assets/maxio/beta.svg" class="betaPng" />
          <div class="maxio_title" v-if="showOrder">
            <img src="@/assets/maxio/cloud1.svg" alt="" />
            <div class="title_text">
              <div class="max_name" v-if="currentBucketData.domain"> {{ currentBucketData.domain }}</div>
              <div class="max_name" v-else> Order{{ currentBucketData.order_id }}</div>
            </div>
          </div>
          <div class="maxio_title" v-if="!showOrder">
            <img src="@/assets/maxio/maxio1.png" alt="" />
            <div class="title_text">
              <div class="max_name"> {{ currentBucketData.dedicatedip || 'MAX IO-' + currentBucketData.id }}</div>
            </div>
          </div>
        </div>
        <div class="maxio_order_history maxio_img" @click="showHistory = !showHistory" v-if="showOrder">
          <img src="@/assets/historyOrder.svg" alt="" />
        </div>
        <div
          class="maxio_img running_img"
          v-if="!showOrder"
          @click="showOfflineBox"
          :class="[!showOrder ? 'hideOfflineIcon' : 'showOfflineIcon']"
        >
          <img src="@/assets/maxio/running.svg" class="running_img" />
        </div>
      </div>
      <div class="show_max_more" @click="showMoreList" v-if="!isShowMoreList && orderTableData.length > 20">
        <img src="@/assets/maxio/more.svg" />
      </div>
      <div class="show_max_more rotate_more" @click="hideMoreList" v-if="isShowMoreList && orderTableData.length > 20">
        <img src="@/assets/maxio/more.svg" />
      </div>
      <div class="maxio_home_content" v-if="currentBucketData.order_id || currentBucketData.dedicatedip">
        <div class="maxio_home_leftMenu" :class="[showLeft ? (isShowMoreList ? 'isShowMoreList' : '') : 'minWidth']" ref="listRef">
          <!--order09 -->
          <div class="menu_img" @click="changeList('order')">
            <img src="@/assets/maxio/cloud1.svg" alt="" class="left_max_png" />
          </div>
          <div class="isShowMaxio" :class="[isShowOrder ? 'showMax' : 'hideMax']">
            <div
              v-for="(item, index) in orderTableData"
              @click="changeMenu(item)"
              :key="index"
              :class="[currentBucketData.id === item.id ? 'active_img' : '', 'menu_img']"
            >
              <img src="@/assets/maxio/cloud1.svg" alt="" class="left_max_pngs" />
              <div class="title_text" v-if="item.domain">{{ item.domain }}</div>
              <div class="title_text" v-else>{{ 'Order' + item.order_id }}</div>
            </div>
          </div>

          <!--maxio10 -->
          <div class="menu_img" @click="changeList('maxio')">
            <img src="@/assets/maxio/maxio1.png" alt="" class="left_max_png" />
          </div>
          <div class="isShowMaxio" :class="[isShowMaxio ? 'showMax' : 'hideMax']">
            <div
              v-for="(item, index) in maxTableData"
              @click="changeMenu(item)"
              :key="index"
              :class="[item.device_type == 'maxio' && currentBucketData.id === item.id ? 'active_img' : '', 'menu_img']"
            >
              <img src="@/assets/maxio/maxio1.png" alt="" class="left_max_pngs" />
              <div class="title_text" v-if="item.device_type === 'maxio'">{{ item.dedicatedip || 'MAX IO' + item.index + 1 }}</div>
            </div>
          </div>

          <div class="menu_img" @click="changeList('history')" v-if="historyDataCy.length">
            <div class="image-container history">
              <img src="@/assets/maxio/cloud1.svg" class="left_max_png" />
              <div class="watermark"> history </div>
            </div>
          </div>
          <div class="isShowMaxio" :class="[isShowHistory ? 'showMax' : 'hideMax']">
            <div
              v-for="(item, index) in historyDataCy"
              @click="changeMenu(item)"
              :key="index"
              :class="[item.device_type == 3 && currentBucketData.uuid === item.uuid ? 'active_img' : '', 'menu_img']"
            >
              <div class="image-container" alt="">
                <img src="@/assets/maxio/cloud.svg" alt="" />
                <div class="watermark">History</div>
              </div>
              <div class="title_text">{{ item.domain || 'Order' + item.order_id }}</div>
            </div>
          </div>
          <div class="shop_img menu_img" @click="toBuyOrder">
            <img src="@/assets/maxio/shop.svg" />
          </div>
        </div>

        <div class="maxio_home_rightContent maxio_sd_rightContent bbb" v-if="showOrder" :class="[showLeft ? 'maxWidth' : '']">
          <sd :currentBucketData="currentBucketData" @refresh="refresh">
            <div v-if="!cloudQuery.id" class="bucketNoFile" @click="gotoBucketDetail(currentBucketData)">
              <img src="@/assets/maxio/empty.png" alt="" />
            </div>
            <CloudComponent
              :cloudQuery="currentBucketData"
              v-if="currentBucketData.id"
              @setDomainSuccess="setDomainSuccess"
            ></CloudComponent>
          </sd>
        </div>
        <div class="maxio_home_rightContent maxio_sd_rightContent" v-if="!showOrder" :class="[showLeft ? 'maxWidth' : '']">
          <sd :currentBucketData="currentBucketData">
            <max-index :showLeft="showLeft"></max-index>
          </sd>
        </div>
      </div>
      <div v-else class="empty_box_wrap">
        <nut-empty description="You currently have no available orders." image="error"></nut-empty>
        <nut-button type="primary" class="buy-order" @click="toBuyOrder">Buy Order</nut-button>
      </div>
    </div>
    <offlineList
      :isShowOffline="isShowOffline"
      @closeBuy="showOfflineBox"
      :currentBucketData="currentBucketData"
      :isOfflineArr="isOfflineArr"
      :MaxTokenMap="MaxTokenMap"
    ></offlineList>
    <Teleport to="body">
      <nut-popup position="top" :style="{ minHeight: '280px' }" round v-model:visible="showHistory">
        <div class="history_top_box">
          <div class="history_top_title">Order History </div>
          <div class="history_top_list">
            <div class="history_top_item" v-for="(item, index) in historyList" :key="index">
              <div class="history_list_icon">
                <img src="@/assets/listH.svg" />
                <div class="history_content_name">{{ item.domain ? item.domain : 'Order -' + item.order_id }}</div>
                <div class="history_content_name">
                  <div class="history_content_right">
                    {{ statusMap[item.status] }}
                  </div>
                </div>
              </div>
              <div class="history_content">
                <div class="history_content_name"> <span>Stake: </span>{{ item.dmcx_price }} DMCX </div>
                <!-- <div class="history_content_name"> <span>Time: </span>{{ item.epoch }} week </div> -->
                <div class="history_content_name"> <span>Space: </span>{{ item.space }} GB </div>
                <div class="history_content_name history_content_time"><span>Created: </span>{{ transferUTCTime(item.created_at) }} </div>
              </div>
            </div>
            <div v-if="!historyList.length" class="unpay_list_empty">
              <nut-empty description="There are no history orders" image="error"></nut-empty>
              <nut-button type="primary" class="shopBack" @click="showHistory = false">Back</nut-button>
            </div>
          </div>
        </div>
      </nut-popup>
    </Teleport>
  </div>
</template>

<script setup>
  import { ref, toRefs, computed, onMounted } from 'vue';
  import { showToast } from '@nutui/nutui';
  import CloudComponent from './cloud.vue';
  import maxIndex from './maxIndex.vue';
  import sd from './sd.vue';
  //   import topLink from './component/topLink.vue';
  import topHead from './component/topHead.vue';
  //   import offline from './component/offline.vue';
  import offlineList from './component/offlineList.vue';
  import iconImg from './iconImg.vue';
  import { useUserStore } from '@/store/modules/user';
  import { getDmOrder, historyOrder, search_max } from '@/api';

  const statusMap = ref([
    'unKnow',
    'initialization',
    'Paymening',
    'Active',
    'Stake Failed',
    'Timeout',
    'Abandoned',
    'Cancelled',
    'Expanding',
  ]);

  const userStore = useUserStore();
  const showHistory = ref(false);
  const historyList = ref([]);
  let currentBucketData = ref({});
  const isShowOrder = ref(false);
  const isShowMaxio = ref(false);
  const isShowBucket = ref(false);
  const isShowHistory = ref(false);
  const isShowOffline = ref(false);
  const state = reactive({
    showOrder: false,
    cloudQuery: {},
  });
  const orderTableData = ref([]);
  const maxTableData = ref([]);
  const topType = ref('link');
  const topTypeText = ref('link');
  const topText = ref('');
  const topShow = ref(false);
  const { cloudQuery, showOrder } = toRefs(state);
  const router = useRouter();
  const route = useRoute();
  const MaxTokenMap = computed(() => userStore.getMaxTokenMap);
  const isOfflineList = ref(false);
  const isOfflineArr = ref([]);
  const showLeft = ref(false);
  const userAvatar = computed(() => userStore.getUserInfo?.image_path);
  const address = computed(() => userStore.getAddress);
  const maxTableDataCy = ref([]);
  const runningDataCy = ref([]);
  const historyDataCy = ref([]);
  const isShowMoreList = ref(false);
  import { getfilesize, transferUTCTime } from '@/utils/util';
  const leftBucketList = computed(() => {
    return orderTableData.value.concat(maxTableData.value);
  });
  const changeList = (type) => {
    if (type === 'order') {
      isShowOrder.value = !isShowOrder.value;
    } else if (type === 'maxio') {
      isShowMaxio.value = !isShowMaxio.value;
    } else if (type === 'history') {
      isShowHistory.value = !isShowHistory.value;
    }
  };
  const doShowLeft = () => {
    showLeft.value = !showLeft.value;
  };
  const showMoreList = () => {
    isShowMoreList.value = true;
  };
  const hideMoreList = () => {
    isShowMoreList.value = false;
  };
  const gotoBucketDetail = (item) => {
    router.push({ name: 'listDetails', query: { id: item.order_id, uuid: item.uuid, amb_uuid: item.amb_uuid, income: item.income } });
  };

  const closeBuy = () => {
    topType.value = 'link';
    topShow.value = false;
    topText.value = topShow.value ? 'Buy Order......' : '';
  };
  const buyOrder = () => {
    topShow.value = !topShow.value;
    if (topShow.value) {
      topType.value = 'buy';
    } else {
      topType.value = 'link';
    }
    topText.value = topShow.value ? 'Buy Order......' : '';
  };
  const showOfflineBox = () => {
    isShowOffline.value = !isShowOffline.value;
    // topShow.value = !topShow.value;
    // console.log(topType.value, 'showOfflineBoxshowOfflineBoxshowOfflineBox');
    // topType.value = 'offline';
    // if (topShow.value) {
    //   topType.value = 'offline';
    // } else {
    //   topType.value = 'link';
    // }
    // topText.value = topShow.value ? '离线任务创建中......' : '';
  };
  const initOfflineList = () => {
    isOfflineList.value = true;
    isOfflineArr.value = [
      {
        title: 'abctitleee.png',
        progress: 100,
        status: 'paus',
      },
      {
        title: '122.pdf',
        progress: 80,
        status: 'paus',
      },
    ];
  };

  const toBuyOrder = () => {
    router.push('/shop');
  };
  const initData = () => {
    if (address.value) {
      const d = {
        wallet: address.value,
        pageNo: 1,
        pageSize: 100,
      };
      getDmOrder(d).then((res) => {
        if (res.code === 200) {
          orderTableData.value = res.data.list;
          if (currentBucketData.value === null || currentBucketData.value === {}) {
            currentBucketData.value = orderTableData.value[0] ? orderTableData.value[0] : {};
            if (route.query.order_id) {
              const data = orderTableData.value.find((item) => Number(item.order_id) === Number(route.query.order_id));
              if (data?.order_id) {
                currentBucketData.value = data;
              }
            }
            console.log(currentBucketData.value, 'currentBucketData.value', orderTableData.value);
            cloudQuery.value = {
              id: currentBucketData.value.order_id,
            };
          }
        }
      });
      historyOrder(d).then((res) => {
        historyList.value = res.data.list;
      });
    }
  };

  const setDomainSuccess = (data) => {
    console.log('setDomainSuccess', data);
    initData();
  };
  const refresh = () => {
    initData();
  };
  const changeMenu = (item, _type) => {
    window.localStorage.homeChooseBucket = JSON.stringify(item);
    isShowMoreList.value = false;
    userStore.setCurrentLeftTab(item);
    currentBucketData.value = item;
    if (item.device_type !== 'maxio') {
      cloudQuery.value = {
        id: item.order_id,
        uuid: item.uuid,
        amb_uuid: item.amb_uuid,
        domain: item.domain,
      };
      showOrder.value = true;
      isShowOrder.value = true;
      isShowMaxio.value = false;
    } else {
      showOrder.value = false;
      isShowMaxio.value = true;
      isShowOrder.value = false;
    }
  };
  const initMaxData = () => {
    search_max({
      pn: 1,
      ps: 100,
    }).then(async (res) => {
      let data = res.data;
      let maxList = data.filter((el) => el.device_type === 'maxio' && el.deploy_svc_gateway_state === 'finish' && el.is_active);
      maxTableData.value = maxList;
      console.log(maxTableData.value, currentBucketData.value, currentBucketData.value !== null, maxTableData.value[0]);
      if (currentBucketData.value !== null || currentBucketData.value === {}) {
        currentBucketData.value = maxTableData.value[0] ? maxTableData.value[0] : {};
        // cloudQuery.value = {};
      }
      console.log(currentBucketData.value, 'initMaxData---currentBucketData.value', orderTableData.value);
    });
  };
  const initSetBucket = () => {
    if (window.localStorage.homeChooseBucket) {
      setBucket(JSON.parse(window.localStorage.homeChooseBucket));
    } else if (leftBucketList.value.length) {
      let bucketList = leftBucketList.value;
      if (bucketList.length) {
        setBucket(bucketList[0]);
      } else {
        // showToast.text('Please select a bucket and set the bucket name.');
      }
    } else {
      //   showToast.text('empty data');
    }
  };
  const setBucket = async (item) => {
    window.localStorage.setItem('homeChooseBucket', JSON.stringify(item));
    userStore.setCurrentLeftTab(item);
    if (item.device_type !== 'maxio') {
      currentBucketData.value = item;
      cloudQuery.value = {
        id: item.order_id,
        uuid: item.uuid,
        amb_uuid: item.amb_uuid,
        domain: item.domain,
      };
      showOrder.value = true;
    } else {
      showOrder.value = false;
      currentBucketData.value = item;
      changeList('maxio');
    }
  };
  onMounted(() => {
    initData();
    initMaxData();
    initOfflineList();
    initSetBucket();
  });
  watch(leftBucketList, (val) => {
    if (val.length > 0) {
      showLeft.value = true;
      //   console.log(currentBucketData.value, 'currentBucketData.value.device_type', val.length);
    } else {
      showLeft.value = false;
    }
  });
  watch(address, (val) => {
    console.log(val, 'addressaddressaddress');
    if (val.length > 0) {
      const d = {
        wallet: val,
        pageNo: 1,
        pageSize: 100,
      };
      getDmOrder(d).then((res) => {
        if (res.code === 200) {
          orderTableData.value = res.data.list;
          currentBucketData.value = orderTableData.value[0] ? orderTableData.value[0] : {};
          if (route.query.order_id) {
            const data = orderTableData.value.find((item) => Number(item.order_id) === Number(route.query.order_id));
            if (data?.order_id) {
              currentBucketData.value = data;
            }
          }
          cloudQuery.value = {
            id: currentBucketData.value.order_id,
          };
          console.log(currentBucketData.value, 'currentBucketData.value');
        }
      });
      historyOrder(d).then((res) => {
        historyList.value = res.data.list;
      });
    } else {
    }
  });
</script>

<style lang="scss">
  @import url('./maxFileOpt/style/common.scss');
  .maxio_home_rightContent {
    transition: all 0.8s;
    height: 100%;
    box-sizing: border-box;
    width: 100%;
    .maxio_home_title {
      font-weight: bold;
    }
  }
  //   .minWidth {
  //     width: 0 !important;
  //     transform: translateX(-140px);
  //     background: transparent;
  //   }
  //   .maxWidth {
  //     width: calc(100% - 120px);
  //     border: 5px solid #71d1e0;
  //     border-radius: 20px;
  //     background: #00000039;
  //     padding: 20px;
  //   }
  .buy-order {
    text-align: center;
    width: 300px;
    cursor: pointer;
    background-image: linear-gradient(76deg, #aeff00 0%, #528653 100%) !important;
    border: 1px solid #aeff00;
    z-index: 1;
    font-weight: bold;
  }
</style>

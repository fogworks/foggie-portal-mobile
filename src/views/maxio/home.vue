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
          <div class="maxio_title">
            <img src="@/assets/maxio/cloud1.svg" alt="" />
            <div class="title_text">
              <div class="max_name"> Order{{ currentBucketData.order_id }}</div>
            </div>
          </div>
        </div>
        <!-- <div class="maxio_img running_img" @click="showOfflineBox" :class="[showBucket ? 'hideOfflineIcon' : 'showOfflineIcon']">
          <img src="@/assets/maxio/running.svg" class="running_img" />
        </div> -->
        <div class="maxio_img running_img" :class="[showBucket ? 'hideOfflineIcon' : 'showOfflineIcon']"> </div>
      </div>
      <div class="show_max_more" @click="showMoreList" v-if="!isShowMoreList && maxTableData.length > 20">
        <img src="@/assets/maxio/more.svg" />
      </div>
      <div class="show_max_more rotate_more" @click="hideMoreList" v-if="isShowMoreList && maxTableData.length > 20">
        <img src="@/assets/maxio/more.svg" />
      </div>
      <div class="maxio_home_content" v-if="currentBucketData.order_id">
        <div class="maxio_home_leftMenu" :class="[showLeft ? (isShowMoreList ? 'isShowMoreList' : '') : 'minWidth']" ref="listRef">
          <div class="menu_img" @click="changeList('maxio')">
            <img src="@/assets/maxio/cloud1.svg" alt="" class="left_max_png" />
          </div>
          <div class="isShowMaxio" :class="[isShowMaxio ? 'showMax' : 'hideMax']">
            <div
              v-for="(item, index) in maxTableData"
              @click="changeMenu(item)"
              :key="index"
              :class="[currentBucketData.id === item.id ? 'active_img' : '', 'menu_img']"
            >
              <img src="@/assets/maxio/cloud1.svg" alt="" class="left_max_pngs" />
              <div class="title_text">{{ 'Order' + item.order_id }}</div>
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

        <div class="maxio_home_rightContent maxio_sd_rightContent bbb" :class="[showLeft ? 'maxWidth' : '']">
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
  import useOrderList from './maxFileOpt/useAllOrderList';
  import { useUserStore } from '@/store/modules/user';
  import { getDmOrder } from '@/api';

  const userStore = useUserStore();
  let currentBucketData = ref({});
  const isShowMaxio = ref(false);
  const isShowBucket = ref(false);
  const isShowHistory = ref(false);
  const isShowOffline = ref(false);
  const state = reactive({
    showBucket: false,
    cloudQuery: {},
  });
  const topType = ref('link');
  const topTypeText = ref('link');
  const topText = ref('');
  const topShow = ref(false);
  const { cloudQuery, showBucket } = toRefs(state);
  const { allOrderList, hasMore, infinityValue, total, maxTableData, historyData, runningData } = useOrderList();
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
  const leftBucketList = computed(() => {
    return allOrderList.value;
  });
  const changeList = (type) => {
    if (type === 'maxio') {
      isShowMaxio.value = !isShowMaxio.value;
    } else if (type === 'bucket') {
      isShowBucket.value = !isShowBucket.value;
    } else if (type === 'history') {
      isShowHistory.value = !isShowHistory.value;
    }
    if (isShowMaxio.value) {
      maxTableDataCy.value = [...maxTableData.value];
    } else {
      maxTableDataCy.value = [];
    }
    if (isShowBucket.value) {
      runningDataCy.value = [...runningData.value];
    } else {
      runningDataCy.value = [];
    }
    if (isShowHistory.value) {
      historyDataCy.value = [...historyData.value];
    } else {
      historyDataCy.value = [];
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
  const changeMenu = (item, _type) => {
    console.log('changeMenuchangeMenu', item, _type);
    window.localStorage.homeChooseBucket = JSON.stringify(item);
    isShowMoreList.value = false;
    userStore.setCurrentLeftTab(item);
    currentBucketData.value = item;
    cloudQuery.value = {
      id: item.order_id,
      uuid: item.uuid,
      amb_uuid: item.amb_uuid,
      domain: item.domain,
    };
    showBucket.value = true;
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
  const setBucket = async (item) => {
    // console.log('setBucket--0---------', item);
    window.localStorage.setItem('homeChooseBucket', JSON.stringify(item));
    userStore.setCurrentLeftTab(item);
    if (item.device_type === 3) {
      currentBucketData.value = item;
      cloudQuery.value = {
        id: item.order_id,
        uuid: item.uuid,
        amb_uuid: item.amb_uuid,
        domain: item.domain,
      };
      showBucket.value = true;
      if ([4, 5].includes(item.state)) {
        changeList('history');
      } else {
        changeList('bucket');
      }
    } else {
      showBucket.value = false;
      currentBucketData.value = item;
      changeList('maxio');
    }
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
          maxTableData.value = res.data.list;
          currentBucketData.value = maxTableData.value[0] ? maxTableData.value[0] : {};
          console.log(currentBucketData.value, 'currentBucketData.value');
          cloudQuery.value = {
            id: currentBucketData.value.order_id,
          };
        }
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
  onMounted(() => {
    initData();
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
          maxTableData.value = res.data.list;

          currentBucketData.value = maxTableData.value[0] ? maxTableData.value[0] : {};
          cloudQuery.value = {
            id: currentBucketData.value.order_id,
          };
          console.log(currentBucketData.value, 'currentBucketData.value');
        }
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

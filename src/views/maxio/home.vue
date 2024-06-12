<template>
  <div class="maxio_home_bg">
    <div class="maxio_home">
      <!-- <div class="top_link_box">
        <topHead :topType="topType" :topShow="!topShow" :topText="topText" @closeBuy="closeBuy"></topHead>
      </div> -->
      <div class="maxio_home_head">
        <div class="maxio_home_headLogo">
          <div class="maxio_logo" @click="doShowLeft">
            <!-- <img src="@/assets/maxio/list.svg" alt="" /> -->
            <img src="@/assets/maxio/change.svg" alt="" />
          </div>
        </div>

        <div class="maxio_title_box">
          <div class="maxio_title" v-if="!showBucket">
            <img src="@/assets/maxio/maxio1.png" alt="" />
            <div class="title_text">
              <div class="max_name"> {{ currentBucketData.dedicatedip || 'MAX IO-' + currentBucketData.id }}</div>
              <!-- <div class="max_name"> （MAXIO-{{ currentBucketData.id }} ）</div> -->
            </div>
          </div>
          <div class="maxio_title" v-if="showBucket">
            <!-- <img src="@/assets/home_bucket.png" alt="" /> -->
            <img src="@/assets/maxio/cloud.svg" alt="" />
            <div class="title_text">
              <div class="max_name"> {{ currentBucketData.domain || 'Order' + currentBucketData.order_id }}</div>
              <!-- <div class="max_name"> （Bucket-001）</div> -->
            </div>
          </div>
        </div>
        <!-- <div class="maxio_img" @click="showOfflineBox">
          <img src="@/assets/maxio/offline.svg" class="user_img" />
        </div> -->
        <div class="maxio_img running_img" @click="showOfflineBox" :class="[showBucket ? 'hideOfflineIcon' : 'showOfflineIcon']">
          <img src="@/assets/maxio/running.svg" class="running_img" />
        </div>
      </div>
      <div class="maxio_home_content">
        <div class="maxio_home_leftMenu" :class="[showLeft ? '' : 'minWidth']" ref="listRef">
          <!-- home_bucket000 -->
          <div class="menu_img" @click="changeList('maxio')">
            <!-- <img src="@/assets/maxio/maxio_name.png" class="left_max_png" /> -->
            <img src="@/assets/maxio/maxio1.png" alt="" class="left_max_png" />
          </div>
          <div class="isShowMaxio" :class="[isShowMaxio ? 'showMax' : 'hideMax']">
            <div
              v-for="(item, index) in maxTableData"
              @click="changeMenu(item)"
              :key="index"
              :class="[item.device_type == 'maxio' && currentBucketData.id === item.id ? 'active_img' : '', 'menu_img']"
            >
              <!-- <img src="@/assets/maxio/maxio.png" alt="" class="left_max_pngs" /> -->
              <img src="@/assets/maxio/maxio1.png" alt="" class="left_max_pngs" />
              <div class="title_text" v-if="item.device_type === 'maxio'">{{ item.dedicatedip || 'MAX IO' + item.index + 1 }}</div>
            </div>
          </div>

          <!-- home_bucket111 -->
          <div class="menu_img" @click="changeList('bucket')">
            <!-- <img src="@/assets/maxio/hbucket.svg" class="left_max_png" />  -->
            <img src="@/assets/maxio/cloud1.svg" class="left_max_png" />
          </div>
          <div class="isShowMaxio" :class="[isShowBucket ? 'showMax' : 'hideMax']">
            <div
              v-for="(item, index) in runningDataCy"
              @click="changeMenu(item)"
              :key="index"
              :class="[item.device_type == 3 && currentBucketData.uuid === item.uuid ? 'active_img' : '', 'menu_img']"
            >
              <!-- <img src="@/assets/home_bucket.png" alt="" /> -->
              <img src="@/assets/maxio/cloud.svg" alt="" />
              <div class="title_text">{{ item.domain || 'Order' + item.order_id }}</div>
            </div>
          </div>

          <!-- home_bucket222 -->
          <div class="menu_img" @click="changeList('history')" v-if="historyDataCy.length">
            <div class="image-container history">
              <!-- <img src="@/assets/maxio/hbucket.svg" class="left_max_png" /> -->
              <img src="@/assets/maxio/cloud1.svg" class="left_max_png" />
              <div class="watermark">
                <!-- <img src="@/assets/maxio/history.svg" class="small" /> -->
                history
              </div>
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
                <!-- <img src="@/assets/home_bucket.png" /> -->
                <img src="@/assets/maxio/cloud.svg" alt="" />
                <div class="watermark">History</div>
              </div>
              <div class="title_text">{{ item.domain || 'Order' + item.order_id }}</div>
            </div>
          </div>

          <!-- <div class="menu_img buy_img" @click="buyOrder">
            <img src="@/assets/maxio/buy.svg" class="left_max_png" />
          </div> -->
        </div>

        <div class="maxio_home_rightContent maxio_sd_rightContent" v-if="!showBucket" :class="[showLeft ? 'maxWidth' : '']">
          <sd :currentBucketData="currentBucketData">
            <max-index :showLeft="showLeft"></max-index>
          </sd>
        </div>

        <div class="maxio_home_rightContent maxio_sd_rightContent" v-if="showBucket" :class="[showLeft ? 'maxWidth' : '']">
          <sd :currentBucketData="currentBucketData">
            <div v-if="!cloudQuery.uuid" class="bucketNoFile" @click="gotoBucketDetail(currentBucketData)">
              <img src="@/assets/maxio/empty.png" alt="" />
            </div>
            <!-- v-if="currentBucketData.state !== 0" -->
            <CloudComponent :cloudQuery="cloudQuery" v-if="cloudQuery.uuid"></CloudComponent>
          </sd>
        </div>
      </div>
    </div>
    <!-- <offline :isShowOffline="isShowOffline" @closeBuy="showOfflineBox" :currentBucketData="currentBucketData"></offline> -->
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
  const userStore = useUserStore();
  const cloudCodeIsBind = computed(() => userStore.getCloudCodeIsBind);
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
  const { resetData, loadMore, allOrderList, hasMore, infinityValue, total, maxTableData, historyData, runningData } = useOrderList();
  const router = useRouter();
  const route = useRoute();
  const MaxTokenMap = computed(() => userStore.getMaxTokenMap);
  const isOfflineList = ref(false);
  const isOfflineArr = ref([]);
  const showLeft = ref(false);
  const userAvatar = computed(() => userStore.getUserInfo?.image_path);
  //   const leftBucketList = ref([]);
  const maxTableDataCy = ref([]);
  const runningDataCy = ref([]);
  const historyDataCy = ref([]);
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

  const loadMoreFun = async () => {
    try {
      const postData = {
        sort_type: 'expire',
        ascending: false,
        // is_domain: 1,
        electronic_type: '0',
        // domain: '',
      };
      await loadMore([0, 1, 2, 3, 4, 6], '', '', '', postData);
    } catch {}
  };

  const changeMenu = (item, _type) => {
    // console.log('changeMenuchangeMenu', item, _type);
    window.localStorage.homeChooseBucket = JSON.stringify(item);
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
    } else {
      showBucket.value = false;
      currentBucketData.value = item;
    }
    // console.log(currentBucketData.value, 'changeMenu', currentBucketData.value.device_id);
  };
  const gotoBucketDetail = (item) => {
    router.push({ name: 'listDetails', query: { id: item.order_id, uuid: item.uuid, amb_uuid: item.amb_uuid, income: item.income } });
  };
  const initSetBucket = () => {
    showBucket.value = true;
    // console.log(window.localStorage.homeChooseBucke, '000------window.localStorage.homeChooseBucke');
    if (window.localStorage.homeChooseBucket) {
      setBucket(JSON.parse(window.localStorage.homeChooseBucket));
    } else if (leftBucketList.value.length) {
      //   let bucketList = leftBucketList.value.filter((el) => el.domain);
      let bucketList = leftBucketList.value;
      if (bucketList.length) {
        setBucket(bucketList[0]);
      } else {
        showToast.text('Please select a bucket and set the bucket name.');
      }
    } else {
      showToast.text('empty data');
    }
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
    console.log('setBucket--0---------', item);
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
  watch(leftBucketList, (val) => {
    if (val.length > 0) {
      showLeft.value = true;
      //   console.log(currentBucketData.value, 'currentBucketData.value.device_type', val.length);
    } else {
      showLeft.value = false;
    }
  });
  watch(
    cloudCodeIsBind,
    async (val) => {
      if (val) {
        window.localStorage.removeItem('homeChooseBucket');
        userStore.setambRefuse(false);
        await loadMoreFun();
        initSetBucket();
        initOfflineList();
      }
    },
    {
      deep: true,
      immediate: true,
    },
  );
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
</style>

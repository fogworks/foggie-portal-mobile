<template>
  <div class="maxio_home_bg">
    <div class="maxio_home">
      <div class="top_link_box">
        <topLink></topLink>
      </div>
      <div class="maxio_home_head">
        <div class="maxio_home_headLogo">
          <div class="maxio_logo" @click="doShowLeft">
            <!-- <img src="@/assets/maxio/list.svg" alt="" /> -->
            <img src="@/assets/maxio/change.svg" alt="" />
          </div>
        </div>

        <div class="maxio_title_box">
          <div class="maxio_title" v-if="!showBucket">
            <img src="@/assets/maxio/maxio.png" alt="" />
            <div class="title_text">
              <div class="max_name"> {{ currentBucketData.dedicatedip || 'MAX IO-' + currentBucketData.id }}</div>
              <div class="max_name"> （MAXIO-{{ currentBucketData.id }} ）</div>
            </div>
          </div>
          <div class="maxio_title" v-if="showBucket">
            <img src="@/assets/home_bucket.png" alt="" />
            <div class="title_text">
              <div class="max_name"> {{ currentBucketData.domain || 'Order' + currentBucketData.order_id }}</div>
              <div class="max_name"> （Bucket-001）</div>
            </div>
          </div>
        </div>
        <div class="maxio_img">
          <!-- <img :src="userAvatar ? userAvatar : require('@/assets/user.png')" class="user_img" /> -->
          <!-- <icon-img></icon-img> -->
        </div>
      </div>
      <div class="maxio_home_content">
        <div class="maxio_home_leftMenu" :class="[showLeft ? '' : 'minWidth']" ref="listRef">
          <!-- home_bucket000 -->
          <div class="menu_img" @click="changeList('maxio')">
            <img src="@/assets/maxio/maxio_name.png" class="left_max_png" />
          </div>
          <div class="isShowMaxio" :class="[isShowMaxio ? 'showMax' : 'hideMax']">
            <div
              v-for="(item, index) in maxTableData"
              @click="changeMenu(item)"
              :key="index"
              :class="[item.device_type == 'maxio' && currentBucketData.id === item.id ? 'active_img' : '', 'menu_img']"
            >
              <img src="@/assets/maxio/maxio.png" alt="" class="left_max_pngs" />
              <div class="title_text" v-if="item.device_type === 'maxio'">{{ item.dedicatedip || 'MAX IO' + item.index + 1 }}</div>
            </div>
          </div>

          <!-- home_bucket111 -->
          <div class="menu_img" @click="changeList('bucket')">
            <img src="@/assets/maxio/hbucket.svg" class="left_max_png" />
          </div>
          <div class="isShowMaxio" :class="[isShowBucket ? 'showMax' : 'hideMax']">
            <div
              v-for="(item, index) in runningDataCy"
              @click="changeMenu(item)"
              :key="index"
              :class="[item.device_type == 3 && currentBucketData.uuid === item.uuid ? 'active_img' : '', 'menu_img']"
            >
              <img src="@/assets/home_bucket.png" alt="" />
              <div class="title_text">{{ item.domain || 'Order' + item.order_id }}</div>
            </div>
          </div>

          <!-- home_bucket222 -->
          <div class="menu_img" @click="changeList('history')">
            <div class="image-container history">
              <img src="@/assets/maxio/hbucket.svg" class="left_max_png" />
              <div class="watermark">
                <img src="@/assets/maxio/history.svg" class="small" />
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
                <img src="@/assets/home_bucket.png" />
                <div class="watermark">History</div>
              </div>
              <div class="title_text">{{ item.domain || 'Order' + item.order_id }}</div>
            </div>
          </div>
        </div>

        <div class="maxio_home_rightContent maxio_sd_rightContent" v-if="!showBucket" :class="[showLeft ? 'maxWidth' : '']">
          <sd>
            <max-index :showLeft="showLeft"></max-index>
          </sd>
        </div>

        <div class="maxio_home_rightContent maxio_sd_rightContent" v-if="showBucket" :class="[showLeft ? 'maxWidth' : '']">
          <sd>
            <div v-if="currentBucketData.state === 0" class="bucketNoFile" @click="gotoBucketDetail(currentBucketData)">
              <img src="@/assets/maxio/empty.png" alt="" />
            </div>
            <CloudComponent :cloudQuery="cloudQuery" v-if="currentBucketData.state !== 0"></CloudComponent>
          </sd>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, toRefs, computed, onMounted } from 'vue';
  import CloudComponent from './cloud.vue';
  import maxIndex from './maxIndex.vue';
  import sd from './sd.vue';
  import topLink from './topLink.vue';
  import iconImg from './iconImg.vue';
  import useOrderList from './useAllOrderList.ts';
  import { search_cloud } from '@/api';
  import { useUserStore } from '@/store/modules/user';
  const userStore = useUserStore();
  const cloudCodeIsBind = computed(() => userStore.getCloudCodeIsBind);
  let currentBucketData = ref({});
  const isShowMaxio = ref(false);
  const isShowBucket = ref(false);
  const isShowHistory = ref(false);
  const state = reactive({
    showBucket: false,
    cloudQuery: {},
  });
  const { cloudQuery, showBucket } = toRefs(state);
  const { resetData, loadMore, allOrderList, hasMore, infinityValue, total, maxTableData, historyData, runningData } = useOrderList();
  const router = useRouter();
  const route = useRoute();
  const showLeft = ref(false);
  const userAvatar = computed(() => userStore.getUserInfo?.image_path);
  //   const leftBucketList = ref([]);
  const maxTableDataCy = ref([]);
  const runningDataCy = ref([]);
  const historyDataCy = ref([]);
  const leftBucketList = computed(() => {
    console.log(allOrderList.value, 'allOrderList.value');
    return allOrderList.value;
  });
  //   const maxTableDataCy = computed(() => {
  //     return maxTableData.value;
  //   });
  //   const runningDataCy = computed(() => {
  //     return runningData.value;
  //   });
  //   const historyDataCy = computed(() => {
  //     return historyData.value;
  //   });

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
    window.localStorage.homeChooseBucket = JSON.stringify(item);
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
  const setBucket = async (item) => {
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
    } else {
      showBucket.value = false;
      currentBucketData.value = item;
    }
  };
  //   onMounted(async () => {
  //     await loadMoreFun();
  //     initSetBucket();
  //   });
  watch(leftBucketList, (val) => {
    if (val.length > 0) {
      showLeft.value = true;
    } else {
      showLeft.value = false;
    }
  });
  watch(
    cloudCodeIsBind,
    async (val) => {
      if (val) {
        userStore.setambRefuse(false);
        await loadMoreFun();
        initSetBucket();
      }
    },
    {
      deep: true,
      immediate: true,
    },
  );
</script>

<style lang="scss">
  @import url('./common.scss');
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

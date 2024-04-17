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
            </div>
          </div>
          <div class="maxio_title" v-if="showBucket">
            <img src="@/assets/home_bucket.png" alt="" />
            <div class="title_text">
              <div class="max_name"> {{ currentBucketData.domain || 'Order' + currentBucketData.order_id }}</div>
            </div>
          </div>
        </div>
        <div class="maxio_img">
          <img :src="userAvatar ? userAvatar : require('@/assets/user.png')" class="user_img" />
        </div>
      </div>
      <div class="maxio_home_content">
        <div class="maxio_home_leftMenu" :class="[showLeft ? '' : 'minWidth']" ref="listRef">
          <div
            v-for="(item, index) in leftBucketList"
            @click="changeMenu(item)"
            :key="index"
            :class="[
              (item.device_type == 3 && currentBucketData.uuid === item.uuid) ||
              (item.device_type == 'maxio' && currentBucketData.id === item.id)
                ? 'active_img'
                : '',
              'menu_img',
            ]"
          >
            <div class="image-container" v-if="item.device_type == 3 && [4, 5].includes(item.state)" alt="">
              <img src="@/assets/home_bucket.png" />
              <div class="watermark">History</div>
            </div>

            <img src="@/assets/home_bucket.png" v-if="item.device_type == 3 && [0, 1, 2, 3, 6].includes(item.state)" alt="" />
            <img src="@/assets/maxio/maxio.png" v-if="item.device_type == 'maxio'" alt="" class="left_max_png" />

            <div class="title_text" v-if="item.device_type !== 'maxio'">{{ item.domain || 'Order' + item.order_id }}</div>
            <div class="title_text" v-if="item.device_type === 'maxio'">{{ item.dedicatedip || 'MAX IO' + item.index + 1 }}</div>
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
  import { ref, toRefs, computed } from 'vue';
  import CloudComponent from './cloud.vue';
  import maxIndex from './maxIndex.vue';
  import sd from './sd.vue';
  import topLink from './topLink.vue';
  import useOrderList from './useAllOrderList.ts';
  import { search_cloud } from '@/api';
  import { useUserStore } from '@/store/modules/user';
  const userStore = useUserStore();
  const cloudCodeIsBind = computed(() => userStore.getCloudCodeIsBind);
  let currentBucketData = ref({});
  const state = reactive({
    showBucket: false,
    cloudQuery: {},
  });
  const { cloudQuery, showBucket } = toRefs(state);
  const { resetData, loadMore, allOrderList, hasMore, infinityValue, total } = useOrderList();
  const router = useRouter();
  const route = useRoute();
  const showLeft = ref(false);
  const userAvatar = computed(() => userStore.getUserInfo?.image_path);
  const leftBucketList = computed(() => {
    return allOrderList.value;
  });

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
  const setBucket = async (item) => {
    // if (!item.domain) {
    //   router.push({
    //     name: 'listDetails',
    //     query: {
    //       id: item.order_id,
    //       uuid: item.uuid,
    //       amb_uuid: item.amb_uuid,
    //       domain: item.domain,
    //     },
    //   });
    //   return false;
    // }

    // bucketName.value = item.domain
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
        // setBucket(leftBucketList.value && leftBucketList.value[0]);
        showBucket.value = true;
        console.log(window.localStorage.homeChooseBucke, 'window.localStorage.homeChooseBucke');
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
        }
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

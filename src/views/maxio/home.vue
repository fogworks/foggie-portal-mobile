<template>
  <div class="maxio_home_bg">
    <div class="maxio_home">
      <div class="maxio_home_head">
        <div class="maxio_home_headLogo">
          <div class="maxio_logo" @click="changeMenu(1)">
            <img src="@/assets/maxio/list.svg" alt="" />
          </div>
        </div>

        <div class="maxio_title_box">
          <div class="maxio_title" v-if="!showBucket">
            <img src="@/assets/maxio/maxio.png" alt="" />
            <div class="title_text">
              <div class="max_name"> MAXIO-00{{ activeTab }}</div>
            </div>
          </div>
          <div class="maxio_title" v-if="showBucket">
            <img src="@/assets/home_bucket.png" alt="" />
            <div class="title_text">
              <div class="max_name"> Bucket-00{{ activeTab }}</div>
            </div>
          </div>
          <div class="max_ip"> (192.168.1.1)</div>
        </div>
        <div class="maxio_img" @click="changeTab('index')" style="visibility: hidden">
          <img src="@/assets/maxio/back.svg" alt="" class="icon_img" />
        </div>
      </div>
      <div class="maxio_home_content">
        <!-- <div class="maxio_home_leftMenu">
          <div class="menu_img" @click="changeMenu(1)" :class="[activeTab === 1 ? 'active_img' : '']">
            <img src="@/assets/maxio/maxio.png" alt="" class="left_max_png" />
          </div>
          <div class="menu_img" @click="changeMenu(2)" :class="[activeTab === 2 ? 'active_img' : '']">
            <img src="@/assets/maxio/maxio.png" alt="" class="left_max_png" />
          </div>
          <div class="menu_img" @click="changeMenu(3)" :class="[activeTab === 3 ? 'active_img' : '']">
            <img src="@/assets/maxio/maxio.png" alt="" class="left_max_png" />
          </div>
          <div class="menu_img" @click="changeMenu(4)" :class="[activeTab === 4 ? 'active_img' : '']">
            <img src="@/assets/maxio/maxio.png" alt="" class="left_max_png" />
          </div>
          <div class="menu_img" @click="changeMenu(5, 'cloud')" :class="[activeTab === 5 ? 'active_img' : '']">
            <img src="@/assets/home_bucket.png" alt="" />
          </div>
          <div class="menu_img" @click="changeMenu(6, 'cloud')" :class="[activeTab === 6 ? 'active_img' : '']">
            <img src="@/assets/home_bucket.png" alt="" />
          </div>
        </div> -->
        <nut-infinite-loading
          :load-more-txt="'Is Bottom'"
          class="maxio_home_leftMenu"
          ref="listRef"
          v-model="infinityValue"
          :has-more="hasMore"
          @load-more="loadMoreFun"
        >
          <div
            :class="[activeTab && (activeTab == item.uuid || item.device_id) ? 'active_img' : '', 'menu_img']"
            v-for="item in leftBucketList"
            @click="changeMenu(item)"
          >
            <div class="order_img">
              <!-- <img v-if="item.electronic_type == 0" src="@/assets/mobile1.svg" alt="" /> -->
              <img v-if="item.electronic_type == 1" src="@/assets/desktop1.svg" alt="" />
            </div>
            <IconHistory class="history" v-if="[4, 5].includes(item.state)"></IconHistory>
            <!-- <div :class="['left_icon_box', [4, 5].includes(item.state) ? 'isHistory' : '', item.checked ? 'active_img' : '']"> -->
            <img src="@/assets/home_bucket.png" v-if="item.device_type == 3" alt="" />
            <img src="@/assets/maxio/maxio.png" v-else alt="" class="left_max_png" />

            <!-- </div> -->
            <!-- <div class="name_box">
              <span>{{ item.domain || 'Order' + item.order_id }}</span>
            </div> -->
          </div>
        </nut-infinite-loading>
        <div class="maxio_home_rightContent" v-if="!showBucket">
          <div class="maxio_home_title" v-if="activeTab % 2 === 1">Minning Pool({{ activeTab }})</div>
          <div class="maxio_home_card" @click="changeTab('pool')" v-if="activeTab % 2 === 1">
            <img src="@/assets/maxio/poolList.png" alt="" />
          </div>
          <div class="maxio_home_title">Depins({{ activeTab + 2 }})</div>
          <div class="maxio_home_card" @click="changeTab('iot')">
            <img src="@/assets/maxio/iotList.png" alt="" />
          </div>
          <div class="maxio_home_title">Devices Rewards</div>
          <div class="maxio_home_card maxio_reward_card" @click="changeTab('reward')">
            <img src="@/assets/maxio/rewardLine.png" alt="" />
          </div>
        </div>
        <div class="maxio_home_rightContent" v-if="showBucket">
          <img src="@/assets/maxio/bucketDemo.png" alt="" class="bucket_img" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, toRefs, computed } from 'vue';
  import useOrderList from './useAllOrderList.ts';
  import { search_cloud } from '@/api';
  import { useUserStore } from '@/store/modules/user';
  const userStore = useUserStore();
  const cloudCodeIsBind = computed(() => userStore.getCloudCodeIsBind);
  let currentBucketData = {};
  const state = reactive({
    showBucket: false,
    showDeviceMenu: true,
    activeTab: 1,
    noBucketData: [],
  });
  const { noBucketData, showBucket, showDeviceMenu, activeTab } = toRefs(state);
  const { resetData, loadMore, allOrderList, hasMore, infinityValue, total } = useOrderList();
  const router = useRouter();
  const route = useRoute();
  const changeTab = (type) => {
    if (type === 'index') {
      router.push({ path: '/home' });
    } else if (type === 'pool') {
      router.push({ path: '/maxPool' });
    } else if (type === 'iot') {
      router.push({ path: '/maxIOT' });
    } else if (type === 'file') {
      router.push({ path: '/maxFile' });
    } else if (type === 'reward') {
      router.push({ path: '/maxReward' });
    } else if (type === 'set') {
      router.push({ path: '/maxSet' });
    } else if (type === 'home') {
      router.push({ path: '/maxio' });
    }
  };
  const changeMenu = (item, _type) => {
    showDeviceMenu.value = !showDeviceMenu.value;
    activeTab.value = item.uuid || item.device_id;
    console.log(activeTab.value, 'activeTab.value');
    if (item.device_type == 3) {
      showBucket.value = true;
      //   router.push({ path: '/cloud' });
    } else {
      showBucket.value = false;
    }
  };
  const leftBucketList = computed(() => {
    return noBucketData.value.concat(allOrderList.value);
  });
  const loadMoreFun = async () => {
    console.log('loadMoreFun');
    try {
      const postData = {
        sort_type: 'expire',
        ascending: false,
        is_domain: 1,
        electronic_type: '0',
        domain: '',
      };
      await loadMore([0, 1, 2, 3, 4, 6], '', '', '', postData);
      console.log('开始请求');

      nextTick(() => {
        console.log(allOrderList.value, 'allOrderList');
        if (hasMore.value && allOrderList.value.length <= 20) {
          loadMoreFun();
        }
      });
    } catch {}
  };
  async function getNoBucketOrder() {
    const order_state = [0];
    const start_time = '';
    const end_time = '';
    const buy_result = 'success';
    const postData = {
      sort_type: 'expire',
      ascending: false,
      is_domain: 2,
      electronic_type: '0',
      domain: '',
    };
    await search_cloud({ ps: 30, pn: 1, order_state, start_time, end_time, buy_result, ...postData }).then((res) => {
      noBucketData.value = res.result.data;
    });
  }
  const setBucket = async (item) => {
    if (!item.domain) {
      router.push({
        name: 'listDetails',
        query: {
          id: item.order_id,
          uuid: item.uuid,
          amb_uuid: item.amb_uuid,
          domain: item.domain,
        },
      });
      return false;
    }
    // bucketName.value = item.domain
    currentBucketData = item;
    window.localStorage.homeChooseBucket = JSON.stringify(item);
  };
  watch(cloudCodeIsBind, async (val) => {
    if (val) {
      userStore.setambRefuse(false);
      getNoBucketOrder;
      await loadMoreFun();
      console.log(allOrderList.value.length, 'allOrderList.length');

      if (window.localStorage.homeChooseBucket) {
        setBucket(JSON.parse(window.localStorage.homeChooseBucket));
      } else if (leftBucketList.value.length) {
        let bucketList = leftBucketList.value.filter((el) => el.domain);
        if (bucketList.length) {
          setBucket(bucketList[0]);
        } else {
          showToast.text('Please select a bucket and set the bucket name.');
        }
      }
    }
  });
</script>

<style lang="scss">
  @import url('./common.scss');
</style>

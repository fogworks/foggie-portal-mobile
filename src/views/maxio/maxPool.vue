<template>
  <div class="maxio_home_bg maxio_home_pool">
    <div class="maxio_home">
      <div class="maxio_home_head">
        <div class="maxio_home_headLogo">
          <div class="maxio_logo">
            <img src="@/assets/maxio/list.svg" alt="" @click="changeTab('home')" />
            <img src="@/assets/maxio/change.svg" alt="" style="margin-left: 10px" @click="doShowLeft" />
          </div>
        </div>

        <div class="maxio_title_box">
          <div class="maxio_title">
            <img src="@/assets/maxio/maxio.png" alt="" />
            <div class="title_text">
              <div class="max_name"> {{ currentItem.dedicatedip }}</div>
            </div>
          </div>
          <!-- <div class="max_ip"> (192.168.1.1)</div> -->
          <div class="max_ip">Pool Manage</div>
        </div>
        <div class="maxio_img" @click="changeTab('home')">
          <img src="@/assets/maxio/back.svg" alt="" class="icon_img" />
        </div>
      </div>

      <div class="maxio_home_content">
        <div class="maxio_home_leftMenu" :class="[showLeft ? '' : 'minWidth']">
          <!-- <div class="menu_img" @click="changeTab('home')">
            <img src="@/assets/maxio/maxio_name.png" alt="" style="object-fit: cover" />
          </div> -->
          <div class="menu_img" @click="changeTab('file')">
            <img src="@/assets/maxio/file.svg" alt="" />
          </div>
          <div class="menu_img" @click="changeTab('reward')">
            <img src="@/assets/maxio/reward.svg" alt="" />
          </div>
          <div class="menu_img" @click="changeTab('iot')">
            <img src="@/assets/maxio/iot1.svg" alt="" />
          </div>
          <div class="menu_img active_img" @click="changeTab('pool')">
            <img src="@/assets/maxio/pool.svg" alt="" />
          </div>
          <!-- <div class="menu_img" @click="changeTab('set')">
            <img src="@/assets/maxio/set.svg" alt="" />
          </div> -->
        </div>
        <div class="maxio_home_rightContent maxio_sd_rightContent" :class="[showLeft ? 'maxWidth' : '']">
          <sd>
            <div class="maxio_home_card maxio_pool_card" v-for="(item, index) in poolList" :key="index">
              <div class="pool_name">{{ item.bucket }}</div>
              <div class="pool_detail">
                <div class="pool_space">
                  <div class="pool_space_title">
                    <span class="first">{{ item.space }} GB</span>
                    <span class="sec">(Space)</span>
                  </div>
                  <div class="pool_space_time"> 100 Days 23:59:59 </div>
                </div>
                <div class="pool_img">
                  <img src="@/assets/maxio/poolIcon.jpg" />
                </div>
              </div>
              <div class="pool_time_line">
                <div class="pool_time_join">
                  <span> {{ handleTime(item) }}</span>
                  <span class="title">Join Time</span>
                </div>
                <div class="pool_time_exp">
                  <span> {{ handleEndTime(item) }}</span>
                  <span class="title">Expire Time</span>
                </div>
              </div>
            </div>
          </sd>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, toRefs, computed, onMounted } from 'vue';
  import sd from './sd.vue';
  import moment from 'moment';
  const router = useRouter();
  const route = useRoute();
  const showLeft = ref(true);
  const doShowLeft = () => {
    showLeft.value = !showLeft.value;
  };
  import { getfilesize, transferTime, transferUTCTime } from '@/utils/util';
  const currentItem = ref({});
  const poolList = ref([]);
  onMounted(() => {
    currentItem.value = JSON.parse(window.localStorage.homeChooseBucket);
    let myPoolList = JSON.parse(window.localStorage.getItem('myPoolList'));
    if (myPoolList && myPoolList.length > 0) {
      poolList.value = myPoolList;
    } else {
      poolList.value = [];
    }
  });
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

  //   poolList.value = [
  //     {
  //       id: '2',
  //       bucket: 'sharebucket1',
  //       createdAt: '2024-03-20T06:11:36.77584197Z',
  //       delete_data: false,
  //       dmc_account: 'yitianyitian',
  //       expire_on_week: 25,
  //       is_delete: 0,
  //       is_pin: false,
  //       memo: '',
  //       miner_pool_addr: '',
  //       miner_pool_name: 'MAXIO_POOL', //1
  //       pin_size: '1024',
  //       space: '1024', //2
  //       stack_asset: '',
  //       status: 'finish',
  //       updatedAt: '2024-03-20T06:11:58.794228845Z',
  //     },
  //   ];
  const handleEndTime = (item) => {
    const nowDate = moment(item.createdat).add(item.expireOnWeek, 'weeks').format('YYYY-MM-DD HH:mm:ss');
    return nowDate;
  };
  const handleTime = (item) => {
    return moment.utc(item.createdat).local().format('YYYY-MM-DD HH:mm:ss');
  };
</script>

<style lang="scss" scoped>
  @import url('./common.scss');
  @import url('./index.scss');
  .maxio_home_pool {
    // .minWidth {
    //   width: 0 !important;
    //   transform: translateX(-140px);
    // }
    // .maxio_home_rightContent {
    //   transition: all 0.8s;
    //   height: 100%;
    //   box-sizing: border-box;
    //   width: 100%;
    //   .maxio_home_title {
    //     font-weight: bold;
    //   }
    // }
    // .maxWidth {
    //   width: calc(100% - 120px);
    // }
    // .maxio_home_card {
    //   background: #3c3c47;
    //   width: 100%;
    //   background: rgb(181 186 202 / 38%);
    //   height: 300px;
    //   border-radius: 30px;
    //   margin-bottom: 20px;
    //   display: flex;
    //   align-items: center;
    //   justify-content: center;
    //   overflow: hidden;
    //   box-sizing: border-box;
    //   img {
    //     width: 90%;
    //   }
    // }
    // .maxio_reward_card {
    //   padding: 20px;
    //   img {
    //     width: 100%;
    //     height: 92%;
    //     object-fit: contain;
    //   }
    // }
  }
</style>

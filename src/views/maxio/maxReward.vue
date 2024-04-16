<template>
  <div class="maxio_home_bg maxio_reward_page">
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
              <div class="max_name"> MAXIO-001</div>
            </div>
          </div>
          <div class="max_ip"> (192.168.1.1)</div>
        </div>
        <div class="maxio_img" @click="changeTab('home')">
          <img src="@/assets/maxio/back.svg" alt="" class="icon_img" />
        </div>
      </div>
      <div class="maxio_home_content maxio_reward_content">
        <div class="maxio_home_leftMenu" :class="[showLeft ? '' : 'minWidth']">
          <!-- <div class="menu_img" @click="changeTab('home')">
            <img src="@/assets/maxio/maxio_name.png" alt="" style="object-fit: cover" />
          </div> -->
          <div class="menu_img" @click="changeTab('file')">
            <img src="@/assets/maxio/file.svg" alt="" />
          </div>
          <div class="menu_img active_img" @click="changeTab('reward')">
            <img src="@/assets/maxio/reward.svg" alt="" />
          </div>
          <div class="menu_img" @click="changeTab('iot')">
            <img src="@/assets/maxio/iot1.svg" alt="" />
          </div>
          <div class="menu_img" @click="changeTab('pool')">
            <img src="@/assets/maxio/pool.svg" alt="" />
          </div>
          <!-- <div class="menu_img" @click="changeTab('set')">
            <img src="@/assets/maxio/set.svg" alt="" />
          </div> -->
        </div>
        <div class="maxio_home_rightContent maxio_sd_rightContent" :class="[showLeft ? 'maxWidth' : '']">
          <sd>
            <div class="maxio_home_card">
              <div class="maxio_pool_list">
                <div class="maxio_pool_item" v-for="(item, index) in rewardList" :key="index">
                  <div class="img_bg reward_bg">
                    <img src="@/assets/maxio/reward.svg" v-if="item.type === 'pool'" />
                    <img src="@/assets/maxio/iot.svg" v-if="item.type === 'iot'" style="width: 120%; height: 120%" />
                  </div>
                  <span class="pool_name">{{ item.name }}</span>
                  <span class="reward_value">{{ item.number }} DMC</span>
                </div>
              </div>
            </div>
            <div class="reward_type_box">
              <nut-tabs v-model="rewardType" size="small" :ellipsis="hideText">
                <nut-tab-pane title="Minning Pool Reward" pane-key="pool" class="reward_pool_box_parent">
                  <div class="reward_pool_box">
                    <div class="reward_pool_title"> Pool - {{ activePool }}</div>
                    <nut-tabs v-model="activePool" size="small" :ellipsis="hideText" v-if="poolList.length > 1">
                      <nut-tab-pane :title="item.bucket" :pane-key="item.bucket" v-for="(item, index) in poolList" :key="index">
                        <div class="today_reward_item">
                          <span class="today_text">Today Anticipated</span>
                          <span class="today_value">+3,490</span>
                        </div>
                        <nut-tabs v-model="timeType" size="small" :ellipsis="hideText">
                          <nut-tab-pane title="Day" pane-key="Day"> Day</nut-tab-pane>
                          <nut-tab-pane title="Week" pane-key="Week"> Week</nut-tab-pane>
                          <nut-tab-pane title="Month" pane-key="Month"> Month</nut-tab-pane>
                        </nut-tabs>
                      </nut-tab-pane>
                    </nut-tabs>
                    <div v-else>
                      <div class="today_reward_item">
                        <span class="today_text">Today Anticipated</span>
                        <span class="today_value">+3,490</span>
                      </div>
                      <nut-tabs v-model="timeType" size="small" :ellipsis="hideText">
                        <nut-tab-pane title="Day" pane-key="Day">
                          <div class="reward_list" v-for="(item, index) in rewardDetailList" :key="index">
                            <div class="img_box">
                              <img src="@/assets/maxio/reward.svg" alt="" />
                            </div>
                            <div class="reward_list_center">
                              <div class="title">Daily Reward</div>
                              <div class="time">{{ handleTime(item) }}</div>
                            </div>
                            <div class="reward_list_value">+ {{ item.income }}</div>
                          </div>
                        </nut-tab-pane>
                        <nut-tab-pane title="Week" pane-key="Week"> Week</nut-tab-pane>
                        <nut-tab-pane title="Month" pane-key="Month"> Month</nut-tab-pane>
                      </nut-tabs>
                    </div>
                  </div>
                </nut-tab-pane>
                <nut-tab-pane title="IOT Reward" pane-key="iot" class="reward_pool_box_parent"> IOT Reward</nut-tab-pane>
              </nut-tabs>
            </div>
          </sd>

          <!-- <img src="@/assets/maxio/poolReward.png" alt="" style="width: 100%" /> -->
          <!-- <img src="@/assets/maxio/iotReward.png" alt="" style="width: 100%" /> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import moment from 'moment';
  import sd from './sd.vue';
  import { ref, toRefs, computed } from 'vue';
  const hideText = false;
  const router = useRouter();
  const route = useRoute();
  const showLeft = ref(true);
  const rewardType = ref('pool');
  const timeType = ref('Day');
  const activePool = ref('');
  const doShowLeft = () => {
    showLeft.value = !showLeft.value;
  };
  const rewardList = ref([
    { name: 'Minning Reward', number: '100.0000', type: 'pool' },
    { name: 'IOT Reward', number: '200.0000', type: 'iot' },
  ]);
  const poolList = ref([]);
  poolList.value = [
    {
      id: '2',
      bucket: 'sharebucket1',
      createdAt: '2024-03-20T06:11:36.77584197Z',
      delete_data: false,
      dmc_account: 'yitianyitian',
      expire_on_week: 25,
      is_delete: 0,
      is_pin: false,
      memo: '',
      miner_pool_addr: '',
      miner_pool_name: 'MAXIO_POOL', //1
      pin_size: '1024',
      space: '1024', //2
      stack_asset: '',
      status: 'finish',
      updatedAt: '2024-03-20T06:11:58.794228845Z',
    },
    // {
    //   id: '2',
    //   bucket: 'sharebucket2',
    //   createdAt: '2024-03-20T06:11:36.77584197Z',
    //   delete_data: false,
    //   dmc_account: 'yitianyitian',
    //   expire_on_week: 25,
    //   is_delete: 0,
    //   is_pin: false,
    //   memo: '',
    //   miner_pool_addr: '',
    //   miner_pool_name: 'MAXIO_POOL', //1
    //   pin_size: '1024',
    //   space: '1024', //2
    //   stack_asset: '',
    //   status: 'finish',
    //   updatedAt: '2024-03-20T06:11:58.794228845Z',
    // },
  ];
  const rewardDetailList = [
    {
      income: 15.36,
      period: '2024-04-14T00:00:00Z',
    },
    {
      income: 16.76,
      period: '2024-04-13T00:00:00Z',
    },
  ];
  activePool.value = poolList.value[0].bucket;
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
  const handleTime = (item) => {
    let time = moment.utc(item.period).subtract(24, 'hours').local();
    return time.format('MM-DD');
  };
</script>

<style lang="scss" scoped>
  @import url('./common.scss');
  @import url('./index.scss');
</style>
<style lang="scss">
  .maxio_reward_page {
    .reward_type_box {
      border-radius: 10px;
      .nut-tabs__titles {
        padding: 0 10px;
      }
      .nut-tabs__titles-item,
      .nut-tab-pane,
      .nut-tabs__titles {
        background: transparent;
        color: #fff;
        font-weight: bolder;
        &.active {
          color: #fac858;
        }
      }
      .nut-tabs__titles {
        background: #f8f8f866;
        border-radius: 10px;
        padding: 0px 4px;
        margin: 10px 0;
        height: 60px;
      }
      .nut-tabs__titles-item__line {
        background: linear-gradient(345deg, #6841ea 0%, rgb(243 206 10) 100%) !important;
        background: linear-gradient(345deg, #e29219 0%, rgb(224 214 33) 100%) !important;
        width: 80% !important;
        border-radius: 10px;
        font-weight: bolder;
      }
      .nut-tab-pane {
        padding: 14px 16px !important;
      }
      .reward_pool_title {
        margin-bottom: 20px;
        height: 50px;
        line-height: 50px;
        border-bottom: 8px solid #fff;
      }
      .reward_pool_box_parent {
        border: 1px solid #fff !important;
        border-radius: 10px;
        margin: 20px 0;
        .today_reward_item {
          background: red;
          padding: 4px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          box-shadow:
            rgba(0, 0, 0, 0.25) 0px 54px 55px,
            rgba(0, 0, 0, 0.12) 0px -12px 30px,
            rgba(0, 0, 0, 0.12) 0px 4px 6px,
            rgba(0, 0, 0, 0.17) 0px 12px 13px,
            rgba(0, 0, 0, 0.09) 0px -3px 5px;
        }
      }
      .reward_list {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 26px;
        padding: 10px 0;
        border-bottom: 1px dashed #f8f8f8;
        border-bottom: 1px dashed #f8f8f87a;
        .img_box {
          padding: 10px;
          box-sizing: border-box;
          background-color: #fff;
          border-radius: 50%;
          background-color: #e5a041;
          width: 70px;
          height: 70px;
          box-shadow:
            rgba(0, 0, 0, 0.25) 0px 54px 55px,
            rgba(0, 0, 0, 0.12) 0px -12px 30px,
            rgba(0, 0, 0, 0.12) 0px 4px 6px,
            rgba(0, 0, 0, 0.17) 0px 12px 13px,
            rgba(0, 0, 0, 0.09) 0px -3px 5px;
          img {
            width: 50px;
            height: 50px;
          }
        }
      }
    }
  }
</style>

<template>
  <div class="maxio_home_bg maxio_reward_page maxio_child_bg">
    <div class="maxio_home">
      <div class="maxio_home_head">
        <div class="maxio_home_headLogo">
          <div class="maxio_logo">
            <!-- <img src="@/assets/maxio/list.svg" alt="" @click="changeTab('home')" /> -->
            <img src="@/assets/maxio/change.svg" alt="" style="margin-left: 10px" @click="doShowLeft" />
          </div>
        </div>

        <div class="maxio_title_box">
          <div class="maxio_title">
            <img src="@/assets/maxio/maxio.png" alt="" />
            <div class="title_text">
              <!-- <div class="max_name"> MAXIO-001</div> -->
              <div class="max_name"> {{ currentItem.dedicatedip || 'MAX IO-' + currentItem.id }}</div>
            </div>
          </div>
          <!-- <div class="max_ip"> (192.168.1.1)</div> -->
          <div class="max_ip"> MAXIO Reward</div>
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
                    <img src="@/assets/maxio/pool.svg" v-if="item.type === 'pool'" />
                    <img src="@/assets/maxio/room2.svg" v-if="item.type === 'iot'" />
                    <!-- <img src="@/assets/maxio/iot.svg" v-if="item.type === 'iot'" style="width: 120%; height: 120%" /> -->
                  </div>
                  <span class="pool_name">{{ item.name }}({{ item.type === 'iot' ? item.iotNumber : item.count }})</span>
                  <span class="reward_value">{{ item.number ? item.number : '0' }} DMC</span>
                </div>
              </div>
            </div>
            <div class="reward_type_box">
              <nut-tabs v-model="rewardType" size="small" :ellipsis="hideText" @change="changeTopTypeTab">
                <nut-tab-pane
                  :title="pitem.label"
                  :pane-key="pitem.type"
                  class="reward_pool_box_parent"
                  v-for="(pitem, pindex) in ptypeList"
                  :key="pindex"
                >
                  <div class="reward_pool_box">
                    <div class="reward_pool_title">
                      <img src="@/assets/maxio/pool.svg" alt="" v-if="rewardType === 'pool'" />
                      <img src="@/assets/maxio/room1.svg" alt="" v-if="rewardType === 'iot'" style="" />
                      {{ rewardType === 'pool' ? 'Pool' : 'IOT' }} - {{ activePool }}</div
                    >
                    <nut-tabs v-model="activePool" size="small" :ellipsis="hideText" v-if="poolList.length > 1" @change="changeTypeTab()">
                      <nut-tab-pane
                        :title="item.bucket || item.groupname"
                        :pane-key="item.bucket || item.groupname"
                        v-for="(item, index) in poolList"
                        :key="index"
                      >
                        <!-- <div class="today_reward_item">
                          <span class="today_text">Today Anticipated</span>
                          <span class="today_value">+3,490</span>
                        </div> -->
                        <nut-tabs v-model="timeType" size="small" :ellipsis="hideText" @change="changeTypeTab(item)">
                          <nut-tab-pane :title="_item.key" :pane-key="_item.value" v-for="(_item, _key) in changeTabList" :key="_key">
                            <div class="reward_list" v-for="(item, index) in rewardDetailList" :key="index">
                              <div class="img_box">
                                <img src="@/assets/maxio/reward.svg" alt="" />
                              </div>
                              <div class="reward_list_center">
                                <div class="title">{{ _item.key }} Reward</div>
                                <div class="time">{{ handleTime(item) }}</div>
                              </div>
                              <div class="reward_list_value">+ {{ item.income }} </div>
                            </div>
                            <div v-if="!rewardDetailList.length">
                              <img src="@/assets/maxio/empty.svg" alt="" style="" class="empty_img" />
                              <div class="empty_img_text">There is currently no new data available</div>
                            </div>
                          </nut-tab-pane>
                        </nut-tabs>
                      </nut-tab-pane>
                    </nut-tabs>
                    <!-- poolList.length ===1 -->
                    <div v-else>
                      <!-- <div class="today_reward_item">
                        <span class="today_text">Today Anticipated</span>
                        <span class="today_value">+3,490</span>
                      </div> -->
                      <nut-tabs v-model="timeType" size="small" :ellipsis="hideText" @change="changeTypeTab(item)">
                        <nut-tab-pane :title="_item.key" :pane-key="_item.key" v-for="(_item, _key) in changeTabList" :key="_key">
                          <div class="reward_list" v-for="(item, index) in rewardDetailList" :key="index">
                            <div class="img_box">
                              <img src="@/assets/maxio/reward.svg" alt="" />
                            </div>
                            <div class="reward_list_center">
                              <div class="title">{{ _item.key }} Reward</div>
                              <div class="time">{{ handleTime(item) }}</div>
                            </div>
                            <div class="reward_list_value">+ {{ item.income && Number(item.income).toFixed(4) }}</div>
                          </div>
                          <div v-if="!rewardDetailList.length">
                            <img src="@/assets/maxio/empty.svg" alt="" style="" class="empty_img" />
                            <div class="empty_img_text">There is currently no new data available</div>
                          </div>
                        </nut-tab-pane>
                      </nut-tabs>
                    </div>
                  </div>
                </nut-tab-pane>
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
  import { searchDeviceEarningsAPI } from '@/api/index';
  import { ref, toRefs, computed, onMounted } from 'vue';
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
  import getList from './maxFileOpt/getList';
  const { getTimeReward } = getList();
  //   const rewardList = ref([
  //     { name: 'Minning Reward', number: '100.0000', type: 'pool' },
  //     { name: 'IOT Reward', number: '200.0000', type: 'iot' },
  //   ]);
  const ptypeList = ref([]);
  ptypeList.value = [
    { label: 'Minning Pool Reward', type: 'pool' },
    { label: 'IOT Reward', type: 'iot' },
  ];
  const curIot = ref('');
  const poolList = ref([]);
  const iotList = ref([]);
  const currentItem = ref({});
  const changeTabList = ref([
    { key: 'Day', value: 'Day' },
    { key: 'Week', value: 'Week' },
    { key: 'Month', value: 'Month' },
  ]);
  //   const rewardDetailList = [
  //     {
  //       income: 15.36,
  //       period: '2024-04-14T00:00:00Z',
  //     },
  //     {
  //       income: 16.76,
  //       period: '2024-04-13T00:00:00Z',
  //     },
  //   ];
  const rewardDetailList = ref([]);
  const rewardList = ref([]);

  onMounted(() => {
    ptypeList.value = [];
    currentItem.value = JSON.parse(window.localStorage.homeChooseBucket);
    let myRewardList = JSON.parse(window.localStorage.getItem('rewardList'));
    if (myRewardList && myRewardList.length > 0) {
      rewardList.value = myRewardList.filter((item) => {
        return item.type !== 'ipfs';
      });
      if (myRewardList[0].count > 0) {
        ptypeList.value.push({ label: 'Minning Pool Reward', type: 'pool' });
        rewardType.value = 'pool';
      } else if (myRewardList[1].count > 0) {
        rewardType.value = 'iot';
      }
      if (myRewardList[1].count > 0) {
        ptypeList.value.push({ label: 'IOT Reward', type: 'iot' });
      }
    } else {
      rewardList.value = [];
      ptypeList.value = [];
    }
    initTableList();
  });
  const changeTypeTab = (item) => {
    findId();
    getTimeRewardData();
  };
  const findId = () => {
    console.log(poolList.value, activePool.value);
    for (let i = 0; i < poolList.value.length; i++) {
      if (poolList.value[i].groupname === activePool.value) {
        curIot.value = poolList.value[i].deviceid;
      }
    }
  };
  const changeTopTypeTab = () => {
    initTableList();
  };
  const initTableList = () => {
    let pList = [];
    if (rewardType.value === 'pool') {
      let myPoolList = JSON.parse(window.localStorage.getItem('myPoolList'));
      pList = myPoolList;
    } else if (rewardType.value === 'iot') {
      let myIotList = JSON.parse(window.localStorage.getItem('myIotList'));
      for (let i = 0; i < myIotList.length; i++) {
        if (myIotList[i].listList.length > 0) {
          pList = myIotList[i].listList;
        }
      }
      //   pList = myIotList;
    }
    if (pList && pList.length > 0) {
      poolList.value = pList;
      activePool.value = poolList.value[0].bucket || poolList.value[0].groupname;
    } else {
      poolList.value = [];
      activePool.value = '';
    }
    getTimeRewardData();
  };
  const getTimeRewardData = async () => {
    let type = rewardType.value === 'pool' ? 'miner_pool' : 'iot';
    let params1 = {};
    let start = '';
    let end = '';
    if (rewardType.value === 'pool') {
      params1 = {
        device_id: currentItem.value.device_id,
        asset_type: type,
        start_time: '',
        end_time: '',
        cycle: timeType.value,
        bucket: activePool.value,
        total: false,
      };
    } else {
      params1 = {
        device_id: currentItem.value.device_id,
        asset_type: type,
        start_time: '',
        end_time: '',
        cycle: timeType.value,
        bucket: '',
        iot_device_id: curIot.value,
        total: false,
      };
    }
    // console.log(timeType.value, 'timeType.valuetimeType.value');

    searchDeviceEarningsAPI(params1).then((res) => {
      if (res && res.result) {
        // console.log(res.result, 'sesweses');
        rewardDetailList.value = res.result.counts;
      }
    });
  };
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
  @import url('./maxFileOpt/style/common.scss');
  @import url('./maxFileOpt/style/index.scss');
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
        background: rgb(248 248 248 / 6%);
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
        text-align: left;
        font-style: normal !important;
        img {
          width: 40px;
          height: 40px;
          margin-left: 6px;
          transform: scale(1.3);
          object-fit: contain;
          margin-right: 8px;
        }
      }
      .reward_pool_box_parent {
        border: 1px solid #373737 !important;
        background: #212121;
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
        // justify-content: space-between;
        font-size: 26px;
        padding: 10px 0;
        border-bottom: 1px dashed #f8f8f8;
        border-bottom: 1px dashed #f8f8f87a;
        .img_box {
          padding: 10px;
          box-sizing: border-box;
          background-color: #fff;
          border-radius: 50%;
          background-color: transparent;
          width: 70px;
          height: 70px;
          box-shadow: #ffd700 0px 0px 1.066667vw;
          //   border: 1px solid #ffd700;
          //   box-shadow:
          //     rgba(0, 0, 0, 0.25) 0px 54px 55px,
          //     rgba(0, 0, 0, 0.12) 0px -12px 30px,
          //     rgba(0, 0, 0, 0.12) 0px 4px 6px,
          //     rgba(0, 0, 0, 0.17) 0px 12px 13px,
          //     rgba(0, 0, 0, 0.09) 0px -3px 5px;
          img {
            width: 50px;
            height: 50px;
          }
        }
      }
    }
  }
  .reward_list_center {
    font-size: 22px;
    font-style: normal !important;
    text-align: center;
    width: calc(100% - 180px);
    .title {
      height: 30px;
    }
    .time {
      font-size: 18px;
      font-weight: bolder;
    }
  }
  .reward_list_value {
    font-style: normal !important;
    font-size: 22px;
    color: #dfba33;
  }
  .empty_img {
    width: 200px;
    height: 200px;
  }
  .empty_img_text {
    font-size: 18px;
  }
</style>

<template>
  <div class="maxio_home_bg maxio_home_pool maxio_child_bg">
    <div class="maxio_home">
      <div class="maxio_home_head">
        <div class="maxio_home_headLogo">
          <div class="maxio_logo">
            <img src="@/assets/maxio/change.svg" alt="" style="margin-left: 10px" @click="doShowLeft" />
          </div>
        </div>

        <div class="maxio_title_box">
          <img src="@/assets/maxio/beta.svg" class="betaPng" />
          <div class="maxio_title">
            <img src="@/assets/maxio/maxio.png" alt="" />
            <div class="title_text">
              <div class="max_name"> {{ currentItem.dedicatedip }}</div>
            </div>
          </div>
          <div class="max_ip">Max AirDrop</div>
        </div>
        <div class="maxio_img" @click="changeTab('home')">
          <img src="@/assets/maxio/back.svg" alt="" class="icon_img" />
        </div>
      </div>

      <div class="maxio_home_content">
        <div class="maxio_home_leftMenu" :class="[showLeft ? '' : 'minWidth']">
          <div class="menu_img" @click="changeTab('file')">
            <img src="@/assets/maxio/file.svg" alt="" />
          </div>
          <div class="menu_img" @click="changeTab('reward')">
            <img src="@/assets/maxio/reward.svg" alt="" />
          </div>
          <div class="menu_img" @click="changeTab('iot')">
            <img src="@/assets/maxio/iot1.svg" alt="" />
          </div>
          <div class="menu_img" @click="changeTab('pool')">
            <img src="@/assets/maxio/pool.svg" alt="" />
          </div>
          <div class="menu_img active_img" @click="changeTab('airdrop')">
            <img src="@/assets/maxio/airDrop.svg" alt="" />
          </div>
          <div class="menu_img" @click="changeTab('wallet')">
            <img src="@/assets/maxio/walletBind.svg" alt="" />
          </div>
        </div>
        <div class="maxio_home_rightContent maxio_sd_rightContent" :class="[showLeft ? 'maxWidth' : '']">
          <sd>
            <!-- <div class="commng_soon_box">
              <div class="commng_soon_1">Max AirDrop</div>
              <div class="commng_soon">Coming soon...</div>
              <img src="@/assets/maxio/comming.svg" />
            </div> -->
            <div class="airdorp_root">
              <div class="airdrop_head">
                <div class="airdrop_head_left">
                  <div class="h1_title">AirDrop </div>
                  <div class="h1_title"> Center</div>
                  <!-- <div class="h1_info">
                    {{ airdropDes }}
                  </div> -->
                </div>
                <div class="airdrop_head_right">
                  <div class="h1_title_right">Session end date</div>
                  <div class="h1_title_box">
                    <div class="h1_title_box_row" v-if="activeDay">
                      <div class="h1_title_box_rowTime">{{ activeDay }}</div>
                      <div class="h1_title_box_rowUnit">DAYS</div>
                    </div>
                    <div class="h1_title_box_row">
                      <div class="h1_title_box_rowTime">{{ activeTimeHour }}</div>
                      <div class="h1_title_box_rowUnit">HOURS</div>
                    </div>
                    <div class="h1_title_box_row">
                      <div class="h1_title_box_rowTime">{{ activeTimeMin }}</div>
                      <div class="h1_title_box_rowUnit">MINUTES</div>
                    </div>
                    <div class="h1_title_box_row">
                      <div class="h1_title_box_rowTime">{{ activeTimeSen }}</div>
                      <div class="h1_title_box_rowUnit">SECENDS</div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- status_list_tab -->
              <div class="status_list_tab">
                <nut-tabs v-model="currentStatus" size="small" :ellipsis="hideText" @change="changeStatus">
                  <nut-tab-pane
                    :title="item.label"
                    :pane-key="item.value"
                    class="reward_pool_box_parent"
                    v-for="(item, index) in statusList"
                    :key="index"
                  ></nut-tab-pane>
                </nut-tabs>
              </div>
              <!-- list_card_top_line -->
              <div class="list_card_top_line" v-if="currentStatus === 'active'">
                <div class="list_card_top">
                  <div class="list_card_top_item" @click="changeGroupTab('all')" :class="[activeGroup === 'all' ? 'active' : '']">
                    All
                  </div>
                  <div
                    class="list_card_top_item"
                    v-for="(item, key) in centerData"
                    :key="key"
                    @click="changeGroupTab(item.chain_name)"
                    :class="[activeGroup === item.chain_name ? 'active' : '']"
                  >
                    {{ item.chain_name }}
                  </div>
                </div>
              </div>

              <div class="airdrop_capm_list" v-if="currentStatus === 'active'">
                <div class="airdrop_capm_item" v-for="(detail, index) in currentList" :key="index">
                  <div class="airdrop_capm_item_top">
                    <img :src="detail.currency_logo" v-if="detail.currency_logo" />
                    <img src="@/assets/maxio/chain.svg" v-else />
                    <span
                      >{{ detail.chain_name }}<span class="unit">({{ detail.currency }})</span></span
                    >
                  </div>
                  <div class="airdrop_capm_item_content">
                    <span>{{ detail.slogan }}</span>
                    <img :src="detail.cover" />
                  </div>
                  <div class="airdrop_capm_item_keyList">
                    <img :src="detail.currency_logo" v-if="detail.currency_logo" />
                    <img src="@/assets/maxio/reward.svg" v-else />:
                    <span class="airdrop_capm_item_keyValue"
                      >{{ detail.amount }}<span class="unit">{{ detail.currency }}</span></span
                    >
                  </div>
                  <div class="airdrop_capm_item_keyList">
                    <img src="@/assets/maxio/pp.svg" />:
                    <span class="airdrop_capm_item_keyValue">{{ detail.quota || 0 }}</span>
                  </div>
                  <div class="airdrop_capm_item_keyList">
                    <img src="@/assets/maxio/clock.svg" />:
                    <span class="airdrop_capm_item_keyValue">
                      {{ detail.start_time && transferUTCTime(detail.start_time) }}-{{
                        detail.end_time && transferUTCTime(detail.end_time)
                      }}</span
                    >
                  </div>
                  <div class="airdrop_capm_item_btnLine">
                    <div class="airdrop_capm_item_btn" :class="[detail.participate ? 'participate' : 'notparticipate']">
                      {{ detail.participate ? 'Applied' : 'Not applied' }}
                    </div>
                    <!-- <div class="airdrop_capm_item_btn" :class="[detail.participate ? 'participate' : 'notparticipate']">
                      {{ activeStatus[detail.status] }}
                    </div> -->
                    <div class="info_line_time" v-if="handleTimeShow(detail) !== 0">
                      {{ handleTimeShow(detail) }}
                      <span class="str">({{ showTimeStr }})</span>
                    </div>

                    <div
                      class="airdrop_capm_item_btn"
                      @click="gotoDetail(detail)"
                      :class="[detail.participate ? 'airdrop_capm_item_btnColor' : '']"
                      v-if="handleTime(detail) || detail.participate"
                    >
                      {{ detail.participate ? 'View Activities' : 'Join Now' }}
                    </div>
                    <div
                      v-if="!detail.participate && !handleTime(detail)"
                      class="airdrop_capm_item_btn notparticipate"
                      @click="gotoDetail(detail)"
                    >
                      The activity has ended</div
                    >
                  </div>
                </div>
                <div v-if="!currentList.length">
                  <img src="@/assets/maxio/empty.svg" alt="" style="" class="empty_img" />
                  <div class="empty_img_text">There are currently no activities available....</div>
                </div>
              </div>

              <div class="airdrop_capm_list" v-if="currentStatus === 'history'">
                <div class="airdrop_capm_item" v-for="(detail, index) in historyList" :key="index">
                  <div class="airdrop_capm_item_top">
                    <img :src="detail.currency_logo" v-if="detail.currency_logo" />
                    <img src="@/assets/maxio/reward.svg" v-else />
                    <span
                      >{{ detail.chain_name }}<span class="unit">({{ detail.currency }})</span></span
                    >
                  </div>
                  <div class="airdrop_capm_item_content">
                    <span>{{ detail.slogan }}</span>
                    <img :src="detail.cover" />
                  </div>
                  <div class="airdrop_capm_item_keyList">
                    <img src="@/assets/maxio/name.svg" />:
                    <span class="airdrop_capm_item_keyValue">{{ detail.title }}</span>
                  </div>
                  <div class="airdrop_capm_item_keyList">
                    <img src="@/assets/maxio/walletBind.svg" />:
                    <span class="airdrop_capm_item_keyValue">{{ detail.wallet }}</span>
                  </div>
                  <div class="airdrop_capm_item_keyList">
                    <img :src="detail.currency_logo" v-if="detail.currency_logo" />
                    <img src="@/assets/maxio/reward.svg" v-else />:
                    <span class="airdrop_capm_item_keyValue"
                      >{{ detail.amount }}<span class="unit">{{ detail.currency }}</span></span
                    >
                  </div>
                  <div class="airdrop_capm_item_keyList">
                    <img src="@/assets/maxio/clock.svg" />:
                    <span class="airdrop_capm_item_keyValue">
                      {{ detail.start_time && transferUTCTime(detail.start_time) }}-{{
                        detail.end_time && transferUTCTime(detail.end_time)
                      }}</span
                    >
                  </div>
                  <div class="airdrop_capm_item_keyList">
                    <img src="@/assets/maxio/hand.svg" />:
                    <span class="airdrop_capm_item_keyValue"> {{ detail.create_time && transferUTCTime(detail.create_time) }}</span>
                  </div>
                  <div class="airdrop_capm_item_keyList">
                    <img src="@/assets/maxio/time.svg" />:
                    <span class="airdrop_capm_item_keyValue">
                      {{ detail.create_time && transferUTCTime(detail.apply_for_end_time) }}
                      <span class="smallTips" v-if="detail.status == 4 && !compTime(detail)">(It's not yet time for withdrawal)</span></span
                    >
                  </div>
                  <div class="airdrop_capm_item_btnLine">
                    <div class="airdrop_capm_item_btn participate">
                      {{ historyStatus[detail.status] }}
                    </div>
                    <!-- <div class="airdrop_capm_item_btn" v-if="detail.status == 4 && !compTime(detail)">
                      It's not yet time for withdrawal
                    </div> -->
                    <div class="airdrop_capm_item_btn airdrop_capm_item_btnColor" @click="gotoDetail(detail)"> View Activities </div>
                    <div
                      class="airdrop_capm_item_btn"
                      v-if="(detail.status == 4 && compTime(detail)) || detail.status == 6"
                      @click="toWithdraw(detail)"
                    >
                      Withdraw
                    </div>
                  </div>
                </div>
                <div v-if="!historyList.length">
                  <img src="@/assets/maxio/empty.svg" alt="" style="" class="empty_img" />
                  <div class="empty_img_text">There is no history of participating in activities under your current account...</div>
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
  import { ref, toRefs, computed, onMounted, onUnmounted } from 'vue';
  import loadingImg from '@/components/loadingImg/index.vue';
  import { showToast } from '@nutui/nutui';
  const historyStatus = ref({
    1: 'Initial',
    2: 'Not selected',
    3: 'Selected',
    4: 'Calculated',
    5: 'Claimed',
    6: 'Claim failed',
    7: 'Received',
    9: 'Withdrawal suspended',
  });
  const activeStatus = ref({
    1: 'Pending',
    2: 'Ongoing',
    3: ' Applied successfully',
    4: 'Not allocated',
    5: 'Allocated',
    6: 'Allocated',
    7: 'Withdraw in progress',
    8: 'Withdraw successfully',
    9: 'Withdraw failed',
    13: 'COMPLETED',
    11: 'Event suspended',
    12: ' Withdraw suspended',
  });
  import sd from './sd.vue';
  import moment from 'moment';
  const router = useRouter();
  const route = useRoute();
  const showLeft = ref(true);
  const airdropDes = ref('');
  const activeDownCountTimer = ref(null);
  const activeTimeHour = ref(0);
  const activeTimeMin = ref(0);
  const activeTimeSen = ref(0);
  const activeDay = ref(0);
  const newList = ref([]);
  const centerData = ref({});
  const campaignList = ref([]);
  const activeGroup = ref('all');
  const allList = ref([]);
  const currentList = ref([]);
  const showTimeStr = ref('');
  const statusList = ref([
    { label: 'Active', value: 'active' },
    { label: 'My Activities', value: 'history' },
  ]);
  const currentStatus = ref('active');
  const historyList = ref([]);

  import { campaignCenterChain, campaignCenterList, campaignNew, getAirdropDes, get_campaignApply, post_campaignClaim } from '@/api/index';
  const doShowLeft = () => {
    showLeft.value = !showLeft.value;
  };
  import { getfilesize, transferTime, transferUTCTime } from '@/utils/util';
  const currentItem = ref({});
  const poolList = ref([]);
  const changeStatus = (val, val1) => {
    console.log('changeStatus', val, val1, currentStatus.value);
  };
  const getDes = () => {
    getAirdropDes().then((res) => {
      if (res?.data) {
        airdropDes.value = res.data;
      }
    });
  };
  const initCnter = async () => {
    showToast.loading('Loading', {
      cover: true,
      coverColor: 'rgba(0,0,0,0.45)',
      customClass: 'app_loading',
      icon: loadingImg,
      loadingRotate: false,
    });
    allList.value = [];
    centerData.value = [];
    newList.value = await campaignNew();
    console.log(currentItem.value.device_id, 'currentItem.value');
    let d = {
      maxioUuid: currentItem.value.device_id,
    };
    let res = await campaignCenterChain(d);
    centerData.value = res.data;
    if (centerData.value.length > 0) {
      for (let i = 0; i < centerData.value.length; i++) {
        centerData.value[i].list = [];
        let chain_id = centerData.value[i].chain_id;
        let _data = {
          maxioUuid: currentItem.value.device_id,
          chainId: chain_id,
        };
        let _chainList = await campaignCenterList(_data);
        centerData.value[i].list = _chainList && _chainList.data;
        if (_chainList.data.length) {
          allList.value.push(..._chainList.data);
        }
      }
      currentList.value = allList.value;
      showToast.hide('');
      //   console.log(allList.value, allList.value.length, 'allList.value ', centerData.value, currentList.value);
    }
  };
  const changeGroupTab = (type) => {
    activeGroup.value = type;
    // console.log(allList.value, allList.value.length, 'allList.value ', centerData.value);
    if (type === 'all') {
      currentList.value = allList.value;
    } else {
      for (let i = 0; i < centerData.value.length; i++) {
        if (type === centerData.value[i].chain_name) {
          currentList.value = centerData.value[i].list;
        }
      }
    }
  };
  const initTimer = () => {
    activeDownCountTimer.value = setInterval(() => {
      activeDownCountFn();
    }, 1000);
  };
  const handleTime = (time) => {
    let now = Date.now();
    const endTime = new Date(time.end_time).getTime();
    if (now > endTime) {
      return false;
    } else {
      return true;
    }
  };
  const handleTimeShow = (list) => {
    let now = Date.now();
    const startTime = new Date(list.start_time).getTime();
    const endTime = new Date(list.end_time).getTime();
    let diff = 0;
    let activeTimeDownValue = 0;
    let flag = 0;
    if (now < startTime) {
      diff = Math.max(0, Math.floor((startTime - now) / 1000));
      flag = 'start';
      showTimeStr.value = 'Waiting for start';
    } else if (now < endTime) {
      diff = Math.max(0, Math.floor((endTime - now) / 1000));
      flag = 'end';
      showTimeStr.value = 'Waiting for end';
    }
    if (diff > 0) {
      const day = Math.floor(diff / (60 * 60 * 24));
      const hours = Math.floor(diff / 3600) % 24;
      const minutes = Math.floor((diff % 3600) / 60);
      const seconds = diff % 60;
      activeTimeDownValue = `${day.toString().padStart(2, '0')}:${hours.toString().padStart(2, '0')}:${minutes
        .toString()
        .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
    return activeTimeDownValue;
  };
  const activeDownCountFn = () => {
    if (newList.value && newList.value?.data) {
      const now = Date.now();
      const lastDate = newList.value.data.endTime;
      const _startTime = new Date(lastDate).getTime();
      const _diff = Math.max(0, Math.floor((_startTime - now) / 1000));
      if (_diff > 0) {
        var day = Math.floor(_diff / (60 * 60 * 24));
        const hours = Math.floor(_diff / 3600) % 24;
        const minutes = Math.floor((_diff % 3600) / 60);
        const seconds = _diff % 60;
        activeDay.value = `${day.toString().padStart(2, '0')}`;
        activeTimeHour.value = `${hours.toString().padStart(2, '0')}`;
        activeTimeMin.value = `${minutes.toString().padStart(2, '0')}`;
        activeTimeSen.value = `${seconds.toString().padStart(2, '0')}`;
      }
    }
  };
  const toWithdraw = (item) => {
    let data = {
      campaignId: item.campaign_id,
      maxioUuid: currentItem.value.device_id,
    };
    post_campaignClaim(data).then((r) => {
      showToast.success('Added to the withdrawal queue...');
      initHistory();
    });
  };
  onMounted(() => {
    currentItem.value = JSON.parse(window.localStorage.homeChooseBucket);
    let myPoolList = JSON.parse(window.localStorage.getItem('myPoolList'));
    if (myPoolList && myPoolList.length > 0) {
      poolList.value = myPoolList;
    } else {
      poolList.value = [];
    }
    getDes();
    initCnter();
    initTimer();
    initHistory();
  });
  const compTime = (item) => {
    let apply_for_start_time = item.apply_for_start_time;
    const startTime = new Date(apply_for_start_time).getTime();
    const now = Date.now();
    const diff = Math.max(0, Math.floor((now - startTime) / 1000));
    if (diff > 0) {
      return true;
    } else {
      return false;
    }
  };
  const initHistory = () => {
    let data = {
      key: '',
      maxioUuid: currentItem.value.device_id,
      pageNo: 1,
      pageSize: 10,
    };
    get_campaignApply(data).then((res) => {
      console.log('initHistory', res);
      historyList.value = res.data.list;
      //   let _historyList = {
      //     code: 200,
      //     msg: 'Succeed',
      //     data: {
      //       list: [
      //         {
      //           id: 11,
      //           maxio_uuid: '03000200-0400-0500-0006-000700080009',
      //           chain_id: 137,
      //           chain_name: 'Polygon Mainnet',
      //           chain_group_id: 1,
      //           chain_group_name: 'EVM',
      //           currency: 'MATIC',
      //           wallet: '0xf97bb5db0c5aee67051faea1669110eed171cc10',
      //           amount: '0',
      //           start_time: '2024-06-26T06:55:49.000Z',
      //           end_time: '2024-06-28T07:48:53.000Z',
      //           apply_for_start_time: '2024-06-28T16:00:00.000Z',
      //           apply_for_end_time: '2044-06-28T16:00:00.000Z',
      //           campaign_id: 34,
      //           title: 'iotxmainx------cc',
      //           type: 2,
      //           status: 3,
      //           update_time: '2024-06-26T08:05:33.000Z',
      //           create_time: '2024-06-26T08:05:33.000Z',
      //           tags: '{}',
      //         },
      //       ],
      //       total: 1,
      //     },
      //     time: 1719391356204,
      //   };
      //   historyList.value = _historyList.data.list;
    });
  };
  const gotoDetail = (item) => {
    window.localStorage.setItem('currentActive', JSON.stringify(item));
    router.push({ path: '/airDropDetail' });
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
    } else if (type === 'airdrop') {
      router.push({ path: '/airDropList' });
    } else if (type === 'wallet') {
      router.push({ path: '/walletList' });
    }
  };
  onUnmounted(() => {
    clearInterval(activeDownCountTimer.value);
  });
</script>

<style lang="scss" scoped>
  @import url('./maxFileOpt/style/common.scss');
  @import url('./maxFileOpt/style/index.scss');
  @import url('./maxFileOpt/style/airdrop.scss');
</style>
<style lang="scss">
  .status_list_tab {
    border-radius: 10px;
    .nut-tabs__titles {
      padding: 0 10px;
    }
    .nut-tabs__titles-item,
    .nut-tab-pane,
    .nut-tabs__titles {
      background: transparent;
      color: #fff !important;
      font-weight: bolder;
      &.active {
        color: #fac858;
        color: #88f948 !important;
      }
    }
    .nut-tabs__titles {
      background: #f8f8f866;
      background: #5b695469;
      border-radius: 10px;
      padding: 0px 4px;
      margin: 10px 0;
      height: 66px !important;
    }
    .nut-tabs__titles-item__line {
      background: linear-gradient(345deg, #6841ea 0%, rgb(243 206 10) 100%) !important;
      background: linear-gradient(345deg, #e29219 0%, rgb(224 214 33) 100%) !important;
      background: linear-gradient(275deg, #5edc74 0%, rgb(224, 214, 33) 100%) !important;
      width: 80% !important;
      border-radius: 10px;
      font-weight: bolder;
    }
    .nut-tab-pane {
      padding: 14px 16px !important;
    }
  }
</style>

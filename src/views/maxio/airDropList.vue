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
              <!-- list_card_top_line -->
              <div class="list_card_top_line">
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
              <div class="airdrop_capm_list">
                <div class="airdrop_capm_item" v-for="(detail, index) in currentList" :key="index">
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
                    <div class="info_line_time">
                      {{ handleTimeShow(detail) }}
                      <span class="str">({{ showTimeStr }})</span>
                    </div>

                    <div class="airdrop_capm_item_btn"> 立即参与 </div>
                  </div>
                </div>
                <div v-if="!currentList.length">
                  <img src="@/assets/maxio/empty.svg" alt="" style="" class="empty_img" />
                  <div class="empty_img_text">There are currently no activities available....</div>
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
  import { campaignCenterChain, campaignCenterList, campaignNew, getAirdropDes } from '@/api/index';
  const doShowLeft = () => {
    showLeft.value = !showLeft.value;
  };
  import { getfilesize, transferTime, transferUTCTime } from '@/utils/util';
  const currentItem = ref({});
  const poolList = ref([]);
  const getDes = () => {
    getAirdropDes().then((res) => {
      if (res?.data) {
        airdropDes.value = res.data;
      }
    });
  };
  const initCnter = async () => {
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

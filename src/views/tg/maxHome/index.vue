<template>
  <div class="drive-page">
    <!-- top_back_line -->
    <div class="top_back_line">
      <div class="inside_blue">
        <div class="back_icons" @click="router.go(-1)">
          <img src="@/assets/tg/shop_back.svg" />
          返回
        </div>
        <div class="balance_options"> MAXIO</div>
      </div>
    </div>
    <div class="drive-page-content">
      <h2>MAXIO:{{ currentTabItem.dedicatedip }} </h2>
      <div class="drive-line">
        <div class="drive-line1">{{ getfilesize(fileListSat.size, 'B') }}</div>
        <div class="drive-line2">{{ usePercent }}%的{{ getfilesize(spaceTotal, 'B') }}</div>
        <!-- <div class="drive-line3"></div> -->
        <nut-progress
          :percentage="usePercent"
          text-inside
          stroke-color="linear-gradient(270deg, rgba(18,126,255,1) 0%,rgba(32,147,255,1) 32.815625%,rgba(13,242,204,1) 100%)"
          status="active"
          style="font-weight: bold"
        />
      </div>
      <div class="items">
        <div class="item" @click="changeTab('all')">
          <div class="item1">
            <img src="@/assets/tg/tg-drive1.png" />
          </div>
          <div class="item2">{{ fileListSat.total }}</div>
          <div class="item3">全部</div>
        </div>
        <div class="item">
          <div class="item1">
            <img src="@/assets/tg/tg-drive2.png" />
          </div>
          <div class="item2">0</div>
          <div class="item3">收藏</div>
        </div>
        <div class="item" v-for="(item, index) in fileListArr" :key="index" @click="changeTab(item.type)">
          <div class="item1">
            <img src="@/assets/tg/tg-drive6.png" v-if="item.type === 'Photos'" />
            <img src="@/assets/tg/tg-drive4.png" v-if="item.type === 'Videos'" />
            <img src="@/assets/tg/tg-drive5.png" v-if="item.type === 'Audio'" />
            <img src="@/assets/tg/tg-drive3.png" v-if="item.type === 'Documents'" />
          </div>
          <div class="item2">{{ item.number }}</div>
          <div class="item3">{{ item.name }}</div>
        </div>
      </div>
    </div>
    <uploader
      :isMobileOrder="true"
      :orderInfo="currentTabItem"
      @getFileList="getFileList"
      @uploadComplete="uploadComplete"
      :prefix="prefix"
    ></uploader>
  </div>
</template>

<script setup>
  import { ref, onMounted } from 'vue';
  import { useUserStore } from '@/store/modules/user';
  import { useI18n } from 'vue-i18n';
  import { search_max } from '@/api';
  import { useRouter, useRoute } from 'vue-router';
  const { locale, t } = useI18n();
  const userStore = useUserStore();
  const router = useRouter();
  const route = useRoute();
  const currentId = ref('');
  import tg1 from '~icons/home/tg1.svg';
  import tg8 from '~icons/home/tg8.svg';
  const list = ref(['@/assets/tg/tg1.gif', '@/assets/tg/tg2.png']);
  import { getfilesize } from '@/utils/util';
  //maxindex code
  import uploader from '@/views/maxio/maxFileOpt/uploader.vue';
  const cloudQuery = ref({});
  import getList from '@/views/maxio/maxFileOpt/getList.ts';
  const CurrentLeftTab = computed(() => userStore.getCurrentLeftTab);
  const currentTabItem = ref({});
  const {
    getMyList,
    myPoolList,
    myIotList,
    MinerReward,
    IOTReward,
    rewardList,
    spaceData,
    fileListArr,
    header,
    initToken,
    CurrentToken,
    spaceTotal,
    fileListSat,
  } = getList();
  const usePercent = computed(() => {
    if (spaceTotal.value) {
      return Number(Number(fileListSat.value.size) / Number(spaceTotal.value)).toFixed(2) * 100;
    }
  });
  onMounted(async () => {
    if (route?.query?.id) {
      currentId.value = route.query?.id;
      if (CurrentLeftTab.value.device_id) {
        currentTabItem.value = CurrentLeftTab.value;
        cloudQuery.value = {
          id: currentTabItem.value.id,
        };
        window.localStorage.setItem('homeChooseBucket', JSON.stringify(currentTabItem.value));
        await initToken(CurrentLeftTab.value);
        await getMyList(CurrentLeftTab.value);
      } else {
        currentTabItem.value = JSON.parse(window.localStorage.getItem('currentMaxIo'));
        window.localStorage.setItem('homeChooseBucket', JSON.stringify(currentTabItem.value));
        cloudQuery.value = {
          id: currentTabItem.value.id,
        };
        await initToken(currentTabItem.value);
        await getMyList(currentTabItem.value);
      }
    }
  });
  const changeTab = (name) => {
    let category = '';
    if (name === 'Photos') {
      category = 1;
    } else if (name === 'Documents') {
      category = 4;
    } else if (name === 'Videos') {
      category = 2;
    } else if (name === 'Audio') {
      category = 3;
    } else {
      category = 0;
    }
    router.push(`/maxioFile?category=${category}`);
  };
  const getFileList = () => {};
  const uploadComplete = async () => {
    console.log('uploadComplete');
    getMyList(currentTabItem.value);
  };
</script>

<style lang="scss" scoped>
  .top_back_line {
    position: relative;
    height: 120px;

    .inside_blue {
      z-index: 999;
      position: absolute;
      top: 0;
      width: 100%;
      height: 100px;
      background: #000;
      overflow: hidden;
      display: flex;
      align-items: center;
      color: #0ca2f8;
      .back_icons {
        margin-left: 20px;
        font-weight: bold;
      }
      .balance_options {
        display: flex;
        align-items: center;
        justify-content: center;
        width: calc(100% - 200px);
        color: #fff;
        font-weight: bolder;
        font-size: 34px;
      }

      .title {
        color: #fff;
        font-size: 1.5rem;
        text-align: center;
        margin-top: 40px;
        width: 100%;
      }

      .total_balance {
        color: #b9d4ff;
        font-size: 1.5rem;
        text-align: center;
        color: #fbcf87;
      }

      .total_balance_value {
        font-weight: 250;
        color: #fff;
        font-size: 1.75rem;
        text-align: center;
        margin-top: 0px;
      }
    }
  }
  .drive-page {
    position: relative;
    height: 100%;
    .drive-page-head {
      position: relative;
      margin: 15px auto;
      width: 90%;
      height: 10vw;
      img {
        position: absolute;
        z-index: 1;
      }
      .img1 {
        top: 10px;
        left: 10px;
        width: 10%;
      }
      .img2 {
        top: 10%;
        left: 25%;
        width: 50%;
      }
      .nut-swiper {
        position: absolute;
        width: 100%;
      }
    }
    .drive-page-content {
      position: relative;
      margin: 15px auto;
      width: 90%;
      h2 {
        margin: 10px 0 20px;
        color: #fff;
        font-size: 28px;
      }
      .drive-line {
        position: relative;
        width: 100%;
        height: 100px;
        color: #fff;
        display: flex;
        align-items: center;
        font-size: 24px;
        .drive-line1 {
          position: absolute;
          top: -2px;
          left: 0px;
          font-weight: 700;
        }
        .drive-line2 {
          position: absolute;
          top: -2px;
          right: 0;
          font-weight: 700;
        }
        .drive-line3 {
          position: absolute;
          top: 50px;
          left: 0;
          width: 100%;
          height: 10px;
          border-radius: 10px;
          background-color: #36363b;
        }
      }
      .items {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .item {
          position: relative;
          width: 48%;
          height: 30vw;
          background: linear-gradient(180deg, #0095eb 0%, #000000 100%);
          border-radius: 30px;
          color: #fff;
          .item1 {
            position: absolute;
            top: 10px;
            left: 10px;
            width: 14vw;
            height: 14vw;
            border: 2px solid;
            border-radius: 50%;
            border-image: linear-gradient(270deg, #ffffff 0%, rgba(153, 153, 153, 0) 88.68%);
            img {
              position: absolute;
              top: 15%;
              left: 15%;
              width: 70%;
              height: 70%;
            }
          }
          .item2 {
            position: absolute;
            bottom: 5vw;
            left: 5vw;
          }
          .item3 {
            position: absolute;
            bottom: 5vw;
            right: 5vw;
          }
        }
      }
    }
  }
</style>

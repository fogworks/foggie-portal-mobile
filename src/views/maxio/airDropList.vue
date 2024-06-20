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
            <div class="commng_soon_box">
              <div class="commng_soon_1">Max AirDrop</div>
              <div class="commng_soon">Coming soon...</div>
              <img src="@/assets/maxio/comming.svg" />
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
    } else if (type === 'airdrop') {
      router.push({ path: '/airDropList' });
    } else if (type === 'wallet') {
      router.push({ path: '/walletList' });
    }
  };
</script>

<style lang="scss" scoped>
  @import url('./maxFileOpt/style/common.scss');
  @import url('./maxFileOpt/style/index.scss');
  .maxio_home_pool {
    .empty_img {
      margin-top: 150px;
    }
    .empty_img_text {
      font-size: 26px;
      margin-top: 20px;
    }
  }
  .commng_soon_box {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 800px;
    flex-direction: column;
    font-weight: bold;
    font-size: 74px;
    white-space: nowrap;
    font-style: italic;
    .commng_soon {
      background-image: linear-gradient(89deg, #0e91dc 10%, #77bbea 40%, #df7a3a 50%, #ffd07f 100%);
      color: transparent;
      background-clip: text;
      line-height: 1;
    }
    .commng_soon_1 {
      font-size: 60px;
      background-image: linear-gradient(90deg, #ff61d3 18%, #c60000 100%);
      color: transparent;
      background-clip: text;
    }
    img {
      width: 100px;
      height: 100px;
      margin-top: 60px;
      animation: changeComm 3s linear infinite;
    }
    @keyframes changeComm {
      10% {
        transform: rotate(0deg);
      }

      100% {
        transform: rotate(180deg);
      }
    }
  }
</style>

<template>
  <div class="maxio_home_bg maxio_child_bg">
    <div class="maxio_home">
      <div class="maxio_home_head">
        <div class="maxio_home_headLogo">
          <div class="maxio_logo">
            <!-- <img src="@/assets/maxio/list.svg" alt="" @click="changeTab('home')" /> -->
            <img src="@/assets/maxio/change.svg" alt="" style="margin-left: 10px" @click="doShowLeft" />
          </div>
        </div>

        <div class="maxio_title_box">
          <img src="@/assets/maxio/beta.svg" class="betaPng" />
          <div class="maxio_title">
            <img src="@/assets/maxio/maxio.png" alt="" />
            <div class="title_text">
              <!-- <div class="max_name"> MAXIO-001</div> -->
              <div class="max_name"> {{ currentItem.dedicatedip || 'MAX IO-' + currentItem.id }}</div>
              <!-- <div class="max_name"> （MAXIO-{{ currentItem.id }} ）</div> -->
            </div>
          </div>
          <div class="max_ip"> File Manage</div>
        </div>
        <div class="maxio_img" @click="changeTab('home')">
          <img src="@/assets/maxio/back.svg" alt="" class="icon_img" />
        </div>
      </div>
      <div class="maxio_home_content">
        <div class="maxio_home_leftMenu" :class="[showLeft ? '' : 'minWidth']">
          <div class="menu_img active_img" @click="changeTab('file')" active_img>
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
          <div class="menu_img" @click="changeTab('airdrop')">
            <img src="@/assets/maxio/airDrop.svg" alt="" />
          </div>
          <div class="menu_img" @click="changeTab('wallet')">
            <img src="@/assets/maxio/walletBind.svg" alt="" />
          </div>
        </div>
        <div class="maxio_home_rightContent maxio_sd_rightContent" :class="[showLeft ? 'maxWidth' : '']">
          <sd>
            <maxAllFileList></maxAllFileList>
          </sd>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, toRefs, computed, onMounted } from 'vue';
  import { getfilesize, transferTime, transferUTCTime } from '@/utils/util';
  import sd from './sd.vue';
  import IconAudio2 from '~icons/home/maudio.svg';
  import IconImage from '~icons/home/mimage.svg';
  import IconDocument from '~icons/home/mdoc.svg';
  import IconVideo from '~icons/home/mvideo.svg';
  import IconOther from '~icons/home/mother.svg';
  import maxFileList from './maxFileList.vue';
  import maxAllFileList from './maxFileOpt/maxAllFileList.vue';

  const chartOptions = ref({});
  const router = useRouter();
  const cloudQuery = ref({});
  const route = useRoute();
  const showLeft = ref(true);
  const fileListArr = ref([]);
  const currentItem = ref({});
  const doShowLeft = () => {
    showLeft.value = !showLeft.value;
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
  onMounted(() => {
    currentItem.value = JSON.parse(window.localStorage.homeChooseBucket);
    fileListArr.value = JSON.parse(window.localStorage.fileListArr);
    const _fileListArr = fileListArr.value.map((item) => {
      let _item = item;
      _item.value = item.total;
      return _item;
    });
  });
</script>

<style lang="scss" scoped>
  @import url('./maxFileOpt/style/common.scss');
  @import url('./maxFileOpt/style/index.scss');
  //   .minWidth {
  //     width: 0 !important;
  //     transform: translateX(-140px);
  //   }
  .maxio_home_rightContent {
    transition: all 0.8s;
    height: 100%;
    box-sizing: border-box;
    width: 100%;
    .maxio_home_title {
      font-weight: bold;
    }
  }
  //   .maxWidth {
  //     width: calc(100% - 120px);
  //   }
  .maxio_home_card {
    margin-bottom: 20px;
    background: #3c3c47;
    width: 100%;
    background: rgb(181 186 202 / 38%);
    // height: 300px;
    border-radius: 30px;
    // margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    // overflow: hidden;
    box-sizing: border-box;
    img {
      width: 90%;
    }
  }
  .nobg {
    background: transparent;
  }
  .maxio_reward_card {
    padding: 20px;
    img {
      width: 80%;
      height: 92%;
      object-fit: contain;
    }
  }
  img {
    width: 100%;
    object-fit: contain;
  }
</style>

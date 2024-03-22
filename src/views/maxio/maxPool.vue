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
              <div class="max_name"> MAXIO-001</div>
            </div>
          </div>
          <div class="max_ip"> (192.168.1.1)</div>
        </div>
        <div class="maxio_img" @click="changeTab('home')">
          <img src="@/assets/maxio/back.svg" alt="" class="icon_img" />
        </div>
      </div>

      <div class="maxio_home_content">
        <div class="maxio_home_leftMenu" :class="[showLeft ? '' : 'minWidth']">
          <div class="menu_img" @click="changeTab('home')">
            <img src="@/assets/maxio/maxio.svg" alt="" />
          </div>
          <div class="menu_img active_img" @click="changeTab('pool')">
            <img src="@/assets/maxio/pool.svg" alt="" />
          </div>
          <div class="menu_img" @click="changeTab('iot')">
            <img src="@/assets/maxio/iot1.svg" alt="" />
          </div>
          <div class="menu_img" @click="changeTab('file')">
            <img src="@/assets/maxio/file.svg" alt="" />
          </div>
          <div class="menu_img" @click="changeTab('reward')">
            <img src="@/assets/maxio/reward.svg" alt="" />
          </div>
          <!-- <div class="menu_img" @click="changeTab('set')">
            <img src="@/assets/maxio/set.svg" alt="" />
          </div> -->
        </div>
        <div class="maxio_home_rightContent" :class="[showLeft ? 'maxWidth' : '']">
          <div class="maxio_home_card">
            <img src="@/assets/maxio/poolOne.png" alt="" />
          </div>
          <div class="maxio_home_card">
            <img src="@/assets/maxio/poolOne.png" alt="" />
          </div>
          <div class="maxio_home_card">
            <img src="@/assets/maxio/poolOne.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, toRefs, computed } from 'vue';
  const router = useRouter();
  const route = useRoute();
  const showLeft = ref(true);
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
    }
  };
</script>

<style lang="scss" scoped>
  @import url('./common.scss');
  .maxio_home_pool {
    .minWidth {
      width: 0 !important;
      transform: translateX(-140px);
    }
    .maxio_home_rightContent {
      transition: all 0.8s;
      height: 100%;
      box-sizing: border-box;
      width: 100%;
      .maxio_home_title {
        font-weight: bold;
      }
    }
    .maxWidth {
      width: calc(100% - 160px);
    }
    .maxio_home_card {
      background: #3c3c47;
      width: 100%;
      background: rgb(181 186 202 / 38%);
      height: 300px;
      border-radius: 30px;
      margin-bottom: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      box-sizing: border-box;
      img {
        width: 90%;
      }
    }
    .maxio_reward_card {
      padding: 20px;
      img {
        width: 100%;
        height: 92%;
        object-fit: contain;
      }
    }
  }
</style>

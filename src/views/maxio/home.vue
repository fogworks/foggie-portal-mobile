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
        <div class="maxio_home_leftMenu">
          <div class="menu_img" @click="changeMenu(1)" :class="[activeTab === 1 ? 'active_img' : '']">
            <!-- <img src="@/assets/maxio/maxio.svg" alt="" /> -->
            <img src="@/assets/maxio/maxio.png" alt="" class="left_max_png" />
          </div>
          <div class="menu_img" @click="changeMenu(2)" :class="[activeTab === 2 ? 'active_img' : '']">
            <!-- <img src="@/assets/maxio/maxio.svg" alt="" /> -->
            <img src="@/assets/maxio/maxio.png" alt="" class="left_max_png" />
          </div>
          <div class="menu_img" @click="changeMenu(3)" :class="[activeTab === 3 ? 'active_img' : '']">
            <!-- <img src="@/assets/maxio/maxio.svg" alt="" /> -->
            <img src="@/assets/maxio/maxio.png" alt="" class="left_max_png" />
          </div>
          <div class="menu_img" @click="changeMenu(4)" :class="[activeTab === 4 ? 'active_img' : '']">
            <!-- <img src="@/assets/maxio/maxio.svg" alt="" /> -->
            <img src="@/assets/maxio/maxio.png" alt="" class="left_max_png" />
          </div>
          <div class="menu_img" @click="changeMenu(5, 'cloud')" :class="[activeTab === 5 ? 'active_img' : '']">
            <img src="@/assets/home_bucket.png" alt="" />
          </div>
          <div class="menu_img" @click="changeMenu(6, 'cloud')" :class="[activeTab === 6 ? 'active_img' : '']">
            <img src="@/assets/home_bucket.png" alt="" />
          </div>
        </div>
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
  const showBucket = ref(false);
  const showDeviceMenu = ref(true);
  const activeTab = ref(1);
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
  const changeMenu = (type, _type) => {
    showDeviceMenu.value = !showDeviceMenu.value;
    activeTab.value = type;
    console.log(activeTab.value, 'activeTab.value');
    if (_type === 'cloud') {
      showBucket.value = true;
      //   router.push({ path: '/cloud' });
    } else {
      showBucket.value = false;
    }
  };
</script>

<style lang="scss">
  @import url('./common.scss');
</style>

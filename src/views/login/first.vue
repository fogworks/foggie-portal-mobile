<template>
  <div class="login_first">
    <!-- @change="gotoLogin" -->
    <van-swipe
      loop
      :init-page="page"
      auto-play="30000000"
      height="100%"
      :pagination-visible="true"
      style="height: 100%; width: 100%"
      :is-prevent-default="false"
      :is-stop-propagation="false"
      :stop-propagation="false"
      @change="swipeChange"
    >
      <van-swipe-item>
        <img src="@/assets/guide1.png" alt="" />
      </van-swipe-item>
      <van-swipe-item>
        <img src="@/assets/guide2.png" alt="" />
      </van-swipe-item>
      <van-swipe-item @click="gotoLogin">
        <img src="@/assets/guide3.png" alt="" />
      </van-swipe-item>
      <van-swipe-item> </van-swipe-item>
      <!-- <van-swipe-item @click="gotoLogin">
        <img src="@/assets/guide.png" alt="" />
      </van-swipe-item> -->
    </van-swipe>
  </div>
</template>

<script lang="ts" setup>
  import { useRouter } from 'vue-router';
  const router = useRouter();
  console.log('aaa-----------');
  function gotoLogin() {
    window.localStorage.setItem('ByBootstrapping', 'yes');
    router.push({ path: '/login' });
  }
  const swipeChange = (index) => {
    console.log(index);
    if (index == 3) {
      gotoLogin();
    }
  };
</script>

<style lang="scss">
  .login_first {
    width: 100%;
    height: 100%;
    z-index: 999999999;
    .nut-swiper-inner,
    .van-swipe-item {
      width: 100%;
      height: 100%;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      background-repeat: no-repeat;
    }
    .van-swipe__indicator:last-child {
      display: none;
    }
  }
</style>

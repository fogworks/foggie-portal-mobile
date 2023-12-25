<template>
  <div class="login_first">
    <!-- @change="gotoLogin" -->
    <nut-swiper
      :init-page="page"
      :loop="false"
      auto-play="30000000"
      height="100%"
      :pagination-visible="true"
      style="height: 100%; width: 100%"
      :is-prevent-default="false"
      :is-stop-propagation="false"
    >
      <nut-swiper-item>
        <img src="@/assets/guide1.png" alt="" />
      </nut-swiper-item>
      <nut-swiper-item>
        <img src="@/assets/guide2.png" alt="" />
      </nut-swiper-item>
      <nut-swiper-item>
        <img src="@/assets/guide3.png" alt="" />
      </nut-swiper-item>
      <nut-swiper-item @click="gotoLogin">
        <img src="@/assets/guide.png" alt="" />
      </nut-swiper-item>
    </nut-swiper>
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
</script>

<style lang="scss">
  .login_first {
    width: 100%;
    height: 100%;
    z-index: 999999999;
    .nut-swiper-inner,
    .nut-swiper-item {
      width: 100%;
      height: 100%;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      background-repeat: no-repeat;
    }
  }
</style>

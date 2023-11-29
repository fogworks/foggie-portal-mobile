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
      <nut-swiper-item>
        <img src="@/assets/guide4.png" alt="" />
      </nut-swiper-item>
      <nut-swiper-item @click="router.push({ path: '/login' })">
        <img src="@/assets/guide.png" alt="" />
      </nut-swiper-item>
    </nut-swiper>
  </div>
</template>

<script lang="ts" setup>
  import { useRouter } from 'vue-router';
  const router = useRouter();
  console.log('aaa-----------');
  function gotoLogin(index) {
    console.log(index, 'indexxx');
    // if (index === 5) {
    //   console.log(index, '0000');
    //   router.push({ path: '/login' });
    // }
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

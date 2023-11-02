<template>
  <router-view />
</template>
<script setup lang="ts">
  import { user, check_promo, bind_user_promo } from '@/api';

  import { bind_promo, check_promo as check_amb_promo } from '@/api/amb';
  import { onMounted } from 'vue';
  import { useUserStore } from '@/store/modules/user';
  import { showToast, showDialog } from '@nutui/nutui';
  import { useRouter, useRoute } from 'vue-router';
  import '@nutui/nutui/dist/packages/dialog/style';
  import '@nutui/nutui/dist/packages/toast/style';

  const userStore = useUserStore();
  const router = useRouter();
  const route = useRoute();
  const uuid = computed(() => userStore.getUserInfo?.uuid);
  const userInfo = computed(() => userStore.getUserInfo);

  let vh = window.innerHeight * 0.01;

  onMounted(async () => {
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });
</script>

<style lang="scss">
  // body {
  //   padding-bottom: 90px !important;
  // }
  #app {
    // height: 100vh;
    color: #2c3e50;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: #f5f7fb;
    -webkit-overflow-scrolling: touch;
    height: calc(var(--vh, 1vh) * 100);
    overflow: auto;
  }
  ::-webkit-scrollbar {
    width: 0px;
    height: 0px;
  }
  :root {
    --nut-toast-font-color: #000;
    --nut-toast-inner-bg-color: #fff;
    --nut-toast-cover-bg-color: rgba(0, 0, 0, 0.5);
  }

  .nut-toast-loading {
    --nut-toast-font-color: #000;
    --nut-toast-inner-bg-color: #fff;
    --nut-toast-cover-bg-color: rgba(0, 0, 0, 0.5);

    .nut-toast-icon-wrapper {
      --nut-toast-font-color: #000;

      .nut-icon-loading {
        color: #000 !important;
      }
    }
  }
  .nut-toast-inner {
    box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.6);
    .nut-toast-text {
      word-break: break-word;
    }
  }
  .nut-icon-success {
    color: #0bde00 !important;
  }
  .nut-icon-failure {
    color: #d81414 !important;
  }
  .app_loading {
    background: #fff;
    .nut-toast-inner {
      box-shadow: none;
    }
  }
  .dialog_class {
    font-size: 30px;
    .nut-dialog__header {
      height: unset;
      font-size: 35px;
    }
    .nut-dialog__content {
      font-size: 30px;
      word-break: break-word;
    }
  }
</style>

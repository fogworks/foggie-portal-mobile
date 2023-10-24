<template>
  <router-view />
</template>
<script setup lang="ts">
  import { user, check_promo, bind_user_promo } from '@/api';

  import { check_user_bind, bind_promo, check_promo as check_amb_promo } from '@/api/amb';
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

  const bindAmb = async () => {
    if (route.path == '/bindDmc' && route.query?.type == 'amb') {
      return false;
    }
    let isAmbCode = false;
    if (userInfo.value.amb_promo_code) {
      await check_amb_promo(userInfo.value.amb_promo_code).then((res) => {
        if (res.code == 200) isAmbCode = true;
      });
    }
    if (isAmbCode) {
      check_user_bind(uuid.value).then((res2) => {
        if (res2.code == 200 && !res2.result.bind) {
          const ambOk = () => {
            // bind_promo({
            //   user_uuid: uuid.value,
            //   amb_promo_code: userInfo.value.amb_promo_code,
            //   email: userInfo.value.email,
            //   dmc_account: userInfo.value.dmc,
            // }).then((res) => {
            //   if (res.code == 200) {
            //     bind_user_promo({
            //       amb_promo_code: userInfo.value.amb_promo_code,
            //     }).then((res) => {
            //       if (res.code == 200) {
            //         showToast.success('Binding successful, you can buy orders');
            //         userStore.setCloudCodeIsBind(true);
            //       }
            //     });
            //   }
            // });
            router.push('/bindDmc?type=amb');
          };
          showDialog({
            title: 'Notice',
            content: `Your ambassador invitation code is ${userInfo.value.amb_promo_code}, Whether or not to go to binding?`,
            onOk: ambOk,
          });
        } else if (res2.result.bind) {
          userStore.setCloudCodeIsBind(true);
        }
      });
    }
  };
  const bindUser = async () => {
    let isUserCode = false;
    if (userInfo.value.amb_promo_code) {
      await check_promo({ promo_code: userInfo.value.amb_promo_code }).then((res) => {
        if (res.code == 200) isUserCode = true;
      });
    }
    if (isUserCode && !userInfo.value.promo_code) {
      const userOk = () => {
        bind_user_promo({ promo_code: userInfo.value.amb_promo_code }).then((res) => {});
      };
      showDialog({
        title: 'Notice',
        content: `Your current invitation code ${userInfo.value.amb_promo_code} is the user's invitation code, are you sure you want to bind it?`,
        onOk: userOk,
      });
    }
  };
  watch(
    uuid,
    async (val) => {
      if (val) {
        bindAmb();
        bindUser();
      }
    },
    { deep: true },
  );
  let vh = window.innerHeight * 0.01;

  onMounted(async () => {
    if (userStore.getToken) {
      let res = await user();
      if (res.data) {
        userStore.setInfo(res.data);
      }
    }
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });
</script>

<style lang="scss">
  #app {
    // height: 100vh;
    color: #2c3e50;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: #f5f7fb;
    -webkit-overflow-scrolling: touch;
    height: calc(var(--vh, 1vh) * 100);
    // overflow: auto;
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
</style>

<template>
  <router-view />
</template>
<script setup lang="ts">
  import { user, check_promo, bind_user_promo } from '@/api';
  import { check_user_bind, bind_promo, check_promo as check_amb_promo } from '@/api/amb';
  import { onMounted } from 'vue';
  import { useUserStore } from '@/store/modules/user';
  import { showToast } from '@nutui/nutui';
  import '@nutui/nutui/dist/packages/toast/style';

  const userStore = useUserStore();
  const uuid = computed(() => userStore.getUserInfo?.uuid);
  // watch(uuid, async (val) => {
  //   console.log(val);

  //   if (val) {
  //     let res = await user();
  //     if (res.data) {
  //       userStore.setInfo(res.data);
  //     }
  //     let isUserCode = false;
  //     let isAmbCode = false;
  //     if (res.data.amb_promo_code) {
  //       check_promo({ promo_code: res.data.amb_promo_code }).then((res) => {
  //         if (res.code == 200) isUserCode = true;
  //       });
  //       check_amb_promo(res.data.amb_promo_code).then((res) => {
  //         if (res.code == 200) isAmbCode = true;
  //       });
  //     }
  //     if (isAmbCode) {
  //       check_user_bind(val).then((res2) => {
  //         if (res2.code == 200 && !res2.result.bind) {
  //           const ambOk = () => {
  //             bind_promo({
  //               user_uuid: val,
  //               amb_promo_code: res.data.amb_promo_code,
  //               email: res.data.email,
  //               dmc_account: res.data.dmc,
  //             }).then((res) => {
  //               showToast.success('Binding successful, you can buy orders');
  //             });
  //           };
  //           showDialog({
  //             title: 'Notice',
  //             content: `Your ambassador invitation code is ${res.data.amb_promo_code}, are you sure you want to bind it?`,
  //             onOk: ambOk,
  //           });
  //         }
  //       });
  //     }
  //     if (isUserCode && !res.data.promo_code) {
  //       const userOk = () => {
  //         bind_user_promo({ promo_code: res.data.amb_promo_code }).then((res) => {});
  //       };
  //       showDialog({
  //         title: 'Notice',
  //         content: `Your current invitation code ${res.data.amb_promo_code} is the user's invitation code, are you sure you want to bind it?`,
  //         onOk: userOk,
  //       });
  //     }
  //   }
  // });
</script>

<style>
  #app {
    height: 100vh;
    color: #2c3e50;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  ::-webkit-scrollbar {
    width: 0px;
    height: 0px;
  }
</style>

<template>
  <router-view />
</template>
<script setup lang="ts">
  import { user } from '@/api';
  import { check_user_bind, bind_promo } from '@/api/amb';
  import { onMounted } from 'vue';
  import { useUserStore } from '@/store/modules/user';

  const userStore = useUserStore();
  onMounted(async () => {
    if (userStore.getToken) {
      let res = await user();
      if (res.data) {
        userStore.setInfo(res.data);
      }
      if (res.data.amb_promo_code) {
        check_user_bind(res.data.uuid).then((res2) => {
          if (res2.code == 200 && !res2.result.bind) {
            bind_promo({
              user_uuid: res.data.uuid,
              amb_promo_code: res.data.amb_promo_code,
            });
          }
        });
      }
    }
  });
</script>

<style>
  #app {
    height: 100vh;
    color: #2c3e50;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>

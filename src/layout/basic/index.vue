<template>
  <van-nav-bar :title="$t($route.meta.title as string)" :left-arrow="!tabbarVisible" @click-left="goBack" />
  <div class="main-page" :class="{ tabbar: tabbarVisible, border: showBorder }">
    <RouterView v-slot="{ Component }" v-if="$route.meta.keepAlive">
      <keep-alive>
        <component :is="Component" :key="$route.path" />
      </keep-alive>
    </RouterView>
    <RouterView v-if="!$route.meta.keepAlive" :key="$route.path" />
  </div>
  <nut-tabbar unactive-color="#364636" active-color="#1989fa" bottom v-model="activeTab" v-show="tabbarVisible" @tab-switch="tabSwitch">
    <nut-tabbar-item v-for="item in tabItem" :key="item.key" :tab-title="$t(`tabbar.${item.key}`)" :icon="item.icon" />
  </nut-tabbar>
</template>

<script lang="ts" setup name="BasicLayoutPage">
  import { useRouter } from 'vue-router';
  import { Home, Horizontal, My } from '@nutui/icons-vue';
  import { user } from '@/api';
  import { check_user_bind, bind_promo } from '@/api/amb';
  import { onMounted } from 'vue';
  import { useUserStore } from '@/store/modules/user';

  const userStore = useUserStore();
  const tabItem = [
    { key: 'home', icon: Home },
    { key: 'list', icon: Horizontal },
    { key: 'member', icon: My },
    // { key: 'demo', icon: Location },
  ];

  const router = useRouter();

  const activeTab = ref(0);

  const tabbarVisible = ref(true);

  const showBorder = ref(true);

  watch(
    () => router,
    () => {
      const judgeRoute = tabItem.some((item) => item.key === router.currentRoute.value.path.replace('/', ''));
      activeTab.value = tabItem.findIndex((item) => item.key === router.currentRoute.value.path.replace('/', ''));
      tabbarVisible.value = judgeRoute;
      showBorder.value = judgeRoute;
    },
    { deep: true, immediate: true },
  );

  const tabSwitch = (_item, index) => {
    switch (index) {
      case 0:
        router.push('/home');
        break;
      case 1:
        router.push('/list');
        break;
      case 2:
        router.push('/member');
        break;
      case 3:
        router.push('/demo');
        break;
    }
    activeTab.value = index;
  };

  const goBack = () => {
    router.go(-1);
  };
  onMounted(async () => {
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
  });
</script>

<style scoped lang="scss">
  .nut-navbar {
    margin-bottom: 0;
  }

  .main-page {
    box-sizing: border-box;
    height: calc(100vh - 92px);
    overflow-y: scroll;
    overflow-x: hidden;
  }

  .tabbar {
    height: calc(100vh - 92px);
    padding-bottom: 100px;
  }

  .border {
    padding-left: 30px;
    padding-right: 30px;
  }
</style>

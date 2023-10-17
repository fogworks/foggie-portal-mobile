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
  import { user, check_promo, bind_user_promo } from '@/api';
  import { check_user_bind, bind_promo, check_promo as check_amb_promo } from '@/api/amb';
  import { onMounted } from 'vue';
  import { useUserStore } from '@/store/modules/user';
  import { showToast, showDialog } from '@nutui/nutui';
  import '@nutui/nutui/dist/packages/dialog/style';
  import '@nutui/nutui/dist/packages/toast/style';

  const userStore = useUserStore();
  const uuid = computed(() => userStore.getUserInfo?.uuid);
  const userInfo = computed(() => userStore.getUserInfo);
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
  const bindAmb = async () => {
    let isAmbCode = false;
    if (userInfo.value.amb_promo_code) {
      await check_amb_promo(userInfo.value.amb_promo_code).then((res) => {
        if (res.code == 200) isAmbCode = true;
      });
    }
    if (isAmbCode) {
      if (!userInfo.value.dmc) {
        const dmcOk = () => {
          router.push({ path: '/bindDmc', query: { onlyDMC: true } });
        };
        showDialog({
          title: 'Notice',
          content: `No DMC account yet, please go to bind the account beforehand.`,
          onOk: dmcOk,
        });
        return false;
      }
      check_user_bind(uuid.value).then((res2) => {
        if (res2.code == 200 && !res2.result.bind) {
          const ambOk = () => {
            bind_promo({
              user_uuid: uuid.value,
              amb_promo_code: userInfo.value.amb_promo_code,
              email: userInfo.value.email,
              dmc_account: userInfo.value.dmc,
            }).then((res) => {
              showToast.success('Binding successful, you can buy orders');
            });
          };
          showDialog({
            title: 'Notice',
            content: `Your ambassador invitation code is ${userInfo.value.amb_promo_code}, are you sure you want to bind it?`,
            onOk: ambOk,
          });
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
  watch(uuid, async (val) => {
    if (val) {
      bindAmb();
      bindUser();
    }
  });
  onMounted(async () => {
    if (userStore.getToken) {
      let res = await user();
      if (res.data) {
        userStore.setInfo(res.data);
      }
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
    background: #fff;
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

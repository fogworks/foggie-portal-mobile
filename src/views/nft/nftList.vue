<template>
  <div class="page_box">
    <TopBack class="top_title" type="2"
      ><span class="title">{{ activeTab == 1 ? 'Mint List' : 'Deploy List' }}</span></TopBack
    >
    <ListComponent v-model:activeTab="activeTab" chooseType="1" :imgList="imgList" :contractList="contractList"></ListComponent>
  </div>
</template>

<script setup>
  import { showToast } from '@nutui/nutui';
  import { useUserStore } from '@/store/modules/user';
  import { useRouter } from 'vue-router';
  import TopBack from '@/components/topBack/index.vue';
  import loadingImg from '@/components/loadingImg/index.vue';
  import ListComponent from './listComponent.vue';
  import { search_mint, search_deploy } from '@/api/index.ts';

  const useStore = useUserStore();
  const walletInfo = computed(() => useStore.getUserInfo?.wallet_info);

  const uuid = computed(() => userStore.getUserInfo?.uuid);
  const userStore = useUserStore();
  const router = useRouter();
  const state = reactive({
    activeTab: 1,
    imgList: [],
    contractList: [],
  });
  const { activeTab, imgList, contractList } = toRefs(state);

  const init = async () => {
    let arr = [];
    if (!walletInfo || !walletInfo.value || walletInfo.value.length === 0) {
      return;
    }
    for (let i = 0; i < walletInfo.value.length; i++) {
      arr.push(walletInfo.value[i].address);
    }
    const d = {
      account: arr,
    };
    const res = await search_mint(d);
    if (res?.result?.data) {
      imgList.value = res.result.data;
    }
    const r = await search_deploy(d);
    if (r?.result?.data) {
      contractList.value = r.result.data;
    }
  };
  onMounted(() => {
    init();
  });
  

  watch(walletInfo, (val) => {
    init();
  });
</script>

<style>
  .svelte-g9s19b {
    bottom: 50px !important;
  }
  :root {
    --account-center-position-bottom: 100px;
    --account-center-z-index: -99;
  }
</style>

<style lang="scss" scoped>
  .page_box {
    padding: 30px;
    height: 100%;
    box-sizing: border-box;
    background: #fff;
  }
  .title {
    color: #000;
    font-weight: 700;
  }
  @media screen and (min-width: 500px) {
    .page_box {
      padding: 30px;
      background: #fff;
    }
  }
</style>

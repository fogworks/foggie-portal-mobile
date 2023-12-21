<template>
  <div class="page_box">
    <TopBack class="top_title" type="2"
      ><span class="title">{{ activeTab == 1 ? 'Mint List' : 'Deploy List' }}</span></TopBack
    >
    <ListComponent v-model:activeTab="activeTab" chooseType="1" :imgList="imgList"></ListComponent>
  </div>
</template>

<script setup>
  import { showToast } from '@nutui/nutui';
  import { useUserStore } from '@/store/modules/user';
  import { useRouter } from 'vue-router';
  import TopBack from '@/components/topBack/index.vue';
  import loadingImg from '@/components/loadingImg/index.vue';
  import ListComponent from './listComponent.vue';

  const uuid = computed(() => userStore.getUserInfo?.uuid);
  const userStore = useUserStore();
  const router = useRouter();
  const state = reactive({
    activeTab: 1,
    imgList: [
      {
        imgUrl: require('@/assets/banner1.svg'),
        name: '001',
        price: '0.6310',
        createTime: '2023-12-20',
      },
      {
        imgUrl: require('@/assets/banner1.svg'),
        name: '001',
        price: '0.6310',
        createTime: '2023-12-20',
      },
      {
        imgUrl: require('@/assets/banner1.svg'),
        name: '001',
        price: '0.6310',
        createTime: '2023-12-20',
      },
      {
        imgUrl: require('@/assets/banner1.svg'),
        name: '001',
        price: '0.6310',
        createTime: '2023-12-20',
      },
      {
        imgUrl: require('@/assets/banner1.svg'),
        name: '001',
        price: '0.6310',
        createTime: '2023-12-20',
      },
      {
        imgUrl: require('@/assets/banner1.svg'),
        name: '001',
        price: '0.6310',
        createTime: '2023-12-20',
      },
    ],
  });
  const { activeTab, imgList } = toRefs(state);
  onMounted(async () => {});
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

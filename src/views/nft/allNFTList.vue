<template>
  <div class="page_box">
    <div class="top_img">
      <img src="@/assets/banner1.svg" alt="" />
      <div class="avatar">
        <img src="@/assets/banner1.svg" alt="" />
      </div>
    </div>
    <div class="top_info">
      <p>
        {{ activeTab == 1 ? 'NFT List' : 'Inscription List' }}
      </p>
      <div class="info_box">
        <div class="info_item" v-for="item in infoList">
          <p>{{ item.value }}</p>
          <p>{{ item.text }}</p>
        </div>
      </div>
    </div>
    <ListComponent @gotoMore="gotoMore" has-more v-model:activeTab="activeTab" :tabList="[]" :imgList="imgList"></ListComponent>
  </div>
</template>

<script setup>
  import { useRouter } from 'vue-router';
  import ListComponent from './listComponent.vue';
  const router = useRouter();
  const state = reactive({
    activeTab: 1, //1 nft, 2 inscription
    imgList: [
      {
        imgUrl: require('@/assets/banner1.svg'),
        name: '001',
        price: '0.6310',
        createTime: '2023-12-20',
      },
      {
        imgUrl: require('@/assets/DMC_Token1.png'),
        name: '001',
        price: '0.6310',
        createTime: '2023-12-20',
      },
    ],
    infoList: [
      {
        text: 'Items',
        value: 2140,
      },
      {
        text: 'Fog Drops',
        value: 1140,
      },
    ],
  });
  const { activeTab, imgList, infoList } = toRefs(state);
  const gotoMore = () => {
    if (activeTab.value == 1) {
      router.push({ name: 'NFTList' });
    }
  };
  watch(activeTab, (val) => {
    console.log(val);
  });
</script>

<style lang="scss" scoped>
  .page_box {
    height: 100%;
    background: #fff;
  }
  .top_img {
    position: relative;
    // display: flex;
    // justify-content: center;
    // align-items: center;
    height: 400px;

    img {
      object-fit: cover;
      width: 100%;

      height: 100%;
    }
  }
  .avatar {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -120px;
    width: 250px;
    height: 250px;
    padding: 20px;
    box-sizing: border-box;
    border-radius: 50%;
    background: #fff;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 50%;
    }
  }
  .top_info {
    margin-top: 120px;
    text-align: center;
    > p {
      font-size: 1.4rem;
      font-weight: 800;
    }
    .info_box {
      display: flex;
      justify-content: space-around;
      align-items: center;
      .info_item {
        p {
          font-weight: 600;
          font-size: 1.2rem;
          & + p {
            margin-top: 5px;
            font-weight: normal;
            font-size: 1rem;
            color: #9c9c9c;
          }
        }
      }
    }
  }
</style>

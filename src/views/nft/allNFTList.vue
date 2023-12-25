<template>
  <div class="page_box">
    <div class="top_img">
      <img src="@/assets/banner1.svg" alt="" />
      <div class="avatar">
        <img src="@/assets/banner1.svg" alt="" />
      </div>
    </div>
    <div class="top_info">
      <nut-switch class="check_account" @change="seeTypeChange" v-model="seeType" active-text="Current" inactive-text="All" />
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
    <ListComponent
      @gotoMore="gotoMore"
      has-more
      v-model:activeTab="activeTab"
      :tabList="['NFT List', 'Inscription List']"
      :imgList="imgList"
    ></ListComponent>
  </div>
</template>

<script setup>
  import { useRouter } from 'vue-router';
  import ListComponent from './listComponent.vue';
  import { showToast, showDialog } from '@nutui/nutui';
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
    seeType: false,
  });
  const { seeType, activeTab, imgList, infoList } = toRefs(state);
  const gotoMore = () => {
    if (activeTab.value == 1) {
      router.push({ name: 'NFTList' });
    }
  };
  const seeTypeChange = (val) => {
    showToast.text(`Switched to view ${!seeType.value ? 'all' : 'current'} account data`);
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
    position: relative;
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
    .check_account {
      position: absolute;
      right: 15px;
      top: 15px;
      --nut-switch-close-bg-color: green;
      --nut-switch-width: 4rem;
      --nut-switch-inside-open-transform: translateX(374%);
      --nut-switch-inside-close-transform: translateX(34%);
      :deep {
        .nut-switch-button .nut-switch-label.open {
          transform: translateX(-60px);
        }
      }
    }
  }

  @media screen and (min-width: 500px) {
    .top_img {
      position: relative;
      // display: flex;
      // justify-content: center;
      // align-items: center;
      height: 300px;
      img {
        object-fit: contain;
      }
    }
    .avatar {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: -80px;
      width: 200px;
      height: 200px;
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
      margin-top: 70px;

      .info_box {
        .info_item {
          p {
            & + p {
              margin-top: 5px;
            }
          }
        }
      }
      .check_account {
        position: absolute;
        right: 15px;
        top: 15px;
        --nut-switch-inside-height: 1.5rem;
        --nut-switch-inside-width: 1.5rem;
        --nut-switch-close-bg-color: green;
        --nut-switch-width: 6rem;
        --nut-switch-height: 2rem;
        --nut-switch-inside-open-transform: translateX(280%);
        --nut-switch-inside-close-transform: translateX(34%);
        --nut-font-size-1: 1rem;
        :deep {
          .nut-switch-button .nut-switch-label.open {
            transform: translateX(-46px);
          }
          .nut-switch-button .nut-switch-label.close {
            transform: translateX(2rem);
          }
        }
      }
    }
    :deep {
      .img_list_box {
        height: unset;
      }
    }
  }
</style>

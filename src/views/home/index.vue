<template>
  <nut-noticebar v-if="!userInfo.dmc">
    <template #left-icon>
      <Notice width="20px" left="20px"></Notice>
    </template>
    <span>Not yet bound to a DMC account </span>
    <router-link to="/bindDmc?onlyDMC=true"> Go to Binding</router-link>
  </nut-noticebar>
  <div class="dmc_account" v-else>
    Hello,
    {{ userInfo.dmc }}
  </div>
  <van-cell-group inset class="income-card">
    <template #default>
      <div class="total_title">Cloud Storage Balance </div>
      <div class="total_income">100 DMC</div>
      <van-grid :border="false" :column-num="3">
        <van-grid-item>
          <div> 10000 </div>
          <div> Total Income</div>
        </van-grid-item>
        <van-grid-item>
          <div> 10000 </div>
          <div> Withdrawn </div>
        </van-grid-item>
        <van-grid-item>
          <div> 10000 </div>
          <div> Total </div>
        </van-grid-item>
      </van-grid>
      <van-space class="withdraw-btn" direction="horizontal" align="center">
        <van-button type="default" @click="showWithdraw" round>Withdraw</van-button>
      </van-space>
    </template>
  </van-cell-group>
  <nut-row type="flex" justify="space-between" class="middle_btn_box">
    <nut-col :span="5">
      <div class="flex-content" @click="toBuyOrder">
        <div class="svg-box">
          <!-- <Shop></Shop> -->
          <img src="@/assets/buy.svg" alt="" />
        </div>
        <span>Buy</span></div
      >
    </nut-col>
    <nut-col :span="5">
      <div class="flex-content" @click="router.push('/list')">
        <div class="svg-box">
          <Horizontal></Horizontal>
        </div>
        <span>List</span></div
      >
    </nut-col>
    <nut-col :span="5">
      <div class="flex-content" @click="router.push('/analysis')">
        <div class="svg-box">
          <img src="@/assets/charts.svg" alt="" />
        </div>
        <span>Earnings analysis</span></div
      >
    </nut-col>
    <nut-col :span="5">
      <div class="flex-content" @click="toBuyOrder">
        <div class="svg-box">
          <My></My>
        </div>
        <span>My</span></div
      >
    </nut-col>
  </nut-row>
  <div class="tab_top_title"> Transaction Details </div>
  <nut-tabs style="border-bottom: 1px solid #cccccc82" v-model="searchType" class="time_tabs">
    <nut-tab-pane title="All" pane-key="0"> </nut-tab-pane>
    <nut-tab-pane title="Income" pane-key="1"> </nut-tab-pane>
    <nut-tab-pane title="Expenditure" pane-key="2"> </nut-tab-pane>
  </nut-tabs>
  <nut-tabs v-model="timeType" class="time_tabs">
    <nut-tab-pane title="Last month" pane-key="0"> </nut-tab-pane>
    <nut-tab-pane title="Three months" pane-key="1"> </nut-tab-pane>
    <nut-tab-pane title="Six months" pane-key="2"> </nut-tab-pane>
  </nut-tabs>
  <nut-infinite-loading load-more-txt="No more content" v-model="infinityValue" :has-more="hasMore" @load-more="loadMore">
    <div class="test" v-for="item in listData">{{ item }}</div>
  </nut-infinite-loading>
</template>

<script lang="ts" setup name="HomePage">
  import { Horizontal, Notice, My } from '@nutui/icons-vue';
  import { toRefs, reactive } from 'vue';
  import { useRouter } from 'vue-router';
  import { useUserStore } from '@/store/modules/user';
  const useStore = useUserStore();
  const userInfo = computed(() => useStore.getUserInfo);
  const router = useRouter();
  const state = reactive({
    infinityValue: false,
    hasMore: false,
    listData: [] as any[],
    timeType: '0',
    searchType: '0',
  });
  const { listData, hasMore, infinityValue, timeType, searchType } = toRefs(state);
  const loadMore = () => {
    setTimeout(() => {
      listData.value = [1];

      infinityValue.value = false;
    }, 1000);
  };
  const showWithdraw = () => {
    router.push({ name: 'Withdraw' });
  };
  const toBuyOrder = () => {
    if (!userInfo.value.dmc || !userInfo.value.amb_promo_code) {
      router.push({ name: 'BindDmc' });
    } else {
      router.push({ name: 'Shop' });
    }
  };
</script>

<style lang="scss" scoped>
  .dmc_account {
    margin-top: 5px;
    text-align: left;
    font-size: 40px;
    color: $primary-color;
    // box-shadow: $main-shadow;
    h2 {
      font-size: 35px;
    }
  }
  .middle_btn_box {
    margin-top: 15px;
    border-radius: 10px;
    padding: 10px 0;
    background: #fff;
    :deep {
      .nut-col {
        color: #000;
      }
    }
    .flex-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      // height: 120px;
      text-align: center;
      word-break: break-word;
      .svg-box {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 20px;
        width: 100px;
        height: 100px;
        margin-bottom: 10px;
        background: linear-gradient(145deg, #ffffff, #e6e6e6);
        box-shadow: 0px 1px 2px 2px #ccc;
        svg,
        img {
          width: 60px;
          height: 60px;
          color: $primary_color;
        }
      }
      &:active {
        .svg-box {
          box-shadow:
            inset 20px 20px 60px #d9d9d9,
            inset -20px -20px 60px #ffffff;
        }
      }
    }
  }
  .income-card {
    padding: 20px 0;
    margin: 0;
    margin-top: 20px;
    //   box-shadow: 0px 0px 4px 1px #ccc;
    background-color: var(--van-blue);

    color: #fff;

    .total_title {
      font-size: 35px;
    }
    > div {
      min-height: 60px;
      line-height: 60px;
      text-align: center;
    }

    .total_income {
      font-size: 50px;
      font-weight: 700;
    }
    .withdraw-btn {
      justify-content: center;
      width: 100%;
    }
    :deep {
      .van-grid-item {
        &:nth-child(2) {
          // border: 1px solid #fff;
          // border-width: 0 1px 0 1px;
          &::before,
          &::after {
            content: '';
            position: absolute;
            left: 0;
            top: 60px;
            display: block;
            width: 1px;
            height: 60px;
            background-color: #ffffff5c;
          }
          &::after {
            left: unset;
            right: 0;
          }
        }
      }
      .van-grid-item__content {
        background: transparent;
        div:first-child {
          font-size: 40px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        div:nth-child(2) {
          font-size: 30px;
        }
      }
      .van-button {
        height: 60px;
      }
    }
  }
  .tab_top_title {
    margin-top: 20px;
    font-style: italic;
    font-size: 35px;
    font-weight: 600;
  }
  .time_tabs {
    :deep {
      .nut-tabs__titles {
        // background: transparent;
      }
      .nut-tabs__content {
        display: none;
      }
    }
  }
</style>

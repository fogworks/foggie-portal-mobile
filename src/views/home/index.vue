<template>
  <van-cell-group inset class="income-card">
    <template #default>
      <div class="total_title">Cloud Storage Balance(DMC) </div>
      <div class="total_income">100 </div>
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
        <van-button type="default" @click="toBuyOrder" round>Buy Order</van-button>
        <van-button type="default" @click="showWithdraw" round>Withdraw</van-button>
      </van-space>
    </template>
  </van-cell-group>
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
    console.log(userInfo.value, 'userInfo');
    router.push({ name: 'BindDmc' });

    // if (!userInfo.value.dmc || !userInfo.value.amb_promo_code) {
    //   router.push({ name: 'BindDmc' });
    // } else {
    //   router.push({ name: 'Shop' });
    // }
  };
</script>

<style lang="scss" scoped>
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

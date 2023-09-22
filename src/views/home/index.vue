<template>
  <nut-noticebar v-if="!userInfo.dmc">
    <template #left-icon>
      <Notice width="20px" left="20px"></Notice>
    </template>
    <span>Not yet bound to a DMC account </span>
    <router-link to="/bindDmc?onlyDMC=true"> Go to Binding</router-link>
  </nut-noticebar>
  <div class="dmc_account" v-else>
    <strong> Hello, </strong> <br />
    {{ userInfo.dmc }}
  </div>
  <van-cell-group inset class="income-card">
    <template #default>
      <div class="total_title"> <img src="@/assets/DMC_token.png" alt="" /></div>
      <div class="card_row_1">
        <div class="total_income">
          <div> 100.0000 DMC </div>
          <div class="about_income"> ~ $10.000 </div>
        </div>
        <div class="total_income">100PST</div>
      </div>
      <van-space class="withdraw-btn" direction="horizontal" align="center">
        <van-button type="default" @click="showWithdraw" round>Withdraw</van-button>
        <van-button type="default" @click="showWithdraw" round>Recharge</van-button>
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
        <span>Buy Order</span></div
      >
    </nut-col>
    <nut-col :span="5">
      <div class="flex-content" @click="router.push('/analysisCate?type=0')">
        <div class="svg-box">
          <img src="@/assets/withdrawal_records.svg" alt="" />
        </div>
        <span>Withdrawal Records</span></div
      >
    </nut-col>
    <nut-col :span="5">
      <div class="flex-content" @click="router.push('/analysisCate?type=1')">
        <div class="svg-box">
          <img src="@/assets/charts.svg" alt="" />
        </div>
        <span>Earnings Records</span></div
      >
    </nut-col>
    <nut-col :span="5">
      <div class="flex-content" @click="router.push('/analysisCate?type=2')">
        <div class="svg-box">
          <img src="@/assets/recharge_records.svg" alt="" />
        </div>
        <span>Recharge Records</span></div
      >
    </nut-col>
  </nut-row>
  <div class="tab_top_title">Recent Transactions</div>
  <!-- <nut-tabs style="border-bottom: 1px solid #cccccc82" v-model="searchType" class="time_tabs">
    <nut-tab-pane title="All" pane-key="0"> </nut-tab-pane>
    <nut-tab-pane title="Income" pane-key="1"> </nut-tab-pane>
    <nut-tab-pane title="Expenditure" pane-key="2"> </nut-tab-pane>
  </nut-tabs>
  <nut-tabs v-model="timeType" class="time_tabs">
    <nut-tab-pane title="Last month" pane-key="0"> </nut-tab-pane>
    <nut-tab-pane title="Three months" pane-key="1"> </nut-tab-pane>
    <nut-tab-pane title="Six months" pane-key="2"> </nut-tab-pane>
  </nut-tabs> -->
  <nut-infinite-loading load-more-txt="No more content" v-model="infinityValue" :has-more="hasMore" @load-more="loadMore">
    <div class="list_item" v-for="item in listData">
      <img src="@/assets/order.svg" alt="" />
      <div>
        <span>Order:1234</span>
        <span :class="[item.type == 'Earnings' ? 'earnings' : 'expenditures']">
          {{ (item.type == 'Earnings' ? '+' : '-') + item.dmc }}
        </span>
      </div>
      <div
        ><span>100 PST</span> <span>{{ item.createAt }}</span>
      </div>
    </div>
  </nut-infinite-loading>
</template>

<script lang="ts" setup name="HomePage">
  import { Notice } from '@nutui/icons-vue';
  import { toRefs, reactive } from 'vue';
  import { useRouter } from 'vue-router';
  import { useUserStore } from '@/store/modules/user';
  const useStore = useUserStore();
  const userInfo = computed(() => useStore.getUserInfo);
  const router = useRouter();
  const state = reactive({
    infinityValue: false,
    hasMore: false,
    listData: [
      {
        createAt: '2023-09-20',
        dmc: '1.0000 DMC',
        type: 'Earnings',
      },
      {
        createAt: '2023-09-21',
        dmc: '2.0000 DMC',
        type: 'Expenditures',
      },
    ] as any[],
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
    color: #000;
    // box-shadow: $main-shadow;
    h2 {
      font-size: 35px;
    }
  }
  .middle_btn_box {
    margin-top: 15px;
    border-radius: 10px;
    padding: 10px 0;
    // background: #fff;
    :deep {
      .nut-col {
        color: #2356b2;
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
      span {
        font-size: 0.8rem;
      }
      .svg-box {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 20px;
        width: 100px;
        height: 100px;
        margin-bottom: 10px;
        background: #fff;
        // box-shadow: 0px 1px 2px 2px #ccc;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
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
    padding: 20px 20px;
    margin: 0;
    margin-top: 20px;
    //   box-shadow: 0px 0px 4px 1px #ccc;
    // background-color: var(--van-blue);
    background: #2893ff;
    color: #fff;
    border-radius: 40px;

    .total_title {
      font-size: 35px;
      text-align: left;
      img {
        width: 60px;
      }
    }
    > div {
      min-height: 60px;
      line-height: 60px;
      text-align: center;
    }
    .card_row_1 {
      display: flex;
      justify-content: space-between;
    }
    .total_income {
      font-size: 45px;
      font-weight: 700;
      .about_income {
        font-size: 35px;
      }
    }
    .withdraw-btn {
      justify-content: center;
      width: 100%;
      margin-top: 20px;
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
    margin-bottom: 20px;
    // font-style: italic;
    font-size: 35px;
    // font-weight: 600;
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
  .list_item {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 12px 30px;
    padding-left: 80px;
    min-height: 80px;
    background: #fff;
    border-radius: 5px;
    border-top: 1px solid #eee;
    img {
      position: absolute;
      left: 10px;
      width: 60px;
    }
    > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 5px 0;
    }
    &:first-child {
      border-radius: 40px 40px 0 0;
    }
    &:last-child {
      border-radius: 0 0 40px 40px;
    }
    .earnings {
      color: $main_green;
      font-weight: 600;
    }
    .expenditures {
      color: $main_red;
      font-weight: 600;
    }
  }
</style>

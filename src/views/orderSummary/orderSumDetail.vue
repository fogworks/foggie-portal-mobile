<template>
  <div class="analysis_content">
    <div class="top_box" :class="[ordertype === 'history' ? 'historyOrder' : '']">
      <div class="top_back" @click="router.go(-1)">{{ domain }} Summary </div>
    </div>
    <nut-tabs class="type_tabs" v-model="searchType">
      <nut-tab-pane title="All " pane-key="2"> </nut-tab-pane>
      <nut-tab-pane title="Reward " pane-key="0"> </nut-tab-pane>
      <nut-tab-pane title="Expense" pane-key="1"> </nut-tab-pane>
    </nut-tabs>
    <template v-if="listData.length">
      <nut-infinite-loading
        class="list_box"
        load-more-txt="No more content"
        v-model="infinityValue"
        :has-more="hasMore"
        @load-more="loadMoreFun"
      >
        <div class="list_item" v-for="(item, index) in listData" @click="gotoOrder(item)">
          <div :class="['item_img_box', (index + 1) % 3 == 2 ? 'item_2' : '', (index + 1) % 3 == 0 ? 'item_3' : '']">
            <!-- <img src="@/assets/list_item_2.svg" alt="" /> -->
            <img src="@/assets/DMC_Token1.png" alt="" />
          </div>
          <div>
            <span>Order:{{ item.order_id }}</span>
            <span :class="[item.inner_user_trade_type == 'payout' ? 'expense' : 'earnings']">
              {{ item.inner_user_trade_type == 'payout' ? '-' : '+' }} {{ formatNumber(item.quantity)?.integerPart
              }}<span style="font-size: 13px">.{{ formatNumber(item.quantity)?.decimalPart }}</span> DMC
            </span>
          </div>
          <div>
            <span class="time">{{ transferUTCTime(item.created_at) }}</span>

            <span>{{ mapTypes[item.trade_type] }}</span>
          </div>
        </div>
      </nut-infinite-loading>
    </template>
    <nut-empty v-else description="No data" image="error"></nut-empty>
  </div>
</template>

<script setup lang="ts" name="analysis">
  import { reactive, toRefs, onMounted, watch } from 'vue';
  import { useRoute, useRouter, onBeforeRouteLeave } from 'vue-router';
  import useTransactionRecords from './useTransactionRecords.ts';
  import useOrderAssets from './useOrderAssets.ts';
  import { transferUTCTime, formatNumber } from '@/utils/util';
  const order_id = ref<any>('');
  const ordertype = ref('');
  const route = useRoute();
  const router = useRouter();
  const domain = ref('');
  order_id.value = route.query.id;
  ordertype.value = route.query.type;
  domain.value = route.query.domain;
  const state = reactive({
    queryType: 'Reward',
    queryTypeValue: [],
    typeShow: false,
    chartOptions: {},
    timeType: '0',
    searchType: '2',
    activeNames: '',
  });
  const mapTypes = {
    user_delivery_income: 'UserDeliveryReward',
    buy_order: 'Purchased Order',
    challenge: 'Order Challenge',
    arbitration: 'Order Arbitration',
    OrderReceiptAddReserve: 'Increase order deposit', // 增加订单预存金
    OrderReceiptSubReserve: 'Reduce order deposit', // 减少订单预存金
    OrderReceiptDeposit: 'Order deposit', // 押金
    OrderReceiptClaim: 'Order deliver', // 交付
    OrderReceiptReward: 'Order incentive', // 激励
    OrderReceiptRenew: 'Order Update', // 订单更新
    OrderReceiptChallengeReq: 'Initiate a Challenge', // 发起挑战
    OrderReceiptChallengeAns: 'Responding to challenges', // 响应挑战
    OrderReceiptChallengeArb: 'arbitrate', // 仲裁
    OrderReceiptPayChallengeRet: 'Overtime compensation return', // 超时赔付返还
    OrderReceiptLockRet: 'Order lock return', // 订单锁定返还
    user_cancel_order: 'Order Cancellation Refund',
    user_OrderReceiptDeposit: 'Order expired. Deposit refunded.',
    OrderRefund: 'Order refund', // 订单退款
    OrderReceiptEnd: 12,
  };
  const { getUserAssets, cloudBalance, cloudProfit, orderPayout } = useOrderAssets();

  const cloudBalanceNum = computed(() => formatNumber(cloudBalance.value));
  const cloudProfitNum = computed(() => formatNumber(cloudProfit.value));
  const orderPayoutNum = computed(() => formatNumber(orderPayout.value));

  const { shortcuts, resetData, loadMore, listData, hasMore, infinityValue } = useTransactionRecords();

  const { searchType, timeType, chartOptions, queryType, typeShow, queryTypeValue, activeNames } = toRefs(state);

  watch(
    searchType,
    (val) => {
      resetData();
      order_id.value = route.query.id;
      const [start, end] = shortcuts[timeType.value]();
      loadMore(start, end, val, order_id.value);
    },
    { deep: true },
  );
  watch(
    activeNames,
    (val) => {
      if (val == 1) {
        const [start, end] = shortcuts[timeType.value]();
        loadMore(start, end, 2, order_id.value);
      }
    },
    { deep: true },
  );
  const loadMoreFun = () => {
    const [start, end] = shortcuts[timeType.value]();
    loadMore(start, end, searchType.value, order_id.value);
  };
  onMounted(() => {
    order_id.value = route.query.id;
    // const postData = { order_id: order_id.value };
    const [start, end] = shortcuts[timeType.value]();
    loadMore(start, end, searchType.value, order_id.value);
    // getUserAssets(postData);
  });
</script>

<style lang="scss" scoped>
  .summary_box {
    background: #333;
    margin: 20px 0;
    .summary_list {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 20px;
      height: 30px;

      color: #fff;
      border-radius: 10px;
      .summary_key {
        font-weight: bold;
      }
      .summary_value {
      }
    }
  }

  .time_box {
    color: #fff;
    text-align: center;
  }
  .summary_collapse {
    :deep {
      .nut-collapse__item-wrapper__content {
        padding: 0;
        background: transparent;
      }
    }
  }
  .my_state {
    .nut-tag {
      //   border-radius: 20px;
      //   padding: 4px 10px;
      //   background: #0c0d1a33;
      //   border: 1px solid #fff;
      //   margin: 4px 0;
      //   box-shadow:
      //     rgba(0, 0, 0, 0.25) 0px 54px 55px,
      //     rgba(0, 0, 0, 0.12) 0px -12px 30px,
      //     rgba(0, 0, 0, 0.12) 0px 4px 6px,
      //     rgba(0, 0, 0, 0.17) 0px 12px 13px,
      //     rgba(0, 0, 0, 0.09) 0px -3px 5px;
    }
  }

  .type_tabs {
    margin-bottom: 20px;
    :deep {
      .nut-tabs__titles-item__text {
        color: $main_blue;
      }
      .nut-tabs__titles {
        border-bottom: 1px solid #ccc;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
      }
      .nut-tab-pane {
        display: none;
      }
    }
  }
  .top_box {
    // margin: 20px;
    padding: 50px 10px 30px;
    border-radius: 20px;
    background: $primary-color;
    background-image: linear-gradient(260deg, #4062bb 0%, #5200ae 74%);
  }
  .historyOrder {
    background: #2b2929;
  }
  .my_summary_grid {
    border: none;
    flex-wrap: nowrap !important;
    .top_icon {
      width: 80px;
      height: 80px;
    }
    :deep {
      .nut-grid-item {
        // max-width: 25%;
      }
      .nut-grid-item__content {
        border-radius: 16px;
        margin: 5px;
        padding: 10px;
        height: unset;
        align-items: flex-start;
        font-size: 30px;
        font-size: 1rem;
        > div {
          max-width: 100%;
        }
        img {
          width: 100px;
        }
        p {
          max-width: 100%;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          font-size: 26px;
        }
      }
    }
  }
  .time_tabs {
    margin-bottom: 10px;
    margin-top: 5px;
    margin: 20px 0;
    :deep {
      .nut-tabs__content {
        display: none;
      }

      .nut-tabs__titles-item__text {
        // white-space: pre-wrap;
        font-size: 26px;
      }
    }
  }
  .time_radios {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    width: 95%;
    margin: 30px auto;
    :deep {
      .nut-radio {
        margin-right: 0;
        .nut-radio__label {
          margin: 0 3px;
          font-size: 0.75rem;
        }
      }
    }
  }
  .analysis_content {
    :deep {
      .nut-cell__value {
        color: #666;
      }
    }
  }
  .balance_chart {
    background: #fff;
    margin: 20px 10px;
    padding: 10px;
    border-radius: 10px;
  }
  .list_box {
    box-sizing: border-box;
    padding: 0 10px;
    border-radius: 20px;
    .list_item {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 12px 30px;
      padding-left: 100px;
      min-height: 80px;
      color: #171414;
      font-size: 24px;
      background: #fff;
      border-radius: 5px;
      border-bottom: 1px solid #eee;
      margin: 10px 0;
      border-radius: 20px;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 1.333333vw 6.666667vw;
      .item_img_box {
        position: absolute;
        left: 16px;
        width: 70px;
        height: 70px;
        padding: 5px;
        box-sizing: border-box;
        border-radius: 50px;
        background: #ff8b00;
        img {
          width: 36px;
          margin: 0 auto;
          transform-style: preserve-3d;
          -webkit-transform-origin: 50%;
          -webkit-animation: spin 5s infinite;
          -webkit-animation-timing-function: linear;
          -webkit-perspective: 1000;
          -webkit-box-reflect: below 0 linear-gradient(hsla(0, 0%, 100%, 0), hsla(0, 0%, 100%, 0) 45%, hsla(0, 0%, 100%, 0.5));
          -webkit-filter: saturate(1.45) hue-rotate(2deg);
        }
        @keyframes spin {
          from {
            -webkit-transform: rotateY(0deg);
          }
          to {
            -webkit-transform: rotateY(360deg);
          }
        }
        .cions {
          margin-right: 15px;
        }
      }
      .item_2 {
        background: #5f57ff;
        background: #ffc933;
      }
      .item_3 {
        background: #1ba27a;
      }

      > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 5px 0;
      }
      .earnings {
        display: inline-block;
        color: #121212;
        color: $main_green;

        font-size: 30px;
      }
      .expense {
        display: inline-block;
        color: $main_red;
        font-size: 30px;
      }
      .time {
        color: #aaa;
        font-size: 24px;
        color: #635858;
      }
      &:last-child {
        border-bottom: none;
      }
    }
  }
</style>

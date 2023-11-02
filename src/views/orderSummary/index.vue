<template>
  <div class="analysis_content">
    <div class="top_box">
      <div class="top_back" @click="router.go(-1)">Order_{{ order_id }} Summary </div>
      <nut-grid class="top_grid" :column-num="3">
        <nut-grid-item text="Profit"
          ><div>
            <IconCions class="top_icon"></IconCions>
            <p style="color: green; font-weight: bold">{{ cloudBalance }}</p>
          </div>
        </nut-grid-item>
        <nut-grid-item class="top_icon" text="Earnings"
          ><div>
            <IconIncome class="top_icon"></IconIncome>
            <p style="color: green; font-weight: bold">+{{ cloudProfit }}</p>
          </div></nut-grid-item
        >
        <nut-grid-item class="top_icon" text="Expense"
          ><div>
            <IconOutCome class="top_icon"></IconOutCome>
            <p style="color: red; font-weight: bold">-{{ orderPayout }}</p>
          </div></nut-grid-item
        >
      </nut-grid>
    </div>
    <nut-tabs class="type_tabs" v-model="searchType">
      <nut-tab-pane title="All " pane-key="2"> </nut-tab-pane>
      <nut-tab-pane title="Earnings " pane-key="0"> </nut-tab-pane>
      <nut-tab-pane title="Expense" pane-key="1"> </nut-tab-pane>
    </nut-tabs>
    <nut-tabs v-model="timeType" class="time_tabs" direction="horizontal">
      <nut-tab-pane title="By Day" pane-key="4"></nut-tab-pane>
      <nut-tab-pane title="By Week" pane-key="3"></nut-tab-pane>
      <nut-tab-pane title="By Month" pane-key="2"></nut-tab-pane>
      <nut-tab-pane title="By 3 Months" pane-key="1"></nut-tab-pane>
      <nut-tab-pane title="All" pane-key="0"></nut-tab-pane>
    </nut-tabs>

    <template v-if="listData.length">
      <!-- <div class="balance_chart">
        <MyEcharts style="width: 100%; height: 200px" :options="chartOptions"></MyEcharts>
      </div> -->
      <!-- LIST -->
      <nut-infinite-loading
        class="list_box"
        load-more-txt="No more content"
        v-model="infinityValue"
        :has-more="hasMore"
        @load-more="loadMore"
      >
        <div
          class="list_item"
          v-for="(item, index) in listData"
          @click="$router.push({ name: 'listDetails', query: { id: item.order_id, uuid: item.uuid, amb_uuid: item.amb_uuid } })"
        >
          <div :class="['item_img_box', (index + 1) % 3 == 2 ? 'item_2' : '', (index + 1) % 3 == 0 ? 'item_3' : '']">
            <img src="@/assets/list_item_2.svg" alt="" />
          </div>
          <div>
            <span>Order:{{ item.order_id }}</span>
            <span :class="[item.inner_user_trade_type == 'payout' ? 'expense' : 'earnings']">
              {{ item.inner_user_trade_type == 'payout' ? '-' : '+' }}{{ item.quantity }} DMC
            </span>
          </div>
          <div>
            <span>Type:{{ mapTypes[item.trade_type] }}</span>
            <!-- <span>{{ item.trade_type == 'user_delivery_income' ? '' : item.state }} </span> -->
            <span class="time">{{ transferUTCTime(item.created_at) }}</span>
          </div>
        </div>
      </nut-infinite-loading>
    </template>
    <nut-empty v-else description="No data" image="error"></nut-empty>
  </div>
</template>

<script setup lang="ts" name="analysis">
  import IconArrowRight from '~icons/home/arrow-right.svg';
  import IconCions from '~icons/home/cions.svg';
  import IconIncome from '~icons/home/earn-income.svg';
  import IconWithdraw from '~icons/home/earn-withdraw.svg';
  import IconOutCome from '~icons/home/out-come.svg';
  import { reactive, toRefs, onMounted, watch } from 'vue';
  import { barOption } from '@/components/echarts/util';
  import { useRoute, useRouter } from 'vue-router';
  import useTransactionRecords from './useTransactionRecords.ts';
  import useOrderAssets from './useOrderAssets.ts';
  import { transferUTCTime } from '@/utils/util';
  import * as echarts from 'echarts';
  const order_id = ref<any>('');
  const route = useRoute();
  const router = useRouter();
  order_id.value = route.query.id;
  const state = reactive({
    queryType: 'Earnings',
    queryTypeValue: [],
    typeShow: false,
    chartOptions: {},
    timeType: '3',
    searchType: '2',
  });
  const mapTypes = {
    user_delivery_income: 'UserDeliveryIncome',
    buy_order: 'BuyOrder',
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
    OrderReceiptEnd: 12,
  };
  const { getUserAssets, cloudBalance, cloudProfit, orderPayout } = useOrderAssets();

  const { shortcuts, resetData, loadMore, listData, hasMore, infinityValue } = useTransactionRecords();

  const { searchType, timeType, chartOptions, queryType, typeShow, queryTypeValue } = toRefs(state);

  const getBarOptions = () => {
    const dateList = listData.value.map((el) => transferUTCTime(el.created_at));
    const valueList = listData.value.map((el) => el.quantity);
    chartOptions.value = barOption(dateList, valueList, searchType.value == '0' ? 'Earnings' : 'Expense');
    chartOptions.value.series[0].tooltip = {
      valueFormatter: function (value) {
        return value + ' DMC';
      },
    };
  };
  watch(
    listData,
    (val) => {
      getBarOptions();
    },
    { deep: true },
  );
  watch(
    timeType,
    (val) => {
      resetData();
      const [start, end] = shortcuts[val]();
      order_id.value = route.query.id;
      loadMore(start, end, searchType.value, order_id.value);
    },
    { deep: true },
  );
  watch(searchType, (val) => {
    resetData();
    order_id.value = route.query.id;
    const [start, end] = shortcuts[timeType.value]();
    loadMore(start, end, val, order_id.value);
  });
  onMounted(() => {
    console.log(route.query.id, 'route.query.id');
    order_id.value = route.query.id;
    const postData = { order_id: order_id.value };
    getUserAssets(postData);
    // loadMore();
    const [start, end] = shortcuts[timeType.value]();
    loadMore(start, end, 2, order_id.value);
    getBarOptions();
  });
</script>

<style lang="scss" scoped>
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
  }
  .top_grid {
    border: none;
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

        font-size: 36px;
      }
      .expense {
        display: inline-block;
        color: $main_red;
        font-size: 36px;
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

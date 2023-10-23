<template>
  <div class="analysis_box">
    <div style="background: #fff; margin-bottom: 10px">
      <div class="top_box">
        <div class="top_back" @click="router.go(-1)">{{ queryType }} </div>
        <div class="top_assets">
          <div class="assets_block">
            <span>{{ titleDMC }} DMC</span>
            <span>≈</span>
            <span>$10.00</span>
          </div>
          <div class="right_img"><img src="@/assets/Trading.png" alt="" /> </div>
        </div>
      </div>
    </div>
    <div class="analysis_content">
      <nut-tabs v-model="timeType" class="time_tabs" direction="horizontal">
        <nut-tab-pane title="All" pane-key="0"></nut-tab-pane>
        <nut-tab-pane title="By 3 Months" pane-key="1"></nut-tab-pane>
        <nut-tab-pane title="By Month" pane-key="2"></nut-tab-pane>
        <nut-tab-pane title="By Week" pane-key="3"></nut-tab-pane>
        <nut-tab-pane title="By Day" pane-key="4"></nut-tab-pane>
      </nut-tabs>
      <template v-if="listData.length">
        <div class="balance_chart">
          <MyEcharts style="width: 100%; height: 200px" :options="chartOptions"></MyEcharts>
        </div>
        <!-- LIST -->
        <nut-infinite-loading class="list_box" v-model="infinityValue" :has-more="hasMore" @load-more="loadMore">
          <div class="list_item" v-for="item in listData">
            <span v-if="item.created_at">{{ transferUTCTime(item.created_at) }}</span>
            <span v-else>Order:{{ item.order_id }}</span>
            <span :class="[item.type == 'Earnings' ? 'earnings' : 'expenditures']">
              {{ (item.type == 'Earnings' ? '+' : '-') + item.quantity }} DMC
              <IconRunning v-if="item.state == 'running'"></IconRunning>
            </span>
          </div>
        </nut-infinite-loading>
      </template>
      <nut-empty v-else description="No data" image="error"></nut-empty>
    </div>
  </div>
</template>

<script setup lang="ts" name="analysis">
  import { reactive, toRefs, onMounted, watch } from 'vue';
  import { barOption } from '@/components/echarts/util';
  import { useRoute, useRouter } from 'vue-router';
  import { transferUTCTime } from '@/utils/util';
  import useUserAssets from '../home/useUserAssets.ts';
  import useWithdrawList from './useWithdrawList.ts';
  import IconRunning from '~icons/home/running.svg';
  import useOrderList from '@/views/home/useOrderList.ts';
  import { search_user_asset, search_order_profit } from '@/api/amb';
  import { showToast } from '@nutui/nutui';
  import '@nutui/nutui/dist/packages/toast/style';

  const route = useRoute();
  const router = useRouter();
  // const { getUserAssets, cloudBalance, cloudPst, cloudIncome, cloudWithdraw } = useUserAssets();
  const {
    shortcuts,
    loadMore: expenseLoadMore,
    listData: expenseListData,
    resetData,
    hasMore: expenseHasMore,
    infinityValue: expenseInfinityValue,
  } = useOrderList();

  const state = reactive({
    queryType: 'Earnings',
    queryTypeValue: [],
    typeShow: false,
    chartOptions: {},
    timeType: '0',
    cloudBalance: 0,
    cloudIncome: 0,
    cloudExpense: 0,
    earnListData: [],
  });
  const { earnListData, cloudBalance, cloudIncome, cloudExpense, timeType, chartOptions, queryType, typeShow, queryTypeValue } =
    toRefs(state);
  const listData = computed(() => {
    if (route.query.type == 3) {
      return expenseListData.value.map((el) => {
        return {
          created_at: el.order_created_at,
          quantity: el.total_price,
          state: el.state,
          order_id: el.order_id,
        };
      });
    } else {
      return earnListData.value;
    }
  });
  const hasMore = computed(() => {
    if (route.query.type == 3) {
      return expenseHasMore.value;
    } else if (route.query.type == 1) {
      return false;
    }
  });
  const infinityValue = computed(() => {
    if (route.query.type == 3) {
      return expenseInfinityValue.value;
    } else if (route.query.type == 1) {
      return false;
    }
  });
  const titleDMC = computed(() => {
    if (route.query.type == 3) {
      return cloudExpense.value;
    } else if (route.query.type == 1) {
      return cloudIncome.value;
    }
  });
  const searchUserAsset = () => {
    const [start, end] = shortcuts[timeType.value]();
    console.log(!start && !end, 'startstartstart');
    const postData = !start && !end ? {} : { query_time: [{ start_time: start, end_time: end }] };
    search_user_asset(postData).then((res) => {
      if (!start && !end) {
        cloudBalance.value = res.result.counts.all.balance;
        cloudIncome.value = res.result.counts.all.income;
        cloudExpense.value = res.result.counts.all.payout;
      } else {
        cloudBalance.value = res.result.counts[`${start}~${end}`].balance;
        cloudIncome.value = res.result.counts[`${start}~${end}`].income;
        cloudExpense.value = res.result.counts[`${start}~${end}`].payout;
      }
    });
  };
  const searchOrderProfit = () => {
    showToast.loading('Loading', {
      cover: true,
    });
    const [start, end] = shortcuts[timeType.value]();
    const postData = !start && !end ? {} : { start_time: start, end_time: end };
    search_order_profit(postData).then((res) => {
      earnListData.value = res.result.map((el) => {
        return {
          quantity: el.profit,
          order_id: el.order_id,
        };
      });
      showToast.hide();
    });
  };
  const loadMore = (start, end) => {
    if (route.query.type == 3) {
      expenseLoadMore(null, start, end);
    } else if (route.query.type == 1) {
      searchOrderProfit();
    }
  };
  const reset = (start, end) => {
    if (route.query.type == 3) {
      resetData();
    }
  };
  const getLineOptions = () => {
    let valueList, dateList;
    // if (route.query.type == 3) {
    dateList = listData.value.map((el) => 'Order: ' + el.order_id);
    valueList = listData.value.map((el) => el.quantity);
    chartOptions.value = barOption(dateList, valueList, queryType.value);
    chartOptions.value.xAxis[0].show = true;
    chartOptions.value.grid[0] = {
      left: '10px',
      right: '10px',
      bottom: '30px',
    };
    // }
  };
  watch(
    listData,
    () => {
      getLineOptions();
    },
    { deep: true },
  );
  watch(
    timeType,
    (val) => {
      reset();
      const [start, end] = shortcuts[val]();
      loadMore(start, end);
      searchUserAsset();
    },
    { deep: true },
  );

  onMounted(() => {
    loadMore();
    searchUserAsset();

    switch (route.query.type) {
      case '0':
        queryType.value = 'Withdrawn';
        break;
      case '1':
        queryType.value = 'Earnings';
        break;
      case '2':
        queryType.value = 'Recharge';
        break;
      case '3':
        queryType.value = 'Expense';
        break;
      default:
        queryType.value = 'Balance';
        break;
    }
  });
</script>

<style lang="scss" scoped>
  .analysis_box {
    min-height: 100%;
    background: #f1f1f1;
  }
  .top_box {
    // margin: 20px;
    padding: 50px 10px 30px;
    border-radius: 20px;
    background: $primary-color;
    .top_assets {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #fff;
      .left_title {
        width: 150px;
        align-self: flex-start;
      }
      .assets_block {
        flex: 1;
        display: flex;
        justify-content: space-evenly;
      }
      .right_img {
        img {
          width: 200px;
        }
      }
    }
  }
  .time_tabs {
    margin-bottom: 10px;
    margin-top: 5px;
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
    justify-content: space-around;
    align-items: baseline;
    width: 100%;
    margin-bottom: 10px;
    padding: 30px 0;
    background: #fff;
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
    margin-bottom: 10px;
  }

  .list_item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 30px;
    height: 80px;
    background: #fff;
    border-radius: 5px;
    border-top: 1px solid #eee;
    font-size: 30px;
    .earnings {
      color: $main_green;
    }
    .expenditures {
      color: $main_red;
    }
    svg {
      width: 40px;
      height: 40px;
      vertical-align: sub;
    }
  }
  .empty_box {
    width: 100%;
    text-align: center;
    font-size: 26px;
    color: #666;
    height: 300px;
    margin: 20px 0;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
      width: 100%;
      height: 180px;
      margin-bottom: 10px;
    }
  }
</style>

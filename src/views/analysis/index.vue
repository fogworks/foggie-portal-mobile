<template>
  <div class="analysis_content">
    <div class="top_box">
      <div class="top_back" @click="router.go(-1)">Analysis </div>
      <nut-grid class="top_grid" :column-num="3">
        <nut-grid-item text="Balance"
          ><div>
            <IconCions class="top_icon"></IconCions>
            <p>{{ cloudBalance }}</p>
          </div>
        </nut-grid-item>
        <nut-grid-item class="top_icon" text="Earnings" @click="router.push('/analysisCate?type=1')"
          ><div>
            <IconIncome class="top_icon"></IconIncome>
            <p>{{ cloudIncome }}</p>
          </div></nut-grid-item
        >
        <nut-grid-item class="top_icon" text="Expense" @click="router.push('/analysisCate?type=3')"
          ><div>
            <IconOutCome class="top_icon"></IconOutCome>
            <p>{{ cloudExpense }}</p>
          </div></nut-grid-item
        >
        <!-- <nut-grid-item class="top_icon" text="Withdrawal" @click="router.push('/analysisCate?type=0')"
          ><div>
            <IconWithdraw class="top_icon"></IconWithdraw>
            <p>{{ cloudWithdraw }}</p>
          </div></nut-grid-item
        > -->
      </nut-grid>
    </div>
    <nut-tabs v-model="timeType" class="time_tabs" direction="horizontal">
      <nut-tab-pane title="All" pane-key="0"></nut-tab-pane>
      <nut-tab-pane title="By 3 Months" pane-key="1"></nut-tab-pane>
      <nut-tab-pane title="By Month" pane-key="2"></nut-tab-pane>
      <nut-tab-pane title="By Week" pane-key="3"></nut-tab-pane>
      <nut-tab-pane title="By Day" pane-key="4"></nut-tab-pane>
    </nut-tabs>
    <div v-if="listData.length" class="balance_chart">
      <MyEcharts style="width: 100%; height: 200px" :options="chartOptions"></MyEcharts>
    </div>
    <!-- LIST -->
    <nut-infinite-loading v-if="listData.length" class="list_box" load-more-txt="No more content" :has-more="false">
      <div
        class="list_item"
        v-for="(item, index) in listData"
        @click="$router.push({ name: 'listDetails', query: { id: item.order_id, uuid: item.uuid } })"
      >
        <div :class="['item_img_box', (index + 1) % 3 == 2 ? 'item_2' : '', (index + 1) % 3 == 0 ? 'item_3' : '']">
          <!-- <img v-if="(index + 1) % 3 == 1" src="@/assets/list_item_1.svg" alt="" />
          <img class="cions" v-else-if="(index + 1) % 3 == 2" src="@/assets/list_item_2.svg" alt="" />
          <img v-else-if="(index + 1) % 3 == 0" src="@/assets/list_item_3.svg" alt="" /> -->
          <img src="@/assets/list_item_2.svg" alt="" />
        </div>

        <div>
          <span>Order:{{ item.order_id }}</span>

          <span :class="['earnings']">
            +{{ item.profit }}
            <!-- <IconArrowRight style="vertical-align: text-top" width="1.1rem" height="1.1rem" color="#5F57FF"></IconArrowRight
          > -->
          </span>
        </div>
        <!-- <div
          ><span>{{ item.pst }} PST</span> <span class="time">{{ transferUTCTime(item.order_created_at) }}</span>
        </div> -->
      </div>
    </nut-infinite-loading>
    <nut-empty v-else description="No data"></nut-empty>
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
  import useOrderList from '../home/useOrderList.ts';
  import useUserAssets from '../home/useUserAssets.ts';
  import { transferUTCTime } from '@/utils/util';
  import { search_user_asset, search_order_profit } from '@/api/amb';
  import { showToast } from '@nutui/nutui';
  const route = useRoute();
  const router = useRouter();
  const state = reactive({
    queryType: 'Earnings',
    queryTypeValue: [],
    typeShow: false,
    chartOptions: {},
    timeType: '0',
    cloudBalance: '0',
    cloudIncome: '0',
    cloudExpense: '0',
    listData: [],
  });

  const { shortcuts } = useOrderList();

  const { listData, cloudBalance, cloudIncome, cloudExpense, timeType, chartOptions, queryType, typeShow, queryTypeValue } = toRefs(state);
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
    console.log(postData, 'postData');
    search_order_profit(postData).then((res) => {
      listData.value = res.result;
      showToast.hide();
    });
  };
  const getLineOptions = () => {
    const dateList = listData.value.map((el) => 'Order: ' + el.order_id);
    const valueList = listData.value.map((el) => el.profit);
    chartOptions.value = barOption(dateList, valueList, 'Earn Analysis');
    chartOptions.value.xAxis[0].show = true;
    chartOptions.value.grid[0] = {
      left: '10px',
      right: '10px',
      bottom: '30px',
    };
  };
  watch(
    listData,
    (val) => {
      getLineOptions();
    },
    { deep: true },
  );
  watch(
    timeType,
    (val) => {
      // resetData();
      // const [start, end] = shortcuts[val]();
      // loadMore(null, start, end);
      searchUserAsset();
      searchOrderProfit();
    },
    { deep: true },
  );
  onMounted(() => {
    // loadMore();
    searchOrderProfit();
    searchUserAsset();

    getLineOptions();
  });
</script>

<style lang="scss" scoped>
  .top_box {
    // margin: 20px;
    padding: 50px 10px 30px;
    border-radius: 20px;
    background: $primary-color;
    margin-bottom: 10px;
  }
  .top_grid {
    border: none;
    .top_icon {
      width: 80px;
      height: 80px;
    }
    :deep {
      // .nut-grid-item {
      //   max-width: 25%;
      // }
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
    min-height: 100%;
    background: #f1f1f1;
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
  .list_box {
    box-sizing: border-box;
    .list_item {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 12px 30px;
      padding-left: 80px;
      min-height: 80px;
      color: #838080;
      font-size: 28px;
      background: #fff;
      border-radius: 5px;
      border-bottom: 1px solid #eee;
      .item_img_box {
        position: absolute;
        left: 5px;
        width: 70px;
        height: 70px;
        padding: 5px;
        box-sizing: border-box;
        border-radius: 50px;
        background: #ff8b00;
        img {
          width: 36px;
          margin: 0 auto;
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
      .time {
        color: #aaa;
        font-size: 24px;
      }
      &:last-child {
        border-bottom: none;
      }
    }
  }
</style>

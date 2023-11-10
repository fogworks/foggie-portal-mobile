<template>
  <div class="analysis_content">
    <div class="top_box">
      <TopBack> Assets Analysis </TopBack>
      <nut-grid class="top_grid" :column-num="3">
        <nut-grid-item text="Balance"
          ><div>
            <IconCions class="top_icon"></IconCions>
            <p class="banlance_text">{{ cloudBalanceNum?.integerPart }}<span style="font-size: 10px;">.{{ cloudBalanceNum?.decimalPart }}</span></p>
          </div>
        </nut-grid-item>
        <nut-grid-item class="top_icon" text="Earnings" @click="router.push('/analysisCate?type=1')"
          ><div>
            <IconIncome class="top_icon"></IconIncome>
            <p>{{ cloudIncomeNum?.integerPart }}<span style="font-size: 10px;">.{{ cloudIncomeNum?.decimalPart }}</span><Search2></Search2></p> </div
        ></nut-grid-item>
        <nut-grid-item class="top_icon" text="Expense" @click="router.push('/analysisCate?type=3')"
          ><div>
            <IconOutCome class="top_icon"></IconOutCome>
            <p>{{ cloudExpenseNum?.integerPart }}<span style="font-size: 10px;">.{{ cloudExpenseNum?.decimalPart }}</span><Search2></Search2></p> </div
        ></nut-grid-item>
        <!-- <nut-grid-item class="top_icon" text="Withdrawal" @click="router.push('/analysisCate?type=0')"
          ><div>
            <IconWithdraw class="top_icon"></IconWithdraw>
            <p>{{ cloudWithdraw }}</p>
          </div></nut-grid-item
        > -->
      </nut-grid>
    </div>
    <nut-tabs v-model="timeType" class="time_tabs" direction="horizontal">
      <nut-tab-pane title="By Day" pane-key="4"></nut-tab-pane>
      <nut-tab-pane title="By Week" pane-key="3"></nut-tab-pane>
      <nut-tab-pane title="By Month" pane-key="2"></nut-tab-pane>
      <nut-tab-pane title="By 3 Months" pane-key="1"></nut-tab-pane>
      <nut-tab-pane title="All" pane-key="0"></nut-tab-pane>
    </nut-tabs>
    <div v-if="listData.length" class="balance_chart">
      <MyEcharts style="width: 100%; height: 200px" :options="chartOptions"></MyEcharts>
    </div>
    <!-- LIST -->
    <nut-infinite-loading v-if="listData.length" class="list_box" load-more-txt="No more content" :has-more="false">
      <div class="list_item" v-for="(item, index) in listData" @click="gotoOrderPage(item)">
        <div :class="['item_img_box', (index + 1) % 3 == 2 ? 'item_2' : '', (index + 1) % 3 == 0 ? 'item_3' : '']">
          <!-- <img v-if="(index + 1) % 3 == 1" src="@/assets/list_item_1.svg" alt="" />
          <img class="cions" v-else-if="(index + 1) % 3 == 2" src="@/assets/list_item_2.svg" alt="" />
          <img v-else-if="(index + 1) % 3 == 0" src="@/assets/list_item_3.svg" alt="" /> -->
          <!-- <img src="@/assets/list_item_2.svg" alt="" /> -->
          <img src="@/assets/DMC_Token1.png" alt="" />
        </div>

        <div>
          <span>Order:{{ item.order_id }}</span>

          <span :class="['earnings']">
            <span v-if="item.profit > 0">+ {{ formatNumber(item.profit)?.integerPart  }}<span style="font-size: 13px;">.{{formatNumber(item.profit)?.decimalPart}}</span></span>
            <span v-else style="font-size: 13px;">No revenue at present</span>
            
            
          </span>
        </div>
        <!-- <div
          ><span>{{ item.pst }} PST</span> <span class="time">{{ transferUTCTime(item.order_created_at) }}</span>
        </div> -->
      </div>
    </nut-infinite-loading>
    <nut-empty v-else description="No data" image="error"></nut-empty>
  </div>
</template>

<script setup lang="ts" name="analysis">
  import TopBack from '@/components/topBack/index.vue';
  import IconArrowRight from '~icons/home/arrow-right.svg';
  import loadingImg from '@/components/loadingImg/index.vue';
  import IconCions from '~icons/home/cions.svg';
  import IconIncome from '~icons/home/earn-income.svg';
  import IconWithdraw from '~icons/home/earn-withdraw.svg';
  import IconOutCome from '~icons/home/out-come.svg';
  import { reactive, toRefs, onMounted, watch } from 'vue';
  import { barOption } from '@/components/echarts/util';
  import { useRoute, useRouter } from 'vue-router';
  import { Search2 } from '@nutui/icons-vue';
  import useOrderList from '../home/useOrderList.ts';
  import useUserAssets from '../home/useUserAssets.ts';
  import { transferUTCTime,formatNumber } from '@/utils/util';
  import { search_user_asset, search_order_profit } from '@/api/amb';
  import { showToast } from '@nutui/nutui';
  const route = useRoute();
  const router = useRouter();
  const state = reactive({
    queryType: 'Earnings',
    queryTypeValue: [],
    typeShow: false,
    chartOptions: {},
    timeType: '3',
    cloudBalance: '0',
    cloudIncome: '0',
    cloudExpense: '0',
    listData: [],
  });

  const { shortcuts } = useOrderList();

  const { listData, cloudBalance, cloudIncome, cloudExpense, timeType, chartOptions, queryType, typeShow, queryTypeValue } = toRefs(state);

  const cloudBalanceNum = computed(()=> formatNumber(cloudBalance.value) )
  const cloudIncomeNum = computed(()=> formatNumber(cloudIncome.value) )
  const cloudExpenseNum = computed(()=> formatNumber(cloudExpense.value) )



  
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
      customClass: 'app_loading',
      icon: loadingImg,
      loadingRotate: false,
    });
    const [start, end] = shortcuts[timeType.value]();
    const postData = !start && !end ? {} : { start_time: start, end_time: end };
    console.log(postData, 'postData');
    search_order_profit(postData).then((res) => {
      listData.value = res.result || [];
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

  function gotoOrderPage(row) {
    router.push({
      name: 'orderSummary',
      query: {
        id: row.order_id,
        status: row.state,
        type: 'history',
      },
    });
  }
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
        padding: 10px 12px;
        height: unset;
        align-items: flex-start;
        font-size: 30px;
        font-size: 1rem;
        font-weight: bold;
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
          text-align: center;
          font-size: 24px;
          font-weight: bold;
          text-decoration: underline;
          svg {
            width: 20px;
            height: 20px;
            color: #4c5093;
            margin-left: 10px;
            font-weight: bold;
          }
        }
        .banlance_text {
          text-decoration: none;
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
    margin: 20px 10px;
    padding: 10px;
    border-radius: 10px;
    width: 100%;
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
      .time {
        color: #aaa;
        color: #635858;
        font-size: 24px;
      }
      &:last-child {
        border-bottom: none;
      }
    }
  }
</style>

<template>
  <div class="analysis_box analysis_charts_box">
    <div style="background: #fff; margin-bottom: 10px">
      <div class="top_box">
        <div class="top_back" @click="router.go(-1)">Data Analysis </div>
        <div class="top_assets">
          <div class="assets_block">
            <!-- <span>{{ titleDMC }} DMC</span>
            <span>≈</span>
            <span>$10.00</span> -->
          </div>
          <div class="right_img"><img src="@/assets/Trading.svg" alt="" /> </div>
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
      <div class="balance_chart">
        <MyEcharts :options="chartOptions0" class="income_charts"></MyEcharts>
      </div>
      <div class="balance_chart">
        <MyEcharts style="width: 100%; height: 200px" :options="chartOptions"></MyEcharts>
      </div>
      <div class="balance_chart">
        <MyEcharts style="width: 100%; height: 200px" :options="chartOptionsReward"></MyEcharts>
      </div>
      <div class="balance_chart">
        <MyEcharts style="width: 100%; height: 200px" :options="chartOptionsExpense"></MyEcharts>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="analysis">
  import { reactive, toRefs, onMounted, watch } from 'vue';
  import { barOption } from '@/components/echarts/util';
  import { useRoute, useRouter } from 'vue-router';
  import { transferUTCTime } from '@/utils/util';
  import loadingImg from '@/components/loadingImg/index.vue';
  import '@nutui/nutui/dist/packages/toast/style';
  import { search_user_asset, search_order_profit, get_user_dmc } from '@/api/amb';

  const route = useRoute();
  const router = useRouter();

  const state = reactive({
    queryType: 'Earnings',
    queryTypeValue: [],
    typeShow: false,
    chartOptions: {},
    chartOptionsReward: {},
    chartOptionsExpense: {},
    chartOptions0: {},
    timeType: '0',
    cloudBalance: 0,
    cloudIncome: 0,
    cloudExpense: 0,
    earnListData: [],
  });
  const { timeType, chartOptions, chartOptionsReward, chartOptions0, chartOptionsExpense } = toRefs(state);
  onMounted(async () => {
    getLineOptions();
  });
  const getLineOptions = () => {
    // let valueList, dateList;
    // if (route.query.type == 3) {
    // dateList = listData.value.map((el) => 'Order: ' + el.order_id);
    // valueList = listData.value.map((el) => el.quantity);
    // chartOptions.value = barOption(dateList, valueList, queryType.value);
    // chartOptions.value.xAxis[0].show = true;
    // chartOptions.value.grid[0] = {
    //   left: '10px',
    //   right: '10px',
    //   bottom: '30px',
    // };
    chartOptions0.value = {
      title: {
        text: 'Benefit analysis',
        textStyle: {
          fontSize: '14px',
          color: '#4c5093',
          fontWeight: 'bold',
        },
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
      },
      legend: {
        data: ['Profit', 'Expenses', 'Income'],
        right: 'right',
      },
      grid: {
        left: '3%',
        right: '0%',
        bottom: '10px',
        containLabel: false,
      },
      xAxis: [
        {
          type: 'value',
        },
      ],
      yAxis: [
        {
          type: 'category',
          axisLabel: {
            show: false,
          },
        },
      ],
      series: [
        {
          name: 'Profit',
          type: 'bar',
          label: {
            show: true,
            position: 'inside',
          },
          emphasis: {
            focus: 'series',
          },
          data: [200, 170, 240, 244, 200, 220, 210],
        },
        {
          name: 'Income',
          type: 'bar',
          stack: 'Total',
          label: {
            show: true,
          },
          emphasis: {
            focus: 'series',
          },
          data: [320, 302, 341, 374, 390, 450, 420],
        },
        {
          name: 'Expenses',
          type: 'bar',
          stack: 'Total',
          label: {
            show: true,
            position: 'left',
          },
          emphasis: {
            focus: 'series',
          },
          data: [-120, -132, -101, -134, -190, -230, -210],
        },
      ],
    };
    chartOptions.value = {
      title: {
        text: 'Assets Analysis',
        textStyle: {
          fontSize: '14px',
          color: '#4c5093',
          fontWeight: 'bold',
        },
      },
      tooltip: {},
      legend: {
        top: 'bottom',
        show: false,
      },

      series: [
        {
          name: 'Assets Analysis',
          type: 'pie',
          radius: [10, 50],
          center: ['50%', '50%'],
          roseType: 'area',
          itemStyle: {
            borderRadius: 1,
          },
          data: [
            { value: 40, name: '总收益' },
            { value: 38, name: '总提现' },
            { value: 32, name: '余额' },
            { value: 30, name: '总充值' },
          ],
        },
      ],
    };
    chartOptionsReward.value = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
      },
      title: {
        text: 'Rewards Analysis',
        textStyle: {
          fontSize: '14px',
          color: '#4c5093',
          fontWeight: 'bold',
        },
      },
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      yAxis: {
        type: 'value',
      },
      grid: {
        left: '40px',
        bottom: '10px',
        //   right: '10px',
      },
      series: [
        {
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line',
          smooth: true,
        },
      ],
    };
    chartOptionsExpense.value = {
      title: {
        text: 'Expense Analysis',
        textStyle: {
          fontSize: '14px',
          color: '#4c5093',
          fontWeight: 'bold',
        },
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
      },
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      yAxis: {
        type: 'value',
      },
      grid: {
        left: '40px',
        bottom: '10px',
        //   right: '10px',
      },
      series: [
        {
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line',
          smooth: true,
        },
      ],
    };

    // }
  };
</script>

<style lang="scss" scoped>
  .analysis_box {
    // min-height: 100%;
    background: #f1f1f1;
  }
  .analysis_charts_box {
    height: 100%;
    overflow-y: scroll;
    padding-bottom: 120px;
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
    // height: 1000px;
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
    height: auto;
  }
  .income_charts {
    width: 100%;
    min-height: 400px;
    height: auto;
    height: 600px;
  }
</style>

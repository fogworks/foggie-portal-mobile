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
        <nut-tab-pane title="All" pane-key="All"></nut-tab-pane>
        <nut-tab-pane title="By 3 Months" pane-key="3Months"></nut-tab-pane>
        <nut-tab-pane title="By Month" pane-key="Month"></nut-tab-pane>
        <nut-tab-pane title="By Week" pane-key="Week"></nut-tab-pane>
        <nut-tab-pane title="By Day" pane-key="Day"></nut-tab-pane>
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
  import moment from 'moment';
  import { reactive, toRefs, onMounted, watch, computed } from 'vue';
  import { barOption } from '@/components/echarts/util';
  import { useRoute, useRouter } from 'vue-router';
  import { transferUTCTime } from '@/utils/util';
  import loadingImg from '@/components/loadingImg/index.vue';
  import '@nutui/nutui/dist/packages/toast/style';
  import { search_user_asset, search_order_profit, get_user_dmc } from '@/api/amb';
  import { Type } from '@varlet/ui';
  import { showToast } from '@nutui/nutui';
  // import { useUserStore } from '@/store/modules/user';
  // const useStore = useUserStore();
  const route = useRoute();
  const router = useRouter();
  // const created_at = computed(() => transferUTCTime(useStore.getUserInfo?.created_at, 'YYYY-MM-DD')  );

  const state = reactive({
    queryType: 'Earnings',
    queryTypeValue: [],
    typeShow: false,
    chartOptions: {},
    chartOptionsReward: {},
    chartOptionsExpense: {},
    chartOptions0: {},
    timeType: 'All',
    cloudBalance: 0,
    cloudIncome: 0,
    cloudExpense: 0,
    earnListData: [],
  });
  const { timeType, chartOptions, chartOptionsReward, chartOptions0, chartOptionsExpense } = toRefs(state);

  watch(
    timeType,
    (newValue) => {
      let params = {
        query_time: [] as { start_time: string; end_time: string }[],
      };
      if (newValue == 'All') {
        let year = moment().format('YYYY');
        for (let index = 1; index <= 12; index++) {
          // 获取指定年月的第一天
          const firstDayOfMonth = moment(`${year}-${index}-01`, 'YYYY-MM-DD').format('YYYY-MM-DD');
          // 获取该月的最后一天
          const lastDayOfMonth = moment(`${year}-${index}`, 'YYYY-MM').endOf('month').format('YYYY-MM-DD');
          params.query_time.push({ start_time: firstDayOfMonth, end_time: lastDayOfMonth });
        }
      } else if (newValue == '3Months') {
        let year_month = moment().subtract(2, 'month').format('YYYY-MM');

        // 获取三月前的第一天
        const firstDayOfMonth = moment(`${year_month}-01`, 'YYYY-MM-DD');
        // 获取当前月的最后一天
        const lastDayOfMonth = moment().endOf('month');
        // 获取第一天所在周的周一
        const firstMonday = firstDayOfMonth.clone().startOf('isoWeek');

        // 从第一个周一开始，逐周增加
        let currentMonday = firstMonday.clone();
        while (currentMonday.isBefore(lastDayOfMonth)) {
          // 获取当前周的开始和结束日期
          const weekStart = currentMonday.format('YYYY-MM-DD');
          const weekEnd = currentMonday.clone().endOf('isoWeek').add(1, 'days').format('YYYY-MM-DD');
          // 将当前周的日期范围添加到数组中
          params.query_time.push({ start_time: weekStart, end_time: weekEnd });
          // 增加一周
          currentMonday.add(1, 'week');
        }
      } else if (newValue == 'Month') {
        let year_month = moment().format('YYYY-MM');
        // 获取指定年月的第一天
        const firstDayOfMonth = moment(`${year_month}-01`, 'YYYY-MM-DD');
        // 获取该月的最后一天
        const lastDayOfMonth = firstDayOfMonth.clone().endOf('month');
        // 获取第一天所在周的周一
        const firstMonday = firstDayOfMonth.clone().startOf('isoWeek');
        // 从第一个周一开始，逐周增加
        let currentMonday = firstMonday.clone();
        while (currentMonday.isBefore(lastDayOfMonth)) {
          // 获取当前周的开始和结束日期
          const weekStart = currentMonday.format('YYYY-MM-DD');
          const weekEnd = currentMonday.clone().endOf('isoWeek').add(1, 'days').format('YYYY-MM-DD');
          // 将当前周的日期范围添加到数组中
          params.query_time.push({ start_time: weekStart, end_time: weekEnd });
          // 增加一周
          currentMonday.add(1, 'week');
        }
      } else if (newValue == 'Week') {
        let SevenDaysAgo = moment().subtract(6, 'days');
        for (let index = 1; index <= 7; index++) {
          let today = SevenDaysAgo.format('YYYY-MM-DD');
          const yesterday = SevenDaysAgo.add(1, 'days').format('YYYY-MM-DD');
          params.query_time.push({ start_time: today, end_time: yesterday });
        }
      } else if (newValue == 'Day') {
        let today = moment().format('YYYY-MM-DD');
        const yesterday = moment().add(1, 'days').format('YYYY-MM-DD');
        params.query_time.push({ start_time: today, end_time: yesterday });
      }
      loadUserDmc();
      loadSearchUserAssetCount(params);
    },
    { immediate: true },
  );

  function loadUserDmc() {
    get_user_dmc()
      .then((res) => {
        if (res.code == 200) {
          let data = res.result.data || {};
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
                roseType: 'radius',
                itemStyle: {
                  borderRadius: 1,
                },
                data: [
                  { value: data?.income, name: 'Income' },
                  { value: data?.withdraw, name: 'Withdraw' },
                  { value: data?.balance, name: 'Balance' },
                  { value: data?.Recharge, name: 'Recharge' },
                ],
              },
            ],
          };
        }
        console.log(res);
      })
      .catch((err) => {});
  }

  function loadSearchUserAssetCount(params: object) {
    showToast.loading('Loading', {
      cover: true,
      coverColor: 'rgba(0,0,0,0.45)',
      customClass: 'app_loading',
      icon: loadingImg,
      loadingRotate: false,
    });
    search_user_asset(params)
      .then((res) => {
        if (res.code == 200) {
          let data = res.result.counts || {};
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
              data: ['Balance', 'Expenses', 'Income'],
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
                data: Object.keys(data),
                axisLabel: {
                  show: false,
                },
              },
            ],
            series: [
              {
                name: 'Balance',
                type: 'bar',
                label: {
                  show: true,
                  position: 'inside',
                },
                emphasis: {
                  focus: 'series',
                },
                data: Object.values(data).map((item) => item.balance),
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
                data: Object.values(data).map((item) => item.income),
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
                data: Object.values(data).map((item) => item.payout),
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
              data: Object.keys(data),
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
                data: Object.values(data).map((item) => item.income),
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
              data: Object.keys(data),
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
                data: Object.values(data).map((item) => item.payout),
                type: 'line',
                smooth: true,
              },
            ],
          };
        }
      })
      .finally(() => {
        showToast.hide();
      });
  }

  // onMounted(() => {
  //    loadUserDmc();
  // });
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

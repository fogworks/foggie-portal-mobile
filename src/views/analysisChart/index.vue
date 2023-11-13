<template>
  <div class="analysis_box analysis_charts_box">
    <div style="background: #fff; margin-bottom: 10px">
      <div class="top_box">
        <TopBack> Data Analysis</TopBack>

        <div class="top_assets">
          <div class="right_img"><img src="@/assets/Trading.svg" alt="" /> </div>
          <nut-grid class="top_grid" :column-num="3">
            <nut-grid-item text="Balance">
              <div>
                <IconCions class="top_icon"></IconCions>
                <p class="banlance_text">{{ cloudBalance }}</p>
              </div>
            </nut-grid-item>
            <nut-grid-item class="top_icon" text="Earnings" @click="router.push('/analysisCate?type=1')">
              <div>
                <IconIncome class="top_icon"></IconIncome>
                <p class="banlance_text">{{ cloudIncome }}<Search2></Search2> </p>
              </div>
            </nut-grid-item>
            <nut-grid-item class="top_icon" text="Expenses" @click="router.push('/analysisCate?type=3')">
              <div>
                <IconOutCome class="top_icon"></IconOutCome>
                <p class="banlance_text1">{{ cloudExpense > 0 ? '-' : '' }}{{ cloudExpense }}<Search2></Search2> </p>
              </div>
            </nut-grid-item>
          </nut-grid>
        </div>
      </div>
    </div>
    <div class="analysis_content">
      <nut-tabs v-model="timeType" class="time_tabs" direction="horizontal">
        <nut-tab-pane title="By Day" pane-key="Day"></nut-tab-pane>
        <nut-tab-pane title="By Week" pane-key="Week"></nut-tab-pane>
        <nut-tab-pane title="By Month" pane-key="Month"></nut-tab-pane>
        <nut-tab-pane title="By 3 Months" pane-key="3Months"></nut-tab-pane>
        <nut-tab-pane title="All" pane-key="All"></nut-tab-pane>
      </nut-tabs>
      <div class="balance_chart">
        <MyEcharts :options="chartOptions0" class="income_charts"></MyEcharts>
      </div>
      <div class="balance_chart">
        <MyEcharts style="width: 100%; height: 200px" :options="chartOptions"></MyEcharts>
      </div>
      <div class="balance_chart">
        <MyEcharts style="width: 100%; height: 200px" :options="orderChartOption"></MyEcharts>
      </div>
      <nut-infinite-loading v-if="listData.length" class="list_box" load-more-txt="No more content" :has-more="false">
        <div class="list_item" v-for="(item, index) in listData">
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
              <span v-if="item.profit > 0">+{{ item.profit }}</span>
              <span v-else style="font-size: 12px;">No gain for now</span>
              <!-- <IconArrowRight style="vertical-align: text-top" width="1.1rem" height="1.1rem" color="#5F57FF"></IconArrowRight
          > -->
            </span>
          </div>
          <!-- <div
          ><span>{{ item.pst }} PST</span> <span class="time">{{ transferUTCTime(item.order_created_at) }}</span>
        </div> -->
        </div>
      </nut-infinite-loading>
      <nut-empty v-else description="No data" image="error"></nut-empty>
      <!-- <div class="balance_chart">
        <MyEcharts style="width: 100%; height: 200px" :options=""></MyEcharts>
      </div> -->
    </div>
  </div>
</template>

<script setup lang="ts" name="analysis">
  import moment from 'moment';
  import { reactive, toRefs, onMounted, watch, computed } from 'vue';
  import { barOption } from '@/components/echarts/util';
  import { useRoute, useRouter } from 'vue-router';
  import IconCions from '~icons/home/cions.svg';
  import IconIncome from '~icons/home/earn-income.svg';
  import IconOutCome from '~icons/home/out-come.svg';
  import { Search2 } from '@nutui/icons-vue';

  import { transferUTCTime } from '@/utils/util';
  import loadingImg from '@/components/loadingImg/index.vue';
  import '@nutui/nutui/dist/packages/toast/style';
  import { search_user_asset, search_order_profit, get_user_dmc } from '@/api/amb';
  import { Type } from '@varlet/ui';
  import { showToast } from '@nutui/nutui';
  import useOrderList from '../home/useOrderList.ts';

  // import { useUserStore } from '@/store/modules/user';
  // const useStore = useUserStore();
  const route = useRoute();
  const router = useRouter();

  const state = reactive({
    queryType: 'Earnings',
    queryTypeValue: [],
    typeShow: false,
    chartOptions: {},

    chartOptions0: {},
    timeType: 'Week',

    earnListData: [],
  });
  const { timeType, chartOptions, chartOptions0 } = toRefs(state);
  const orderChartOption = ref({});
  const listData = ref([]);

  const dmcCount = ref({});
  const { shortcuts } = useOrderList();
  watch(
    timeType,
    (newValue) => {
      let params = {
        query_time: [] as { start_time: string; end_time: string }[],
      };
      if (newValue == 'All') {
        let year = moment().format('YYYY');
        for (let index = 1; index <= 12; index++) {
          const nowMonth = new Date().getMonth();
          if (index > nowMonth) {
            return;
          }
          // 获取指定年月的第一天
          const firstDayOfMonth = moment(`${year}-${index}-01`, 'YYYY-MM-DD').format('YYYY-MM-DD');
          // 获取该月的最后一天
          const lastDayOfMonth = moment(`${year}-${index}`, 'YYYY-MM').endOf('month').format('YYYY-MM-DD');
          params.query_time.push({ start_time: firstDayOfMonth, end_time: lastDayOfMonth });
        }
      } else if (newValue == '3Months') {
        // let year_month = moment().subtract(2, 'month').format('YYYY-MM');

        // // 获取三月前的第一天
        // const firstDayOfMonth = moment(`${year_month}-01`, 'YYYY-MM-DD');
        // console.log(firstDayOfMonth.format('YYYY-MM-DD'));

        // // 获取当前月的最后一天
        // const lastDayOfMonth = moment().endOf('month');
        // // 获取第一天所在周的周一
        // const firstMonday = firstDayOfMonth.clone().startOf('isoWeek');

        // // 从第一个周一开始，逐周增加
        // let currentMonday = firstMonday.clone();

        // while (currentMonday.isBefore(lastDayOfMonth)) {
        //   // 获取当前周的开始和结束日期
        //   const weekStart = currentMonday.format('YYYY-MM-DD');
        //   const weekEnd = currentMonday.clone().endOf('isoWeek').add(1, 'days').format('YYYY-MM-DD');
        //   // 将当前周的日期范围添加到数组中
        //   params.query_time.push({ start_time: weekStart, end_time: weekEnd });
        //   // 增加一周
        //   currentMonday.add(1, 'week');
        // }
        const currentDate = moment(); // 获取当前时间
        for (let i = 0; i < 14; i++) {
          const startTime = currentDate.clone().subtract(i, 'weeks').startOf('isoWeek').format('YYYY-MM-DD');
          const endTime = currentDate.clone().subtract(i, 'weeks').endOf('isoWeek').format('YYYY-MM-DD');
          params.query_time.unshift({ start_time: startTime, end_time: endTime });
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
      searchOrderProfit(newValue);
    },
    { immediate: true },
  );

  const cloudBalance = computed(() => {
    let count = Object.values(dmcCount.value).reduce((accumulator, current) => {
      return (accumulator = accumulator + current.balance);
    }, 0);
    return count.toFixed(4);
  });

  const cloudIncome = computed(() => {
    let count = Object.values(dmcCount.value).reduce((accumulator, current) => {
      return (accumulator = accumulator + current.income);
    }, 0);
    return count.toFixed(4);
  });
  const cloudExpense = computed(() => {
    let count = Object.values(dmcCount.value).reduce((accumulator, current) => {
      return (accumulator = accumulator + current.payout);
    }, 0);
    return count.toFixed(4);
  });

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
          dmcCount.value = res.result.counts || {};

          chartOptions0.value = {
            backgroundColor: '#fff',
            title: {
              text: `Earnings analysis`,
              textStyle: {
                fontSize: '14px',
                color: '#4c5093',
                fontWeight: 'bold',
              },
            },
            legend: {
              top: '10%',
              right: '5%',
              icon: 'circle',
            },
            tooltip: {
              show: true,
              trigger: 'axis',
              backgroundColor: 'rgba(255,255,255)',
              axisPointer: {
                lineStyle: {
                  color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                      {
                        offset: 0,
                        color: '#A7D6FF',
                      },
                      {
                        offset: 0.5,
                        color: '#fff',
                      },
                      {
                        offset: 1,
                        color: '#A7D6FF',
                      },
                    ],
                    global: false,
                  },
                },
              },
            },
            grid: {
              top: '20%',
              left: '8%',
              right: '8%',
              bottom: '20%',
            },
            xAxis: {
              type: 'category',
              axisLabel: {
                rotate: 45,
                fontSize: 10,
              },
              data: Object.keys(dmcCount.value).map((item) => {
                let start_time = moment(item.split('~')[0]).format('MMM-D');
                let end_time = moment(item.split('~')[1]).format('MMM-D');
                if (timeType.value == 'Week' || timeType.value == 'Day') {
                  return start_time;
                } else {
                  return start_time + '~' + end_time;
                }
              }),
            },
            yAxis: {
              type: 'value',
              name: 'Amount',
              axisLabel: {
                show: true,
                inside: true, // 指定刻度显示在右侧,
                margin: -8,
                textStyle: {
                  color: '#737373',
                  fontSize: 10,
                },
              },
              axisLine: {
                show: false,
              },
              axisTick: {
                show: false,
              },
              splitLine: {
                lineStyle: {
                  color: 'rgba(131,101,101,0.2)',
                  type: 'dashed',
                },
              },
              show: true,
            },

            series: [
              {
                name: 'Balance',
                type: 'line',
                zlevel: 11,
                yAxisIndex: 0, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
                smooth: true, //平滑曲线显示
                symbol: 'circle', //标记的图形为实心圆
                symbolSize: 8, //标记的大小
                itemStyle: {
                  normal: {
                    color: '#34b063',
                    borderColor: 'rgba(52,176,99, 0.5)', //圆点透明 边框
                    borderWidth: 7,
                    label: {
                      show: false, //开启显示
                      position: 'top', //在上方显示
                      textStyle: {
                        //数值样式
                        color: '#50c878',
                        fontSize: 12,
                        fontWeight: 400,
                      },
                      formatter: function (res) {
                        if (res.value) {
                          return res.value + '%';
                        } else {
                          return 0;
                        }
                      },
                    },
                  },
                },
                lineStyle: {
                  color: '#50c878',
                },
                data: Object.values(dmcCount.value).map((item) => item.balance),
              },
              {
                name: 'Income',
                type: 'bar',
                miniBarWidth: 20,
                yAxisIndex: 0,

                data: Object.values(dmcCount.value).map((item) => item.income),
              },
              {
                name: 'Expenses',
                type: 'bar',
                miniBarWidth: 20,
                z: '-1',
                barGap: '-100%',
                yAxisIndex: 0,
                data: Object.values(dmcCount.value).map((item) => item.payout),
              },
            ],
            color: ['#4474c4', '#d71309'],
          };
        }
      })
      .finally(() => {
        showToast.hide();
      });
  }

  function searchOrderProfit(type) {
    let timeTypeNumber = 3;
    switch (type) {
      case 'Day':
        timeTypeNumber = 4;
        break;
      case 'Week':
        timeTypeNumber = 3;

        break;
      case 'Month':
        timeTypeNumber = 2;
        break;
      case '3Months':
        timeTypeNumber = 1;
        break;
      case 'All':
        timeTypeNumber = 0;
        break;
    }
    const [start, end] = shortcuts[timeTypeNumber]();
    const postData = !start && !end ? {} : { start_time: start, end_time: end };

    search_order_profit(postData).then((res) => {
      listData.value = res.result || [];
    });
  }

  const getLineOptions = () => {
    const dateList = listData.value.map((el) => 'Order: ' + el.order_id);
    const valueList = listData.value.map((el) => el.profit);
    orderChartOption.value = barOption(dateList, valueList, 'Earn Analysis');
    orderChartOption.value.xAxis[0].show = true;
    orderChartOption.value.grid[0] = {
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
    position: relative;
    // margin: 20px;
    padding: 50px 10px 30px;
    border-radius: 20px;
    background: $primary-color;

    .top_assets {
      display: flex;
      width: 100%;
      justify-content: flex-end;
      align-items: flex-end;
      color: #fff;
      height: 250px;

      .top_grid {
        border: none;
        width: 100%;

        .top_icon {
          width: 60px;
          height: 60px;
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
              color: var(--nut-grid-item-text-color, var(--nut-title-color2, #666666));
            }

            .banlance_text1 {
              text-decoration: none;
              color: #dfa1a1;
            }
          }
        }
      }

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
        position: absolute;
        top: 35px;
        right: -15px;

        img {
          width: 160px;
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
    height: 800px;
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

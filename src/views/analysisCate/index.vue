<template>
  <div class="analysis_box">
    <div style="background: #fff; padding-bottom: 10px; margin-bottom: 10px">
      <div class="top_box">
        <div class="top_back" @click="router.go(-1)">My Assets </div>
        <div class="top_assets">
          <div class="assets_block">
            <span>10.0000 DMC</span>
            <span>≈</span>
            <span>$10.00</span>
          </div>
          <div class="right_img"><img src="@/assets/Trading.png" alt="" /> </div>
        </div>
      </div>
    </div>

    <div class="analysis_content">
      <nut-radio-group v-model="timeType" class="time_radios" direction="horizontal">
        <nut-radio label="0">All</nut-radio>
        <nut-radio label="1">By 3 Months</nut-radio>
        <nut-radio label="2">By Month</nut-radio>
        <nut-radio label="3">By Week</nut-radio>
        <nut-radio label="4">By Day</nut-radio>
      </nut-radio-group>
      <div class="balance_chart">
        <MyEcharts style="width: 100%; height: 200px" :options="chartOptions"></MyEcharts>
      </div>
      <!-- LIST -->
      <nut-infinite-loading class="list_box" v-model="infinityValue" :has-more="hasMore" @load-more="loadMore">
        <div class="list_item" v-for="item in listData">
          <span>{{ item.createAt }}</span>
          <span :class="[item.type == 'Earnings' ? 'earnings' : 'expenditures']">
            {{ (item.type == 'Earnings' ? '+' : '-') + item.dmc }}
          </span>
        </div>
      </nut-infinite-loading>
    </div>
  </div>
</template>

<script setup lang="ts" name="analysis">
  import { reactive, toRefs, onMounted, watch } from 'vue';
  import { lineOption } from '@/components/echarts/util';
  import { useRoute, useRouter } from 'vue-router';
  const route = useRoute();
  const router = useRouter();
  const state = reactive({
    queryType: 'Earnings',
    queryTypeValue: [],
    typeShow: false,
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
    ],
    chartOptions: {},
    timeType: '0',
  });
  // const columns = ref([
  //   { text: 'Earnings', value: 0 },
  //   { text: 'Expenditures', value: 1 },
  // ]);
  const { timeType, chartOptions, queryType, typeShow, listData, infinityValue, hasMore, queryTypeValue } = toRefs(state);
  const loadMore = () => {};
  // const confirm = ({ selectedValue, selectedOptions }) => {
  //   queryType.value = selectedOptions.map((val) => val.text).join(',');
  //   typeShow.value = false;
  // };

  const getLineOptions = () => {
    const dateList = [
      '2023-09-20',
      '2023-09-21',
      '2023-09-23',
      '2023-09-24',
      '2023-09-25',
      '2023-09-26',
      '2023-09-27',
      '2023-09-28',
      '2023-09-29',
      '2023-09-30',
      '2023-09-31',
    ];
    const valueList = [5, 100, 5, 100, 5, 100, 5, 100, 5, 100, 5];

    chartOptions.value = lineOption(dateList, valueList, queryType.value);
  };
  watch(
    queryType,
    () => {
      getLineOptions();
    },
    { deep: true },
  );
  onMounted(() => {
    loadMore();
    switch (route.query.type) {
      case '0':
        queryType.value = 'Withdrawal';
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
    getLineOptions();
  });
</script>

<style lang="scss" scoped>
  .analysis_box {
    min-height: 100%;
    background: #f1f1f1;
  }
  .top_box {
    margin: 20px;
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
  .time_radios {
    display: flex;
    justify-content: space-around;
    align-items: center;
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
    .earnings {
      color: $main_green;
    }
    .expenditures {
      color: $main_red;
    }
  }
</style>

<template>
  <div class="analysis_content">
    <nut-tabs direction="horizontal" v-model="timeType" class="time_tabs">
      <nut-tab-pane title="All" pane-key="0"> </nut-tab-pane>
      <nut-tab-pane title="By 3 Months" pane-key="1"> </nut-tab-pane>
      <nut-tab-pane title="By Month" pane-key="2"> </nut-tab-pane>
      <nut-tab-pane title="By Week" pane-key="3"> </nut-tab-pane>
      <nut-tab-pane title="By Day" pane-key="4"> </nut-tab-pane>
    </nut-tabs>
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
  .time_tabs {
    margin-bottom: 10px;
    margin-top: 5px;
    :deep {
      .nut-tabs__titles {
        // background: transparent;
      }
      .nut-tabs__content {
        display: none;
      }
      .nut-tabs__titles-item__text {
        white-space: pre-wrap;
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
    &:first-child {
      border-radius: 40px 40px 0 0;
    }
    &:last-child {
      border-radius: 0 0 40px 40px;
    }
    .earnings {
      color: $main_green;
    }
    .expenditures {
      color: $main_red;
    }
  }
</style>

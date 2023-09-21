<template>
  <div class="analysis_content">
    <!-- type-popup -->
    <nut-cell title="Select Query Type" :desc="queryType" @click="typeShow = true"></nut-cell>
    <nut-popup position="bottom" v-model:visible="typeShow">
      <nut-picker v-model="queryTypeValue" :columns="columns" title="Select Query Type" @confirm="confirm" @cancel="typeShow = false">
      </nut-picker>
    </nut-popup>
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
  import { ref, reactive, toRefs, onMounted } from 'vue';
  import { lineOption } from '@/components/echarts/util';
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
  });
  const columns = ref([
    { text: 'Earnings', value: 0 },
    { text: 'Expenditures', value: 1 },
  ]);
  const { chartOptions, queryType, typeShow, listData, infinityValue, hasMore, queryTypeValue } = toRefs(state);
  const loadMore = () => {};
  const confirm = ({ selectedValue, selectedOptions }) => {
    queryType.value = selectedOptions.map((val) => val.text).join(',');
    // console.log(queryTypeValue.value, 'queryTypeValue');
    typeShow.value = false;
  };

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
    chartOptions.value = lineOption(dateList, valueList);
  };
  onMounted(() => {
    loadMore();
    getLineOptions();
  });
</script>

<style lang="scss" scoped>
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
    padding: 12px 20px;
    height: 50px;
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

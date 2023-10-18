<template>
  <div class="analysis_box">
    <div style="background: #fff; padding-bottom: 10px; margin-bottom: 10px">
      <div class="top_box">
        <div class="top_back" @click="router.go(-1)">{{ queryType }} </div>
        <div class="top_assets">
          <div class="assets_block">
            <span>{{ cloudBalance }} DMC</span>
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
          <span>{{ transferUTCTime(item.created_at) }}</span>
          <span :class="[item.type == 'Earnings' ? 'earnings' : 'expenditures']">
            {{ (item.type == 'Earnings' ? '+' : '-') + item.quantity }} DMC
            <IconRunning v-if="item.state == 'running'"></IconRunning>
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
  import { transferUTCTime } from '@/utils/util';
  import useUserAssets from '../home/useUserAssets.ts';
  import useWithdrawList from './useWithdrawList.ts';
  import IconRunning from '~icons/home/running.svg';

  const route = useRoute();
  const router = useRouter();
  const { getUserAssets, cloudBalance, cloudPst, cloudIncome, cloudWithdraw } = useUserAssets();
  var { shortcuts, resetWithdrawData, getWithdrawList, withdrawListData, hasMore, infinityValue } = useWithdrawList();

  const state = reactive({
    queryType: 'Earnings',
    queryTypeValue: [],
    typeShow: false,
    chartOptions: {},
    timeType: '0',
  });
  const { timeType, chartOptions, queryType, typeShow, queryTypeValue } = toRefs(state);
  const listData = computed(() => {
    if (route.query.type == 0) {
      return withdrawListData.value;
    }
  });
  const loadMore = (start, end) => {
    if (route.query.type == 0) {
      getWithdrawList(start, end);
    }
  };
  const reset = (start, end) => {
    if (route.query.type == 0) {
      resetWithdrawData();
    }
  };
  const getLineOptions = () => {
    const dateList = listData.value.map((el) => transferUTCTime(el.order_created_at));
    let valueList;
    if (route.query.type == 0) {
      valueList = listData.value.map((el) => el.quantity);
    }
    chartOptions.value = lineOption(dateList, valueList, queryType.value);
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
    },
    { deep: true },
  );

  onMounted(() => {
    loadMore();
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
</style>

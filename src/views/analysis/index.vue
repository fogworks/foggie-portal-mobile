<template>
  <div class="analysis_content">
    <!-- type-popup -->
    <!-- <nut-cell title="Select Query Type" :desc="queryType" @click="typeShow = true"></nut-cell>
    <nut-popup position="bottom" v-model:visible="typeShow">
      <nut-picker v-model="queryTypeValue" :columns="columns" title="Select Query Type" @confirm="confirm" @cancel="typeShow = false">
      </nut-picker>
    </nut-popup> -->
    <div class="top_box">
      <div class="top_back" @click="router.go(-1)">Earn </div>
      <nut-grid class="top_grid">
        <nut-grid-item text="Balance"
          ><div>
            <img src="" alt="" />
            <p>11.0000</p>
          </div>
        </nut-grid-item>
        <nut-grid-item text="Earnings" @click="router.push('/analysisCate?type=1')">11.0000</nut-grid-item>
        <nut-grid-item text="Expense" @click="router.push('/analysisCate?type=3')">11.0000</nut-grid-item>
        <nut-grid-item text="Withdrawal" @click="router.push('/analysisCate?type=0')">11.0000</nut-grid-item>
      </nut-grid>
    </div>

    <nut-tabs v-model="timeType" class="time_tabs">
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

    <nut-infinite-loading
      class="list_box"
      load-more-txt="No more content"
      v-model="infinityValue"
      :has-more="hasMore"
      @load-more="loadMore"
    >
      <div class="list_item" v-for="(item, index) in listData">
        <div :class="['item_img_box', (index + 1) % 3 == 2 ? 'item_2' : '', (index + 1) % 3 == 0 ? 'item_3' : '']">
          <img v-if="(index + 1) % 3 == 1" src="@/assets/list_item_1.svg" alt="" />
          <img class="cions" v-else-if="(index + 1) % 3 == 2" src="@/assets/list_item_2.svg" alt="" />
          <img v-else-if="(index + 1) % 3 == 0" src="@/assets/list_item_3.svg" alt="" />
        </div>

        <div>
          <span>Order:1234</span>
          <span :class="['earnings']"> +{{ item.dmc }} </span>
        </div>
        <div
          ><span>100 PST</span> <span class="time">{{ item.createAt }}</span>
        </div>
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

    chartOptions.value = lineOption(dateList, valueList, 'Earn Analysis');
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
    getLineOptions();
  });
</script>

<style lang="scss" scoped>
  .top_box {
    margin: 20px;
    padding: 50px 10px 30px;
    border-radius: 20px;
    background: $primary-color;
  }
  .top_grid {
    border: none;
    :deep {
      .nut-grid-item {
        max-width: 25%;
      }
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
      .nut-tabs__titles {
        // background: transparent;
      }
      .nut-tabs__content {
        display: none;
      }
      .nut-tabs__titles-item__text {
        // white-space: pre-wrap;
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
  .list_box {
    padding: 0 10px;
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
        font-size: 36px;
        margin-right: 40px;
      }
      .time {
        color: #ff6e00;
        font-size: 24px;
      }
      &:last-child {
        border-bottom: none;
      }
    }
  }
</style>

<template>
  <div class="analysis_content">
    <div class="top_box">
      <TopBack> Transaction Records </TopBack>

      <!-- <nut-grid class="top_grid">
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
            <p>0</p>
          </div></nut-grid-item
        >
        <nut-grid-item class="top_icon" text="Withdrawal" @click="router.push('/analysisCate?type=0')"
          ><div>
            <IconWithdraw class="top_icon"></IconWithdraw>
            <p>{{ cloudWithdraw }}</p>
          </div></nut-grid-item
        >
      </nut-grid> -->
    </div>
    <nut-tabs @change="searchTypeChange" class="type_tabs" v-model="searchType">
      <nut-tab-pane title="Recharge " pane-key="0"> </nut-tab-pane>
      <nut-tab-pane title="Withdraw" pane-key="1"> </nut-tab-pane>
    </nut-tabs>
    <nut-tabs @change="timeTypeChange" v-model="timeType" class="time_tabs" direction="horizontal">
      <nut-tab-pane title="By Day" pane-key="4"></nut-tab-pane>
      <nut-tab-pane title="By Week" pane-key="3"></nut-tab-pane>
      <nut-tab-pane title="By Month" pane-key="2"></nut-tab-pane>
      <nut-tab-pane title="By 3 Months" pane-key="1"></nut-tab-pane>
      <nut-tab-pane title="All" pane-key="0"></nut-tab-pane>
    </nut-tabs>

    <template v-if="listData.length">
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
        <div class="list_item" v-for="(item, index) in listData" >
          <div :class="['item_img_box', (index + 1) % 3 == 2 ? 'item_2' : '', (index + 1) % 3 == 0 ? 'item_3' : '']">
          <!-- <img src="@/assets/list_item_2.svg" alt="" /> -->
          <img src="@/assets/DMC_Token1.png" alt="" />
          </div>
          <div>
            <span class="txt_id" @click="goToHash(item.trx_id)">{{ handleID(item.trx_id) }}</span>
            <span :class="[searchType == 0 ? 'earnings' : 'expense']">
              {{ searchType == 0 ? '+' : '-' }} {{ formatNumber(item.quantity)?.integerPart
              }}<span style="font-size: 12px">.{{ formatNumber(item.quantity)?.decimalPart }}</span>
            </span>
          </div>
          <div>
            <span>memo:{{ item.memo }}</span>
            <span>{{ searchType == 0 ? '' : item.state }} </span> <span class="time">{{ transferGMTTime(item.created_at) }}</span>
          </div>
        </div>
      </nut-infinite-loading>
    </template>
    <nut-empty v-else description="No data" image="error"></nut-empty>
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
  import useTransactionRecords from './useTransactionRecords.ts';
  import useUserAssets from './useUserAssets.ts';
  import { transferUTCTime, transferGMTTime, formatNumber } from '@/utils/util';
  import { get_user_recharge } from '@/api/amb';
  import * as echarts from 'echarts';

  const route = useRoute();
  const router = useRouter();
  const state = reactive({
    queryType: 'Earnings',
    queryTypeValue: [],
    typeShow: false,
    chartOptions: {},
    timeType: '3',
    searchType: '0',
  });
  const { getUserAssets, cloudBalance, cloudPst, cloudIncome, cloudWithdraw } = useUserAssets();

  const { searchType, timeType, chartOptions, queryType, typeShow, queryTypeValue } = toRefs(state);

  const getBarOptions = () => {
    const dateList = listData.value.map((el) => transferUTCTime(el.created_at));
    const valueList = listData.value.map((el) => el.quantity);
    chartOptions.value = barOption(dateList, valueList, searchType.value == '0' ? 'Recharge' : 'Withdraw');
    chartOptions.value.series[0].tooltip = {
      valueFormatter: function (value) {
        return value + ' DMC';
      },
    };
  };
  const { shortcuts, resetData, loadMore, listData, hasMore, infinityValue } = useTransactionRecords(getBarOptions);

  const handleID = (id) => {
    if (id) {
      return id.substring(0, 8) + '...' + id.substring(id.length - 8, id.length);
    }
  };
  const goToHash = (transaction_hash) => {
    // window.open(`https://explorer.dmctech.io/transaction/${transaction_hash}`);
    window.open(`http://154:64.7.46:8801/transaction/${transaction_hash}`);

  };
  // watch(
  //   listData,
  //   (val) => {
  //     getBarOptions();
  //   },
  //   { deep: true },
  // );
  // watch(
  //   timeType,
  //   (val) => {
  //     resetData();
  //     const [start, end] = shortcuts[val]();
  //     loadMore(start, end, searchType.value);
  //   },
  //   { deep: true },
  // );
  const searchTypeChange = () => {
    resetData();
    const [start, end] = shortcuts[timeType.value]();
    loadMore(start, end, searchType.value);
  };
  const timeTypeChange = () => {
    resetData();
    const [start, end] = shortcuts[timeType.value]();
    loadMore(start, end, searchType.value);
  };
  // watch(
  //   searchType,
  //   (val) => {
  //     resetData();
  //     const [start, end] = shortcuts[timeType.value]();
  //     loadMore(start, end, val);
  //   },
  //   { deep: true },
  // );
  onMounted(() => {
    switch (route.query.type) {
      case '1':
        searchType.value = '1';
      default:
        break;
    }
    const [start, end] = shortcuts[timeType.value]();
    getUserAssets();
    resetData();
    loadMore(start, end, searchType.value);
  });
</script>

<style lang="scss" scoped>
  .txt_id {
    // text-decoration: underline;
    color: #496af2;
    font-weight: bold;
  }
  .type_tabs {
    margin-bottom: 20px;
    :deep {
      .nut-tabs__titles-item__text {
        color: $main_blue;
      }
      .nut-tabs__titles {
        border-bottom: 1px solid #ccc;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
      }
      .nut-tab-pane {
        display: none;
      }
    }
  }
  .top_box {
    // margin: 20px;
    padding: 50px 10px 30px;
    border-radius: 20px;
    background: $primary-color;
  }
  .top_grid {
    border: none;
    .top_icon {
      width: 80px;
      height: 80px;
    }
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
    margin: 20px 0;
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
      .expense {
        display: inline-block;
        color: $main_red;
        font-size: 36px;
      }
      .time {
        color: #aaa;
        font-size: 24px;
        color: #635858;
      }
      &:last-child {
        border-bottom: none;
      }
    }
  }
</style>

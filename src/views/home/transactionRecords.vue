<template>
  <div class="analysis_content">
    <!-- <div class="top_box">
      <div class="top_back" @click="router.go(-1)">Earnings </div>
      <nut-grid class="top_grid">
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
      </nut-grid>
    </div> -->
    <nut-tabs class="type_tabs" v-model="searchType">
      <nut-tab-pane title="Recharge " pane-key="0"> </nut-tab-pane>
      <nut-tab-pane title="Withdraw" pane-key="1"> </nut-tab-pane>
    </nut-tabs>
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
    <nut-infinite-loading
      class="list_box"
      load-more-txt="No more content"
      v-model="infinityValue"
      :has-more="hasMore"
      @load-more="loadMore"
    >
      <div
        class="list_item"
        v-for="(item, index) in listData"
        @click="$router.push({ name: 'listDetails', query: { id: item.order_id, uuid: item.uuid } })"
      >
        <div :class="['item_img_box', (index + 1) % 3 == 2 ? 'item_2' : '', (index + 1) % 3 == 0 ? 'item_3' : '']">
          <img v-if="(index + 1) % 3 == 1" src="@/assets/list_item_1.svg" alt="" />
          <img class="cions" v-else-if="(index + 1) % 3 == 2" src="@/assets/list_item_2.svg" alt="" />
          <img v-else-if="(index + 1) % 3 == 0" src="@/assets/list_item_3.svg" alt="" />
        </div>

        <div>
          <span>Memo:{{ item.memo }}</span>

          <span :class="['earnings']">
            {{ item.quantity }}
            ></span
          >
        </div>
        <div
          ><span>{{ item.state }} </span> <span class="time">{{ transferUTCTime(item.created_at) }}</span>
        </div>
      </div>
    </nut-infinite-loading>
  </div>
</template>

<script setup lang="ts" name="analysis">
  import IconArrowRight from '~icons/home/arrow-right.svg';

  import IconCions from '~icons/home/cions.svg';
  import IconIncome from '~icons/home/earn-income.svg';
  import IconWithdraw from '~icons/home/earn-withdraw.svg';
  import IconOutCome from '~icons/home/out-come.svg';
  import { reactive, toRefs, onMounted, watch } from 'vue';
  import { lineOption } from '@/components/echarts/util';
  import { useRoute, useRouter } from 'vue-router';
  import useTransactionRecords from './useTransactionRecords.ts';
  import useUserAssets from './useUserAssets.ts';
  import { transferUTCTime } from '@/utils/util';
  import { get_user_recharge } from '@/api/amb';

  const route = useRoute();
  const router = useRouter();
  const state = reactive({
    queryType: 'Earnings',
    queryTypeValue: [],
    typeShow: false,
    chartOptions: {},
    timeType: '0',
    searchType: '0',
  });
  const { getUserAssets, cloudBalance, cloudPst, cloudIncome, cloudWithdraw } = useUserAssets();

  const { shortcuts, resetData, loadMore, listData, hasMore, infinityValue } = useTransactionRecords();

  const { searchType, timeType, chartOptions, queryType, typeShow, queryTypeValue } = toRefs(state);

  const getLineOptions = () => {
    const dateList = listData.value.map((el) => transferUTCTime(el.created_at));
    const valueList = listData.value.map((el) => el.quantity);
    chartOptions.value = lineOption(dateList, valueList, searchType.value == '0' ? 'Recharge' : 'Withdraw');
  };
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
      resetData();
      const [start, end] = shortcuts[val]();
      loadMore(start, end);
    },
    { deep: true },
  );
  onMounted(() => {
    getUserAssets();
    loadMore();
    getLineOptions();
  });
</script>

<style lang="scss" scoped>
  .type_tabs {
    :deep {
      .nut-tabs__titles-item__text {
        color: $main_blue;
      }
      .nut-tab-pane {
        display: none;
      }
    }
  }
  .top_box {
    margin: 20px;
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
    margin-bottom: 10px;
  }
  .list_box {
    padding: 0 10px;
    box-sizing: border-box;
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
        color: $main_green;

        font-size: 36px;
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

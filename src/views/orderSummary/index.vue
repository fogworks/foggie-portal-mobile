<template>
  <div class="analysis_content">
    <div class="top_box" :class="[ordertype === 'history' ? 'historyOrder' : '']">
      <div class="top_back" @click="router.go(-1)">{{ domain }} Summary </div>
      <span style="text-align: center; width: 100%; display: inline-block" class="my_state">
        <!-- 待共識 -->
        <nut-tag v-if="orderStatus == 0" class="nut-icon-am-bounce nut-icon-am-infinite" style="padding: 5px 10px"
          type="warning">Consensus not reached</nut-tag>
        <!-- 进行中 -->
        <nut-tag type="success" v-else-if="orderStatus == 1">Consensus reached </nut-tag>
        <!-- 已结束 -->
        <nut-tag color="#c9f7f5" textColor="#1bc5bd" v-else-if="orderStatus == 4">Expired</nut-tag>
        <!-- 已取消 -->
        <nut-tag type="danger" v-else-if="orderStatus == 5">Canceled</nut-tag>
        <!-- 下週期將取消 -->
        <nut-tag color="#eee5ff" textColor="#8950fc" v-else-if="orderStatus == 6">Cancellation of the next cycle</nut-tag>
        <!-- 預存⾦不足 -->
        <nut-tag color="#ffe2e5" textColor="#f64e60" v-else-if="orderStatus == 2">Insufficient advance deposit to cancel
          the next cycle</nut-tag>
        <!-- 預存⾦充足 -->
        <nut-tag color="#D7F9EF" textColor="#0bb783" v-else-if="orderStatus == 3">Sufficient funds in advance</nut-tag>
      </span>

      <nut-grid class="my_summary_grid" :column-num="3">
        <nut-grid-item text="Profit">
          <div>
            <IconCions class="top_icon"></IconCions>
            <p style="color: #5154f9; font-weight: bold">{{ cloudBalanceNum?.integerPart }}<span
                style="font-size: 10px">.{{ cloudBalanceNum?.decimalPart }}</span>
            </p>
          </div>
        </nut-grid-item>
        <nut-grid-item class="top_icon" text="Earnings">
          <div>
            <IconIncome class="top_icon"></IconIncome>
            <p style="color: green; font-weight: bold">+ {{ cloudProfitNum?.integerPart }}<span
                style="font-size: 10px">.{{ cloudProfitNum?.decimalPart }}</span>
            </p>
          </div>
        </nut-grid-item>
        <nut-grid-item class="top_icon" text="Expense">
          <div>
            <IconOutCome class="top_icon"></IconOutCome>
            <p style="color: red; font-weight: bold">- {{ orderPayoutNum?.integerPart }}<span style="font-size: 10px">.{{
              orderPayoutNum?.decimalPart }}</span>
            </p>
          </div>
        </nut-grid-item>
      </nut-grid>
    </div>
    <div class="sum_show_more" @click="gotoDetail">Show More ></div>
    <div class="summary_box" :class="[ordertype !== 'history' ? 'open_box' : 'history_box']">
      <div class="order_status_flag open" v-if="ordertype !== 'history'">Open Order</div>
      <div class="order_status_flag history" v-if="ordertype === 'history'">History Order</div>
      <div class="summary_list">
        <div class="summary_key">Order</div>
        <div class="summary_value">{{ order_id }}</div>
      </div>
      <div class="summary_list">
        <div class="summary_key">Order Source</div>
        <div class="summary_value">{{ myHistoryOrder?.electronic_type == '1' ? 'Desktop' : 'Mobile' }}</div>
      </div>
      <div class="summary_list">
        <div class="summary_key">Space</div>
        <div class="summary_value">{{ myHistoryOrder?.pst }} GB</div>
      </div>
      <div class="summary_list">
        <div class="summary_key">Time</div>
        <div class="summary_value">{{ myHistoryOrder?.week }} Weeks</div>
      </div>
      <div class="summary_list">
        <div class="summary_key">Price</div>
        <div class="summary_value">{{ myHistoryOrder?.total_price }} DMC</div>
      </div>
      <div class="summary_list">
        <div class="summary_key">Status</div>
        <div class="summary_value">{{ statusTypes[orderStatus] }}</div>
      </div>
      <!-- <div class="summary_list">
        <div class="summary_key">File Count</div>
        <div class="summary_value">{{ filesCount }}</div>
      </div>
      <div class="summary_list">
        <div class="summary_key">usedSize</div>
        <div class="summary_value">{{ usedSize }}</div>
      </div> -->
      <div class="summary_list">
        <div class="summary_key">Make Merkle</div>
        <div class="summary_value">{{ MarkListTotal }}
          <span class="show_more_detail" v-if="MarkListTotal > 0">
            <RectRight color="#fff"
              @click="router.push({ name: 'RecordsList', query: { ...route.query, category: 1 } })" />
          </span>
        </div>
      </div>
      <div class="summary_list">
        <div class="summary_key">Creation Time</div>
        <div class="summary_value">{{ orderCreated }}</div>
      </div>
      <div class="summary_list" v-if="MarkListTotal > 0">
        <div class="summary_key">First Make Merkle</div>
        <div class="summary_value">{{ transferUTCTime(MarkList[0].create_time) }}</div>
      </div>
      <div class="summary_list">
        <div class="summary_key">End Time</div>
        <div class="summary_value">{{ orderEnd }}</div>
      </div>
      <div class="summary_list">
        <div class="summary_key">Make Challenge</div>
        <div class="summary_value">{{ changeListTotal }}
          <span class="show_more_detail" v-if="changeListTotal > 0">
            <RectRight color="#fff"
              @click="router.push({ name: 'RecordsList', query: { ...route.query, category: 2 } })" />
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RectRight } from '@nutui/icons-vue';
import IconCions from '~icons/home/cions.svg';
import IconIncome from '~icons/home/earn-income.svg';
import { get_merkle_record, get_challenge } from '@/api/index';
import IconOutCome from '~icons/home/out-come.svg';
import { reactive, toRefs, onMounted, watch } from 'vue';
import { barOption } from '@/components/echarts/util';
import { useRoute, useRouter, onBeforeRouteLeave } from 'vue-router';
import useTransactionRecords from './useTransactionRecords.ts';
import useOrderAssets from './useOrderAssets.ts';
import { transferUTCTime, formatNumber } from '@/utils/util';

import { poolUrl } from '@/setting.js';

//   import * as Prox from '@/pb/prox_pb.js';
//   import * as grpcService from '@/pb/prox_grpc_web_pb.js';
//   import useOrderInfo from '../list/details/useOrderInfo.js';
const order_id = ref<any>('');
const ordertype = ref('');
const route = useRoute();
const router = useRouter();
const orderStatus = ref('');
const orderCreated = ref('');
const orderEnd = ref('');
const MarkListTotal = ref(0);
const changeListTotal = ref(0);
const MarkList = ref([]);
const domain = ref('');
const filesCount = ref(0);
const usedSize = ref(0);
order_id.value = route.query.id;
ordertype.value = route.query.type;
orderStatus.value = route.query.status;
orderCreated.value = route.query.createdTime;
orderEnd.value = route.query.endTime;
domain.value = route.query.domain;
//   const state = reactive({
//     queryType: 'Earnings',
//     queryTypeValue: [],
//     typeShow: false,
//     chartOptions: {},
//     timeType: '0',
//     searchType: '2',
//     activeNames: '',
//   });

const myHistoryOrder = computed(() => JSON.parse(window.sessionStorage.getItem('myHistoryOrder')) || {})




const statusTypes = {
  0: 'Consensus not reached',
  1: 'Consensus reached',
  2: 'Insufficient advance deposit to cancel the next cycle',
  3: 'Sufficient funds in advance',
  4: 'Order over',
  5: 'Canceled',
  6: 'Cancellation of the next cycle',
};
const { getUserAssets, cloudBalance, cloudProfit, orderPayout } = useOrderAssets();
//   const { accessKeyId, secretAccessKey, bucketName, header, metadata, deviceType, orderInfo, getOrderInfo } = useOrderInfo();
//   provide('getOrderInfo', getOrderInfo);
const cloudBalanceNum = computed(() => formatNumber(cloudBalance.value));
const cloudProfitNum = computed(() => formatNumber(cloudProfit.value));
const orderPayoutNum = computed(() => formatNumber(orderPayout.value));

const { shortcuts, resetData, loadMore, listData, hasMore, infinityValue } = useTransactionRecords();
//   const { searchType, timeType, chartOptions, queryType, typeShow, queryTypeValue, activeNames } = toRefs(state);

const gotoDetail = () => {
  router.push({
    name: 'orderSumDetail',
    query: {
      id: order_id.value,
      type: ordertype.value,
      domain: domain.value,
    },
  });
};
const isOpen = (state) => {
  if (state === 4 || state === 5) {
    return false;
  } else {
    return true;
  }
};
onMounted(async () => {
  // await getOrderInfo();
  // getSummary();
  order_id.value = route.query.id;
  const postData = { order_id: order_id.value };
  getUserAssets(postData);
  initMarkList();
  // loadMore();
});
const initMarkList = () => {
  MarkList.value = [];
  get_merkle_record({ orderId: order_id.value }).then((res) => {
    MarkListTotal.value = res.data.length;
    MarkList.value = res.data;
  });
  get_challenge({ order_id: order_id.value }).then((res) => {
    changeListTotal.value = res.result.data.length;
  });
};
const getSummary = () => {
  return new Promise((resolve, reject) => {
    let server = new grpcService.default.ServiceClient(`https://${domain.value}.${poolUrl}:7007`, null, null);
    let request = new Prox.default.ProxRequestSummaryIds();
    request.setHeader(header);
    request.setIdsList([orderInfo.value.foggie_id]);
    server.summaryInfo(request, metadata.value, (err: any, res: { array: any }) => {
      if (err) {
        console.log('errsummry------:', err);
        resolve(false);
      } else {
        const contentList = res.getContentsList().map((el) => {
          return {
            count: el.getCount(),
            id: el.getId(),
            total: el.getTotal(),
          };
        });
        console.log(contentList, 'contentListcontentListcontentListcontentList');
        filesCount.value = contentList?.[0]?.count || 0;
        usedSize.value = contentList?.[0]?.total || 0;
        //   resolve(usedSize.value);
      }
    });
  });
};

onBeforeRouteLeave((to, from) => {
  if (to.path == '/list') {
    to.query.searchType = 'History';
  }
});
</script>

<style lang="scss" scoped>
.show_more_detail {}

.sum_show_more {
  height: 50px;
  line-height: 50px;
  font-size: 30px;
  text-align: right;
  font-weight: bold;
  color: #5460fe;
  font-size: 4vw;
  margin: 20px 0;
  margin-right: 10px;
}

.summary_box {
  background-image: linear-gradient(120deg, #185ecf 0%, #0b88c1 100%);
  background-image: linear-gradient(120deg, #5758a0 0%, #9899d3 100%);
  height: 980px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .summary_list {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    height: 30px;

    color: #fff;
    border-radius: 10px;

    .summary_key {}

    .summary_value {
      font-weight: bold;
    }
  }
}

.history_box {
  background: #333;
}

.open_box {
  background-image: linear-gradient(120deg, #185ecf 0%, #0b88c1 100%);
  background-image: linear-gradient(120deg, #5758a0 0%, #9899d3 100%);
}

.order_status_flag {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  position: absolute;
  top: 30px;
  left: calc(50% - 60px);
  color: #fff;
  text-align: center;
  justify-content: center;
  font-weight: bold;
  display: flex;
  align-items: center;
  border: 5px dashed #ccc;
  transform: rotate(30deg);
  border-radius: 0 20px 20px 0;

  &.open {
    background: rgb(87 88 162);
    border: none;
    border-radius: 50%;
  }

  &.history {
    background: #999;
    border: 1px dashed #fff;
    border-radius: 50%;
  }
}

.time_box {
  color: #fff;
  text-align: center;
}

.summary_collapse {
  :deep {
    .nut-collapse__item-wrapper__content {
      padding: 0;
      background: transparent;
    }
  }
}

.my_state {
  .nut-tag {
    //   border-radius: 20px;
    //   padding: 4px 10px;
    //   background: #0c0d1a33;
    //   border: 1px solid #fff;
    //   margin: 4px 0;
    //   box-shadow:
    //     rgba(0, 0, 0, 0.25) 0px 54px 55px,
    //     rgba(0, 0, 0, 0.12) 0px -12px 30px,
    //     rgba(0, 0, 0, 0.12) 0px 4px 6px,
    //     rgba(0, 0, 0, 0.17) 0px 12px 13px,
    //     rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
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
  background-image: linear-gradient(260deg, #4062bb 0%, #5200ae 74%);
}

.historyOrder {
  background: #2b2929;
}

.my_summary_grid {
  border: none;
  flex-wrap: nowrap !important;

  .top_icon {
    width: 80px;
    height: 80px;
  }

  :deep {
    .nut-grid-item {
      // max-width: 25%;
    }

    .nut-grid-item__content {
      border-radius: 16px;
      margin: 5px;
      padding: 10px;
      height: unset;
      align-items: flex-start;
      font-size: 30px;
      font-size: 1rem;

      >div {
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
        font-size: 26px;
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

    >div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 5px 0;
    }

    .earnings {
      display: inline-block;
      color: #121212;
      color: $main_green;

      font-size: 30px;
    }

    .expense {
      display: inline-block;
      color: $main_red;
      font-size: 30px;
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

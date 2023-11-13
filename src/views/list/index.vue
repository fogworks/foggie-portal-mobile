<template>
  <div class="top_box" :class="[searchType == 'History' ? 'top_history' : 'top_open']">
    <!-- <div class="top_type">{{ searchType }} </div> -->
    <nut-input v-model="keyWord" clearable class="keyword-input-text" placeholder="Search by order number">
      <template #left> <Search></Search> </template>
    </nut-input>
    <!-- <p>You can search your order here.</p> -->
    <nut-row type="flex" justify="space-between" class="top_btn_box">
      <nut-col :span="10">
        <div class="flex-content">
          <div
            class="svg-box"
            @click="searchType = 'Open'"
            :class="[searchType == 'Open' ? 'active_svg-box active_svg-boxOpen' : 'svg-box-open']"
          >
            <!-- <Shop></Shop> -->
            <!-- bidian.png -->
            <img src="@/assets/dingdanhetong.png" style="background-color: transparent" alt="" srcset="" />
            <!-- <IconSwitch style="vertical-align: text-top" color="#5F57FF" v-if="searchType == 'Open'"></IconSwitch>
            <IconSwitch style="vertical-align: text-top" color="#ffffff" v-else></IconSwitch> -->
          </div>
          <span>Ongoing</span></div
        >
      </nut-col>
      <nut-col :span="10">
        <div class="flex-content">
          <div
            class="svg-box"
            @click="searchType = 'History'"
            :class="[searchType == 'History' ? 'active_svg-box active_svg-boxHistory' : 'svg-box-history']"
          >
            <img src="@/assets/bidian.png" style="background-color: transparent" alt="" srcset="" />
            <!-- <IconHistory style="vertical-align: text-top" color="#5F57FF" v-if="searchType == 'History'"></IconHistory>
            <IconHistoryActivate style="vertical-align: text-top" color="#5F57FF" v-else></IconHistoryActivate> -->
          </div>
          <span>History</span></div
        >
      </nut-col>
    </nut-row>
  </div>

  <div style="margin: 15px 0px">
    <nut-noticebar
      :background="`rgba(251, 248, 220, 1)`"
      :color="`#D9500B`"
      direction="vertical"
      :list="horseLamp"
      wrapable
      :speed="10"
      :standTime="1000"
      :close-mode="true"
    ></nut-noticebar>
  </div>
  <nut-infinite-loading
    v-if="list.length"
    class="list_box"
    load-more-txt="No more content"
    v-model="infinityValue"
    :has-more="hasMore"
    @load-more="loadMoreFun"
  >
    <template v-for="(item, index) in list">
      <div
        class="list_item"
        v-if="!(item?.income && item?.state == 0)"
        @click="gotoOrder(item)"
        :class="[searchType === 'History' ? 'history_item' : '']"
      >
        <!-- :style="{ background: randomColor() }" -->

        <div :class="['item_img_box', (index + 1) % 3 == 2 ? 'item_2' : '', (index + 1) % 3 == 0 ? 'item_3' : '']">
          <!-- <img v-if="(index + 1) % 3 == 1" src="@/assets/list_item_1.svg" alt="" />
        <img class="cions" v-else-if="(index + 1) % 3 == 2" src="@/assets/list_item_2.svg" alt="" />
        <img v-else-if="(index + 1) % 3 == 0" src="@/assets/list_item_3.svg" alt="" /> -->
          <!-- <img src="@/assets/list_item_2.svg" alt="" /> -->
          <img src="@/assets/DMC_Token1.png" alt="" />
        </div>
        <div>
          <span>
            <span>Order:{{ item.order_id }}</span>
            <span style="margin-left: 10px">
              <!-- 待共識 -->
              <nut-tag v-if="item.state == 0" type="warning">CNR</nut-tag>
              <!-- 进行中 -->
              <nut-tag type="success" v-else-if="item.state == 1">CR</nut-tag>
              <!-- 已结束 -->
              <nut-tag color="#c9f7f5" textColor="#1bc5bd" v-else-if="item.state == 4">Expired</nut-tag>
              <!-- 已取消 -->
              <nut-tag type="danger" v-else-if="item.state == 5">Canceled</nut-tag>
              <!-- 下週期將取消 -->
              <nut-tag color="#eee5ff" textColor="#8950fc" v-else-if="item.state == 6">Next: canceled</nut-tag>
              <!-- 預存⾦不足 -->
              <nut-tag color="#ffe2e5" textColor="#f64e60" v-else-if="item.state == 2">IADTCNC</nut-tag>
              <!-- 預存⾦充足 -->
              <nut-tag color="#D7F9EF" textColor="#0bb783" v-else-if="item.state == 3">SFIA</nut-tag>
            </span>
          </span>
          <span :class="['earnings']" v-if="item.income" style="font-weight: bold">
            +{{ item.income }}
            <!-- <IconArrowRight style="vertical-align: text-top" width="1.5rem" height="1.5rem" color="#5F57FF"></IconArrowRight> -->
          </span>
        </div>
        <div
          ><span>{{ item.pst || '--' }} GB</span> <span class="time">{{ transferGMTTime(item.order_created_at) }}</span>
        </div>
        <div style="color: red">
          <span>Payment:</span>
          <span class="time" style="color: red; font-weight: bold"> - {{ item.total_price }} DMC</span>
        </div>
      </div>
    </template>
  </nut-infinite-loading>
  <nut-empty v-else description=" " image="error">
    <div style="margin-top: 10px" v-if="!listData.length">
      <nut-button icon="refresh" type="primary" @click="router.push({ path: '/shop' })">Buy Order</nut-button>
    </div>
  </nut-empty>
</template>

<script lang="ts" setup name="ListPage">
  import IconArrowRight from '~icons/home/arrow-right.svg';
  import IconSwitch from '~icons/home/switch.svg';
  import IconHistory from '~icons/home/history.svg';
  import IconHistoryActivate from '~icons/home/historyActivate.svg';
  import { Search } from '@nutui/icons-vue';
  import { search_cloud } from '@/api';
  // import { listData } from './data';
  import useVariable from './details/useVariable.js';
  import { useOrderStore } from '@/store/modules/order';
  import useOrderList from '../home/useOrderList.ts';
  import { transferGMTTime } from '@/utils/util';
  import useUpdateDMC from '@/views/shop/useUpdateDMC.js';

  import { ref, onMounted } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  const { uuid } = useVariable();
  const loading = ref(false);
  const router = useRouter();
  const route = useRoute();
  const searchType = ref(route.query.searchType == 'History' ? 'History' : 'Open');
  console.log(route.query.searchType);

  const keyWord = ref('');
  const horseLamp = ref([
    'CNR - - Consensus not reached ',
    'CR - - Consensus reached ',
    'Next: canceled - - Cancellation of the next cycle',
    'IADTCNC - - Insufficient advance deposit to cancel the next cycle',
    'SFIA - - Sufficient funds in advance ',
  ]);
  const cloudSpaceList = ref([]);
  const orderStore = useOrderStore();
  const { bindAmbCode, cloudCodeIsBind } = useUpdateDMC();
  const { resetData, loadMore, listData, hasMore, infinityValue } = useOrderList();

  let list = computed(() => {
    return listData.value.filter((el) => {
      return el.order_id.indexOf(keyWord.value) > -1 || el.pst == keyWord.value;
    });
  });
  const activeNames = ref([]);
  const onChange = (modelValue: any, currName: any, status: any) => {
    // currName: 当前操作的 collapse-item 的 name
    // status: true 打开 false 关闭
    console.log(modelValue, currName, status);
  };

  const handleProgress = (item: { created_at: string | number | Date; expire: string | number | Date }) => {
    let created = new Date(item.created_at).getTime();
    let now = new Date().getTime() - created;
    let end = new Date(item.expire).getTime() - created;
    return +(now / end).toFixed(2) > 1 ? 100 : +((now / end) * 100).toFixed(2) > 0 ? +((now / end) * 100).toFixed(2) : 0;
  };

  const formatSize = (size: number) => {
    size = Number(size);
    if (size < 1024) {
      return size.toFixed(0) + ' bytes';
    } else if (size < 1024 * 1024) {
      return (size / 1024.0).toFixed(0) + ' KB';
    } else if (size < 1024 * 1024 * 1024) {
      return (size / 1024.0 / 1024.0).toFixed(1) + ' MB';
    } else {
      return (size / 1024.0 / 1024.0 / 1024.0).toFixed(1) + ' GB';
    }
  };
  const randomColor = () => {
    const createNumber = (min, max) => {
      let color = Math.floor(Math.random() * 255);
      if (color <= max && color >= min) {
        return color;
      } else {
        return createNumber(min, max);
      }
    };
    let r = createNumber(0, 60);
    let g = createNumber(40, 120);
    let b = createNumber(150, 255);
    return `rgb(${r} ${g} ${b})`;
  };
  const gotoOrder = (item) => {
    if (searchType.value === 'Open') {
      router.push({ name: 'listDetails', query: { id: item.order_id, uuid: item.uuid, amb_uuid: item.amb_uuid } });
    } else if (searchType.value === 'History') {
      if (item.order_id) {
        router.push({ name: 'orderSummary', query: { id: item.order_id, type: 'history', status: item.state } });
      }
    }
  };
  // onMounted(async () => {
  //   loadMore();
  // });
  const loadMoreFun = () => {
    if (searchType.value == 'Open') {
      loadMore([0, 1, 2, 3, 6]);
    } else {
      loadMore([4, 5]);
    }
  };
  watch(
    cloudCodeIsBind,
    (val) => {
      if (val) {
        if (searchType.value == 'Open') {
          loadMore([0, 1, 2, 3, 6]);
        } else {
          loadMore([4, 5]);
        }
      }
    },
    { deep: true, immediate: true },
  );
  watch(
    searchType,
    (val) => {
      resetData();
      if (cloudCodeIsBind.value) {
        console.log(val, '12222222222222222222');

        if (val == 'Open') {
          loadMore([0, 1, 2, 3, 6]);
        } else if (val == 'History') {
          loadMore([4, 5]);
        } else {
          loadMore();
        }
      }
    },
    { deep: true },
  );
</script>

<style lang="scss" scoped>
  .top_box {
    padding: 30px 10px;
    border-radius: 0px !important;
    background: $primary-color;
    margin-left: -4vw;
    margin-right: -4vw;
    margin-bottom: 10px;
    .keyword-input-text {
      border-radius: 36px;
      width: 98%;
      margin: 0 auto;
      color: #5264f9;
      :deep {
        .input-text {
          font-size: 40px;
        }
      }
    }
    .top_type {
      margin-bottom: 10px;
      margin-left: 60px;
      font-size: 45px;
      color: #fff;
    }
    p {
      width: 80%;
      margin: 15px auto;
      font-size: 24px;
      color: #fff;
    }
    .top_btn_box {
      border-radius: 10px;
      padding: 10px 30px 0;
      box-sizing: border-box;
      // background: #fff;
      :deep {
        .nut-row {
          margin: 0;
        }
        .nut-col {
          color: #fff;
          font-size: 28px;
          font-weight: 600;
        }
      }
      .flex-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        // height: 120px;
        text-align: center;
        word-break: break-word;
        span {
          font-size: 0.8rem;
        }
        .svg-box {
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 50px;
          width: 100px;
          height: 100px;
          margin-bottom: 15px;
          background: #171414;
          // box-shadow: 0px 1px 2px 2px #ccc;
          box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
          svg,
          img {
            color: #ffe879;
            width: 70px;
            height: 70px;
            color: #fff;
          }
        }
        .svg-box-history {
          background-color: #fff7;
          svg,
          img {
            width: 70px;
            height: 70px;
            color: #fff;
          }
        }
        .svg-box-open {
          background: #fff;
          svg,
          img {
            color: #ffe879;
            width: 70px;
            height: 70px;
          }
        }
        // .active_svg-box {
        //   background: #fbc934;
        //   background: #fbc935;
        //   background: #fff;
        //   svg {
        //     color: #fff;
        //     color: #fbc934;
        //   }
        //   & + span {
        //     color: #fbc934;
        //   }
        // }
        .active_svg-boxHistory {
          border: 5px solid orange;
          background-color: #aeaeae;

          svg,
          img {
            width: 70px;
            height: 70px;
            color: #fff;
          }
        }
        .active_svg-boxOpen {
          border: 5px solid orange;
          background: #fff;
          svg,
          img {
            color: #ffe879;
            width: 70px;
            height: 70px;
          }
        }
      }
    }
  }
  .top_history {
    background: #2b2929;
  }
  .nut-row {
    overflow: hidden;

    > .nut-col {
      padding: 10px;
      line-height: 1;
      text-align: center;
      // height: 120px;
      // background: $primary-color;
      // border: 1px solid blue;
      img {
        width: 40%;
        height: 40%;
        margin: 20%;
        border-radius: 20%;
        background: $primary-color;
      }

      .list-col-space {
        // margin-top: 5vw;
        height: 16px;
        font-size: 12px;
        line-height: 16px;
      }

      .nut-circle-progress {
        margin: 0 auto;
      }

      .col-span {
        display: block;
        height: 16px;
        margin-top: 10px;
        font-size: 12px;
        line-height: 16px;
      }

      .nut-button {
        margin-top: 8vw;
      }
    }
  }
  .list_box {
    height: calc(100vh - 600px);
    overflow: auto;
    // padding: 0 10px;
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
        font-size: 24px;
        color: #635858;
      }
      &:last-child {
        border-bottom: none;
      }
    }
    .history_item {
      background: #2b2929;
      color: #fff !important;
      .time,
      span {
        color: #fff !important;
      }
    }
  }
</style>

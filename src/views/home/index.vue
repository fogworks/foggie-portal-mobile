<template>
  <nut-noticebar v-if="!userInfo.dmc" class="my_noticebar">
    <template #left-icon>
      <Notice width="20px" left="20px"></Notice>
    </template>
    <span>You have not yet bound a DMC account </span>
    <router-link to="/bindDmc?type=dmc"> Go to Binding.</router-link>
  </nut-noticebar>
  <div class="dmc_account" v-else>
    <div class="img-box">
      <img src="@/assets/user.svg" alt="" />
    </div>
    Hello,
    {{ userInfo.dmc }}
  </div>
  <van-cell-group inset class="income-card">
    <template #default>
      <img src="@/assets/balance_right.svg" @click="router.push('/analysis')" alt="" />
      <div class="card_row_1 card_header card_row_top"
        ><span>Balance</span>
        <span>Income</span>
      </div>
      <div class="card_row_1 card_header">
        <div class="total_income">
          <div> {{ cloudBalance }} </div>
        </div>
        <div class="total_income">
          <div> {{ cloudIncome }} </div>
        </div>
      </div>
      <div class="card_row_1 pst-row">
        <div>
          <p>Space(GB)</p>
          <p class="column_value">{{ cloudPst }}</p>
        </div>
        <div>
          <p>Withdrawn</p>
          <p class="column_value">{{ cloudWithdraw }}</p>
        </div>
        <div>
          <p>New revenue today</p>
          <p class="column_value today_income"
            >+ {{ cloudTodayIncome }} DMC
            <TriangleUp color="#fbd116" width="20px"></TriangleUp>
          </p>
        </div>
      </div>
    </template>
  </van-cell-group>
  <van-space class="withdraw-btn" direction="horizontal" align="center">
    <div class="action_item" @click="toRecharge">
      <img src="@/assets/recharge.svg" alt="" />
      Recharge
    </div>
    <div class="action_item" @click="showWithdraw">
      <img src="@/assets/withdraw.svg" alt="" />
      Withdraw
    </div>
  </van-space>

  <div class="middle_btn_box">
    <div>
      <div class="flex-content" @click="toBuyOrder">
        <div class="svg-box">
          <!-- <Shop></Shop> -->
          <img src="@/assets/buy.svg" alt="" />
        </div>
        <span>Buy</span></div
      >
    </div>
    <div>
      <div class="flex-content" @click="router.push('/analysisCate?type=1')">
        <div class="svg-box">
          <img src="@/assets/earn.svg" alt="" />
        </div>
        <span>Earn</span></div
      >
    </div>
    <div>
      <div class="flex-content" @click="router.push('/analysis')">
        <div class="svg-box">
          <img src="@/assets/analysis.svg" alt="" />
        </div>
        <span>Analysis</span></div
      >
    </div>
    <div>
      <div class="flex-content" @click="router.push('/transactionRecords')">
        <div class="svg-box">
          <!-- <img src="@/assets/IconTransaction.svg" alt="" /> -->
          <IconTransaction></IconTransaction>
        </div>
        <span
          >Transaction <br />
          records</span
        ></div
      >
    </div>
  </div>
  <div class="tab_top_title" v-if="listData.length">Recent Earnings</div>
  <!-- <nut-tabs style="border-bottom: 1px solid #cccccc82" v-model="searchType" class="time_tabs">
    <nut-tab-pane title="All" pane-key="0"> </nut-tab-pane>
    <nut-tab-pane title="Income" pane-key="1"> </nut-tab-pane>
    <nut-tab-pane title="Expenditure" pane-key="2"> </nut-tab-pane>
  </nut-tabs>
  <nut-tabs v-model="timeType" class="time_tabs">
    <nut-tab-pane title="Last month" pane-key="0"> </nut-tab-pane>
    <nut-tab-pane title="Three months" pane-key="1"> </nut-tab-pane>
    <nut-tab-pane title="Six months" pane-key="2"> </nut-tab-pane>
  </nut-tabs> -->
  <nut-infinite-loading
    v-if="listData.length"
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
        <!-- <img v-if="(index + 1) % 3 == 1" src="@/assets/list_item_1.svg" alt="" />
        <img v-else-if="(index + 1) % 3 == 2" class="cions" src="@/assets/list_item_2.svg" alt="" />
        <img v-else-if="(index + 1) % 3 == 0" src="@/assets/list_item_3.svg" alt="" /> -->
        <img src="@/assets/list_item_2.svg" alt="" />
      </div>
      <div>
        <span>Order:{{ item.order_id }}</span>
        <span :class="['earnings']">
          +{{ item.income }}
          <!-- <IconArrowRight style="vertical-align: text-top" width="1.2rem" height="1.2rem" color="#5F57FF"></IconArrowRight
        > -->
        </span>
      </div>
      <div
        ><span>{{ item.pst || '--' }} PST</span> <span class="time">{{ transferUTCTime(item.order_created_at) }}</span>
      </div>
    </div>
  </nut-infinite-loading>
  <!-- <nut-empty v-else description="No data" image="error"></nut-empty> -->
  <div v-else class="my_swipe">
    <nut-swiper :init-page="1" :pagination-visible="true" pagination-color="#426543" auto-play="3000">
      <nut-swiper-item>
        <img src="@/assets/banner1.svg" alt="" />
      </nut-swiper-item>
      <nut-swiper-item>
        <img src="@/assets/banner2.svg" alt="" />
      </nut-swiper-item>
      <nut-swiper-item>
        <img src="@/assets/banner3.svg" alt="" />
      </nut-swiper-item>
      <nut-swiper-item>
        <img src="@/assets/banner4.svg" alt="" />
      </nut-swiper-item>
    </nut-swiper>
  </div>
  <div class="my_steps" v-if="!listData.length">
    <nut-steps direction="vertical" current="2">
      <nut-step title="Bind invitation code" content="Please confirm that you have filled out the invitation code before placing your order"
        >1</nut-step
      >
      <nut-step title="Purchase Order" content="We provide you with the most profitable order for your purchase" @click="toBuyOrder"
        >2</nut-step
      >
      <nut-step title="File storage" content="After successful purchase, you can enjoy file storage and order revenue">3</nut-step>
    </nut-steps>
  </div>
</template>

<script lang="ts" setup name="HomePage">
  import IconArrowRight from '~icons/home/arrow-right.svg';
  import IconTransaction from '~icons/home/transaction.svg';
  import { Notice, TriangleUp } from '@nutui/icons-vue';
  import { toRefs, reactive } from 'vue';
  import { useRouter } from 'vue-router';
  import { useUserStore } from '@/store/modules/user';
  import { useOrderStore } from '@/store/modules/order';
  import { showToast, showDialog } from '@nutui/nutui';
  import { search_cloud } from '@/api';
  import { get_user_dmc } from '@/api/amb';
  import useUserAssets from './useUserAssets.ts';
  import useOrderList from './useOrderList.ts';
  import { transferUTCTime } from '@/utils/util';

  import '@nutui/nutui/dist/packages/toast/style';

  const useStore = useUserStore();
  const orderStore = useOrderStore();
  const userInfo = computed(() => useStore.getUserInfo);
  const cloudCodeIsBind = computed(() => useStore.getCloudCodeIsBind);

  const router = useRouter();
  const state = reactive({
    timeType: '0',
    searchType: '0',
  });
  const { timeType, searchType } = toRefs(state);
  const { loadMore, listData, hasMore, infinityValue } = useOrderList();
  const { getUserAssets, cloudTodayIncome, cloudBalance, cloudPst, cloudIncome, cloudWithdraw } = useUserAssets();
  const showWithdraw = () => {
    if (!userInfo.value.dmc) {
      const dmcOk = () => {
        router.push({ name: 'BindDmc', query: { type: 'dmc' } });
      };
      let src = require('@/assets/DMC_token.png');
      let str = `<img class="bind_img" src=${src} style="height:60px;"/><p style='word-break:break-word;color:#4c5093;text-align:left;'>You have not bound a DMC account yet. Please bind the account first before proceeding with the operation.</p >`;
      showDialog({
        title: 'Bind DMC Account',
        content: str,
        onOk: dmcOk,
      });
      return false;
    }
    router.push({ name: 'Withdraw' });
  };
  const toBuyOrder = () => {
    if (!userInfo.value.amb_promo_code || !cloudCodeIsBind.value) {
      // showToast.text("Please bind the Ambassador Invitation Code first if you haven't already done so.");
      const dmcOk = () => {
        router.push({ name: 'BindDmc', query: { type: 'amb' } });
      };
      let src = require('@/assets/fog-works.png');
      let str = `<img class="bind_img" src=${src} style="height:60px;"/><p style='word-break:break-word;color:#4c5093;text-align:left;'>Please bind the Ambassador Invitation Code first if you haven't already done so.</p >`;
      showDialog({
        title: 'Ambassador Invitation Code',
        content: str,
        onOk: dmcOk,
      });
      return false;
    } else {
      router.push({ name: 'Shop' });
    }
  };
  const toRecharge = () => {
    if (!userInfo.value.amb_promo_code || !cloudCodeIsBind.value) {
      const dmcOk = () => {
        router.push({ name: 'BindDmc', query: { type: 'amb' } });
      };
      let src = require('@/assets/fog-works.png');
      let str = `<img class="bind_img" src=${src} style="width:60px;height:60px"/><p style='word-break:break-word;color:#4c5093;text-align:left;'>Please bind the Ambassador Invitation Code first if you haven't already done so.</p >`;
      showDialog({
        title: 'Binding Ambassador Invitation Code',
        content: str,
        onOk: dmcOk,
      });
      return false;
    } else {
      router.push({ name: 'Recharge' });
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
  onBeforeMount(() => {
    loadMore();
  });
  onMounted(() => {
    getUserAssets();
  });
</script>

<style lang="scss" scoped>
  .my_swipe {
    margin-top: 30px;

    .nut-swiper {
      height: 300px;
    }
    .nut-swiper-item {
      line-height: 150px;
      height: 300px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .my_steps {
    margin: 40px auto;
    width: calc(100% - 80px);
    background: #fff;
    height: 620px;
    border-radius: 20px;
    padding: 20px;
  }

  .my_noticebar {
    margin: 0 -4vw;
    display: inline-block;
    width: 120%;
    :deep {
      .nut-noticebar__page {
        padding: 0;
      }
      .nut-noticebar__page-lefticon {
        margin: 0 8px;
      }
    }
  }
  .dmc_account {
    // background: #5758a0;
    margin: 0 -4vw;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    // margin-top: 5px;
    font-size: 40px;
    color: #5758a0;
    height: 100px;
    // color: #fff;
    font-weight: bold;
    padding: 10px 0 0 10px;
    // box-shadow: $main-shadow;
    .img-box {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 58px;
      height: 58px;
      padding: 15px;
      margin-right: 10px;
      //   background: #5758a0;
      box-sizing: border-box;
      border-radius: 10px;
      border-radius: 50%;
      img {
        width: 45px;
        margin: 0 auto;
        vertical-align: middle;
      }
    }
    h2 {
      font-size: 35px;
    }
  }
  .middle_btn_box {
    // display: flex;
    // justify-content: flex-start;
    // align-items: flex-start;
    margin-top: -60px;
    border-radius: 10px;
    padding: 10px 0px;
    box-sizing: border-box;
    overflow-x: auto;
    white-space: nowrap;
    width: 100%;

    // background: #fff;
    > div {
      display: inline-block;
      color: #1e0a0a;
      font-size: 28px;
      font-weight: 600;
      width: 150px;
      width: 25%;
      &:nth-child(2) {
        .svg-box {
          background: #34964f;
        }
      }
      &:nth-child(3) {
        .svg-box {
          background: #fcd116;
        }
      }
      &:nth-child(4) {
        .svg-box {
          background: #5f57ff;
        }
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
        background: #ff8b00;
        // box-shadow: 0px 1px 2px 2px #ccc;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        svg,
        img {
          width: 55px;
          height: 55px;
          color: #fff;
        }
      }
    }
  }
  .income-card {
    position: relative;
    padding: 40px;
    height: 410px;
    box-sizing: border-box;
    margin: 0;
    // margin-top: 20px;
    margin-left: -4vw;
    margin-right: -4vw;
    //   box-shadow: 0px 0px 4px 1px #ccc;
    // background-color: var(--van-blue);
    background: $primary-color;
    color: #fff;
    border-radius: 0;

    img {
      position: absolute;
      right: 40px;
      width: 100px;
    }
    > div {
      min-height: 60px;
      line-height: 60px;
      text-align: center;
    }
    .card_row_1 {
      display: flex;
      justify-content: space-between;
      &.card_header {
        display: grid;
        grid-template-columns: 1fr 1fr;
        justify-content: space-between;
        margin-right: 100px;
        span {
          text-align: left;
        }
        .total_income {
          > div {
            font-size: 30px;
            text-align: left;
          }
        }
      }
    }
    .card_row_top {
      font-weight: bold;
      font-size: 32px;
    }
    .pst-row {
      margin-top: 40px;
      font-size: 28px;
      text-align: left;
      font-weight: bold;
      .column_value {
        font-size: 28px;
      }
      .today_income {
        color: #ff8b00;
        color: #fbd116;
        svg {
          vertical-align: sub;
        }
      }
    }
    .total_income {
      font-size: 55px;
      font-weight: 700;
      .about_income {
        font-size: 35px;
      }
    }

    :deep {
      .van-grid-item {
        &:nth-child(2) {
          // border: 1px solid #fff;
          // border-width: 0 1px 0 1px;
          &::before,
          &::after {
            content: '';
            position: absolute;
            left: 0;
            top: 60px;
            display: block;
            width: 1px;
            height: 60px;
            background-color: #ffffff5c;
          }
          &::after {
            left: unset;
            right: 0;
          }
        }
      }
      .van-grid-item__content {
        background: transparent;
        div:first-child {
          font-size: 40px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        div:nth-child(2) {
          font-size: 30px;
        }
      }
      .van-button {
        height: 60px;
      }
    }
  }
  .withdraw-btn {
    display: flex;
    justify-content: space-around;
    transform: translateY(-80px);
    width: 90%;
    margin: 0 auto;
    padding: 20px 0;
    border-radius: 16px;
    border: 1px dashed #ffffff;
    background: #fff;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
    .action_item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: #333333;
      font-size: 24px;
      img {
        display: block;
        width: 100px;
        margin-bottom: 10px;
      }
    }
  }
  .tab_top_title {
    margin-top: 20px;
    margin-bottom: 20px;
    // font-style: italic;
    font-size: 35px;
    font-weight: 600;
  }
  .time_tabs {
    :deep {
      .nut-tabs__titles {
        // background: transparent;
      }
      .nut-tabs__content {
        display: none;
      }
    }
  }
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
</style>

<template>
  <!-- <nut-noticebar v-if="!userInfo.dmc" class="my_noticebar">
    <template #left-icon>
      <Notice width="20px" left="20px"></Notice>
    </template>
    <span>You have not yet bound a DMC account </span>
    <router-link to="/bindDmc?type=dmc"> Go to Binding.</router-link>
  </nut-noticebar>
  <div class="dmc_account" v-else> -->
  <div class="dmc_account">
    <div class="img-box">
      <img src="@/assets/user.svg" alt="" />
    </div>
    Hello,
    {{ userInfo.email && userInfo.email.split('@')[0] }}
  </div>
  <div inset class="income-card">
    <img src="@/assets/balance_right.svg" @click="gotoPage('analysis')" alt="" />
    <!-- <div class="card_row_1 card_header card_row_top" @click="gotoPage('analysis')"><span>Balance</span> </div> -->
    <div class="card_row_1 card_header" @click="gotoPage('analysis')">
      <div class="total_income" @click="gotoPage('analysis')">
        <div class="balance_text"> {{ cloudBalance }} <img src="@/assets/DMC(1).png" alt="" /> </div>
        <div class="usd_text" v-if="dmc2usdRate && cloudBalance && cloudBalance != '--'">
          ≈ {{ (dmc2usdRate * cloudBalance).toFixed(4) + ' USD' }}
        </div>
      </div>
    </div>
    <div class="card_row_1 pst-row">
      <div>
        <p>Space(GB)</p>
        <p class="column_value">{{ cloudPst }}</p>
      </div>
      <div @click="gotoPage('transactionRecords', '1')">
        <p>Withdrawn</p>
        <p class="column_value">{{ cloudWithdraw }}</p>
      </div>
      <div @click="gotoPage('analysis')">
        <p>New revenue today</p>
        <p class="column_value today_income"
          >+ {{ cloudTodayIncome }} DMC
          <TriangleUp color="#fbd116" width="20px"></TriangleUp>
        </p>
      </div>
    </div>
  </div>
  <div class="withdraw-btn" direction="horizontal" align="center">
    <div class="action_item" @click="toRecharge">
      <img src="@/assets/recharge.svg" alt="" />
      Recharge
    </div>
    <div class="action_item" @click="showWithdraw">
      <img src="@/assets/withdraw.svg" alt="" />
      Withdraw
    </div>
  </div>
  <div class="middle_btn_box">
    <div>
      <div class="flex-content" @click="toBuyOrder">
        <div class="svg-box">
          <!-- <Shop></Shop> -->
          <img src="@/assets/buy.svg" alt="" />
        </div>
        <span>Buy</span>
      </div>
    </div>
    <div>
      <!-- <div class="flex-content" @click="router.push('/analysisCate?type=1')"> -->
      <div class="flex-content" @click="gotoPage('Order')">
        <div class="svg-box">
          <img src="@/assets/orders.svg" alt="" />
        </div>
        <span>Orders</span>
      </div>
    </div>
    <div>
      <!-- <div class="flex-content" @click="router.push('/analysis')"> -->
      <div class="flex-content" @click="gotoPage('analysisChart')">
        <div class="svg-box">
          <img src="@/assets/analysis.svg" alt="" />
        </div>
        <span>Charts</span>
      </div>
    </div>
    <div>
      <div class="flex-content" @click="gotoPage('transactionRecords')">
        <!-- <div class="flex-content" @click="router.push('/transactionRecords')"> -->
        <div class="svg-box">
          <!-- <img src="@/assets/IconTransaction.svg" alt="" /> -->
          <IconTransaction></IconTransaction>
        </div>
        <span>Transaction <br /> </span>
        <!-- records -->
      </div>
    </div>
  </div>

  <div class="DouArrowDown" v-if="!targetIsVisible && earningsList.length == 0" @click="scrollIntoViewTo">
    <DouArrowUp width="100" height="50" class="nut-icon-am-jump nut-icon-am-infinite" />
  </div>
  <!-- <nut-empty v-else description="No data" image="error"></nut-empty> -->
  <div v-if="!earningsList.length" class="my_swipe">
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

  <div class="tab_top_title" v-if="earningsList.length">Revenue And Expenditure</div>
  <div class="my_steps" ref="my_steps" id="my_steps" v-if="!earningsList.length">
    <nut-steps direction="vertical" :current="curStepIndex">
      <nut-step
        title="Bind invitation code"
        @click="gotoBindAmb"
        content="Please confirm that you have filled out the invitation code before placing your order"
        >1</nut-step
      >
      <nut-step
        title="Waiting for approval"
        :content="ambRefuse ? 'Your application has been rejected by the Ambassador please reapply' : 'Your application has been approved.'"
        >2</nut-step
      >
      <!-- <nut-step title="Binding DMC" content="Please bind the DMC before making a purchase order." @click="gotoBindDMC">3</nut-step> -->
      <nut-step title="Purchase Order" content="We provide you with the most profitable order for your purchase" @click="toBuyOrder"
        >3</nut-step
      >
      <nut-step
        @click="gotoOrderList"
        title="Ops, you haven't made a profit yet"
        content="Please upload the file in the order. Once you upload the file to 50M, we will calculate the revenue for you."
        >4</nut-step
      >
    </nut-steps>
  </div>

  <nut-infinite-loading v-if="earningsList.length" load-more-txt="No more content" :has-more="false">
    <div
      class="list_item"
      v-for="(item, index) in earningsList"
      @click="
        $router.push({
          name: 'listDetails',
          query: {
            id: item.order_id,
            uuid: item.order_info && item.order_info.uuid,
            amb_uuid: item.amb_uuid,
          },
        })
      "
    >
      <div :class="['item_img_box', (index + 1) % 3 == 2 ? 'item_2' : '', (index + 1) % 3 == 0 ? 'item_3' : '']">
        <img src="@/assets/list_item_2.svg" alt="" />
      </div>
      <div>
        <span>Order:{{ item.order_id }}</span>
        <span :class="[item.inner_user_trade_type == 'payout' ? 'expense' : 'earnings']">
          {{ item.inner_user_trade_type == 'payout' ? '-' : '+' }}{{ item.quantity }} DMC
        </span>
      </div>
      <div>
        <span>Type:{{ mapTypes[item.trade_type] }}</span>
        <!-- <span>{{ item.trade_type == 'user_delivery_income' ? '' : item.state }} </span> -->
        <span class="time">{{ transferUTCTime(item.created_at) }}</span>
      </div>
    </div>
  </nut-infinite-loading>
</template>

<script lang="ts" setup name="HomePage">
  import IconArrowRight from '~icons/home/arrow-right.svg';
  import IconTransaction from '~icons/home/transaction.svg';
  import { Notice, TriangleUp, DouArrowUp } from '@nutui/icons-vue';
  import { toRefs, reactive, onActivated } from 'vue';
  import { useRouter } from 'vue-router';
  import { useUserStore } from '@/store/modules/user';
  import { useOrderStore } from '@/store/modules/order';
  import { showToast, showDialog } from '@nutui/nutui';
  //   import { search_cloud } from '@/api';
  import { get_user_dmc } from '@/api/amb';
  import useUserAssets from './useUserAssets.ts';
  import useOrderList from './useOrderList.ts';
  import { transferUTCTime } from '@/utils/util';
  import useUpdateDMC from '@/views/shop/useUpdateDMC.js';
  import '@nutui/nutui/dist/packages/toast/style';
  import { useIntersectionObserver } from '@vueuse/core';

  const useStore = useUserStore();
  const orderStore = useOrderStore();
  const userInfo = computed(() => useStore.getUserInfo);
  const cloudCodeIsBind = computed(() => useStore.getCloudCodeIsBind);

  const router = useRouter();
  const state = reactive({
    timeType: '0',
    searchType: '0',
  });
  const mapTypes = {
    user_delivery_income: 'UserDeliveryIncome',
    buy_order: 'BuyOrder',
    challenge: 'Order Challenge',
    arbitration: 'Order Arbitration',
    OrderReceiptAddReserve: 'Increase order deposit', // 增加订单预存金
    OrderReceiptSubReserve: 'Reduce order deposit', // 减少订单预存金
    OrderReceiptDeposit: 'Order deposit', // 押金
    OrderReceiptClaim: 'Order deliver', // 交付
    OrderReceiptReward: 'Order incentive', // 激励
    OrderReceiptRenew: 'Order Update', // 订单更新
    OrderReceiptChallengeReq: 'Initiate a Challenge', // 发起挑战
    OrderReceiptChallengeAns: 'Responding to challenges', // 响应挑战
    OrderReceiptChallengeArb: 'arbitrate', // 仲裁
    OrderReceiptPayChallengeRet: 'Overtime compensation return', // 超时赔付返还
    OrderReceiptLockRet: 'Order lock return', // 订单锁定返还
    OrderReceiptEnd: 12,
  };
  const earningsList = ref([] as any);
  import { search_order_profit, search_user_asset_detail } from '@/api/amb';
  import loadingImg from '@/components/loadingImg/index.vue';
  const { timeType, searchType } = toRefs(state);
  const { getUserAssets, getExchangeRate, dmc2usdRate, cloudTodayIncome, cloudBalance, cloudPst, cloudIncome, cloudWithdraw } =
    useUserAssets();
  const { bindAmbCode, curStepIndex, ambRefuse, getOrder } = useUpdateDMC();
  watch(
    curStepIndex,
    (val) => {
      console.log(val, 'homeval');
      if (val === 4) {
        searchOrderProfit();
      }
    },
    { deep: true, immediate: true },
  );
  const { shortcuts } = useOrderList();
  const searchOrderProfit = () => {
    const [start, end] = shortcuts[1]();
    const postData = !start && !end ? {} : { start_time: start, end_time: end };
    // search_order_profit(postData)
    //   .then((res) => {
    //     console.log(res, 'search_order_profit');
    //     if (res && res.result && res.result.length) {
    //       earningsList.value = res.result;
    //     }
    //   })
    //   .finally(() => {});

    search_user_asset_detail(postData)
      .then((res) => {
        if (res && res.result && res.result.data.length) {
          earningsList.value = res.result.data;
        }
      })
      .finally(() => {});
  };

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
  const gotoPage = (type, query = '') => {
    if (!userInfo.value.amb_promo_code) {
      const dmcOk = () => {
        router.push({ name: 'BindDmc', query: { type: 'amb' } });
      };
      let src = require('@/assets/fog-works.png');
      let str = `<img class="bind_img" src=${src} style="height:60px;"/><p style='word-break:break-word;color:#4c5093;text-align:left;'>Please bind the Ambassador Invitation Code first if you haven't already done so.</p >`;
      showDialog({
        title: 'Bind Invitation Code',
        content: str,
        onOk: dmcOk,
      });
      return false;
    } else if (!cloudCodeIsBind.value) {
      bindAmbCode();
    } else {
      if (type === 'analysisCate') {
        router.push('/analysisCate?type=1');
      } else if (type === 'analysis') {
        router.push('/analysis');
      } else if (type === 'transactionRecords') {
        router.push(`/transactionRecords${query ? `?type=${query}` : ''}`);
      } else if (type === 'shop') {
        router.push({ name: 'Shop' });
      } else if (type === 'analysisChart') {
        router.push('/analysisChart');
      } else if (type === 'Order') {
        router.push('/list');
      }
    }
  };
  const toBuyOrder = () => {
    // if (curStepIndex.value != 4) return;
    gotoPage('shop');
  };
  const toRecharge = () => {
    if (!userInfo.value.amb_promo_code) {
      const dmcOk = () => {
        router.push({ name: 'BindDmc', query: { type: 'amb' } });
      };
      let src = require('@/assets/fog-works.png');
      let str = `<img class="bind_img" src=${src} style="height:60px"/><p style='word-break:break-word;color:#4c5093;text-align:left;'>Please bind the Ambassador Invitation Code first if you haven't already done so.</p >`;
      showDialog({
        title: 'Ambassador Invitation Code',
        content: str,
        onOk: dmcOk,
      });
      return false;
    } else if (!cloudCodeIsBind.value) {
      bindAmbCode();
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

  function gotoBindDMC() {
    if (curStepIndex.value != 3) return;
    router.push({
      path: '/bindDmc',
      query: {
        type: 'dmc',
      },
    });
  }
  function gotoBindAmb() {
    if (curStepIndex.value !== 1) {
      showToast.text('You have already bound an invitation code');
      return;
    }
    router.push({ name: 'BindDmc', query: { type: 'amb' } });
  }

  function gotoOrderList() {
    if (curStepIndex.value !== 4) {
      showToast.text('You do not have any available order records yet');
      return;
    }
    router.push('/list');
  }

  onBeforeMount(() => {
    if (cloudCodeIsBind.value) {
      //   searchOrderProfit();
      getOrder();
    }
  });

  watch(
    cloudCodeIsBind,
    (newVal) => {
      if (newVal) {
        ambRefuse.value = false;
        getOrder();
        getUserAssets();
        getExchangeRate();

        // if (userInfo.value.dmc) {
        //   curStepIndex.value = 4;
        //   ambRefuse.value = false;
        // } else {
        //   curStepIndex.value = 3;
        //   ambRefuse.value = false;
        // }
      } else {
        bindAmbCode();
      }
    },
    { deep: true, immediate: true },
  );

  // onActivated(() => {
  //   if (userInfo.value.dmc) {
  //     curStepIndex.value = 4;
  //     ambRefuse.value = false;
  //   }
  // });

  const targetIsVisible = ref(false);
  const my_steps = ref(null);
  function loadMySwipeDom() {
    const { stop } = useIntersectionObserver(my_steps, ([{ isIntersecting }]) => {
      targetIsVisible.value = isIntersecting;
    });
  }

  function scrollIntoViewTo() {
    let my_steps = document.getElementById('my_steps');
    console.log(my_steps);

    if (my_steps) {
      my_steps?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  onMounted(async () => {
    bindAmbCode();

    loadMySwipeDom();
    if (cloudCodeIsBind.value) {
      getUserAssets();
      getExchangeRate();
    }
  });
</script>

<style lang="scss" scoped>
  ::v-deep {
    .nut-step-main {
      padding-bottom: 30px !important;
    }
  }

  .DouArrowDown {
    // transform: rotate(180deg);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

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
    height: 820px;
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

    > img {
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
        grid-template-columns: 1fr;
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
          .balance_text {
            font-size: 45px;
            img {
              height: 55px;
              vertical-align: sub;
            }
          }
          .usd_text {
            color: #ccc;
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
      color: $main_green;

      font-size: 30px;
    }
    .expense {
      display: inline-block;
      color: red;
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
</style>

<template>
  <div>
    <div class="dmc_account">
      <div class="img-box">
        <img src="@/assets/user.png" alt="" />
      </div>
      Hello,
      {{ userInfo.email && userInfo.email.split('@')[0] }}
    </div>
    <div inset class="income-card">
      <img src="@/assets/balance_right.svg" />
      <div class="card_row_1 card_header">
        <div class="total_income">
          <div class="balance_text">
            <span>{{ cloudBalanceNum?.integerPart }}</span>
            <span style="font-size: 13px">.{{ cloudBalanceNum?.decimalPart }}</span>
            <img src="@/assets/DMC(1).png" alt="" style="margin-left: 5px" />
          </div>
          <div class="usd_text" v-if="dmc2usdRate && cloudBalance && cloudBalance != '--'">
            ≈ {{ formatNumber(dmc2usdRate * cloudBalance)?.integerPart
            }}<span style="font-size: 13px">.{{ formatNumber(dmc2usdRate * cloudBalance)?.decimalPart }}</span> USD
          </div>
        </div>
      </div>
      <div class="card_row_1 pst-row">
        <div>
          <p>Space</p>
          <p class="column_value">{{ getfilesize2(cloudPst == '--' ? 0 : cloudPst) }}</p>
        </div>
        <div @click="gotoPage('transactionRecords', '1')">
          <p>Withdrawn</p>
          <p class="column_value">{{ cloudWithdraw >= 0 ? cloudWithdraw.toFixed(4) : cloudWithdraw }}</p>
        </div>
        <div @click="gotoPage('analysis')">
          <p>Today's new funds</p>
          <p class="column_value today_income"
            >+ {{ cloudTodayIncomeNum?.integerPart }}<span style="font-size: 13px">.{{ cloudTodayIncomeNum?.decimalPart }}</span> DMC
            <TriangleUp color="#fbd116" width="20px"></TriangleUp>
          </p>
        </div>
      </div>
    </div>
    <div class="withdraw-btn" direction="horizontal" align="center">
      <div class="action_item" @click="toRecharge">
        <!-- <img src="@/assets/recharge.svg" alt="" /> -->
        <img src="@/assets/Recharge.png" alt="" />

        Recharge
      </div>
      <div class="action_item" @click="showWithdraw">
        <!-- <img src="@/assets/withdraw.svg" alt="" /> -->
        <img src="@/assets/Withdraw.png" alt="" />

        Withdraw
      </div>
    </div>
    <div class="middle_btn_box">
      <div>
        <div class="flex-content" @click="toBuyOrder">
          <div class="svg-box">
            <!-- <Shop></Shop> -->
            <img src="@/assets/newIcon/buyOrder.png" alt="" />
          </div>
          <span>Buy</span>
        </div>
      </div>
      <div>
        <!-- <div class="flex-content" @click="router.push('/analysisCate?type=1')"> -->
        <div class="flex-content" @click="gotoPage('Order')">
          <div class="svg-box">
            <img src="@/assets/newIcon/orders.png" alt="" />
          </div>
          <span>Orders</span>
        </div>
      </div>
      <div>
        <!-- <div class="flex-content" @click="router.push('/analysis')"> -->
        <div class="flex-content" @click="gotoPage('analysisChart')">
          <div class="svg-box">
            <img src="@/assets/newIcon/analysis.png" alt="" />
          </div>
          <span>Charts</span>
        </div>
      </div>
      <div>
        <div class="flex-content" @click="gotoPage('transactionRecords')">
          <!-- <div class="flex-content" @click="router.push('/transactionRecords')"> -->
          <div class="svg-box">
            <img src="@/assets/newIcon/transaction.png" alt="" />
            <!-- <img src="@/assets/IconTransaction.svg" alt="" />
            <IconTransaction></IconTransaction> -->
          </div>
          <span>Transaction <br /> </span>
          <!-- records -->
        </div>
      </div>
    </div>

    <div class="DouArrowDown" v-if="!targetIsVisible && !ishaveProfit" @click="scrollIntoViewTo">
      <DouArrowUp width="100" height="50" class="nut-icon-am-jump nut-icon-am-infinite" />
    </div>
    <!-- <nut-empty v-else description="No data" image="error"></nut-empty> -->
    <div class="tab_top_title" v-if="ishaveProfit">Last 7 days <span style="font-size: 12px">(DMC)</span></div>

    <ErrorPage v-if="isError && !earningsList.length" @refresh="loadMore"></ErrorPage>
    <template v-else-if="!ishaveProfit">
      <div class="my_swipe">
        <nut-swiper :init-page="1" :pagination-visible="true" pagination-color="#426543" auto-play="3000">
          <nut-swiper-item>
            <img src="@/assets/banner1.svg" alt="" />
          </nut-swiper-item>
          <nut-swiper-item>
            <img src="@/assets/banner2.svg" alt="" />
          </nut-swiper-item>
          <nut-swiper-item>
            <img src="@/assets/banner3.png" alt="" />
          </nut-swiper-item>
          <nut-swiper-item>
            <img src="@/assets/banner4.svg" alt="" />
          </nut-swiper-item>
        </nut-swiper>
      </div>

      <div class="my_steps" ref="my_steps" id="my_steps">
        <nut-steps direction="vertical" :current="curStepIndex">
          <nut-step
            title="Bind invitation code"
            @click="gotoBindAmb"
            content="Please confirm that you have filled out the invitation code before placing your order"
            >1</nut-step
          >
          <nut-step
            title="Waiting for approval"
            :content="
              ambRefuse ? 'Your application has been rejected by the Ambassador please reapply' : 'Your application has been approved.'
            "
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
    </template>

    <nut-infinite-loading
      style="min-height: 280px; height: 600px; padding-bottom: 10px; overflow: auto"
      v-else-if="cloudCodeIsBind && earningsList.length"
      load-more-txt="No more content"
      :has-more="hasMore"
      v-model="infinityValue"
      @load-more="loadMore"
    >
      <div
        class="list_item"
        v-for="(item, index) in earningsList"
        @click="gotoOrderPage(item)"
        :class="[isOpen(item.order_info.state) ? '' : 'history_item']"
      >
        <div class="order_status_flag open" v-if="isOpen(item.order_info.state)">Open Order</div>
        <div class="order_status_flag history" v-if="!isOpen(item.order_info.state)">History Order</div>
        <div :class="['item_img_box', (index + 1) % 3 == 2 ? 'item_2' : '', (index + 1) % 3 == 0 ? 'item_3' : '']">
          <!-- <img src="@/assets/list_item_2.svg" alt="" /> -->
          <!-- <img src="@/assets/DMC_Token1.png" alt="" /> -->
          <img v-if="item.order_info.electronic_type == 0" src="@/assets/mobile.svg" alt="" />
          <img v-else src="@/assets/desktop.svg" alt="" />
        </div>
        <div style="width: 100%; justify-content: flex-end !important; margin-top: -2px">
          <span>{{ transferUTCTime(item.created_at) }}</span>
        </div>
        <div>
          <span style="font-weight: bold">Order:{{ item.order_id }}</span>
          <span
            :class="[
              item.inner_user_trade_type == 'payout' ? 'expense' : '',
              item.inner_user_trade_type == 'income' ? 'earnings' : '',
              'trade_type',
            ]"
          >
            <span v-if="item.inner_user_trade_type == 'payout'">-</span><span v-else-if="item.inner_user_trade_type == 'income'">+</span>
            {{ formatNumber(item.quantity)?.integerPart
            }}<span style="font-size: 13px">.{{ formatNumber(item.quantity)?.decimalPart }}</span>
          </span>
        </div>
        <div>
          <span class="time">{{ item.trx_id }}</span>
          <!-- <span class="time">{{ transferUTCTime(item.created_at) }}</span> -->
          <span style="text-align: right" class="my_status">{{ mapTypes[item.trade_type] }}</span>
          <!-- <span>{{ item.trade_type == 'user_delivery_income' ? '' : item.state }} </span> -->
        </div>
      </div>
    </nut-infinite-loading>

    <nut-empty v-else-if="earningsList.length == 0 && ishaveProfit" description="There are currently no returns this week"></nut-empty>
    <!-- <nut-backtop el-id="main-page" :z-index="999" :bottom="60"></nut-backtop> -->
  </div>
</template>

<script lang="ts" setup name="HomePage">
  import ErrorPage from '@/views/errorPage/index.vue';
  import IconArrowRight from '~icons/home/arrow-right.svg';
  import IconTransaction from '~icons/home/transaction.svg';
  import { Notice, TriangleUp, DouArrowUp, RectUp } from '@nutui/icons-vue';
  import { toRefs, computed, reactive, ref, watch, watchEffect } from 'vue';
  import { useRouter } from 'vue-router';
  import { useUserStore } from '@/store/modules/user';

  import { showToast, showDialog } from '@nutui/nutui';
  //   import { search_cloud } from '@/api';
  import { search_cloud } from '@/api';
  import useUserAssets from './useUserAssets.ts';

  import { transferUTCTimeDay, getfilesize2 } from '@/utils/util';
  import { transferUTCTime, formatNumber } from '@/utils/util';
  import '@nutui/nutui/dist/packages/toast/style';
  import { useIntersectionObserver } from '@vueuse/core';
  import { search_order_profit, search_user_asset_detail } from '@/api/amb';

  const userInfo = computed(() => userStore.getUserInfo);
  const cloudCodeIsBind = computed(() => userStore.getCloudCodeIsBind);

  const router = useRouter();

  const mapTypes = {
    user_delivery_income: 'UserDeliveryIncome',
    buy_order: 'Purchased Order',
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
    user_cancel_order: 'Order Cancellation Refund', // 订单取消
    user_OrderReceiptDeposit: 'Order expires. Deposit refunded', // 订单到期退还押金
    OrderRefund: 'Order refund', // 订单退款
    OrderReceiptEnd: 12,
  };

  const userStore = useUserStore();
  const earningsList = ref([] as any);
  const { getUserAssets, getExchangeRate, dmc2usdRate, cloudTodayIncome, cloudBalance, cloudPst, cloudIncome, cloudWithdraw } =
    useUserAssets();

  const ambRefuse = computed(() => userStore.getambRefuse); //大使是否拒绝  true 拒绝  false 同意
  const curStepIndex = computed(() => userStore.getCurStepIndex); // 1 绑定大使邀请码
  const bindAmbCode = inject('bindAmbCode');
  const openBindDMCDiaolg = inject('openBindDMCDiaolg');

  const infinityValue = ref(false);
  const hasMore = computed(() => {
    if (total.value > earningsList.value.length) {
      return true;
    } else {
      return false;
    }
  });
  const isError = ref(false);
  const pageSize = ref(10);
  const pageNum = ref(1);
  const total = ref(0);

  const pn = ref(1);
  const ps = ref(10);

  async function getOrder() {
    const order_state = null;
    const start_time = '';
    const end_time = '';
    const buy_result = 'success';
    await search_cloud({ ps: ps.value, pn: pn.value, order_state, start_time, end_time, buy_result }).then((res) => {
      let total = res?.result?.total;
      if (total > 0) {
        userStore.setcurStepIndex(4);
      } else {
        userStore.setcurStepIndex(3);
      }
    });
  }

  watch(
    curStepIndex,
    (val) => {
      if (val === 4) {
        searchOrderProfit();
        searchAllOrderProfit();
      }
    },
    { deep: true, immediate: true },
  );
  const cloudBalanceNum = computed(() => {
    return formatNumber(cloudBalance.value);
  });
  const cloudTodayIncomeNum = computed(() => {
    return formatNumber(cloudTodayIncome.value);
  });

  function handleID(id) {
    if (id) {
      return id.substring(0, 8) + '...' + id.substring(id.length - 8, id.length);
    }
  }

  function loadMore() {
    if (cloudCodeIsBind.value) {
      isError.value = false;
      pageNum.value = pageNum.value + 1;
      searchOrderProfit();
    }
  }

  function searchOrderProfit() {
    const end = new Date();
    const start = new Date();
    start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
    const postData = {
      start_time: transferUTCTimeDay(start),
      end_time: transferUTCTimeDay(end),
      ps: pageSize.value,
      pn: pageNum.value,
    };
    infinityValue.value = true;
    search_user_asset_detail(postData)
      .then((res) => {
        infinityValue.value = false;
        if (res && res.result && res.result.data.length) {
          for (const item of res.result.data || []) {
            item.trx_id = handleID(item.trx_id);
          }
          earningsList.value = earningsList.value.concat(res.result.data);
          // const newSetCloudList = [...earningsList.value, ...res.result.data];
          // let arr = [];
          // const filterList = newSetCloudList.filter((item) => !arr.includes(item.trx_id) && arr.push(item.trx_id));
          // earningsList.value = filterList;
          // console.log(earningsList.value );

          total.value = res.result.total;
        }
        if (res.code != 200) {
          pageNum.value = pageNum.value - 1;
          isError.value = true;
        }
      })
      .catch(() => {
        isError.value = true;
        pageNum.value = pageNum.value - 1;
        infinityValue.value = false;
      });
  }

  const ishaveProfit = ref(false); //是否订单已经产生过收益 如果有收益不展示引导页
  function searchAllOrderProfit() {
    const postData = { start_time: '', end_time: '' };
    search_user_asset_detail(postData)
      .then((res) => {
        if (res.code == 200) {
          if (res.result.data.length > 0) {
            ishaveProfit.value = true;
          } else {
            ishaveProfit.value = false;
          }
        }
      })
      .finally(() => {});
  }

  const showWithdraw = () => {
    if (!userInfo.value.dmc) {
      openBindDMCDiaolg();

      return false;
    } else if (!cloudCodeIsBind.value) {
      bindAmbCode();
    } else {
      router.push({ name: 'Withdraw' });
    }
  };

  const gotoPage = (type, query = '') => {
    if (!userInfo.value.amb_promo_code || !cloudCodeIsBind.value) {
      bindAmbCode();
      return false;
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
  const isOpen = (state) => {
    if (state === 4 || state === 5) {
      return false;
    } else {
      return true;
    }
  };
  const toBuyOrder = () => {
    gotoPage('shop');
  };
  const toRecharge = () => {
    if (!userInfo.value.amb_promo_code || !cloudCodeIsBind.value) {
      bindAmbCode();
      return false;
    } else {
      router.push({ name: 'Recharge' });
    }
  };

  function gotoBindAmb() {
    if (curStepIndex.value !== 1) {
      showToast.text('You have already bound an invitation code');
      return;
    }
    bindAmbCode();
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
      getOrder();
    }
  });

  watch(
    cloudCodeIsBind,
    async (newVal) => {
      if (newVal) {
        userStore.setambRefuse(false);
        getOrder();
        getUserAssets();
        getExchangeRate();
      }
    },
    { deep: true, immediate: true },
  );

  const targetIsVisible = ref(false);
  const my_steps = ref(null);
  function loadMySwipeDom() {
    const { stop } = useIntersectionObserver(my_steps, ([{ isIntersecting }]) => {
      targetIsVisible.value = isIntersecting;
    });
  }

  function scrollIntoViewTo() {
    let my_steps = document.getElementById('my_steps');
    if (my_steps) {
      my_steps?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  function gotoOrderPage(row) {
    console.log(row);
    if (row.order_info.state == 5 || row.order_info.state == 4) {
      router.push({
        name: 'orderSummary',
        query: {
          id: row.order_id,
          status: row.order_info.state,
          type: 'history',
        },
      });
    } else {
      router.push({
        name: 'listDetails',
        query: {
          id: row.order_id,
          uuid: row.order_info && row.order_info.uuid,
          amb_uuid: row.amb_uuid,
        },
      });
    }
  }

  onMounted(async () => {
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
          // background: #34964f;
          // background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);
          background-image: linear-gradient(to top, #e0e1e2 0%, #e7f0fd 100%);
        }
      }

      &:nth-child(3) {
        .svg-box {
          // background: #fcd116;
          background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
        }
      }

      &:nth-child(4) {
        .svg-box {
          // background: #5f57ff;
          // background-image: linear-gradient(to top, #5ee7df 0%, #b490ca 100%);
          background-image: linear-gradient(to top, #fff1eb 0%, #ace0f9 100%);
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
        // background: #ff8b00;
        background: linear-gradient(to bottom, #d5dee7 0%, #e8ebf2 50%, #e2e7ed 100%),
          linear-gradient(to bottom, rgba(0, 0, 0, 0.02) 50%, rgba(255, 255, 255, 0.02) 61%, rgba(0, 0, 0, 0.02) 73%),
          linear-gradient(33deg, rgba(255, 255, 255, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%);
        background-blend-mode: normal, color-burn;

        // box-shadow: 0px 1px 2px 2px #ccc;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

        svg,
        img {
          width: 70px;
          height: 70px;
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
    border-radius: 30px;
    background-image: linear-gradient(260deg, #4062bb 0%, #5200ae 74%);

    > img {
      top: 30px;
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
        // margin-right: 100px;

        span {
          text-align: left;
        }

        .total_income {
          > div {
            font-size: 30px;
            text-align: left;
          }

          .balance_text {
            font-size: 60px;

            img {
              height: 50px;
              width: 100px;
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
      margin-top: 20px;
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
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: space-around;
    transform: translateY(-80px);
    width: 90%;
    margin: 0 auto;
    padding: 20px 0;
    border-radius: 16px;
    border: 4px solid transparent;
    background: #fff;
    // box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
    background:
      linear-gradient(#fff, #fff) padding-box,
      linear-gradient(145deg, #e81cff, #40c9ff) border-box;

    .action_item {
      z-index: 88;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      // color: #333333;
      color: #5758a0;
      font-size: 30px;
      font-weight: bold;

      img {
        display: block;
        width: 160px;
        margin-bottom: 10px;
      }
    }
  }
  .withdraw-btn::before {
    content: '';
    position: absolute;
    width: 140%;
    background-image: linear-gradient(180deg, rgb(0, 183, 255), rgb(255, 48, 255));
    height: 80%;
    animation: rotBGimg 3s linear infinite;
    transition: all 0.2s linear;
  }

  @keyframes rotBGimg {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }

  .withdraw-btn::after {
    content: '';
    position: absolute;
    background: #fff;
    inset: 3px;
    border-radius: 15px;
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
    min-height: 100px;
    color: #171414;
    font-size: 24px;
    background: #fff;

    border-bottom: 1px solid #eee;
    margin: 10px 0 20px 0;
    border-radius: 12px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1.333333vw 6.666667vw;
    .order_status_flag {
      width: 180px;
      height: 40px;
      border-radius: 0 20px 20px 0;

      position: absolute;
      top: -12px;
      left: 0px;
      background: #ccc;
      color: #fff;
      text-align: center;
      justify-content: center;
      font-weight: bold;
      &.open {
        background: #009771;
        background: #f88b02;
      }
      &.history {
        background: #999;
        border: 1px dashed #fff;
      }
    }
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
        // transform-style: preserve-3d;
        // -webkit-transform-origin: 50%;
        // -webkit-animation: spin 5s infinite;
        // -webkit-animation-timing-function: linear;
        // -webkit-perspective: 1000;
        // -webkit-box-reflect: below 0 linear-gradient(hsla(0, 0%, 100%, 0), hsla(0, 0%, 100%, 0) 45%, hsla(0, 0%, 100%, 0.5));
        // -webkit-filter: saturate(1.45) hue-rotate(2deg);
      }

      // @keyframes spin {
      //   from {
      //     -webkit-transform: rotateY(0deg);
      //   }

      //   to {
      //     -webkit-transform: rotateY(360deg);
      //   }
      // }

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

    .trade_type {
      display: inline-block;
      font-size: 30px;
    }

    .time {
      font-size: 24px;
      color: #000000;
      font-weight: 600;
    }
    .my_status {
      text-align: right;
      width: 240px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    &:last-child {
      border-bottom: none;
    }
  }
  .history_item {
    background: #ccc;
  }
</style>

<style lang="scss">
  .isConfirmCheckbox {
    margin-top: 25px;

    .nut-checkbox__label {
      // color: rgb(158, 158, 158) !important;
      font-size: 28px;
    }
  }

  .bindAmbCodeDialog {
    .nut-dialog__header {
      border-bottom: 0px !important;
      justify-content: center !important;
      margin-bottom: 0px !important;
    }

    .nut-dialog__content {
      padding-top: 0px !important;
      margin-top: 0px !important;
    }
  }
</style>

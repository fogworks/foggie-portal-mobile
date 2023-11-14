<template>
  <div class="out_blue">
    <div class="inside_blue">
      <IconArrowLeft class="back_img" @click="$router.go(-1)"></IconArrowLeft>
      <p class="title">Buy</p>
      <p class="total_balance">Total Balance</p>
      <p class="total_balance_value" v-if="cloudBalance">{{ cloudBalance }} DMC</p>
      <div class="action_item" v-else>
        <router-link to="/recharge" style="color: #b9d4ff; font-size: 14px">
          <img src="@/assets/recharge.svg" alt="" />
          Recharge
        </router-link>
      </div>
    </div>
  </div>
  <div class="middle_content">
    <p class="middle_title">VIP orders will receive a higher amount of revenue</p>
    <div class="product_box">
      <div class="product_card">
        <p
          >General Orders <br />
          (48 Weeks)</p
        >
        <p>{{ (perMpPSTIncome * 100).toFixed(4) }} DMC/100GB</p>
      </div>
      <!-- <img src="@/assets/arrow-right.svg" alt="" /> -->
      <span style="font-weight: bold"> VS</span>

      <div class="product_card">
        <p
          >VIP Orders <br />
          (48 Weeks)</p
        >
        <p>{{ (perGoldenPSTIncome * 100).toFixed(4) }} DMC/100GB</p>
      </div>
    </div>
  </div>
  <div class="out_price_box">
    <p>VIP Order <IconSetting @click="showTop = true"></IconSetting> </p>
    <div class="price_box">
      Reference price: <br />
      <span style="text-align: center" class="price_box_text"> 100GB = {{ middleTotalPrice }} DMC</span>
    </div>
  </div>
  <div style="margin: 0 20px 40px">
    <nut-button block class="buy_btn" type="info" @click="submit" :loading="loading"> Buy Now </nut-button>
    <!-- <nut-button block class="buy_btn" type="warning" v-else @click="loadCurReferenceRate" :loading="loading"> Retry </nut-button> -->
  </div>
  <Teleport to="body">
    <nut-popup position="top" :style="{ height: '420px' }" v-model:visible="showTop">
      <nut-form class="query_form" :model-value="shopForm">
        <nut-form-item label="Service Period">
          <nut-radio-group class="week_radio" v-model="shopForm.week" direction="horizontal">
            <nut-radio shape="button" :label="52">52 weeks</nut-radio>
            <nut-radio shape="button" :label="38">38 weeks</nut-radio>
            <nut-radio shape="button" :label="24">24 weeks</nut-radio>
          </nut-radio-group>
        </nut-form-item>
        <nut-form-item label="Custom Cycle">
          <nut-range hidden-range v-model="shopForm.week" :max="52" :min="24" />
        </nut-form-item>
        <nut-form-item label="Space(GB) Min:100GB">
          <nut-input-number
            @focus="buyDisabled = true"
            @blur="buyDisabled = false"
            :min="100"
            decimal-places="0"
            v-model="shopForm.quantity"
            step="1"
            class="nut-input-text"
            placeholder="Space"
          />
        </nut-form-item>
        <div style="text-align: center" class="order-tip">
          <strong> Reference price: </strong>
          <strong class="price"> {{ middleTotalPrice || '--' }} DMC </strong>
        </div>
        <!-- <p class="middle_title" v-if="!loading && !curReferenceRate">No eligible orders were found. Please search and try again</p> -->
        <div class="bottom_btn">
          <nut-button type="warning" plain :loading="loading" @click="showTop = false"> Cancel </nut-button>
          <nut-button type="warning" @click="submit" :disabled="buyDisabled" :loading="loading"> Buy </nut-button>
        </div>
      </nut-form>
    </nut-popup>
  </Teleport>

  <Teleport to="body">
    <nut-popup position="bottom" pop-class="confirm_pop" round :style="{ height: 'auto' }" v-model:visible="showBuy">
      <h3 class="buyOrderTitle"> Pre-trading information</h3>
      <div class="storagebox">
        <!-- <img src="@/assets/shujuguifan.svg" alt="" srcset="" /> -->
        <img src="@/assets/VIP.svg" alt="" srcset="" />
        <div class="BaseBox">
          <!-- <div class="base_box">
            <span class="span1">Price:</span>
            <span class="span2">{{ (curReferenceRate / 10000).toFixed(4) }}</span>
            <span class="span2">/GB</span>
            <span class="span2">/Week</span>
          </div> -->
          <div class="base_box1">
            <span class="s1">{{ shopForm.quantity }} GB</span>
            <span class="s2">+</span>
            <span class="s1">{{ shopForm.week }} W</span>
          </div>
        </div>
      </div>
      <div class="storageDetail">
        <div class="rowBox">
          <div class="row_box">
            <span class="row_box_title">Unit Price</span>
            <span class="row_box_value">{{ (curReferenceRate / 10000).toFixed(4) }} (GB/Week)</span>
          </div>
          <div class="row_box">
            <span class="row_box_title">Base Price</span>
            <span class="row_box_value">{{ base_Price }} <span>DMC</span></span>
          </div>
          <div class="row_box">
            <span class="row_box_title">Deposit</span>
            <span class="row_box_value">{{ deposit_ratio_Price }} <span>DMC</span></span>
          </div>
          <div class="row_box" style="border-bottom-style: solid">
            <span class="row_box_title">Variation Price</span>
            <span class="row_box_value"
              >{{ ((+base_Price + deposit_ratio_Price) * (shopForm.floating_ratio / 100)).toFixed(4) }}<span>DMC</span></span
            >
          </div>
          <div class="row_box">
            <span class="row_box_title">Upper Limit Total</span>
            <span class="row_box_value">{{ totalPrice }} <span>DMC</span></span>
          </div>
        </div>
        <!-- <div class="row_tips">
          <div>* The order book is only partly open during the outcry phase。</div>
          <div>* When orders match such as to enable a transaction to be executed, the indicative auction price is shown。</div>
          <div
            >* This is the price that would result for the auction if the price determination were to take place at this point in
            time。</div
          >
        </div> -->
      </div>
      <div class="bottom_btn">
        <nut-progress
          v-if="buyOrderIsSuccess"
          :percentage="progressPercentage"
          :text-inside="true"
          size="large"
          status="active"
          stroke-color="linear-gradient(270deg, rgba(18,126,255,1) 0%,rgba(32,147,255,1) 32.815625%,rgba(13,242,204,1) 100%)"
          style="margin: 30px auto"
        >
        </nut-progress>
        <nut-button block type="warning" :disabled="buyOrderIsSuccess" @click="confirmBuy" :loading="loading"> Confirm Buy </nut-button>
      </div>

      <!-- <ul class="buyOrderTips">
        <li>The order book is only partly open during the outcry phase。</li>
        <li>When orders match such as to enable a transaction to be executed, the indicative auction price is shown</li>
        <li>This is the price that would result for the auction if the price determination were to take place at this point in time</li>
      </ul>

      <nut-cell-group>
        <nut-cell title="Space" :desc="shopForm.quantity + ' GB'"></nut-cell>
        <nut-cell title="Weeks" :desc="shopForm.week"></nut-cell>
        <nut-cell title="Deposit Ratio" :desc="deposit_ratio"></nut-cell>
        <nut-cell title="Floating Ratio" :desc="shopForm.floating_ratio + '%'"></nut-cell>
        <nut-cell title="Unit Price" :desc="(curReferenceRate / 10000).toFixed(4) + ' DMC/GB/Week'"></nut-cell>
        <nut-cell class="total_price" title="Total Price" :desc="totalPrice + ' DMC'"></nut-cell>
      </nut-cell-group> -->
    </nut-popup>
  </Teleport>
</template>

<script setup lang="ts" name="Shop">
  import IconArrowLeft from '~icons/home/arrow-left.svg';
  import IconSetting from '~icons/home/setting.svg';
  import { toRefs, reactive, onMounted } from 'vue';
  import { buy_order, node_order_buy, order_buy_state, node_order_search, get_average_price, query_node } from '@/api/amb';
  import { showToast, showDialog } from '@nutui/nutui';
  import { useRouter } from 'vue-router';
  import useDmcTrade from './useDmcTrade.js';
  import useUserAssets from '../home/useUserAssets.ts';
  import { debounce, delay } from 'lodash';
  import FakeProgress from 'fake-progress';

  // import useUpdateDMC from './useUpdateDMC';
  // const { getAmbDmc, targetAccount } = useUpdateDMC();

  const fake = reactive(
    new FakeProgress({
      timeConstant: 10000,
      autoStart: true,
    }),
  );
  const progressPercentage = computed(() => Math.floor(fake.progress * 100));

  const { getUserAssets, cloudBalance } = useUserAssets();
  const { perMpPSTIncome, perGoldenPSTIncome } = useDmcTrade();
  const router = useRouter();
  const state = reactive({
    shopForm: {
      quantity: 100 as number,
      week: 24,
      floating_ratio: 5,
    },
    loading: false,
    curReferenceRate: 0,
    showTop: false,
    deposit_ratio: 0,
    middle_price: 0,
    showBuy: false,
    nodeInfo: {
      nodeIp: '',
      buyOrderUuid: '',
      amb_user_uuid: '',
    },
    priceNode: '',
    buyDisabled: false,
  });
  const { buyDisabled, priceNode, nodeInfo, showBuy, middle_price, deposit_ratio, showTop, shopForm, curReferenceRate, loading } =
    toRefs(state);
  const getAveragePrice = async () => {
    let params = {
      week: state.shopForm.week,
      floating_ratio: state.shopForm.floating_ratio,
      pst: state.shopForm.quantity,
    };

    get_average_price(priceNode.value, {
      week: state.shopForm.week,
      storage: state.shopForm.quantity,
      poolType: 'golden', //vofo.*  / golden
      size: 5,
    })
      .then((res) => {
        if (res.code == 200 && res.data) {
          middle_price.value = res.data;
          // curReferenceRate.value = res.data[0].price;
          // deposit_ratio.value = res.data[0].depositRatio;
        }
      })
      .finally(() => {});
  };
  const deposit_ratio_Price = computed(() => {
    return +((curReferenceRate.value / 10000) * deposit_ratio.value * state.shopForm.quantity).toFixed(4);
  });
  const totalPrice = computed(() => {
    let baseTotal =
      (curReferenceRate.value / 10000) * state.shopForm.week * state.shopForm.quantity +
      (curReferenceRate.value / 10000) * deposit_ratio.value * state.shopForm.quantity;
    let floatTotal = baseTotal * (1 + state.shopForm.floating_ratio / 100);
    if (+cloudBalance.value >= baseTotal && +cloudBalance.value < floatTotal) {
      state.shopForm.floating_ratio = 0;
      return cloudBalance.value.toFixed(4);
    } else {
      return floatTotal.toFixed(4);
    }
  });
  const base_Price = computed(() => {
    let total = (curReferenceRate.value / 10000) * state.shopForm.week * state.shopForm.quantity;
    return total.toFixed(4);
  });

  const middleTotalPrice = computed(() => {
    let total =
      ((middle_price.value / 10000) * state.shopForm.week * state.shopForm.quantity +
        (middle_price.value / 10000) * 1 * state.shopForm.quantity) *
      (1 + state.shopForm.floating_ratio / 100);
    return total.toFixed(4);
  });

  async function submit() {
    if (state.shopForm.quantity < 100) {
      showToast.text('Minimum number of spaces is 100');
      return false;
    }
    let params = {
      week: state.shopForm.week,
      floating_ratio: state.shopForm.floating_ratio / 100,
      pst: state.shopForm.quantity,
    };
    loading.value = true;
    node_order_search(priceNode.value, {
      week: state.shopForm.week,
      storage: state.shopForm.quantity,
      poolType: 'golden', //vofo.*  / golden
      size: 5,
    })
      .then((res) => {
        loading.value = false;
        if (res.code == 200 && res.data.length) {
          curReferenceRate.value = res.data[0].price;
          deposit_ratio.value = res.data[0].depositRatio;
          showBuy.value = true;
        }
      })
      .finally(() => {
        loading.value = false;
      });
  }

  const buyOrderIsSuccess = ref(false); // 是否买单成功
  const confirmBuy = async () => {
    // let nodeIp ='http://'+ res.result.node_address;
    // let nodeIp = 'http://154.31.41.124:18080';
    console.log(cloudBalance.value < totalPrice.value);
    console.log(cloudBalance.value);
    console.log(totalPrice.value);

    if (+cloudBalance.value < +totalPrice.value) {
      let rechargeDMC = (totalPrice.value - cloudBalance.value).toFixed(4);
      // showToast.text(`Insufficient balance and projected need to top up ${rechargeDMC}DMC`);
      showBuy.value = false;
      loading.value = false;
      const dmcOk = () => {
        router.push('/recharge');
      };
      let src = require('@/assets/DMC_token.png');
      let str = `<img class="bind_img" src=${src} style="height:60px;"/>
      <p style='word-break:break-word;color:#d1cece;text-align:left;'>Insufficient balance and projected need to top up ${rechargeDMC}DMC</p >

        `;
      showDialog({
        title: 'The balance is insufficient',
        content: str,
        noCancelBtn: true,
        okText: 'Recharge',
        onOk: dmcOk,
      });
      return false;
    }
    loading.value = true;
    let params = {
      week: state.shopForm.week,
      floating_ratio: state.shopForm.floating_ratio / 100,
      pst: state.shopForm.quantity + '',
    };
    const nodeRes = await buy_order(params);
    console.log(nodeRes);

    if (nodeRes.code !== 200) {
      showToast.fail(`Apologies for the delay, Please Try Again Later`);
      loading.value = false;
      return false;
    }

    nodeInfo.value.buyOrderUuid = nodeRes.result.uuid;
    nodeInfo.value.amb_user_uuid = nodeRes.result.amb_user_uuid;
    node_order_buy(nodeInfo.value.nodeIp, {
      minPrice: curReferenceRate.value / 10000,
      maxPrice: ((curReferenceRate.value / 10000) * (1 + state.shopForm.floating_ratio / 100)).toFixed(4),
      buyOrderUuid: nodeInfo.value.buyOrderUuid,
      userUuid: nodeInfo.value.amb_user_uuid,
      period: state.shopForm.week.toString(),
      pst: state.shopForm.quantity,
      totalPrice: totalPrice.value,
      memo: `${nodeInfo.value.buyOrderUuid}_Order_buy`,
      deviceType: 3,
      poolType: 'golden', //vofo.*  / golden
      terminalType: 2,
    })
      .then((res) => {
        loading.value = false;

        if (res.code == 200) {
          fake.progress = 0;
          fake.start();
          buyOrderIsSuccess.value = true;
          loadOrderBuyState();
        }
      })
      .catch(() => {
        loading.value = false;
      });
  };
  function loadOrderBuyState() {
    order_buy_state(nodeInfo.value.nodeIp, { buyOrderUuid: nodeInfo.value.buyOrderUuid })
      .then((res) => {
        if (res.code == 200) {
          if (res.data.orderId && res.data.orderId != '') {
            fake.end();

            let src = require('@/assets/DMC_Token1.png');
            let str = `<img class="bind_img nut-icon-am-jump nut-icon-am-infinite" src=${src} style="height:60px; padding: 20px;"/>
    <div class='buyOrderItem'><span>Order ID:</span> <span>${res.data?.orderId}</span></div >
    <div class='buyOrderItem'><span>Total price:</span> <span>${res.data?.totalPrice} DMC</span></div >
    <div class='buyOrderItem'><span>Total Space:</span> <span>${res.data?.pst} GB </span></div >
    <div class='buyOrderItem'><span>Service time:</span> <span>${res.data?.epoch} Weeks</span></div > `;
            delay(() => {
              showTop.value = false;
              showBuy.value = false;
              showDialog({
                title: 'Purchase Successfully',
                content: str,
                okText: 'Go Order',
                cancelText: 'Go Home',
                customClass: 'BuyOrderClass',
                onOk: () => {
                  router.push({ name: 'listDetails', query: { id: res.data?.orderId, uuid: res.data?.uuid, amb_uuid: res.data?.ambUuid } });
                },
                onCancel: () => {
                  router.push('/home');
                },
                beforeClose: () => {
                  buyOrderIsSuccess.value = false;
                  fake.progress = 0;
                  fake.end();
                  return true;
                },
              });
            }, 1000);
          } else {
            delay(() => {
              loadOrderBuyState();
            }, 1000);
          }
        } else {
          fake.stop();
        }
      })
      .catch(() => {
        fake.stop();
      });
  }

  const queryPriceNode = () => {
    return query_node()
      .then((res) => {
        if (res.code == 200) {
          const nodeList = res.result.data.filter((el) => el.is_active);
          // priceNode.value = `http://${nodeList?.[0].ip_address}:28080`;
          // if (priceNode.value) return true;
          return true;
        } else {
          return false;
        }
      })
      .catch(() => {
        return false;
      });
  };
  watch(
    showTop,
    (val) => {
      state.shopForm.quantity = 100;
      state.shopForm.week = 24;
      state.shopForm.floating_ratio = 5;
    },
    { deep: true },
  );

  onMounted(async () => {
    let res = await queryPriceNode();
    if (res) {
      getAveragePrice();
    }
    getUserAssets();
  });
  onActivated(async () => {
    let res = await queryPriceNode();
    if (res) {
      getAveragePrice();
    }
    getUserAssets();
  });
</script>
<style lang="scss">
  .confirm_pop {
    padding-bottom: 20px;
    background-color: #d5d5d5 !important;
    background: #fff !important;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

    .storagebox {
      display: grid;
      grid-template-columns: 150px auto;
      gap: 20px;
      align-items: center;
      padding: 30px 40px;
      background-color: #ffffff;
      background-color: #ffae2a;
      background: var(
        --nut-button-warning-background-color,
        linear-gradient(135deg, rgb(255, 158, 13) 0%, rgb(255, 167, 13) 45%, rgb(255, 182, 13) 83%, rgb(255, 190, 13) 100%)
      );
      color: #fff;
      margin: 0px 40px;
      border-radius: 10px;
      & > img {
        width: 100%;
        object-fit: cover;
      }
      .BaseBox {
        .base_box {
          .span1 {
            color: #c19993;
            color: #ffac2b;
            color: #fff;
            font-size: 40px;
            margin-right: 5px;
          }
          .span2 {
            color: #f4b976;
            color: #fff;
            font-size: 40px;
            margin-left: 3px;
          }
        }
      }
      .base_box1 {
        display: flex;
        justify-content: space-around;
        align-items: center;
        .s1 {
          font-weight: 700px;
          font-size: 60px;
        }
        .s2 {
          font-weight: 600;
          font-size: 70px;
          color: #a52a17;
          color: #ffffff;
        }
      }
    }

    .storageDetail {
      padding: 30px 20px;
      background-color: #ffffff;
      margin: 0px 40px;
      border-radius: 10px;
      margin-top: 40px;
      font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

      .rowBox {
        .row_box {
          display: flex;
          justify-content: space-between;
          padding: 20px 10px;
          border-bottom: 2px dashed #616161;
          .row_box_title,
          .row_box_value {
            // font-weight: 600;
            font-size: 34px;
            color: #5e5e5e;
            color: #000;
            span {
              font-size: 18px;
              color: #ffa92a;
              font-weight: bold;
            }
          }
        }
        .row_box:last-child {
          border-bottom: 2px dashed transparent;
        }
      }
      .row_tips {
        margin-top: 20px;
        padding: 0px;
        font-size: 24px;
        color: #666766;
        & > div {
          line-height: 40px;
        }
      }
    }

    .bottom_btn {
      padding: 20px 40px;
      .nut-button {
        height: 100px;
        background-color: #2d2e41 !important;
        font-size: 40px;
        border: 0px;
        color: #ffffff;
        font-weight: 600px;
      }
      .nut-button--disabled {
        background: #aaa !important;
        opacity: 0.28 !important;
      }
    }
  }
</style>
<style lang="scss" scoped>
  .price_box_text {
    width: 100%;
    display: inline-block;
    font-weight: bold;
  }

  .middle_title {
    text-align: center;
    font-weight: 600;
    margin-top: 40px;
    margin-bottom: 20px;
    color: $main_red;
  }

  .out_blue {
    position: relative;
    height: 290px;
    background: #43a3fd;
    border-radius: 0 0 50px 50px;

    .inside_blue {
      z-index: 999;
      position: absolute;
      top: 0;
      width: 100%;
      height: 345px;
      background: #5264f9;
      border-radius: 0 0 50px 50px;
      overflow: hidden;

      .back_img {
        position: absolute;
        left: 20px;
        top: 40px;
        width: 60px;
        height: 60px;
        color: #fff;
      }

      .title {
        color: #fff;
        font-size: 1.5rem;
        text-align: center;
        margin-top: 40px;
      }

      .total_balance {
        color: #b9d4ff;
        font-size: 1.5rem;
        margin: 20px auto 20px;
        text-align: center;
      }

      .total_balance_value {
        font-weight: 250;
        color: #fff;
        font-size: 1.75rem;
        text-align: center;
        margin-top: 30px;
      }

      &::before,
      &::after {
        content: '';
        position: absolute;
        top: -10px;
        right: -240px;
        transform: rotate(55deg);
        display: block;
        width: 350px;
        height: 350px;
        border-radius: 60px;
        border: 5px solid #c72ff8;
      }

      &::after {
        transform: rotate(39deg);
        border: 5px solid #3eb9ff;
      }
    }
  }

  .middle_content {
    padding: 20px;

    .middle_title {
      text-align: center;
      font-weight: 600;
      margin-top: 40px;
      margin-bottom: 20px;
      color: #000;
    }

    .product_box {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 30px;

      img {
        width: 40px;
        margin: 0 5px;
      }
    }

    .product_card {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 260px;
      height: 160px;
      padding: 20px;
      border-radius: 35px;
      color: #a27430;
      background: #ffcf87;
      overflow: hidden;
      text-align: center;

      p {
        z-index: 1;
        margin-bottom: 5px;
        font-size: 26px;
        white-space: nowrap;

        &:first-child {
          font-size: 26px;
        }
      }

      &::after {
        content: '';
        position: absolute;
        top: -80px;
        left: -30px;
        width: 250px;
        height: 250px;
        background: #f3dcb9;
        border-radius: 50%;
      }

      &:nth-child(3) {
        color: #a73131;
        background: #fa8596;

        &::after {
          background: #ffc1c1;
        }
      }
    }
  }

  .out_price_box {
    padding: 20px;

    p {
      padding: 0 20px;
      color: #999999;
      font-size: 1.1rem;
      font-weight: bold;

      svg {
        float: right;
        width: 40px;
        height: 40px;
        color: #5264f9;
      }
    }
  }

  .buy_btn {
    height: 100px;
    font-size: 40px;
    // margin: 40px 0;
    position: absolute;
    bottom: 150px;
    width: 90vw;
    left: 50%;
    transform: translateX(-50%);
    :deep {
      .nut-button {
        background-color: #2d2e41 !important;
      }
      &.nut-button--disabled {
        background: #aaa !important;
      }
    }
  }

  .price_box {
    position: relative;
    width: 80%;
    margin: 5px auto;
    padding: 40px;
    color: #fff;
    border-radius: 50px;
    background: #5264f9;
    font-size: 1.25rem;
    overflow: hidden;

    &::before {
      content: '';
      display: block;
      position: absolute;
      top: -100px;
      right: -50px;
      width: 185px;
      height: 200px;
      opacity: 0.75;
      border-radius: 50%;
      transform: rotate(-129.95deg);
      background: linear-gradient(154deg, #c72ff8 -2%, #c72ff8 11%, rgba(198, 48, 248, 0) 91%);
      z-index: 1;
    }

    &::after {
      content: '';
      display: block;
      position: absolute;
      transform: rotate(-152.43deg);
      bottom: -80px;
      right: -80px;
      width: 185px;
      height: 200px;
      opacity: 0.75;
      border-radius: 50%;
      background: linear-gradient(149deg, #5264f9 0%, #3af9ef 98%);
    }
  }

  .query_form {
    padding: 0 20px 20px 20px;

    :deep {
      .nut-form-item {
        flex-direction: column;
        height: 180px;

        .nut-form-item__label {
          width: 100%;
          margin-bottom: 20px;
          font-weight: 800;
        }
      }

      .nut-cell-group__wrap {
        padding-bottom: 20px;
        box-shadow: none;
      }

      .nut-range-button .number {
        font-weight: 800;
        transform: translate3d(0, 100%, 0);
      }

      .nut-range-container {
        padding: 0 20px;
        box-sizing: border-box;
      }
    }

    .order-tip {
      padding: 30px 10px;
      font-size: 28px;

      strong {
        color: $primary-color;
      }

      .price {
        font-size: 50px;
      }
    }

    .bottom_btn {
      display: flex;
      justify-content: space-around;
      align-items: center;
      position: relative;
      :deep {
        .nut-button {
          width: 40%;

          &.nut-button--disabled {
            background: #aaa !important;
            opacity: 0.28 !important;
          }
        }
      }
    }
  }

  .action_item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 24px;

    img {
      display: block;
      width: 100px;
      margin-bottom: 10px;
    }
  }

  .buyOrderTitle {
    height: 100px;
    line-height: 100px;
    text-align: center;
    font-size: 46px;
    color: #030303;
    font-weight: normal;
  }
  .buyOrderTips {
    margin: 0px;
    padding: 0px;
    li {
      text-indent: 35px;
      font-size: 24px;
      color: #999999;
    }
  }
</style>

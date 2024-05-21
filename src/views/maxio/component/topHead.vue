<template>
  <div class="top_head_box" @click="changeHeight" :class="[newType !== 'link' ? 'maxHeight' : 'hideHeight', newType]">
    <div class="my-wave-loader">
      <!-- head link-->
      <div class="my-wave_box" v-if="newType === 'link'">
        <div class="my-wave-loader-inner">
          <div class="my-wave-loader-block"></div>
          <div class="my-wave-loader-block"></div>
          <div class="my-wave-loader-block"></div>
          <div class="my-wave-loader-block"></div>
          <div class="my-wave-loader-block"></div>
          <div class="my-wave-loader-block"></div>
        </div>
        <div class="text_loading">{{ topText ? topText : 'Connecting...' }}</div>
        <div class="my-wave-loader-inner my_second_inner">
          <div class="my-wave-loader-block"></div>
          <div class="my-wave-loader-block"></div>
          <div class="my-wave-loader-block"></div>
          <div class="my-wave-loader-block"></div>
          <div class="my-wave-loader-block"></div>
          <div class="my-wave-loader-block"></div>
        </div>
        <div class="my-wave-loader-inner my_second_inner1">
          <div class="my-wave-loader-block"></div>
          <div class="my-wave-loader-block"></div>
          <div class="my-wave-loader-block"></div>
          <div class="my-wave-loader-block"></div>
          <div class="my-wave-loader-block"></div>
          <div class="my-wave-loader-block"></div>
        </div>
        <div class="my-wave-loader-inner my_second_inner2">
          <div class="my-wave-loader-block"></div>
          <div class="my-wave-loader-block"></div>
          <div class="my-wave-loader-block"></div>
          <div class="my-wave-loader-block"></div>
          <div class="my-wave-loader-block"></div>
          <div class="my-wave-loader-block"></div>
        </div>
      </div>

      <!-- head buy-->
      <div v-if="newType === 'buy'" class="topTextWrap">
        <div class="🤚">
          <div class="👉"></div>
          <div class="👉"></div>
          <div class="👉"></div>
          <div class="👉"></div>
          <div class="🌴"></div>
          <div class="👍"></div
        ></div>
        <div class="topText">
          <div class="top_loader">
            <div class="top_scanner">
              <span>purchasing...</span>
            </div>
          </div>
        </div>
      </div>

      <!-- head link-->
      <div class="my-wave_box" v-if="newType === 'offline'">
        <div class="my-wave-loader-inner">
          <div class="my-wave-loader-block"></div>
          <div class="my-wave-loader-block"></div>
          <div class="my-wave-loader-block"></div>
          <div class="my-wave-loader-block"></div>
          <div class="my-wave-loader-block"></div>
          <div class="my-wave-loader-block"></div>
        </div>
        <div class="text_loading">{{ topText ? topText : 'Connecting...' }}</div>
        <div class="my-wave-loader-inner my_second_inner">
          <div class="my-wave-loader-block"></div>
          <div class="my-wave-loader-block"></div>
          <div class="my-wave-loader-block"></div>
          <div class="my-wave-loader-block"></div>
          <div class="my-wave-loader-block"></div>
          <div class="my-wave-loader-block"></div>
        </div>
        <div class="my-wave-loader-inner my_second_inner1">
          <div class="my-wave-loader-block"></div>
          <div class="my-wave-loader-block"></div>
          <div class="my-wave-loader-block"></div>
          <div class="my-wave-loader-block"></div>
          <div class="my-wave-loader-block"></div>
          <div class="my-wave-loader-block"></div>
        </div>
        <div class="my-wave-loader-inner my_second_inner2">
          <div class="my-wave-loader-block"></div>
          <div class="my-wave-loader-block"></div>
          <div class="my-wave-loader-block"></div>
          <div class="my-wave-loader-block"></div>
          <div class="my-wave-loader-block"></div>
          <div class="my-wave-loader-block"></div>
        </div>
      </div>
    </div>

    <!-- content offline-->
    <div class="buy_pop" :class="[newType !== 'link' ? 'showBuy' : 'hideBuy']">
      <div class="closeImg" v-if="newType !== 'link'" @click="closeBuy"></div>
      <h3 class="buyOrderTitle" v-if="newType === 'buy'"> Pre-trading information</h3>
      <div class="storagebox_wrap" v-if="newType === 'buy'">
        <div class="storagebox">
          <img src="@/assets/VIP.svg" alt="" srcset="" />
          <div class="BaseBox">
            <div class="base_box1">
              <div
                ><span class="s1">{{ shopForm.quantity }} GB</span>
                <span class="s2">+</span>
                <span class="s1">{{ shopForm.week }} W</span></div
              >
            </div>
          </div>
        </div>
        <div class="price_box">
          <span class="s1 price_box_line">
            <span class="row_box_title">Upper Limit Total</span>
            <span class="row_box_value">{{ totalPrice }}<span>DMC</span></span>
          </span>
        </div>
      </div>
      <div class="bottom_btn" v-if="newType === 'buy'">
        <nut-progress
          v-if="buyOrderIsSuccess"
          :percentage="progressPercentage"
          :text-inside="true"
          size="large"
          status="active"
          stroke-color="linear-gradient(135deg, #18191b 0%, #eeb40a 45%, rgb(113, 99, 76) 83%, #eaeef9 100%)"
          style="margin: 30px auto"
          class="confirmBuy_btn"
        >
        </nut-progress>
        <nut-button block type="warning" :disabled="buyOrderIsSuccess" @click="confirmBuy" :loading="loading" v-if="showBuy">
          Confirm Buy
        </nut-button>
      </div>
      <h3 class="buyOrderTitle offLineTitle" v-if="newType === 'offline'"> 添加离线下载链接</h3>
      <div class="offline_box" v-if="newType === 'offline'">
        <nut-input v-model="newType" :border="false" />
      </div>
    </div>
  </div>
</template>

<script setup>
  import { reactive, toRefs, watch, onMounted, onUnmounted, onBeforeUnmount } from 'vue';
  import useUserAssets from '@/views/home/useUserAssets.ts';
  import { showToast, showDialog } from '@nutui/nutui';
  import { buy_order, node_order_buy, order_buy_state, node_order_search, get_average_price, query_node } from '@/api/amb';
  import { useRouter } from 'vue-router';
  import { useUserStore } from '@/store/modules/user';
  const { getUserAssets, cloudBalance } = useUserAssets();
  const userStore = useUserStore();
  const router = useRouter();
  const isHeight = ref(false);
  const props = defineProps({
    topType: String,
    topShow: Boolean,
    topText: String,
  });
  const state = reactive({
    shopForm: {
      quantity: 100,
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
  const dmc = computed(() => userStore.getUserInfo.dmc);
  const email = computed(() => userStore.getUserInfo.email);
  const uuid = computed(() => userStore.getUserInfo.uuid);
  const emits = defineEmits(['closeBuy']);
  const buyOrderIsSuccess = ref(false);
  const progressPercentage = ref(0);

  const { topType, topShow, topText } = toRefs(props);
  const newType = ref('link');
  const showBuyBox = ref(false);

  const changeHeight = () => {
    isHeight.value = !isHeight.value;
  };
  const initOrderPrice = async () => {
    return;
    node_order_search(priceNode.value, {
      week: state.shopForm.week,
      storage: state.shopForm.quantity,
      poolType: 'golden', //vofo.*  / golden
      size: 5,
    }).then((res) => {
      if (res.code == 200 && res.data.length) {
        curReferenceRate.value = res.data[0].price;
        deposit_ratio.value = res.data[0].depositRatio;
        showBuy.value = true;
      }
    });
  };
  //   watch(
  //     topShow,
  //     (val) => {
  //       isHeight.value = val;
  //       if (!val) {
  //         newType.value = 'link';
  //         newType.value = topType.value;
  //       } else {
  //         // newType.value = 'buy';
  //         newType.value = topType.value;
  //         initOrderPrice();
  //       }
  //     },
  //     { deep: true, immediate: true },
  //   );
  watch(
    topType,
    (val) => {
      if (val) {
        newType.value = val;
        console.log(newType.value, ' newType.value');
        if (newType.value === 'buy') {
          initOrderPrice();
        }
      }
    },
    { deep: true, immediate: true },
  );
  const closeBuy = () => {
    console.log('chils=====close');
    emits('closeBuy');
  };
  const totalPrice = computed(() => {
    let baseTotal = (
      (curReferenceRate.value / 10000) * state.shopForm.week * state.shopForm.quantity +
      (curReferenceRate.value / 10000) * deposit_ratio.value * state.shopForm.quantity
    ).toFixed(4);
    let floatTotal = (+baseTotal * (1 + state.shopForm.floating_ratio / 100)).toFixed(4);
    if (+cloudBalance.value >= baseTotal && +cloudBalance.value < floatTotal) {
      state.shopForm.floating_ratio = 0;
      return cloudBalance.value;
    } else {
      return floatTotal;
    }
  });
  const deposit_ratio_Price = computed(() => {
    return ((curReferenceRate.value / 10000) * deposit_ratio.value * state.shopForm.quantity).toFixed(4) || '0';
  });

  const queryPriceNode = () => {
    return query_node()
      .then((res) => {
        if (res.code == 200) {
          const nodeList = res.result.data.filter((el) => el.is_active);
          return true;
        } else {
          return false;
        }
      })
      .catch(() => {
        return false;
      });
  };
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
        }
      })
      .finally(() => {});
  };
  const confirmBuy = async () => {
    loading.value = true;
    await getUserAssets();
    if (+cloudBalance.value < +totalPrice.value) {
      let rechargeDMC = (totalPrice.value - cloudBalance.value).toFixed(4);
      showBuy.value = false;
      loading.value = false;
      showTop.value = false;
      const dmcOk = () => {
        router.push({ path: '/recharge', query: { rechargeDMC } });
        showBuy.value = true;
      };
      let src = require('@/assets/DMC_token.png');
      let str = `<img class="bind_img" src=${src} style="height:60px;"/>
      <p style='word-break:break-word;color:red;text-align:left;'>Insufficient balance and projected need to top up ${rechargeDMC}DMC</p>`;
      showDialog({
        title: 'The balance is insufficient',
        content: str,
        noCancelBtn: true,
        okText: 'Recharge',
        onOk: dmcOk,
      });
      showBuy.value = true;
      return false;
    }
    let params = {
      week: state.shopForm.week,
      floating_ratio: state.shopForm.floating_ratio / 100,
      pst: state.shopForm.quantity + '',
      total_price: (+totalPrice.value).toFixed(4),
    };
    const nodeRes = await buy_order(params);
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
      totalPrice: (+totalPrice.value).toFixed(4),
      memo: `${nodeInfo.value.buyOrderUuid}_Order_buy`,
      deviceType: 3,
      poolType: 'golden', //vofo.*  / golden
      terminalType: 2,
      foggieUserAddress: dmc.value,
      foggieEmail: email.value,
      foggieUserUuid: uuid.value,
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
                okText: 'Go Bucket',
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
                  setTimeout(() => {
                    getUserAssets();
                  }, 2000);
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
  onMounted(async () => {
    return;
    let res = await queryPriceNode();
    if (res) {
      getAveragePrice();
    }
    getUserAssets();
    initOrderPrice();
  });
</script>

<style lang="scss" scoped>
  .offline_box {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px 0;
    .nut-input {
      background: transparent !important;
      border: 1px solid #fff;
      width: 80%;
    }
  }
  .text_loading {
    opacity: 0.8;
    font-weight: bolder;
    color: #a1cbeb;
    font-style: italic;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    position: absolute;
    z-index: 0;

    --c: #9cc6e7;
    --w1: radial-gradient(100% 57% at top, #0000 100%, var(--c) 100.5%) no-repeat;
    --w2: radial-gradient(100% 57% at bottom, var(--c) 100%, #0000 100.5%) no-repeat;
    background: var(--w1), var(--w2), var(--w1), var(--w2);
    background-position-x:
      -200%,
      -100%,
      0%,
      100%;
    background-position-y: 100%;
    background-size: 50.5% 100%;
    animation: m 1s infinite linear;
    font-weight: bold;
    color: transparent;
    -webkit-background-clip: text; /*文本裁切*/
    -webkit-text-stroke: 2px var(--c);
    @keyframes m {
      0% {
        background-position-x:
          -200%,
          -100%,
          0%,
          100%;
      }
      100% {
        background-position-x: 0%, 100%, 200%, 300%;
      }
    }
  }
  @keyframes wave {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }

  .top_head_box {
    border-radius: 50px;
    width: 60%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0;
    margin: 0px auto 20px;
    cursor: pointer;
    transition: ease 0.2s;
    transition: all 0.9s ease;
    position: relative;
    // background: #222;
  }
  .my-wave-loader {
    border-radius: 50px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    cursor: pointer;
    transition: ease 0.2s;
    position: relative;
    background: #222;
    transition: all 0.9s ease;
    background: repeating-linear-gradient(
        to bottom,
        transparent 0%,
        rgb(103 118 124 / 60%) 1px,
        rgb(0, 0, 0) 0.4vw,
        rgba(64, 144, 181, 0.3019607843) 0.666667vw,
        #3c4143 0.533333vw,
        transparent 0.5%
      ),
      repeating-linear-gradient(to left, hsl(208.97deg 32.58% 17.45%) 100%, hsl(295deg 4.19% 5.84% / 99%) 100%);
  }
  .maxHeight {
    height: 150px;
    // height: 110px;
    // transform: translateY(-10px);
  }
  .buy {
    width: 70%;
    height: 400px;
    height: auto;
    // border: 1px solid yellow;
    // transform: translateY(100px);
    // border: 2px solid #17feff;
    // box-shadow: #d3d3eb 0px -3px 8px 2px;
    // position: relative;
  }
  .closeImg {
    background: url('@/assets/maxio/close.svg');
    width: 80px;
    height: 80px;
    position: absolute;
    top: -32px;
    right: -30px;
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center center;
    cursor: pointer;
    z-index: 999;
    &:hover {
      transform: scale(1.1);
    }
  }
  .hideHeight {
    height: 50px;
    height: 100px;
  }
  .my-wave_box {
    width: 70%;
    height: 100%;
    // background: #ffffff2b;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .my-wave-loader:before {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    border-radius: 50%;
  }

  .my-wave-loader-inner {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 6px;
    z-index: 8;
    opacity: 0.6;
  }

  .my-wave-loader-block {
    display: inline-block;
    width: 3px;
    height: 10px;
    margin: 4px;
    background-color: #41c0df;
    box-shadow: 0 0 20px #41c0df;
    animation: my-wave-loader_562 2.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  }
  .my_second_inner {
    .my-wave-loader-block {
      background-color: #578d9b;
      box-shadow: 0 0 20px #578d9b;
    }
  }
  .my_second_inner1 {
    .my-wave-loader-block {
      background-color: #9026dbcc;
      box-shadow: 0 0 20px #9026dbcc;
    }
  }
  .my_second_inner2 {
    .my-wave-loader-block {
      background-color: #cf32ce;
      box-shadow: 0 0 20px #cf32ce;
    }
  }

  .my-wave-loader-block:nth-child(1) {
    animation-delay: 0.1s;
  }

  .my-wave-loader-block:nth-child(2) {
    animation-delay: 0.2s;
  }

  .my-wave-loader-block:nth-child(3) {
    animation-delay: 0.3s;
  }

  .my-wave-loader-block:nth-child(4) {
    animation-delay: 0.4s;
  }

  .my-wave-loader-block:nth-child(5) {
    animation-delay: 0.5s;
  }

  .my-wave-loader-block:nth-child(6) {
    animation-delay: 0.6s;
  }

  .my-wave-loader-block:nth-child(7) {
    animation-delay: 0.7s;
  }

  .my-wave-loader-block:nth-child(8) {
    animation-delay: 0.8s;
  }
  .my-wave-loader-block:nth-child(9) {
    animation-delay: 0.9s;
  }
  .my-wave-loader-block:nth-child(10) {
    animation-delay: 1s;
  }
  .my-wave-loader-block:nth-child(8) {
    animation-delay: 1.1s;
  }

  @keyframes my-wave-loader_562 {
    0% {
      transform: scale(1);
      box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
    }

    20% {
      transform: scale(2, 5.5);
      box-shadow: 0 0 50px rgba(255, 255, 255, 0.7);
    }

    40% {
      transform: scale(1);
      box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
    }
  }
</style>
<style lang="scss">
  .buy_pop {
    transition: all 0.9s ease;
    width: 0;
    height: 0;
    padding-bottom: 20px;
    margin-top: 20px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    position: relative;
    background: #222;
    border-radius: 10px;
    transform: translateY(80px);

    position: relative;
    background: repeating-linear-gradient(
        to bottom,
        transparent 0%,
        rgb(103 118 124 / 60%) 1px,
        rgb(0, 0, 0) 0.4vw,
        rgba(64, 144, 181, 0.3019607843) 0.666667vw,
        #3c4143 0.533333vw,
        transparent 0.5%
      ),
      repeating-linear-gradient(to left, hsl(208.97deg 32.58% 17.45%) 100%, hsl(295deg 4.19% 5.84% / 99%) 100%);
    .buyOrderTitle {
      text-align: center;
      margin: 20px 0;
      position: relative;
      color: transparent;
      font-size: 1.2rem;
      position: relative;
      overflow: hidden;
      &::before {
        content: 'Pre-trading information';
        position: absolute;
        top: 0;
        left: 0;
        width: 0;
        height: 100%;
        border-right: 4px solid #17feff;
        overflow: hidden;
        color: #17feff;
        animation: load91371 3s linear infinite;
      }
    }
    .offLineTitle {
      &::before {
        content: '添加离线下载链接';
      }
    }
    .price_box {
      margin: 0px 10px;
      padding: 10px;
      padding-left: 22px;
      font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }
    .price_box_line {
      display: flex;
      flex-direction: column;
      .row_box_value {
        text-align: center;
        margin: 8px 0;
        font-weight: bolder;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-size: 50px;
      }
    }
    .storagebox_wrap {
      background: linear-gradient(135deg, #18191b 0%, #eeb40a 45%, rgb(113 99 76) 83%, #eaeef9 100%);
      background: linear-gradient(187deg, #41d6da52 0%, #17feffd9 45%, rgb(58 188 193 / 59%) 83%, #4cf6f8 100%);
      color: #fff;
      margin: 0px 40px;
      border-radius: 10px;
      padding: 10px;
      font-weight: bolder;
      border: 1px dashed #fff;
    }
    .storagebox {
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      margin: 0px 4px;
      padding: 4px;
      font-weight: bolder;
      img {
        width: 80px;
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
        white-space: nowrap;
        .s1 {
          font-weight: 700px;
          font-size: 36px;
        }
        .s2 {
          font-weight: 600;
          font-size: 30px;
          color: #a52a17;
          color: #ffffff;
          margin: 0 10px;
        }
      }
    }

    .storageDetail {
      margin: 0px 40px;
      border-radius: 10px;
      //   margin-top: 40px;
      font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
      font-weight: bolder;

      .rowBox {
        .row_box {
          display: flex;
          justify-content: space-between;
          padding: 20px 10px;
          border-bottom: 2px dashed #616161;
          flex-direction: column;
          .row_box_title,
          .row_box_value {
            // font-weight: 600;
            font-size: 34px;
            color: #5e5e5e;
            color: #000;
            color: #fff;
            span {
              font-size: 18px;
              color: #ffa92a;
              -webkit-background-clip: text;
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
        height: 80px;
        // background-color: #2d2e41 !important;
        // background: linear-gradient(135deg, #5200ae 0%, #5200ae 45%, #4062bb 83%, #4062bb 100%);
        // background: linear-gradient(135deg, #1d2027 0%, #f1bc23 45%, rgb(31 28 23) 83%, #eaeef9 100%);
        // background: linear-gradient(135deg, #18191b 0%, #eeb40a 45%, rgb(113 99 76) 83%, #eaeef9 100%);
        background: linear-gradient(135deg, #41d6da52 0%, #17feffd9 45%, rgb(58 188 193 / 59%) 83%, #4cf6f8 100%);
        background: linear-gradient(
          129deg,
          rgb(65 214 218) 0%,
          rgba(23, 254, 255, 0.8509803922) 45%,
          rgb(58 188 193 / 0%) 83%,
          #4cf6f8 100%
        );
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
  .showBuy {
    border: 2px solid #17feff;
    box-shadow: #d3d3eb 0px -3px 8px 2px;
    width: 100%;
    height: 100%;
  }
  .hideBuy {
    overflow: hidden;
  }
</style>

<style lang="scss">
  .topTextWrap {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .topText {
    // margin-top: 20px;
    font-weight: bold;
    .top_scanner span {
      color: transparent;
      font-size: 1.4rem;
      position: relative;
      overflow: hidden;
    }

    .top_scanner span::before {
      content: 'Purchasing...';
      position: absolute;
      top: 0;
      left: 0;
      width: 0;
      height: 100%;
      border-right: 4px solid #17feff;
      overflow: hidden;
      color: #17feff;
      animation: load91371 2s linear infinite;
    }

    @keyframes load91371 {
      0%,
      10%,
      100% {
        width: 0;
      }

      10%,
      20%,
      30%,
      40%,
      50%,
      60%,
      70%,
      80%,
      90%,
      100% {
        border-right-color: transparent;
      }

      11%,
      21%,
      31%,
      41%,
      51%,
      61%,
      71%,
      81%,
      91% {
        border-right-color: #17feff;
      }

      60%,
      80% {
        width: 100%;
      }
    }
  }
  .🤚 {
    --skin-color: #e4c560;
    --tap-speed: 0.6s;
    --tap-stagger: 0.1s;
    position: relative;
    width: 80px;
    height: 60px;
    margin-left: 80px;
    transform: scale(0.6);
  }

  .🤚:before {
    content: '';
    display: block;
    width: 180%;
    height: 75%;
    position: absolute;
    top: 70%;
    right: 20%;
    background-color: black;
    border-radius: 40px 10px;
    filter: blur(10px);
    opacity: 0.3;
  }

  .🌴 {
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: var(--skin-color);
    border-radius: 10px 40px;
  }

  .👍 {
    position: absolute;
    width: 120%;
    height: 38px;
    background-color: var(--skin-color);
    bottom: -18%;
    right: 1%;
    transform-origin: calc(100% - 20px) 20px;
    transform: rotate(-20deg);
    border-radius: 30px 20px 20px 10px;
    border-bottom: 2px solid rgba(0, 0, 0, 0.1);
    border-left: 2px solid rgba(0, 0, 0, 0.1);
  }

  .👍:after {
    width: 20%;
    height: 60%;
    content: '';
    background-color: rgba(255, 255, 255, 0.3);
    position: absolute;
    bottom: -8%;
    left: 5px;
    border-radius: 60% 10% 10% 30%;
    border-right: 2px solid rgba(0, 0, 0, 0.05);
  }

  .👉 {
    position: absolute;
    width: 80%;
    height: 35px;
    background-color: var(--skin-color);
    bottom: 32%;
    right: 64%;
    transform-origin: 100% 20px;
    animation-duration: calc(var(--tap-speed) * 2);
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    transform: rotate(10deg);
  }

  .👉:before {
    content: '';
    position: absolute;
    width: 140%;
    height: 30px;
    background-color: var(--skin-color);
    bottom: 8%;
    right: 65%;
    transform-origin: calc(100% - 20px) 20px;
    transform: rotate(-60deg);
    border-radius: 20px;
  }

  .👉:nth-child(1) {
    animation-delay: 0;
    filter: brightness(70%);
    animation-name: tap-upper-1;
  }

  .👉:nth-child(2) {
    animation-delay: var(--tap-stagger);
    filter: brightness(80%);
    animation-name: tap-upper-2;
  }

  .👉:nth-child(3) {
    animation-delay: calc(var(--tap-stagger) * 2);
    filter: brightness(90%);
    animation-name: tap-upper-3;
  }

  .👉:nth-child(4) {
    animation-delay: calc(var(--tap-stagger) * 3);
    filter: brightness(100%);
    animation-name: tap-upper-4;
  }

  @keyframes tap-upper-1 {
    0%,
    50%,
    100% {
      transform: rotate(10deg) scale(0.4);
    }

    40% {
      transform: rotate(50deg) scale(0.4);
    }
  }

  @keyframes tap-upper-2 {
    0%,
    50%,
    100% {
      transform: rotate(10deg) scale(0.6);
    }

    40% {
      transform: rotate(50deg) scale(0.6);
    }
  }

  @keyframes tap-upper-3 {
    0%,
    50%,
    100% {
      transform: rotate(10deg) scale(0.8);
    }

    40% {
      transform: rotate(50deg) scale(0.8);
    }
  }

  @keyframes tap-upper-4 {
    0%,
    50%,
    100% {
      transform: rotate(10deg) scale(1);
    }

    40% {
      transform: rotate(50deg) scale(1);
    }
  }
</style>

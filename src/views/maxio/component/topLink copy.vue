<template>
  <div class="my-wave-loader" @click="changeHeight" :class="[isHeight ? 'maxHeight' : 'hideHeight', newType]">
    <div v-if="newType === 'buy'" class="buy_pop">
      <h3 class="buyOrderTitle"> Pre-trading information</h3>
      <div class="storagebox">
        <img src="@/assets/VIP.svg" alt="" srcset="" />
        <div class="BaseBox">
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
          <div class="row_box" style="border-bottom-style: solid" v-if="shopForm.floating_ratio">
            <span class="row_box_title">Variation Price</span>
            <span class="row_box_value">
              {{ ((+base_Price + +deposit_ratio_Price) * (shopForm.floating_ratio / 100)).toFixed(4) }}
              &nbsp;<span>DMC</span></span
            >
          </div>
          <div class="row_box">
            <span class="row_box_title">Lowest Limit Total</span>
            <span class="row_box_value">{{ (+base_Price + +deposit_ratio_Price).toFixed(4) }} <span>DMC</span></span>
          </div>
          <div class="row_box">
            <span class="row_box_title">Upper Limit Total</span>
            <span class="row_box_value">{{ totalPrice }} <span>DMC</span></span>
          </div>
        </div>
      </div>
      <div class="bottom_btn">
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
        <nut-button block type="warning" :disabled="buyOrderIsSuccess" @click="confirmBuy" :loading="loading"> Confirm Buy </nut-button>
      </div>
    </div>
    <div class="my-wave_box" v-else>
      <div class="my-wave-loader-inner">
        <div class="my-wave-loader-block"></div>
        <div class="my-wave-loader-block"></div>
        <div class="my-wave-loader-block"></div>
        <div class="my-wave-loader-block"></div>
        <div class="my-wave-loader-block"></div>
        <div class="my-wave-loader-block"></div>
      </div>
      <div class="text_loading">Connecting...</div>
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
</template>

<script setup>
  import { reactive, toRefs, watch, onMounted, onUnmounted, onBeforeUnmount } from 'vue';
  const isHeight = ref(false);
  const props = defineProps({
    topType: String,
    topShow: Boolean,
  });
  const state = reactive({
    shopForm: {
      quantity: 100,
      week: 24,
      floating_ratio: 5,
    },
    base_Price: 0,
    curReferenceRate: 0,
    deposit_ratio_Price: 0,
    totalPrice: 0,
  });
  const { buyDisabled, priceNode, nodeInfo, showBuy, middle_price, deposit_ratio, showTop, shopForm, curReferenceRate, loading } =
    toRefs(state);
  const buyOrderIsSuccess = ref(false);
  const progressPercentage = ref(0);

  const { topType, topShow } = toRefs(props);
  const newType = ref('link');
  const showBuyBox = ref(false);

  const changeHeight = () => {
    isHeight.value = !isHeight.value;
  };
  watch(
    topShow,
    (val) => {
      console.log(val, 'topShowtopShowtopShow');
      isHeight.value = val;
      if (!val) {
        newType.value = 'link';
        console.log(newType.value, '0000 topType.value');
      } else {
        newType.value = 'buy';
        console.log(newType.value, '1111 topType.value');
      }
      console.log(newType.value, ' topType.value');
      //   if (val === 'buy') {
      //     isHeight.value
      //     showBuyBox.value = true;
      //     changeHeight();
      //   }
    },
    { deep: true, immediate: true },
  );
</script>

<style lang="scss" scoped>
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

  //   .top_link_box {
  //     width: 100%;
  //     position: fixed;
  //     top: 40px;
  //     left: 0;
  //     display: flex;
  //     align-items: center;
  //   }
  .my-wave-loader {
    border-radius: 50px;
    width: 60%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0px auto 20px;
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
  }
  .buy {
    width: 80%;
    height: 400px;
    height: auto;
    border: 1px solid yellow;
  }
  .hideHeight {
    height: 50px;
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
    padding-bottom: 20px;
    // background-color: #d5d5d5 !important;
    // background: #fff !important;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    .buyOrderTitle {
      text-align: center;
      margin: 10px 0;
    }
    .storagebox {
      margin-top: 10px;
      display: grid;
      grid-template-columns: 150px auto;
      gap: 20px;
      align-items: center;
      padding: 20px 20px;
      background: linear-gradient(135deg, #18191b 0%, #eeb40a 45%, rgb(113 99 76) 83%, #eaeef9 100%);

      color: #fff;
      margin: 0px 40px;
      border-radius: 10px;
      & > img {
        width: 80%;
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
          font-size: 40px;
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
      padding: 30px 20px;
      background-color: #ffffff;
      background-color: #ffffffad;
      background-color: #3d4448;
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
        height: 100px;
        // background-color: #2d2e41 !important;
        background: linear-gradient(135deg, #5200ae 0%, #5200ae 45%, #4062bb 83%, #4062bb 100%);
        background: linear-gradient(135deg, #1d2027 0%, #f1bc23 45%, rgb(31 28 23) 83%, #eaeef9 100%);
        background: linear-gradient(135deg, #18191b 0%, #eeb40a 45%, rgb(113 99 76) 83%, #eaeef9 100%);
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

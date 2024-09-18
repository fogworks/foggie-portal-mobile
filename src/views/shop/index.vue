<template>
  <div style="height: auto; padding-bottom: 50px">
    <div class="out_blue">
      <div class="inside_blue">
        <IconArrowLeft class="back_img" @click="$router.go(-1)"></IconArrowLeft>
        <div class="balance_options">
        </div>
      </div>
    </div>
    <div class="vip_order_choose">
      <div class="vip_title">Select space and time</div>
      <div class="img_list">
        <!-- <img src="@/assets/vipOrder.png" @click="submit" /> -->
        <img src="@/assets/vipOrder.png" class="customOrder" @click="toBuy" />
      </div>
    </div>
    <div class="space-info" v-if="isShowSpaceInfo">
      <p>Weeks: {{ shopForm.week }}</p>
      <p>Space: {{ shopForm.quantity }}GB</p>
      <p>Price: {{ calc_price.total }}</p>
      <p  @click="copySecret(address)">Payment account: {{ address }} <IconCopy color="#246bf7"></IconCopy></p>
      <p  @click="copySecret(calc_price.to)">Receiving account: {{ calc_price.to }} <IconCopy color="#246bf7"></IconCopy></p>

      <nut-input v-model="txid" placeholder="Please enter the transaction hash" />
      <nut-button type="primary" @click="confirmBuy">Confirm</nut-button>
    </div>

    <Teleport to="body">
      <nut-popup position="top" :style="{ height: '480px' }" round v-model:visible="showTop">
        <nut-form class="query_form" :model-value="shopForm">
          <div class="custom_order">Custom</div>
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
          <nut-form-item label="Space(GB) Min: 100 GB">
            <nut-input-number
              @focus="buyDisabled = true"
              @blur="buyDisabled = false"
              :max="maxSpace"
              :min="1"
              decimal-places="0"
              v-model="shopForm.quantity"
              step="1"
              class="nut-input-text"
              placeholder="Space"
            />
          </nut-form-item>
          <div style="padding: 10px 20px; font-size: 11px; font-style: italic">
            The maximum data security guarantee for the chain is only 52 weeks
          </div>
          <div class="bottom_btn">
            <nut-button type="warning" plain :loading="loading" @click="showTop = false"> Cancel </nut-button>
            <nut-button type="warning" @click="submit" :disabled="buyDisabled" :loading="loading"> Buy </nut-button>
          </div>
        </nut-form>
      </nut-popup>
    </Teleport>

   
  </div>
</template>

<script setup lang="ts" name="Shop">
  import IconArrowLeft from '~icons/home/arrow-left.svg';
  import { toRefs, reactive, onMounted } from 'vue';
  import IconCopy from '~icons/home/copy.svg';

  import { dm_calc_price, get_available_capacity, dm_order_buy } from '@/api';
  import { showToast } from '@nutui/nutui';


  const isShowSpaceInfo = ref(true);

  const calc_price = ref({
    orderId: '',
    total: '',
    contract: '',
    to: '',
  });

  const txid = ref('');

  import { useUserStore } from '@/store/modules/user';
  const userStore = useUserStore();

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
  const { buyDisabled, showTop, shopForm, loading } = toRefs(state);

  const address = computed(() => userStore.getUserInfo?.address);

  async function submit() {
    const d = {
      wallet: address.value,
      space: shopForm.value.quantity,
      epoch: shopForm.value.week,
    };
    dm_calc_price(d).then((res) => {
      if (res.code == 200) {
        calc_price.value = res.data;
        isShowSpaceInfo.value = true;
        showTop.value = false;
      }
    });
  }

  const confirmBuy = async () => {
    // alert(txid.value);
    // txid.value = '0x2bbed9335d1a23ad51b1e4ea7baf3cafe49d466302c557705ea95027451fd7fc';
    if (!txid.value) {
      return;
    }
    const d = {
      // orderId: 8,
      orderId: calc_price.value.orderId,
      transactionId: txid.value,
    }
    dm_order_buy(d).then((res) => {
      if (res.code == 200) {
        showToast.success('Order success');
        isShowSpaceInfo.value = false;
      }
    });
  };

  const maxSpace = ref(0);

  const copySecret = (key: string) => {
    var input = document.createElement('textarea');
    input.value = key;
    document.body.appendChild(input);
    input.select();
    document.execCommand('Copy');
    document.body.removeChild(input);
    showToast.success('Copy succeeded');
  }

  const toBuy = () => {
    showTop.value = true;
    isShowSpaceInfo.value = false;
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
    get_available_capacity().then((res) => {
      if (res.code == 200) {
        maxSpace.value = res.data;
      }
    });
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
      //   background-image: linear-gradient(260deg, #4062bb 0%, #5200ae 74%);
      //   background: var(--nut-button-warning-background-color, linear-gradient(135deg, #5200ae 0%, #5200ae 45%, #4062bb 83%, #4062bb 100%));
      background: linear-gradient(135deg, #1d2027 0%, #f1bc23 45%, rgb(255, 158, 13) 83%, #4062bb 100%);
      background: linear-gradient(135deg, #1d2027 0%, #f1bc23 45%, rgb(31 28 23) 83%, #eaeef9 100%);
      background: linear-gradient(135deg, #18191b 0%, #eeb40a 45%, rgb(113 99 76) 83%, #eaeef9 100%);

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
              //   background: linear-gradient(135deg, #5200ae 0%, #5200ae 45%, #4062bb 83%, #4062bb 100%);
              //   color: transparent;
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
<style lang="scss" scoped>
  .nut-input-text {
    :deep {
      input {
        width: 5rem;
      }
    }
  }
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
    height: 120px;
    // background: #43a3fd;
    border-radius: 0 0 50px 50px;

    .inside_blue {
      z-index: 999;
      position: absolute;
      top: 0;
      width: 100%;
      height: 100px;
      background: #5264f9;
      background: #c2d0dc36;
      border-radius: 0 0 50px 50px;
      overflow: hidden;
      //   background-image: linear-gradient(260deg, #4062bb 0%, #5200ae 74%);
      //   background-image: linear-gradient(260deg, #98660b 0%, #0f0e0d 74%);

      .back_img {
        position: absolute;
        left: 20px;
        top: 20px;
        width: 60px;
        height: 60px;
        color: #fff;
      }

      .title {
        color: #fff;
        font-size: 1.5rem;
        text-align: center;
        margin-top: 40px;
        width: 100%;
      }

      .total_balance {
        color: #b9d4ff;
        font-size: 1.5rem;
        // margin: 20px auto 0px;
        text-align: center;
        color: #fbcf87;
      }

      .total_balance_value {
        font-weight: 250;
        color: #fff;
        font-size: 1.75rem;
        text-align: center;
        margin-top: 0px;
      }

      // &::before,
      // &::after {
      //   content: '';
      //   position: absolute;
      //   top: -10px;
      //   right: -240px;
      //   transform: rotate(55deg);
      //   display: block;
      //   width: 350px;
      //   height: 350px;
      //   border-radius: 60px;
      //   border: 5px solid #c72ff8;
      //   border: 0.666667vw solid #be8120;
      // }

      // &::after {
      //   transform: rotate(39deg);
      //   border: 5px solid #3eb9ff;
      //   border: 0.666667vw solid #9c8f7b;
      // }
    }
  }

  .middle_content {
    padding: 20px;
    // margin-top: 50px;

    .middle_title {
      text-align: center;
      font-weight: 600;
      margin-top: 40px;
      margin-bottom: 20px;
      color: #000;
    }
    .title {
      text-align: center;
      font-size: 24px;
      font-style: italic;
      margin-top: 7px;
      color: orange;
      font-weight: bold;
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
      background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);

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
        color: #fff;
        font-weight: bold;
        background: #fa8596;
        background: linear-gradient(263deg, #000000, #f3cf0a);
        background-image: linear-gradient(260deg, #4062bb 0%, #5200ae 74%);
        animation: blink 3s linear infinite; /* 使用动画响应效果 */

        &::after {
          background: #ffc1c1;
          background: #f1d110;
          background: linear-gradient(168deg, #b48ce0, #7f4ad7);
        }
      }
      /* 定义动画 */
      @keyframes blink {
        0% {
          color: #f8f8f8; /* 定义颜色变化 */
        }
        50% {
          color: #fff;
        }
        100% {
          color: #f9f9f9;
        }
      }
    }
  }

  .out_price_box {
    padding: 20px;
    background: #fff;
    // border: 5px solid #f3d1a2;
    margin: 20px;
    // margin-top: 70px;
    border-radius: 10px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    color: #fff;
    background: rgba(255, 255, 255, 0.1490196078);
    // span {
    //   font-size: 16px;
    //   color: #666;
    //   display: none;
    // }
    p {
      padding: 0 20px;
      //   color: #999999;
      font-size: 1.1rem;
      font-weight: bold;
      display: flex;
      justify-content: space-between;
      align-items: center;

      svg {
        width: 40px;
        height: 40px;
        color: #5264f9;
      }
    }
    .vip_title {
      font-weight: bold;
      margin-left: -30px;
      font-size: 32px;
      //   color: #000;
      padding-left: 20px;
    }
  }

  .buy_btn {
    height: 100px;
    font-size: 40px;
    // margin: 40px 0;
    position: fixed;
    bottom: 150px;
    width: 90vw;
    left: 50%;
    transform: translateX(-50%);
    background-image: linear-gradient(260deg, #4062bb 0%, #5200ae 74%);
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
    font-size: 34px;
    // font-weight: bold;
    overflow: hidden;
    background-image: linear-gradient(260deg, #4062bb 0%, #5200ae 74%);
    background-image: linear-gradient(260deg, #1d2027 0%, #1a181c 74%);

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
      background: linear-gradient(154deg, #32323b -2%, #f9e1ba 11%, rgba(198, 48, 248, 0) 91%);
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
      background: linear-gradient(149deg, #eb7c0f 0%, #f1bc23 98%);
    }
  }

  .query_form {
    padding: 0 20px 20px 20px;
    .custom_order {
      text-align: center;
      font-size: 36px;
    }
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
      .nut-input-number {
        user-select: none;
        .nut-input-number__icon {
          touch-action: manipulation;
          svg {
            --nut-inputnumber-icon-size: 2rem;
          }
        }
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
        font-size: 32px;
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
          background: linear-gradient(135deg, #c8d4ec 0%, #e9b212 25%, rgb(35 23 3) 83%, #eaeef9 100%);
          border: none;

          &.nut-button--disabled {
            background: #aaa !important;
            opacity: 0.28 !important;
          }
          &.nut-button--plain {
            background: #fff !important;
            border: 1px solid #262016;
            color: #2b1d06;
          }
        }
      }
    }
  }

  .balance_options {
    display: flex;
    align-items: end;
    justify-content: end;
    width: 100%;
    margin-top: 20px;
  }
  .action_item {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    text-decoration: none;
    padding: 4px 20px;
    background: yellow;
    width: auto;
    border-radius: 20px;
    // margin: 0 auto;
    // margin-top: 20px;
    margin-right: 60px;
    background: #f3d2a6;

    a {
      text-decoration: none;
      color: #000 !important;
      font-weight: bold;
    }
    // margin-top: 50px;
    // &:first-child {
    //   border-right: 1px solid #ccc;
    //   align-items: end;
    // }

    img {
      display: block;
      width: 100px;
      margin-bottom: 10px;
    }
  }
  .recharge_item {
    background: none;
    a {
      color: #fff !important;
      text-decoration: underline;
      font-size: 20px !important;
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
<style lang="scss" scoped>
  .vip_right {
    // border: 5px solid #f3d1a2;
    margin: 20px;
    border-radius: 10px;
    background: #fff;
    padding: 20px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    background: rgba(255, 255, 255, 0.1490196078);
    color: #fff;
    .vip_title {
      font-size: 34px;
      font-weight: bold;
      margin-bottom: 20px;
    }
    .vip_list {
      display: flex;
      flex-wrap: wrap;
      .vip_list_item {
        margin-bottom: 20px;
        width: 50%;
        display: flex;
        align-items: center;
        // justify-content: center;
        .vip_list_img {
          width: 100px;
          height: 100px;
          // background-image: linear-gradient(260deg, #4062bb 0%, #5200ae 74%);
          background: #32323b;
          background: #c6c6d787;
          border-radius: 50%;
          margin-right: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          img {
            width: 50px;
            height: 50px;
          }
        }
        .vip_list_title {
          font-weight: bold;
          font-size: 26px;
        }
        .vip_list_sub_title {
          font-size: 18px;
          color: #333;
          color: #fff;
          white-space: nowrap;
        }
      }
    }
  }
  .vip_order_choose {
    border: 5px solid #f3d1a2;
    margin: 20px;
    border-radius: 10px;
    background: #fff;
    padding: 20px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    margin-top: 70px;
    color: #fff;
    background: #ffffff26;
    .vip_title {
      font-size: 34px;
      font-weight: bold;
      margin-bottom: 20px;
    }
    padding-bottom: 20px;
    .img_list {
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
    img {
      width: 280px;
      height: 280px;
      cursor: pointer;
      &:hover {
        transform: scale(1.1);
      }
    }
    .customOrder {
      margin-top: 10px;
    }
  }
  .space-info {
    color: #fff;
  }
</style>

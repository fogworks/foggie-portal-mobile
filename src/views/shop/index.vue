<template>
  <div class="out_blue">
    <div class="inside_blue">
      <IconArrowLeft class="back_img" @click="$router.go(-1)"></IconArrowLeft>
      <p class="title">Buy</p>
      <p class="total_balance">Total Balance</p>
      <p class="total_balance_value">{{ cloudBalance }} DMC</p>
    </div>
  </div>
  <div class="middle_content">
    <p class="middle_title">VIP orders will receive a higher amount of revenue</p>
    <div class="product_box">
      <div class="product_card">
        <p>General Orders</p>
        <p>{{ perTBIncome }} DMC/TB</p>
      </div>
      <img src="@/assets/arrow-right.svg" alt="" />
      <div class="product_card">
        <p>VIP Orders</p>
        <p>20 DMC/TB</p>
      </div>
    </div>
  </div>
  <div class="out_price_box">
    <p>VIP Order <IconSetting @click="showTop = true"></IconSetting></p>
    <div class="price_box">
      Current market price: <br />
      100TB = 222.0000 DMC
    </div>
  </div>
  <div style="margin: 0 20px 40px">
    <nut-button block class="buy_btn" type="info" @click="submit" :loading="loading"> Buy </nut-button>
  </div>
  <nut-popup position="top" :style="{ height: '80%' }" v-model:visible="showTop">
    <nut-form class="query_form" :model-value="shopForm">
      <nut-form-item label="Service Period">
        <nut-radio-group class="week_radio" v-model="shopForm.week" direction="horizontal">
          <nut-radio shape="button" :label="52">52 weeks</nut-radio>
          <nut-radio shape="button" :label="38">38 weeks</nut-radio>
          <nut-radio shape="button" :label="25">25 weeks</nut-radio>
        </nut-radio-group>
      </nut-form-item>
      <nut-form-item label="OR">
        <nut-range hidden-range v-model="shopForm.week" :max="52" :min="25" />
      </nut-form-item>
      <nut-form-item label="Markup">
        <nut-range hidden-range v-model="shopForm.floating_ratio" :max="100" :min="0" />
      </nut-form-item>
      <nut-form-item label="Space(TB)">
        <nut-input-number :min="100" decimal-places="0" v-model="shopForm.quantity" step="1" class="nut-input-text" placeholder="Space" />
      </nut-form-item>
      <div style="text-align: center" class="order-tip">
        <!-- Purchase
        <strong>
          {{ shopForm.quantity > 0 ? shopForm.quantity : '--' }}
        </strong>
        GB,lasts <strong> 25 </strong> weeks and allows a premium of <strong> {{ shopForm.floating_ratio }}% </strong> for orders totaling
        about
        <br /> -->
        <strong> Total </strong>
        <strong class="price"> {{ totalPrice || '--' }} DMC </strong>
        <!-- <nut-price :price="totalPrice" :decimal-digits="4" size="large" /> -->
      </div>
      <div class="bottom_btn">
        <nut-button type="warning" plain @click="showTop = false"> Cancel </nut-button>
        <nut-button type="warning" @click="submit" :loading="loading"> Buy </nut-button>
      </div>
    </nut-form>
  </nut-popup>
</template>

<script setup lang="ts" name="Shop">
  import IconArrowLeft from '~icons/home/arrow-left.svg';
  import IconSetting from '~icons/home/setting.svg';
  import { toRefs, reactive, onMounted } from 'vue';
  import { getCurReferenceRate } from '@/api';
  import { buy_order, node_order_buy } from '@/api/amb';
  import { showToast } from '@nutui/nutui';
  import { useRouter } from 'vue-router';
  import useDmcTrade from './useDmcTrade.js';
  import useUserAssets from '../home/useUserAssets.ts';

  // import useUpdateDMC from './useUpdateDMC';
  // const { getAmbDmc, targetAccount } = useUpdateDMC();
  const { getUserAssets, cloudBalance } = useUserAssets();
  const { perTBIncome } = useDmcTrade();
  const router = useRouter();
  const state = reactive({
    shopForm: {
      quantity: 1 as number,
      week: 25,
      floating_ratio: 0,
    },
    loading: false,
    curReferenceRate: 0,
    showTop: false,
  });
  const { showTop, shopForm, curReferenceRate, loading } = toRefs(state);
  function loadCurReferenceRate() {
    return getCurReferenceRate()
      .then((res: any) => {
        curReferenceRate.value = res;
      })
      .catch(() => {
        setTimeout(() => {
          loadCurReferenceRate();
        }, 2000);
      });
  }
  const totalPrice = computed(() => {
    let total = +curReferenceRate.value * 10000 * state.shopForm.week * state.shopForm.quantity * (1 + state.shopForm.floating_ratio / 100);
    total = Math.round(total) / 10000;
    return +total.toFixed(4) > 0 ? total.toFixed(4) : '--';
  });

  async function submit() {
    loading.value = true;
    await loadCurReferenceRate();
    if (cloudBalance.value < totalPrice.value) {
      let rechargeDMC = (totalPrice.value - cloudBalance.value).toFixed(4);
      showToast.text(`Insufficient balance and projected need to top up ${rechargeDMC}DMC`);
      loading.value = false;
      return false;
    }
    let params = {
      week: state.shopForm.week,
      floating_ratio: state.shopForm.floating_ratio,
      pst: state.shopForm.quantity.toFixed(0),
    };
    buy_order(params)
      .then(async (res) => {
        if (res.code == 200) {
          // let nodeIp ='http://'+ res.result.node_address;
          // let nodeIp = 'http://154.31.41.124:18080';
          let nodeIp = '';
          let buyOrderUuid = res.result.uuid;
          let amb_user_uuid = res.result.amb_user_uuid;
          node_order_buy(nodeIp, {
            buyOrderUuid,
            userUuid: amb_user_uuid,
            period: state.shopForm.week.toString(),
            pst: state.shopForm.quantity.toFixed(0),
            totalPrice: totalPrice.value,
            memo: `${buyOrderUuid}_Order_buy`,
            deviceType: 3,
          })
            .then(() => {
              loading.value = false;
              showToast.success('Order request has been initiated, please check the order result in the order record later.');
              router.push('/home');
            })
            .catch(() => {
              loading.value = false;
            });
        }
      })
      .catch(() => {
        loading.value = false;
      });
  }
  onMounted(() => {
    loadCurReferenceRate();
    getUserAssets();
  });
</script>

<style lang="scss" scoped>
  .out_blue {
    position: relative;
    height: 490px;
    background: #43a3fd;
    border-radius: 0 0 50px 50px;

    .inside_blue {
      z-index: 999;
      position: absolute;
      top: 0;
      width: 100%;
      height: 485px;
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
        margin: 230px auto 20px;
        text-align: center;
      }
      .total_balance_value {
        font-weight: 250;
        color: #fff;
        font-size: 1.75rem;
        text-align: center;
      }
      &::before,
      &::after {
        content: '';
        position: absolute;
        top: -10px;
        right: -100px;
        transform: rotate(45deg);
        display: block;
        width: 350px;
        height: 350px;
        border-radius: 60px;
        border: 5px solid #c72ff8;
      }
      &::after {
        transform: rotate(70deg);
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
      p {
        z-index: 1;
        margin-bottom: 5px;
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
      svg {
        float: right;
        width: 40px;
        height: 40px;
        color: #5264f9;
      }
    }
  }
  .buy_btn {
    height: 120px;
    font-size: 40px;
    margin: 40px 0;
  }
  .price_box {
    position: relative;
    width: 80%;
    margin: 0 auto;
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
      font-size: 35px;

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
      :deep {
        .nut-button {
          width: 40%;
        }
      }
    }
  }
</style>

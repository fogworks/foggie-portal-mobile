<template>
  <div class="top_box">
    <div class="top_back" @click="router.go(-1)">Recharge </div>
  </div>
  <div :class="['middle_box']">
    <img class="top_img nut-icon-am-jump nut-icon-am-infinite" src="@/assets/DMC_Token1.png" alt="" />
    <nut-noticebar
      v-if="memo"
      :text="`Please open the DMC Wallet App, copy the receiving account name and memo for recharging. Make sure to fill in the Memo to ensure a smooth and successful transaction.`"
      wrapable
    ></nut-noticebar>
    <div class="title_item" style="margin-top: 10px" v-if="memo">
      <p>Memo: </p>
      <p class="dmc_account" @click="copySecret(memo)">{{ memo }} <IconCopy color="#246bf7"></IconCopy></p>
    </div>
    <div class="title_item">
      <p>Target account:</p>
      <p style="color: #246bf7" @click="copySecret(targetAccount)" class="dmc_account"
        >{{ targetAccount }} <IconCopy color="#246bf7"></IconCopy
      ></p>
    </div>
    <div class="title_item" v-if="dmc">
      <p>Your Payment Account:</p>
      <p class="dmc_account">{{ dmc }}</p>
    </div>
    <div class="recharge_btn_box" v-if="memo" @click="$router.push({ name: 'rechargeInfo' })">
      <div class="recharge_btn">
        <span> How to recharge?</span>
      </div>
    </div>

    <!-- <div style="margin: 40px">
      <nut-button round block type="info" class="withdraw_btn" native-type="submit" @click="confirmRecharge"> Confirm </nut-button>
    </div> -->
  </div>
</template>

<script setup lang="ts" name="Withdraw">
  import IconCopy from '~icons/home/copy.svg';
  import { reactive, toRefs, computed } from 'vue';
  import { useUserStore } from '@/store/modules/user';
  import { showToast } from '@nutui/nutui';
  import useUpdateDMC from '@/views/shop/useUpdateDMC.js';
  import { user_recharge } from '@/api/amb';
  const { getAmbDmc, targetAccount } = useUpdateDMC();
  const userStore = useUserStore();
  const dmc = computed(() => userStore.getUserInfo.dmc);
  const email = computed(() => userStore.getUserInfo.email);
  const router = useRouter();
  const state = reactive({
    amount: '1.0000',
    memo: '',
  });
  const { memo, amount } = toRefs(state);

  const formatAmount = (val) => {
    if (val == 0) {
      return val;
    } else {
      return (+val).toFixed(4) + '';
    }
  };
  function copySecret(key) {
    var input = document.createElement('textarea');
    input.value = key;
    document.body.appendChild(input);
    input.select();
    document.execCommand('Copy');
    document.body.removeChild(input);
    showToast.success('Copy succeeded');
  }
  async function confirmRecharge() {
    if (!amount.value) {
      showToast.text('Please fill in the recharge amount');
      return false;
    }
    await userRecharge();
  }
  async function userRecharge() {
    await user_recharge({ quantity: +amount.value }).then((res) => {
      memo.value = res.result.memo;
    });
  }
  onMounted(() => {
    getAmbDmc();
    confirmRecharge();
    // getCommissionRate();
  });
  onActivated(() => {
    confirmRecharge();
  });
</script>

<style lang="scss" scoped>
  .recharge_btn_box {
    width: 100%;
    display: flex;
    align-items: end;
    justify-content: end;
    margin-top: -80px;
  }
  .recharge_btn {
    background: #4d5092;
    font-size: 22px;
    border-radius: 50%;
    width: 120px;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;
    box-shadow:
      rgb(204, 219, 232) 3px 3px 6px 0px inset,
      rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
    transform-style: preserve-3d;
    -webkit-transform-origin: 50%;
    -webkit-animation: sizeChange 5s infinite;
    -webkit-animation-timing-function: linear;
    -webkit-perspective: 1000;
    -webkit-box-reflect: below 0 linear-gradient(hsla(0, 0%, 100%, 0), hsla(0, 0%, 100%, 0) 45%, hsla(0, 0%, 100%, 0.5));
    -webkit-filter: saturate(1.45) hue-rotate(2deg);
    color: #fff;
    text-align: center;
    span {
      white-space: pre-wrap;
    }
  }
  @keyframes sizeChange {
    from {
      -webkit-transform: rotateY(0deg);
    }
    to {
      -webkit-transform: rotateY(360deg);
    }
  }
  .top_img {
    display: block;
    width: 200px;
    margin: 40px auto;

  }
  .middle_box {
    padding: 0 10px;
  }
  .full_height {
    height: 115%;
  }
  .title_item {
    margin-bottom: 50px;
    p:first-child {
      // color: #c2c2c2;
      // font-size: 1.2rem;
    }
    .dmc_account {
      color: #666666;
      font-size: 1.3rem;
      text-align: center;
    }
    .google_input {
      :deep {
        .van-password-input__item {
          border-bottom: 1px solid #ccc;
        }
      }
    }
  }
  .amount_input_box {
    margin: 10px 40px;
  }
  .amount_input {
    background: #f9f8f8;
    border-radius: 20px;
  }
  .withdraw_btn {
    background: linear-gradient(90deg, #1f30b7 0%, #9733ee 100%);
  }
  .real_amount {
    margin-top: 20px;
    text-align: center;
  }
  .qrcode-step {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 0 30px;
    .google-tips {
      margin-top: 16px;
      margin-bottom: 20px;
      font-size: 30px;
      color: #000;
    }
    .auth_input {
      display: flex;
      align-items: center;
      margin-top: 30px;
      color: #000;
      font-size: 30px;
      span {
        display: inline-block;
        width: 100%;
      }
      .copy-icon {
        cursor: pointer;
        color: $main_blue;
      }
      .warning-icon {
        color: #ff9200;
      }
    }
  }
</style>

<template>
  <div class="top_box">
    <div class="top_back" @click="router.go(-1)">Withdraw </div>
  </div>
  <div v-if="canWithDraw" :class="['middle_box', showKeyboard ? 'full_height' : '']">
    <img class="top_img" src="@/assets/withdraw-cion.png" alt="" />
    <div class="title_item">
      <p>Withdrawal account:</p>
      <p class="dmc_account">{{ dmc }}</p>
    </div>
    <div class="title_item">
      <p>Please enter the withdrawal amount:</p>
      <div class="amount_input_box">
        <nut-input
          class="amount_input"
          format-trigger="onBlur"
          :formatter="formatAmount"
          placeholder="Please Enter Withdraw Amount"
          v-model="amount"
          type="number"
        >
          <template #right>
            <div style="display: flex; align-items: center">
              <p style="color: #000"> DMC </p>
              <van-button style="margin-left: 10px" size="small" type="primary" @click="getAll">All Amount</van-button>
            </div></template
          >
        </nut-input>
      </div>
    </div>
    <div class="title_item">
      <p>Please enter the withdrawal amount:</p>
      <van-password-input class="google_input" :value="code" :gutter="10" :focused="showKeyboard" @focus="showKeyboard = true" />
      <van-number-keyboard v-model="code" :show="showKeyboard" @blur="showKeyboard = false" />
    </div>
    <div style="margin: 40px">
      <nut-button round block type="info" class="withdraw_btn" native-type="submit"> Withdraw </nut-button>
    </div>
  </div>
  <div class="qrcode-step" v-else>
    <div class="google-tips">
      Please use Google Authenticator or other compatible programs on your phone to scan the QR code below, or manually enter a 16 digit
      key.
    </div>
    <div class="auth_qrcode" v-if="authQrcode && !canWithDraw">
      <img :src="authQrcode" />
    </div>
    <div class="auth_input" v-if="scret_key && !canWithDraw">
      <span>
        {{ 'Verification key:' }}{{ scret_key }}
        <el-icon class="copy-icon" @click="copySecret(scret_key)"><DocumentCopy /></el-icon>
      </span>
    </div>
    <div class="auth_input" v-if="scret_key && !canWithDraw">
      <span>
        <el-icon class="warning-icon"><Warning /></el-icon>
        Please save your Google verification key in time. This key is generated only once and will not be retained after refreshing.</span
      >
    </div>
    <div class="title_item" v-if="scret_key && !canWithDraw">
      <p>Please enter the withdrawal amount:</p>
      <van-password-input class="google_input" :value="code" :gutter="10" :focused="showKeyboard" @focus="showKeyboard = true" />
      <van-number-keyboard v-model="code" :show="showKeyboard" @blur="showKeyboard = false" />
    </div>
    <div v-if="showErrorTips" class="showErrorTips">
      {{ googleErrorTip }}
    </div>
  </div>
</template>

<script setup lang="ts" name="Withdraw">
  import { reactive, toRefs, computed } from 'vue';
  import { check_account, transfer_valid, bind_valid } from '@/api';
  import { useUserStore } from '@/store/modules/user';
  import { showToast } from '@nutui/nutui';
  const userStore = useUserStore();
  const dmc = computed(() => userStore.getUserInfo.dmc);
  const email = computed(() => userStore.getUserInfo.email);
  const router = useRouter();
  const state = reactive({
    amount: '0',
    code: '',
    showKeyboard: false,
    loading: false,
    canWithDraw: true,
    scret_keyOld: '',
    scret_key: '',
    authQrcode: '',
    showErrorTips: false,
    googleErrorTip: '',
  });
  const { showErrorTips, googleErrorTip, scret_key, authQrcode, scret_keyOld, canWithDraw, loading, amount, code, showKeyboard } =
    toRefs(state);

  const getAll = () => {
    amount.value = 1;
  };
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
  async function initGoogle() {
    loading.value = true;
    // let res = await transfer_valid({ email: email.value });
    // if (res?.data?.imageUrl) {
    //   // let data = {
    //   //   account: walletUser.value,
    //   // };
    //   // let res = await getWithdrawGoogle(data);
    //   scret_keyOld.value = res.data.secret;
    //   scret_key.value = res.data.secret;
    //   authQrcode.value = res.data.imageUrl;
    //   loading.value = false;
    // } else {
    //   canWithDraw.value = true;
    //   loading.value = false;
    // }
  }
  function checkValidate(value) {
    let numReg = /^\d{6}$/;
    showErrorTips.value = false;
    if (!value) {
      showErrorTips.value = true;
      googleErrorTip.value = 'Please enter Google Authenticator';
      return;
    } else if (!numReg.test(value)) {
      showErrorTips.value = true;
      googleErrorTip.value = 'Please enter the six-digit Google verification code';
      return;
    } else {
      showErrorTips.value = false;
    }
  }
  onMounted(() => {
    initGoogle();
  });
</script>

<style lang="scss" scoped>
  .top_img {
    display: block;
    width: 200px;
    margin: 0 auto;
  }
  .middle_box {
    padding: 0 10px;
  }
  .full_height {
    height: 100%;
  }
  .title_item {
    margin-bottom: 50px;
    p:first-child {
      color: #c2c2c2;
      font-size: 1.2rem;
    }
    .dmc_account {
      color: #666666;
      font-size: 2rem;
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
</style>

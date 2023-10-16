<template>
  <div class="top_box">
    <div class="top_back" @click="router.go(-1)">Withdraw </div>
  </div>
  <div v-if="!canWithDraw" :class="['middle_box', showKeyboard ? 'full_height' : '']">
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
          placeholder="Amount"
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
    <nut-noticebar
      text="Please note that withdrawals are subject to a handling fee of 10% for ambassadors and 1% for officials. Ambassadors take a cut first,
      and officials take a cut second."
      wrapable
    ></nut-noticebar>
    <div class="real_amount"> The amount expected to arrive is {{ realAmount }} DMC</div>
    <div style="margin: 40px">
      <nut-button round block type="info" class="withdraw_btn" native-type="submit" @click="confirmWithdraw"> Withdraw </nut-button>
    </div>
  </div>
  <div :class="['middle_box', 'qrcode-step', showKeyboard ? 'full_height' : '']" class="qrcode-step" v-else>
    <div class="google-tips">
      Please use Google Authenticator or other compatible programs on your phone to scan the QR code below, or manually enter a 16 digit
      key.
    </div>
    <div class="auth_qrcode" v-if="authQrcode && !canWithDraw">
      <img :src="authQrcode" />
    </div>
    <div class="auth_input" v-if="scret_key && !canWithDraw">
      <span>
        Verification key: {{ scret_key.slice(0, 5) + '......' + scret_key.slice(-5) }}
        <IconCopy class="copy-icon" @click="copySecret(scret_key)"></IconCopy>
      </span>
    </div>
    <div class="auth_input" v-if="scret_key && !canWithDraw">
      <span>
        <!-- <el-icon class="warning-icon"><Warning /></el-icon> -->
        Please save your Google verification key in time. This key is generated only once and will not be retained after refreshing.</span
      >
    </div>
    <div style="margin-top: 50px" class="title_item" v-if="scret_key && !canWithDraw">
      <p>Please enter the Google verification</p>
      <van-password-input class="google_input" :value="code" :gutter="10" :focused="showKeyboard" @focus="showKeyboard = true" />
      <van-number-keyboard v-model="code" :show="showKeyboard" @blur="showKeyboard = false" />
    </div>
    <div v-if="showErrorTips" class="showErrorTips">
      {{ googleErrorTip }}
    </div>
    <div style="margin: 40px; width: 80%">
      <nut-button round block type="info" class="withdraw_btn" native-type="submit" @click="confirmBind"> Confirm </nut-button>
    </div>
  </div>
</template>

<script setup lang="ts" name="Withdraw">
  import IconCopy from '~icons/home/copy.svg';
  import { reactive, toRefs, computed } from 'vue';
  import { check_account, transfer_valid, bind_valid } from '@/api';
  import { useUserStore } from '@/store/modules/user';
  import { showToast } from '@nutui/nutui';
  import useUserAssets from './useUserAssets.ts';
  import { get_otp, verify_otp_token, withdraw_otp, check_bind_otp } from '@/api/amb';
  const userStore = useUserStore();
  const dmc = computed(() => userStore.getUserInfo.dmc);
  const email = computed(() => userStore.getUserInfo.email);
  const router = useRouter();
  const state = reactive({
    code: '',
    showKeyboard: false,
    loading: false,
    canWithDraw: true,
    scret_keyOld: '',
    scret_key: '',
    authQrcode: '',
    showErrorTips: false,
    googleErrorTip: '',
    amount: '',
  });
  const { amount, showErrorTips, googleErrorTip, scret_key, authQrcode, scret_keyOld, canWithDraw, loading, code, showKeyboard } =
    toRefs(state);
  const { getUserAssets, cloudBalance, cloudPst, cloudIncome, cloudWithdraw } = useUserAssets();
  const realAmount = computed(() => {
    return (amount.value * 0.9 * 0.99).toFixed(4);
  });
  const getAll = () => {
    amount.value = cloudBalance.value + '';
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
    let res = await check_bind_otp();
    if (res.result.bind_secret) {
      canWithDraw.value = true;
    } else {
      get_otp().then((res) => {
        console.log(res, 'res');
        if (res.code == 200) {
          scret_key.value = res.result.data.secret;
          authQrcode.value = 'data:image/jpg;base64,' + res.result.data.qrcode;
          canWithDraw.value = false;
        } else {
          canWithDraw.value = true;
        }
      });
    }
  }
  function confirmBind() {
    checkValidate(code.value);
    if (!showErrorTips.value) {
      showToast.loading('Validating', {
        cover: true,
      });
      verify_otp_token({ secret: scret_key.value, token: code.value })
        .then((res) => {
          if (res.code == 200) {
            withdraw_otp({ secret: scret_key.value }).then((res2) => {
              if (res2.code == 200 && res2.result.data.user_uuid) {
                showToast.hide();
                canWithDraw.value = true;
                code.value = '';
              } else {
                showToast.hide();
                showToast.fail('Binding failed, please try again');
              }
            });
          } else {
            showToast.hide();
            showToast.fail('Verification code error');
          }
        })
        .catch(() => {
          showToast.hide();
        });
    }
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
  function confirmWithdraw() {
    showToast.loading('Withdrawing cash for you', {
      cover: true,
    });
    if (!amount.value) return false;
    user_withdraw({ quantity: amount.value, token: code.value })
      .then((res) => {
        showToast.hide();
        showToast.success('Withdrawal successful');
        router.go(-1);
      })
      .catch(() => {
        showToast.hide();
      });
  }
  onMounted(() => {
    initGoogle();
    getUserAssets();
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
    height: 115%;
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

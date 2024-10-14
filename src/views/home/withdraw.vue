<template>
  <div>
    <div class="top_box">
      <div class="top_back" @click="router.go(-1)">Withdraw DMC to your wallet</div>
    </div>
    <div v-if="canWithDraw && !loading" :class="['middle_box', showKeyboard ? 'full_height' : '']">
      <!-- <img class="top_img nut-icon-am-jump nut-icon-am-infinite" src="@/assets/DMC_Token1.png" alt="" /> -->
      <div inset class="withdraw-card">
        <div class="card_row_1 card_header">
          <div class="total_income_text">Your have Withdrawn:</div>
          <div class="rechargeRecord" @click="router.push(`/transactionRecords?type=1`)">Withdraw Record</div>
          <div class="total_income">
            <div class="balance_text">
              <span v-if="maxBind">{{ maxWithdraw >= 0 ? maxWithdraw.toFixed(4) : maxWithdraw }}</span>
              <span v-else>{{ cloudWithdraw >= 0 ? cloudWithdraw.toFixed(4) : cloudWithdraw }}</span>
              <img src="@/assets/DMC(1).png" alt="" style="margin-left: 5px" />
            </div>
          </div>
        </div>
      </div>
      <div class="recharge_box">
        <div class="recharge_contact">
          <div class="dot">
            <img class="top_img" src="@/assets/DMC_Token1.png" alt="" />
            <span>DMC Account</span>
            <span class="small">(Agent Account)</span>
          </div>
          <div class="line"
            >{{ amount }}
            <!-- <img class="top_img" src="@/assets/DMC_Token1.png" alt="" /> -->
          </div>
          <div class="dot">
            <img class="top_img" src="@/assets/DMC_Token1.png" alt="" />
            <span>{{ maxBind ? maxWallet : dmc }}</span>
            <span class="small">(Receiving account)</span>
          </div>
        </div>
        <div class="ticket_box">
          <div class="title_item">
            <p>Withdrawal Account:</p>
            <p class="dmc_account">{{ maxBind ? maxWallet : dmc }}</p>
          </div>
          <div class="title_item">
            <!-- <p>Please enter the withdrawal amount:</p> -->
            <p>Amount:</p>
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
          <div class="title_item google_item" v-if="isBind">
            <p>Please enter the Google captcha:</p>
            <van-password-input
              :mask="false"
              class="google_input"
              :value="code"
              :gutter="10"
              :focused="showKeyboard"
              @focus="showKeyboard = true"
            />
            <Teleport to="body">
              <van-number-keyboard v-model="code" :show="showKeyboard" @blur="showKeyboard = false" />
            </Teleport>
          </div>
          <div class="real_amount balance"> Balance: {{ maxBind ? maxBalance : cloudBalance }} DMC </div>
          <div v-if="realAmount != '--'" class="real_amount"> The amount expected to arrive is {{ realAmount }} DMC</div>
          <div v-else class="real_amount">Failed to get agent pumping rate, please retry </div>
          <div class="tips">
            Please be aware that withdrawals incur a handling fee of {{ (commissionRate * 100).toFixed(2) }}% for agent and 2% for DMC
            Foundation
          </div>
        </div>
      </div>
      <!-- <nut-noticebar
        :text="`Please be aware that withdrawals incur a handling fee of  ${(commissionRate * 100).toFixed(
          2,
        )}% for agent and 2% for DMC Foundation`"
        wrapable
      ></nut-noticebar> -->

      <div style="margin: 40px; margin-bottom: 150px">
        <nut-button
          round
          block
          type="info"
          class="withdraw_btn"
          native-type="submit"
          :disabled="realAmount == '--'"
          @click="confirmWithdraw"
        >
          Withdraw
        </nut-button>
      </div>
    </div>
    <div v-else-if="!loading && !canWithDraw" :class="['middle_box', 'qrcode-step', showKeyboard ? 'full_height' : '']">
      <div class="google-tips">
        Please use Google Authenticator or other compatible programs on your phone to scan the QR code below, or manually enter a manually
        enter a 16-digit key key.
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
      <div style="margin-top: 10px" class="title_item" v-if="scret_key && !canWithDraw">
        <p>Please enter the Google verification</p>
        <van-password-input
          :mask="false"
          class="google_input"
          :value="code"
          :gutter="10"
          :focused="showKeyboard"
          @focus="showKeyboard = true"
        />
        <Teleport to="body">
          <van-number-keyboard v-model="code" :show="showKeyboard" @blur="showKeyboard = false" />
        </Teleport>
      </div>
      <div v-if="showErrorTips" class="showErrorTips">
        {{ googleErrorTip }}
      </div>
      <div style="margin: 40px; width: 80%; margin-bottom: 150px">
        <nut-button round block type="info" class="withdraw_btn" native-type="submit" @click="confirmBind"> Confirm </nut-button>
        <nut-button
          round
          block
          type="info"
          style="margin-top: 20px"
          v-if="showSkip && !isBind && !loading && canWithDraw"
          @click="
            canWithDraw = true;
            code = '';
          "
        >
          Skip
        </nut-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="Withdraw">
  import loadingImg from '@/components/loadingImg/index.vue';
  import IconCopy from '~icons/home/copy.svg';
  import { reactive, toRefs, computed } from 'vue';
  import { user } from '@/api';
  import { useUserStore } from '@/store/modules/user';
  import { showToast, showDialog } from '@nutui/nutui';
  import useUserAssets from './useUserAssets.ts';
import { get_user_dmc } from '@/api/amb';

  import { get_otp, verify_otp_token, withdraw_otp, check_bind_otp, get_commission_rate, user_withdraw, getIsVerifiedAPI } from '@/api/amb';
  const userStore = useUserStore();
  const dmc = computed(() => userStore.getUserInfo.dmc);
  const maxBind = computed(() => userStore.getMaxBind);
  const maxWallet = computed(() => userStore.getMaxWallet);
  const maxWithdraw = ref(0);
  const maxBalance = ref(0);
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
    commissionRate: '--',
    isBind: false,
    showSkip: true,
  });
  const {
    showSkip,
    isBind,
    commissionRate,
    amount,
    showErrorTips,
    googleErrorTip,
    scret_key,
    authQrcode,
    scret_keyOld,
    canWithDraw,
    loading,
    code,
    showKeyboard,
  } = toRefs(state);
  const { getUserAssets, cloudBalance, cloudPst, cloudIncome, cloudWithdraw } = useUserAssets();
  const realAmount = computed(() => {
    if (typeof commissionRate.value == 'number') {
      return (amount.value * (1 - commissionRate.value) * 0.98).toFixed(4);
    } else {
      return '--';
    }
  });
  const getCommissionRate = () => {
    get_commission_rate().then((res) => {
      commissionRate.value = +res.result.rate;
    });
  };
  const getAll = () => {
    amount.value =  maxBind.value ? maxBalance.value + '' : cloudBalance.value + '';
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
    showToast.loading('Loading', {
      cover: true,
      customClass: 'app_loading',
      icon: loadingImg,
      loadingRotate: false,
    });
    let res = await check_bind_otp();
    let response = {};
    if (!res.result.bind_secret) {
      response = await getIsVerifiedAPI();
    }
    if (res.result.bind_secret) {
      isBind.value = true;
      canWithDraw.value = true;
      loading.value = false;
      showToast.hide();
    } else if (!response.result.set_otp) {
      isBind.value = false;
      canWithDraw.value = true;
      loading.value = false;
      showToast.hide();
    } else {
      get_otp()
        .then((res) => {
          console.log(res, 'res');
          if (res.code == 200) {
            loading.value = false;
            scret_key.value = res.result.data.secret;
            authQrcode.value = 'data:image/jpg;base64,' + res.result.data.qrcode;
            canWithDraw.value = false;
            showToast.hide();
          } else {
            showToast.hide();
          }
        })
        .finally(() => {
          showToast.hide();
        });
    }
  }
  function confirmBind() {
    checkValidate(code.value);
    if (!showErrorTips.value) {
      showToast.loading('Loading', {
        cover: true,
        customClass: 'app_loading',
        icon: loadingImg,
        loadingRotate: false,
      });
      verify_otp_token({ secret: scret_key.value, token: window.btoa(code.value) })
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
    console.log(value);

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
  let assetsTimeOut = null;
  function confirmWithdraw() {
    if (!amount.value) {
      showToast.fail('Please fill in the amount to be withdrawn');
      return false;
    }
    if (maxBind.value) {
      if (+maxBalance.value < +amount.value) {
        showToast.fail('Exceeding the maximum withdrawable amount');
        return false;
      }
    } else if (+cloudBalance.value < +amount.value) {
      showToast.fail('Exceeding the maximum withdrawable amount');
      return false;
    }
    const onOk = () => {
      showToast.loading('Loading', {
        cover: true,
        customClass: 'app_loading',
        icon: loadingImg,
        loadingRotate: false,
      });
      let address = '';
      if (maxBind.value) {
        address = maxWallet.value;
      } else {
        address = dmc.value;
      }
      user_withdraw({ quantity: +amount.value, token: window.btoa(code.value), address })
        .then((res) => {
          if (res.code == 200) {
            amount.value = '';
            code.value = '';
            showToast.hide();
            showToast.success('Withdraw successfully');
            if (!assetsTimeOut) {
              assetsTimeOut = setInterval(() => {
                getUserAssets();
              }, 5000);
            }
          } else {
            showToast.hide();
            showToast.fail(res.message);
          }
        })
        .catch(() => {
          showToast.hide();
        });
    };
    let src = require('@/assets/fog-works_w.png');
    let str = `<img class="withdraw_img" src=${src} style="height:60px;width:120px;"/><p style='word-break:break-word;color:#535353;text-align:left;'>The final amount is ${realAmount.value} DMC. Are you sure you want to withdraw it?</p >`;
    showDialog({
      title: 'Notice',
      content: str,
      cancelText: 'Cancel',
      okText: 'Confirm',
      popClass: 'dialog_class',
      onOk,
    });
  }
  watch(
    code,
    (val) => {
      if (val.length > 6) {
        code.value = val.slice(0, 6);
      }
    },
    { deep: true },
  );
  watch(
    showKeyboard,
    (val) => {
      if (val) {
        showSkip.value = false;
        nextTick(() => {
          document.getElementsByClassName('main-page')[0].scroll({
            top: document.getElementsByClassName('main-page')[0].scrollHeight,
            smooth: true,
          });
        });
      } else {
        showSkip.value = true;
      }
    },
    { deep: true },
  );
  onMounted(async () => {
    initGoogle();
    if (maxBind.value) {
      const r = await get_user_dmc(maxWallet.value);
      if (r.code == 200) {
        maxWithdraw.value = r.result.data.withdraw;
        maxBalance.value = r.result.data.balance;
      }
    } else {
      await user();
      getUserAssets();
    }
    getCommissionRate();
  });
  onUnmounted(() => {
    clearInterval(assetsTimeOut);
  });
</script>

<style lang="scss" scoped>
  .top_back {
    font-size: 36px;
  }
  .top_img {
    display: block;
    width: 60px;
  }
  .middle_box {
    padding: 0 10px;
  }
  .full_height {
    height: 150%;
  }
  .title_item {
    margin-bottom: 50px;
    // p:first-child {
    //   color: #000;
    //   font-size: 1.2rem;
    // }
    .dmc_account {
      color: #666666;
      color: #8532e6;
      font-weight: bold;
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
    margin: 10px;
  }
  .amount_input {
    background: #f9f8f8;
    border-radius: 20px;
  }
  .withdraw_btn {
    background: linear-gradient(90deg, #1f30b7 0%, #9733ee 100%);
  }
  .real_amount {
    margin-bottom: 20px;
    text-align: center;
  }
  .balance {
    font-size: 35px;
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
      font-size: 26px;
      color: #000;
    }
    .auth_input {
      display: flex;
      align-items: center;
      margin-top: 30px;
      color: #000;
      font-size: 26px;
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
  :deep {
    .van-number-keyboard {
      padding-bottom: 0;
      z-index: 999;
    }
  }
</style>

<style scoped lang="scss">
  .recharge_box {
    margin: 20px;
    background-image: linear-gradient(260deg, #4062bb 0%, #5200ae 74%);
    color: #fff;
    padding: 20px;
    border-radius: 20px;
    height: auto;
    font-weight: bold;
    // margin-top: 50px;
    .recharge_contact {
      margin-top: 12px;
      display: flex;
      position: relative;
      align-items: center;
      justify-content: center;
      margin: 36px 0;
      .dot {
        width: 300px;
        border-radius: 50%;
        // margin: 0 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        span {
          white-space: nowrap;
          font-size: 32px;
        }
        .small {
          font-size: 18px;
        }
      }
      .line {
        border-top: 6px dashed #fff;
        width: calc(100% - 400px);
        height: 100px;
        border-radius: 50%;
        font-size: 18px;
        text-align: center;
        padding-top: 18px;
        // display: flex;
        // align-items: center;
        // flex-direction: column;
        // justify-content: center;
      }
    }
    .ticket_box {
      background: #fff;
      border-radius: 20px;
      color: #000;
      padding: 20px;
      font-size: 26px !important;
      font-weight: normal;
      margin: 20px 0;
      background:
        radial-gradient(circle at -6% 50%, transparent 10%, #fff 4%) left,
        radial-gradient(circle at 106% 50%, transparent 10%, #fff 3.2%) right;
      background-size: 50% 100%;
      background-repeat: no-repeat;

      .title_item {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .google_item {
        flex-direction: column;
        .google_input {
          width: 90%;
          border-bottom: 1px solid #ccc;
        }
      }
      .dmc_account {
        font-size: 26px !important;
      }
      .tips {
        color: #ff8b00;
        // font-weight: bold;
      }
    }
  }
  .withdraw-card {
    margin: 20px;
    position: relative;
    padding: 40px;
    // height: 410px;
    box-sizing: border-box;
    background: $primary-color;
    color: #fff;
    border-radius: 30px;
    background-image: linear-gradient(260deg, #4062bb 0%, #5200ae 74%);
    // margin-top: 150px;

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
      .total_income_text {
        text-align: left;
        margin-top: -20px;
        font-size: 26px;
      }
      .rechargeRecord {
        position: absolute;
        top: 20px;
        right: 10px;
        font-size: 20px;
        text-decoration: underline;
        font-weight: bold;
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
  }
</style>

<template>
  <div>
    <div class="top_box">
      <div class="top_back" @click="router.go(-1)">My Assets </div>
    </div>
    <div inset class="assets-card">
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
          <p>Recharge</p>
          <p class="column_value">{{ cloudRecharge >= 0 ? cloudRecharge.toFixed(4) : cloudRecharge }} DMC</p>
        </div>
        <div @click="gotoPage('transactionRecords', '1')">
          <p>Withdrawn</p>
          <p class="column_value">{{ cloudWithdraw >= 0 ? cloudWithdraw.toFixed(4) : cloudWithdraw }} DMC</p>
        </div>
      </div>
    </div>
    <div class="service_box">
      <div class="service_title">Services</div>
      <div class="service_btns">
        <div class="service_item" @click="gotoPage('Recharge')">
          <div class="service_img">
            <img src="@/assets/Recharge.png" alt="" />
          </div>
          <div class="service_item_title">Recharge</div>
        </div>
        <div class="service_item" @click="gotoPage('Withdraw')">
          <div class="service_img">
            <img src="@/assets/Withdraw.png" alt="" />
          </div>
          <div class="service_item_title">Withdraw</div>
        </div>
        <div class="service_item" @click="gotoPage('transactionRecords')">
          <div class="service_img">
            <img src="@/assets/newIcon/transaction.png" alt="" />
          </div>
          <div class="service_item_title">Transaction</div>
        </div>
        <div class="service_item" @click="gotoPage('analysisChart')">
          <div class="service_img">
            <img src="@/assets/newIcon/analysis.png" alt="" />
          </div>
          <div class="service_item_title">Assets Analysis</div>
        </div>
        <div class="service_item" @click="gotoPage('enableProtection')">
          <div class="service_img">
            <img src="@/assets/enableProtection.svg" alt="" class="safeImg" />
          </div>
          <div class="service_item_title">Asset Guard</div>
        </div>
        <div class="service_item" @click="gotoPage('info')">
          <div class="service_img">
            <img src="@/assets/newIcon/userInfo.png" alt="" />
          </div>
          <div class="service_item_title">Asset Info</div>
        </div>
      </div>
    </div>
    <nut-popup
      position="bottom"
      teleport="body"
      :safe-area-inset-bottom="true"
      :lock-scroll="true"
      closeable
      round
      :style="{ height: withdrawalIsVerified ? 'auto' : '60%' }"
      v-model:visible="googleVerificationVisible"
    >
      <div class="googleVerificationBox" id="googleVerificationBox">
        <div class="title">Multi factor authentication</div>

        <div class="content">
          <div style="padding: 10px">
            <div class="content_title">Warning</div>
            <div class="content_tips">{{
              withdrawalIsVerified
                ? 'You have enabled dual factor authentication, please bind OTP.'
                : `You have turned off the two factor validation, which may pose risks. Do you want to
              turn it on?`
            }}</div>
          </div>
          <img v-if="withdrawalIsVerified" src="@/assets/googleSrc/DM_20231129144005_001.png" alt="" srcset="" />
          <img v-else src="@/assets/googleSrc/DM_20231129143906_001.png" alt="" srcset="" style="height: 100%" />
        </div>
        <div class="switchButton">
          <div
            >Is double factor verification enabled：
            <span
              style="font-style: italic; font-weight: 600"
              :style="{
                color: withdrawalIsVerified ? '#5758A0' : 'red',
              }"
              >{{ withdrawalIsVerified ? 'YES' : 'NO' }}
            </span>
          </div>
          <nut-switch :model-value="withdrawalIsVerified" :loading="withdrawalIsVerifiedLoadding" @change="changeIsVerified">
            <template #icon>
              <Loading name="loading" />
            </template>
          </nut-switch>
        </div>

        <template v-if="withdrawalIsVerified">
          <div class="google-tips">
            Please use Google Authenticator or other compatible programs on your phone to scan the QR code below, or manually enter a
            manually enter a 16-digit key key.
          </div>
          <div class="auth_qrcode" v-if="authQrcode">
            <img :src="authQrcode" />
          </div>

          <div class="title_item">
            <p>Please enter the Google verification </p>
            <div class="keyWordBox" @click="shortPasswordIsShow = true" style="text-align: center; font-size: 24px; margin-top: 20px">{{
              code
            }}</div>
            <nut-short-password
              v-model="code"
              v-model:visible="shortPasswordIsShow"
              tips="Password length, ranging from 6"
              desc="Please enter the verification code"
              title="two-factor authentication"
            >
            </nut-short-password>

            <nut-number-keyboard v-model="code" v-model:visible="shortPasswordIsShow"> </nut-number-keyboard>
            <nut-button :loading="isLoading" style="margin-top: 20px" block type="primary" @click="ConfirmBindOtp">Confirm</nut-button>
          </div>
        </template>
      </div>
    </nut-popup>
  </div>
</template>

<script lang="ts" setup>
  import googleVerificationHook from './googleVerificationHook.ts';
  const {
    bindOtp,
    openGoogleSetting,
    changeIsVerified,
    isLoading,
    withdrawalIsVerified,
    googleVerificationVisible,
    withdrawalIsVerifiedLoadding,
    authQrcode,
    code,
    shortPasswordIsShow,
    ConfirmBindOtp,
  } = googleVerificationHook();
  import { useUserStore } from '@/store/modules/user';
  import { useRouter } from 'vue-router';
  import { formatNumber } from '@/utils/util';
  const router = useRouter();
  import useUserAssets from './useUserAssets.ts';
  const { getUserAssets, getExchangeRate, dmc2usdRate, cloudBalance, cloudRecharge, cloudWithdraw } = useUserAssets();
  const userStore = useUserStore();
  onMounted(async () => {
    getUserAssets();
    getExchangeRate();
  });
  const cloudBalanceNum = computed(() => {
    return formatNumber(cloudBalance.value);
  });
  const cloudCodeIsBind = computed(() => userStore.getCloudCodeIsBind);
  const dmcAccount = computed(() => userStore.getUserInfo?.dmc);
  const promo_code = computed(() => userStore.getUserInfo?.amb_promo_code);
  const bindAmbCode = inject('bindAmbCode');
  const openBindDMCDiaolg = inject('openBindDMCDiaolg');
  const showWithdraw = () => {
    if (!dmcAccount.value) {
      openBindDMCDiaolg();

      return false;
    } else if (!cloudCodeIsBind.value) {
      bindAmbCode();
    } else {
      router.push({ name: 'Withdraw' });
    }
  };
  const gotoPage = (type, query = '') => {
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
    } else if (type == 'Bucket') {
      router.push('/bucketList');
    } else if (type == 'NFT') {
      router.push('/nft');
    } else if (type == 'Assets') {
      router.push('/assetsInfo');
    } else if (type == 'Recharge') {
      router.push({ name: 'Recharge' });
    } else if (type == 'Withdraw') {
      showWithdraw();
    } else if (type == 'enableProtection') {
      openGoogleSetting();
    } else if (type == 'info') {
      router.push('/personalInfo');
    }
  };
</script>

<style lang="scss">
  .assets-card {
    margin: 30px;
    position: relative;
    padding: 40px;
    // height: 410px;
    box-sizing: border-box;
    background: $primary-color;
    color: #fff;
    border-radius: 30px;
    // background-image: linear-gradient(260deg, #4062bb 0%, #5200ae 74%);
    background: #a3a3ba4a;

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
  }
  .service_box {
    padding: 40px 30px;
    background: #fff;
    margin: 20px;
    border-radius: 40px;
    background: #a3a3ba4a;
    color: #fff;
    .service_title {
      font-size: 36px;
      font-weight: bold;
      margin-bottom: 10px;
    }
    .service_btns {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      .service_item {
        margin: 20px 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 33%;

        .service_img {
          img {
            width: 100px;
            padding: 10px;
            height: 100px;
            border-radius: 30px;
            background: #3553ad;
            background: #eff2fc;
            background: #0a0e1a96;
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
            // background-image: linear-gradient(260deg, #4062bb 0%, #5200ae 74%);
          }
          .safeImg {
            width: 70px;
            padding: 25px;
            height: 70px;
          }
        }
        .service_item_title {
          font-size: 24px;
          font-weight: bold;
        }
      }
    }
  }
  .googleVerificationBox {
    padding: 60px 40px;
    padding-bottom: 160px;

    .title {
      font-size: 36px;
      font-weight: 600;
      text-align: center;
      color: #334557;
    }

    .content {
      display: grid;
      grid-template-columns: auto 200px;
      background-color: #d8d8d8;
      border-radius: 20px 20px 0 0;
      border: 2px solid #e1e3e1;
      border-bottom: 0px;
      box-sizing: border-box;
      overflow: hidden;
      margin-top: 60px;
      padding: 20px;

      // align-items: center;
      // justify-items: center;
      .content_title {
        font-family: 'Google Sans', Roboto, Arial, sans-serif;

        font-size: 36px;
        line-height: 40px;
        letter-spacing: 0;
        font-weight: 400;
        hyphens: auto;
        word-break: break-word;
        word-wrap: break-word;
        color: #1f1f1f;
      }

      .content_tips {
        margin-top: 20px;
        font-size: 24px;
        letter-spacing: 0;
        font-weight: 400;
        hyphens: auto;
        word-break: break-word;
        word-wrap: break-word;
        color: #1f1f1f;
      }

      & > img {
        width: 100%;
        height: auto;
        object-fit: contain;
      }
    }

    .switchButton {
      border: 2px solid #e1e3e1;
      padding: 20px;
      border-radius: 0 0 20px 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 24px;
    }

    .google-tips {
      margin-top: 20px;
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

    .auth_qrcode {
      text-align: center;

      img {
        width: 400px;
        height: 400px;
      }
    }

    .title_item {
      text-align: center;
      font-size: 24px;

      .keyWordBox {
        background-color: #edf2f7;
        border-radius: 30px;
        border: 2px solid darkgray;
        width: 90%;
        height: 100px;
        margin: 0px auto;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
</style>

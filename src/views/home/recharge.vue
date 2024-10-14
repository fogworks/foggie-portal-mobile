<template>
  <div>
    <div class="top_box">
      <div class="top_back" @click="router.go(-1)">Recharge </div>
    </div>
    <div :class="['middle_box']">
      <div inset class="recharge-card">
        <div class="card_row_1 card_header">
          <div class="total_income_text">Your have recharge:</div>

          <div class="total_income">
            <div class="balance_text">
              <span>{{ cloudRecharge >= 0 ? cloudRecharge.toFixed(4) : cloudRecharge }}</span>
              <img src="@/assets/DMC(1).png" alt="" style="margin-left: 5px" />
            </div>
          </div>
          <template v-if="rechargeDMC">
            <div class="total_income_text" style="margin-top: 10px">Your need recharge:</div>

            <div class="total_income">
              <div class="balance_text">
                <span>{{ rechargeDMC }}</span>
                <img src="@/assets/DMC(1).png" alt="" style="margin-left: 5px" />
              </div>
            </div>
          </template>
        </div>
        <div class="card_row_1 pst-row">
          <div @click="dialogShow = true">
            <p style="text-decoration: underline">Why Recharge?</p>
          </div>
          <div @click="$router.push({ name: 'rechargeInfo' })">
            <p style="text-decoration: underline">How to Recharge?</p>
          </div>
          <div @click="router.push(`/transactionRecords`)">
            <p style="text-decoration: underline">Recharge Record</p>
          </div>
        </div>
      </div>
      <!-- <img class="top_img nut-icon-am-jump nut-icon-am-infinite" src="@/assets/DMC_Token1.png" alt="" /> -->
      <div class="recharge_box">
        <div class="recharge_contact">
          <div class="dot">
            <img class="top_img" src="@/assets/DMC_Token1.png" alt="" />
            <span>{{ dmc }}</span>
            <span class="small">(Payment Account)</span>
          </div>
          <div class="line"
            >{{ memo }}
            <!-- <img class="top_img" src="@/assets/DMC_Token1.png" alt="" /> -->
          </div>
          <div class="dot">
            <img class="top_img" src="@/assets/DMC_Token1.png" alt="" />
            <span>{{ targetAccount }}</span>
            <span class="small">(Agent Account)</span>
          </div>
        </div>

        <div class="ticket_box">
          <div class="title_item" style="margin-top: 10px">
            <p>Memo: </p>
            <p class="dmc_account" v-if="memo" @click="copySecret(memo)">{{ memo }} <IconCopy color="#246bf7"></IconCopy></p>
          </div>
          <div class="title_item">
            <p>Agent Account:</p>
            <p v-if="targetAccount" @click="copySecret(targetAccount)" class="dmc_account"
              >{{ targetAccount }} <IconCopy color="#246bf7"></IconCopy
            ></p>
          </div>
          <div class="title_item" v-if="dmc">
            <p>Your Payment Account:</p>
            <p class="dmc_account">{{ dmc }}</p>
          </div>
          <div
            v-if="isHasDmcwallet"
            @click="invDialogIsShow = true"
            style="display: flex; justify-content: center; width: 100%; margin-bottom: 10px"
          >
            <nut-button type="primary">Recharge</nut-button>
          </div>

          <div class="tips">
            Please open the DMC Wallet App, copy the Agent Account name and memo for recharging. Make sure to fill in the Memo to ensure a
            smooth and successful transaction.One Memo corresponds to one recharge, if you want to recharge multiple times, please refresh
            the page to get a new Memo.
          </div>
        </div>
      </div>
      <!-- <div class="recharge_btn_box" v-if="memo" @click="$router.push({ name: 'rechargeInfo' })">
        <div class="recharge_btn">
          <span> How to recharge?</span>
        </div>
      </div> -->
    </div>
    <BasicModal :show="dialogShow" @update:show="dialogShow = false">
      <div class="my_dialog_content_box">
        <div class="my_dialog_title">why Recharge?</div>
        <div class="my_dialog_content">
          <div class="my_dialog_content_p">
            In order to improve the efficiency of buying orders, we have set up an agent account for you. When paying orders, you can
            directly deduct money from the agent account.
          </div>
          <div class="my_dialog_content_p"
            >Therefore, we recommend that you recharge a certain amount of money into your agent account before purchasing. This will
            greatly improve the efficiency of buying orders.</div
          >
        </div>
      </div>
    </BasicModal>

    <nut-popup
      v-model:visible="invDialogIsShow"
      pop-class="stepsDialog"
      z-index="9999"
      round
      position="top"
      closeable
      :style="{ 'min-height': '25%' }"
    >
      <h2 class="rechargeTitle">Please enter the recharge amount</h2>

      <div style="padding: 30px">
        <nut-form ref="formRef" :model-value="formLine" :rules="rules" style="width: 100%">
          <nut-form-item label="Amount" prop="amount">
            <nut-input v-model="formLine.amount" autofocus placeholder=" Enter the recharge amount" type="digit"></nut-input>
          </nut-form-item>
        </nut-form>
        <nut-button type="primary" style="margin-top: 30px" block @click="submitRecharge">Recharge</nut-button>
      </div>
    </nut-popup>
  </div>
</template>

<script setup lang="ts" name="Withdraw">
  import useUserAssets from './useUserAssets.ts';
  import BasicModal from '@/components/Modal/src/BasicModal.vue';
  const { getUserAssets, cloudRecharge } = useUserAssets();
  import IconCopy from '~icons/home/copy.svg';
  import { reactive, toRefs, computed } from 'vue';
  import { useUserStore } from '@/store/modules/user';
  import { showToast } from '@nutui/nutui';
  import useUpdateDMC from '@/views/shop/useUpdateDMC.js';
  import { user_recharge } from '@/api/amb';
  import { My } from '@nutui/icons-vue';
  const { getAmbDmc, targetAccount } = useUpdateDMC();
  const userStore = useUserStore();
  const dmc = computed(() => userStore.getUserInfo.dmc);
  const email = computed(() => userStore.getUserInfo.email);
  const router = useRouter();
  const route = useRoute();
  const dialogShow = ref(false);
  const rechargeDMC = route.query.rechargeDMC || '';
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

  const isHasDmcwallet = ref(false); //是否在dmc钱包app的浏览器中打开  默认false即为普通浏览器
  const invDialogIsShow = ref(false);
  const formRef = ref();
  const formLine = reactive({
    amount: '',
  });
  const rules = reactive({
    amount: [
      {
        required: true,
        message: 'Please enter the recharge amount',
      },
    ],
  });

  // watch(isHasDmcwallet, (newVal) => {
  //   if (newVal) {
  //     invDialogIsShow.value = true;
  //   }
  // });

  function submitRecharge() {
    formRef.value?.validate().then(({ valid }) => {
      if (valid) {
        transactionDMC();
      }
    });
  }

  function transactionDMC() {
    // 获取当前登录账户信息
    window.dmcwallet.getAccount((error, d) => {
      if (error) {
      } else {
        if (d?.account_name) {
          // 发起交易
          window.dmcwallet.beginTransaction(
            [
              {
                account: 'dmc.token',
                name: 'extransfer',
                authorization: [
                  {
                    actor: d?.account_name,
                    permission: 'active',
                  },
                ],
                data: {
                  // 该 transact data, 此处以 transfer 为例
                  from: d?.account_name, // 当前账户
                  to: targetAccount.value, //  收款账户,此处以 datamall 为例
                  quantity: {
                    //  转账数量
                    quantity: `${Number(formLine.amount).toFixed(4)} DMC`,
                    contract: 'datamall',
                  },
                  memo: memo.value, //  备注
                },
              },
              // 多个 action 继续添加即可
            ],
            (error, result) => {
              invDialogIsShow.value = false;
              if (error) {
                showToast.fail(error);
              } else {
                showToast.success('Recharge successfully, please wait for receipt');

                setTimeout(() => {
                  router.push({ path: '/assetsInfo' });
                }, 1000);
              }
            },
          );
        }
      }
    });
  }

  onMounted(() => {
    if (window.dmcwallet) {
      isHasDmcwallet.value = true;
    } else {
      window.addEventListener('sdkReady', () => {
        isHasDmcwallet.value = true;
      });
    }
    getAmbDmc();
    confirmRecharge();
    getUserAssets();
    // getCommissionRate();
  });
  onActivated(() => {
    confirmRecharge();
  });
</script>

<style lang="scss" scoped>
  .stepsDialog {
    .rechargeTitle {
      font-size: 24px;
      text-align: center;
      height: 80px;
      line-height: 80px;
    }
  }

  .recharge_btn_box {
    width: 100%;
    display: flex;
    align-items: end;
    justify-content: end;
    // margin-top: -0px;
    position: fixed;
    bottom: 140px;
    right: 20px;
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
    -webkit-animation: sizeChange 3s infinite;
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
    0% {
      -webkit-transform: rotateY(0deg);
    }
    25% {
      -webkit-transform: rotateY(-30deg);
    }
    50% {
      -webkit-transform: rotateY(0deg);
    }
    75% {
      -webkit-transform: rotateY(30deg);
    }
    100% {
      -webkit-transform: rotateY(0deg);
    }
  }
  .top_img {
    display: block;
    width: 60px;
    // margin: 40px auto;
  }
  .middle_box {
    // padding: 0 10px;
    // height: calc(100vh - 450px);
    // display: flex;
    // flex-direction: column;
    // justify-content: center;
  }
  .full_height {
    height: 115%;
  }
  .title_item {
    margin-bottom: 50px;
    display: flex;
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

<style scoped lang="scss">
  .recharge_box {
    margin: 20px;
    background-image: linear-gradient(260deg, #4062bb 0%, #5200ae 74%);
    color: #fff;
    padding: 20px;
    border-radius: 20px;
    height: auto;
    font-weight: bold;
    margin-top: 20px;
    background: #7878ad3b;
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
      padding: 20px 25px;
      font-size: 26px !important;
      font-weight: normal;
      margin: 20px 0;
      //   background:
      //     radial-gradient(circle at -6% 50%, transparent 10%, #fff 4%) left,
      //     radial-gradient(circle at 106% 50%, transparent 10%, #fff 3.2%) right;
      background-size: 50% 100%;
      background-repeat: no-repeat;

      .title_item {
        display: flex;
        align-items: center;
        justify-content: space-between;
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
  .recharge-card {
    margin: 30px;
    position: relative;
    padding: 30px 40px 20px;
    // height: 410px;
    box-sizing: border-box;
    background: $primary-color;
    color: #fff;
    border-radius: 30px;
    // background-image: linear-gradient(260deg, #4062bb 0%, #5200ae 74%);
    background: #7878ad3b;
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
      p {
        font-size: 22px;
        white-space: nowrap;
      }

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

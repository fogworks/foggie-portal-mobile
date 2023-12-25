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
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { useRouter } from 'vue-router';
  import { formatNumber } from '@/utils/util';
  const router = useRouter();
  import useUserAssets from './useUserAssets.ts';
  const { getUserAssets, getExchangeRate, dmc2usdRate, cloudBalance, cloudRecharge, cloudWithdraw } = useUserAssets();
  onMounted(async () => {
    getUserAssets();
    getExchangeRate();
  });
  const cloudBalanceNum = computed(() => {
    return formatNumber(cloudBalance.value);
  });
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
      router.push({ name: 'Withdraw' });
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
    background-image: linear-gradient(260deg, #4062bb 0%, #5200ae 74%);

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
      .service_item {
        display: flex;
        flex-direction: column;
        align-items: center;
        .service_img {
          img {
            width: 100px;
            padding: 10px;
            height: 100px;
            border-radius: 50%;
            background: #fff;
            background-image: linear-gradient(260deg, #4062bb 0%, #5200ae 74%);
          }
        }
        .service_item_title {
          font-size: 24px;
        }
      }
    }
  }
</style>

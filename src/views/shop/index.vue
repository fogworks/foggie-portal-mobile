<template>
  <div style="height: auto; padding-bottom: 50px">
    <div class="out_blue">
      <div class="inside_blue">
        <IconArrowLeft class="back_img" @click="shopBack"></IconArrowLeft>
        <div class="balance_options"> Shop</div>
      </div>
    </div>
    <div class="top_list_line" @click="toAddPay"> <img src="@/assets/list.svg" /><span>Pending Stake order</span> </div>
    <!-- !isShowSpaceInfo && !isShowList && !isShowUnpayItem -->
    <div class="vip_order_choose" v-if="currentPage === 'calc'">
      <div class="vip_title">Select space and time</div>
      <div class="img_list">
        <nut-form class="query_form" :model-value="shopForm">
          <!-- <div class="custom_order">Custom</div> -->
          <!-- <nut-form-item label="Service Period">
            <nut-radio-group class="week_radio" v-model="shopForm.week" direction="horizontal">
              <nut-radio shape="button" :label="52">52 weeks</nut-radio>
              <nut-radio shape="button" :label="38">38 weeks</nut-radio>
              <nut-radio shape="button" :label="24">24 weeks</nut-radio>
            </nut-radio-group>
          </nut-form-item>
          <nut-form-item label="Custom Cycle">
            <nut-range hidden-range v-model="shopForm.week" :max="52" :min="24" />
          </nut-form-item> -->
          <nut-form-item :label="maxSpaceText">
            <!-- @focus="buyDisabled = true"
            @blur="buyDisabled = false" -->
            <nut-input-number
              :max="maxSpace"
              :min="1"
              decimal-places="0"
              v-model="shopForm.quantity"
              step="1"
              class="nut-input-text"
              placeholder="Space"
            />
          </nut-form-item>
          <div style="padding: 10px 20px 6px 20px; font-size: 11px; font-style: italic; font-weight: bold" class="bottom_tips_line">
            <img src="@/assets/tips1.svg" class="warn_svg" />
            Estimated required stake DMCX:<span
              style="margin-left: 10px; margin-right: 5px; display: inline-block; font-weight: bold; text-decoration: underline"
              >{{ Number(1 * 1 * shopForm.quantity).toFixed(4) }}</span
            >DMCX
          </div>

          <div
            style="padding: 4px 20px; font-size: 11px; font-style: italic; font-weight: bold; margin-bottom: 10px"
            class="bottom_tips_line"
          >
            <img src="@/assets/tips1.svg" class="warn_svg" />
            You can stake DMCX for free to obtain the corresponding space, and after the expiration, you can redeem your DMCX.
          </div>
          <!-- <div style="padding: 4px 20px; font-size: 11px; font-style: italic; font-weight: bold" class="bottom_tips_line">
            <img src="@/assets/tips1.svg" class="warn_svg" />
            The maximum data security guarantee for the chain is only 52 weeks
          </div> -->

          <div class="bottom_btn">
            <!-- <nut-button type="warning" plain :loading="loading" @click="showTop = false"> Cancel </nut-button> -->
            <nut-button type="warning" @click="submit" :disabled="buyDisabled" :loading="loading"> Confirm </nut-button>
          </div>
        </nut-form>
      </div>
    </div>
    <!-- isShowSpaceInfo && !isShowList -->
    <div class="space-info" v-if="currentPage === 'stake'">
      <div class="vip_title">Your Order Summary</div>
      <!-- <hr /> -->
      <!-- <p>
        <span class="p_label">Weeks: </span><span>{{ shopForm.week }} WEEK</span></p
      > -->
      <p>
        <span class="p_label">Space: </span><span>{{ shopForm.quantity }} GB</span></p
      >
      <p @click="copySecret(calc_price.total)">
        <span class="p_label">Need Stake:</span><span>{{ calc_price.total }} DMCX<IconCopy color="#bef508"></IconCopy></span>
      </p>
      <p @click="copySecret(address)">
        <span class="p_label">Payment account: </span
        ><span>{{ address ? `${address.substr(0, 6)}...${address.substr(-6)}` : address }} <IconCopy color="#bef508"></IconCopy></span>
      </p>
      <p @click="copySecret(calc_price.to)">
        <span class="p_label">Receiving account:</span
        ><span
          >{{ calc_price.to ? `${calc_price.to.substr(0, 6)}...${calc_price.to.substr(-6)}` : calc_price.to }}
          <IconCopy color="#bef508"></IconCopy
        ></span>
      </p>
      <!-- <nut-checkbox v-model="isShowQRCode" class="my_choose_code">I want to scan the code for payment</nut-checkbox> -->
      <!-- v-show="!isShowQRCode" -->
      <div class="my_canvas_box">
        <canvas ref="qrCanvas"></canvas>
        <div style="padding: 4px 0px; font-size: 10px; font-style: italic; font-weight: bold; color: #bef508" class="bottom_tips_line">
          You can transfer by scanning the code on OKX Wallet.
        </div></div
      >

      <div class="bottom_btn">
        <nut-button type="warning" plain :loading="loading" @click="currentPage = 'calc'"> Cancel </nut-button>
        <!-- <nut-button type="warning" @click="confirmBuy('scan')" class="scan_btn" style="font-size: 12px; font-weight: bold"
          >Scan Transaction
        </nut-button> -->
        <nut-button type="primary" @click="confirmBuy">confirm Stake</nut-button>
      </div>
      <hr />
      <div style="padding: 4px 0px; font-size: 11px; font-style: italic; font-weight: bold; color: #bef508" class="bottom_tips_line">
        <img src="@/assets/tips1.svg" class="warn_svg" />
        1. You need to make the transfer within 10 minutes before and after submitting the pledge.
      </div>
      <div style="padding: 4px 0px; font-size: 11px; font-style: italic; font-weight: bold; color: #bef508" class="bottom_tips_line">
        <img src="@/assets/tips1.svg" class="warn_svg" />
        2. If the transfer is not made within the first 10 minutes, you can manually supplement the transaction ID within 30 minutes.
      </div>
      <div style="padding: 4px 0px; font-size: 11px; font-style: italic; font-weight: bold; color: #bef508" class="bottom_tips_line">
        <img src="@/assets/tips1.svg" class="warn_svg" />
        3. If it is not replenished within 30 minutes, the order will be discarded.
      </div>
    </div>

    <!-- unpay_list_wrap isShowList-->
    <div class="space-info unpay_list_wrap" v-if="currentPage === 'unPayList'">
      <div class="vip_title">Pending Stake order</div>
      <div style="padding: 4px 0px; font-size: 11px; font-style: italic; font-weight: bold; color: #bef508" class="bottom_tips_line">
        <img src="@/assets/tips1.svg" class="warn_svg" />
        1. You need to make the transfer within 10 minutes before and after submitting the pledge.
      </div>
      <div style="padding: 4px 0px; font-size: 11px; font-style: italic; font-weight: bold; color: #bef508" class="bottom_tips_line">
        <img src="@/assets/tips1.svg" class="warn_svg" />
        2. If the transfer is not made within the first 10 minutes, you can manually supplement the transaction ID within 30 minutes.
      </div>
      <div style="padding: 4px 0px; font-size: 11px; font-style: italic; font-weight: bold; color: #bef508" class="bottom_tips_line">
        <img src="@/assets/tips1.svg" class="warn_svg" />
        3. If it is not replenished within 30 minutes, the order will be discarded.
      </div>
      <div class="unpay_list">
        <div class="unpay_list_item" v-for="(item, index) in unpayList" :key="index">
          <div class="unpay_list_icon">
            <img src="@/assets/list.svg" />
          </div>
          <div class="unpay_list_name">Order-{{ item.order_id }} </div>
          <div class="unpay_list_price">{{ item.dmcx_price }} DMCX </div>
          <div class="unpay_list_price">{{ transferUTCTime(item.created_at) }} </div>
          <div class="unpay_list_time">{{ item.expireTime || '' }} </div>

          <div class="pay_btn_list">
            <div class="unpay_list_pay" @click="addStake(item)">Add Stake</div>
            <div class="unpay_list_pay cancel_pay" @click="cancelOrder(item)">Cancel</div>
          </div>
        </div>
        <div v-if="!unpayList.length" class="unpay_list_empty">
          <nut-empty description="There are no orders that require stake " image="error"></nut-empty>
          <nut-button type="primary" class="shopBack" @click="shopBack">Back</nut-button>
        </div>
      </div>
    </div>

    <!-- isShowUnpayItem isShowUnpayItem && !isShowList-->
    <div class="space-info unpay_item_wrap" v-if="currentPage === 'unPayItem'">
      <div class="vip_title"> Order add Stake</div>
      <!-- <p>
        <span class="p_label">Weeks: </span><span>{{ currentStakeItem.epoch }} WEEK</span></p
      > -->
      <p>
        <span class="p_label">Space: </span><span>{{ getfilesize(currentStakeItem.space) }} </span></p
      >
      <p @click="copySecret(currentStakeItem.dmcx_price)">
        <span class="p_label">Need Stake::</span><span>{{ currentStakeItem.dmcx_price }} DMCX<IconCopy color="#bef508"></IconCopy></span>
      </p>
      <p @click="copySecret(currentStakeItem.wallet)">
        <span class="p_label">Payment account: </span
        ><span
          >{{
            currentStakeItem.wallet
              ? `${currentStakeItem.wallet.substr(0, 6)}...${currentStakeItem.wallet.substr(-6)}`
              : currentStakeItem.wallet
          }}
          <IconCopy color="#bef508"></IconCopy
        ></span>
      </p>
      <p @click="copySecret(currentStakeItem.to_wallet)">
        <span class="p_label">Receiving account:</span
        ><span
          >{{
            currentStakeItem.to_wallet
              ? `${currentStakeItem.to_wallet.substr(0, 6)}...${currentStakeItem.to_wallet.substr(-6)}`
              : currentStakeItem.to_wallet
          }}
          <IconCopy color="#bef508"></IconCopy
        ></span>
      </p>

      <nut-input style="color: #666" v-model="txid" placeholder="Please enter the transaction hash" />
      <div style="padding: 4px 0px; font-size: 11px; font-style: italic; font-weight: bold; color: #bef508" class="bottom_tips_line">
        <img src="@/assets/tips1.svg" class="warn_svg" />
        1. You can separate multiple transactions ID with commas, such as "0xa 2b88,0xa..... 7659,0xa.....6567"
      </div>
      <div style="padding: 4px 0px; font-size: 11px; font-style: italic; font-weight: bold; color: #bef508" class="bottom_tips_line">
        <img src="@/assets/tips1.svg" class="warn_svg" />
        2. Supports up to 3 transactions ID, please ensure that 3 transfers meet the stake amount
      </div>
      <div class="bottom_btn">
        <nut-button type="warning" plain :loading="loading" @click="currentPage = 'unPayList'"> Cancel </nut-button>
        <nut-button type="primary" @click="confirmAddStake" style="margin-top: 10px">Add Stake</nut-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="Shop">
  import IconArrowLeft from '~icons/home/arrow-left.svg';
  import { toRefs, reactive, onMounted } from 'vue';
  import IconCopy from '~icons/home/copy.svg';
  import { useRouter } from 'vue-router';
  import moment from 'moment';
  import { getfilesize, transferUTCTime } from '@/utils/util';
  const router = useRouter();
  import { Web3 } from 'web3';
  const unpayList = ref([]);
  const isShowList = ref(false);
  const isShowUnpayItem = ref(false);
  const currentStakeItem = ref({});
  const currentPage = ref('calc');
  import QRCode from 'qrcode';
  const qrCanvas = ref(null);
  const isShowQRCode = ref(false);

  import { dm_calc_price, get_available_capacity, dm_order_stake, getDmOrder, dm_order_add_transaction, cancelDmOrder } from '@/api';
  import { showToast } from '@nutui/nutui';

  const isShowSpaceInfo = ref(false);

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
      quantity: 1 as number,
      week: 1,
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

  const address = computed(() => userStore.getUserInfo?.address || userStore.getAddress);

  async function submit() {
    const d = {
      wallet: address.value,
      space: shopForm.value.quantity,
      //   epoch: shopForm.value.week,
    };
    dm_calc_price(d).then((res) => {
      if (res.code == 200) {
        calc_price.value = res.data;
        isShowSpaceInfo.value = true;
        currentPage.value = 'stake';
        showTop.value = false;
        nextTick(() => {
          QRCode.toCanvas(qrCanvas.value, calc_price.value.to, (error) => {
            if (error) console.error(error);
          });
        });
      }
    });
  }

  import tokenABI from './GWTToken.json';
  const tokenAddress = '0x848e56Ad13B728a668Af89459851EfD8a89C9F58';
  const X_LAYER_CHAIN_ID = '0xc4';

  const transferFn = async () => {
    let tx = {
      transactionHash: '',
    };
    if (typeof window.ethereum !== 'undefined') {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      const web3 = new Web3(window.ethereum);
      const accounts = await web3.eth.getAccounts();
      const sender = accounts[0];
      const tokenContract = new web3.eth.Contract(tokenABI, tokenAddress);
      const count = calc_price.value.total;
      const amount = web3.utils.toWei(count.toString(), 'ether');
      const recipient = calc_price.value.to;
      const gasPrice = await web3.eth.getGasPrice();

      const chainId = await web3.eth.getChainId();
      console.log('Current Chain ID:', chainId);

      if (chainId !== parseInt(X_LAYER_CHAIN_ID, 16)) {
        try {
          await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: X_LAYER_CHAIN_ID }],
          });
          console.log('Switched to X Layer network');
        } catch (switchError) {
          console.error('Failed to switch to X Layer network', switchError);
          alert('Please switch to the X Layer network in your wallet.');
          return;
        }
      }

      try {
        tx = await tokenContract.methods.transfer(recipient, amount).send({ from: sender, gasPrice: gasPrice });
        console.log('transfer-------tx', tx);
      } catch (error) {
        console.log('transfer-------', error);
      }
    }
    return tx;
  };

  const confirmBuy = async () => {
    // alert(txid.value);
    // txid.value = '0x2bbed9335d1a23ad51b1e4ea7baf3cafe49d466302c557705ea95027451fd7fc';
    // if (!txid.value) {
    //   showToast.fail('Please enter the transaction hash');
    //   return;
    // }
    // if (!isShowQRCode.value) {
    //   const tx = await transferFn();
    //   if (!tx?.transactionHash) {
    //     showToast.fail('Transaction failed');
    //     return;
    //   }
    // }
    window.ethereum && window.ethereum.enable();
    const web3 = new Web3(window.ethereum);
    let date = moment.utc(new Date().getTime()).format('YYYYMMDDTHHmmss');
    let _date = date + 'Z';
    shopForm.value.week = 1;
    const message = `${Number(shopForm.value.week)}\n${Number(shopForm.value.quantity)}\n${calc_price.value.total}\n${_date}`;
    // const message = `${Number(shopForm.value.week)}&${Number(shopForm.value.quantity)}&${calc_price.value.total}&${_date}`;
    let signature = await web3.eth.personal.sign(message, address.value, '');
    const d = {
      // orderId: 8,
      //   orderId: calc_price.value.orderId,
      //   transactionId: txid.value,
      wallet: address.value,
      toWallet: calc_price.value.to,
      method: 1,
      space: Number(shopForm.value.quantity),
      epoch: Number(shopForm.value.week),
      total: calc_price.value.total,
      signature: signature,
      timestamp: _date,
    };
    let res = await dm_order_stake(d);
    if (res.code == 200) {
      showToast.success('You have successfully created the order. Please complete the payment and wait for the order to be completed');
      isShowSpaceInfo.value = false;
      //   currentPage.value = 'calc';
      const tx = await transferFn();
      if (!tx?.transactionHash) {
        showToast.fail('Transaction failed');
        return;
      }
      router.push('/home');
    }

    // web3.eth.personal.sign(message, '0xf97bb5db0c5aee67051faea1669110eed171cc10', '').then((signature) => {
    //   dm_order_stake(d).then((res) => {
    //     if (res.code == 200) {
    //       showToast.success('You have successfully made the purchase and can check it in your order');
    //       isShowSpaceInfo.value = false;
    //       currentPage.value = 'calc';
    //     }
    //   });
    // });
  };

  const maxSpace = ref(0);
  const maxSpaceText = ref(' Space(GB) Max: 1 GB');

  const copySecret = (key: string) => {
    var input = document.createElement('textarea');
    input.value = key;
    document.body.appendChild(input);
    input.select();
    document.execCommand('Copy');
    document.body.removeChild(input);
    showToast.success('Copy succeeded');
  };

  const toBuy = () => {
    showTop.value = true;
    isShowSpaceInfo.value = false;
    currentPage.value = 'stake';
  };
  const toAddPay = () => {
    isShowList.value = true;
    isShowSpaceInfo.value = false;
    currentPage.value = 'unPayList';
    initUnpayData();
  };
  const initUnpayData = () => {
    if (address.value) {
      const d = {
        wallet: address.value,
        pageNo: 1,
        pageSize: 100,
        status: 2, //'订单状态 1 初始 2 买单中 3 生效 4 购买失败 5 订单超时 6 废弃 7 订单取消 8 扩容中',
      };
      getDmOrder(d).then((res) => {
        if (res.code === 200) {
          unpayList.value = res.data.list;
          initListTimer();
        }
      });
    }
  };
  const addStake = (item) => {
    currentPage.value = 'unPayItem';
    isShowList.value = false;
    isShowSpaceInfo.value = false;
    isShowUnpayItem.value = true;
    currentStakeItem.value = item;
  };
  const cancelOrder = (item) => {
    const data = {
      orderId: item.order_id,
    };
    cancelDmOrder(data).then((res) => {
      if (res.code == 200) {
        showToast.success('The order has been successfully cancelled');
        currentPage.value = 'calc';
        console.log(res);
      }
    });
  };
  const confirmAddStake = () => {
    if (!txid.value) {
      showToast.fail('Please enter the transaction hash');
      return;
    }
    const d = {
      orderId: currentStakeItem.value.order_id,
      transactionId: txid.value,
    };
    dm_order_add_transaction(d).then((res) => {
      if (res.code == 200) {
        showToast.success('You have successfully made the stake and can check it in your order');
        router.push('/home');
      }
    });
  };
  const shopBack = () => {
    if (currentPage.value === 'stake') {
      isShowSpaceInfo.value = false;
      currentPage.value = 'calc';
    } else if (currentPage.value === 'unPayList') {
      isShowSpaceInfo.value = false;
      isShowList.value = false;
      currentPage.value = 'calc';
    } else if (currentPage.value === 'unPayItem') {
      currentPage.value = 'unPayList';
    } else {
      router.back();
    }
  };
  // 计算距离操作的过期时间
  function countDown(start) {
    let startTime = new Date(start); // 处理开始时间
    // 计算最后时间
    let end = new Date(startTime).getTime() + 30 * 60 * 1000;
    // 当前时间
    let time_now = new Date().getTime();
    // 最后时间-当前时间
    let msec = end - time_now;
    if (msec > 0) {
      const min = parseInt((msec / 1000 / 60) % 60);
      let sec = parseInt((msec / 1000) % 60);
      // 补零操作
      // min = min > 9 ? min : '0' + min
      sec = sec > 9 ? sec : '0' + sec;
      return `00:${min}:${sec}`;
    } else {
      return '倒计时结束';
    }
  }
  const initListTimer = () => {
    if (unpayList.value.length > 0) {
      for (const i in unpayList.value) {
        beginTimer(i);
      }
    }
  };
  // 开始计时
  const beginTimer = (i) => {
    const that = this;
    const item = unpayList.value[i];
    console.log(`beginTimer`, i, item);
    item.timer = setInterval(() => {
      if (countDown(item.created_at) === '倒计时结束') {
        item.expireTime = '';
        clearInterval(item.timer);
      } else {
        item.expireTime = countDown(item.created_at);
      }
    }, 1000);
  };

  watch(
    showTop,
    (val) => {
      state.shopForm.quantity = 100;
      state.shopForm.week = 1;
      state.shopForm.floating_ratio = 5;
    },
    { deep: true },
  );

  onMounted(async () => {
    // initUnpayData();
    get_available_capacity().then((res) => {
      if (res.code == 200) {
        maxSpace.value = res.data;
        maxSpaceText.value = `Space(GB) Max: ${maxSpace.value} GB`;
        shopForm.value.quantity = res.data;
      }
    });
  });
</script>

<style lang="scss">
  .top_list_line {
    display: flex;
    align-items: end;
    justify-content: end;
    color: #fff;
    margin-right: 10px;
    cursor: pointer;
    span {
      font-size: 24px;
      font-weight: bold;
      color: #9dfc37;
      text-decoration: underline;
    }
    img {
      width: 34px !important;
      height: 34px !important;
      margin-right: 10px;
    }
  }
  .bottom_tips_line {
    display: flex;
    .warn_svg {
      width: 26px !important;
      height: 26px !important;
      margin-right: 8px;
    }
  }

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
        background: linear-gradient(329deg, #9fd72f 0%, #99d017 25%, rgb(42 42 41) 83%, #181b24 100%);
        font-size: 40px;
        border: 0px;
        color: #ffffff;
        font-weight: 600px;
        font-weight: bolder;
      }
      .nut-button--disabled {
        background: #aaa !important;
        opacity: 0.28 !important;
      }
    }
  }
  .my_choose_code {
    margin-bottom: 10px;
  }
  .nut-checkbox__label {
    color: #fff !important;
    font-weight: bold;
  }
  .nut-checkbox__icon {
    color: #9fd72f;
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
    // padding: 0 20px 20px 20px;
    color: #9dfc37;
    .custom_order {
      text-align: center;
      font-size: 36px;
    }
    :deep {
      .nut-range-bar {
        background: var(--nut-range-bar-bg-color, linear-gradient(135deg, #7ed412 0%, #a9f108 100%));
      }
      .nut-range::before {
        background-color: #ffffff !important;
      }
      .nut-radio__button--active {
        background: #9dfc37 !important;
        color: #000;
        border: #9dfc37;
      }
      .nut-range-button {
        background: #9dfc37;
      }
      .nut-input-number__icon {
        color: #fff !important;
      }
      .nut-form-item {
        flex-direction: column;
        height: 180px;
        background: transparent !important;

        .nut-form-item__label {
          width: 100%;
          margin-bottom: 20px;
          font-weight: 800;
          color: #9dfc37;
        }
      }

      .nut-cell-group__wrap {
        padding-bottom: 20px;
        box-shadow: none;
        background: transparent !important;
      }

      .nut-range-button .number {
        font-weight: 800;
        transform: translate3d(0, 100%, 0);
        color: #9dfc37;
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
          background: linear-gradient(329deg, #9fd72f 0%, #99d017 25%, rgb(42 42 41) 83%, #181b24 100%);
          border: none;
          color: #fff;
          font-weight: bolder;

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
      .scan_btn {
        background: linear-gradient(
          135deg,
          rgb(255, 158, 13) 0%,
          rgb(255, 167, 13) 45%,
          rgb(255, 182, 13) 83%,
          rgb(255, 190, 13) 100%
        ) !important;
      }
    }
  }

  .balance_options {
    display: flex;
    align-items: center;
    justify-content: center;
    width: calc(100% - 60px);
    margin-top: 20px;
    position: absolute;
    left: 60px;
    top: 20px;
    color: #fff;
    font-weight: bolder;
    font-size: 34px;
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
    border: 0.666667vw solid #bef508;
    margin: 20px;
    border-radius: 10px;
    background: #fff;
    padding: 20px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    margin-top: 70px;
    color: #fff;
    background: #ffffff26;
    .vip_title {
      font-size: 44px;
      font-weight: bold;
      margin-bottom: 20px;
      text-align: center;
      background: -webkit-linear-gradient(240deg, #c4b625 20.27%, #9dfc37 92.67%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
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
    width: 90%;
    margin: 0 auto;
    color: #fff;
    border: 5px solid #f3d1a2;
    border: 0.666667vw solid #bef508;
    margin: 20px;
    border-radius: 10px;
    background: #fff;
    padding: 20px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    margin-top: 70px;
    color: #fff;
    background: #ffffff26;
    .vip_title {
      font-size: 44px;
      font-weight: bold;
      margin-bottom: 20px;
      text-align: center;
      background: -webkit-linear-gradient(240deg, #c4b625 20.27%, #9dfc37 92.67%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    p {
      margin: 5px 0;
      height: 70px;
      line-height: 70px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: #a1ee08;
      font-weight: 800;
      color: #9dfc37;
      font-size: 28px;
      .p_label {
        font-weight: bold;
        color: #fff;
      }
    }
    .bottom_btn {
      display: flex;
      justify-content: space-around;
      align-items: center;
      position: relative;
      margin-top: 20px;
      margin-bottom: 10px;
      :deep {
        .nut-button {
          width: 40%;
          background: linear-gradient(329deg, #9fd72f 0%, #99d017 25%, rgb(42 42 41) 83%, #181b24 100%);
          border: none;
          font-weight: bolder;

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
      .scan_btn {
        background: linear-gradient(
          135deg,
          rgb(255, 158, 13) 0%,
          rgb(255, 167, 13) 45%,
          rgb(255, 182, 13) 83%,
          rgb(255, 190, 13) 100%
        ) !important;
      }
    }
  }
  .unpay_list_wrap {
    .unpay_list {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;

      font-size: 22px;
      font-weight: 600;
      line-height: 40px;
      width: 100%;
      margin-top: 30px;
      .unpay_list_item {
        margin: 34px 0 30px;
        // width: 33%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
      .unpay_list_icon {
        border: 1px solid #9dfc37;
        border-radius: 50%;
        width: 90px;
        height: 90px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 20px;
        img {
          width: 60px;
          height: 60px;
        }
      }
      .pay_btn_list {
        display: flex;
      }
      .unpay_list_pay {
        padding: 6px 30px;
        border-radius: 12px;
        margin-top: 10px;
        background: linear-gradient(329deg, #b6e557 0%, #99d017 25%, rgb(131 131 16) 83%, #181b24 100%);
        margin-right: 16px;
      }
      .cancel_pay {
        background: linear-gradient(329deg, #f18c07 0%, #ef6828 25%, rgb(218 63 22) 83%, #e56125 100%);
      }
    }
    .unpay_list_name {
      font-weight: bold;
      font-size: 24px;
    }
    .unpay_list_time {
      color: #7de40c;
    }
    .unpay_list_empty {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      .shopBack {
        background: linear-gradient(329deg, #b6e557 0%, #99d017 25%, rgb(131 131 16) 83%, #181b24 100%);
      }
    }
  }
  .my_canvas_box {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    canvas {
      width: 200px !important;
      height: 200px !important;
    }
  }
</style>

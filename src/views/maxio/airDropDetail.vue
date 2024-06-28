<template>
  <div class="airdrop_detail_root">
    <div class="airdrop_detail_head">
      <div class="maxio_img" @click="changeTab('home')">
        <img src="@/assets/maxio/back.svg" alt="" class="icon_img" />
      </div>
      <span>{{ currentItem.title }}</span>
    </div>
    <div class="airdrop_detail_content">
      <img :src="currentItem.cover" v-if="currentItem.cover" class="head_img" />
      <img src="@/assets/maxio/foggLogo1.png" v-else class="head_img" />

      <div class="airdrop_capm_itemList titleLine">
        <img :src="currentItem.currency_logo" v-if="currentItem.currency_logo" />
        <img src="@/assets/maxio/chain.svg" v-else />
        <span>{{ currentItem.chain_name }}</span>
        <div class="airdrop_capm_item_btn participate">
          {{ activeStatus[currentItem.campaignStatus] }}
        </div>
      </div>
      <div class="airdrop_capm_itemList slogan">
        {{ currentItem.slogan }}
      </div>

      <div class="airdrop_capm_item_keyList">
        <div class="title">
          <img src="@/assets/maxio/walletBind.svg" />
          wallet:</div
        >
        <span class="airdrop_capm_item_keyValue">{{ currentItem.wallet ? currentItem.wallet : "You haven't bound your wallet yet" }}</span>
      </div>
      <div class="airdrop_capm_item_keyList">
        <div class="title">
          <img :src="currentItem.currency_logo" v-if="currentItem.currency_logo" /> <img src="@/assets/maxio/reward.svg" v-else />Airdrop
          Offerings:</div
        >
        <span class="airdrop_capm_item_keyValue"
          >{{ currentItem.amount }}<span class="unit">{{ currentItem.currency }}</span></span
        >
      </div>
      <div class="airdrop_capm_item_keyList">
        <div class="title"><img src="@/assets/maxio/pp.svg" />Participants:</div>
        <span class="airdrop_capm_item_keyValue">{{ currentItem.participants || 0 }}</span>
      </div>
      <div class="airdrop_capm_item_keyList">
        <div class="title"> <img src="@/assets/maxio/reward.svg" />Airdrop Received:</div>
        <span class="airdrop_capm_item_keyValue"> {{ currentItem.campaignStatus == 8 ? currentItem.credited_amount : '****' }}</span>
      </div>
      <div class="airdrop_capm_item_keyList">
        <div class="title"><img src="@/assets/maxio/clock.svg" />Airdrop Period:</div>
        <span class="airdrop_capm_item_keyValue">
          {{ currentItem.start_time && transferUTCTime(currentItem.start_time) }}-{{
            currentItem.end_time && transferUTCTime(currentItem.end_time)
          }}</span
        >
      </div>

      <div class="airdrop_capm_item_keyList" v-if="currentItem.campaignStatus == 1 || currentItem.campaignStatus == 5">
        <div class="title">
          <img src="@/assets/maxio/time.svg" />{{ currentItem.campaignStatus == 1 ? 'Event countdown begins' : 'Withdraw countdown' }}</div
        >
        <span class="airdrop_capm_item_keyValue"> {{ detailDownCount }}</span>
      </div>
      <div class="airdrop_capm_itemList tips">
        <span v-if="currentItem.campaignStatus == 1 && currentItem.wallet">The Event is coming very soon</span>
        <span v-if="currentItem.campaignStatus == 2 && currentItem.wallet && currentItem.type == 1 && Number(currentItem?.inventory) <= 0"
          >This event is extremely hot and the number of participants has reached the limit. Thank you.</span
        >
        <span v-if="currentItem.campaignStatus == 5"
          >You have successfully participated in the event!We will enable withdrawals after
          {{ transferUTCTime(currentItem.apply_for_start_time) }}</span
        >
        <span v-if="(currentItem.campaignStatus == 1 || currentItem.campaignStatus == 2) && !currentItem.wallet"
          >You haven't bound your wallet yet. Please bind your wallet first before participating in the event.</span
        >
      </div>
      <div class="airdrop_detail_btn_line">
        <div
          class="airdrop_detail_btn"
          v-if="
            currentItem.campaignStatus == 2 &&
            currentItem.wallet &&
            (currentItem.type == 2 || (currentItem.type == 1 && Number(currentItem?.inventory) > 0))
          "
          @click="toApply"
        >
          Apply</div
        >
        <div
          class="airdrop_detail_btn"
          v-if="(currentItem.campaignStatus == 1 || currentItem.campaignStatus == 2) && !currentItem.wallet"
          @click="toBind"
        >
          Bind</div
        >
        <div class="airdrop_detail_btn" v-if="currentItem.campaignStatus == 6 || currentItem.campaignStatus == 9" @click="toWithdraw">
          withDraw</div
        >
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, toRefs, computed, onMounted, onUnmounted } from 'vue';
  import { get_campaignDetail, campaignApply, post_campaignClaim, campaignBind } from '@/api/index';
  import { Web3 } from 'web3';
  import { showToast } from '@nutui/nutui';
  import { getfilesize, transferTime, transferUTCTime } from '@/utils/util';
  const router = useRouter();
  const route = useRoute();
  const currentItem = ref({});
  const currentData = ref({});
  const currentDeviceItem = ref({});
  const detailTime = ref(null);
  const detailDownCount = ref('');
  const activeStatus = ref({
    1: 'Pending',
    2: 'Ongoing',
    3: ' Applied successfully',
    4: 'Not allocated',
    5: 'Allocated',
    6: 'Allocated',
    7: 'Withdraw in progress',
    8: 'Withdraw successfully',
    9: 'Withdraw failed',
    13: 'COMPLETED',
    11: 'Event suspended',
    12: ' Withdraw suspended',
  });
  onMounted(() => {
    currentData.value = JSON.parse(window.localStorage.getItem('currentActive'));
    currentDeviceItem.value = JSON.parse(window.localStorage.homeChooseBucket);
    initDetail();
  });
  onUnmounted(() => {
    clearInterval(detailTime.value);
  });

  const initDetail = () => {
    console.log('------initDetail-----');
    const data = {
      campaignId: currentData.value.campaign_id,
      maxioUuid: currentDeviceItem.value.device_id,
    };
    get_campaignDetail(data).then((res) => {
      console.log('get_campaignDetail', res);
      currentItem.value = res.data;
      detailTime.value = setInterval(() => {
        detailDownCountFn();
      }, 1000);
    });
  };
  const detailDownCountFn = () => {
    const now = Date.now();
    if (currentItem.value.campaignStatus == 1) {
      const startTime = new Date(currentItem.value.start_time).getTime();
      const diff = Math.max(0, Math.floor((startTime - now) / 1000));
      if (diff > 0) {
        const hours = Math.floor(diff / 3600);
        const minutes = Math.floor((diff % 3600) / 60);
        const seconds = diff % 60;
        detailDownCount.value = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds
          .toString()
          .padStart(2, '0')}`;
      } else {
        refreshDetail();
        detailDownCount.value = '';
      }
    } else if (currentItem.value.campaignStatus == 5 || currentItem.value.campaignStatus == 3) {
      const startTime = new Date(currentItem.value.apply_for_start_time).getTime();
      const diff = Math.max(0, Math.floor((startTime - now) / 1000));
      if (diff > 0) {
        const hours = Math.floor(diff / 3600);
        const minutes = Math.floor((diff % 3600) / 60);
        const seconds = diff % 60;
        detailDownCount.value = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds
          .toString()
          .padStart(2, '0')}`;
      } else {
        refreshDetail();
        detailDownCount.value = '';
      }
    } else {
      detailDownCount.value = '';
    }
  };
  const changeTab = () => {
    router.push({ path: '/airDropList' });
  };
  const toBind = async () => {
    const ua = navigator.userAgent;
    const isIOS = /iphone|ipad|ipod|ios/i.test(ua);
    const isAndroid = /android|XiaoMi|MiuiBrowser/i.test(ua);
    const isMobile = isIOS || isAndroid;
    const isOKApp = /OKApp/i.test(ua);
    window.ethereum.enable();
    const web3 = new Web3(window.ethereum);
    // const message = 'Signature request from FoggieMAX';
    // web3.eth.personal.sign(message, '0xf97bb5db0c5aee67051faea1669110eed171cc10', '').then((signature) => {
    //   const messageHash = web3.utils.sha3(message);
    //   const publicKey = web3.eth.accounts.recover(messageHash, signature);
    //   console.log(signature, publicKey, 'ssssss');
    // });
    // return;
    if (isMobile && !isOKApp) {
      const encodedUrl =
        'https://www.okx.com/download?deeplink=' + encodeURIComponent('okx://wallet/dapp/url?dappUrl=' + encodeURIComponent(location.href));
      window.location.href = encodedUrl;
    } else if (window.okxwallet) {
      const accounts = await window.okxwallet.request({
        method: 'eth_requestAccounts',
      });
      let publicKey = '';
      const message = 'Signature request from FoggieMAX';
      window.okxwallet
        .request({
          method: 'eth_sign',
          params: [accounts, message],
        })
        .then((signature) => {
          //   showToast.success('signature---' + signature);
          const messageHash = web3.utils.sha3(message);
          const publicKey = web3.eth.accounts.recover(messageHash, signature);
          showToast.success('publicKey---' + publicKey);
          let d = {
            maxioUuid: currentDeviceItem.value.device_id,
            wallet: accounts,
            publicKey: publicKey,
            chainGroupId: currentItem.value.chain_group_id,
            chainId: currentItem.value.chain_id,
          };
          campaignBind(d).then((r) => {
            if (r?.data) {
              showToast.success('Bind success!!!!!');
              initDetail();
            } else {
              showToast.success('Bind failed!!!!!');
            }
          });
        })
        .catch((error) => console.error);
    }
  };
  const toApply = () => {
    // console.log(currentItem.value, 'currentItem.value');
    let data = {
      campaignId: currentItem.value.campaign_id,
      maxioUuid: currentDeviceItem.value.device_id,
      wallet: currentItem.value.wallet,
      chainId: currentItem.value.chain_id,
      chainGroupId: currentItem.value.chain_group_id,
    };
    campaignApply(data).then((r) => {
      if (r?.data == 1) {
        showToast.success('You have applied the airdrop successfully please wait to withdraw');
        initDetail();
      } else if (r?.data?.fail == 20022) {
        showToast.fail(r?.data?.message);
      }
    });
  };
  const toWithdraw = () => {
    let data = {
      campaignId: currentItem.value.campaign_id,
      maxioUuid: deviceData.device_id,
    };
    post_campaignClaim(data).then((r) => {
      showToast.success('Added to the withdrawal queue...');
      initDetail();
    });
    //     if (currentItem.value?.priority && currentItem.value?.priority < 4) {
    //     ElMessageBox.confirm(
    //       `<img class="confirm-fireworks" src="${require('@/assets/MAXIO/yanhua.svg')}" /><img class="confirm-fireworks" src="${require('@/assets/MAXIO/yanhua.svg')}" /><img class="confirm-fireworks" src="${require('@/assets/MAXIO/yanhua.svg')}" /><span class="confirm-fireworks-span">Congrats! You are number ${currentItem.value.priority} of MAX IO holders and share another 20% incentives! </span>`,
    //       "Notice",
    //       {
    //         confirmButtonText: "OK",
    //         dangerouslyUseHTMLString: true,
    //         "close-on-click-modal": false,
    //       }
    //     )
    //       .then(() => {
    //         let data = {
    //           campaignId: currentItem.value.campaign_id,
    //           maxioUuid: deviceData.device_id,
    //         };
    //         post_campaignClaim(data).then((r) => {
    //           ElNotification({
    //             title: "Success",
    //             message: "Added to the withdrawal queue",
    //             type: "success",
    //             position: "bottom-left",
    //           });
    //           initDetail();
    //         });
    //       })
    //       .catch(() => {});
    //   } else {
    //     let data = {
    //       campaignId: currentItem.value.campaign_id,
    //       maxioUuid: deviceData.device_id,
    //     };
    //     post_campaignClaim(data).then((r) => {
    //       ElNotification({
    //         title: "Success",
    //         message: "Added to the withdrawal queue",
    //         type: "success",
    //         position: "bottom-left",
    //       });
    //       initDetail();
    //     });
    //   }
  };
</script>

<style lang="scss" scoped>
  @import url('./maxFileOpt/style/common.scss');
  @import url('./maxFileOpt/style/index.scss');
  .airdrop_detail_root {
    height: 100%;
    .airdrop_detail_head {
      display: flex;
      color: #fff;
      align-items: center;
      width: 100%;
      height: 60px;
      padding: 20px;
      border-bottom: 1px solid #373737;
      .maxio_img {
        width: 70px;
        height: 70px;
        background: transparent;
        border-radius: 30%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        z-index: 200;
        &:hover {
          transform: scale(1.1);
        }
      }
      img {
        width: 60px;
      }
      span {
        width: 100%;
        display: inline-block;
        text-align: center;
        font-size: 40px;
        font-weight: bold;
      }
    }
    .airdrop_detail_content {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: start;
      margin-top: 30px;
      flex-direction: column;
      padding-bottom: 20px;
      overflow-y: scroll;
      height: calc(100% - 60px);
      .head_img {
        width: 85%;
        height: auto;
        object-fit: cover;
        border-radius: 4px;
        border: 1px solid #8fe527ab;
        margin-bottom: 20px;
      }
      .airdrop_capm_itemList {
        display: flex;
        align-items: center;
        justify-content: start;
        font-size: 18px;
        margin: 10px 0;
        width: 90%;
        color: #fff;
        &.titleLine {
          border-bottom: 1px solid #ffffff87;
          padding-bottom: 10px;
        }
        &.tips {
          justify-content: center;
          margin-top: 40px;
          span {
            text-indent: 20px;
            font-size: 28px;
            background-clip: text;
            color: transparent;
            background-image: linear-gradient(89deg, #c0e0be 10%, #7ce86c 40%, #689950 50%, #3ede31 100%);
            background-image: linear-gradient(275deg, #c0e0be 10%, #80bc01 40%, #54ce19 50%, #3ede31 100%);
            white-space: pre-wrap;
            font-weight: bolder;
            line-height: 40px;
            // text-align: center;
          }
        }
        &.slogan {
          font-size: 30px;
          background-clip: text;
          color: transparent;
          background-image: linear-gradient(89deg, #c0e0be 10%, #7ce86c 40%, #689950 50%, #3ede31 100%);
          white-space: pre;
          font-weight: bolder;
        }
        img {
          width: 40px;
          height: 40px;
          margin-right: 10px;
        }
        span {
          margin-left: 10px;
          font-size: 34px;
          font-weight: bold;
        }
      }
      .airdrop_capm_item_keyList {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 20px;
        margin: 10px 0;
        width: 90%;
        color: #fff;
        img {
          width: 40px;
          height: 40px;
          margin-right: 10px;
        }
        span {
          margin-left: 10px;
          font-size: 34px;
          font-weight: bold;
        }
        .airdrop_capm_item_keyValue,
        .title {
          font-size: 24px;
          font-weight: bold;
          white-space: nowrap;
          display: flex;
          align-items: center;
          .unit {
            font-size: 16px;
            color: #aeff00;
            font-weight: bold;
            margin-left: 8px;
          }
        }
        .airdrop_capm_item_keyValue {
          color: #aeff00;
          font-size: 20px;
          font-weight: normal;
          font-weight: bold;
        }
      }
      .airdrop_capm_item_btn {
        border-radius: 16px;
        padding: 6px 20px;
        color: #000;
        font-size: 20px;
        font-weight: bolder;
        background: #3ede31;
      }
      .participate {
        background-color: #c7f2dd;
        color: green;
        // background: #f9eef145;
        border-radius: 6px;
        margin-left: 20px;
      }
      .notparticipate {
        background-color: #ffc9da;
        color: #e24141;
        background: #f9eef145;
        border-radius: 6px;
      }
    }
    .airdrop_detail_btn_line {
      margin-top: 20px;
      .airdrop_detail_btn {
        border-radius: 30px;
        width: 380px;
        height: 70px;
        color: #000;
        text-align: center;
        line-height: 70px;
        font-size: 30px;
        font-weight: bolder;
        background-image: linear-gradient(89deg, #c0e0be 10%, #7ce86c 40%, #4de204 50%, #3ede31 100%);
        // background: #3ede31;
      }
    }
  }
</style>

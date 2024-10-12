<template>
  <div class="home-page">
    <div class="home-page-head">
      <img class="img1" src="@/assets/tg/tg-dmcx1.png" alt="" />
      <img class="img2" src="@/assets/tg/tg-dmcx2.png" alt="" />
      <nut-swiper :init-page="2" :auto-play="3000" pagination-visible pagination-color="#426543" pagination-unselected-color="#808080">
        <nut-swiper-item style="height: 50vw">
          <img src="@/assets/tg/tg1.gif" alt="" style="height: 100%; width: 100%" draggable="false" />
        </nut-swiper-item>
        <nut-swiper-item style="height: 50vw">
          <img src="@/assets/tg/tg2.png" alt="" style="height: 100%; width: 100%" draggable="false" />
        </nut-swiper-item>
      </nut-swiper>
    </div>
    <div class="home-page-content">
      <!-- <div class="item">
        <div class="item-icon"> 0 </div>
        <div class="item-name"></div>
        <div class="item-val item-val-no">排名：0</div>
      </div> -->
      <div class="item" @click="gotoDrive('order')">
        <div class="item-icon">
          <tg1 />
        </div>
        <div class="item-name">DMCX : Drive</div>
        <div class="item-val">GO</div>
        <!-- <div class="item-val">{{ orderTableData.length }}</div> -->
      </div>
      <div class="item" @click="gotoDrive('maxio')">
        <div class="item-icon">
          <tg1 />
        </div>
        <div class="item-name">MAXIO : Drive</div>
        <div class="item-val">GO</div>
        <!-- <div class="item-val">{{ maxTableData.length }}</div> -->
      </div>
      <div class="item" @click="gotoBind">
        <div class="item-icon">
          <tg2 />
        </div>
        <div class="item-name">钱包</div>
        <div class="item-val">{{ addressStr ? addressStr : 'Bind' }}</div>
      </div>
      <div class="item" @click="gotoShop">
        <div class="item-icon">
          <tg3 />
        </div>
        <div class="item-name">{{ $t('home.buy') }}</div>
        <div class="item-val">Buy</div>
      </div>
      <div class="item" @click="gotoLan">
        <div class="item-icon">
          <tg7 />
        </div>
        <div class="item-name">语言</div>
        <div class="item-val">{{ currentLan === 'zh' ? $t('language.zh') : $t('language.en') }}</div>
      </div>
      <div class="item" @click="logout">
        <div class="item-icon">
          <tg4 />
        </div>
        <div class="item-name">退出登录</div>
      </div>
    </div>
    <nut-dialog title="Link Wallet" v-model:visible="bindWalletDialogShow" class="add_account_dialog" :close-on-click-overlay="false">
      <div class="okx_wallet_bindLine" @click="doBindWallet">
        <img src="@/assets/tg/okx.svg" style="width: 30px; height: 30px" />
        <span class="okx_link_text"> OKX Wallet</span>
        <span class="okx_link_btn">链接</span></div
      >

      <template #footer>
        <div style="display: flex; justify-content: space-between">
          <nut-button
            @click="
              choosedWallet = '';
              bindWalletDialogShow = false;
            "
            >Cancel</nut-button
          >
        </div>
      </template>
    </nut-dialog>

    <nut-dialog title="Link Wallet" v-model:visible="showAccountList" class="add_account_dialog">
      <nut-radio-group v-model="choosedWallet" class="account_list">
        <nut-radio v-for="item in accountsList" :disabled="hasLinked(item) || item.bind || item.register" :label="item">{{
          item
        }}</nut-radio>
      </nut-radio-group>
      <template #footer>
        <div style="display: flex; justify-content: space-between">
          <nut-button
            @click="
              choosedWallet = '';
              showAccountList = false;
            "
            >Cancel</nut-button
          >
          <nut-button type="primary" :disabled="!choosedWallet" @click="confirmLink" class="linkWallet_btn">Link</nut-button>
        </div>
      </template>
    </nut-dialog>
  </div>
</template>

<script setup>
  import { ref, createVNode, watch, onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  const router = useRouter();
  import { useUserStore } from '@/store/modules/user';
  import { showDialog, showToast } from '@nutui/nutui';
  const userStore = useUserStore();
  const useStore = useUserStore();
  import { useI18n } from 'vue-i18n';
  const { locale, t } = useI18n();
  const currentLan = computed(() => userStore.getCurLanguage);
  const bindWalletDialogShow = ref(false);
  const showAccountList = ref(false);
  const choosedWallet = ref('');
  const metaOpen = inject('metaOpen');
  const accountsList = ref([]);
  const walletInfo = computed(() => useStore.getUserInfo?.wallet_info);
  const address = computed(
    () =>
      userStore.getAddress ||
      (userStore.getUserInfo &&
        userStore.getUserInfo.wallet_info &&
        userStore.getUserInfo.wallet_info[0] &&
        userStore.getUserInfo.wallet_info[0].address),
  );
  import { getDmOrder, search_max, wallet_bind_uuid } from '@/api';
  //   const orderTableData = ref([]);
  //   const maxTableData = ref([]);
  console.log(address.value, 'address.value');
  const addressStr = ref('');
  addressStr.value = address.value
    ? address.value.substring(0, 4) + '...' + address.value.substring(address.value.length - 3, address.value.length)
    : '';
  import tg1 from '~icons/home/tg1.svg';
  import tg2 from '~icons/home/tg2.svg';
  import tg3 from '~icons/home/tg3.svg';
  import tg4 from '~icons/home/tg4.svg';
  import tg5 from '~icons/home/tg5.svg';
  import tg6 from '~icons/home/tg6.svg';
  import tg7 from '~icons/home/tg7.svg';
  const list = ref(['@/assets/tg/tg1.gif', '@/assets/tg/tg2.png']);

  const tg = ref(null);
  const telegramUserId = ref(null);

  const initializeTelegram = () => {
    if (window.Telegram && window.Telegram.WebApp) {
      tg.value = window.Telegram.WebApp;
      console.log('Telegram WebApp is available', tg.value);
      if (tg.value.initData) {
        setTgId(tg.value.initData);
      } else {
        console.error('Telegram User ID not available');
      }
    } else {
      console.error('Telegram WebApp is not available');
    }
  };

  const setTgId = (item) => {
    userStore.setTgToken(`AuthToken initData.${item}`);
    alert('Telegram initData: ' + item);
    alert(item.substr(5));
    alert(decodeURIComponent(item.substr(5)));
    if (item.indexOf('user=') == 0) {
      let s1 = item.substr(5);
      let s2 = decodeURIComponent(s1);
      let s3 = JSON.parse(s2.split('&')[0]);
      if (s3.id) {
        telegramUserId.value = s3.id;
        userStore.setTgInitData(s3);
        alert('Telegram User ID: ' + s3.id);
      }
    }
  };
  const gotoShop = () => {
    router.push('/tgShop');
  };
  const gotoLan = () => {
    router.push('/lan');
  };
  const gotoDrive = (type) => {
    router.push({ path: '/space', query: { page: type } });
  };
  const gotoBind = () => {
    router.push('/personalInfo');
  };
  const logout = () => {
    showDialog({
      title: 'Logout',
      content: createVNode('span', { style: {} }, 'Are you sure you want to logout?'),
      cancelText: 'Cancel',
      okText: 'Yes',
      onCancel: () => {},
      onOk: () => {
        userStore.logout();
        router.push('/login');
      },
    });
  };
  const initData = async () => {
    if (address.value) {
      const d = {
        wallet: address.value,
        pageNo: 1,
        pageSize: 100,
      };
      let res = await getDmOrder(d);
      if (res.code === 200) {
        orderTableData.value = res.data.list;
      }
    }
  };
  const initMaxData = async () => {
    let res = await search_max({
      pn: 1,
      ps: 100,
    });
    let data = res.data;
    let maxList = data.filter((el) => el.device_type === 'maxio' && el.deploy_svc_gateway_state === 'finish' && el.is_active);
    maxTableData.value = maxList;
  };
  const doBindWallet = async () => {
    showAccountList.value = true;
    if (window.ethereum) {
      // await connectWallet();
      await window.ethereum.request({
        method: 'eth_requestAccounts',
        params: [],
      });
      accountsList.value = await window.ethereum.request({
        method: 'eth_accounts',
        params: [],
      });
      showAccountList.value = true;
      //   console.log(accountsList.value, 'accountsList');
    } else {
      metaOpen();
    }
  };
  const hasLinked = (address) => {
    return walletInfo.value.find((el) => el.address === address);
  };
  const confirmLink = () => {
    showToast.loading('Loading', {
      cover: true,
      customClass: 'app_loading',
      icon: loadingImg,
      loadingRotate: false,
      id: 'bind_wallet',
    });
    wallet_bind_uuid({ address: choosedWallet.value, wallet_type: 'metamask', uuid: userInfo.value.uuid })
      .then(async (res) => {
        if (res.code == 200) {
          showToast.success('Linkage Success');
          await initFoggieDate();
          choosedWallet.value = '';
          showAccountList.value = false;
        }
      })
      .catch(() => {
        choosedWallet.value = '';
      })
      .finally(() => {
        showToast.hide('bind_wallet');
      });
  };
  onMounted(() => {
    // initData();
    // initMaxData();
    initializeTelegram();
  });
  watch(currentLan, async (newVal) => {
    console.log('currentLan', newVal);
  });
  watch(address, (val) => {
    console.log('watch-address', val);
    if (val && val.length > 0) {
      addressStr.value = val.substring(0, 4) + '...' + val.substring(val.length - 3, val.length);
      //   initData();
    } else if (val === false) {
      bindWalletDialogShow.value = true;
    }
  });
</script>
<style lang="scss" scoped>
  .home-page {
    position: relative;
    height: 100%;
    .home-page-head {
      position: relative;
      margin: 15px auto;
      width: 90%;
      height: 60vw;
      img {
        position: absolute;
        z-index: 1;
      }
      .img1 {
        top: 10px;
        left: 10px;
        width: 10%;
      }
      .img2 {
        top: 10%;
        left: 25%;
        width: 50%;
      }
      .nut-swiper {
        position: absolute;
        width: 100%;
      }
    }
    .home-page-content {
      position: relative;
      margin: 15px auto;
      width: 90%;
      .item {
        position: relative;
        margin-bottom: 20px;
        color: #fff;
        width: 100%;
        height: 100px;
        border: 1px solid #36363b;
        background: #151517;
        border-radius: 20px;
        .item-icon {
          position: absolute;
          top: 30px;
          left: 20px;
          svg {
            width: 40px;
            height: 40px;
            color: #000;
          }
        }
        .item-name {
          position: absolute;
          top: 30px;
          left: 15%;
          height: 50px;
          line-height: 50px;
          font-weight: 700;
        }
        .item-val {
          position: absolute;
          top: 30px;
          right: 30px;
          font-weight: bold;
          width: 140px;
          height: 50px;
          line-height: 50px;
          text-align: center;
          border-radius: 30px;
          // font-size: 14px;
          background: #36363b;
          font-size: 22px;
          color: #75c9f9;
        }
        .item-val-no {
          width: 150px;
          text-align: right;
          border: none;
          background: none;
        }
      }
    }
  }
  .okx_wallet_bindLine {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: bold;
    .okx_link_text {
      display: inline-block;
      width: calc(100% - 200px);
      text-align: left;
    }
    .okx_link_btn {
      padding: 10px 20px;
      background: #36363b;
      border-radius: 20px;
    }
  }
  .account_list {
    :deep {
      .nut-radio__label {
        text-align: left;
        color: #0ae30a;
        color: #2c99e3;
        font-weight: bold;
      }
      .nut-radio__icon {
        color: #0ae30a;
        color: #2c99e3;
      }
    }
  }
  .nut-popup .nut-dialog:not(.CustomName) .nut-dialog__footer .nut-button {
    margin-right: 30px;
  }
  .nut-popup .nut-dialog:not(.CustomName) .nut-dialog__footer .nut-button--primary {
    background: #2c99e3;
  }
</style>

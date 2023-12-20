<template>
  <div class="page_box">
    <TopBack class="top_title" type="2"><span class="title">Connect Wallet</span></TopBack>
    <div class="content_box">
      <div class="top_wallet_box">
        <div class="top_wallet_item">
          <MetaMask></MetaMask>
        </div>
        <div class="top_wallet_item">
          <img src="@/assets/svg/home/unisat.svg" alt="" />
        </div>
      </div>
      <p class="wallet_desc">Choose your wallet</p>
      <p class="wallet_desc wallet_desc2"
        >By Connecting your Wallet,you Agree to Our <span>Terms of Service</span> and <span>Privacy Policy</span>.</p
      >
      <div class="other_login_box" @click="loginWithMeta">
        <MetaMask></MetaMask>
        <span>MetaMask</span>
        <ArrowRight2 class="right_icon"></ArrowRight2>
      </div>
      <div class="other_login_box" @click="loginWithUniSat">
        <img src="@/assets/svg/home/unisat.svg" alt="" />
        <span> UniSat </span>
        <ArrowRight2 class="right_icon"></ArrowRight2>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { MetaMaskSDK } from '@metamask/sdk';
  import injectedModule from '@web3-onboard/injected-wallets';
  import { init, useOnboard } from '@web3-onboard/vue';
  import metamaskSDK from '@web3-onboard/metamask';
  import detectEthereumProvider from '@metamask/detect-provider';
  import MetaMask from '~icons/home/metamask.svg';
  import UniSat from '~icons/home/unisat.svg';
  import ArrowRight2 from '~icons/home/arrow-right2.svg';
  import { user } from '@/api/index.ts';
  import { showToast } from '@nutui/nutui';
  import { useUserStore } from '@/store/modules/user';
  import { useRouter } from 'vue-router';
  import TopBack from '@/components/topBack/index.vue';
  import loadingImg from '@/components/loadingImg/index.vue';
  const uuid = computed(() => userStore.getUserInfo?.uuid);
  const userStore = useUserStore();
  const router = useRouter();
  const injected = injectedModule();
  const metamaskSDKWallet = metamaskSDK({
    options: {
      extensionOnly: false,
      dappMetadata: {
        name: 'Web3Onboard',
        url: 'https://amb.u2i.net',
      },
      // openDeeplink: (link) => {
      //   window.open(link);
      // },
      // useDeeplink: true,
    },
  });
  const infuraKey = '<INFURA_KEY>';
  const rpcUrl = `https://mainnet.infura.io/v3/${infuraKey}`;
  // 不要删除
  const web3Onboard = init({
    wallets: [
      // metamaskSDKWallet,
      injected,
    ],
    chains: [
      {
        id: '0x1',
        token: 'ETH',
        label: 'Ethereum Mainnet',
        rpcUrl,
      },
      {
        id: 42161,
        token: 'ARB-ETH',
        label: 'Arbitrum One',
        rpcUrl: 'https://rpc.ankr.com/arbitrum',
      },
      {
        id: '0xa4ba',
        token: 'ARB',
        label: 'Arbitrum Nova',
        rpcUrl: 'https://nova.arbitrum.io/rpc',
      },
      {
        id: '0x2105',
        token: 'ETH',
        label: 'Base',
        rpcUrl: 'https://mainnet.base.org',
      },
    ],
    appMetadata: {
      name: 'Wallet',
      icon: '<svg>My App Icon</svg>',
      description: 'Login via MetaMask',
      recommendedInjectedWallets: [
        { name: 'MetaMask', url: 'https://metamask.io' },
        { name: 'Coinbase', url: 'https://wallet.coinbase.com/' },
      ],
    },
  });

  const { wallets, connectWallet, disconnectConnectedWallet, connectedWallet } = useOnboard();
  async function signMetaMessage(accounts) {
    if (accounts.length === 0) {
      showToast.text('Please register and log in to MetaMask!');
    } else {
      showToast.text('Please confirm your signature to log in with MetaMask.');
      try {
        const message = 'Sign this message to confirm your identity.';
        const signature = await window.ethereum.request({
          method: 'personal_sign',
          params: [message, accounts[0]],
        });
        showToast.text(signature);
        return signature;
      } catch (error) {
        console.error('User denied message signing');
      }
    }
  }
  const loginWithMeta = async () => {
    const provider = await detectEthereumProvider();
    if (provider == window.ethereum && provider) {
      await connectWallet();
      if (connectedWallet?.value?.accounts?.[0]?.address) signMetaMessage([connectedWallet.value?.accounts?.[0].address]);
      // const options = {
      //   checkInstallationImmediately: true,
      //   injectProvider: true,
      //   useDeeplink: true,
      // };
      // const MMSDK = new MetaMaskSDK(options);
      // console.log(MMSDK, 'MMSDK');
      // const ethereum = MMSDK.getProvider(); // You can also access via window.ethereum
      // ethereum.request({ method: 'eth_requestAccounts', params: [] });
    } else {
      window.open('https://metamask.app.link/dapp/https://amb.u2i.net');
      // window.open('https://metamask.app.link/dapp/http://172.16.20.113:5173');
    }
  };
  const signUniSatMessage = async (message = 'qianming') => {
    try {
      let res = await window.unisat.signMessage(message);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };
  const loginWithUniSat = async () => {
    // https://github.com/unisat-wallet/unisat-docs/blob/master/docs/guide/unisat-api.md
    if (typeof window.unisat !== 'undefined') {
      console.log('UniSat Wallet is installed!');
      try {
        let accounts = await window.unisat.requestAccounts();
        console.log('connect success', accounts);
        signUniSatMessage();
      } catch (e) {
        console.log('connect failed');
      }
    } else {
      showToast.text('Please install UniSat Wallet');
      window.open('https://chrome.google.com/webstore/detail/unisat/ppbibelpcjmhbdihakflkdcoccbgbkpo');
      return false;
    }
  };
  const sendInscription = async () => {
    // unisat.sendInscription(address, inscriptionId, options);
    try {
      let { txid } = await window.unisat.sendInscription(
        'tb1q8h8s4zd9y0lkrx334aqnj4ykqs220ss7mjxzny',
        'e9b86a063d78cc8a1ed17d291703bcc95bcd521e087ab0c7f1621c9c607def1ai0',
      );
      console.log('send Inscription 204 to tb1q8h8s4zd9y0lkrx334aqnj4ykqs220ss7mjxzny', { txid });
    } catch (e) {
      console.log(e);
    }
  };
  const initFoggieDate = async () => {
    showToast.loading('Loading', {
      cover: true,
      customClass: 'app_loading',
      icon: loadingImg,
      loadingRotate: false,
      id: 'user_info',
    });
    let data = await user();
    if (data) {
      userStore.setInfo({
        ...data.data,
      });
    }
    showToast.hide('user_info');
  };
  onMounted(async () => {
    if (userStore.getToken && !uuid.value) {
      await initFoggieDate();
    } else if (userStore.getToken && uuid.value) {
      router.push('/allNFTList');
    }
  });
</script>

<style>
  .svelte-g9s19b {
    bottom: 50px !important;
  }
  :root {
    --account-center-position-bottom: 100px;
    --account-center-z-index: -99;
  }
</style>

<style lang="scss" scoped>
  :deep {
    .svelte-g9s19b {
      bottom: 50px !important;
    }
  }
  .page_box {
    padding: 30px;
    height: 100%;
    box-sizing: border-box;
    background: #fff;
  }
  .title {
    color: #000;
    font-weight: 700;
  }
  .top_wallet_box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .top_wallet_item {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 50px 0;
      padding: 20px;
      background: #f9b783;
      border-radius: 50%;
      img,
      svg {
        width: 60px;
        height: 60px;
      }
      & + .top_wallet_item {
        background: #000;
        img {
          margin-left: 5px;
        }
      }
    }
  }
  .other_login_box {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 5px auto;
    width: 500px;
    padding: 10px;
    color: #000;
    font-weight: 700;
    // background-color: #f8fafd;
    span {
      flex: 1;
    }
    svg,
    img {
      width: 75px;
      height: 75px;
      margin: 0 30px 0 0;
    }
    .right_icon {
      width: 40px;
      height: 40px;
      margin: 0;
    }
  }
  .content_box {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .wallet_desc {
    margin: 30px auto;
    line-height: 50px;
    text-align: center;
    font-weight: 700;
    font-size: 1.2rem;
  }
  .wallet_desc2 {
    font-weight: normal;
    color: #747474;
    font-size: 0.8rem;
    span {
      color: #000;
      cursor: pointer;
    }
  }
</style>

<template>
  <div class="login">
    <div class="top_div">
      <!-- <h1>SIGN IN</h1> -->
      <img src="@/assets/logo-top-left-dark.png" alt="" />
    </div>

    <!-- <h1>Login</h1> -->
    <van-tabs animated v-model:active="activeType">
      <template #title>
        <div class="tab_header">
          <div :class="[activeType == 1 ? 'isChecked' : '']" @click="activeType = '1'">
            <IconEth></IconEth>
          </div>
          <div :class="[activeType == 2 ? 'isChecked' : '']" @click="activeType = '2'">
            <IconLink></IconLink>
          </div>
          <div :class="[activeType == 3 ? 'isChecked' : '']" @click="activeType = '3'">
            <IconEmail></IconEmail>
          </div>
        </div>
      </template>
      <van-tab name="1">
        <template #title>
          <div class="tab_header">
            <div :class="[activeType == 1 ? 'isChecked' : '']" @click="activeType = '1'">
              <IconEth></IconEth>
            </div>
          </div>
        </template>
        <p> Sign in with Ethereum </p>
        <template v-if="isMobileDevice && !hasProvider">
          <a :href="`https://metamask.app.link/dapp/${redirectUrl}`">
            <div class="login-img">
              <span style="color: #fff">Metamask</span>
              <div class="img-metamask"><MetaMask></MetaMask></div>
            </div>
          </a>
          <a :href="`https://metamask.app.link/dapp/${redirectUrl}`">
            <nut-button block type="info" :loading="loading" style="margin-top: 30px; font-size: 16px">
              Sign in with Metamask</nut-button
            ></a
          >
        </template>
        <template v-else>
          <div class="login-img" @click.stop="loginWithMeta">
            <span>Metamask</span>
            <div class="img-metamask"><MetaMask></MetaMask></div>
          </div>
          <nut-button block type="info" @click.stop="loginWithMeta" :loading="loading" style="margin-top: 30px; font-size: 16px">
            Sign in with Metamask</nut-button
          >
        </template>
      </van-tab>
      <van-tab name="2">
        <template #title>
          <div class="tab_header">
            <div :class="[activeType == 2 ? 'isChecked' : '']" @click="activeType = '2'">
              <IconLink></IconLink>
            </div>
          </div>
        </template>
        <p> Sign in with Git Provider Or Google </p>
        <div class="login-img" @click.stop="githubLogin">
          <span>Github</span>
          <img class="img-github" src="@/assets/Github1.svg" />
        </div>
        <div class="login-img" @click.stop="googleLogin">
          <span>Google</span>
          <img src="@/assets/google-logo.svg" class="img-google" />
        </div>
        <!-- <div class="login-img" @click.stop="weChatLogin">
          <span>WeChat</span>
          <img src="@/assets/wechat.png" class="img-google" />
        </div> -->
      </van-tab>
      <van-tab name="3">
        <template #title>
          <div class="tab_header">
            <div :class="[activeType == 3 ? 'isChecked' : '']" @click="activeType = '3'">
              <IconEmail></IconEmail>
            </div>
          </div>
        </template>
        <p> Sign in with Email </p>
        <nut-form ref="ruleForm" :model-value="loginForm">
          <nut-form-item required prop="email" :rules="[{ required: true, message: 'E-mail' }]">
            <input v-model.trim="loginForm.email" name="email" class="nut-input-text" placeholder="Email" type="text" />
          </nut-form-item>
          <nut-form-item required prop="password" :rules="[{ required: true, message: 'Please enter password' }]">
            <input v-model.trim="loginForm.password" class="nut-input-text" placeholder="Password" type="password" />
          </nut-form-item>
          <nut-form-item
            required
            prop="captcha_text"
            v-if="showCaptcha"
            :rules="[{ required: true, message: 'Please enter the verification code' }]"
          >
            <input
              ref="captcha_text"
              v-model.trim="loginForm.captcha_text"
              :placeholder="'verification code!'"
              name="captcha_text"
              tabindex="5"
              autocomplete="on"
              style="width: 70%"
              class="nut-input-text"
            />
            <img :src="codeSrc" class="code_src" @click="getCaptcha" />
          </nut-form-item>
          <nut-button block type="info" @click="submit" :loading="loading"> Sign In </nut-button>
          <div class="Register_btn">
            <span class="password_login" @click="router.push('/forget')"> Forgot password?</span>
            <span class="password_login" @click="router.push('/register')">Create an account?</span>
          </div>
        </nut-form>
      </van-tab>
    </van-tabs>
    <p class="power"> Powered by Fog Works, Inc. </p>
  </div>
</template>

<script lang="ts" setup name="LoginPage">
  // import { MetaMaskSDK } from '@metamask/sdk';
  // import injectedModule from '@web3-onboard/injected-wallets';
  import { init, useOnboard } from '@web3-onboard/vue';
  import metamaskSDK from '@web3-onboard/metamask';
  import detectEthereumProvider from '@metamask/detect-provider';
  import MetaMask from '~icons/home/metamask.svg';
  import IconEth from '~icons/home/eth.svg';
  import IconLink from '~icons/home/link.svg';
  import IconEmail from '~icons/ic/baseline-email.svg';
  // import UniSat from '~icons/home/unisat.svg';
  import loadingImg from '@/components/loadingImg/index.vue';
  import {
    login,
    Captcha,
    check_email_register,
    user,
    generate_nonce,
    wallet_login,
    check_wallet,
    wallet_register,
    oauth_url,
  } from '@/api';
  // import router from '@/router';
  import { useRouter, useRoute } from 'vue-router';
  import { reactive, ref, onMounted } from 'vue';
  import { useUserStore } from '@/store/modules/user';
  import { showToast } from '@nutui/nutui';
  import '@nutui/nutui/dist/packages/toast/style';
  import { load_gpa_token } from '@/utils/util.ts';
  import { redirectUrl } from '@/setting.js';
  import Cookies from 'js-cookie';
  // const MMSDK = new MetaMaskSDK(
  //   {
  //     dappMetadata: {
  //       name: 'Example Pure JS Dapp',
  //       url: window.location.href,
  //     },
  //   },
  //   // Other options
  // );

  const isMobileDevice = computed(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // 此正则表达式涵盖了大多数使用的手机和平板设备
    return /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent.toLowerCase());
  });
  const metamaskSDKWallet = metamaskSDK({
    options: {
      extensionOnly: false,
      dappMetadata: {
        name: 'Web3Onboard',
        url: 'https://amb.u2i.net',
      },
    },
  });
  const activeType = ref<any>('1');
  const infuraKey = '<INFURA_KEY>';
  const rpcUrl = `https://mainnet.infura.io/v3/${infuraKey}`;
  const web3Onboard = init({
    wallets: [metamaskSDKWallet],
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
  const router = useRouter();
  const route = useRoute();
  const bcryptjs = require('bcryptjs');
  // import bcryptjs from 'bcryptjs';
  const userStore = useUserStore();
  const loginForm = reactive({
    email: '',
    password: '',
    captcha_text: '',
    captcha_id: '',
    login_type: 'password',
  });
  const hasProvider = ref<any>('');
  const timer = ref<any>('');
  const nonce = ref<string>('');
  const codeSrc = ref<any>('');
  const loading = ref<boolean>(false);
  const showCaptcha = ref<boolean>(false);
  const ruleForm = ref<any>(null);
  const accountsList = ref<string>([]);

  function getCaptcha() {
    Captcha().then((res) => {
      codeSrc.value = res.data.image;
      loginForm.captcha_id = res.data.id;
      timegetCaptcha();
    });
  }
  function timegetCaptcha() {
    if (timer.value) {
      clearInterval(timer.value);
    }
    timer.value = setInterval(
      () => {
        Captcha().then((res) => {
          codeSrc.value = res.data.image;
          loginForm.captcha_id = res.data.id;
          timegetCaptcha();
        });
      },
      8 * 60 * 1000,
    );
  }
  async function getUserInfo() {
    let res = await user();
    if (res.data) {
      userStore.setInfo(res.data);

      router.push({ path: '/home' });
    }
  }

  const submit = async () => {
    // let isPass = true

    ruleForm.value.validate().then(async ({ valid, errors }: any) => {
      if (valid) {
        let isPass = import.meta.env.VITE_BUILD_TYPE == 'ANDROID' ? true : false;
        // let isPass = true;
        if (!isPass) {
          try {
            loading.value = true;
            isPass = await load_gpa_token();
          } catch (error) {
            loading.value = false;
          }
        }
        if (isPass) {
          loading.value = true;
          const password = loginForm.password;
          let hashPwd = bcryptjs.hashSync(password, 10);
          // let hashPwd = password;
          let postData = {
            email: loginForm.email,
            password: hashPwd,
            captcha_text: loginForm.captcha_text,
            captcha_id: loginForm.captcha_id,
            is_client: true,
            login_type: 'password',
            // recaptcha_token: reCaptchaV3Token,
          };
          check_email_register(loginForm.email)
            .then((rr) => {
              if (rr.data) {
                if (!rr.data.email) {
                  showToast.fail('The current email is not registered, please register');
                  loading.value = false;
                } else if (!rr.data.pw_valid) {
                  showToast.fail('The current password is not secure. Please use "Forgot Password" to update your current password');
                  loading.value = false;
                } else {
                  login(postData)
                    .then((res) => {
                      console.log(res);
                      if (res.next_step === 'captcha') {
                        loading.value = false;

                        getCaptcha();
                        showCaptcha.value = true;
                      } else if (res && res.data) {
                        let data = res.data;
                        let token = data.token_type + ' ' + data.access_token;
                        let refresh_token = data.token_type + ' ' + data.refresh_token;
                        let user_id = data.user_id;
                        if (user_id && user_id != window.localStorage.getItem('user_id')) {
                          window.localStorage.removeItem('homeChooseBucket');
                        }
                        window.localStorage.setItem('user_id', user_id);
                        // window.localStorage.setItem('refresh_token', refresh_token);
                        // userStore.setToken(refresh_token);
                        // let userInfo = {
                        //   email: loginForm.email,
                        //   token: token, //res.token
                        //   user_id: user_id,
                        // };
                        if (timer.value) {
                          clearInterval(timer.value);
                        }
                        // store.dispatch('token/login', userInfo);
                        // userStore.setInfo(userInfo);
                        userStore.setToken(token);
                        userStore.setRefreshToken(refresh_token);
                        // getUserInfo();
                        loading.value = false;
                        if (route.query?.publicKey) {
                          router.push({ path: '/scanQRCodes', query: { publicKey: route.query?.publicKey } });
                        } else {
                          router.push({ path: '/home' });
                        }

                        // this.getUserInfo();
                        // this.$emit("login");
                        // store.dispatch("global/setDmcShow", true);
                        //  this.loadUserLoginStatus()
                      } else {
                        showToast.fail(res.error);

                        loading.value = false;
                      }
                    })
                    .catch((err) => {
                      loading.value = false;
                      console.log(err);
                      showToast.fail(err.error);
                      if (err.next_step === 'captcha') {
                        getCaptcha();
                        showCaptcha.value = true;
                      }
                    });
                }
              } else {
                loading.value = false;
              }
            })
            .catch(() => {
              loading.value = false;
            });
          // const userInfo = await userStore.login(loginForm);
          // if (userInfo) {
          //   router.push({ path: '/home' });
          // }
        } else {
          loading.value = false;
          showToast.fail('The current identity is suspicious, you can try switching networks and retry.');
        }
      } else {
        loading.value = false;
        console.log('error submit!!', errors);
      }
    });
  };
  const getNonce = (address, wallet_type = 'metamask') => {
    console.log('address', address);

    if (!address) return false;
    return generate_nonce({ address, wallet_type }).then((res) => {
      nonce.value = res.data.nonce;
      return true;
    });
  };
  async function signMetaMessage(accounts, nonce) {
    if (accounts.length === 0) {
      showToast.text('Please register and log in to MetaMask!');
      showToast.hide('login');
    } else {
      try {
        const message = `Welcome to Fog works!\nThis request will not trigger a login.\nYour authentication status will reset after 24 hours.\nWallet address:\n${accounts[0]}\nNonce:\n${nonce}`;
        const signature = await window.ethereum.request({
          method: 'personal_sign',
          params: [message, accounts[0]],
        });
        console.log(signature);
        return wallet_login({
          address: accounts[0],
          wallet_type: 'metamask',
          sign: signature,
        }).then((res) => {
          let data = res.data;
          let token = data.token_type + ' ' + data.access_token;
          let refresh_token = data.token_type + ' ' + data.refresh_token;
          let user_id = data.user_id;
          if (user_id && user_id != window.localStorage.getItem('user_id')) {
            window.localStorage.removeItem('homeChooseBucket');
          }
          window.localStorage.setItem('user_id', user_id);

          if (timer.value) {
            clearInterval(timer.value);
          }
          userStore.setToken(token);
          userStore.setRefreshToken(refresh_token);
          // getUserInfo();
          loading.value = false;
          showToast.hide('login');
          router.push({ path: '/home' });
        });
      } catch (error) {
        showToast.hide('login');
        console.error('User denied message signing');
      }
    }
  }
  const checkWallet = async (address, wallet_type = 'metamask') => {
    return check_wallet({ address, wallet_type })
      .then(async (res) => {
        if (res.data.register || res.data.bind) {
          try {
            await getNonce(address, 'metamask');
            await signMetaMessage([address], nonce.value);
          } catch {
            showToast.hide('login');
          }
        } else {
          wallet_register({ address, wallet_type })
            .then(async (res) => {
              if (res.code == 200) {
                try {
                  await getNonce(address, 'metamask');
                  await signMetaMessage([address], nonce.value);
                } catch {
                  showToast.hide('login');
                }
              } else {
                showToast.hide('login');
              }
            })
            .catch(() => {
              showToast.hide('login');
            });
        }
      })
      .catch(() => {
        showToast.hide('login');
      });
  };

  const metaOpen = inject('metaOpen');
  const loginWithMeta = async () => {
    showToast.loading('Connecting', {
      cover: true,
      customClass: 'app_loading',
      coverColor: 'rgba(0,0,0,0.45)',
      icon: loadingImg,
      loadingRotate: false,
      id: 'login',
      duration: 0,
    });
    const provider = await detectEthereumProvider();
    // const ethereum = MMSDK.getProvider();
    //  const ethereum = MMSDK.getProvider() // You can also access via window.ethereum

    //     ethereum.request({ method: 'eth_requestAccounts' })

    if (provider == window.ethereum && provider && window.ethereum.isMetaMask) {
      try {
        // await ethereum.request({ method: 'eth_requestAccounts' });
        await window.ethereum.request({
          method: 'eth_requestAccounts',
          params: [],
        });
        accountsList.value = await window.ethereum.request({
          method: 'eth_accounts',
          params: [],
        });
      } catch (err) {
        showToast.hide('login');
      }
      await checkWallet(accountsList.value[0]);
    } else {
      showToast.hide('login');
      metaOpen();
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
  const githubLogin = () => {
    const data = {
      redirect: redirectUrl,
      state: {},
      device_type: 1,
      login_type: 0,
    };
    oauth_url(data).then((res) => {
      if (res?.data.redirect_url) {
        window.location.href = res.data.redirect_url;
      }
    });
  };
  const googleLogin = () => {
    const data = {
      redirect: redirectUrl,
      state: {},
      device_type: 1,
      login_type: 1,
    };
    oauth_url(data).then((res) => {
      if (res?.data.redirect_url) {
        console.log('-------google', res.data.redirect_url);
        window.location.href = res.data.redirect_url;
      }
    });
  };
  const weChatLogin = () => {
    const data = {
      redirect: redirectUrl,
      state: {},
      device_type: 1,
      login_type: 2,
    };
    oauth_url(data).then((res) => {
      if (res?.data.redirect_url) {
        console.log('-------google', res.data.redirect_url);
        window.location.href = res.data.redirect_url;
      }
    });
  };

  onMounted(async () => {
    hasProvider.value = await detectEthereumProvider();
    setTimeout(() => {
      const access_token = Cookies.get('access_token');
      const refresh_token = Cookies.get('refresh_token');
      console.log('-----acc-ref', access_token, refresh_token);
      if (access_token || refresh_token) {
        const token = access_token || refresh_token;
        userStore.setToken(`Bearer ${token}`);
        userStore.setRefreshToken(`Bearer ${refresh_token}`);
        router.push({ path: '/home' });
      }
    }, 100);
  });
</script>

<style lang="scss">
  @import url('./login.scss');
  .svelte-g9s19b {
    bottom: 50px !important;
  }
  :root {
    --account-center-position-bottom: 100px;
    --account-center-z-index: -99;
  }
</style>
<style lang="scss" scoped>
  .login {
    position: relative;
    justify-content: flex-start;
    height: 100%;
    .tab_header {
      width: 100%;
      // display: grid;
      // grid-template-columns: repeat(3, 1fr);
      // align-items: center;
      // box-shadow: rgb(14 28 232 / 30%) 0px 0px 0px 3px;
      color: #fff;
      // background-color: #ffffff1c;
      > div {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
        svg {
          color: hsl(0, 0%, 43.5%);
          color: #fff;
        }
        // &.isChecked {
        //   background: hsl(209, 95%, 90.1%);
        //   background: hsl(242.31deg 79.6% 82.69%);
        //   svg {
        //     color: hsl(211, 100%, 43.2%);
        //     color: #fff;
        //   }
        // }
      }
    }
    :deep {
      .van-tabs__line {
        display: none;
      }
      .van-tab--active {
        background: hsl(209, 95%, 90.1%);
        background: hsl(242.31deg 79.6% 82.69%);
        svg {
          color: hsl(211, 100%, 43.2%);
          color: #fff;
        }
      }
      .van-tabs {
        border-radius: 1rem;
        overflow: hidden;
        box-shadow:
          rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
          rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
          rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
      }
      .van-tabs__nav {
        // background-color: #fff;
        background-color: #ffffff1c;
        // border-bottom: 1px solid #ccc;
      }
      .van-tabs__content {
        padding: 1.5rem 1rem;
        color: #fff;
      }
      .van-tab {
        // background-color: transparent;
        //  box-shadow:
        //   rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
        //   rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
        //   rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
        color: #fff;

        p {
          font-weight: 700;
        }

        // background-color: #ffffff1c;
      }
      .nut-form-item {
        border: 1px solid #ccc;
      }
    }
    .Register_btn {
      color: #fff;
    }
    .power {
      position: fixed;
      bottom: 2rem;
      left: 50%;
      transform: translateX(-50%);
      width: 100%;
      margin-top: 2rem;
      text-align: center;
      color: #d0d0d0;
      color: #fff;
      font-weight: bold;
    }
  }
  .other_login_box {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 5px auto;
    width: 500px;
    padding: 10px;
    color: #fff;
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
  @media screen and (min-width: 500px) {
    .other_login_box {
      margin: 5px auto;
      width: 400px;
      padding: 10px;
      color: #fff;
      font-weight: 700;
      // background-color: #f8fafd;
      span {
        flex: 1;
      }
      svg,
      img {
        width: 50px;
        height: 50px;
        margin: 0 20px 0 0;
      }
    }
  }
  .login-img {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 4rem;
    padding: 0.5rem 1.5rem;
    box-sizing: border-box;
    cursor: pointer;
    font-weight: bold;
    // border-bottom: 0.1px solid #fff;
    // box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
    margin: 14px 0;
    cursor: pointer;
    &:hover {
      //   background: hsl(0, 0%, 95.1%);
      border-radius: 0.5rem;
      transform: scale(1.1);
    }
    img {
      margin: 0.5rem 1rem;
      width: 2.5rem;
      cursor: pointer;
    }
    .img-google {
      box-sizing: border-box;
      padding: 0.5rem;
      background: #fff;
      border-radius: 50%;
    }
    .img-metamask {
      width: 2.5rem;
      cursor: pointer;
      svg {
        width: 2.5rem;
      }
    }
  }
</style>

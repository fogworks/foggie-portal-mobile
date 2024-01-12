<template>
  <div class="login">
    <div class="top_div" style="margin-bottom: 40px">
      <!-- <h1>SIGN IN</h1> -->
      <img src="@/assets/logo-top-left-dark.png" alt="" />
    </div>

    <!-- <h1>Login</h1> -->
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
        <span class="password_login" @click="router.push('/register')">create an account?</span>
      </div>
      <!-- <div class="other_login_box" @click="loginWithMeta">
        <MetaMask></MetaMask>
        Sign In with MetaMask
      </div> -->
      <nut-divider :style="{ color: '#fff' }">Sign in with</nut-divider>
      <div class="login-img">
        <div class="img-metamask" @click="loginWithMeta"><MetaMask></MetaMask></div>
        <img class="img-github" src="@/assets/github.png" @click="githubLogin" />
        <img src="@/assets/google-logo.png" class="img-google" @click="googleLogin" />
      </div>

      <!-- <div v-if="!isMobileDevice" class="other_login_box" @click="loginWithUniSat">
        <img src="@/assets/svg/home/unisat.svg" alt="" />
        Sign In with UniSat 
      </div> -->
    </nut-form>
  </div>
</template>

<script lang="ts" setup name="LoginPage">
  // import { MetaMaskSDK } from '@metamask/sdk';
  import injectedModule from '@web3-onboard/injected-wallets';
  import { init, useOnboard } from '@web3-onboard/vue';
  import metamaskSDK from '@web3-onboard/metamask';
  import detectEthereumProvider from '@metamask/detect-provider';
  import MetaMask from '~icons/home/metamask.svg';
  // import UniSat from '~icons/home/unisat.svg';
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
  import { useRouter } from 'vue-router';
  import { reactive, ref, onMounted } from 'vue';
  import { useUserStore } from '@/store/modules/user';
  import { showToast } from '@nutui/nutui';
  import '@nutui/nutui/dist/packages/toast/style';
  import { load_gpa_token } from '@/utils/util.ts';
  import { redirectUrl } from '@/setting.js';
  import Cookies from 'js-cookie';

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
  const timer = ref<any>('');
  const nonce = ref<string>('');
  const codeSrc = ref<any>('');
  const loading = ref<boolean>(false);
  const showCaptcha = ref<boolean>(false);
  const ruleForm = ref<any>(null);

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

                        router.push({ path: '/home' });

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
    } else {
      try {
        const message = `Welcome to Fog works!\nThis request will not trigger a login.\nYour authentication status will reset after 24 hours.\nWallet address:\n${accounts[0]}\nNonce:\n${nonce}`;
        const signature = await window.ethereum.request({
          method: 'personal_sign',
          params: [message, accounts[0]],
        });
        console.log(signature);
        wallet_login({
          address: accounts[0],
          wallet_type: 'metamask',
          sign: signature,
        }).then((res) => {
          let data = res.data;
          let token = data.token_type + ' ' + data.access_token;
          let refresh_token = data.token_type + ' ' + data.refresh_token;
          let user_id = data.user_id;
          window.localStorage.setItem('user_id', user_id);

          if (timer.value) {
            clearInterval(timer.value);
          }
          userStore.setToken(token);
          userStore.setRefreshToken(refresh_token);
          // getUserInfo();
          loading.value = false;
          router.push({ path: '/home' });
        });
      } catch (error) {
        console.error('User denied message signing');
      }
    }
  }
  const checkWallet = async (address, wallet_type = 'metamask') => {
    return check_wallet({ address, wallet_type }).then(async (res) => {
      if (res.data.register || res.data.bind) {
        await getNonce(address, 'metamask');
        signMetaMessage([address], nonce.value);
      } else {
        wallet_register({ address, wallet_type }).then(async (res) => {
          if (res.code == 200) {
            await getNonce(address, 'metamask');
            signMetaMessage([address], nonce.value);
          }
        });
      }
    });
  };
  const metaOpen = inject('metaOpen');
  const loginWithMeta = async () => {
    const provider = await detectEthereumProvider();
    if (provider == window.ethereum && provider) {
      if (!connectedWallet?.value?.accounts?.[0]?.address) await connectWallet();
      let address = connectedWallet?.value?.accounts?.[0]?.address;
      if (!address) {
        disconnectConnectedWallet();
        return false;
      }
      await checkWallet(address);
    } else {
      metaOpen();
      // window.open('https://metamask.app.link/dapp/https://amb.u2i.net');
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

  onMounted(async () => {
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
    justify-content: center;
    height: 100vh;
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
    justify-content: center;
    align-items: center;
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
      margin: 0.5rem 1rem;
      width: 2.5rem;
      cursor: pointer;
      svg {
        margin-top: 0.5rem;
        width: 2.5rem;
      }
    }
  }
</style>

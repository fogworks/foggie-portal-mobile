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
      </div>
      <div class="other_login_box" @click="loginWithUniSat">
        <img src="@/assets/svg/home/unisat.svg" alt="" />
        Sign In with UniSat
      </div> -->
    </nut-form>
  </div>
</template>

<script lang="ts" setup name="LoginPage">
  // import { MetaMaskSDK } from '@metamask/sdk';
  import { login, Captcha, check_email_register, user } from '@/api';
  // import router from '@/router';
  import { useRouter } from 'vue-router';
  import { reactive, ref } from 'vue';
  import { useUserStore } from '@/store/modules/user';
  import { showToast } from '@nutui/nutui';
  import '@nutui/nutui/dist/packages/toast/style';
  import { load_gpa_token } from '@/utils/util.ts';
  // import MetaMask from '~icons/home/metamask.svg';

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
  onMounted(async () => {
    if (window.ethereum) {
      loginWithMeta();
    }
  });
</script>

<style lang="scss">
  @import url('./login.scss');
</style>
<style lang="scss" scoped>
  .login {
    justify-content: center;
    height: 100vh;
  }
</style>

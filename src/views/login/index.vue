<template>
  <div class="login">
    <h2>Login</h2>
    <nut-divider />
    <nut-form ref="ruleForm" :model-value="loginForm">
      <nut-form-item required prop="email" :rules="[{ required: true, message: 'Enter your Email' }]">
        <input v-model="loginForm.email" class="nut-input-text" placeholder="Enter your Email" type="text" />
      </nut-form-item>
      <nut-form-item required prop="password" :rules="[{ required: true, message: 'Please enter password' }]">
        <input v-model="loginForm.password" class="nut-input-text" placeholder="Please enter password" type="password" />
      </nut-form-item>
      <nut-button block type="info" @click="submit" :loading="loading"> Login </nut-button>
    </nut-form>
    <div class="Register_btn">
      <span class="password_login" @click="router.push('/register')">Register</span>
      <span class="password_login"> Forgot Password?</span>
    </div>
  </div>
</template>

<script lang="ts" setup name="LoginPage">
  import { login, Captcha, check_email_register } from '@/api';
  import router from '@/router';
  import { reactive, ref } from 'vue';
  import { useUserStore } from '@/store/modules/user';
  import { showFailToast } from 'vant';
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
  const submit = () => {
    ruleForm.value.validate().then(async ({ valid, errors }: any) => {
      if (valid) {
        loading.value = true;
        const password = loginForm.password;
        let hashPwd = bcryptjs.hashSync(password, 10);
        // let hashPwd = password;
        let postData = {
          email: loginForm.email,
          password: hashPwd,
          captcha_text: loginForm.captcha_text,
          captcha_id: loginForm.captcha_id,
          is_client: false,
          login_type: 'password',
          // recaptcha_token: reCaptchaV3Token,
        };
        check_email_register(loginForm.email).then((rr) => {
          if (rr.data) {
            if (!rr.data.email) {
              showFailToast('The current email is not registered, please register');
              loading.value = false;
            } else if (!rr.data.pw_valid) {
              showFailToast('The current password is not secure. Please use "Forgot Password" to update your current password');
              loading.value = false;
            } else {
              login(postData)
                .then((res) => {
                  if (res.next_step === 'captcha') {
                    getCaptcha();
                    showCaptcha.value = true;
                  } else if (res && res.data) {
                    let data = res.data;
                    let token = data.token_type + ' ' + data.access_token;
                    let refresh_token = data.token_type + ' ' + data.refresh_token;
                    let user_id = data.user_id;
                    window.localStorage.setItem('user_id', user_id);
                    window.localStorage.setItem('refresh_token', refresh_token);
                    let userInfo = {
                      email: loginForm.email,
                      token: token, //res.token
                      user_id: user_id,
                    };
                    if (timer.value) {
                      clearInterval(timer.value);
                    }
                    // store.dispatch('token/login', userInfo);
                    userStore.setInfo(userInfo);
                    router.push({ path: '/home' });

                    // this.getUserInfo();
                    // this.$emit("login");
                    // store.dispatch("global/setDmcShow", true);
                    //  this.loadUserLoginStatus()
                  }
                })
                .catch((err) => {
                  loading.value = false;
                  if (err.next_step === 'captcha') {
                    getCaptcha();
                    showCaptcha.value = true;
                  }
                });
            }
          }
        });
        // const userInfo = await userStore.login(loginForm);
        // if (userInfo) {
        //   router.push({ path: '/home' });
        // }
      } else {
        console.log('error submit!!', errors);
      }
    });
  };
</script>

<style scoped lang="scss">
  .login {
    padding: 20px;
    background: #fff;

    h2 {
      letter-spacing: 10px;
      text-align: center;
    }

    .nut-form-item {
      margin-bottom: 20px;
      border-radius: 20px;
      background: #f2f3f5;

      input {
        background: transparent;
      }
    }
    :deep {
      .nut-cell-group__wrap {
        box-shadow: none;
      }
    }
    .Register_btn {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 10px;
      font-size: 1rem;
      color: #409eff;
      font-weight: 700;
      cursor: pointer;
    }
  }
</style>

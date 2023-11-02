<template>
  <div class="login register">
    <!-- <img src="@/assets/logo-top-left-dark.png" alt="" /> -->

    <h1>Create Account</h1>
    <!-- <img src="@/assets/logo-dog-black.svg" alt="" /> -->

    <nut-form ref="ruleForm" :model-value="loginForm" :rules="formRules">
      <nut-form-item required prop="email">
        <input v-model="loginForm.email" name="email" class="nut-input-text" placeholder="Email" type="text" />
      </nut-form-item>
      <nut-form-item required prop="password">
        <input v-model="loginForm.password" class="nut-input-text" placeholder="Password" type="password" />
      </nut-form-item>
      <div style="margin: 5px 0 10px 10px" v-if="loginForm.password">
        <div class="passwordTip">
          <div :class="[/[a-z]+/.test(loginForm.password) && /[A-Z]+/.test(loginForm.password) ? 'isOk' : 'isNo']">
            <van-icon name="success" />
          </div>
          <span style="font-size: 12px">Include both UPPER & lowercase letters</span>
        </div>

        <div class="passwordTip">
          <div :class="[/\d+/.test(loginForm.password) ? 'isOk' : 'isNo']">
            <van-icon name="success" />
          </div>
          <span style="font-size: 12px">Use a minimum of 1 number</span>
        </div>

        <div class="passwordTip">
          <div :class="[/[!@#$%^&*+]+/.test(loginForm.password) ? 'isOk' : 'isNo']">
            <van-icon name="success" />
          </div>
          <span style="font-size: 12px">Use a minimum of symbol (e.g. !@#$%^&*+)</span>
        </div>
      </div>
      <nut-form-item required prop="confirmPassword">
        <input v-model="loginForm.confirmPassword" class="nut-input-text" placeholder="Confirm password" type="password" />
      </nut-form-item>

      <nut-form-item required prop="verifyPw">
        <input style="width: 70%" v-model="loginForm.verifyPw" class="nut-input-text" placeholder="Email verification code" />
        <nut-button class="get_code" v-if="numCount > 0" disabled>{{ numCount }}s</nut-button>
        <nut-button class="get_code" v-else type="info" @click="getVerifyPw">Get Code</nut-button>
      </nut-form-item>
      <!-- <nut-form-item required prop="promo_code">
        <input v-model="loginForm.promo_code" class="nut-input-text" placeholder="Enter your invitation code(optional)" type="text" />
      </nut-form-item> -->
      <nut-form-item required prop="amb_promo_code">
        <input v-model="loginForm.amb_promo_code" class="nut-input-text" placeholder="Invitation Code(optional)" type="text" />
      </nut-form-item>
    </nut-form>
    <div>
      <nut-button block type="info" @click="submit" :loading="loading"> Create Account </nut-button>
      <div class="Register_btn">
        <span class="password_login" @click="router.push('/login')">Sign In</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup name="LoginPage">
  import { register, get_verify_pw, check_promo, user, login } from '@/api';
  import { useRouter, useRoute } from 'vue-router';
  import { reactive, ref } from 'vue';
  import { useUserStore } from '@/store/modules/user';

  import { showToast } from '@nutui/nutui';
  import '@nutui/nutui/dist/packages/toast/style';
  import { check_promo as check_amb_promo } from '@/api/amb.ts';

  const router = useRouter();
  const route = useRoute();
  const bcryptjs = require('bcryptjs');
  // import bcryptjs from 'bcryptjs';
  const userStore = useUserStore();
  const loginForm = reactive({
    email: '',
    password: '',
    confirmPassword: '',
    verifyPw: '',
    promo_code: '',
    amb_promo_code: '',
  });
  const validatePass2 = (value: string) => {
    if (value === '') {
      return Promise.reject('Please input the password again');
    } else if (value !== loginForm.password) {
      return Promise.reject("Two inputs don't match!");
    } else {
      return Promise.resolve();
    }
  };
  const validateEmail = (value: string) => {
    if (value === '') {
      return Promise.reject('Please Enter email address');
    } else if (!/^[0-9a-zA-Z_.-]+[@][0-9a-zA-Z_.-]+([.][a-zA-Z]+){1,2}$/.test(value)) {
      return Promise.reject('Please enter the correct email format!');
    } else {
      return Promise.resolve();
    }
  };
  const validatePassword = (value: string) => {
    if (value === '') {
      return Promise.reject('Please enter password');
    } else if (/[a-z]+/.test(value) && /[A-Z]+/.test(value) && /\d+/.test(value) && /[!@#$%^&*+]+/.test(value)) {
      return Promise.resolve();
    } else {
      return Promise.reject('');
    }
  };
  const formRules = {
    email: [
      {
        required: true,
        message: 'Please Enter email address',
        validator: validateEmail,
      },
    ],
    password: [
      {
        required: true,
        validator: validatePassword,
      },
    ],
    confirmPassword: [
      {
        required: true,
        validator: validatePass2,
      },
    ],
    verifyPw: [
      {
        required: true,
        message: 'Please enter Email verification code!',
      },
    ],
  };

  const numCount = ref(0);
  const loading = ref<boolean>(false);
  const ruleForm = ref<any>('');

  function getVerifyPw() {
    ruleForm.value.validate('email').then(async ({ valid }: any) => {
      if (valid) {
        get_verify_pw({ email: loginForm.email }).then((res) => {
          showToast.text('The verification code has been sent to your email, please check.');
          console.log(res);

          if (res) {
            numCount.value = 30;
            const countBackwards = setInterval(() => {
              numCount.value--;
              if (numCount.value <= 0) {
                clearInterval(countBackwards);
              }
            }, 1000);
          }
        });
      }
    });
  }
  // async function getUserInfo() {
  //   let res = await user();
  //   if (res.data) {
  //     userStore.setInfo(res.data);
  //     router.push({ path: '/home' });
  //   }
  // }
  const submit = () => {
    ruleForm.value.validate().then(async ({ valid, errors }: any) => {
      if (valid) {
        loading.value = true;
        const password = loginForm.password;
        // let hashPwd = bcryptjs.hashSync(password, 10);
        let hashPwd = password;
        let postData = {
          email: loginForm.email,
          password: hashPwd,
          confirm: hashPwd,
          verify_pw: loginForm.verifyPw,
          // recaptcha_token: reCaptchaV3Token,
        };
        let isUserCode, isAmbCode;
        if (loginForm.amb_promo_code) {
          const userPromoRes = await check_promo({
            promo_code: loginForm.amb_promo_code,
          });
          if (userPromoRes.code == 200) {
            isUserCode = true;
          } else {
            isUserCode = false;
          }
          const ambPromoRes = await check_amb_promo(loginForm.amb_promo_code);
          if (ambPromoRes.code == 200) {
            isAmbCode = true;
          } else {
            isAmbCode = false;
          }
          if (!isAmbCode && !isUserCode) {
            showToast.fail('Please enter a valid invitation code');
            return false;
          }
          if (isUserCode) {
            postData.promo_code = loginForm.amb_promo_code;
          } else if (isAmbCode) {
            postData.amb_promo_code = loginForm.amb_promo_code;
          }
        }

        register(postData)
          .then((res) => {
            if (res && res.data && res.data.uuid) {
              showToast.success('Registration successful');
              const loginPassword = loginForm.password;
              let hashPwd = bcryptjs.hashSync(loginPassword, 10);
              let postData = {
                email: loginForm.email,
                password: hashPwd,
                captcha_text: '',
                captcha_id: '',
                is_client: true,
                login_type: 'password',
                // recaptcha_token: reCaptchaV3Token,
              };
              login(postData)
                .then((res) => {
                  console.log(res);
                  if (res.next_step === 'captcha') {
                    loading.value = false;
                  } else if (res && res.data) {
                    let data = res.data;
                    let token = data.token_type + ' ' + data.access_token;
                    // let refresh_token = data.token_type + ' ' + data.refresh_token;
                    let user_id = data.user_id;
                    window.localStorage.setItem('user_id', user_id);

                    userStore.setToken(token);
                    router.push('/home');
                    // getUserInfo();
                    loading.value = false;
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
            } else if (res && res.data) {
              showToast.text(
                'A verification link has been sent to your email address, please check your email to verify and Login your account.',
              );
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
        console.log('error submit!!', errors);
      }
    });
  };
  onMounted(() => {
    loginForm.amb_promo_code = route.query.amb_promo_code || '';
  });
</script>

<style lang="scss">
  @import url('./login.scss');
</style>

<style lang="scss" scoped>
  .Register_btn {
    justify-content: flex-end;
  }
</style>

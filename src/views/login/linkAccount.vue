<template>
  <div class="login register">
    <!-- <img src="@/assets/logo-top-left-dark.png" alt="" /> -->

    <h1>Link Account</h1>
    <!-- <img src="@/assets/logo-dog-black.svg" alt="" /> -->

    <nut-form ref="ruleForm" :model-value="loginForm" :rules="formRules">
      <nut-form-item required prop="email">
        <input v-model.trim="loginForm.email" name="email" class="nut-input-text" placeholder="Email" type="text" />
      </nut-form-item>
      <nut-form-item required prop="password">
        <input v-model.trim="loginForm.password" class="nut-input-text" placeholder="Password" type="password" />
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
        <input
          v-model.trim="loginForm.confirmPassword"
          @blur="customChangeValidate('confirmPassword')"
          class="nut-input-text"
          placeholder="Confirm password"
          type="password"
        />
      </nut-form-item>

      <nut-form-item required prop="verifyPw">
        <input
          style="width: 70%"
          v-model.trim="loginForm.verifyPw"
          class="nut-input-text"
          @blur="customChangeValidate('verifyPw')"
          placeholder="Email verification code"
        />
        <nut-button class="get_code" v-if="numCount > 0" disabled>{{ numCount }}s</nut-button>
        <nut-button class="get_code" v-else type="info" @click="getVerifyPw">Get Code</nut-button>
      </nut-form-item>
      <!-- <nut-form-item required prop="promo_code">
        <input v-model="loginForm.promo_code" class="nut-input-text" placeholder="Enter your invitation code(optional)" type="text" />
      </nut-form-item> -->
      <!-- <nut-form-item required prop="amb_promo_code">
        <input v-model.trim="loginForm.amb_promo_code" class="nut-input-text" placeholder="Invitation Code(optional)" type="text" />
      </nut-form-item> -->
    </nut-form>
    <div>
      <nut-button block type="info" @click="submit" :loading="loading"> Link Account </nut-button>
      <div class="Register_btn">
        <span class="password_login" @click="router.push('/home')">Skip</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup name="LoginPage">
  import { register, get_verify_pw, check_promo, user, login, wallet_bind_email, check_email_register } from '@/api';
  import { useRouter, useRoute } from 'vue-router';
  import { reactive, ref } from 'vue';
  import { useUserStore } from '@/store/modules/user';
  import { debounce } from 'lodash';
  import { showToast } from '@nutui/nutui';
  import '@nutui/nutui/dist/packages/toast/style';
  import { check_promo as check_amb_promo } from '@/api/amb.ts';
  import loadingImg from '@/components/loadingImg/index.vue';

  const router = useRouter();
  const route = useRoute();
  const bcryptjs = require('bcryptjs');
  // import bcryptjs from 'bcryptjs';
  const userStore = useUserStore();
  const userInfo = computed(() => userStore.getUserInfo);
  const loginForm = reactive({
    email: '',
    password: '',
    confirmPassword: '',
    verifyPw: '',
    promo_code: '',
    amb_promo_code: '',
  });
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
  const validatePass2 = (value: string) => {
    console.log(value);

    if (value === '') {
      return Promise.reject('Please input the password again');
    } else if (value !== loginForm.password) {
      return Promise.reject("Two inputs don't match!");
    } else if (value.length > 16 || value.length < 6) {
      console.log(123);
      return Promise.reject('Password length needs to be between 6 and 16');
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
    } else if (value.length > 16 || value.length < 6) {
      return Promise.reject('Password length needs to be between 6 and 16');
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
        check_email_register(loginForm.email).then((rr) => {
          if (rr.data) {
            if (!rr.data.email) {
              loading.value = true;
              const password = loginForm.password;
              // let hashPwd = bcryptjs.hashSync(password, 10);
              let hashPwd = window.btoa(password);

              // let hashPwd = password;
              let postData = {
                address: userInfo.value.address,
                wallet_type: 'metamask',
                email: loginForm.email,
                password: hashPwd,
                confirm: hashPwd,
                verify_pw: loginForm.verifyPw,
                // recaptcha_token: reCaptchaV3Token,
              };
              wallet_bind_email(postData)
                .then((res) => {
                  if (res && res.data && res.data.uuid) {
                    showToast.success('Linkage Success');
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
                          let refresh_token = data.token_type + ' ' + data.refresh_token;
                          let user_id = data.user_id;
                          window.localStorage.setItem('user_id', user_id);
                          userStore.setToken(token);
                          userStore.setRefreshToken(refresh_token);
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
                        }
                      });
                  } else if (res && res.data) {
                    showToast.text(
                      'A verification link has been sent to your email address, please check your email to verify and Login your account.',
                    );
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
              showToast.fail('This email address has been registered, please change to a new one and try again.');
            }
          }
        });
      } else {
        console.log('error submit!!', errors);
      }
    });
  };

  const customChangeValidate = debounce((prop: string) => {
    console.log(prop);

    ruleForm.value.validate(prop).then(({ valid, errors }: any) => {
      if (valid) {
        console.log('success');
      } else {
        console.log('error submit!!', errors);
      }
    });
  }, 300);
  onMounted(() => {
    initFoggieDate();
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

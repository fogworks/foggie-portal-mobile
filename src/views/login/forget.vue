<template>
  <div class="login">
    <!-- <img src="@/assets/logo-dog-black.svg" alt="" /> -->
    <!-- <img src="@/assets/fog-works.png" alt="" /> -->
    <h1>Forgot Password</h1>

    <!-- <h1 style="font-size: 25px">Forget Password</h1> -->
    <nut-form ref="ruleForm" :model-value="loginForm" :rules="formRules">
      <nut-form-item required prop="email">
        <input v-model="loginForm.email" name="email" class="nut-input-text" placeholder="Email" type="text" />
      </nut-form-item>
      <nut-form-item required prop="verifyPw">
        <input style="width: 70%" v-model="loginForm.verifyPw" class="nut-input-text" placeholder="Verification code" />
        <nut-button class="get_code" v-if="numCount > 0" disabled>{{ numCount }}s</nut-button>
        <nut-button class="get_code" v-else type="info" @click="getVerifyPw">Get Code</nut-button>
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
    </nut-form>
    <nut-button block type="info" @click="submit" :loading="loading"> Confirm </nut-button>
    <div class="Register_btn" style="justify-content: center">
      <span class="password_login" @click="router.push('/login')">Sign In</span>
    </div>
  </div>
</template>

<script lang="ts" setup name="LoginPage">
  import { modify_pw, get_verify_pw } from '@/api';
  import router from '@/router';
  import { reactive, ref } from 'vue';
  // import { useUserStore } from '@/store/modules/user';
  import { showSuccessToast } from 'vant';

  // import bcryptjs from 'bcryptjs';
  // const userStore = useUserStore();
  const loginForm = reactive({
    email: '',
    password: '',
    confirmPassword: '',
    verifyPw: '',
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
          showSuccessToast('The verification code has been sent to your email, please check.');
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
  const submit = () => {
    ruleForm.value.validate().then(async ({ valid, errors }: any) => {
      if (valid) {
        loading.value = true;
        const password = loginForm.password;
        let hashPwd = password;
        // let hashPwd = password;
        let postData = {
          email: loginForm.email,
          password: hashPwd,
          confirm_password: hashPwd,
          verify_pw: loginForm.verifyPw,
          // recaptcha_token: reCaptchaV3Token,
        };
        modify_pw(postData).then(() => {
          showSuccessToast('Password modification successful!');

          router.push('/login');
        });
      } else {
        console.log('error submit!!', errors);
      }
    });
  };
</script>

<style lang="scss">
  @import url('./login.scss');
</style>

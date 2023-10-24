<template>
  <div class="userInfo">
    <div class="infoList">
      <div>
        <Category color="#505056" />
      </div>
      <div>
        <MoreX color="#2A2B32" />
      </div>
    </div>
    <div class="infoContent">
      <img src="@/assets/1698057212519.jpg" alt="" srcset="" />
      <div>{{ dmcAccount }}</div>
      <div>Invitation: {{ referral_code }}</div>
    </div>

    <nut-row class="buttonContent">
      <nut-col :span="8" @click="gotoDetail('/withdraw')">
        <div class="customBtn">
          <Retweet color="#505056" />
        </div>
        <div>Payment Security</div>
      </nut-col>

      <nut-col :span="8" @click="gotoDetail('/personalInfo')">
        <div class="customBtn">
          <My2 color="#505056" />
        </div>
        <div>Updated information</div>
      </nut-col>
      <nut-col :span="8" @click="goToPrivacy">
        <div class="customBtn">
          <Link color="#505056" />
        </div>
        <div>with respect to</div>
      </nut-col>
    </nut-row>

    <nut-row class="buttonContent">
      <nut-col :span="12">
        <div class="customBtn" @click="visible = true">
          <Location color="#505056" />
        </div>
        <div>Quick Setup</div>
      </nut-col>
      <nut-col :span="12">
        <div class="customBtn" @click="contactUs">
          <Service color="#505056" />
        </div>
        <div>Contact Us</div>
      </nut-col>

    </nut-row>





    <div class="logOutBtn" @click="logout">
      <span style="margin-left: 45px">Log out</span>
      <div class="outBnt">
        <ArrowRight2 color="#5771F9" style="margin-right: 10px" />
      </div>
    </div>

    <nut-action-sheet v-model:visible="visible" :menu-items="iconItemList" />
  </div>
</template>

<script lang="ts" setup name="MemberPage">
import { useUserStore } from '@/store/modules/user';
import { useRouter } from 'vue-router';
// import { Dongdong } from '@nutui/icons-vue';
import { user } from '@/api';
import { Category, MoreX, Retweet, My2, Service, Location, Link, ArrowRight2 } from '@nutui/icons-vue';
import { showDialog } from '@nutui/nutui';
import { showToast } from '@nutui/nutui';

import '@nutui/nutui/dist/packages/dialog/style';
import '@nutui/nutui/dist/packages/toast/style';
import { createVNode } from 'vue';
const userStore = useUserStore();

const email = ref<string>('');
const dmcAccount = ref<string>('');
const referral_code = ref<string>('');
const router = useRouter();
const gotoDetail = (path): void => {
  router.push(path);
};

const visible = ref<boolean>(false)
const iconItemList = ref([{ name: 'cloud mining pool' }, { name: 'Cloud Mining Pool Client' }]);

const adminEmail = ref<string>('123456789@234.com')
const goToPrivacy = () => {
  window.open('https://foggie.fogworks.io/#/privacyPolicy_EN');
};
const logout = (): void => {
  showDialog({
    title: 'info',
    content: createVNode('span', { style: {} }, 'Are you sure you want to Log out?'),
    cancelText: 'Cancel',
    okText: 'OK',
    onCancel: () => {
      // console.log('取消');
    },
    onOk: () => {
      userStore.logout();
      // localStorage.removeItem('refresh_token');
      router.push('/login');
      // console.log('确定');
    },
  });
};

const contactUs = (): void => {
  showDialog({
    title: 'Our e-mail',
    content: createVNode('div', null, [
      createVNode(
        'span',
        { style: { color: '#303030', fontSize: '12px' } },
        'Additional information, complaints and suggestions, change of account information. Dispute handling and other issues handling',
      ),
      createVNode(
        'div',
        { style: { color: '#606060', marginTop: '15px', fontSize: '18px' } },
        adminEmail.value,
      ),
    ]),
    noCancelBtn: true,
    okText: 'Copy',
    onOk: () => {
      if (!navigator.clipboard) {
        fallbackCopyTextToClipboard(adminEmail.value);
        return;
      }
      navigator.clipboard.writeText(adminEmail.value).then(
        function () {
          showToast.success('Copying  successful!');
        },
        function () {
          showToast.fail('Copying  unsuccessful!');
        }
      )
    },
  });
};



function fallbackCopyTextToClipboard(text) {
  // 1.Create a selectable element
  let textArea = document.createElement("textarea");
  textArea.value = text;

  // 2.Use positioning to prevent page scrolling
  textArea.style.top = "0";
  textArea.style.left = "0";
  textArea.style.position = "fixed";
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    let successful = document.execCommand("copy");
    let msg = successful ? "successful" : "unsuccessful";
    showToast.success(msg);
  } catch (err) {
    showToast.fail('unsuccessful');
  }
  // 3.Remove element
  document.body.removeChild(textArea);
}


onMounted(() => {
  user()
    .then((res) => {
      if (res && res.data && res.data.email) {
        console.log(res);
        referral_code.value = res.data.referral_code;
        email.value = res.data.email;
        // dmcAccount.value = `DMC Account ${res.data.dmc}`;
        dmcAccount.value = res.data.dmc;
      }
    })
    .catch(() => {
      router.push('/login');
    });
});
</script>


<style lang="scss" scoped>
::v-deep {
  .nut-popover-menu-item {
    min-width: 400px;
  }
}

.userInfo {
  padding: 20px 25px;
  background-color: #ffffff;
  height: calc(100vh - 52px);

  .infoList {
    display: flex;
    justify-content: space-between;
    visibility: hidden;

    &>div {
      width: 87px;
      height: 87px;
      border-radius: 25px;
      background: #ffffff;
      box-shadow: 0px 30px 65px 0px rgba(111, 136, 157, 0.25);
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .infoContent {
    margin-top: 70px;
    background: #f5f6fa;
    border-radius: 20px;
    min-height: 235px;
    position: relative;
    padding-top: 65px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;

    img {
      width: 130px;
      height: 130px;
      border-radius: 15px;
      position: absolute;
      top: -65px;
      left: 50%;
      transform: translateX(-50%);
    }

    &>div:nth-of-type(1) {
      font-family: Alibaba PuHuiTi 2;
      font-size: 40px;
      font-weight: 250;
      line-height: 54px;
      text-align: center;
      letter-spacing: 0px;
      color: #020000;
      margin-top: 20px;
    }

    &>div:nth-of-type(2) {
      font-family: Inter;
      font-size: 24 px;
      font-weight: 600;
      line-height: 32px;
      text-align: center;
      letter-spacing: -0.45px;
      margin-top: 10px;
      color: #151940;
    }
  }

  .buttonContent {
    .customBtn {
      margin-top: 100px;
      width: 100px;
      height: 100px;
      background: #f4f5f9;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: transform 0.3s ease-in-out;
    }

    .customBtn:active {
      transform: scale(1.4);
    }

    .nut-col,
    .customPopover {
      display: flex;
      flex-direction: column;
      align-items: center;

      &>div:nth-of-type(2) {
        font-family: Inter;
        font-size: 28px;
        font-weight: 500;
        line-height: 40px;
        margin-top: 30px;
        text-align: center;
        letter-spacing: 0px;
        color: #151940;
        user-select: none;
        word-wrap: break-word !important;
        word-break: normal;
        text-align: center;
      }
    }


  }

  .logOutBtn {
    position: fixed;
    bottom: 160px;
    width: 80%;
    margin: 150px auto 0px;
    height: 140px;
    background: #4c5093;
    border-radius: 18px;
    text-align: center;
    line-height: 140px;
    font-family: Inter;
    font-size: 34px;
    font-weight: 500;
    text-align: center;
    letter-spacing: -0.45px;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: transform 0.3s ease-in-out;

    .outBnt {
      width: 90px;
      height: 90px;
      border-radius: 18px;
      background-color: #ffffff;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      margin-right: 20px;
    }
  }

  .logOutBtn:active {
    transform: translate(5px, 5px);
  }
}
</style>

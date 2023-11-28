<template>
  <div class="userInfo">
    <div class="userHeader">
      <div class="title">UserInfo</div>
      <div class="user_header_box">
        <div class="content">
          <img src="@/assets/user.png" alt="" srcset="" />
          <!-- <img src="@/assets/user.png" alt="" srcset=""> -->
        </div>
        <div>
          <div class="accTitle">{{ dmcAccount }}</div>
          <div class="email">{{ email }}</div>
          <div class="email" v-if="promo_code">{{ promo_code }}</div>
        </div>
      </div>
      <div class="money">
        <div>
          <div class="value">
            <span style="font-size: 18px">{{ money.Balance.integerPart }}</span>
            <span style="font-size: 12px">.{{ money.Balance.decimalPart }}</span>
          </div>
          <div class="key">Balance</div>
        </div>
        <div>
          <div class="value">
            <span style="font-size: 18px">{{ money.Recharge.integerPart }}</span>
            <span style="font-size: 12px">.{{ money.Recharge.decimalPart }}</span>
          </div>
          <div class="key">Recharge</div>
        </div>
        <div>
          <div class="value">
            <span style="font-size: 18px">{{ money.withdraw.integerPart }}</span>
            <span style="font-size: 12px">.{{ money.withdraw.decimalPart }}</span>
          </div>
          <div class="key">withdraw</div>
        </div>
      </div>
    </div>
    <div class="userBox">
      <div class="title">My list</div>

      <nut-row class="buttonContent">
        <!-- <nut-col :span="6" @click="gotoDetail('/withdraw')">
        <div class="customBtn">
          <Retweet color="#505056" />
        </div>
        <div>Payment Security</div>
      </nut-col> -->

        <nut-col :span="6" @click="gotoDetail('/personalInfo')">
          <div class="customBtn">
            <!-- <My2 color="#505056" /> -->
            <img src="@/assets/newIcon/userInfo.png" style="width: 45px; height: 45px; display: inline-block" />
          </div>
          <div>Profile</div>
        </nut-col>
        <nut-col :span="6" @click="visible = true">
          <div class="customBtn">
            <!-- <Location color="#505056" /> -->
            <!-- <Link color="#505056" /> -->
            <img src="@/assets/newIcon/links.png" style="width: 45px; height: 45px; display: inline-block" />
          </div>
          <div>Links</div>
        </nut-col>
        <nut-col :span="6" @click="contactUs">
          <div class="customBtn">
            <!-- <Service color="#505056" /> -->
            <img src="@/assets/newIcon/ContactUs.png" style="width: 45px; height: 45px; display: inline-block" />
          </div>
          <div>Contact Us</div>
        </nut-col>
        <nut-col :span="6" @click="goToPrivacy">
          <div class="customBtn">
            <!-- <Link color="#505056" /> -->
            <img src="@/assets/newIcon/AboutUs.png" style="width: 45px; height: 45px; display: inline-block" />
          </div>
          <div
            >About
            <div>Fog Works</div>
          </div>
        </nut-col>
      </nut-row>

      <div class="logOutBtn" @click="logout">
        <span style="margin-left: 45px">Log out</span>
        <div class="outBnt">
          <ArrowRight2 color="#5771F9" />
        </div>
      </div>
    </div>

    <Teleport to="body">
      <nut-action-sheet v-model:visible="visible" title="Links">
        <div class="custom-action_sheet">
          <div @click="choose('dmc')">
            <img src="@/assets/DMC_token.png" style="width: 30px; height: 30px; margin-right: 10px; display: inline-block" />
            <div>DMC</div>
          </div>
          <div @click="choose('ipfs')">
            <img src="@/assets/ipfs.png" style="width: 30px; height: 30px; margin-right: 10px; display: inline-block" />
            <!-- <img src="@/assets/DMC_token.png" style="width: 30px; height: 30px; margin-right: 10px; display: inline-block" /> -->
            <div>IPFS</div>
          </div>
          <div @click="choose('foggie')">
            <img src="@/assets/logo-dog-black.svg" style="width: 30px; height: 30px; margin-right: 10px; display: inline-block" />
            <div>Fog Works</div>
          </div>
          <div @click="choose('pool')">
            <img src="@/assets/user.svg" style="width: 30px; height: 30px; margin-right: 10px; display: inline-block" />
            <div>Premium Agent</div>
          </div>
          <!-- <div @click="choose('client')">
          <Shop></Shop>
          <div>Cloud Mining Pool Client</div>
        </div> -->
          <div @click="visible = false"> Cancel </div>
        </div>
      </nut-action-sheet>
    </Teleport>
  </div>
</template>

<script lang="ts" setup name="MemberPage">
  import { useUserStore } from '@/store/modules/user';
  import { My2, Service, Link, ArrowRight2 } from '@nutui/icons-vue';
  import { showDialog } from '@nutui/nutui';

  import '@nutui/nutui/dist/packages/dialog/style';

  import { createVNode } from 'vue';
  import { useRouter } from 'vue-router';
  import { user } from '@/api';
  import { get_user_dmc } from '@/api/amb';
  import { onMounted, reactive, ref } from 'vue';
  import { formatNumber } from '@/utils/util';
  const userStore = useUserStore();
  const router = useRouter();
  const email = ref<string>('');
  const dmcAccount = ref<string>('');

  const promo_code = ref<string>('');
  const visible = ref<boolean>(false);

  /* 获取用户身份信息 */
  function loadUserInfo() {
    user()
      .then((res) => {
        if (res && res.data && res.data.email) {
          console.log(res);
          promo_code.value = res.data.amb_promo_code;
          email.value = res.data.email;
          dmcAccount.value = res.data.dmc;
        }
      })
      .catch(() => {
        router.push('/login');
      });
  }
  /* 获取用户 钱包结余 充值 提现金额 */
  const money = reactive({
    Balance: <object>{ integerPart: 0, decimalPart: 0 },
    Recharge: <object>{ integerPart: 0, decimalPart: 0 },
    withdraw: <object>{ integerPart: 0, decimalPart: 0 },
  });

  function loadUserDmc() {
    get_user_dmc()
      .then((res) => {
        if (res.code == 200) {
          const data = res.result?.data;
          money.Balance = formatNumber(data?.balance);
          money.Recharge = formatNumber(data?.Recharge);
          money.withdraw = formatNumber(data?.withdraw);
        }
      })
      .catch((err) => {});
  }
  const gotoDetail = (path): void => {
    router.push(path);
  };

  const goToPrivacy = () => {
    window.open('https://fogworks.io/');
  };
  const logout = (): void => {
    showDialog({
      title: 'Logout',
      content: createVNode('span', { style: {} }, 'Are you sure you want to cancel this order?'),
      cancelText: 'Cancel',
      okText: 'Yes',
      onCancel: () => {
        // console.log('取消');
      },
      onOk: () => {
        userStore.logout();
        userStore.setCloudCodeIsBind(false);

        // localStorage.removeItem('refresh_token');
        router.push('/guide');
        // console.log('确定');
      },
    });
  };

  const contactUs = (): void => {
    showDialog({
      title: 'Contact Us',
      content: createVNode('div', null, [
        createVNode(
          'span',
          { style: { color: '#d1cece', fontSize: '16px' } },
          'We sincerely welcome you to contact us for more information!',
        ),
        // createVNode(
        //   'div',
        //   { style: { color: '#606060', marginTop: '14px', fontSize: '16px' } },
        //   'https://discord.com/channels/1046683342025789541/1070536042677030973/1070584672066752573',
        // ),
      ]),
      noCancelBtn: true,
      okText: 'Contact',
      onOk: () => {
        window.open('https://discord.com/channels/1046683342025789541/1070536042677030973/1070584672066752573');
        // if (!navigator.clipboard) {
        //   fallbackCopyTextToClipboard('https://discord.com/channels/1046683342025789541/1070536042677030973/1070584672066752573');
        //   return;
        // }
        // navigator.clipboard.writeText('https://discord.com/channels/1046683342025789541/1070536042677030973/1070584672066752573').then(
        //   function () {
        //     showToast.success('Copying  successful!');
        //   },
        //   function () {
        //     showToast.fail('Copying  unsuccessful!');
        //   },
        // );
      },
    });
  };

  function choose(type: string) {
    console.log(type);
    if (type === 'dmc') {
      window.open('https://dmctech.io/');
    } else if (type === 'ipfs') {
      window.open('https://ipfs.tech/');
    } else if (type === 'foggie') {
      window.open('https://fogworks.io/');
    } else if (type === 'pool') {
      window.open('http://154.31.41.124:8086/');
    }
    visible.value = false;
  }
  const canvasref = ref();

  onMounted(() => {
    loadUserInfo();
    loadUserDmc();
  });
</script>

<style lang="scss" scoped>
  .userInfo {
    margin-left: -4vw;
    margin-right: -4vw;
    min-height: 100vh;
    background-color: #fff;

    .userHeader {
      padding: 20px 60px;
      background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      padding-bottom: 150px;

      .title {
        color: azure;
        font-size: 40px;
        text-align: center;
      }

      .user_header_box {
        --w: 150px;
        display: grid;
        grid-template-columns: var(--w) auto;
        column-gap: 30px;
        height: 200px;
        padding-top: 50px;
        align-items: center;

        .content {
          width: var(--w);
          // height: calc(var(--w) * 1.1547);
          height: var(--w);

          // clip-path: polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%);
          background-color: #f4f5f9;
          display: grid;
          place-items: center;
          border-radius: 50%;
          box-shadow:
            rgb(24 32 79 / 25%) 0px 40px 80px,
            rgb(255 255 255 / 50%) 0px 0px 0px 0.5px inset;
          // background:linear-gradient(#fff, #fff) padding-box,  linear-gradient(145deg, #e81cff, #40c9ff) border-box;

          img {
            width: 90% !important;
            height: 91% !important;
            border-radius: 50%;
            // clip-path: polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%);
          }
        }

        & > div:nth-of-type(2) {
          .accTitle {
            color: #fff;
            font-size: 32px;
            font-weight: 600;
            font-family: 'Times New Roman', Times, serif;
            line-height: 40px;
          }

          .email {
            letter-spacing: 0px;
            margin-top: 10px;
            color: #fff;
            font-weight: 500;
            font-size: 25px;
          }
        }
      }

      .money {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 20px;
        margin-top: 50px;

        & > div {
          display: flex;
          align-items: center;
          flex-direction: column;
          justify-content: center;

          .value {
            color: #fff;
            font-weight: 600;
            line-height: 40px;
          }

          .key {
            color: #fff;
            font-weight: 500px;
            line-height: 40px;
          }
        }
      }
    }

    .userBox {
      position: relative;
      top: -100px;
      height: auto;
      background-color: #fff;
      border-radius: 80px 80px 0 0;
      padding: 50px 60px;

      // min-height: 300px;
      .title {
        font-size: 40px;
        color: #000;
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

          & > div:nth-of-type(2) {
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
        width: 70%;
        left: 50%;
        transform: translateX(-50%);
        background: #4c5093;
        border-radius: 50px;
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
        height: 100px;

        .outBnt {
          width: 60px;
          height: 60px;
          border-radius: 18px;
          background-color: #ffffff;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-right: 20px;
        }
      }

      .logOutBtn:active {
        transform: translate(5px, 5px);
      }
    }
  }
</style>
<style lang="scss">
  .custom-action_sheet {
    display: flex;
    flex-direction: column;

    & > div:not(:last-child) {
      padding: 10px 20px;
      width: 100%;
      height: 90px;
      line-height: 90px;
      display: grid;
      grid-template-columns: 80px auto;
      align-items: center;
    }

    & > div:last-child {
      height: 100px;
      background-color: #f7f7f7;
      font-size: 32px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 600;
    }
  }
</style>

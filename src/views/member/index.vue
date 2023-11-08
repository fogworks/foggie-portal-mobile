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
      <img src="@/assets/user.svg" alt="" srcset="" />
      <div>{{ dmcAccount }}</div>
      <div>{{ email }}</div>

      <div v-if="promo_code">Amb Invitation Code: {{ promo_code }}</div>
    </div>

    <nut-row class="buttonContent">
      <!-- <nut-col :span="6" @click="gotoDetail('/withdraw')">
        <div class="customBtn">
          <Retweet color="#505056" />
        </div>
        <div>Payment Security</div>
      </nut-col> -->

      <nut-col :span="6" @click="gotoDetail('/personalInfo')">
        <div class="customBtn">
          <My2 color="#505056" />
        </div>
        <div>Profile</div>
      </nut-col>
      <nut-col :span="6" @click="visible = true">
        <div class="customBtn">
          <!-- <Location color="#505056" /> -->
          <Link color="#505056" />
        </div>
        <div>Links</div>
      </nut-col>
      <nut-col :span="6" @click="contactUs">
        <div class="customBtn">
          <Service color="#505056" />
        </div>
        <div>Contact Us</div>
      </nut-col>
      <nut-col :span="6" @click="goToPrivacy">
        <div class="customBtn">
          <!-- <Link color="#505056" /> -->
          <img src="@/assets/logo-dog-black.svg" style="width: 30px; height: 30px; display: inline-block" />
        </div>
        <div>About 
          <div>Fog Works</div>
        </div>
      </nut-col>
    </nut-row>

    <!-- <nut-row class="buttonContent">
      <nut-col :span="12">
        <div class="customBtn" @click="visible = true">
          <Location color="#505056" />
        </div>
        <div>Links</div>
      </nut-col>
      <nut-col :span="12">
        <div class="customBtn" @click="contactUs">
          <Service color="#505056" />
        </div>
        <div>Contact Us</div>
      </nut-col>
    </nut-row> -->

    <div class="logOutBtn" @click="logout">
      <span style="margin-left: 45px">Log out</span>
      <div class="outBnt">
        <ArrowRight2 color="#5771F9" />
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
            <div>Fogworks</div>
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
  import { useRouter } from 'vue-router';
  // import { Dongdong } from '@nutui/icons-vue';
  import { user } from '@/api';
  import { Category, MoreX, Retweet, My2, Service, Location, Link, ArrowRight2, People, Shop } from '@nutui/icons-vue';
  import { showDialog } from '@nutui/nutui';
  import { showToast } from '@nutui/nutui';

  import '@nutui/nutui/dist/packages/dialog/style';
  import '@nutui/nutui/dist/packages/toast/style';
  import { createVNode } from 'vue';
  const userStore = useUserStore();

  const email = ref<string>('');
  const dmcAccount = ref<string>('');

  const promo_code = ref<string>('');
  const router = useRouter();
  const gotoDetail = (path): void => {
    router.push(path);
  };

  const visible = ref<boolean>(false);
  const adminEmail = ref<string>('aaa123@fogworks.com');
  const goToPrivacy = () => {
    window.open('https://fogworks.io/');
  };
  const logout = (): void => {
    showDialog({
      title: 'Logout',
      content: createVNode('span', { style: {} }, 'Are you sure you want to Log out?'),
      cancelText: 'Cancel',
      okText: 'Yes',
      onCancel: () => {
        // console.log('取消');
      },
      onOk: () => {
        userStore.logout();
        userStore.setCloudCodeIsBind(false);

        // localStorage.removeItem('refresh_token');
        router.push('/login');
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
          { style: { color: '#d1cece', fontSize: '12px' } },
          'We sincerely welcome you to contact us for more information!',
        ),
        createVNode('div', { style: { color: '#606060', marginTop: '14px', fontSize: '16px' } }, 'https://discord.com/channels/@me'),
      ]),
      noCancelBtn: true,
      okText: 'Copy',
      onOk: () => {
        if (!navigator.clipboard) {
          fallbackCopyTextToClipboard('https://discord.com/channels/@me');
          return;
        }
        navigator.clipboard.writeText('https://discord.com/channels/@me').then(
          function () {
            showToast.success('Copying  successful!');
          },
          function () {
            showToast.fail('Copying  unsuccessful!');
          },
        );
      },
    });
  };

  function fallbackCopyTextToClipboard(text) {
    // 1.Create a selectable element
    let textArea = document.createElement('textarea');
    textArea.value = text;

    // 2.Use positioning to prevent page scrolling
    textArea.style.top = '0';
    textArea.style.left = '0';
    textArea.style.position = 'fixed';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      let successful = document.execCommand('copy');
      let msg = successful ? 'successful' : 'unsuccessful';
      showToast.success(msg);
    } catch (err) {
      showToast.fail('unsuccessful');
    }
    // 3.Remove element
    document.body.removeChild(textArea);
  }

  function choose(type: string) {
    console.log(type);
    if (type === 'dmc') {
      window.open('https://dmctech.io/');
    } else if (type === 'ipfs') {
      window.open('https://ipfs.tech/');
    } else if (type === 'foggie') {
      window.open('https://foggie.fogworks.io/#/');
    } else if (type === 'pool') {
      window.open('http://154.31.41.124:8086/');
    }
    visible.value = false;
  }

  onMounted(() => {
    user()
      .then((res) => {
        if (res && res.data && res.data.email) {
          console.log(res);
          promo_code.value = res.data.amb_promo_code;
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
<style lang="scss" scoped>
  ::v-deep {
    .nut-popover-menu-item {
      min-width: 400px;
    }
  }

  .userInfo {
    padding: 20px 25px;
    background-color: #ffffff;
    height: calc(100vh - 100px);
    box-sizing: border-box;
    // height: 100vh;

    .infoList {
      display: flex;
      justify-content: space-between;
      visibility: hidden;

      & > div {
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
      background: #4c5093;
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

      & > div {
        font-family: Alibaba PuHuiTi 2;
        font-size: 30px;
        font-weight: 250;
        line-height: 25px;
        text-align: center;
        letter-spacing: 0px;
        color: #ffff;
        margin-top: 20px;
      }

      & > div:last-child {
        font-family: Inter;
        font-size: 24 px;
        font-weight: 600;
        line-height: 32px;
        text-align: center;
        letter-spacing: -0.45px;
        margin-top: 10px;
        color: #fff;
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
</style>

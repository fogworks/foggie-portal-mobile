<template>
  <div class="userInfo">
    <div class="user_bg_box">
      <div class="userHeader">
        <div class="user_header_box">
          <div style="position: relative">
            <img :src="userAvatar ? userAvatar : require('@/assets/user.svg')" alt="" srcset="" @click="clickInput" />
            <input type="file" name="" accept="image/*," ref="uploadRef" @change="uploadFile" id="" style="display: none" />
            <div class="uploadIcon">
              <Photograph color="#90B3EF" width="15px" height="15px"></Photograph>
            </div>
          </div>

          <div class="user_header_box_content">
            <div class="accTitle">{{ dmcAccount }}</div>
            <div class="email">Email: {{ email }}</div>
            <!-- <div class="email balance"><span>Balance: </span>{{ money.Balance.integerPart }}.{{ money.Balance.decimalPart }} DMC</div> -->
            <!-- <div class="email" v-if="promo_code">promoCode: {{ promo_code }}</div> -->
            <div class="email" v-if="user_code">UserCode: {{ user_code }} <IconCopy @click="copyCode(user_code)"></IconCopy></div>
            <div class="email" v-if="user_code">(Use this string to login dapp directly)</div>
          </div>
        </div>
        <div class="money">
          <!-- <div>
          <div class="key">Balance</div>
          <div class="value">
            <span style="font-size: 18px">{{ money.Balance.integerPart }}</span>
            <span style="font-size: 12px">.{{ money.Balance.decimalPart }}</span>
          </div>
        </div> -->
          <!-- <div>
          <div class="key">Recharge</div>
          <div class="value">
            <span style="font-size: 18px">{{ money.Recharge.integerPart }}</span>
            <span style="font-size: 12px">.{{ money.Recharge.decimalPart }}</span>
          </div>
        </div> -->
          <div>
            <div class="key">Reward</div>
            <div class="value" v-if="cloudCodeIsBind" @click="gotoDetail('/assetsInfo')">
              <span style="font-size: 18px">{{ money.income.integerPart }}</span>
              <span style="font-size: 12px">.{{ money.income.decimalPart }}</span>
            </div>
          </div>

          <div>
            <div class="key">Withdrawn</div>
            <div class="value" v-if="cloudCodeIsBind" @click="showWithdraw">
              <span style="font-size: 18px">{{ money.withdraw.integerPart }}</span>
              <span style="font-size: 12px">.{{ money.withdraw.decimalPart }}</span>
            </div>
          </div>
        </div>
        <div class="scanQR" @click="requestCameraPermission">
          <Scan2 color="#fff" width="25px" height="25px"></Scan2>
        </div>
        <!-- <div class="bottom_btn">
        <div class="bottom_btn_item">
          <img src="@/assets/shop.svg" alt="" />
          <div class="bottom_btn_itemText"> Buy</div>
        </div>
        <div class="bottom_btn_item" @click="toRecharge">
          <img src="@/assets/Recharge.png" alt="" />
          <div class="bottom_btn_itemText"> Recharge</div>
        </div>
        <div class="bottom_btn_item" @click="showWithdraw">
          <img src="@/assets/Withdraw.png" alt="" />
          <div class="bottom_btn_itemText"> Withdraw</div>
        </div>
      </div> -->
      </div>
      <!-- <div class="my_assets_card"> </div> -->
      <div class="userBox">
        <!-- <div class="withdraw-btn" direction="horizontal" align="center">
        <div class="action_item" @click="toRecharge">
          <img src="@/assets/Recharge.png" alt="" />

          Recharge
        </div>
        <div class="action_item" @click="showWithdraw">
          <img src="@/assets/Withdraw.png" alt="" />

          Withdraw
        </div>
      </div> -->

        <nut-row class="buttonContent" :class="[showSettings ? 'showSettings' : 'hideSettings']">
          <!-- <nut-col :span="6" @click="gotoDetail('/personalInfo')">
          <div class="customBtn">
            <img src="@/assets/newIcon/userInfo.png" style="width: 45px; height: 45px; display: inline-block" />
          </div>
          <div>Profile</div>
        </nut-col> -->
          <nut-col :span="6" @click="changeTab('back')">
            <div class="customBtn backbtn">
              <img src="@/assets/maxio/back.svg" style="width: 45px; height: 45px; display: inline-block" />
            </div>
            <div>Back</div>
          </nut-col>
          <nut-col :span="6" @click="visible = true">
            <div class="customBtn">
              <img src="@/assets/newIcon/links.png" style="width: 45px; height: 45px; display: inline-block" />
            </div>
            <div>Links</div>
          </nut-col>
          <nut-col :span="6" @click="contactUs">
            <div class="customBtn">
              <img src="@/assets/newIcon/ContactUs.png" style="width: 45px; height: 45px; display: inline-block" />
            </div>
            <div>Contact Us</div>
          </nut-col>
          <nut-col :span="6" @click="goToPrivacy">
            <div class="customBtn">
              <img src="@/assets/newIcon/AboutUs.png" style="width: 45px; height: 45px; display: inline-block" />
            </div>
            <div>About </div>
          </nut-col>
        </nut-row>

        <div class="router_list" v-if="!showSettings">
          <setting @click="gotoDetail('/assetsInfo')">
            <img src="@/assets/maxio/reward.svg" style="width: 45px; height: 45px; display: inline-block" />
            <div class="title">Assets</div>
          </setting>
          <setting @click="changeTab('setting')">
            <img src="@/assets/maxio/cs.svg" style="width: 45px; height: 45px; display: inline-block" />
            <div class="title">About</div>
          </setting>
          <setting @click="router.push('/shop')">
            <img src="@/assets/maxio/shop.svg" style="width: 45px; height: 45px; display: inline-block" />
            <div class="title">Shop</div>
          </setting>
          <setting @click="router.push('/nft')">
            <img src="@/assets/maxio/nft.svg" style="width: 45px; height: 45px; display: inline-block" />
            <div class="title">NFT</div>
          </setting>
        </div>

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
            <!-- <div @click="choose('pool')">
            <img src="@/assets/user.svg" style="width: 30px; height: 30px; margin-right: 10px; display: inline-block" />
            <div>Premium Agent</div>
          </div> -->
            <!-- <div @click="choose('client')">
          <Shop></Shop>
          <div>Cloud Mining Pool Client</div>
        </div> -->
            <div @click="visible = false"> Cancel </div>
          </div>
        </nut-action-sheet>
      </Teleport>
    </div>
  </div>
</template>

<script lang="ts" setup name="MemberPage">
  import { useUserStore } from '@/store/modules/user';
  import { ArrowRight2, Photograph, Scan2 } from '@nutui/icons-vue';
  import { showDialog } from '@nutui/nutui';
  import '@nutui/nutui/dist/packages/dialog/style';
  import { showToast } from '@nutui/nutui';
  import '@nutui/nutui/dist/packages/toast/style';
  import { debounce } from 'lodash';
  import loadingImg from '@/components/loadingImg/index.vue';
  import IconCopy from '~icons/home/copy.svg';
  import { createVNode, inject } from 'vue';
  import { useRouter } from 'vue-router';
  import { user, setUserAvatarApi, search_cloud } from '@/api/index';
  import { get_user_dmc, check_bind_otp, setIsVerifiedAPI, getIsVerifiedAPI } from '@/api/amb';
  import { onMounted, reactive, ref } from 'vue';
  import { formatNumber } from '@/utils/util';
  import { ambAddress } from '@/setting';
  import setting from './setting.vue';
  const showSettings = ref(false);

  const uploadRef = ref();
  const userAvatar = computed(() => userStore.getUserInfo?.image_path);

  const userStore = useUserStore();
  const router = useRouter();
  const email = computed(() => userStore.getUserInfo?.email);
  const dmcAccount = computed(() => userStore.getUserInfo?.dmc);
  const promo_code = computed(() => userStore.getUserInfo?.amb_promo_code);
  const user_code = computed(() => userStore.getUserInfo?.user_code);
  const cloudCodeIsBind = computed(() => userStore.getCloudCodeIsBind);

  const visible = ref<boolean>(false);

  const bindAmbCode = inject('bindAmbCode');
  const openBindDMCDiaolg = inject('openBindDMCDiaolg');
  const changeTab = (type) => {
    if (type === 'setting') {
      showSettings.value = true;
    }
    if (type === 'back') {
      showSettings.value = false;
    }
  };
  watch(
    () => cloudCodeIsBind.value,
    (newValue) => {
      if (newValue) {
        loadUserDmc();
      }
    },
    { immediate: true },
  );

  /* 获取用户身份信息 */
  function loadUserInfo() {
    user()
      .then((res) => {
        if (res && res.data && res.data.email) {
          userStore.setInfo(res.data);
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
    income: <object>{ integerPart: 0, decimalPart: 0 },
  });
  function copyCode(text) {
    var input = document.createElement('input');
    input.value = text;
    document.body.appendChild(input);
    input.select();
    document.execCommand('Copy');
    document.body.removeChild(input);
    showToast.success('Copy succeeded,Use this code to quickly associate wallet accounts in the Dapp');
  }
  function loadUserDmc() {
    get_user_dmc()
      .then((res) => {
        if (res.code == 200) {
          const data = res.result?.data;
          money.Balance = formatNumber(data?.balance);
          money.Recharge = formatNumber(data?.Recharge);
          money.withdraw = formatNumber(data?.withdraw);
          money.income = formatNumber(data?.income);
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
      content: createVNode('span', { style: {} }, 'Are you sure you want to logout?'),
      cancelText: 'Cancel',
      okText: 'Yes',
      onCancel: () => {
        // console.log('取消');
      },
      onOk: () => {
        userStore.logout();
        userStore.setCloudCodeIsBind(false);
        userStore.setcurStepIndex(1);
        // localStorage.removeItem('refresh_token');
        // router.push('/guide');
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
          { style: { color: '#535353', fontSize: '16px' } },
          'We sincerely welcome you to contact us for more information!',
        ),
      ]),
      noCancelBtn: true,
      okText: 'Contact',
      onOk: () => {
        window.open('https://discord.com/channels/1046683342025789541/1070536042677030973/1070584672066752573');
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
      window.open(ambAddress);
    }
    visible.value = false;
  }

  // 提现
  const showWithdraw = () => {
    if (!dmcAccount.value) {
      openBindDMCDiaolg();

      return false;
    } else if (!cloudCodeIsBind.value) {
      bindAmbCode();
    } else {
      router.push({ name: 'Withdraw' });
    }
  };

  //充值
  const toRecharge = () => {
    if (!promo_code.value || !cloudCodeIsBind.value) {
      bindAmbCode();
      return false;
    } else {
      router.push({ name: 'Recharge' });
    }
  };

  /* 上传 SSSSSSSSSSSSSSSSSSSSS */
  //#region
  function clickInput() {
    uploadRef.value.click();
  }

  function uploadFile(event) {
    const file = event.target.files[0];

    const imageRegex = /\.(jpg|jpeg|png|gif|bmp)$/i;
    const isValidImage = imageRegex.test(file.name);
    if (!isValidImage) {
      showToast.text('Please select image to upload');
      return;
    }

    const uploadForm = new FormData();
    uploadForm.append('file', file);

    showToast.loading('Loading', {
      cover: true,
      coverColor: 'rgba(0,0,0,0.45)',
      customClass: 'app_loading',
      icon: loadingImg,
      loadingRotate: false,
      duration: 0,
      id: 'loading',
    });

    setUserAvatarApi(uploadForm)
      .then((res) => {
        if (res.code == 200) {
          showToast.success(res.data);
          loadUserInfo();
        }
      })
      .finally(() => {
        showToast.hide('loading');
      });
  }
  //#endregion
  /* 上传 EEEEEEEEEEEEEEEEEEEEEEEEEEEEEE */

  /* 调用扫码功能 */
  const requestCameraPermission = debounce(() => {
    // const postData = {
    //   sort_type: 'created_at',
    //   ascending: false,
    //   is_domain: true,
    //   electronic_type: '0',
    // };
    // // await loadBucket([0, 1, 2, 3, 6], '', '', '', postData);
    // search_cloud({
    //   ps: 2,
    //   pn: 1,
    //   order_state: [0, 1, 2, 3, 6],
    //   start_time: '',
    //   end_time: '',
    //   buy_result: 'success',
    //   ...postData,
    // }).then((res) => {
    //   let total = res.result?.total || 0;
    //   if (total == 1) {
    //     let item = res.result.data[0];
    //     router.push({
    //       name: 'listDetails',
    //       query: {
    //         id: item.order_id,
    //         uuid: item.uuid,
    //         amb_uuid: item.amb_uuid,
    //         income: item.income,
    //         mintType: '0',
    //       },
    //     });

    //   } else {
    //     router.push({
    //       name: 'BucketList',
    //     });
    //   }
    // });

    router.push({ path: '/scanQRCodes' });
  }, 300);

  onMounted(async () => {
    loadUserInfo();
  });
</script>

<style lang="scss" scoped>
  .userInfo {
    // margin-left: -4vw;
    // margin-right: -4vw;
    min-height: 100vh;
    background-color: #fff;
    height: 100%;
    width: 100%;
    background: url('@/assets/maxio/bg3.jpg');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center center;
    // display: flex;
    // align-items: center;
    @keyframes ani {
      0% {
        box-shadow: 0 0 0px #ff8329;
      }
      25% {
        box-shadow: 0 0 10px #ff8329;
      }
      50% {
        box-shadow: 0 0 20px #ff8329;
      }
      75% {
        box-shadow: 0 0 100px #ff8329;
      }
      100% {
        box-shadow: 0 0 0px #ff8329;
      }
    }
    .userHeader {
      position: relative;
      padding: 20px 60px;
      margin-bottom: 60px;
      //   background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      //   padding-bottom: 120px;
      //   background-image: linear-gradient(135deg, #667eea5c 0%, #6930a3e8 100%);
      //   animation: ani 2s linear infinite;

      .scanQR {
        display: none;
        position: absolute;
        right: 30px;
        top: 30px;
      }

      .title {
        color: azure;
        font-size: 40px;
        text-align: center;
      }

      .user_header_box {
        $content-width: 150px;
        $w: $content-width * 0.9;
        display: grid;
        grid-template-columns: $content-width auto;
        column-gap: 30px;
        // height: 200px;
        padding-top: 50px;
        align-items: center;
        // display: flex;
        // flex-direction: column;

        img {
          margin-top: 6px;
          width: $w !important;
          height: $w !important;
          border-radius: 50%;
          border: 7px solid #fff;
          box-shadow:
            rgb(24 32 79 / 25%) 0px 40px 80px,
            rgb(255 255 255 / 50%) 0px 0px 0px 0.5px inset;
        }

        .uploadIcon {
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: grid;
          place-items: center;
          background: #f4f5f9;
          position: absolute;
          bottom: 15px;
          right: 3px;
        }

        & > .user_header_box_content {
          //   text-align: center;
          .accTitle {
            color: #fff;
            font-size: 40px;
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
            svg {
              vertical-align: middle;
            }
          }

          .balance {
            font-weight: bold;
            font-size: 30px;
            color: #f2b70a;

            // margin-top: 10px;
            span {
              color: #fff;
            }
          }
        }
      }

      .money {
        // display: grid;
        // grid-template-columns: 1fr 1fr 1fr;
        // gap: 20px;
        padding-top: 30px;
        margin-top: 20px;
        display: flex;
        justify-content: space-around;
        // border-bottom: 1px dashed #fff;

        & > div {
          display: flex;
          align-items: center;
          flex-direction: column;
          justify-content: center;
          border-right: 1px solid #fff;
          width: 50%;

          &:last-child {
            border-right: none;
          }

          .value {
            color: #fff;
            font-weight: 600;
            line-height: 40px;
            text-decoration: underline;
            cursor: pointer;
          }

          .key {
            color: #fff;
            font-weight: 500px;
            line-height: 40px;
            margin-bottom: 10px;
          }
        }
      }

      .bottom_btn {
        margin-top: 20px;
        display: flex;
        width: 100%;
        justify-content: space-around;

        .bottom_btn_item {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          cursor: pointer;

          &:hover {
            transform: scale(1.1);
          }

          img {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            background: #fff;
            box-shadow:
              rgba(0, 0, 0, 0.25) 0px 54px 55px,
              rgba(0, 0, 0, 0.12) 0px -12px 30px,
              rgba(0, 0, 0, 0.12) 0px 4px 6px,
              rgba(0, 0, 0, 0.17) 0px 12px 13px,
              rgba(0, 0, 0, 0.09) 0px -3px 5px;
          }

          .bottom_btn_itemText {
            color: #fff;
            font-weight: bold;
            font-size: 24px;
            margin-top: 10px;
          }
        }
      }
    }

    .userBox {
      position: relative;
      top: -100px;
      //   height: auto;
      //   background-color: #fff;
      border-radius: 60px 60px 0 0;
      padding: 50px 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 400px;

      .withdraw-btn {
        position: relative;
        overflow: hidden;
        display: flex;
        justify-content: space-around;
        transform: translateY(-80px);
        width: 95%;
        margin: 0 auto;
        padding: 20px 0;
        border-radius: 16px;
        border: 4px solid transparent;
        background: #fff;
        // box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
        background:
          linear-gradient(#fff, #fff) padding-box,
          linear-gradient(145deg, #e81cff, #40c9ff) border-box;
        top: -50px;

        .action_item {
          z-index: 88;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          // color: #333333;
          color: #5758a0;
          font-size: 30px;
          font-weight: bold;

          img {
            display: block;
            width: 100px;
            height: auto;
            margin-bottom: 10px;
          }
        }
      }

      .withdraw-btn::before {
        content: '';
        position: absolute;
        width: 140%;
        background-image: linear-gradient(180deg, rgb(0, 183, 255), rgb(255, 48, 255));
        height: 80%;
        animation: rotBGimg 3s linear infinite;
        transition: all 0.2s linear;
      }

      @keyframes rotBGimg {
        from {
          transform: rotate(0deg);
        }

        to {
          transform: rotate(360deg);
        }
      }

      .withdraw-btn::after {
        content: '';
        position: absolute;
        background: #fff;
        inset: 3px;
        border-radius: 15px;
      }

      .title {
        font-size: 26px;
        color: #000;
        color: #fff;
        // display: grid;
        // grid-template-columns: auto 80px;
        font-style: italic;
        gap: 40px;
        align-items: center;
      }

      .buttonContent {
        transition: all 0.8s;
        .customBtn {
          width: 100px;
          height: 100px;
          background: #f4f5f9;
          background: #f4f5f978;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: transform 0.3s ease-in-out;
        }
        .backbtn {
          border: 4px solid #fff6;
          background: transparent;
          box-shadow:
            rgba(0, 0, 0, 0.4) 0px 2px 4px,
            rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
            rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
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
            white-space: nowrap;
            color: #fff;
            user-select: none;
            word-wrap: break-word !important;
            word-break: normal;
            text-align: center;
          }
        }
      }
      .showSettings {
        opacity: 1;
        width: 100%;
      }
      .hideSettings {
        opacity: 0;
        width: 0;
      }

      .logOutBtn {
        position: fixed;
        bottom: 160px;
        width: 70%;
        left: 50%;
        transform: translateX(-50%);
        // background: #4c5093;
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
        background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        background-image: linear-gradient(135deg, #ffffff26 0%, #ffffff52 100%);
        border: 1px solid #ffffff05;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

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
  .user_bg_box {
    box-sizing: border-box;
    margin: 0 20px;
    background: rgba(30, 31, 29, 0.15);
    // border: 1px solid rgba(211, 211, 211, 0.43);
    box-shadow: 0 0.266667vw 0.533333vw #00000040;
    border-radius: 18px;
    color: #fff;
    padding: 2.666667vw;
    // -webkit-backdrop-filter: blur(1px);
    // backdrop-filter: blur(1px);
    box-sizing: border-box;
    height: calc(100% - 100px);
  }
  .router_list {
    width: 100%;
    flex-wrap: wrap;
    display: flex;
    align-items: center;
    justify-content: start;
    justify-content: space-between;
    .e-card {
      margin: 20px;
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

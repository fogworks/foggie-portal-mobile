<template>
  <router-view />
</template>
<script setup lang="ts">
  import { user, bind_user_promo } from '@/api';
  import { onMounted } from 'vue';
  import { useUserStore } from '@/store/modules/user';
  import { showToast, showDialog } from '@nutui/nutui';
  import { useRouter, useRoute } from 'vue-router';
  import '@nutui/nutui/dist/packages/dialog/style';
  import '@nutui/nutui/dist/packages/toast/style';
  import '@nutui/nutui/dist/packages/notify/style';
  import { redirectUrl, dappUrl } from '@/setting.js';
  const userStore = useUserStore();
  const router = useRouter();
  const route = useRoute();
  const uuid = computed(() => userStore.getUserInfo?.uuid);
  const userInfo = computed(() => userStore.getUserInfo);

  let vh = window.innerHeight * 0.01;
  const isMobileDevice = computed(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // 此正则表达式涵盖了大多数使用的手机和平板设备
    return /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent.toLowerCase());
  });
  provide('isMobileDevice', isMobileDevice);
  const metaOpen = () => {
    if (isMobileDevice.value) {
      window.open(`https://metamask.app.link/dapp/${redirectUrl}`);
      // window.open('https://metamask.app.link/dapp/https://amb.u2i.net');
    } else {
      window.open('https://chromewebstore.google.com/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn');
    }
  };
  const OKXOpen = () => {
    if (isMobileDevice.value) {
      // const ua = navigator.userAgent;
      // const isOKApp = /OKApp/i.test(ua);
      const encodedDappUrl = encodeURIComponent(redirectUrl);
      const deepLink = 'okx://wallet/dapp/url?dappUrl=' + encodedDappUrl;
      const encodedUrl = 'https://www.okx.com/download?deeplink=' + encodeURIComponent(deepLink);

      window.open(encodedUrl);
      // window.open('https://metamask.app.link/dapp/https://amb.u2i.net');
    } else {
      window.open('https://chromewebstore.google.com/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn');
    }
  };
  const metaOpenDapp = () => {
    if (isMobileDevice.value) {
      // if (window.ethereum) {
      //   // window.open(`https://metamask.app.link/dapp/${redirectUrl}`);
      //   window.open(dappUrl);
      // } else {
      window.open(`https://metamask.app.link/dapp/${dappUrl}`);
      // }
    } else {
      window.open(dappUrl);
    }
  };

  provide('OKXOpen', OKXOpen);
  provide('metaOpen', metaOpen);
  provide('metaOpenDapp', metaOpenDapp);

  onMounted(async () => {
    if (import.meta.env.VITE_BUILD_TYPE == 'ANDROID') {
      let script = document.createElement('script');
      script.src = 'cordova.js';
      document.body.appendChild(script);
    }

    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });
</script>

<style lang="scss">
  .nut-animate,
  .nut-animate__container {
    width: 100%;
    height: 100%;
  }
  .cloud_pin {
    position: absolute;
    left: 50% !important;
    top: 56% !important;
    width: 50% !important;
    height: auto !important;
    border-radius: 50% !important;
    transform: translate(-50%, -50%);
  }
  // body {
  //   padding-bottom: 90px !important;
  // }
  #app {
    // height: 100vh;
    color: #2c3e50;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: #f5f7fb;
    -webkit-overflow-scrolling: touch;
    height: calc(var(--vh, 1vh) * 100);
    overflow: auto;
    background: #000;
    // height: 100%;
  }

  .z-indexed.svelte-g9s19b {
    display: none !important;
    --account-center-z-index: -99;
  }
  ::-webkit-scrollbar {
    width: 0px;
    height: 0px;
  }

  :root {
    --nut-toast-font-color: #000;
    --nut-toast-inner-bg-color: #fff;
    --nut-toast-cover-bg-color: rgba(0, 0, 0, 0.5);
    --account-center-z-index: -99;
  }

  .nut-toast-loading {
    --nut-toast-font-color: #000;
    --nut-toast-inner-bg-color: #fff;
    --nut-toast-cover-bg-color: rgba(0, 0, 0, 0.5);

    .nut-toast-icon-wrapper {
      --nut-toast-font-color: #000;

      .nut-icon-loading {
        color: #000 !important;
      }
    }
  }

  .nut-toast-inner {
    box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.6);

    .nut-toast-text {
      word-break: break-word;
    }
  }

  .nut-icon-success {
    color: #0bde00 !important;
  }

  .nut-icon-failure {
    color: #d81414 !important;
  }

  .app_loading {
    background: #fff;
    .nut-toast-inner {
      box-shadow: none;
      color: #fff;
    }
    .nut-toast-inner {
      background: rgba(181, 186, 202, 0.38);
      background: transparent;
    }
  }

  .dialog_class,
  .dialog_class_delete {
    font-size: 30px;

    .nut-dialog__header {
      height: unset;
      font-size: 35px;
    }

    .nut-dialog__content {
      font-size: 30px;
      word-break: break-word;

      .withdraw_img {
        margin-bottom: 10px;
      }
    }
  }
  .dialog_class_delete {
    .nut-dialog__footer-ok {
      background: #e71313;
    }
  }

  .nut-popup {
    z-index: 20000 !important;
    background: #000 !important;
    color: #fff !important;
    border: 1px solid #38d6f0 !important;
    .nut-dialog:not(.CustomName) {
      //   background-color: #2d2e41 !important;
      box-shadow: inset 0 0 0 0.5px hsl(0deg 0% 100% / 30%);

      .nut-dialog__header,
      .nut-dialog__content {
        color: #f5f7fb;
        // color: #000;
        color: #fff !important;
      }

      .nut-button--primary {
        border-radius: 15px;
        border: 0px;
        font-size: 32px;
        font-weight: 600;
        background: transparent;
        // background: #ffc139 !important;
        border: 1px solid #f8f8f8 !important;
        color: #fff !important;
      }

      .nut-dialog__footer-ok {
        // background-image: linear-gradient(135deg, #5b6954 0%, #9cb77d 100%);
        margin-left: 10px !important;
        background-image: linear-gradient(295deg, #aeff00 0%, #432f2b 100%) !important;
        background: linear-gradient(329deg, #0c87df 0%, #20bbe5 25%, rgb(12, 134, 240) 83%, #181b24 100%) !important;
      }

      .nut-dialog__footer-cancel {
        // color: rgb(248, 248, 248);
        // background-image: linear-gradient(135deg, #712b42 15%, #a94858 100%);
        margin-right: 10px !important;
      }

      .nut-dialog__footer {
        display: flex;

        .nut-button {
          flex: 1 0 50%;
          width: 50%;
          padding: 30px !important;
          margin: 0px;
        }

        .nut-button--small {
          height: 70px !important;
          max-width: 50%;
        }
      }
    }
    .BuyOrderClass {
      .nut-dialog__content {
        white-space: inherit;
      }
      .nut-dialog__content {
        .buyOrderItem {
          word-break: break-word;
          // color: #d1cece;
          color: #000;
          text-align: left;
          border-bottom: 2px solid #f5f7fb;
          padding: 10px 10px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
      }
      .nut-dialog__footer .nut-dialog__footer-cancel {
        background-image: linear-gradient(135deg, #5b6954 0%, #9cb77d 100%);
        background-image: linear-gradient(135deg, #82797c 15%, #7e7a7a 100%);
        margin-left: 10px !important;
        color: #fff;
      }
    }
    .CustomName {
      //   background-color: #2d2e41 !important;
      .nut-dialog__header {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        height: 60px;
        font-weight: 800;
        color: #000;
        padding-bottom: 20px;
        border-bottom: 0.5px solid #e2ecff;
        // color: #f5f7fb;
        span.icon {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 60px;
          height: 60px;
          background: #ebebeb;
          border-radius: 20px;

          svg {
            width: 40px;
            height: 40px;
            margin: 0 auto;
            vertical-align: middle;
          }
        }
      }

      .nut-input {
        // background-color: rgb(128 128 128 / 39%);
        padding-left: 10px !important ;
      }
      .nut-input .input-text,
      .nut-input__text--readonly {
        // color: #ebebeb !important;
        // color: #999 !important;
      }

      .bucket_tip {
        padding-bottom: 10px;
        border-bottom: 0.5px solid #e2ecff;
        // color: #ebebeb;
      }

      .nut-input--border {
        border: 1px solid #a1b0cc;
        border-radius: 16px;
      }

      .nut-dialog__footer {
        .nut-button {
          border-radius: 15px;
          border: 0px;
          font-size: 32px;
          font-weight: 600;
        }

        .nut-button:first-child {
          color: rgb(248, 248, 248);
          background-image: linear-gradient(135deg, #712b42 15%, #a94858 100%);
          background-image: linear-gradient(135deg, #82797c 15%, #7e7a7a 100%);
        }

        .nut-button:last-child {
          background-image: linear-gradient(135deg, #5b6954 0%, #9cb77d 100%);
          background-image: linear-gradient(135deg, #4c5093 0%, #5758a0 100%);
          margin-left: 10px !important;
        }

        .nut-button--disabled {
          //   background-image: linear-gradient(135deg, #5b6954 0%, #1e4735 100%) !important;
        }
      }
    }
  }
  .notify_primary {
    height: unset;
    border-radius: 16px;
    padding: 20px;
    // width: 600px;
    text-align: center;
  }
  .grecaptcha-badge {
    display: none !important;
  }
  .http_share_text {
    text-align: center;
    font-size: 30px;
    word-break: break-word;
    line-height: normal;
  }
  @media screen and (min-width: 500px) {
    #app {
      height: unset;
    }
    .nut-infinite-loading {
      .nut-infinite__bottom {
        height: 50px !important;
        line-height: 50px !important;
        .nut-infinite__bottom-tips {
          line-height: 50px !important;
          font-size: 1.2rem !important;
        }
      }
    }
    .notify_primary {
      font-size: 1.2rem;
      border-radius: 16px;
      padding: 20px;
      // width: 600px;
      text-align: center;
    }
    .nut-icon-close {
      height: 20px !important;
    }
    .nut-popup__close-icon {
    }
    .nut-popup__close-icon--top-right {
      width: 30px !important;
      height: 30px !important;
      line-height: 30px !important;
      --nut-popup-close-icon-margin: 25px;
    }
    .nut-toast-inner {
      --nut-toast-inner-padding: 40px;
      box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.6);
      font-size: 1rem;

      .nut-toast-text {
        word-break: break-word;
        font-size: 1.5rem;
      }
    }

    .nut-icon-success {
      color: #0bde00 !important;
    }

    .nut-icon-failure {
      color: #d81414 !important;
    }
    .dialog_class,
    .dialog_class_delete {
      font-size: 30px;

      .nut-dialog__header {
        height: unset;
        font-size: 35px;
      }

      .nut-dialog__content {
        font-size: 30px;
        word-break: break-word;

        .withdraw_img {
          margin-bottom: 10px;
        }
      }
    }
    .dialog_class_delete {
      .nut-dialog__footer-ok {
        background: #e71313;
      }
    }

    .nut-popup {
      padding: 0 20px;
      box-sizing: border-box;
      .nut-dialog:not(.CustomName) {
        --nut-dialog-width: 500px;
        padding: 20px;
        //   background-color: #2d2e41 !important;
        box-shadow: inset 0 0 0 0.5px hsl(0deg 0% 100% / 30%);

        .nut-dialog__header,
        .nut-dialog__content {
          color: #f5f7fb;
          color: #000;
          font-size: 2rem;
        }

        .nut-button--primary {
          border-radius: 15px;
          border: 0px;
          font-size: 32px;
          font-weight: 600;
        }

        .nut-dialog__footer-ok {
          // background-image: linear-gradient(135deg, #5b6954 0%, #9cb77d 100%);
          margin-left: 10px !important;
        }

        .nut-dialog__footer-cancel {
          // color: rgb(248, 248, 248);
          // background-image: linear-gradient(135deg, #712b42 15%, #a94858 100%);
          margin-right: 10px !important;
        }

        .nut-dialog__footer {
          display: flex;

          .nut-button {
            flex: 1 0 50%;
            width: 50%;
            padding: 30px !important;
            margin: 0px;
          }

          .nut-button--small {
            height: 60px !important;
            max-width: 200px;
          }
        }
      }
      .BuyOrderClass {
        .nut-dialog__content {
          white-space: inherit;
        }
        .nut-dialog__content {
          .buyOrderItem {
            word-break: break-word;
            // color: #d1cece;
            color: #000;
            text-align: left;
            border-bottom: 2px solid #f5f7fb;
            padding: 10px 10px;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
        }
        .nut-dialog__footer .nut-dialog__footer-cancel {
          background-image: linear-gradient(135deg, #5b6954 0%, #9cb77d 100%);
          background-image: linear-gradient(135deg, #82797c 15%, #7e7a7a 100%);
          margin-left: 10px !important;
          color: #fff;
        }
      }
      .CustomName {
        //   background-color: #2d2e41 !important;
        .nut-dialog__header {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          height: 60px;
          font-weight: 800;
          color: #000;
          padding-bottom: 20px;
          border-bottom: 0.5px solid #e2ecff;
          // color: #f5f7fb;
          span.icon {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 60px;
            height: 60px;
            background: #ebebeb;
            border-radius: 20px;

            svg {
              width: 40px;
              height: 40px;
              margin: 0 auto;
              vertical-align: middle;
            }
          }
        }

        .nut-input {
          // background-color: rgb(128 128 128 / 39%);
          padding-left: 10px !important ;
        }
        .nut-input .input-text,
        .nut-input__text--readonly {
          // color: #ebebeb !important;
          // color: #999 !important;
        }

        .bucket_tip {
          padding-bottom: 10px;
          border-bottom: 0.5px solid #e2ecff;
          // color: #ebebeb;
        }

        .nut-input--border {
          border: 1px solid #a1b0cc;
          border-radius: 16px;
        }

        .nut-dialog__footer {
          .nut-button {
            border-radius: 15px;
            border: 0px;
            font-size: 32px;
            font-weight: 600;
          }

          .nut-button:first-child {
            color: rgb(248, 248, 248);
            background-image: linear-gradient(135deg, #712b42 15%, #a94858 100%);
            background-image: linear-gradient(135deg, #82797c 15%, #7e7a7a 100%);
          }

          .nut-button:last-child {
            background-image: linear-gradient(135deg, #5b6954 0%, #9cb77d 100%);
            background-image: linear-gradient(135deg, #4c5093 0%, #5758a0 100%);
            margin-left: 10px !important;
          }

          .nut-button--disabled {
            //   background-image: linear-gradient(135deg, #5b6954 0%, #1e4735 100%) !important;
          }
        }
      }
    }
    .nut-empty {
      --nut-empty-image-size: 20rem;
    }
    .notify_primary {
      height: unset;
      border-radius: 16px;
      padding: 20px;
      // width: 600px;
      text-align: center;
    }
    .grecaptcha-badge {
      display: none !important;
    }
    .http_share_text {
      text-align: center;
      font-size: 30px;
      word-break: break-word;
      line-height: normal;
    }
  }
  .creat-name-error {
    z-index: 20001 !important;
  }
</style>

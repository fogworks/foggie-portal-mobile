<template>
  <router-view />
</template>
<script setup lang="ts">
import { user, check_promo, bind_user_promo } from '@/api';

import { bind_promo, check_promo as check_amb_promo } from '@/api/amb';
import { onMounted } from 'vue';
import { useUserStore } from '@/store/modules/user';
import { showToast, showDialog } from '@nutui/nutui';
import { useRouter, useRoute } from 'vue-router';
import '@nutui/nutui/dist/packages/dialog/style';
import '@nutui/nutui/dist/packages/toast/style';

const userStore = useUserStore();
const router = useRouter();
const route = useRoute();
const uuid = computed(() => userStore.getUserInfo?.uuid);
const userInfo = computed(() => userStore.getUserInfo);

let vh = window.innerHeight * 0.01;

onMounted(async () => {
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});
</script>

<style lang="scss">
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
}

::-webkit-scrollbar {
  width: 0px;
  height: 0px;
}

:root {
  --nut-toast-font-color: #000;
  --nut-toast-inner-bg-color: #fff;
  --nut-toast-cover-bg-color: rgba(0, 0, 0, 0.5);
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
  }
}

.dialog_class {
  font-size: 30px;

  .nut-dialog__header {
    height: unset;
    font-size: 35px;
  }

  .nut-dialog__content {
    font-size: 30px;
    word-break: break-word;
  }
}

.nut-popup {
  .nut-dialog:not(.CustomName) {
    background-color: #2d2e41 !important;
    box-shadow: inset 0 0 0 0.5px hsl(0deg 0% 100% / 30%);

    .nut-dialog__header,
    .nut-dialog__content {
      color: #f5f7fb;
    }

    .nut-button--primary {
      border-radius: 15px;
      border: 0px;
      font-size: 32px;
      font-weight: 600;
    }

    .nut-dialog__footer-ok {
      background-image: linear-gradient(135deg, #5b6954 0%, #9cb77d 100%);
      margin-left: 10px !important;
    }

    .nut-dialog__footer-cancel {
      color: rgb(248, 248, 248);
      background-image: linear-gradient(135deg, #712b42 15%, #a94858 100%);
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

  .CustomName {
    background-color: #2d2e41 !important;

    .nut-dialog__header {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      height: 60px;
      font-weight: 800;
      color: #000;
      padding-bottom: 20px;
      border-bottom: 0.5px solid #e2ecff;
      color: #f5f7fb;
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
      background-color: rgb(128 128 128 / 39%);
 
    }
    .nut-input .input-text, .nut-input__text--readonly{
      color: #ebebeb !important;
    }

    .bucket_tip {
      padding-bottom: 10px;
      border-bottom: 0.5px solid #e2ecff;
      color: #ebebeb;
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
      }

      .nut-button:last-child {
        background-image: linear-gradient(135deg, #5b6954 0%, #9cb77d 100%);
        margin-left: 10px !important;
      }

      .nut-button--disabled {
        background-image: linear-gradient(135deg, #5b6954 0%, #1e4735 100%) !important;
      }
    }
  }
}

.grecaptcha-badge {
  display: none !important;
}</style>

<template>
  <div style="height: auto; padding-bottom: 50px">
    <div class="top_back_line">
      <div class="inside_blue">
        <div class="back_icons" @click="Back">
          <img src="@/assets/tg/shop_back.svg" />
          返回
        </div>
        <div class="balance_options"> 语言</div>
      </div>
    </div>
    <div style="padding: 4px 20px; font-size: 16px; font-weight: bold; margin-bottom: 1px" class="bottom_tips_lineTitle"> 界面语言</div>
    <div class="circle_box" :class="[isPageLan === 'en' ? 'active_lan' : '']" @click="changeLan('en')">
      <div class="fir_text">English</div>
      <div class="sen_text">English</div>
      <img src="@/assets/tg/lan_check.svg" v-if="isPageLan === 'en'" />
    </div>
    <div class="circle_box" :class="[isPageLan === 'zh' ? 'active_lan' : '']" @click="changeLan('zh')">
      <div class="fir_text">Chinese</div>
      <div class="sen_text">中文</div>
      <img src="@/assets/tg/lan_check.svg" v-if="isPageLan === 'zh'" />
    </div>
  </div>
</template>
<script setup lang="ts">
  import { ref, watch } from 'vue';
  import { useRouter } from 'vue-router';
  import { useUserStore } from '@/store/modules/user';
  import { useI18n } from 'vue-i18n';
  const { locale, t } = useI18n();
  const userStore = useUserStore();
  const router = useRouter();
  const currentLan = computed(() => userStore.getCurLanguage);
  const isPageLan = ref('');
  isPageLan.value = currentLan.value;
  const Back = () => {
    router.push('/home');
  };
  const changeLan = (type) => {
    userStore.setCurLanguage(type);
    locale.value = type;
  };
  watch(currentLan, async (newVal) => {
    isPageLan.value = newVal;
  });
</script>
<style scoped lang="scss">
  .top_back_line {
    position: relative;
    height: 120px;

    .inside_blue {
      z-index: 999;
      position: absolute;
      top: 0;
      width: 100%;
      height: 100px;
      background: #000;
      overflow: hidden;
      display: flex;
      align-items: center;
      color: #0ca2f8;
      .back_icons {
        margin-left: 20px;
        font-weight: bold;
      }
      .balance_options {
        display: flex;
        align-items: center;
        justify-content: center;
        width: calc(100% - 200px);
        color: #fff;
        font-weight: bolder;
        font-size: 34px;
      }

      .title {
        color: #fff;
        font-size: 1.5rem;
        text-align: center;
        margin-top: 40px;
        width: 100%;
      }

      .total_balance {
        color: #b9d4ff;
        font-size: 1.5rem;
        text-align: center;
        color: #fbcf87;
      }

      .total_balance_value {
        font-weight: 250;
        color: #fff;
        font-size: 1.75rem;
        text-align: center;
        margin-top: 0px;
      }
    }
  }
  .bottom_tips_lineTitle {
    color: #fff;
  }
  .circle_box {
    margin: 20px;
    border-radius: 20px;
    border: 1px solid rgba(54, 54, 59, 1);
    background: rgba(15, 15, 15, 1);
    padding: 20px;
    position: relative;
    width: calc(100% - 80px);
    color: #fff;
    font-weight: bold;
    position: relative;
    .sen_text {
      color: rgba(158, 158, 159, 1);
    }
    img {
      position: absolute;
      right: 20px;
      top: 38%;
    }
  }
  .active_lan {
    border: 1px solid rgb(47 149 235);
    // color: #2f95eb;
  }
</style>

<template>
  <div class="avatar-wrap">
    <nut-avatar class="avatar" size="large">
      <!-- <img src="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png" /> -->
    </nut-avatar>
    <div class="member-detail">
      <p class="nickname"> <nut-button shape="square" size="small" type="default" @click="goLogin"> 登录 </nut-button> </p>
      <p class="info"> xxxx.... </p>
    </div>
  </div>

  <nut-divider :style="{ color: '#ccc', borderColor: '#ccc', padding: '0 16px' }"></nut-divider>

  
  <nut-cell title="DMC account xxx" is-link></nut-cell>
  <nut-cell title="Privacy Policy" is-link @click="goToPrivacy()"></nut-cell>

  <nut-cell title="Lanage" is-link></nut-cell>


  <!-- <nut-grid direction="vertical" :column-num="2">
    <nut-grid-item text="文字"><Dongdong /></nut-grid-item>
    <nut-grid-item text="文字"><Dongdong /></nut-grid-item>
    <nut-grid-item text="文字"><Dongdong /></nut-grid-item>
    <nut-grid-item text="文字"><Dongdong /></nut-grid-item>
    
  </nut-grid> -->
</template>

<script lang="ts" setup name="MemberPage">
  import { useUserStore } from '@/store/modules/user';
  import { useRouter } from 'vue-router';
  import { Dongdong } from '@nutui/icons-vue';

  const router = useRouter();
  const userStore = useUserStore();
  const getUserInfo = computed(() => {
    const { name = '' } = userStore.getUserInfo || {};
    return name;
  });
  const goLogin = () => {
    router.push('/login');
  };
  const goToPrivacy = ()=> {
    router.push({ path: '/privacyPolicy'});
  }
</script>

<style lang="scss">
  .avatar-wrap {
    display: flex;
    margin: 10px 40px;
    align-items: center;
    .member-detail {
      margin-left: 20px;
      .nickname {
        font-size: 16px;
        font-weight: bold;
        .nut-button {
          margin-left: 10px;
        }
      }
      .info {
        margin-top: 10px;
        font-size: 16px;
      }
    }
  }
</style>

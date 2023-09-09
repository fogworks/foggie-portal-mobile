<template>
  <div class="avatar-wrap">
    <nut-avatar class="avatar" size="large">
      <!-- <img src="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png" /> -->
    </nut-avatar>
    <div class="member-detail">
      <p class="info" v-if="email">{{ email }}</p>
      <p class="nickname" v-else> <nut-button shape="square" size="small" type="default" @click="goLogin"> Login </nut-button> </p>
    </div>
  </div>

  <nut-divider :style="{ color: '#ccc', borderColor: '#ccc', padding: '0 16px' }" />

  <nut-cell title="DMC account xxx" is-link />
  <nut-cell title="Privacy Policy" is-link @click="goToPrivacy()" />

  <nut-cell title="Lanage" is-link />

  <nut-cell title="Log out" is-link @click="logout" />

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
  // import { Dongdong } from '@nutui/icons-vue';
  import { user } from '@/api';
  import { showDialog } from '@nutui/nutui';
  import '@nutui/nutui/dist/packages/dialog/style';
  import { createVNode } from 'vue';
  // import {onMounted, computed} from 'vue';
  const userStore = useUserStore();

  const email = ref<string>('');

  const router = useRouter();
  const goLogin = () => {
    router.push('/login');
  };
  const goToPrivacy = () => {
    router.push({ path: '/privacyPolicy' });
  };

  const logout = (): void => {
    showDialog({
      title: 'info',
      content: createVNode('span', { style: {} }, 'Are you sure you want to Log out?'),
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

  onMounted(() => {
    user()
      .then((res) => {
        if (res && res.data && res.data.email) {
          email.value = res.data.email;
        } else {
          email.value = '';
        }
      })
      .catch(() => {
        router.push('/login');
      });
  });
</script>

<style lang="scss">
  .avatar-wrap {
    display: flex;
    align-items: center;
    margin: 10px 40px;

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

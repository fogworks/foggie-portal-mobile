<template>
  <div class="avatar-wrap">
    <nut-avatar class="avatar" size="large">
      <img src="@/assets/user.svg" alt="" />
    </nut-avatar>
    <div class="member-detail">
      <p class="info" v-if="email">{{ email }}</p>
      <p class="nickname" v-else> <nut-button shape="square" size="small" type="default" @click="goLogin"> Login </nut-button> </p>
    </div>
  </div>
  <nut-divider :style="{ color: '#ccc', borderColor: '#ccc', padding: '0 16px' }" />

  <nut-cell :title="dmcAccount" is-link />
  <nut-cell title="Privacy Policy" is-link @click="goToPrivacy()" />

  <nut-cell title="Lanage" is-link />

  <nut-cell title="Log out" is-link @click="logout" />
  <div class="bg_animation">
    <img src="@/assets/user1.gif" />
  </div>
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
  const dmcAccount = ref<string>('');

  const router = useRouter();
  const goLogin = () => {
    router.push('/login');
  };
  const goToPrivacy = () => {
    window.open('https://foggie.fogworks.io/#/privacyPolicy_EN');
    // router.push({ path: '/privacyPolicy' });
  };

  const logout = (): void => {
    showDialog({
      title: 'info',
      content: createVNode('span', { style: {} }, 'Are you sure you want to Log out?'),
      cancelText: 'Cancel',
      okText: 'OK',
      popClass: 'dialog_class',
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
          dmcAccount.value = `DMC Account ${res.data.dmc}`;
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
    margin-top: 10px;
    padding: 10px 40px;
    background: #fff;
    border-radius: 10px;
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
      }
    }
  }
  .bg_animation {
    position: fixed;
    bottom: 10px;
    right: 10px;
    height: 30%;
    img {
      //   width: 100%;
      height: 300px;
      object-fit: scale-down;
    }
  }
</style>

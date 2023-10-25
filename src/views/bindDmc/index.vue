<template>
  <div class="top_box">
    <div class="top_back" @click="router.go(-1)">Bind</div>
  </div>
  <p class="key_tips" v-if="bindType == 'dmc'"> Please bind your DMC account invitation code first </p>
  <p class="key_tips" v-else-if="bindType == 'amb'"> Please bind ambassador invitation code </p>
  <nut-sticky>
    <nut-form class="query_form" :model-value="formLine">
      <nut-form-item v-if="!userInfo.dmc && bindType == 'dmc'" label-width="180px" label="DMC Account:">
        <nut-input v-model="formLine.dmc" :disabled="loading" autofocus class="nut-input-text" placeholder="Please Input" />
      </nut-form-item>

      <nut-form-item v-if="!userInfo.amb_promo_code && bindType == 'amb'" label-width="180px" label="Ambassador Invitation Code:">
        <nut-input
          v-model="formLine.code"
          :disabled="loading || !!userInfo.amb_promo_code"
          autofocus
          class="nut-input-text"
          placeholder="Please Input"
        />
      </nut-form-item>
      <div class="bind_btn">
        <nut-button block type="info" @click="submit" :loading="loading"> Bind </nut-button>
      </div>
    </nut-form>
  </nut-sticky>
</template>

<script setup lang="ts" name="bindDmc">
  import { reactive, computed, ref } from 'vue';
  import { useUserStore } from '@/store/modules/user';
  import { showToast } from '@nutui/nutui';
  import { user, updateUser, bind_user_promo } from '@/api';
  import { useRoute, useRouter } from 'vue-router';
  import { check_promo, bind_promo } from '@/api/amb';
  import '@nutui/nutui/dist/packages/toast/style';
  const route = useRoute();
  const router = useRouter();
  const useStore = useUserStore();
  const userInfo = computed(() => useStore.getUserInfo);
  const formLine = reactive({ dmc: '', code: '' });
  const loading = ref(false);
  const bindType = computed(() => route.query.type);
  const cloudCodeIsBind = computed(() => useStore.getCloudCodeIsBind);

  const initFoggieDate = async () => {
    let data = await user();
    if (data) {
      useStore.setInfo({
        ...data.data,
      });
    }
  };
  const submit = async () => {
    // const taskList = [];
    if (!userInfo.value.dmc && formLine.dmc.length !== 12 && bindType == 'dmc') {
      showToast.fail('The DMC account length is 12, please enter the correct DMC account');
      return false;
    }
    if (!userInfo.value.amb_promo_code && !formLine.code && bindType == 'amb') {
      showToast.fail('Please enter the Ambassador Invitation Code');
      return false;
    }
    loading.value = true;
    if (!userInfo.value.dmc && bindType == 'dmc') {
      let postData = {
        dmc: formLine.dmc,
        wallet_type: 'wallet',
      };

      let bindRes = await updateUser(userInfo.value.id, postData).then((dmcRes) => {
        if (!userInfo.value.dmc) {
          if (dmcRes.code == 200) {
            showToast.success('Successfully bound DMC account');
            return true;
          } else {
            showToast.fail('Binding failed, please try again');
            return false;
          }
        }
      });
      if (bindRes) {
        await initFoggieDate();
      } else {
        return false;
      }
    }
    if ((!userInfo.value.amb_promo_code || !cloudCodeIsBind.value) && bindType == 'amb') {
      let postData = {
        user_uuid: userInfo.value.uuid,
        amb_promo_code: formLine.code,
        email: userInfo.value.email,
        dmc_account: userInfo.value.dmc,
      };
      const promoFunction = () => {
        return check_promo(formLine.code).then((res) => {
          if (res.code == 200) {
            return bind_promo(postData).then((res2) => {
              if (res2.code == 200) {
                bind_user_promo({
                  amb_promo_code: formLine.code,
                }).then((res) => {
                  if (res.code == 200) {
                    showToast.success('Bind successfully');
                    useStore.setCloudCodeIsBind(true);
                  }
                });
              }
            });
          }
        });
      };
      await promoFunction();
      await initFoggieDate();
    }
    loading.value = false;
  };
  onMounted(() => {
    formLine.code = userInfo.value.amb_promo_code || '';
  });
  onActivated(() => {
    formLine.code = userInfo.value.amb_promo_code || '';
  });
</script>

<style>
  #app {
    background: #fff;
  }
</style>
<style lang="scss" scoped>
  .key_tips {
    margin-top: 30px;
    padding: 0 20px;
    font-size: 30px;
    font-weight: 300;
    line-height: 40px;
  }
  .nut-form-item {
    border-bottom: 1px solid #ebebeb;
  }
  :deep {
    .nut-cell-group__wrap {
      box-shadow: none;
    }
  }

  .bind_btn {
    margin: 200px auto 0;
    width: 50%;
  }
</style>

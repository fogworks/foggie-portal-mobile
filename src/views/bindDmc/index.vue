<template>
  <nut-sticky>
    <nut-form class="query_form" :model-value="formLine">
      <nut-form-item label-width="180px" label="DMC Account" v-if="!userInfo.dmc">
        <nut-input v-model="formLine.dmc" :disabled="loading" autofocus class="nut-input-text" placeholder="Please Input" />
      </nut-form-item>
      <nut-form-item label-width="180px" label="Ambassador Invitation Code" v-if="!userInfo.amb_promo_code">
        <nut-input v-model="formLine.code" :disabled="loading" autofocus class="nut-input-text" placeholder="Please Input" />
      </nut-form-item>
      <div style="margin: 0 20px">
        <nut-button block type="info" @click="submit" :loading="loading"> Confirm </nut-button>
      </div>
    </nut-form>
  </nut-sticky>
</template>

<script setup lang="ts" name="bindDmc">
  import { reactive, computed, ref } from 'vue';
  import { useUserStore } from '@/store/modules/user';
  import { Toast } from '@nutui/nutui';
  import { user, updateUser } from '@/api';
  import { check_promo, bind_promo } from '@/api/amb';

  const useStore = useUserStore();
  const userInfo = computed(() => useStore.getUserInfo);
  const formLine = reactive({ dmc: '', code: '' });
  const loading = ref(false);
  const initFoggieDate = async () => {
    let data = await user();
    if (data) {
      useStore.setInfo({
        ...data.data,
      });
    }
  };
  const submit = () => {
    const taskList = [];
    if (!userInfo.value.dmc && formLine.dmc.length !== 12) {
      Toast.error('The DMC account length is 12, please enter the correct DMC account');
      return false;
    }
    if (!userInfo.value.amb_promo_code && !formLine.code) {
      Toast.error('Please enter the Ambassador Invitation Code');
      return false;
    }
    loading.value = true;
    if (!userInfo.value.dmc) {
      let postData = {
        dmc: formLine.dmc,
        wallet_type: 'wallet',
      };

      taskList.push(updateUser(userInfo.value.id, postData));
    }
    if (!userInfo.value.amb_promo_code) {
      let postData = {
        user_uuid: userInfo.value.uuid,
        amb_promo_code: formLine.code,
      };

      const promoFunction = () => {
        return check_promo(formLine.code).then((res) => {
          if (res.code == 200) {
            return bind_promo(postData);
          }
        });
      };
      taskList.push(promoFunction());
    }
    Promise.all(taskList)
      .then(async (result) => {
        let dmcRes = result[0];
        let promoRes = userInfo.value.dmc ? result[0] : result[1];
        if (!userInfo.value.dmc) {
          if (dmcRes && dmcRes.data && dmcRes.data.dmc) {
            Toast.success('Successfully bound DMC account');
          } else {
            Toast.error('Binding failed, please try again');
          }
        }
        if (promoRes.code == 200) {
          Toast.success(promoRes.result);
        }
        loading.value = false;
        await initFoggieDate();
      })
      .catch((err) => {
        loading.value = false;
        Toast.error('Operation failed, please try again');
      });
  };
</script>

<style scoped></style>

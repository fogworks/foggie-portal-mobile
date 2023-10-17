<template>
  <nut-sticky>
    <nut-form class="query_form" :model-value="formLine">
      <nut-form-item label-width="180px" label="DMC Account" v-if="!userInfo.dmc || onlyDMC">
        <nut-input v-model="formLine.dmc" :disabled="loading" autofocus class="nut-input-text" placeholder="Please Input" />
      </nut-form-item>
      <nut-form-item label-width="180px" label="Ambassador Invitation Code" v-if="!userInfo.amb_promo_code && !onlyDMC">
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
  import { showToast } from '@nutui/nutui';
  import { user, updateUser, bind_user_promo } from '@/api';
  import { useRoute } from 'vue-router';
  import { check_promo, bind_promo } from '@/api/amb';
  import '@nutui/nutui/dist/packages/toast/style';
  const route = useRoute();
  const useStore = useUserStore();
  const userInfo = computed(() => useStore.getUserInfo);
  const formLine = reactive({ dmc: '', code: '' });
  const loading = ref(false);
  const onlyDMC = computed(() => route.query.onlyDMC);
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
    if (!userInfo.value.dmc && formLine.dmc.length !== 12) {
      showToast.fail('The DMC account length is 12, please enter the correct DMC account');
      return false;
    }
    if (!userInfo.value.amb_promo_code && !formLine.code) {
      showToast.fail('Please enter the Ambassador Invitation Code');
      return false;
    }
    loading.value = true;
    if (!userInfo.value.dmc) {
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
      // if (bindRes) await initFoggieDate();
      if (userInfo.value.amb_promo_code) {
        let postData = {
          user_uuid: userInfo.value.uuid,
          amb_promo_code: userInfo.value.amb_promo_code,
          email: userInfo.value.email,
          dmc_account: formLine.dmc,
        };
        const promoFunction = () => {
          return check_promo(userInfo.value.amb_promo_code).then((res) => {
            if (res.code == 200) {
              return bind_promo(postData).then((res2) => {
                if (res2.code == 200) {
                  bind_user_promo({
                    amb_promo_code: userInfo.value.amb_promo_code,
                  }).then((res) => {
                    if (res.code == 200) {
                      showToast.success('Bind successfully');
                      useStore.setCloudCodeIsBind(true);
                      initFoggieDate();
                    }
                  });
                }
              });
            }
          });
        };
        await promoFunction();
      }
    }
    if (!userInfo.value.amb_promo_code) {
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
    // Promise.all(taskList)
    //   .then(async (result) => {
    //     let dmcRes = result[0];
    //     let promoRes = userInfo.value.dmc ? result[0] : result[1];
    //     if (!userInfo.value.dmc) {
    //       if (dmcRes && dmcRes.data && dmcRes.data.dmc) {
    //         showToast.success('Successfully bound DMC account');
    //       } else {
    //         showToast.fail('Binding failed, please try again');
    //       }
    //     }
    //     if (promoRes.code == 200) {
    //       showToast.success(promoRes.result);
    //     }
    //     loading.value = false;
    //     await initFoggieDate();
    //   })
    //   .catch((err) => {
    //     loading.value = false;
    //     showToast.fail('Operation failed, please try again');
    //   });
  };
</script>

<style scoped></style>

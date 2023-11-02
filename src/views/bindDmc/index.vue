<template>
  <div class="top_box">
    <TopBack> Bind</TopBack>
  </div>
  <p class="key_tips" v-if="bindType == 'dmc'"> Please bind your DMC account first </p>
  <p class="key_tips" v-else-if="bindType == 'amb'"> Please bind ambassador invitation code </p>
  <nut-sticky>
    <nut-form class="query_form" :model-value="formLine">
      <nut-form-item
        v-if="!userInfo.dmc && bindType == 'dmc'"
        label-width="180px"
        style="white-space: nowrap; color: #000"
        label="DMC Account:"
      >
        <nut-input v-model="formLine.dmc" :disabled="loading" autofocus class="nut-input-text" placeholder="Please Input" />
      </nut-form-item>

      <!-- <nut-form-item v-if="bindType == 'amb'" label-width="180px" label="Ambassador Invitation Code:">
        <nut-input v-model="formLine.code" :disabled="loading" autofocus class="nut-input-text" placeholder="Please Input" /> -->
      <nut-form-item
        v-if="bindType == 'amb'"
        label-width="180px"
        style="white-space: nowrap; color: #000"
        label="Ambassador Invitation Code:"
      >
        <!-- :disabled="loading || !!userInfo.amb_promo_code" -->
        <nut-input v-model="formLine.code" :disabled="loading" autofocus class="nut-input-text" placeholder="Please Input" />
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
  import { user, updateUser, bind_user_promo, checkDmcAccount } from '@/api';
  import { useRoute, useRouter } from 'vue-router';
  import { check_promo, bind_promo } from '@/api/amb';
  import '@nutui/nutui/dist/packages/toast/style';
  import useUpdateDMC from '@/views/shop/useUpdateDMC.js';
  const route = useRoute();
  const router = useRouter();
  const useStore = useUserStore();
  const userInfo = computed(() => useStore.getUserInfo);
  const amb_promo_code = computed(() => useStore.getUserInfo.amb_promo_code);
  const formLine = reactive({ dmc: '', code: '' });
  const loading = ref(false);
  const bindType = computed(() => route.query.type);
  const cloudCodeIsBind = computed(() => useStore.getCloudCodeIsBind);
  const { bindAmbCode, curStepIndex } = useUpdateDMC();
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
    if (!userInfo.value.dmc && formLine.dmc.length !== 12 && bindType.value == 'dmc') {
      showToast.fail('The DMC account length is 12, please enter the correct DMC account');
      return false;
    }
    if (!userInfo.value.amb_promo_code && !formLine.code && bindType.value == 'amb') {
      showToast.fail('Please enter the Ambassador Invitation Code');
      return false;
    }
    loading.value = true;
    if (!userInfo.value.dmc && bindType.value == 'dmc') {
      checkDmcAccount({
        account_name: formLine.dmc,
      })
        .then(async (res) => {
          if (res.account_name == formLine.dmc) {
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
                loading.value = false;
              }
            });
            if (bindRes) {
              await initFoggieDate();
              let ambBindRes = await check_user_bind(userInfo.value.uuid);
              if (userInfo.value.amb_promo_code && !ambBindRes.result.bind && ambBindRes.code == 200) {
                let postData = {
                  user_uuid: userInfo.value.uuid,
                  amb_promo_code: userInfo.value.amb_promo_code,
                  email: userInfo.value.email,
                  dmc_account: userInfo.value.dmc,
                };
                const promoFunction = () => {
                  return check_promo(userInfo.value.amb_promo_code)
                    .then((res) => {
                      if (res.code == 200) {
                        return bind_promo(postData)
                          .then((res2) => {
                            if (res2.code == 200) {
                              bind_user_promo({
                                amb_promo_code: userInfo.value.amb_promo_code,
                              })
                                .then((res) => {
                                  if (res.code == 200) {
                                    loading.value = false;
                                    showToast.success('Bind successfully');
                                    router.push({ name: 'PersonalInfo' });
                                  } else {
                                    loading.value = false;
                                  }
                                })
                                .catch(() => {
                                  loading.value = false;
                                });
                            } else {
                              loading.value = false;
                            }
                          })
                          .catch(() => {
                            loading.value = false;
                          });
                      }
                    })
                    .catch(() => {
                      loading.value = false;
                    });
                };
                await promoFunction();
              }
            } else {
              loading.value = false;
              return false;
            }
          } else {
            loading.value = false;
          }
          console.log(res);
        })
        .catch(() => {
          showToast.fail('This DMC account name is incorrect, please fill in a valid account');
          loading.value = false;
        });
    }
    if ((!userInfo.value.amb_promo_code || !cloudCodeIsBind.value) && bindType.value == 'amb') {
      if (amb_promo_code.value == formLine.code && curStepIndex.value == 2) {
        showToast.fail('This ambassador has rejected your application, please enter another ambassador invitation code');
        loading.value = false;

        return false;
      }
      let postData = {
        user_uuid: userInfo.value.uuid,
        amb_promo_code: formLine.code,
        email: userInfo.value.email,
        dmc_account: userInfo.value.dmc,
      };
      const promoFunction = () => {
        return check_promo(formLine.code)
          .then((res) => {
            if (res.code == 200) {
              return bind_promo(postData)
                .then((res2) => {
                  if (res2.code == 200) {
                    bind_user_promo({
                      amb_promo_code: formLine.code,
                    })
                      .then((res) => {
                        if (res.code == 200) {
                          showToast.success('Bind successfully');
                          router.push({ name: 'PersonalInfo' });

                          // useStore.setCloudCodeIsBind(true);
                        } else {
                          loading.value = false;
                        }
                      })
                      .catch(() => {
                        loading.value = false;
                      });
                  }
                })
                .catch(() => {
                  loading.value = false;
                });
            } else {
              loading.value = false;
              showToast.fail('Binding failed, please try again');
              return false;
            }
          })
          .catch(() => {
            loading.value = false;
          });
      };
      await promoFunction();
      await initFoggieDate();
    }
    loading.value = false;
    router.push('/home');
  };
  watch(
    amb_promo_code,
    (val) => {
      if (val) {
        formLine.code = val;
      }
    },
    { deep: true, immediate: true },
  );
  onMounted(() => {
    bindAmbCode();
    formLine.code = amb_promo_code.value || '';
    console.log(formLine.code, 'code');
    formLine.code = userInfo.value.amb_promo_code || '';
  });
  onActivated(() => {
    bindAmbCode();
    formLine.code = amb_promo_code.value || '';
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
    .nut-input-text {
      input {
        color: #000;
        text-align: right !important;
        -webkit-text-fill-color: #5758a0;
        font-weight: bold;
      }
    }
  }

  .bind_btn {
    margin: 200px auto 0;
    width: 50%;
  }
</style>

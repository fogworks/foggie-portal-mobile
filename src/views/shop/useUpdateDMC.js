import { computed, ref } from 'vue';
import { useUserStore } from '@/store/modules/user';
import { bind_promo, check_promo, get_amb_dmc, check_user_bind } from '@/api/amb';
import { showDialog, showToast } from '@nutui/nutui';
import { useRouter, useRoute } from 'vue-router';
import loadingImg from '@/components/loadingImg/index.vue';
import { search_cloud, bind_user_promo } from '@/api';

export default function useUpdateDMC() {
  const curStepIndex = ref(1); // 1 绑定大使邀请码
  const ambRefuse = ref(false); //大使是否拒绝  true 拒绝  false 同意
  const userStore = useUserStore();
  const router = useRouter();
  const route = useRoute();
  const userInfo = computed(() => userStore.getUserInfo);
  const dmc = computed(() => userStore.getUserInfo.dmc);
  const uuid = computed(() => userStore.getUserInfo.uuid);
  const amb_promo_code = computed(() => userStore.getUserInfo?.amb_promo_code || '');
  const cloudCodeIsBind = computed(() => userStore.getCloudCodeIsBind);
  const targetAccount = ref('');
  const pn = ref(1);
  const ps = ref(10);
  // const passwordIsExist = ref(false)
  function getAmbDmc() {
    get_amb_dmc().then((res) => {
      targetAccount.value = res.result.dmc_account;
    });
  }
  async function bindAmbCode() {
    if (!uuid.value) return false;
    showToast.loading('Loading', {
      cover: true,
      customClass: 'app_loading',
      icon: loadingImg,
      loadingRotate: false,
      id: 'amb-code',
    });
    return check_user_bind(uuid.value)
      .then((res2) => {
        console.log(res2.result, 'res2.result.bind');
        if (res2.result.bind) {
          if (res2.result.approved && res2.result.refuse) {
            curStepIndex.value = 2;
            ambRefuse.value = true;
            if (route.path == '/bindDmc') {
              return false;
            }
            // refuse
            const onOk = () => {
              router.push({ name: 'BindDmc', query: { type: 'amb' } });
            };
            showDialog({
              title: 'Notice',
              content: `Your application to join the Ambassador platform has been rejected  ${
                res2.result.fault ? 'with the reason:' + res2.result.fault : ''
              }. you can change the Ambassador invitation code and try to join another Ambassador platform!`,
              cancelText: 'Cancel',
              okText: 'Confirm',
              popClass: 'dialog_class',
              onOk,
            });
          } else if (res2.result.approved && !res2.result.refuse) {
            curStepIndex.value = 3;
            userStore.setCloudCodeIsBind(true);
            ambRefuse.value = false;
            // approved
            if (route.path == '/bindDmc') {
              return false;
            }
            if (!window.localStorage.hasCloudApproved) {
              window.localStorage.hasCloudApproved = true;
              const onOk = () => {
                router.push({ name: 'bindDmc', query: { type: 'amb' } });
              };
              let src = require('@/assets/fog-works.png');
              let str = `<img class="bind_img" src=${src} style="height:60px"/><p style='word-break:break-word;color:#4c5093;text-align:left;'>The ambassador platform is approved and you can now start purchasing orders, should you head over right away?</p >`;
              showDialog({
                title: 'Notice',
                content: str,
                cancelText: 'Cancel',
                okText: 'Confirm',
                popClass: 'dialog_class',
                onOk,
              });
            }
          } else {
            curStepIndex.value = 2;

            if (route.path == '/bindDmc') {
              return false;
            }
            let src = require('@/assets/fog-works.png');
            let str = `<img class="bind_img" src=${src} style="height:60px"/><p style='word-break:break-word;color:#4c5093;text-align:left;'>Awaiting approval from the Ambassador, please be patient until the approval is complete</p >`;
            showDialog({
              title: 'Ambassador Invitation Code',
              content: str,
              'no-ok-btn': true,
              'cancel-text': 'OK',
            });
          }
        } else {
          console.log('未绑定！！！！！！！！');
          curStepIndex.value = 1;
          if (!amb_promo_code.value) {
            if (route.path == '/bindDmc') {
              return false;
            }
            const dmcOk = () => {
              router.push({ name: 'BindDmc', query: { type: 'amb' } });
            };
            let src = require('@/assets/fog-works.png');
            let str = `<img class="bind_img" src=${src} style="height:60px"/><p style='word-break:break-word;color:#4c5093;text-align:left;'>Please confirm that you have filled out the invitation code before placing your order</p >`;
            showDialog({
              title: 'Bind',
              content: str,
              onOk: dmcOk,
            });
          } else {
            if (route.path == '/bindDmc') {
              return false;
            }
            const dmcOk = async () => {
              let postData = {
                user_uuid: userInfo.value.uuid,
                amb_promo_code: amb_promo_code.value,
                email: userInfo.value.email,
                dmc_account: userInfo.value.dmc,
              };
              const promoFunction = () => {
                return check_promo(amb_promo_code.value)
                  .then((res) => {
                    if (res.code == 200) {
                      return bind_promo(postData)
                        .then((res2) => {
                          if (res2.code == 200) {
                            bind_user_promo({
                              amb_promo_code: amb_promo_code.value,
                            })
                              .then((res) => {
                                if (res.code == 200) {
                                  bindAmbCode();
                                  showToast.success('Bind successfully');
                                  // useStore.setCloudCodeIsBind(true);
                                } else {
                                }
                              })
                              .catch(() => {});
                          }
                        })
                        .catch(() => {});
                    } else {
                      showToast.fail('Binding failed, please try again');
                      return false;
                    }
                  })
                  .catch(() => {});
              };
              await promoFunction();
            };
            let src = require('@/assets/fog-works.png');
            let str = `<img class="bind_img" src=${src} style="height:60px"/><p style='word-break:break-word;color:#4c5093;text-align:left;'>Your current Ambassador Invitation Code is ${amb_promo_code.value}, are you sure you want to bind?</p >`;
            showDialog({
              title: 'Bind',
              content: str,
              okText:'Accept',
              onOk: dmcOk,
            });
          }
        }
      })
      .finally(() => {
        showToast.hide('amb-code');
      });
  }
  async function getOrder() {
    const order_state = null;
    const start_time = '';
    const end_time = '';
    const buy_result = 'success';
    await search_cloud({ ps: ps.value, pn: pn.value, order_state, start_time, end_time, buy_result }).then((res) => {
      let total = res?.result?.total;
      if (total > 0) {
        curStepIndex.value = 4;
      } else {
        curStepIndex.value = 3;
      }
    });
  }

  return {
    getAmbDmc,
    curStepIndex,
    ambRefuse,
    dmc,
    uuid,
    amb_promo_code,
    targetAccount,
    bindAmbCode,
    getOrder,
    cloudCodeIsBind,
  };
}

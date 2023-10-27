import { computed, ref } from 'vue';
import { useUserStore } from '@/store/modules/user';
import { bind_promo, check_promo, get_amb_dmc, check_user_bind } from '@/api/amb';
import { showDialog, showToast } from '@nutui/nutui';
import { useRouter } from 'vue-router';
import loadingImg from '@/components/loadingImg/index.vue';

export default function useUpdateDMC() {
  const curStepIndex = ref(1); // 1 绑定大使邀请码
  const ambRefuse = ref(false); //大使是否拒绝  true 拒绝  false 同意
  const userStore = useUserStore();
  const router = useRouter();
  const dmc = computed(() => userStore.getUserInfo.dmc);
  const uuid = computed(() => userStore.getUserInfo.uuid);
  const amb_promo_code = computed(() => userStore.getUserInfo?.amb_promo_code || '');
  const targetAccount = ref('');
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
    check_user_bind(uuid.value)
      .then((res2) => {
        if (res2.result.bind) {
          if (res2.result.approved && res2.result.refuse) {
            curStepIndex.value = 2;
            ambRefuse.value = true;
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
            curStepIndex.value = 2;
            ambRefuse.value = false;
            // approved
            if (!window.localStorage.hasCloudApproved) {
              window.localStorage.hasCloudApproved = true;
              const onOk = () => {
                router.push({ name: 'bindDmc', query: { type: 'amb' } });
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
              curStepIndex.value = 2;
              ambRefuse.value = false;
              // approved
              if (!window.localStorage.hasCloudApproved) {
                window.localStorage.hasCloudApproved = true;
                const onOk = () => {
                  router.push({ name: 'Shop' });
                };
                showDialog({
                  title: 'Notice',
                  content: `The ambassador platform is approved and you can now start purchasing orders, should you head over right away?`,
                  cancelText: 'Cancel',
                  okText: 'Confirm',
                  popClass: 'dialog_class',
                  onOk,
                });
              }
              userStore.setCloudCodeIsBind(true);
            } else {
              showToast.text('Ambassadors are in the process of approval, please be patient');
            }
          } else {
            const dmcOk = () => {
              router.push({ name: 'BindDmc', query: { type: 'amb' } });
            };
            let src = require('@/assets/fog-works.png');
            let str = `<img class="bind_img" src=${src} style="height:60px"/><p style='word-break:break-word;color:#4c5093;text-align:left;'>Please confirm that you have filled out the invitation code before placing your order</p >`;
            showDialog({
              title: 'Ambassador Invitation Code',
              content: str,
              onOk: dmcOk,
            });
            curStepIndex.value = 1;
          }
        } else {
          const dmcOk = () => {
            router.push({ name: 'BindDmc', query: { type: 'amb' } });
          };
          let src = require('@/assets/fog-works.png');
          let str = `<img class="bind_img" src=${src} style="height:60px"/><p style='word-break:break-word;color:#4c5093;text-align:left;'>Please confirm that you have filled out the invitation code before placing your order</p >`;
          showDialog({
            title: 'Ambassador Invitation Code',
            content: str,
            onOk: dmcOk,
          });
          curStepIndex.value = 1;
        }
      })
      .finally(() => {
        showToast.hide('amb-code');
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
  };
}

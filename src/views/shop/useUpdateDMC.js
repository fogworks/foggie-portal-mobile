import { computed, ref } from 'vue';
import { useUserStore } from '@/store/modules/user';
import { bind_promo, check_promo, get_amb_dmc, check_user_bind } from '@/api/amb';
import { showDialog, showToast } from '@nutui/nutui';
import { useRouter } from 'vue-router';

export default function useUpdateDMC() {
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
    check_user_bind(uuid.value).then((res2) => {
      if (!!res2.result.bind) {
        if (!!res2.result.approved && !!res2.result.refuse) {
          // refuse
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
      }
    });
  }

  return {
    getAmbDmc,
    dmc,
    amb_promo_code,
    targetAccount,
    bindAmbCode,
  };
}

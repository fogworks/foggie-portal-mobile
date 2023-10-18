import { computed, ref } from 'vue';
import { useUserStore } from '@/store/modules/user';
import { get_amb_dmc } from '@/api/amb';

export default function useUpdateDMC() {
  const userStore = useUserStore();
  const dmc = computed(() => userStore.getUserInfo.dmc);
  const amb_promo_code = computed(() => userStore.getUserInfo?.amb_promo_code || '');
  const targetAccount = ref('');
  // const passwordIsExist = ref(false)
  function getAmbDmc() {
    get_amb_dmc().then((res) => {
      targetAccount.value = res.result.dmc_account;
    });
  }

  return {
    getAmbDmc,
    dmc,
    amb_promo_code,
    targetAccount,
  };
}

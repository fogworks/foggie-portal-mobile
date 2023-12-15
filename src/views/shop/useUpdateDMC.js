import { computed, reactive, ref, watch } from 'vue';
import { useUserStore } from '@/store/modules/user';
import { bind_promo, check_promo, get_amb_dmc, check_user_bind } from '@/api/amb';
import { showDialog, showToast } from '@nutui/nutui';
import { useRouter, useRoute } from 'vue-router';
import loadingImg from '@/components/loadingImg/index.vue';
import { search_cloud, bind_user_promo } from '@/api';

export default function () {
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

  const bindAmbCodeDialogIsShow = ref(false)

  function getAmbDmc() {
    get_amb_dmc().then((res) => {
      targetAccount.value = res.result.dmc_account;
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
    getOrder,
    cloudCodeIsBind,
    bindAmbCodeDialogIsShow,
  };
}

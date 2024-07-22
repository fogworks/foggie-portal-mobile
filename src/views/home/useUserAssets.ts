import { get_user_dmc, get_exchange_rate } from '@/api/amb';
import { useUserStore } from '@/store/modules/user';



export default function useUserAssets() {
  const userStore = useUserStore();

  const cloudBalance = ref('--');
  const cloudPst = ref('--');
  const cloudIncome = ref('--');
  const cloudWithdraw = ref('--');
  const cloudTodayIncome = ref('--');
  const dmc2usdRate = ref(0);
  const cloudRecharge = ref('--');
  const dmc = computed(() => {
    return userStore.getUserInfo?.dmc;
  });

  function getUserAssets() {
    return get_user_dmc(dmc.value).then((res) => {
      if (res?.result?.data) {
        cloudBalance.value = res?.result?.data?.balance.toFixed(4) || 0;
        userStore.setBalance(res.result.data.balance);
        cloudPst.value = res.result.data.pst || '--';
        cloudIncome.value = res.result.data.income;
        cloudWithdraw.value = res.result.data.withdraw;
        cloudTodayIncome.value = res.result.data.today_income;
        cloudRecharge.value = res.result.data.Recharge;
      }
    });
  }
  function getExchangeRate() {
    get_exchange_rate().then((res) => {
      console.log(res);
      dmc2usdRate.value = res.result.exchange_rate;
    });
  }
  return {
    dmc2usdRate,
    getExchangeRate,
    getUserAssets,
    cloudBalance,
    cloudPst,
    cloudIncome,
    cloudWithdraw,
    cloudTodayIncome,
    cloudRecharge,
  };
}

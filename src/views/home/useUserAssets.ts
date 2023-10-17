import { get_user_dmc } from '@/api/amb';
import { useUserStore } from '@/store/modules/user';

export default function useUserAssets() {
  const useStore = useUserStore();
  const cloudBalance = ref('--');
  const cloudPst = ref('--');
  const cloudIncome = ref('--');
  const cloudWithdraw = ref('--');
  const cloudTodayIncome = ref('--');
  function getUserAssets() {
    get_user_dmc().then((res) => {
      if (res?.result?.data) {
        cloudBalance.value = res?.result?.data?.balance;
        useStore.setBalance(res.result.data.balance);
        cloudPst.value = res.result.data.pst || '--';
        cloudIncome.value = res.result.data.income;
        cloudWithdraw.value = res.result.data.withdraw;
        cloudTodayIncome.value = res.result.data.today_income;
      }
    });
  }
  return {
    getUserAssets,
    cloudBalance,
    cloudPst,
    cloudIncome,
    cloudWithdraw,
    cloudTodayIncome,
  };
}

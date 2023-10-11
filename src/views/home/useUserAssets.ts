import { get_user_dmc } from '@/api/amb';
import { useUserStore } from '@/store/modules/user';

export default function useUserAssets() {
  const useStore = useUserStore();
  const cloudBalance = ref('--');
  const cloudPst = ref('--');
  const cloudIncome = ref('--');
  const cloudWithdraw = ref('--');
  function getUserAssets() {
    get_user_dmc().then((res) => {
      cloudBalance.value = res.result.data.balance[0].amount;
      useStore.setBalance(res.result.data.balance[0].amount);
      cloudPst.value = res.result.data.balance[1].amount;
      cloudIncome.value = res.result.data.income;
      cloudWithdraw.value = res.result.data.withdraw;
    });
  }
  return {
    getUserAssets,
    cloudBalance,
    cloudPst,
    cloudIncome,
    cloudWithdraw,
  };
}

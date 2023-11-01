import { search_order_profit } from '@/api/amb';

export default function useOrderAssets() {
  const cloudProfit = ref(0);
  const orderPayout = ref(0);
  const cloudBalance = ref(0);

  function getUserAssets(postData) {
    search_order_profit(postData).then((_res) => {
      if (_res && _res.result && _res.result.length) {
        let res = _res.result[0];
        (cloudProfit.value = res.profit), (orderPayout.value = res.payout);
        cloudBalance.value = Number(cloudProfit.value) - Number(orderPayout.value);
      }
    });
  }
  return {
    getUserAssets,
    cloudBalance,
    orderPayout,
    cloudProfit,
  };
}

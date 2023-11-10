import { ref } from 'vue';
import { pst_profit } from '@/api/amb';
export default function useDMCTrade() {
  const perGoldenPSTIncome = ref(0);
  const perMpPSTIncome = ref(0);
  const pstProfit = () => {
    pst_profit().then((res) => {
      perGoldenPSTIncome.value = res.result.gold_mp_profit;
      perMpPSTIncome.value = res.result.mp_profit;
    });
  };
  pstProfit();
  return {
    perGoldenPSTIncome,
    perMpPSTIncome,
  };
}

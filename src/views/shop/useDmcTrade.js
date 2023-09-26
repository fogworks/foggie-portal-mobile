import { ref, computed } from 'vue';
import BigNumber from 'bignumber.js';
import { gqlReq } from '@/services';
export default function useDMCTrade() {
  const dmcProduction = ref(undefined);
  const avgStakeRate = ref(undefined);
  const orderLockedPstTotal = ref(undefined);
  const getDMCTrade = () => {
    const getOrderData = (skip, lastData) => {
      const pageSize = 500;
      gqlReq('order')
        .find(
          {
            skip,
            limit: pageSize,
            order: '-created_time',
          },
          `
    {
      miner_lock_dmc_amount
      miner_lock_pst_amount
      state
      lock_pledge_amount
      maker_snapshot {
        rate
     }
  }
    `,
        )
        .then((res) => res.json())
        .then((data) => {
          const res = data?.data?.find_order;
          if (res) {
            const totalData = lastData.concat(res);
            if (res.length === pageSize) {
              getOrderData(skip + res.length, totalData);
            } else {
              let avgTotal = new BigNumber(0);
              let pstTotal = new BigNumber(0);
              let underGoingPST = new BigNumber(0);
              let underGoingDmc = new BigNumber(0);
              let finishedPST = new BigNumber(0);
              totalData.forEach((item) => {
                avgTotal = new BigNumber(avgTotal).plus(item?.maker_snapshot[0]?.rate);
                pstTotal = new BigNumber(pstTotal).plus(item?.miner_lock_pst_amount);
                if (item?.state !== 4 && item?.state !== 5) {
                  underGoingPST = new BigNumber(underGoingPST).plus(item?.miner_lock_pst_amount);
                  underGoingDmc = new BigNumber(underGoingDmc).plus(item?.miner_lock_dmc_amount);
                } else {
                  finishedPST = new BigNumber(finishedPST).plus(item?.miner_lock_pst_amount);
                }
              });
              orderLockedPstTotal.value = pstTotal.div(1024).toFixed();
            }
          }
        })
        .catch((error) => {});
    };
    try {
      fetch('/dmcscan/data')
        .then((res) => res.json())
        .then((cacheData) => {
          if (cacheData && cacheData.CacheTimestamp) {
            // totalData?.data.forEach((item) => {
            //     pstTotal = new BigNumber(pstTotal).plus(item?.miner_lock_pst_amount)
            // })
            orderLockedPstTotal.value = +cacheData?.OrderLockedPstTotal;
          } else {
            getOrderData(0, []);
          }
        });
    } catch {
      getOrderData(0, []);
    }

    fetch(`/dmcscan/innerUniswapTrade`, {
      next: { revalidate: 10 },
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        mode: 'quiet',
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.DMCTotal) {
          dmcProduction.value = data?.DMCTotal.split(' ')[0];
        }
      });
    fetch(`/dmcscan/checkAvgStakeRate`, {
      next: { revalidate: 10 },
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        states: 'underGoing',
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.avgStakeRate) {
          avgStakeRate.value = data?.avgStakeRate / 100;
        }
      });
  };
  getDMCTrade();
  const perTBIncome = computed(() => {
    const allRate = new BigNumber(2).plus(avgStakeRate.value);
    const perTBIncome = new BigNumber(dmcProduction.value).div(allRate).div(orderLockedPstTotal.value).toFixed(4, 1);
    const perGBIncome = perTBIncome;
    console.log(perGBIncome || '--', '1111111');
    return perGBIncome > 0 ? perGBIncome : '--';
  });
  const foggiePerGBIncome = computed(() => {
    const allRate = new BigNumber(2).plus(avgStakeRate.value);
    const userRate = new BigNumber(1).plus(avgStakeRate.value);
    const foggiePerTBIncome = new BigNumber(dmcProduction.value).div(allRate).div(orderLockedPstTotal.value).times(userRate).toFixed(4, 1);
    const foggiePerGBIncome = foggiePerTBIncome / 1024;
    return foggiePerGBIncome || '--';
  });
  return {
    getDMCTrade,
    dmcProduction,
    avgStakeRate,
    orderLockedPstTotal,
    perTBIncome,
    foggiePerGBIncome,
  };
}

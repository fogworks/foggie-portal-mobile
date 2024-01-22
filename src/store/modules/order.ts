// import { loginPassword } from '@/api';
import { useCookies } from '@vueuse/integrations/useCookies';
import { defineStore } from 'pinia';

const { VITE_TOKEN_KEY } = import.meta.env;

interface StoreOrder {
  orderList: Array<any>;
  orderInfoList: Record<any, any>;
}

export const useOrderStore = defineStore({
  id: 'app-order',
  state: (): StoreOrder => ({
    orderList: [],
    orderInfoList: {},
  }),
  getters: {
    getOrderList(): any {
      return this.orderList || {};
    },
    getOrderInfoList(): any {
      return (id) => this.orderInfoList[id];
    },
  },
  actions: {
    setOrderList(orderList: any) {
      this.orderList = orderList ? orderList : [];
    },
    setOrderInfoList(id, orderInfo: any) {
      this.orderInfoList[id] = orderInfo ? orderInfo : {};
    },
  },
});

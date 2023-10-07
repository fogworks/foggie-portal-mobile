// import { loginPassword } from '@/api';
import { useCookies } from '@vueuse/integrations/useCookies';
import { defineStore } from 'pinia';

const { VITE_TOKEN_KEY } = import.meta.env;

interface StoreOrder {
  orderList: Array<any>;
}

export const useOrderStore = defineStore({
  id: 'app-order',
  state: (): StoreOrder => ({
    orderList: [],
  }),
  getters: {
    getOrderList(): any {
      return this.orderList || {};
    },
  },
  actions: {
    setOrderList(orderList: any) {
      this.orderList = orderList ? orderList : [];
    },
  },
});

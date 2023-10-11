// import { loginPassword } from '@/api';
import { useCookies } from '@vueuse/integrations/useCookies';
import { defineStore } from 'pinia';

const { VITE_TOKEN_KEY } = import.meta.env;
const token = useCookies().get(VITE_TOKEN_KEY as string);

interface StoreUser {
  token: string;
  info: Record<any, any>;
  balance: any;
}

export const useUserStore = defineStore({
  id: 'app-user',
  state: (): StoreUser => ({
    token: token,
    info: {},
    balance: 0,
  }),
  getters: {
    getUserInfo(): any {
      return this.info || {};
    },
    getToken(): any {
      return this.token || '';
    },
    getBalance(): any {
      return this.balance || 0;
    },
  },
  actions: {
    setToken(token: string) {
      this.token = token;
    },
    setInfo(info: any) {
      this.info = info ? info : '';
    },
    setBalance(balance: any) {
      this.balance = balance;
    },
    logout() {
      this.token = '';
      this.info = {};
    },
    login(data) {
      return new Promise((resolve) => {
        // loginPassword(data).then((res) => {
        //   this.setInfo(res);
        //   resolve(res);
        // });
      });
    },
  },
  persist: {
    key: 'token',
    storage: localStorage,
    paths: ['token'],
  },
});

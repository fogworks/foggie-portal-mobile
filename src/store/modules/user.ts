// import { loginPassword } from '@/api';
import { useCookies } from '@vueuse/integrations/useCookies';
import { defineStore } from 'pinia';

const { VITE_TOKEN_KEY } = import.meta.env;
const token = useCookies().get(VITE_TOKEN_KEY as string);

interface StoreUser {
  token: string;
  info: Record<any, any>;
  balance: any;
  cloudCodeIsBind: boolean;
  ambRefuse: boolean;
  curStepIndex: any;
}

export const useUserStore = defineStore({
  id: 'app-user',
  state: (): StoreUser => ({
    token: token,
    info: {},
    balance: 0,
    cloudCodeIsBind: false,
    ambRefuse: false, //
    curStepIndex: '1',
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
    getCloudCodeIsBind(): any {
      return this.cloudCodeIsBind;
    },
    getambRefuse(): any {
      return this.ambRefuse;
    },
    getCurStepIndex(): any {
      return this.curStepIndex;
    },
  },
  actions: {
    setCloudCodeIsBind(bool: boolean) {
      this.cloudCodeIsBind = bool;
    },
    setambRefuse(bool: boolean) {
      this.ambRefuse = bool;
    },
    setcurStepIndex(num: any) {
      this.curStepIndex = num;
    },
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
      this.cloudCodeIsBind = false;
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

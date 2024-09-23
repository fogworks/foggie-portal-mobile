// import { loginPassword } from '@/api';
import { useCookies } from '@vueuse/integrations/useCookies';
import { defineStore } from 'pinia';
import Cookies from 'js-cookie';
import { setTokenMap, getTokenMap } from "@/utils/tokenMap";
import { get } from 'vant/lib/utils';

const { VITE_TOKEN_KEY } = import.meta.env;
const token = useCookies().get(VITE_TOKEN_KEY as string);
const refreshToken = useCookies().get('refresh_token');

interface StoreUser {
    token: string;
    refreshToken: string;
    info: Record<any, any>;
    balance: any;
    cloudCodeIsBind: boolean;
    ambRefuse: boolean;
    curStepIndex: any;
    maxTokenMap: any;
    currentLeftTab: any,
    myAkList: Object,
    maxBind: boolean,
    maxWallet: string,
    address: string;
}

export const useUserStore = defineStore({
    id: 'app-user',
    state: (): StoreUser => ({
        token: token,
        refreshToken: refreshToken,
        info: {},
        address: '',
        balance: 0,
        cloudCodeIsBind: false,
        ambRefuse: false, //
        curStepIndex: '1',
        maxTokenMap: window.localStorage.getItem("maxTokenMap")
            ? JSON.parse(window.localStorage.getItem("maxTokenMap"))
            : {},
        // currentLeftTab: window.localStorage.getItem("homeChooseBucket")
        //     ? JSON.parse(window.localStorage.getItem("homeChooseBucket"))
        //     : {},
        currentLeftTab: {},
        myAkList: {},
        maxBind: false,
        maxWallet: '',
    }),
    getters: {
        getUserInfo(): any {
            return this.info || {};
        },
        getToken(): any {
            return this.token || '';
        },
        getRefreshToken(): any {
            return this.refreshToken || '';
        },
        getMaxBind(): any {
            return this.maxBind;
        },
        getMaxWallet(): any {
            return this.maxWallet;
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
        getMaxTokenMap(): any {
            return this.maxTokenMap;
        },
        getCurrentLeftTab(): any {
            return this.currentLeftTab;
        },
        getMyAkList(): any {
            return this.myAkList;
        },
        getAddress(): any {
            return this.address;
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
        setAddress(address: string) {
            this.address = address;
        },
        setInfo(info: any) {
            this.info = info ? info : '';
        },
        setBalance(balance: any) {
            this.balance = balance;
        },
        setRefreshToken(refreshToken: any) {
            this.refreshToken = refreshToken;
        },
        setMaxBind(bool: boolean) {
            this.maxBind = bool;
        },
        setMaxWallet(wallet: string) {
            this.maxWallet = wallet;
        },
        logout() {
            this.token = '';
            this.refreshToken = '';
            this.maxBind = false;
            this.maxWallet = '';
            this.info = {};
            this.address = '';
            this.cloudCodeIsBind = false;
            Cookies.remove('access_token');
            Cookies.remove('refresh_token');

        },
        login(data) {
            return new Promise((resolve) => {
                // loginPassword(data).then((res) => {
                //   this.setInfo(res);
                //   resolve(res);
                // });
            });
        },
        setMaxTokenMap(data) {
            setTokenMap(data.id, data.token);
            this.maxTokenMap[data.id] = data.token;
        },
        setCurrentLeftTab(data) {
            this.currentLeftTab = data;
        },
        setMyAkList(data) {
            this.myAkList = data;
        },
    },
    persist: {
        key: 'token',
        storage: localStorage,
        paths: ['token', 'refreshToken', 'maxBind', 'maxWallet'],
    },
});

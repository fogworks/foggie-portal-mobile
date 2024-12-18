import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { showToast } from '@nutui/nutui';
import '@nutui/nutui/dist/packages/toast/style';
import Qs from 'qs';
import { useUserStore } from '@/store/modules/user';
import { useRouter } from 'vue-router';
import { refreshToken, user } from '@/api';
import ignoreUrl from './ignoreUrl';

const service: AxiosInstance = axios.create({
    withCredentials: false,
    timeout: 10000,
});

service.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        const userStore = useUserStore();
        if (config.url && config.url.indexOf('/api_accounts/login') > -1) {
            config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
            config.data = Qs.stringify(config.data);
        }
        const refresh_token = userStore.getToken;
        config.headers['Authorization'] = refresh_token;
        if (config.url && config.url.indexOf('/api_accounts/accounts/refresh_token') > -1) {
            config.headers['Authorization'] = userStore.getRefreshToken;
        }
        return config;
    },
    (_error: AxiosError) => { },
);

service.interceptors.response.use(
    async (response: AxiosResponse) => {
        const router = useRouter();
        const userStore = useUserStore();

        const res = response.data;
        let code = res.code;
        if (
            response.config.url?.indexOf('/v1/chain/get_account') > -1 ||
            response.config.url?.indexOf('/reCAPTCHA_verification/recaptcha/api/siteverify') > -1
        ) {
            return res;
        }
        if (code !== 200) {
            if (ignoreUrl.indexOf(response.config.url) > -1) {
            } else if (code == 600) {

            } else if (code != 420) {
                showToast.fail(res.error || res.msg || res.message || response.config.url + 'Network error. Please try again.', {
                    customClass: 'creat-name-error',
                });
            }
            if (code === 401 || code === 403) {
                userStore.setInfo({});
                userStore.setToken('');
                userStore.setRefreshToken('');
                userStore.setCloudCodeIsBind(false);
                userStore.setcurStepIndex(1);
                router.push('/login');
                return;
            } else if (code === 420 && response.config.url?.indexOf('/api_accounts') > -1) {
                let res = await refreshToken();
                if (res && res.data && res.data.access_token) {
                    let token = res.data.access_token;
                    let type = res.data.token_type;
                    token = type + ' ' + token;
                    userStore.setToken(token);
                    let res2 = await user();
                    if (res2.data) {
                        userStore.setInfo(res2.data);
                    }
                    window.localStorage.setItem('last_refresh_token', token);
                    return service(response.config);
                } else {
                    userStore.setInfo({});
                    userStore.setToken('');
                    userStore.setRefreshToken('');
                    userStore.setCloudCodeIsBind(false);
                    router.push('/login');
                    return;
                }
            } else {
                return res;
            }
        } else {
            return res;
        }
    },
    (error: AxiosError) => {
        if (error.config.url?.indexOf('/v1/chain/get_account') > -1) {
            return error;
        }
        console.log('err' + error);
        if (ignoreUrl.indexOf(error.config.url) > -1) {
            return Promise.reject(error.message);
        }
        return Promise.reject(error.message);
    },
);

export const http = {
    get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
        return service.get(url, config);
    },

    post<T = any>(url: string, data?: object, config?: AxiosRequestConfig): Promise<T> {
        return service.post(url, data, config);
    },

    put<T = any>(url: string, data?: object, config?: AxiosRequestConfig): Promise<T> {
        return service.put(url, data, config);
    },

    delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
        return service.delete(url, config);
    },
};

export default service;

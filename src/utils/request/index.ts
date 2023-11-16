import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { showToast } from '@nutui/nutui';
import '@nutui/nutui/dist/packages/toast/style';
import Qs from 'qs';
import { useUserStore } from '@/store/modules/user';
import { useRouter } from 'vue-router';
import { refreshToken, user } from '@/api';
import ignoreUrl from './ignoreUrl';
const router = useRouter();

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
    return config;
  },
  (_error: AxiosError) => {},
);

service.interceptors.response.use(
  async (response: AxiosResponse) => {
    const userStore = useUserStore();

    const res = response.data;
    const code = res.code;
    if (response.config.url?.indexOf('/v1/chain/get_account') > -1) {
      return res;
    }
    if (code !== 200) {
      if (ignoreUrl.indexOf(response.config.url) > -1) {
      } else {
        showToast.fail(res.error || res.msg || res.message || 'Network error. Please try again.');
      }
      if (code === 401 || code === 403) {
        userStore.setInfo({});
        userStore.setToken('');
        userStore.setCloudCodeIsBind(false);
        router.push('/login');
        return;
      } else if (code === 420) {
        // let res = await refreshToken();
        // if (res && res.data && res.data.access_token) {
        //   let token = res.data.access_token;
        //   let type = res.data.token_type;
        //   token = type + ' ' + token;
        //   userStore.setToken(token);
        //   let res2 = await user();
        //   if (res2.data) {
        //     userStore.setInfo(res2.data);
        //   }
        //   window.localStorage.setItem('last_refresh_token', token);
        //   // setToken(token);
        //   return service(response.config);
        // } else {
        userStore.setInfo({});
        userStore.setToken('');
        userStore.setCloudCodeIsBind(false);
        router.push('/login');
        return;
        // }
      } else {
        if (ignoreUrl.indexOf(response.config.url) > -1) {
          return res;
        }
        // showToast.fail(res.message);
        // return Promise.reject(res);
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
    showToast.fail(error.message);
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

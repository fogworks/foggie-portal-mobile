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

    if (config.url && config.url.indexOf('/api/accounts/login') > -1) {
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
    if (code !== 200) {
      if (ignoreUrl.indexOf(response.config.url) > -1) {
      } else {
        showToast.fail(res.error || 'error');
      }
      if (code == 30015 || code == 30048 || code == 30050 || code == 30033) {
      } else if (response.config.url?.indexOf('/v1') == 0) {
        // return Promise.resolve(res.rows[0].benchmark_price)
        return res.rows[0].benchmark_price;
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

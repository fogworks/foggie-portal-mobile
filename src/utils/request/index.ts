import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { showToast } from 'vant';
import Qs from 'qs';
  import { useUserStore } from '@/store/modules/user';
const userStore  =useUserStore()

const service: AxiosInstance = axios.create({
  withCredentials: false,
  timeout: 10000,
});

service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    if (config.url && config.url.indexOf('/api/accounts/login') > -1) {
      config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
      config.data = Qs.stringify(config.data);
    }
    const refresh_token = userStore.getToken
    config.headers['Authorization'] = refresh_token;
    return config;
  },
  (_error: AxiosError) => {},
);

service.interceptors.response.use(
  (response: AxiosResponse) => {
    const res = response.data;
    if (res.code !== 200) {
      if (response.config.url?.indexOf('/v1') == 0) {
        // return Promise.resolve(res.rows[0].benchmark_price)
      return res.rows[0].benchmark_price
      }
      showToast(res.msg);
      return Promise.reject(res || 'Error');
    } else {
      return res;
    }
  },
  (error: AxiosError) => {
    console.log('err' + error);
    showToast(error.message);
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

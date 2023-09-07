import { http } from '@/utils/request';

/**
 * 账号密码登录
 * @returns UseAxiosReturn
 */
export function loginPassword(data: any) {
  return http.post(`/api/accounts/login`, {
    data,
  });
}

import { http } from '@/utils/request';

/**
 * 账号密码登录
 * @returns UseAxiosReturn
 */
export function loginPassword(data: undefined) {
  return http.get(`/api/login`, {
    data,
  });
}

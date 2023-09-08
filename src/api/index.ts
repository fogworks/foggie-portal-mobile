import request,{ http } from '@/utils/request';

export function login(data: object) {
  return http.post(`/api/accounts/login`, {
    ...data,
  });
}

export function Captcha() {
  return http.get(`/api/accounts/captcha`, {
  });
}

export function check_email_register(email: string) {
  return http.get(`/api/accounts/check_email_register?email=${email}`, {
  });
}
export const get_verify_pw = (params:object) => {
  return request({
    url: `/api/accounts/get_verify_pw`,
    method: "get",
    params,
  });
};
export const register = (data:object) => {
  return request({
    url: `/api/accounts/user`,
    method: "POST",
    data,
  });
};

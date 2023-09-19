import request, { http } from '@/utils/request';

export function login(data: object) {
  return http.post(`/api_accounts/accounts/login`, {
    ...data,
  });
}

export function Captcha() {
  return http.get(`/api/accounts/captcha`, {});
}

export function check_email_register(email: string) {
  return http.get(`/api/accounts/check_email_register?email=${email}`, {});
}
export const get_verify_pw = (params: object) => {
  return request({
    url: `/api_accounts/accounts/get_verify_pw`,
    method: 'get',
    params,
  });
};
export const register = (data: object) => {
  return request({
    url: `/api_accounts/accounts/user`,
    method: 'POST',
    data,
  });
};

export function user() {
  return http.get(`/api_accounts/accounts/info`, {});
}

export const modify_pw = (data) => {
  const url = `/api/accounts/modify_pw`;
  return request({
    url: url,
    method: 'POST',
    data,
  });
};

export function getCurReferenceRate() {
  return request({
    url: '/v1/chain/get_table_rows',
    method: 'POST',
    data: JSON.stringify({ json: true, code: 'dmc.token', scope: 'dmc.token', table: 'bcprice' }),
  });
}

export const updateUser = (id, data) => {
  return request({
    url: `/api_accounts/accounts/user/${id}`,
    method: 'PUT',
    data: data,
  });
};

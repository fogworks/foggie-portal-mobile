import request, { http } from '@/utils/request';

export function login(data: object) {
  return http.post(`/api_accounts/accounts/login`, {
    ...data,
  });
}

export function Captcha() {
  return http.get(`/api/accounts/captcha`, {});
}
export function transfer_valid(data) {
  return request({
    url: '/assets/transfer_valid',
    method: 'POST',
    data,
  });
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
export const refreshToken = () => {
  return request({
    url: `/api/accounts/refresh_token`,
    method: 'POST',
  });
};

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
export const file_delete = (token, item, deviceData) => {
  let objects: Array<any> = [];
  let prefixes: Array<any> = [];
  let cids: Array<any> = [];
  for (let i = 0; i < item.length; i++) {
    if (item[i].type == 'application/x-directory') {
      prefixes.push(item[i].key);
    } else {
      objects.push({
        pubkey: item[i].pubkey ? item[i].pubkey : encodeURIComponent(item[i].key),
      });
      cids.push(item[i].cid);
    }
  }
  let object_type = 'normal';
  let url = `/file_delete`;
  let data = {
    deviceData,
    cids,
    objects,
    object_type,
    token,
    prefixes,
  };
  return request({
    url: url,
    method: 'DELETE',
    data,
  });
};
//ipns publish list
export const file_pin = (data) => {
  let url = `/file/pin`;
  return request({
    url: url,
    method: 'POST',
    data: data,
  });
};
export const files_download = (params) => {
  let url = `/files_download`;
  return request({
    url: url,
    method: 'GET',
    params,
  });
};
export const rename_objects = (data) => {
  let url = `/rename_objects`;
  return request({
    url: url,
    method: 'POST',
    data,
  });
};
export const get_timeline = (data) => {
  let url = `/get_timeline`;
  return request({
    url: url,
    method: 'POST',
    data,
  });
};
export const touch_file = (data) => {
  let url = `/touch_file`;
  return request({
    url: url,
    method: 'POST',
    data,
  });
};
export const file_download = (params) => {
  let url = `/file_download`;
  return request({
    url: url,
    method: 'get',
    params,
  });
};
export const search_cloud = () => {
  return request({
    url: `/ambmgr/order/get_order`,
    method: 'GET',
  });
};
export const get_unique_order = (params) => {
  return request({
    url: `/ambmgr/order/get_unique_order`,
    method: 'GET',
    params,
  });
};

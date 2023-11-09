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
  return http.get(`/api_accounts/accounts/check_email_register?email=${email}`, {});
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
    url: `/api_accounts/accounts/refresh_token`,
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
export const search_cloud = (data) => {
  return request({
    url: `/ambmgr/order/get_order`,
    method: 'POST',
    data,
  });
};
export const get_unique_order = (params) => {
  return request({
    url: `/ambmgr/order/get_unique_order`,
    method: 'GET',
    params,
  });
};

export const check_name = (bucketName: any) => {
  return request({
    url: `/api/vps/check_name?domain=${bucketName}`,
    method: 'GET',
  });
};

export const miner_name_set = (data: any, token: any) => {
  let url = `/api/v1/minerConsumer/name_set`;
  return request({
    url: url,
    method: 'POST',
    data,
    headers: {
      token,
    },
  });
};

export const order_name_set = (data: any) => {
  let url = `/ambmgr/order/name_set`;
  return request({
    url: url,
    method: 'POST',
    data,
  });
};

export const search_bill = (memo: any, order_id: any) => {
  let url = `/bcmgr/bill/search_bill?memo=${memo}&order_id=${order_id}`;
  return request({
    url: url,
    method: 'GET',
  });
};

export const download_url = (url: any, headers: any) => {
  return request({
    url: url,
    method: 'GET',
    headers,
  });
};
export const check_promo = (params) => {
  return request({
    url: `/api_accounts/accounts/check_promo`,
    method: 'GET',
    params,
  });
};
export const bind_user_promo = (data) => {
  return request({
    url: `/api_accounts/accounts/bind_user_promo`,
    method: 'POST',
    data,
  });
};

export const calc_merkle = (data: any) => {
  return request({
    url: `/order/calc_merkle`,
    method: 'POST',
    data,
  });
};

export const save_upload = (data: any) => {
  return request({
    url: `/file/save_upload`,
    method: 'POST',
    data,
  });
};

export const get_merkle = (data: any) => {
  return request({
    url: `/order/get_merkle`,
    method: 'POST',
    data,
  });
};

export const valid_upload = (data: any) => {
  return request({
    url: `/file/valid_upload`,
    method: 'POST',
    data,
  });
};

export const get_merkle_record = (data: any) => {
  return request({
    url: `/order/get_merkle_record`,
    method: 'POST',
    data,
  });
};
export const get_challenge = (data) => {
  return request({
    url: `/ambmgr/order/get_challenge`,
    method: 'GET',
    params: data,
  });
};
export const get_arbitration = (data) => {
  return request({
    url: `/ambmgr/order/get_arbitration`,
    method: 'GET',
    params: data,
  });
};

export const checkDmcAccount = (data) => {
  return request({
    url: `/v1/chain/get_account`,
    method: 'POST',
    data,
  });
};
export const getLink = (data) => {
  return request({
    url: `/link/get`,
    method: 'POST',
    data,
  });
};

export const get_reCAPTCHA_Score_API = (data) => {
  // let url = `/recaptcha/api/siteverify`;
  // let url = `/recaptcha/api/siteverify`;
  let url = `/reCAPTCHA_verification/recaptcha/api/siteverify`;

  return request({
    url: url,
    method: "POST",
    data,
    timeout:60000,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
};


export const get_order_sign = (data) => {
  return request({
    url: `/ambmgr/order/get_order_sign`,
    method: 'GET',
    params: data,
  });
};

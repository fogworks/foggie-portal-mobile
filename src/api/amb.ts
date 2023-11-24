import request from '@/utils/request';
import typeApi from '@/typeApi.js';
const { apiUrl, nodeUrl } = typeApi();
export function bind_promo(data) {
  return request({
    url: `${apiUrl}/ambmgr/user/bind_promo`,
    method: 'POST',
    data,
  });
}

export function check_user_bind(uuid) {
  return request({
    url: `${apiUrl}/ambmgr/user/check_user_bind`,
    method: 'GET',
    params: {
      uuid,
    },
  });
}
export function check_promo(promo_code) {
  return request({
    url: `${apiUrl}/ambmgr/user/check_promo`,
    method: 'GET',
    params: {
      promo_code,
    },
  });
}
export function get_amb_dmc() {
  return request({
    url: `${apiUrl}/ambmgr/user/get_amb_dmc`,
    method: 'GET',
  });
}
export function buy_order(data) {
  return request({
    url: `${apiUrl}/ambmgr/order/buy_order`,
    method: 'POST',
    data,
  });
}
export function get_order_node(uuid) {
  return request({
    url: `${apiUrl}/ambmgr/order/get_order_node`,
    method: 'GET',
    params: {
      uuid,
    },
  });
}

export function get_user_dmc() {
  return request({
    url: `${apiUrl}/ambmgr/asset/get_user_dmc`,
    method: 'GET',
  });
}
export function user_withdraw(data) {
  return request({
    url: `${apiUrl}/ambmgr/asset/user_withdraw`,
    method: 'POST',
    data,
  });
}
export function node_order_buy(ip, data) {
  return request({
    url: nodeUrl + '/order/buy',
    method: 'POST',
    data,
  });
}
export function order_buy_state(ip, data) {
  return request({
    url: nodeUrl + '/order/get_buy_order_status',
    method: 'POST',
    data,
  });
}
export const closedOrderApi = (data) => {
  return request({
    url: nodeUrl + `/order/cancel`,
    method: 'POST',
    data,
  });
};

export function node_order_search(ip, data) {
  return request({
    url: nodeUrl + '/order/search',
    method: 'POST',
    data,
  });
}
export function get_average_price(ip, data) {
  return request({
    url: nodeUrl + '/order/get_average_price',
    method: 'POST',
    data,
  });
}
export function tag_mobile_upload(ip, data) {
  return request({
    url: nodeUrl + '/order/tag_mobile_upload',
    method: 'POST',
    data,
  });
}
export function user_recharge(data) {
  return request({
    url: `${apiUrl}/ambmgr/asset/user_recharge`,
    method: 'POST',
    data,
  });
}
export function node_order_buy_assign_bill(ip, data) {
  return request({
    url: nodeUrl + '/order/buy_assign_bill',
    method: 'POST',
    data,
  });
}
export function get_user_withdraw(data) {
  return request({
    url: `${apiUrl}/ambmgr/asset/get_user_withdraw?pn=${data.pn}&ps=${data.ps}`,
    method: 'POST',
    data,
  });
}
export function get_user_recharge(data) {
  return request({
    url: `${apiUrl}/ambmgr/asset/get_user_recharge?pn=${data.pn}&ps=${data.ps}`,
    method: 'POST',
    data,
  });
}
export function pst_profit() {
  return request({
    url: `${apiUrl}/ambmgr/common/pst_profit`,
    method: 'GET',
  });
}
export function search_user_asset(data) {
  return request({
    url: `${apiUrl}/ambmgr/asset/search_user_asset`,
    method: 'POST',
    data,
  });
}
export function get_otp() {
  return request({
    url: `${apiUrl}/ambmgr/asset/get_otp`,
    method: 'GET',
    // headers: {
    //   UserType: 'amb',
    // },
  });
}
export function verify_otp_token(data) {
  return request({
    url: `${apiUrl}/ambmgr/asset/verify_otp_token`,
    method: 'POST',
    data,
  });
}
export function withdraw_otp(data) {
  return request({
    url: `${apiUrl}/ambmgr/asset/withdraw_otp`,
    method: 'POST',
    data,
  });
}
export function check_bind_otp() {
  return request({
    url: `${apiUrl}/ambmgr/asset/check_bind_otp`,
    method: 'GET',
  });
}
export function get_commission_rate() {
  return request({
    url: `${apiUrl}/ambmgr/ambuser/get_commission_rate`,
    method: 'GET',
  });
}

export function search_order_profit(data) {
  return request({
    url: `${apiUrl}/ambmgr/order/search_order_profit`,
    method: 'POST',
    data,
  });
}
export function update_order_size(data) {
  return request({
    url: `${apiUrl}/ambmgr/order/update_order_size`,
    method: 'POST',
    data,
  });
}
export function query_node() {
  return request({
    url: `${apiUrl}/ambmgr/node/query_node`,
    method: 'GET',
    params: {
      ps: 10,
      pn: 1,
    },
  });
}

export function search_user_asset_detail(data) {
  return request({
    url: `${apiUrl}/ambmgr/asset/search_user_asset_detail?ps=${data.ps}&pn=${data.pn}`,
    method: 'POST',
    data,
  });
}
export function get_exchange_rate() {
  return request({
    url: `${apiUrl}/ambmgr/common/get_exchange_rate`,
    method: 'GET',
  });
}

export function sync_challenge(data) {
  return request({
    url: nodeUrl + `/order/sync_challenge`,
    method: 'POST',
    data,
  });
}

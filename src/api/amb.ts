import request from '@/utils/request';

export function bind_promo(data) {
  return request({
    url: '/ambmgr/user/bind_promo',
    method: 'POST',
    data,
  });
}

export function check_user_bind(uuid) {
  return request({
    url: '/ambmgr/user/check_user_bind',
    method: 'GET',
    params: {
      uuid,
    },
  });
}
export function check_promo(promo_code) {
  return request({
    url: '/ambmgr/user/check_promo',
    method: 'GET',
    params: {
      promo_code,
    },
  });
}
export function get_amb_dmc() {
  return request({
    url: '/ambmgr/user/get_amb_dmc',
    method: 'GET',
  });
}
export function buy_order(data) {
  return request({
    url: '/ambmgr/order/buy_order',
    method: 'POST',
    data,
  });
}
export function get_order_node(uuid) {
  return request({
    url: '/ambmgr/order/get_order_node',
    method: 'GET',
    params: {
      uuid,
    },
  });
}

export function get_user_dmc() {
  return request({
    url: '/ambmgr/asset/get_user_dmc',
    method: 'GET',
  });
}
export function user_withdraw() {
  return request({
    url: '/ambmgr/asset/user_withdraw',
    method: 'GET',
  });
}
export function node_order_buy(ip, data) {
  return request({
    url: ip + '/order/buy',
    method: 'POST',
    data,
  });
}
export function node_order_search(ip, data) {
  return request({
    url: ip + '/order/search',
    method: 'POST',
    data,
  });
}
export function get_average_price(ip, data) {
  return request({
    url: ip + '/order/get_average_price',
    method: 'POST',
    data,
  });
}
export function user_recharge(data) {
  return request({
    url: '/ambmgr/asset/user_recharge',
    method: 'POST',
    data,
  });
}
export function node_order_buy_assign_bill(ip, data) {
  return request({
    url: ip + '/order/buy_assign_bill',
    method: 'POST',
    data,
  });
}
export function get_user_withdraw(data) {
  return request({
    url: '/ambmgr/asset/get_user_withdraw',
    method: 'POST',
    data,
  });
}
export function get_user_recharge(data) {
  return request({
    url: '/ambmgr/asset/get_user_recharge',
    method: 'POST',
    data,
  });
}
export function pst_profit() {
  return request({
    url: '/ambmgr/common/pst_profit',
    method: 'GET',
  });
}
export function search_user_asset(data) {
  return request({
    url: '/ambmgr/asset/search_user_asset',
    method: 'POST',
    data,
  });
}
export function get_otp() {
  return request({
    url: '/ambmgr/asset/get_otp',
    method: 'GET',
    // headers: {
    //   UserType: 'amb',
    // },
  });
}
export function verify_otp_token(data) {
  return request({
    url: '/ambmgr/asset/verify_otp_token',
    method: 'POST',
    data,
  });
}
export function withdraw_otp(data) {
  return request({
    url: '/ambmgr/asset/withdraw_otp',
    method: 'POST',
    data,
  });
}
export function check_bind_otp() {
  return request({
    url: '/ambmgr/asset/check_bind_otp',
    method: 'GET',
  });
}
export function get_commission_rate() {
  return request({
    url: '/ambmgr/ambuser/get_commission_rate',
    method: 'GET',
  });
}

export function search_order_profit(data) {
  return request({
    url: '/ambmgr/order/search_order_profit',
    method: 'POST',
    data,
  });
}

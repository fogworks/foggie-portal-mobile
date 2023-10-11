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
export function user_recharge(data) {
  return request({
    url: '/ambmgr/asset/user_recharge',
    method: 'POST',
    data,
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

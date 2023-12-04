import typeApi from '@/typeApi.js';
const { apiUrl, shareUrl, chainUrl, nodeUrl, webUrl } = typeApi();
export default [
  `${apiUrl}/ambmgr/user/check_promo`,
  `${apiUrl}/api_accounts/accounts/check_promo`,
  `${nodeUrl}/order/calc_merkle`,
  `${chainUrl}/v1/chain/get_account`,
  `${apiUrl}/reCAPTCHA_verification/recaptcha/api/siteverify`,
  `${apiUrl}/ambmgr/order/name_set`,
  `${nodeUrl}/file/valid_upload`,
];

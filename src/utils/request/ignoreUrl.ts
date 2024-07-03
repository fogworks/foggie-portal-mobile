import typeApi from '@/typeApi.js';
const { apiUrl, shareUrl, chainUrl, nodeUrl, webUrl, mscUrl } = typeApi();
export default [
    `${apiUrl}/ambmgr/user/check_promo`,
    `${apiUrl}/api_accounts/accounts/check_promo`,
    `${nodeUrl}/ambnode/order/calc_merkle`,
    `${chainUrl}/v1/chain/get_account`,
    `${apiUrl}/reCAPTCHA_verification/recaptcha/api/siteverify`,
    `${apiUrl}/ambmgr/order/name_set`,
    `${nodeUrl}/ambnode/file/valid_upload`,
    `${mscUrl}/msc/chain/unbind_valid`,
    `${mscUrl}/msc/chain/unbind`
];

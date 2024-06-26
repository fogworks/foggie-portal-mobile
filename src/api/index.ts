import request, { http } from '@/utils/request';
import typeApi from '@/typeApi.js';
const { apiUrl, vpsUrl, shareUrl, chainUrl, nodeUrl, webUrl, mscUrl } = typeApi();
export function login(data: object) {
    return http.post(`${apiUrl}/api_accounts/accounts/login`, {
        ...data,
    });
}

export function Captcha() {
    return http.get(`/api/accounts/captcha`, {});
}
export function transfer_valid(data) {
    return request({
        url: `${apiUrl}/assets/transfer_valid`,
        method: 'POST',
        data,
    });
}
export function check_email_register(email: string) {
    return http.get(`${apiUrl}/api_accounts/accounts/check_email_register?email=${email}`, {});
}
export const get_verify_pw = (params: object) => {
    return request({
        url: `${apiUrl}/api_accounts/accounts/get_verify_pw`,
        method: 'get',
        params,
    });
};
export const register = (data: object) => {
    return request({
        url: `${apiUrl}/api_accounts/accounts/user`,
        method: 'POST',
        data,
    });
};

export function user() {
    return http.get(`${apiUrl}/api_accounts/accounts/info`, {});
}
export const refreshToken = () => {
    return request({
        url: `${apiUrl}/api_accounts/accounts/refresh_token`,
        method: 'POST',
    });
};

export const modify_pw = (data) => {
    const url = `${apiUrl}/api_accounts/accounts/modify_pw`;
    return request({
        url: url,
        method: 'POST',
        data,
    });
};

export const updateUser = (id, data) => {
    return request({
        url: `${apiUrl}/api_accounts/accounts/user/${id}`,
        method: 'PUT',
        data: data,
    });
};

export const search_cloud = (data) => {
    return request({
        url: `${apiUrl}/ambmgr/order/get_order?pn=${data.pn}&ps=${data.ps}`,
        method: 'POST',
        data,
    });
};
export const get_unique_order = (params) => {
    return request({
        url: `${apiUrl}/ambmgr/order/get_unique_order`,
        method: 'GET',
        params,
    });
};

export const check_name = (bucketName: any) => {
    return request({
        url: `${apiUrl}/api/vps/check_name?domain=${bucketName}`,
        method: 'GET',
    });
};

export const order_name_set = (data: any) => {
    let url = `${apiUrl}/ambmgr/order/name_set`;
    return request({
        url: url,
        method: 'POST',
        data,
    });
};

// export const search_bill = (memo: any, order_id: any) => {
//   let url = `/bcmgr/bill/search_bill?memo=${memo}&order_id=${order_id}`;
//   return request({
//     url: url,
//     method: 'GET',
//   });
// };

export const check_promo = (params) => {
    return request({
        url: `${apiUrl}/api_accounts/accounts/check_promo`,
        method: 'GET',
        params,
    });
};
export const bind_user_promo = (data) => {
    return request({
        url: `${apiUrl}/api_accounts/accounts/bind_user_promo`,
        method: 'POST',
        data,
    });
};

export const calc_merkle = (data: any) => {
    return request({
        url: `${nodeUrl}/ambnode/order/calc_merkle`,
        method: 'POST',
        data,
    });
};

export const save_upload = (data: any) => {
    return request({
        url: `${nodeUrl}/ambnode/file/save_upload`,
        method: 'POST',
        data,
    });
};

export const get_merkle = (data: any) => {
    return request({
        url: `${nodeUrl}/ambnode/order/get_merkle`,
        method: 'POST',
        data,
    });
};

export const valid_upload = (data: any) => {
    return request({
        url: `${nodeUrl}/ambnode/file/valid_upload`,
        method: 'POST',
        data,
    });
};

export const get_merkle_record = (data: any) => {
    return request({
        url: `${nodeUrl}/ambnode/order/get_merkle_record`,
        method: 'POST',
        data,
    });
};
export const get_challenge = (data) => {
    return request({
        url: `${apiUrl}/ambmgr/order/get_challenge`,
        method: 'GET',
        params: data,
    });
};
export const get_arbitration = (data) => {
    return request({
        url: `${apiUrl}/ambmgr/order/get_arbitration`,
        method: 'GET',
        params: data,
    });
};

export const checkDmcAccount = (data) => {
    return request({
        url: `${chainUrl}/v1/chain/get_account`,
        method: 'POST',
        data,
    });
};
export const getLink = (data) => {
    return request({
        url: `${shareUrl}/link/get`,
        method: 'POST',
        data,
    });
};

export const get_reCAPTCHA_Score_API = (data) => {
    // let url = `/recaptcha/api/siteverify`;
    // let url = `/recaptcha/api/siteverify`;
    let url = `${apiUrl}/reCAPTCHA_verification/recaptcha/api/siteverify`;
    // let url = `https://www.recaptcha.net/recaptcha/api/siteverify`;
    return request({
        url: url,
        method: 'POST',
        data,
        timeout: 60000,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    });
};

export const get_order_sign = (data) => {
    return request({
        url: `${apiUrl}/ambmgr/order/get_order_sign`,
        method: 'GET',
        params: data,
    });
};
export function setUserAvatarApi(data) {
    return request({
        url: `${apiUrl}/api_accounts/accounts/upload_user_image`,
        method: 'POST',
        headers: {
            'Content-Type': 'multipart/form-data',
        },
        data,
    });
}
export function generate_nonce(params) {
    return request({
        url: `${apiUrl}/api_accounts/accounts/generate_nonce`,
        method: 'GET',
        params,
    });
}
export function wallet_login(data) {
    return request({
        url: `${apiUrl}/api_accounts/accounts/wallet_login`,
        method: 'POST',
        data,
    });
}
export function check_wallet(params) {
    return request({
        url: `${apiUrl}/api_accounts/accounts/check_wallet`,
        method: 'GET',
        params,
    });
}
export function wallet_register(data) {
    return request({
        url: `${apiUrl}/api_accounts/accounts/wallet_register`,
        method: 'POST',
        data,
    });
}
export const wallet_bind_email = (data: any) => {
    let url = `${apiUrl}/api_accounts/accounts/wallet_bind_email`;
    return request({
        url: url,
        method: 'POST',
        data,
    });
};
export const wallet_bind_uuid = (data: any) => {
    let url = `${apiUrl}/api_accounts/accounts/wallet_bind_uuid`;
    return request({
        url: url,
        method: 'POST',
        data,
    });
};

export const search_mint = (data: any, ps: any, pn: any) => {
    let url = `${apiUrl}/nft_scanner/nft/search_mint?ps=${ps}&pn=${pn}`;
    return request({
        url: url,
        method: 'POST',
        data,
    });
};

export const search_deploy = (data: any, ps: any, pn: any) => {
    let url = `${apiUrl}/nft_scanner/nft/search_deploy?ps=${ps}&pn=${pn}`;
    return request({
        url: url,
        method: 'POST',
        data,
    });
};

export const oauth_url = (data) => {
    return request({
        url: `${apiUrl}/api_accounts/accounts/oauth_url`,
        method: 'POST',
        data,
    });
};

export const update_nft_sync = (data: any) => {
    let url = `/nft_scanner/nft/update_nft_sync`;
    return request({
        url: url,
        method: 'POST',
        data,
    });
};

/* 生成签名 */
export const generate_signInfoAPi = (publicKey: string) => {
    return request({
        url: `/generate_sign/${publicKey}`,
        method: 'GET',
        timeout: 100000,
    });
};

/* 更新签名 */
export const update_signInfoAPi = (publicKey: string, data: any) => {
    return request({
        url: `/session/${publicKey}`,
        method: 'PUT',
        timeout: 100000,
        headers: {
            'Content-Type': 'application/json',
        },
        data,
    });
};
export const search_max = (data) => {
    return request({
        url: `${vpsUrl}/api/vps/search_max?pn=${data.pn}&ps=${data.ps}`,
        method: 'GET',
    });
};
export const get_vood_token = (params) => {
    let url = `${vpsUrl}/api/accounts/get_vood_token`;
    return request({
        url: url,
        method: 'get',
        params,
    });
};
export const searchDeviceEarningsAPI = (data) => {
    let url = `${apiUrl}/ambmgr/asset/search_device_asset`;
    return request({
        url: url,
        method: "POST",
        data,
    });
};

export const deviceEstimateProfit = (data, controller) => {
    let url = `${apiUrl}/ambmgr/asset/device_estimate_profit`;
    return request({
        url: url,
        method: "POST",
        signal: controller ? controller.signal : false,
        data,
    });
};


export const campaignCenterChain = (data) => {
    let url = `${mscUrl}/msc/campaign/center/chain`;
    return request({
        url: url,
        method: "post",
        data,
    });
}
export const campaignCenterList = (data) => {
    let url = `${mscUrl}/msc/campaign/center/campaign_list`;
    return request({
        url: url,
        method: "post",
        data,
    });
}
export const campaignNew = (data) => {
    let url = `${mscUrl}/msc/campaign/center/current_end_campaign`;
    return request({
        url: url,
        method: "post",
        data,
    });
}
export function getAirdropDes() {
    let url = `${mscUrl}/msc/global/airdrop/desc/get`;
    return request({
        url: url,
        method: "get",
    });
}
export function get_campaignApply(data) {
    let url = `${mscUrl}/msc/campaign/apply/get`;
    return request({
        url: url,
        method: "post",
        data,
    });
}
export function get_campaignDetail(data) {
    let url = `${mscUrl}/msc/campaign/detail/get`;
    return request({
        url: url,
        method: "post",
        data,
    });
}
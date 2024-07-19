import { ref, onMounted, nextTick } from 'vue'

import {
    wallet_login,
    check_wallet,
    wallet_register,
    updateUser,
    user,
} from '@/api';
import { useUserStore } from '@/store/modules/user';
import { useRouter, useRoute } from 'vue-router';
import { showToast } from '@nutui/nutui';
import loadingImg from '@/components/loadingImg/index.vue';
export default function DMCWalletLogin() {
    const userStore = useUserStore();
    const router = useRouter();
    const isHasDmcwallet = ref(false);

  async  function dmcWalletLogin() {
      await  window.dmcwallet.getAccount((error, result) => {
            if (error) {
                // 如果报错，则对错误进⾏捕获并处理
            } else {
                // result 即为正确的 account 信息
                window.dmcwallet.signature(`${result.account_name}@active`, (error, res) => {
                    if (error) {
                    } else {
                        const account = result.account_name;
                        const sign = res.result;
                        check_wallet({ address: account, wallet_type: 'dmc' })
                            .then(async (res_) => {
                                if (res_.data.max_bind) {
                                    walletLogin(null, true);
                                } else if (res_.data.register || res_.data.bind  ) {
                                    walletLogin(null, null);
                                } else {
                                    wallet_register({ address: account, wallet_type: 'dmc' }).then((res) => {
                                        walletLogin(res.data.id, null);
                                    });
                                }
                            })
                            .catch((error) => {
                                window.alert(error);
                            });

                        function walletLogin(ID = null, max_bind: any) {
                            showToast.loading('Connecting', {
                                cover: true,
                                customClass: 'app_loading',
                                coverColor: 'rgba(0,0,0,0.45)',
                                icon: loadingImg,
                                loadingRotate: false,
                                id: 'login',
                                duration: 0,
                            });


                            wallet_login({ address: account, wallet_type: 'dmc', sign: sign })
                                .then((res) => {
                                    if (res.code == 200) {
                                        let data = res.data;
                                        let token = data.token_type + ' ' + data.access_token;
                                        let refresh_token = data.token_type + ' ' + data.refresh_token;
                                        let user_id = data.user_id;
                                        if (user_id && user_id != window.localStorage.getItem('user_id')) {
                                            window.localStorage.removeItem('homeChooseBucket');
                                        }
                                        window.localStorage.setItem('user_id', user_id);

                                        userStore.setToken(token);
                                        userStore.setRefreshToken(refresh_token);
                                        if (max_bind) {
                                            userStore.setMaxBind(true);
                                            userStore.setMaxWallet(account);
                                        } else {
                                            userStore.setMaxBind(false);
                                        }

                                        if (ID) {
                                            nextTick(() => {
                                                let postData = {
                                                    dmc: account,
                                                    wallet_type: 'wallet',
                                                };
                                                updateUser(ID, postData);
                                            });
                                        }

                                        router.push({ path: '/home' });
                                    } else {
                                        showToast.text(JSON.stringify(res), {
                                            duration: 2000,
                                        });
                                    }
                                })
                                .catch((error) => {
                                    showToast.text(JSON.stringify(error), {
                                        duration: 2000,
                                    });

                                }).finally((() => {
                                    showToast.hide('login');
                                }))
                        }
                    }
                });
            }
        });

        return;
        const dmcNetwork = {
            //   blockchain: 'dmc',
            //   protocol: 'http',
            //   chainId: '50365544da7848f03cb0a346770086b72e6d80e4a37ae0003d661e43c4ca4f6a',
            //   host: '154.64.7.46',
            //   port: '80',
            blockchain: 'dmc',
            protocol: 'https',
            chainId: '4d1fb981dd562d2827447dafa89645622bdcd4e29185d60eeb45539f25d2d85d',
            host: 'explorer.dmctech.io',
            port: '443',
        };

        window.dmcironman
            .getIdentity({ accounts: [dmcNetwork], sign: true })
            .then((response) => {
                const account = response.accounts.find((item) => item.authority == 'active');
                check_wallet({ address: account.name, wallet_type: 'dmc' }).then((res_) => {
                    if (res_.data.register || res_.data.bind) {

                        walletLogin();
                    } else {

                        wallet_register({ address: account.name, wallet_type: 'dmc' }).then((res_) => {
                            if (res_.code == 200) {
                                walletLogin(res_.data.id);
                            }
                        });
                    }
                });

                function walletLogin(ID) {
                    wallet_login({ address: account.name, wallet_type: 'dmc', sign: response.sign }).then((res) => {
                        let data = res.data;
                        let token = data.token_type + ' ' + data.access_token;
                        let refresh_token = data.token_type + ' ' + data.refresh_token;
                        let user_id = data.user_id;
                        if (user_id && user_id != window.localStorage.getItem('user_id')) {
                            window.localStorage.removeItem('homeChooseBucket');
                        }
                        window.localStorage.setItem('user_id', user_id);


                        userStore.setToken(token);
                        userStore.setRefreshToken(refresh_token);
                        if (ID) {
                            nextTick(() => {
                                let postData = {
                                    dmc: account.name,
                                    wallet_type: 'wallet',
                                };
                                updateUser(ID, postData);
                            });
                        }

                        router.push({
                            path: '/home',
                        });
                    });
                }
            })
            .catch((error) => { });
    }




    onMounted(() => {
        if (window.dmcwallet) {
            isHasDmcwallet.value = true;
        } else {
            window.addEventListener('sdkReady', () => {
                isHasDmcwallet.value = true;
            });
        }
    })
    return {
        isHasDmcwallet,
        dmcWalletLogin,
    };
}

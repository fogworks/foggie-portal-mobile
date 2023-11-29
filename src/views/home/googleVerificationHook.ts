import { check_bind_otp, setIsVerifiedAPI, getIsVerifiedAPI, get_otp, verify_otp_token, withdraw_otp } from '@/api/amb';
import { ref, createVNode, onMounted } from 'vue';
import { useUserStore } from '@/store/modules/user';

import { showDialog } from '@nutui/nutui';
import '@nutui/nutui/dist/packages/dialog/style';
import { showNotify } from '@nutui/nutui';
import '@nutui/nutui/dist/packages/notify/style';
import { showToast } from '@nutui/nutui';
import '@nutui/nutui/dist/packages/toast/style';
const userStore = useUserStore();
export default function googleVerificationHook() {
    const cloudCodeIsBind = computed(() => userStore.getCloudCodeIsBind);

    watch(() => cloudCodeIsBind.value, async (newValue) => {
        if (newValue) {
            await loadCheckBindOtp();
            loadIsVerified();
        }
    }, { immediate: true })




    const withdrawalIsVerified = ref<boolean>(true); // 是否开启校验
    const googleVerificationVisible = ref<boolean>(false); // 校验弹窗

    const withdrawalIsVerifiedLoadding = ref<boolean>(false); // 是否开启校验 swtich

    /*切换是否开启绑定google校验 */
    function changeIsVerified(value) {
        if (bindOtp.value) {
            showNotify.text(`You can't turn off checksums if you're already bound.`, { color: '#ad0000', background: '#ffe1e1' });
            return;
        }
        withdrawalIsVerifiedLoadding.value = true
        setIsVerifiedAPI({ set_otp: value })
            .then((res) => {
                if (res.code == 200) {
                    withdrawalIsVerified.value = value;
                    if (value) {
                        loadOTPImg()
                    }


                    // showToast.success(res.result);


                }
            }).finally(() => {
                withdrawalIsVerifiedLoadding.value = false

            })

    }

    function openGoogleSetting() {
        if (!bindOtp.value) {
            googleVerificationVisible.value = true
            if (withdrawalIsVerified.value) {
                loadOTPImg()
            }

            // showDialog({
            //     title: 'Multi factor authentication',
            //     content: createVNode('span', { style: {} }, 'Is multi factor authentication enabled when withdrawing? If you successfully bind, you will not be able to close it!'),
            //     cancelText: 'Close',
            //     okText: 'Enable',
            //     onCancel: () => {
            //         changeIsVerified(false)
            //     },
            //     onOk: () => {
            //         changeIsVerified(true)
            //     },


            // });
        }


    }

    /* 获取二维码 */
    const scret_key = ref('')
    const authQrcode = ref('')
    const code = ref('')
    const shortPasswordIsShow = ref(false)
    const isLoading = ref(false)
    function loadOTPImg() {
        get_otp().then((res) => {
            if (res.code == 200) {
                scret_key.value = res.result.data.secret;
                authQrcode.value = 'data:image/jpg;base64,' + res.result.data.qrcode;
                code.value = ''
            }
        })
            .finally(() => {
                showToast.hide();
            });
    }

    function ConfirmBindOtp() {
        let numReg = /^\d{6}$/;
        if (!code.value) {
            showNotify.text(`Please enter Google Authenticator`, { color: '#ad0000', background: '#ffe1e1' });
            return;
        } else if (!numReg.test(code.value)) {
            showNotify.text(`Please enter the six-digit Google verification code`, { color: '#ad0000', background: '#ffe1e1' });
            return;
        }

        isLoading.value = true
        verify_otp_token({ secret: scret_key.value, token: window.btoa(code.value) })
            .then((res) => {
                if (res.code == 200) {
                    isLoading.value = true

                    withdraw_otp({ secret: scret_key.value }).then((res2) => {
                        if (res2.code == 200) {

                            code.value = '';
                            googleVerificationVisible.value = false
                            bindOtp.value = true
                        } else {
                            showToast.hide();
                            showToast.fail('Binding failed, please try again');
                        }
                    }).finally(() => {
                        isLoading.value = false

                    })
                } else {
                    showToast.fail('Verification code error');
                }
            }).finally(() => {
                isLoading.value = false
            })

    }



    watch(code, (newValue) => {
        if (newValue.length >= 6) {
            shortPasswordIsShow.value = false
        }
    })



    /* 获取是否已经绑定过Otp 如果已经绑定则不能跳过校验 */
    const bindOtp = ref(true); //是否已经绑定过Otp
    async function loadCheckBindOtp() {
        await check_bind_otp().then((res) => {
            if (res.code == 200) {
                bindOtp.value = res.result.bind_secret;
            }
        });
    }


    /* 获取当前提现是否开启校验 */
    function loadIsVerified() {

        getIsVerifiedAPI()
            .then((res) => {
                if (res.code == 200) {
                    withdrawalIsVerified.value = res.result.set_otp;

                }
            })
            .finally(() => {

            });
    }


    return {
        bindOtp,
        openGoogleSetting,
        withdrawalIsVerified,
        googleVerificationVisible,
        changeIsVerified,
        withdrawalIsVerifiedLoadding,
        authQrcode,
        code,
        shortPasswordIsShow,
        isLoading,
        ConfirmBindOtp,
    };
}

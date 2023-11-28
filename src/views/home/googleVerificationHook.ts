import { check_bind_otp, setIsVerifiedAPI, getIsVerifiedAPI } from '@/api/amb';
import { ref, createVNode, onMounted } from 'vue';

import { showDialog } from '@nutui/nutui';
import '@nutui/nutui/dist/packages/dialog/style';
import { showNotify } from '@nutui/nutui';
import '@nutui/nutui/dist/packages/notify/style';
import { showToast } from '@nutui/nutui';
import '@nutui/nutui/dist/packages/toast/style';

export default function googleVerificationHook() {
    const withdrawalIsVerified = ref<boolean>(true); // 是否开启校验


    /*切换是否开启绑定google校验 */
    function changeIsVerified(value) {


        if (bindOtp.value) {
            showNotify.text(`You can't turn off checksums if you're already bound.`, { color: '#ad0000', background: '#ffe1e1' });
            return;
        }
        setIsVerifiedAPI({ set_otp: value })
            .then((res) => {
                if (res.code == 200) {
                    withdrawalIsVerified.value = value;
                    showToast.success(res.result);
                }
            })

    }

    function openGoogleSetting() {
        showDialog({
            title: 'Multi factor authentication',
            content: createVNode('span', { style: {} }, 'Is multi factor authentication enabled when withdrawing? If you successfully bind, you will not be able to close it!'),
            cancelText: 'Close',
            okText: 'Enable',
            onCancel: () => {
                changeIsVerified(false)
            },
            onOk: () => {
                changeIsVerified(true)
            },


        });
    }


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

    onMounted(async () => {
        await loadCheckBindOtp();
        loadIsVerified();
    })
    return {
        bindOtp,
        openGoogleSetting,
        withdrawalIsVerified,
    };
}

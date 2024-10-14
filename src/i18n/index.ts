import { createI18n } from 'vue-i18n';

import ZH from './lang/zh-cn';
import EN from './lang/en-us';

const i18n = createI18n({
    legacy: false, // 如果使用vue3.0 组合式API开发 必须设置为false
    globalInjection: true,  // 全局生效
    locale: localStorage.getItem('language_key') || 'en',
    messages: {
        'zh': ZH,
        'en': EN
    },

});
export default i18n;
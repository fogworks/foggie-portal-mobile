import { createI18n } from 'vue-i18n';

import { Locale } from '@nutui/nutui';
import enUS from '@nutui/nutui/dist/packages/locale/lang/en-US';

Locale.use('en-US', enUS);

export function loadLang() {
  const modules: Record<string, any> = import.meta.glob('./lang/*.ts', { eager: true });
  const langs: Record<string, any> = {};

  for (const path in modules) {
    const name = path.replace(/(\.\/lang\/|\.ts)/g, '');
    langs[name] = modules[path].lang;
  }
  return langs;
}

export const i18n = createI18n({
  // globalInjection: true,
  legacy: false,
  // locale: 'zh-cn',
  locale: localStorage.getItem('lang') || 'en-us',
  fallbackLocale: 'en-us',
  messages: loadLang(),
});

export function setLang(locale?: string) {
  if (locale) {
    localStorage.setItem('lang', locale);
  }
  i18n.global.locale.value = locale || localStorage.getItem('lang') || '';
}

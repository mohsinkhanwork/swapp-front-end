import { createI18n } from 'vue-i18n';
import en from './locales/en.json';
import tr from './locales/tr.json';

export default createI18n({
    legacy: false,
    allowComposition: true,
    locale: 'tr',
    globalInjection: true,
    fallbackLocale: 'tr',
    messages: {
        en,
        tr,
    },
});

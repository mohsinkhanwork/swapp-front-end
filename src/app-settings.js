import i18n from '@/i18n';

export default {
    init() {
        let val = localStorage.getItem('i18n_locale');
        val = val || 'en';
        i18n.global.locale.value = val === 'tr' ? 'tr' : 'en';
        localStorage.setItem('i18n_locale', val);
    },
};

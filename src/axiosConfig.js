import axios from 'axios';
import conf from './conf/conf';
// import { inject } from 'vue';
// Set base URL for all requests
axios.defaults.baseURL = conf.baseUrl;

// Set default headers for all requests
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use(function (config) {
    // const $cookies = inject('$cookies');
    const token = localStorage.getItem('token'); //$cookies?.get('token');
    const lang = localStorage.getItem('i18n_locale'); //$cookies?.get('token');
    config.headers.Authorization = 'Bearer ' + token;
    if (lang) {
        config.headers['Accept-Language'] = lang; // This is the header needed to set the locale
    }
    return config;
});

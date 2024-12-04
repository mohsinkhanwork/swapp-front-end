import router from '@/router';
import store from '@/store';
import axios from 'axios';
// import { inject } from 'vue';
class AuthService {
    async login({ email, password }) {
        try {
            this.setCountryAndIpInLocalStorage();
            const { data } = await axios.post('/login', { email, password });
            if (data.status_code === 200) {
                localStorage.setItem('token', data.data.token);
                this.setCountryAndIpInLocalStorage();
            }
            return data;
        } catch (error) {
            return error;
        }
    }

    async getUser() {
        try {
            const { data } = await axios.get('/list');
            //this.setCountryAndIpInLocalStorage();
            return data;
        } catch (error) {
            return error;
        }
    }

    async register(params) {
        this.setCountryAndIpInLocalStorage();
        try {
            const { data } = await axios.post('/register', params, {
                headers: {
                'Content-Type': 'multipart/form-data'
              }
            });
            return data;
        } catch (error) {
            return error;
        }
    }

    async forgetPassword(params) {
        try {
            const { data } = await axios.post('/forget-password/link', params);
            return data;
        } catch (error) {
            return error;
        }
    }

    async resendEmail(params) {
        try {
            const { data } = await axios.post('/email-verification/resend', params);
            return data;
        } catch (error) {
            return error;
        }
    }

    logout() {
        // const $cookies = inject('$cookies');
        localStorage.removeItem('token');
        router.push('/login');
        store.dispatch('logout');
        // $cookies.remove('token', null);
        return true;
    }

    // user: object of all the required fields
    async socialLogin(user) {
        try {
            const { data } = await axios.post('/social/login', user);
            if (data.status_code === 200) {
                localStorage.setItem('token', data.data.token);
            }
            return data;
        } catch (error) {
            return error;
        }
    }
    async setCountryAndIpInLocalStorage() {
        try {
            const response = await axios.get('/ip-country');
            const { ip, country } = response.data;
            localStorage.setItem('user_ip', ip);
            localStorage.setItem('user_country', country);
            console.log('country', country);
            if (country.toLowerCase() !== 'tr') {
                localStorage.setItem('i18n_locale', 'en');
            }else {
                localStorage.setItem('i18n_locale', 'tr');
            }
            console.log(`User's IP (${ip}) and country (${country}) have been set in localStorage.`);
        } catch (error) {
            console.error('Failed to fetch IP address and country:', error);
        }
    }
    
}
const authService = new AuthService();
export default authService;

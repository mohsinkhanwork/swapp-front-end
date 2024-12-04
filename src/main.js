import { createApp } from 'vue';
import './axiosConfig';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/css/style.css';
import toastr from 'toastr';
import 'toastr/build/toastr.css';
import 'vue2-dropzone/dist/vue2Dropzone.min.css'
import GoogleSignInPlugin from "vue3-google-signin"
import conf from './conf/conf';
import wysiwyg from "./components/editor/CustomWysiwyg.vue";
const app = createApp(App);

app.config.globalProperties.$toastr = toastr;

// import VueCookies from 'vue-cookies';
// app.use(VueCookies);

import i18n from '@/i18n';
app.use(i18n);

app.use(wysiwyg, {
  hideModules: {
    bold: false,
  },
  locale: 'en'
});

app.use(router);
app.use(store);
app.use(GoogleSignInPlugin, {
  clientId: conf.googleClientId,
})
import { quillEditor } from 'vue3-quill';
app.use(quillEditor);

import Popper from 'vue3-popper';
app.component('vue-popper', Popper);

// set default settings
import appSetting from '@/app-settings';
appSetting.init();

app.mount('#app');

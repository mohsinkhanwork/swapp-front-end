import Vuex from 'vuex';
import user from '@/store/modules/user';
import settings from '@/store/modules/settings';
const store = new Vuex.Store({
    modules: {
        user,
        settings,
    },
});

export default store;

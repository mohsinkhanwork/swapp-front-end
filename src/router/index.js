import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';
import authService from '@/services/authService';
import store from '@/store';

const router = createRouter({
    history: createWebHistory(),
    routes
});

let initialized = false;

router.beforeEach(async (to, from, next) => {
    if (!initialized) {
        // call on reload
        await authService.getUser().then((res) => {
            if (res && res.status_code == 200) {
                store.dispatch('login', res.data);
            }
        });
        initialized = true
    }

    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    if (!requiresAuth && store.getters.isLoggedIn) {
        next('/');
    } else if(requiresAuth && !store.getters.isLoggedIn){
        next('/login');
    }else{
        next();
    }
});
export default router;

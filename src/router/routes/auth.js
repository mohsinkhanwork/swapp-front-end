import PublicLayout from '@/layouts/PublicLayout';
const auth_routes=[
    {
        path:'/',
        component: PublicLayout,
        meta:{
            requiresAuth:false,
        },
        children:[
            {
                path:'/login',
                component: () => import('@/pages/auth/LoginPage'),
            },
            {
                path:'/register',
                component: () => import('@/pages/auth/RegisterPage'),
            },
            {
                path:'/complete-registeration',
                component: () => import('@/pages/auth/CompleteRegisterationPage'),
            },
            {
                path:'/account',
                component: () => import('@/pages/auth/AccountPage'),
            },
            {
                path:'/confirm-email',
                component: () => import('@/pages/auth/ConfirmEmailPage'),
            },
            {
                path:'/forget-password',
                component: () => import('@/pages/auth/ForgetPasswordPage'),
            },
        ]
    }
];
export default auth_routes;

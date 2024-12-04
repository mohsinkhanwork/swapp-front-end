import AuthLayout from '@/layouts/AuthLayout';
const app_routes = [
    {
        path: '/',
        component: AuthLayout,
        meta: {
            requiresAuth: true,
        },
        children: [
            {
                path: '/',
                component: () => import('@/pages/dashboard/DashboardPage'),
            },
            {
                path: '/users',
                component: () => import('@/pages/dashboard/users/UserList'),
            },
            {
                path: '/:username',
                component: () => import('@/pages/dashboard/users/UserDetail'),
                props: true
            },
            {
                path: '/user-profile-list',
                component: () => import('@/pages/dashboard/UserProfileListPage'),
            },
            {
                path: '/edit-forums',
                component: () => import('@/pages/dashboard/EditForumsPage'),
            },
            {
                path: '/forum',
                component: () => import('@/pages/dashboard/forum/ForumList'),
            },
            {
                path: '/forum/questions/:id',
                props: true,
                component: () => import('@/pages/dashboard/forum/QuestionDetail'),
            },
            {
                path: '/quiz-list',
                component: () => import('@/pages/dashboard/QuizListPage'),
            },
            {
                path: '/quiz/:skillId',
                component: () => import('@/pages/dashboard/QuizPage'),
            },
            {
                path: '/my-swaps',
                component: () => import('@/pages/dashboard/MySwapsPage'),
            },
            {
                path: '/swap-requests',
                component: () => import('@/pages/dashboard/SwapRequests.vue'),
            },
            {
                path: '/swap-sent-requests',
                component: () => import('@/pages/dashboard/SwapSentRequests.vue'),
            },
            {
                path: '/swaps-details',
                component: () => import('@/pages/dashboard/SwapsDetailsPage'),
            },
            {
                path: '/messaging-system',
                component: () => import('@/pages/dashboard/message/MessagingSystemPage'),
            },
            {
                path: '/video-calling',
                component: () => import('@/pages/dashboard/VideoCallingPage'),
            },
            {
                path: '/receive-video-calling',
                component: () => import('@/pages/dashboard/ReceiveVideoCallingPage'),
            },
            {
                path: '/event-workshop',
                component: () => import('@/pages/dashboard/EventWorkshopPage'),
            },
            {
                path: '/popups',
                component: () => import('@/pages/dashboard/PopupsPage'),
            },
            {
                path: '/support-ticket',
                component: () => import('@/pages/dashboard/SupportTicketPage'),
            },
            {
                path: '/create-support-ticket',
                component: () => import('@/pages/dashboard/CreateSupportTicketPage'),
            },
            {
                path: '/support',
                component: () => import('@/pages/dashboard/support/Index'),
            },
            {
                path: '/support/:ticket_number',
                props: true,
                component: () => import('@/pages/dashboard/support/TicketDetail'),
            },
            {
                path: '/rating-and-review',
                component: () => import('@/pages/dashboard/RatingAndReviewPage'),
            },
            {
                path: '/settings',
                component: () => import('@/pages/dashboard/settings/Index'),
            },
            {
                path: '/followers',
                component: () => import('@/pages/dashboard/followers/Index'),
            },
            {
                path: '/post',
                component: () => import('@/pages/dashboard/post/Index.vue'),
            },
            {
                path: '/message',
                component: () => import('@/pages/dashboard/message/Message.vue'),
            },
        ],
    },
];
export default app_routes;

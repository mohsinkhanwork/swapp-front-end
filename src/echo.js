import Echo from 'laravel-echo';
import Pusher from 'pusher-js';

export default new Echo({
    broadcaster: 'pusher',
    key: '090c5de6a8fee4290703',
    cluster: 'eu' ?? 'mt1',
    wsHost: `ws-eu.pusher.com`,
    wsPort: 443,
    wssPort: 443,
    forceTLS: 'https',
    enabledTransports: ['ws', 'wss'],
    authEndpoint: 'http://localhost:8000/api/v1/user/broadcasting-auth',
    auth: {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            Accept: 'application/json',
        },
    },
});
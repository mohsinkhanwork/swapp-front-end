<template>
    <a
        href="#"
        @click="logInWithFacebook"
        class="flex items-center justify-center gap-2 rounded p-2 shadow-sm border border-[#d3d3d3] transition"
    >
        <img src="/assets/images/facebook.svg" alt="facebook" />
       Facebook
    </a>
</template>
<script>
import authService from '@/services/authService';
import conf from '@/conf/conf';
export default {
    methods:{
        logInWithFacebook () {
            window.FB.login(function (response) {
                if (response.authResponse) {
                    this.SocialLogin(response.authResponse)
                } else {
                    console.log('User cancelled login or did not fully authorize.')
                }
            });
            return false
        },
        initFacebook () {
            window.fbAsyncInit = function () {
                window.FB.init({
                appId: conf.facebookAppId,
                cookie: true,
                xfbml: true,
                version: 'v11.0'
                })
            }
            },
            loadFacebookSDK (d, s, id) {
            const fjs = d.getElementsByTagName(s)[0]
            if (d.getElementById(id)) {
                return
            }
            const js = d.createElement(s)
            js.id = id
            js.src = 'https://connect.facebook.net/en_US/sdk.js'
            fjs.parentNode.insertBefore(js, fjs)
        },
        SocialLogin (response) {
            let user={
                name:'',
                email:'',
                avatar:'',
                provider:'facebook',
                provider_id:response.userID
            };
            FB.api('/me', 'GET', { fields: 'name,email,picture' }, response => {
                user.name=response.name;
                user.avatar=response.picture.data.url??'';
                user.email=response.email??user.provider_id+'@facebook.com';
                authService.socialLogin(user).then(res=>{
                    if(res.status_code==200){
                        this.$store.dispatch('login', res.data.user);
                        this.$router.push('/');
                    }else if(res.status_code==422){
                        localStorage.setItem('social_user',JSON.stringify(user));
                        this.$router.push('/complete-registeration');
                    }else{
                        this.$toastr.error(res.message);
                    }
                })
            });
        },
    },
    mounted () {
        this.loadFacebookSDK(document, 'script', 'facebook-jssdk')
        this.initFacebook()
        window.SocialLogin = this.SocialLogin
    },
}
</script>

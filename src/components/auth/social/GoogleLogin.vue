<template>
    <GoogleSignInButton
        @success="handleLoginSuccess"
        @error="handleLoginError"
    >
    </GoogleSignInButton>
</template>
<script>
import authService from '@/services/authService';
import {GoogleSignInButton} from 'vue3-google-signin';
export default {
    components:{
        GoogleSignInButton
    },
    methods:{
        handleLoginSuccess(response){
            let credential=response.credential;
            const decodedToken = JSON.parse(atob(credential.split('.')[1]));
            let email=decodedToken.email;
            if(!email){
                email=decodedToken.sub+"@google.com";
            }
            let user={
                name:decodedToken.name,
                email:email,
                avatar:decodedToken.picture,
                provider:'google',
                provider_id:decodedToken.sub
            };
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
        },
        handleLoginError(){

        }
    }
}
</script>

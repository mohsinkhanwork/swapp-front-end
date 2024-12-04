<template>
    <div class="w-full max-w-[1145px] ">
        <div class="relative z-10 overflow-hidden rounded-lg shadow-3xl">
            <div class="space-y-5 bg-white px-5 py-36">
                <img src="/assets/images/confirm-email.svg" alt="Confirm email" class="mx-auto size-40" />
                <div class="mx-auto w-full max-w-[448px] text-center">
                    <h2 class="mb-2 text-lg font-semibold text-black"> {{ $t('confirm-your-email') }} </h2>
                    <p class="leading-[22px] mb-2">
                        {{ $t('confirm_your_email_text') }}
                    </p>
                    <button type="button" class="text-primary" @click="resendEmail">{{ $t('please_enter_your_email_text_not') }}</button>

                </div>
                <button type="button" class="btn btn-linear mx-auto text-black" @click="backToLogin">{{ $t('back-to-login')}}</button>
            </div>
        </div>
    </div>
</template>
<script>
import authService from '@/services/authService';
export default{
    data(){
        return {
            is_resend:false,
            email:''
        }
    },
    methods:{
        resendEmail(){
            authService.resendEmail({ email: this.email }).then(res=>{
                if(res.status_code==200){
                    this.$router.push('/login');
                    this.$toastr.success(res.message);
                }
            });
        },
        backToLogin(){
            this.$router.push('/login');
        }
    },
    created(){
        this.email=localStorage.getItem('user_email')??'';
        if(!this.email){
            this.$router.push('/login');
        }
    }
}
</script>

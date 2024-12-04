<template>
    <div class="relative z-10 w-full max-w-[400px] overflow-hidden rounded-lg shadow-3xl">
        <div class="flex bg-primary p-5">
            <a href="/" class="inline-flex items-center gap-2 text-lg/5 font-bold text-black">
                <img class="mt-0.5 size-4" src="/assets/images/logo.svg" alt="Logo" />

                <span>SwapGoal</span>
            </a>
        </div>
        <div class="bg-white px-5 pb-4 pt-7">
            <div class="space-y-7">
                <div class="py-0.5">
                    <img src="/assets/images/forget-password.svg" alt="Forget password" class="mx-auto size-40" />
                </div>
                <div class="space-y-2">
                    <h4 class="mb-2 text-lg/6 font-semibold text-black"> {{ $t('forget_password') }} </h4>
                    <p class="leading-[22px]">
                        {{ $t('forget_password_text') }}
                    </p>
                </div>
                <form @submit.prevent="forgetPassword">
                    <div class="error" v-if="error != ''">
                        {{ error }}
                    </div>
                    <div class="space-y-5">
                        <div>
                            <label class="mb-2.5 inline-block text-black"
                                >{{ $t('email') }}<span class="text-primary">*</span></label
                            >
                            <input type="email" placeholder="example@swapgoal.com" class="form-input" v-model="email" />
                        </div>
                    </div>
                    <div class="mt-7">
                        <button type="submit" class="btn w-full" :disabled="loading">
                            <div class="flex items-center justify-center gap-3" v-if="loading">
                                <span class="spinner"></span>
                                {{ $t('loading') }}
                            </div>
                            <span v-else> {{ $t('send') }} </span>
                        </button>
                    </div>
                    <p class="mt-5 text-center">
                        {{ $t('return') }}
                        <router-link
                            to="register"
                            class="border-b font-bold text-black underline transition hover:no-underline hover:opacity-80"
                        >
                            {{ $t('login') }}</router-link
                        >
                    </p>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import authService from '@/services/authService';
export default {
    data() {
        return {
            email: '',
            password: '',
            error: '',
            loading: false,
        };
    },

    methods: {
        forgetPassword() {
            this.error = '';
            this.loading = true;
            let credentials = {
                email: this.email,
            };
            authService.forgetPassword(credentials).then((res) => {
                this.loading = false;
                if (res.status_code == 200) {
                    this.$router.push('/login');
                    this.$toastr.success(res.message)
                }else{
                    this.error = res.message;
                }
            });
        },
    },
};
</script>

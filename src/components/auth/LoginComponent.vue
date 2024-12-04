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
                <div class="space-y-2">
                    <h4 class="mb-2 text-xl/6 font-semibold text-black">{{ $t('sign_in_to_your_account') }}</h4>
                    <p> {{ $t('enter_your_details_to_proceed_further') }}</p>
                </div>
                <div class="grid grid-cols-2 gap-4">
                    <google-login />
                    <facebook-login />
                </div>
                <div class="flex items-center gap-2.5">
                    <span class="h-px grow bg-gray-100"></span>
                    <span class="shrink-0">{{ $t('or_login_with_email') }}</span>
                    <span class="h-px grow bg-gray-100"></span>
                </div>
                <form @submit.prevent="login">
                    <div class="error" v-if="error != ''">
                        {{ error }}
                    </div>
                    <div class="space-y-5">
                        <div>
                            <label class="mb-2.5 inline-block text-black"
                                >{{ $t('email_address') }}<span class="text-primary">*</span></label
                            >
                            <input type="email" :placeholder="$t('email_address')" class="form-input" v-model="email" required />
                        </div>
                        <div>
                            <label class="mb-2.5 inline-block text-black"
                                >{{ $t('password') }}<span class="text-primary">*</span></label
                            >
                            <div class="relative">
                                <input
                                    :type="isShowPassword ? 'text' : 'password'"
                                    :placeholder="$t('password')"
                                    class="form-input pr-10"
                                    v-model="password"
                                    required
                                />
                                <button
                                    type="button"
                                    class="absolute right-3 top-1/2 -translate-y-1/2 text-black transition hover:opacity-80"
                                    @click="isShowPassword = !isShowPassword"
                                >
                                    <icon-eye-slash v-if="isShowPassword" />
                                    <icon-eye v-else />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="mt-2.5 flex flex-wrap items-center justify-end gap-3 text-xs">
                        <router-link to="/forget-password" class="transition hover:text-black"
                            >{{ $t('forget_password') }}?</router-link
                        >
                    </div>
                    <div class="mt-7">
                        <button class="btn w-full" :disabled="loading">
                            <div class="flex items-center justify-center gap-3" v-if="loading">
                                <span class="spinner"></span>
                                Loading...
                            </div>
                            <span v-else> {{ $t('login') }} </span>
                        </button>
                    </div>
                    <p class="mt-5 text-center">
                       {{ $t('dont_have_an_account') }}
                        <router-link
                            to="register"
                            class="border-b font-bold text-black underline transition hover:no-underline hover:opacity-80"
                            >{{ $t('sign_up') }}</router-link
                        >
                    </p>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import iconEye from '@/components/icon/icon-eye.vue';
import iconEyeSlash from '@/components/icon/icon-eye-slash.vue';
import authService from '@/services/authService';
import FacebookLogin from './social/FacebookLogin';
import GoogleLogin from './social/GoogleLogin';

export default {
    components: {
        iconEye,
        iconEyeSlash,
        FacebookLogin,
        GoogleLogin
    },
    data() {
        return {
            email: '',
            password: '',
            error: '',
            loading: false,
            isShowPassword: false,
        };
    },
    methods: {
        login() {
            this.error = '';
            this.loading = true;
            let credentials = {
                email: this.email,
                password: this.password
            };
            authService.login(credentials).then((res) => {
                if (res.status_code == 200) {
                    if (!res.data.email_verified) {
                        localStorage.setItem('user_email', this.email);
                        this.$store.dispatch('setUserWithoutAuth', res.data.user);
                        this.$router.push('/confirm-email');
                    } else if (res.data.enable_2fa) {
                        // TODO: handle 2 factor authentication
                    } else {
                        this.$store.dispatch('login', res.data.user);
                        this.$router.push('/');
                    }
                } else {
                    this.loading = false;
                    this.error = res.message;
                }
            });
        },
    },
};
</script>

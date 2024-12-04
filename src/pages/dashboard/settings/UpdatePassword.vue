<template>
    <form @submit.prevent="updatePassword" method="post">
        <div class="flex w-full flex-col gap-5 pb-5 xl:flex-row">
            <div class="shrink-0 xl:w-[331px]">
                <h3 class="mb-2.5 font-semibold text-black">Password</h3>
                <p class="w-full lg:max-w-[260px]">
                    {{ $t('please_enter_your_current_password_to_change_your_password') }}
                </p>
            </div>
            <div class="grow space-y-5">
                <div class="grid gap-x-[30px] gap-y-3.5 sm:grid-cols-2 sm:gap-y-5">
                    <div>
                        <label class="mb-2.5 inline-block text-black">{{ $t('current_password') }} </label>
                        <div class="relative">
                            <input
                                v-model="fields.current_password"
                                type="password"
                                class="form-input pr-[70px]"
                                :placeholder="$t('current_password')"
                                required
                            />
                            <button
                                type="button"
                                class="absolute right-3 top-1/2 h-full -translate-y-1/2 rounded-r-lg text-xs font-bold text-black hover:opacity-80"
                            >
                                <icon-eye />
                            </button>
                        </div>
                    </div>
                    <div class="hidden sm:block"></div>
                    <div>
                        <label class="mb-2.5 inline-block text-black">{{ $t('new_password') }}</label>
                        <div class="relative">
                            <input
                                v-model="fields.password"
                                type="password"
                                class="form-input pr-[70px]"
                                placeholder="New Password"
                                required
                            />
                            <button
                                type="button"
                                class="absolute right-3 top-1/2 h-full -translate-y-1/2 rounded-r-lg text-xs font-bold text-black hover:opacity-80"
                            >
                                <icon-eye-slash />
                            </button>
                        </div>
                    </div>
                    <div>
                        <label class="mb-2.5 inline-block text-black">{{ $t('confirm_password') }}</label>
                        <div class="relative">
                            <input
                                v-model="fields.password_confirmation"
                                type="password"
                                class="form-input pr-[70px]"
                                :placeholder="$t('confirm_password')"
                                required
                            />
                            <button
                                type="button"
                                class="absolute right-3 top-1/2 h-full -translate-y-1/2 rounded-r-lg text-xs font-bold text-black hover:opacity-80"
                            >
                                <icon-eye-slash />
                            </button>
                        </div>
                    </div>
                </div>
                <div class="flex justify-end pt-2.5">
                    <button class="btn" :disabled="loading">
                        <div class="flex items-center justify-center gap-3" v-if="loading">
                            <span class="spinner"></span>
                            Loading...
                        </div>
                        <span v-else> {{ $t('update_password') }}</span>
                    </button>
                </div>
            </div>
        </div>
    </form>
</template>
<script>
import userService from '@/services/userService'
export default {
    data(){
        return {
            fields:{
                current_password:'',
                password:'',
                password_confirmation:'',
            },
            loading:false
        }
    },
    methods:{
        updatePassword(){
            this.loading=true;
            userService.updatePassword(this.fields).then(res=>{
                this.loading=false;
                if(res.status_code==200){
                    this.$toastr.success(res.message);
                    this.resetFields();
                }else{
                    this.$toastr.error(res.message);
                }
            })
        },
        resetFields(){
            this.fields.current_password='';
            this.fields.password='';
            this.fields.password_confirmation='';
        }
    }
}
</script>

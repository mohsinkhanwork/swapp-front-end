<template>
    <form @submit.prevent="deactivateAccount" method="post">
        <div class="space-y-5 pt-5">
            <div class="rounded-lg bg-gray-200 px-5 py-2.5">
                <h2 class="mb-2.5 font-semibold text-black">{{ $t('deactivate_account') }}</h2>
                <p>{{ $t('manage_the_process_of_deleting_account') }}</p>
            </div>
            <div class="flex flex-col gap-5 md:flex-row">
                <div class="grow space-y-5">
                    <div class="inline-flex gap-2 rounded-lg bg-[#FEE2E2] px-3 py-[9px] text-black">
                        <icon-info class="text-danger" />
                        <span>{{ $t('you_are_deactivating_your_account') }}</span>
                    </div>
                    <ul class="w-full max-w-[676px] list-disc pl-5 leading-[22px]">
                        <li>
                            {{ $t('all_of_your_data_will_be_permanently_removed') }}
                        </li>
                        <li>
                            {{ $t('by_entering_your_password_you_confirm') }}
                        </li>
                    </ul>
                </div>
                <div class="end-full shrink-0 md:w-[362px]">
                    <div>
                        <label class="mb-2.5 inline-block text-black">Confirm password</label>
                        <div class="relative">
                            <input
                                v-model="password"
                                type="password"
                                class="form-input pr-[70px]"
                                placeholder="Password"
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
                    <div class="mb-[30px] mt-2.5 flex items-center gap-2">
                        <icon-info-border />
                        <span class="text-xs"
                            >{{ $t('provide_your_password_to_proceed') }}</span
                        >
                    </div>
                    <button
                        :disabled="loading"
                        type="submit"
                        class="btn border-danger bg-danger hover:border-danger hover:bg-danger/80"
                    >
                        <div class="flex items-center justify-center gap-3" v-if="loading">
                            <span class="spinner"></span>
                            Loading...
                        </div>
                        <span v-else>Deactivate account</span>
                    </button>
                </div>
            </div>
        </div>
    </form>
</template>
<script>
import authService from '@/services/authService';
import userService from '@/services/userService';
import IconEye from '@/components/icon/icon-eye.vue';
import IconInfo from '@/components/icon/icon-info.vue';
import IconInfoBorder from '@/components/icon/icon-info-border.vue';
    export default {
        components:{
            IconEye,
            IconInfo,
            IconInfoBorder
        },
        data(){
            return {
                password:'',
                loading:false
            }
        },
        methods:{
            deactivateAccount(){
                if(confirm('are you sure? you wont be able to recover this account again')){
                    this.loading=true;
                    userService.deactivateAccount(this.password).then(res=>{
                        this.loading=false;
                        if(res.status_code==200){
                            this.$toastr.success(res.message);
                            authService.logout();
                        }else{
                            this.$toastr.error(res.message);
                        }
                    })
                }
            }
        }
    }
</script>

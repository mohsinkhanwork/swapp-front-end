<template>
    <form @submit.prevent="updateSocialProfile" method="post">
        <div class="flex w-full flex-col gap-5 p-5 lg:flex-row">
            <div class="shrink-0 lg:w-[331px]">
                <h3 class="mb-2.5 font-semibold text-black">{{ $t('social_profile') }}</h3>
                <p>{{ $t('update_your_social_meia_details') }}</p>
            </div>
            <div class="w-full space-y-5 xl:max-w-[534px]">
                <div class="flex rounded-lg shadow-4xl">
                    <div
                        class="tex inline-flex w-[134px] shrink-0 items-center rounded-l-lg border-r border-gray-100 bg-gray-200 px-3"
                    >
                        instagram.com/
                    </div>
                    <input
                        v-model="user.instagram_link"
                        type="url" class="form-input rounded-l-none shadow-none" />
                </div>
                <div class="flex rounded-lg shadow-4xl">
                    <div
                        class="tex inline-flex w-[134px] shrink-0 items-center rounded-l-lg border-r border-gray-100 bg-gray-200 px-3"
                    >
                        facebook.com/
                    </div>
                    <input
                        v-model="user.facebook_link"
                        type="url" class="form-input rounded-l-none shadow-none" />
                </div>
                <div class="flex rounded-lg shadow-4xl">
                    <div
                        class="tex inline-flex w-[134px] shrink-0 items-center rounded-l-lg border-r border-gray-100 bg-gray-200 px-3"
                    >
                        linkedin.com/
                    </div>
                    <input
                        v-model="user.linkedin_link"
                        type="url" class="form-input rounded-l-none shadow-none" />
                </div>
                <div class="flex justify-end pt-2">
                    <button class="btn" :disabled="loading">
                        <div class="flex items-center justify-center gap-3" v-if="loading">
                            <span class="spinner"></span>
                            {{ $t('loading') }}
                        </div>
                        <span v-else> {{ $t('update') }} </span>
                    </button>
                </div>
            </div>
        </div>
    </form>
</template>
<script>
import userService from '@/services/userService';
export default {
    data(){
        return {
            loading:false
        }
    },
    computed:{
        user(){
            return this.$store.getters.user;
        }
    },
    methods:{
        updateSocialProfile(){
            console.log('hello social')
            this.loading=true;
            let links={
                instagram_link:this.user.instagram_link,
                facebook_link:this.user.facebook_link,
                linkedin_link:this.user.linkedin_link
            }
            userService.updateSocialLinks(links).then(res=>{
                this.loading=false;
                if(res.status_code==200){
                    this.$toastr.success(res.message);
                }
            });
        }
    }
}
</script>

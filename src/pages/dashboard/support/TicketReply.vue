<template>
    <div class="space-y-4 py-4">
        <div class="flex grow items-center gap-2">
            <div class="h-10 w-10 shrink-0 overflow-hidden rounded-lg">
                <img
                    :src="avatar"
                    class="h-full w-full object-cover"
                    alt="Profile"
                />
            </div>
            <div class="space-y-1.5">
                <div class="flex items-center gap-1.5">
                    <h6 class="text-black" v-if="reply.admin">{{ reply.admin.name }}</h6>
                    <h6 class="text-black" v-else>You</h6>
                    <icon-verify v-if="reply.admin" class="size-4 shrink-0 text-success" />
                </div>
                <p class="text-gray-300">{{moment(reply.created_at).format("DD MMM, YYYY HH:mm a")}}</p>
            </div>
        </div>
        <div
            v-html="reply.description"
            class="leading-[22px]"></div>
    </div>
</template>

<script>
import moment from 'moment';
import IconVerify from '@/components/icon/icon-verify.vue';
export default{
    components:{
        IconVerify
    },
    props:{
        reply:{
            required:true
        }
    },
    data(){
        return {
            moment:null
        }
    },
    computed:{
        avatar(){
            if(this.reply.admin){
                return this.reply.admin.avatar;
            }
            return this.$store.getters.user.avatar;
        }
    },
    created(){
        this.moment=moment
    }
}
</script>

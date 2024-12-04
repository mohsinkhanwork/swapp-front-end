<template>
    <div class="space-y-2.5 pb-2.5 pt-2">
        <div v-html="comment.detail"></div>
        <!-- <p>
            {{comment.detail}}
        </p> -->
        <div class="flex items-center gap-2.5 text-xs font-semibold">
            <div class="flex items-center gap-2 text-black">
                <icon-profile class="size-4 shrink-0" />
                <span>{{comment.user.name}}</span>
            </div>
            <span class="h-3 w-0.5 shrink-0 rounded-full bg-primary"></span>
            <p class="text-gray-300">{{moment(comment.date).format("DD MMM, YYYY HH:mm a") }}</p>
        </div>
    </div>
</template>
<script>
import IconProfile from '@/components/icon/icon-profile.vue';
import moment from 'moment';
export default {
    components:{
        IconProfile
    },
    props:{
        comment:{
            required:true
        }
    },
    data(){
        return {
            moment:null
        }
    },
    created(){
        this.moment=moment
    }
}
</script>

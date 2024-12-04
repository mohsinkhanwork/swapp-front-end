<template>
    <div class="flex flex-col justify-between gap-4 py-4 sm:flex-row sm:items-center">
        <div class="flex items-start gap-2">
            <icon-lock
                :class="question.privacy=='public'?'text-success':'text-danger'"
                class="size-4 shrink-0" />
            <div class="space-y-2">
                <router-link class="text-black" :to="`forum/questions/${question.id}`">{{question.title}}</router-link>
                <div class="text-xs font-semibold text-gray-300">{{ formattedDate }} </div>
            </div>
        </div>
        <div class="flex shrink-0 flex-wrap items-center gap-4 text-xs font-semibold text-black">
            <router-link
                :to="`forum/questions/${question.id}`"
                class="flex items-center gap-2 rounded-lg bg-gray-400 px-2 py-1.5"
            >
                <span>{{question.views}}</span>
                <icon-eye class="size-4" />
            </router-link>
            <button type="button" class="flex items-center gap-2 rounded-lg bg-gray-400 px-2 py-1.5">
                <span>{{question.answers}}</span>
                <icon-back-arrow class="size-4" />
            </button>
        </div>
    </div>
</template>
<script>
import IconEye from '@/components/icon/icon-eye.vue';
import IconLock from '@/components/icon/icon-lock.vue';
import IconBackArrow from '@/components/icon/icon-back-arrow.vue';
import moment from 'moment';
export default {
    components:{
        IconEye, IconLock, IconBackArrow
    },
    props:{
        question:{
            required:true
        }
    },
    computed: {
        user() {
            return this.$store.getters.user;
        },
        formattedDate() {
            const userLanguageData = localStorage.getItem('i18n_locale');
            const date = new Date(this.question.date);
            const options = { 
                day: '2-digit', 
                month: 'short', 
                year: 'numeric', 
                hour: '2-digit', 
                minute: '2-digit', 
                hour12: true,
                timeZone: this.user.timezone ? this.user.timezone: '' 
            };
            return date.toLocaleDateString(userLanguageData == 'tr'? 'tr': 'en', options);
        },

    },
    data(){
        return {
            moment: null
        }
    },
    created(){
        this.moment=moment;
    }
}
</script>

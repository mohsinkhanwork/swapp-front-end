<template>
    <div class="relative">
        <vue-popper>
            <button type="button" class="transition hover:opacity-70">
                <icon-notification />
            </button>
            <template #content>
                <div
                    class="absolute -bottom-4 -right-3 z-10 mt-1.5 size-6 rotate-[40deg] skew-y-12 rounded bg-gray-200 shadow-[0_0_0_1px_rgba(18,43,105,0.08),0_1px_2px_0_rgba(18,43,105,0.08)]"
                ></div>
                <div
                    class="absolute -right-1/4 top-full z-10 max-h-[534px] w-72 translate-x-1/4 overflow-auto rounded-lg bg-white shadow-[0_0_0_1px_rgba(18,43,105,0.08),0_1px_2px_0_rgba(18,43,105,0.08)] sm:w-[372px]"
                >
                    <div
                        class="sticky top-0 flex items-center justify-between rounded-t-lg bg-gray-200 px-5 py-2.5"
                    >
                        <h3 class="text-base/5 font-semibold text-black">Notifications</h3>
                        <a
                            href="#"
                            class="transiton border-b border-gray font-semibold text-gray hover:opacity-90"
                            >View all</a
                        >
                    </div>
                    <div class="space-y-2.5 p-2.5">
                        <template v-if="notifications.length>0">
                            <div
                                v-for="(notification,i) in notifications"
                                :key="i"
                                :class="notification.is_read?'bg-gray-200':''"
                                class="relative flex gap-3 rounded-lg p-2.5 transition hover:bg-gray-200">
                                <a href="#" class="absolute inset-0"></a>
                                <span
                                    class="grid size-10 shrink-0 place-content-center overflow-hidden rounded-lg bg-gray-100"
                                >
                                    <img
                                        src="/assets/images/profile.png"
                                        alt="profile"
                                        class="h-full w-full object-cover"
                                    />
                                </span>
                                <div>
                                    <p class="mb-2">
                                        {{notification.description}}
                                    </p>
                                    <span class="text-xs font-semibold text-gray-300">
                                        {{moment(notification.date).format("DD MMM, YYYY HH:mm a") }}
                                    </span>
                                </div>
                            </div>
                        </template>
                        <div v-else>
                            <h3 class="text-center p-4 text-lg">
                                No New Notifications
                            </h3>
                        </div>
                    </div>
                </div>
            </template>
        </vue-popper>
    </div>
</template>
<script>
import userService from '@/services/userService'
import iconNotification from '@/components/icon/icon-notification.vue';
import moment from 'moment'
export default {
    components:{
        iconNotification
    },
    data(){
        return {
            moment:null,
            notifications:[]
        }
    },
    created(){
        this.moment = moment;
        userService.getNotifications().then(res=>{
            this.notifications=res.data.notifications
        })
    }
}
</script>

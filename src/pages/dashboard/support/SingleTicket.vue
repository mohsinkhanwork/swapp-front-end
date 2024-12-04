<template>
    <div>
        <div class="rounded-lg bg-white p-5 shadow-3xl">
            <div class="mb-5 space-y-2.5">
                <div
                    v-if="ticket.priority=='normal'"
                    class="inline-flex items-center gap-2 rounded-lg bg-orange/[0.08] px-2 py-1.5 text-[11px]/[14px] font-bold uppercase text-orange"
                >
                    <span class="size-1.5 shrink-0 rounded-full bg-orange"></span>
                    <p>Normal</p>
                </div>
                <div
                    v-else
                    class="inline-flex items-center gap-2 rounded-lg bg-danger/[0.08] px-2 py-1.5 text-[11px]/[14px] font-bold uppercase text-danger"
                >
                    <span class="size-1.5 shrink-0 rounded-full bg-danger"></span>
                    <p>high</p>
                </div>
                <h3 class="font-semibold text-black">
                    <router-link :to="`/support/${ticket.ticket_number}`">
                        {{ticket.subject}}
                    </router-link>
                </h3>
                <div
                    v-html="ticket.description"
                    class="leading-[22px]"></div>
            </div>
            <a
                v-if="ticket.file"
                :href="ticket.file"
                target="_blank"
                class="inline-flex items-center gap-1.5 rounded-lg bg-gray-500 p-2 text-xs text-black transition hover:opacity-80"
            >
                <icon-file class="text-danger" />
                <span>View Attachment</span>
            </a>
        </div>
    </div>
</template>
<script>
import IconFile from '@/components/icon/icon-file.vue';
export default {
    components:{
        IconFile
    },
    props:{
        ticket:{
            required:true
        }
    },
    data(){
        return {

        }
    }
}
</script>

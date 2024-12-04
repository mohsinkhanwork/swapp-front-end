<template>
    <div>
        <div class="space-y-5">
            <div
                class="flex flex-col justify-between gap-3 rounded-lg bg-white px-5 py-[15px] shadow-3xl md:flex-row md:items-center">
                <div class="shrink-0 text-base/5 font-semibold text-black">Support ticket detail</div>
                <router-link to="/support" class="btn">
                    <span>Go Back</span>
                </router-link>
            </div>
            <div v-if="loading" class="text-center p-5">
                <span class="spinner !w-16 !h-16"></span>
            </div>
            <div v-else class="space-y-4">
                <div v-if="ticket" class="divide-y divide-gray-100 rounded-lg bg-white p-5 shadow-3xl">
                    <div class="border-b pb-4">
                        <div class="mb-5 space-y-2.5">
                            <div v-if="ticket.priority == 'normal'"
                                class="inline-flex items-center gap-2 rounded-lg bg-orange/[0.08] px-2 py-1.5 text-[11px]/[14px] font-bold uppercase text-orange">
                                <span class="size-1.5 shrink-0 rounded-full bg-orange"></span>
                                <p>Normal</p>
                            </div>
                            <div v-else
                                class="inline-flex items-center gap-2 rounded-lg bg-danger/[0.08] px-2 py-1.5 text-[11px]/[14px] font-bold uppercase text-danger">
                                <span class="size-1.5 shrink-0 rounded-full bg-danger"></span>
                                <p>high</p>
                            </div>
                            <h3 class="font-semibold text-black">{{ ticket.subject }}</h3>
                            <div v-html="ticket.description" class="leading-[22px]"></div>
                        </div>

                        <a v-if="ticket.file" :href="ticket.file" target="_blank"
                            class="inline-flex items-center gap-1.5 rounded-lg bg-gray-500 p-2 text-xs text-black transition hover:opacity-80">
                            <icon-file class="text-danger" />
                            <span>View Attachment</span>
                        </a>
                    </div>
                    <template v-if="replies.length > 0">
                        <ticket-reply v-for="reply in replies" :key="reply.id" :reply="reply" />
                    </template>
                    <div v-else class="p-5 text-center">
                        <h2 class="text-xl">No Replies Yet</h2>
                    </div>
                    <div class="flex items-center gap-[10px] pt-4">
                        <img src="/assets/images/profile.png" class="h-9 w-9" alt="profile">
                        <button type="button" @click="ReplyDetails = true"
                            class="flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-left shadow-3xl ring-1 ring-inset ring-gray-100">
                            <icon-reply class="size-4 shrink-0 text-black" />
                            <span>Replies</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <TransitionRoot appear :show="ReplyDetails" as="template">
            <Dialog as="div" @close="ReplyDetails = false" class="relative z-50">
                <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0"
                    enter-to="opacity-100" leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
                    <DialogOverlay class="fixed inset-0 bg-[black]/60" />
                </TransitionChild>

                <div class="fixed inset-0 overflow-y-auto">
                    <div class="flex min-h-full items-center justify-center px-4 py-8">
                        <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
                            enter-to="opacity-100 scale-100" leave="duration-200 ease-in"
                            leave-from="opacity-100 scale-100" leave-to="opacity-0 scale-95">
                            <DialogPanel
                                class="mx-auto w-full max-w-[777px] rounded-lg bg-white p-5 text-sm/[18px] font-medium text-gray shadow-3xl">
                                <h2 class="mb-[30px] text-xl/[25px] font-semibold text-black">{{
                                    $t('Reply Ticket') }}
                                </h2>
                                <div class="space-y-5">
                                    <ReplyDetail :ticketId="ticket.ticket_number" />
                                </div>
                                <!-- <div class="mt-[30px] flex gap-4">
                                        <button type="button" class="btn" @click="sendForum">Submit</button>
                                        <button type="button" @click="CreateForumDetails = false"
                                            class="btn btn-linear">
                                            {{ $t('cancel') }}
                                        </button>
                                    </div> -->
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </TransitionRoot>
    </div>
</template>
<script>
import IconFile from '@/components/icon/icon-file.vue';
import IconProfile from '@/components/icon/icon-profile.vue';
import supportService from '@/services/supportService';
import TicketReply from './TicketReply.vue';
import IconReply from '@/components/icon/icon-reply.vue';
import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogOverlay } from '@headlessui/vue';
import ReplyDetail from './ReplyDetail.vue';

export default {
    components: {
        IconFile, IconProfile,
        TicketReply, IconReply,
        TransitionChild, TransitionRoot, Dialog, DialogPanel, DialogOverlay,
        ReplyDetail,
    },
    props: {
        ticket_number: {
            required: true
        }
    },
    data() {
        return {
            ticket: null,
            replies: [],
            loading: true,
            ReplyDetails: false,
        }
    },
    created() {
        supportService.getTicketDetail(this.ticket_number).then(res => {
            this.loading = false;
            console.log(res)
            if (res.status_code == 200) {
                this.ticket = res.data.ticket;
                this.replies = res.data.replies;
            } else {
                this.$router.push('/support');
            }
        })
    }
}
</script>

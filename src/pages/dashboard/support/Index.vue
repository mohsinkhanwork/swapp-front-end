<template>
    <div>
        <div class="space-y-5">
            <div
                class="flex flex-col justify-between gap-3 rounded-lg bg-white px-5 py-[15px] shadow-3xl md:flex-row md:items-center">
                <div class="shrink-0 text-base/5 font-semibold text-black">{{ $t('support_ticket_list') }}</div>
                <button type="button" @click="createTicket = true" class="btn">
                    <icon-close-round class="size-4 rotate-45" />
                    <span>{{ $t('create_ticket') }}</span>
                </button>
            </div>
            <div class="space-y-4">
                <template v-if="!loading">
                    <template v-if="tickets.length > 0">
                        <single-ticket v-for="ticket in tickets" :key="ticket.id" :ticket="ticket" />
                    </template>
                    <div v-else>
                        <div class="space-y-5 rounded-lg bg-white px-5 py-24 shadow-3xl lg:py-36">
                            <img src="/assets/images/support-ticket.svg" alt="Support ticket" class="mx-auto size-40" />
                            <div class="mx-auto w-full max-w-[354px] text-center">
                                <h2 class="mb-2 text-lg/[22px] font-semibold text-black">
                                    {{ $t('no_active_support_tickets_at_the_moment') }}.
                                </h2>
                                <p class="w-full max-w-[350px] leading-[22px]">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </p>
                            </div>
                        </div>
                    </div>
                </template>
                <div v-else class="text-center p-4">
                    <span class="spinner !h-14 !w-14"></span>
                </div>
            </div>
        </div>
        <TransitionRoot appear :show="createTicket" as="template">
            <Dialog as="div" @close="createTicket = false" class="relative z-50">
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
                                <div class="space-y-5">
                                    <div>
                                        <h3 class="mb-1.5 text-black">{{ $t('title') }}</h3>
                                        <input v-model="ticketData.subject" type="text" class="form-input"
                                            placeholder="Ex. software engineer, ect.." />
                                    </div>
                                    <div class="mb-5">
                                        <h3 class="mb-2.5 text-black">{{ $t('details') }}</h3>
                                        <div class="text-editor rounded-lg shadow-4xl">
                                            <quill-editor @change="onEditorChange" class="!border-none !h-[84px]"
                                                :options="{
                                                    modules: {
                                                        toolbar: [
                                                            [{ size: ['small', false, 'large', 'huge'] }],
                                                            [{ color: [] }, { background: [] }],
                                                            [{ header: [1, 2, 3, 4, 5, 6] }],
                                                            ['bold', 'italic', 'underline', 'strike'],
                                                            [{ align: [] }],
                                                            [{ list: 'ordered' }, { list: 'bullet' }],
                                                            ['image', 'link'],
                                                        ],
                                                    },
                                                    placeholder: '',
                                                }" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 class="mb-1.5 text-black">{{ $t('file') }}</h3>
                                        <div class="rounded-lg border-2 border-dashed border-gray-100 px-5 py-[25px]">
                                            <button type="button"
                                                class="btn btn-linear relative mx-auto px-2.5 py-2 text-black">
                                                <input @change="onFileChange" ref="fileInput" type="file"
                                                    class="absolute inset-0 cursor-pointer opacity-0" />
                                                <icon-Close-round class="size-[18px] rotate-45" />
                                                <span>Add file</span>
                                            </button>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 class="mb-1.5 text-black">{{ $t('priority') }}</h3>
                                        <div class="relative mb-2.5">
                                            <select v-model="ticketData.priority" class="form-select">
                                                <option>Normal</option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                            </select>
                                            <icon-arrow-down
                                                class="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-black" />
                                        </div>
                                    </div>
                                </div>
                                <div class="mt-[30px] flex gap-4">
                                    <button type="button" @click="sendTicket" class="btn">Submit</button>
                                    <button type="button" @click="createTicket = false" class="btn btn-linear">
                                        {{ $t('cancel') }}
                                    </button>
                                </div>
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
import IconArrowDown from '@/components/icon/icon-arrow-down.vue';
import IconCloseRound from '@/components/icon/icon-close-round.vue';
import SingleTicket from './SingleTicket.vue';
import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogOverlay } from '@headlessui/vue';
import supportService from '@/services/supportService';
import axios from 'axios';
export default {
    components: {
        IconFile, IconArrowDown, IconCloseRound,
        TransitionChild, TransitionRoot, Dialog, DialogPanel, DialogOverlay,
        SingleTicket
    },
    data() {
        return {
            createTicket: false,
            tickets: [],
            loading: true,
            ticketData: {
                subject: '',
                description: '',
                priority: '',
                file: null,
            },
            selectedFile: null,
        }
    },
    methods: {
        onFileChange(event) {
            this.selectedFile = event.target.files[0]; // Store the file in your data object
            console.log(this.ticketData)
        },
        onEditorChange(data) {
            this.ticketData = { ...this.ticketData, description: data.html };
        },
        async sendTicket() {
            try {
                const formData = new FormData();
                formData.append('user_id', this.user);
                formData.append('subject', this.ticketData.subject);
                formData.append('description', this.ticketData.description);
                formData.append('priority', this.ticketData.priority);
                const fileInput = this.$refs.fileInput;
                console.log(fileInput)
                if (this.selectedFile) {
                    formData.append("file", this.selectedFile);
                }
                axios.post('/support/ticket', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                    .then(response => {
                        console.log('Success:', response.data);
                        if (response.data.status_code == 200) {
                            this.$toastr.success('Ticket submitted successfully');
                            // this.getQuestions();
                            this.isModalVisible = false; // Close the modal after submission
                            // Optionally reset proposal message
                            this.acceptedMessage = '';
                            this.loading = true;
                            supportService.getTickets().then(res => {

                                this.tickets = res.data;
                                this.loading = false
                            });
                        } else if (response.data.status_code == 422) {
                            this.$toastr.error(response.data.message);
                        } else if (response.data.status_code == 400) {
                            this.$toastr.error(response.data.message);
                        } else {
                            this.$toastr.error('Something went wrong. Please try again later');
                        }
                        this.createTicket = false
                    })
                    .catch(error => {
                        console.log(error)
                        console.error('Error:', error.response ? error.response.data : error.message);
                    });
            } catch (error) {
                this.$toastr.error('Error submitting proposal');
            }
        }
    },
    created() {
        supportService.getTickets().then(res => {
            this.loading = false
            this.tickets = res.data;
            console.log(res.data)
        });
    },
    computed: {
        user() {
            return this.$store.getters.user;
        },
    }
}
</script>

<!-- 'subject'=>'required',
'description'=>'required',
'file'=>'nullable' -->

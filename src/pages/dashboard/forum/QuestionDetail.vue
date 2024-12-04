<template>
    <div class="space-y-5">
        <div class="mb-4 text-right lg:hidden">
            <button type="button">
                <icon-menu class="size-7" />
            </button>
        </div>
        <div
            class="flex flex-col justify-start gap-3 rounded-lg bg-white px-5 py-[15px] shadow-3xl md:flex-row md:items-center">
            <div class="shrink-0 text-base/5 font-semibold text-black">Forum Detail</div>
            <!-- <button type="button" @click="CreateForumDetails = true" class="btn">
                <icon-close-round class="size-4 rotate-45" />
                <span>Post Question</span>
            </button> -->
        </div>
        <div class="flex items-start gap-4">
            <div v-if="loading" class="text-center p-5 grow">
                <span class="spinner !w-16 !h-16"></span>
            </div>
            <template v-else>
                <div v-if="question" class="grow overflow-hidden rounded-lg bg-white shadow-3xl">
                    <div class="flex items-start gap-2 border-b border-gray-100 bg-gray-200 p-4">
                        <icon-lock :class="question.privacy == 'public' ? 'text-success' : 'text-danger'"
                            class="mt-0.5 size-4 shrink-0" />
                        <div class="space-y-2">
                            <h4 class="text-lg/[22px] font-semibold text-black">{{ question.title }}</h4>
                            <p>{{ moment(question.date).format("DD MMM, YYYY HH:mm a") }}</p>
                        </div>
                    </div>
                    <div class="divide-y divide-gray-100">
                        <div class="divide-y divide-gray-100">
                            <div class="divide-y divide-gray-100 px-5">
                                <div class="space-y-4 py-5">
                                    <div class="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-5">
                                        <div class="flex grow items-center gap-2">
                                            <div class="h-10 w-10 shrink-0 overflow-hidden rounded-lg bg-gray-100">
                                                <img :src="question.user.avatar" class="h-full w-full object-cover"
                                                    alt="Profile" />
                                            </div>
                                            <div class="space-y-1.5">
                                                <h6 class="text-black">{{ question.user.name }}</h6>
                                                <div class="text-xs">{{ question.user.profession }}</div>
                                            </div>
                                        </div>
                                        <div class="flex items-center gap-2.5">
                                            <button type="button"  class="btn-hover btn btn-linear px-2 text-black">
                                                <span>{{ question.views }}</span>
                                                <icon-heart class="size-4 shrink-0 text-[#EF4444]" />
                                            </button>
                                            <button type="button" class="btn-hover btn btn-linear px-2 text-black">
                                                <span>{{ question.views }}</span>
                                                <icon-eye class="size-5 text-black hover:text-white" />
                                            </button>
                                            <!-- <button type="button" class="btn-hover btn btn-linear px-2 text-black">
                                                <span>{{ question.answers }}</span>
                                                <icon-back-arrow class="size-5 text-black hover:text-white" />
                                            </button> -->
                                            <button  class="btn btn-icon text-black hover:text-white">
                                                <icon-link />
                                            </button>
                                        </div>
                                    </div>
                                    <div class="space-y-4">
                                        <div v-html="question.detail"></div>
                                    </div>
                                    <div class="flex flex-wrap gap-2.5">
                                        <div v-for="tag in question.tags" :key="tag.id"
                                            class="rounded-lg bg-gray-400 px-2 py-1.5 text-xs font-semibold text-black">
                                            {{ tag.title }}
                                        </div>
                                    </div>
                                    <div class="flex justify-between items-center">
                                        <button @click="ReplyModal = true" class="btn btn-linear group px-3">
                                            <icon-back-arrow class="text-black transition group-hover:text-white" />
                                            <span>Replies</span>
                                            <span class="h-[18px] w-0.5 rounded-full bg-primary"></span>
                                            <span class="text-black transition group-hover:text-white">{{
                                                question.answers
                                            }}</span>
                                        </button>

                                        <div class="text-[#A1A1AA] text-[12px]">
                                            {{ moment(question.date).format("DD MMM YYYY, HH:mm a") }}
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div class="pl6 divide-y divide-gray-100 sm:pl-10">
                                <single-reply v-for="answer in answers" :key="answer.id" :answer="answer" />
                            </div>
                        </div>
                    </div>
                </div>
            </template>
            <div class="sticky top-[88px] hidden w-64 shrink-0 rounded-lg bg-white p-5 shadow-3xl lg:block">
                <div class="relative mt-4">
                    <span
                        class="absolute -top-px right-4 rounded-b-lg bg-danger px-1.5 py-1 text-[10px]/none font-bold uppercase text-white">Ads</span>
                    <img src="/assets/images/ad-one.png" alt="ads" class="h-full w-full object-cover" />
                </div>
            </div>
        </div>

        <TransitionRoot appear :show="ReplyModal" as="template">
            <Dialog as="div" @close="ReplyModal = false" class="relative z-50">
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
                                <h2 class="mb-[30px] text-xl/[25px] font-semibold text-black">Reply</h2>
                                <div class="mb-5">
                                    <h3 class="mb-2.5 text-black">{{ $t('details') }}</h3>
                                    <div class="text-editor rounded-lg shadow-4xl">
                                        <quill-editor @change="onEditorChange" class="!border-none !h-[84px]" :options="{
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
                                <div class="mt-[30px] flex gap-4">
                                    <button type="button" @click="sendReply(question.id)" class="btn">Submit</button>
                                    <button type="button" @click="ReplyModal = false" class="btn btn-linear">
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
import IconEye from '@/components/icon/icon-eye.vue';
import IconLock from '@/components/icon/icon-lock.vue';
import IconArrowDown from '@/components/icon/icon-arrow-down.vue';
import IconMenu from '@/components/icon/icon-menu.vue';
import IconLink from '@/components/icon/icon-link.vue';
import IconBackArrow from '@/components/icon/icon-back-arrow.vue';
import IconVerify from '@/components/icon/icon-verify.vue';
import IconCrown from '@/components/icon/icon-crown.vue';
import IconShorting from '@/components/icon/icon-shorting.vue';
import IconCloseRound from '@/components/icon/icon-close-round.vue';
import IconHeart from '@/components/icon/icon-heart.vue';
import IconReply from '@/components/icon/icon-reply.vue';
import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogOverlay, } from '@headlessui/vue';
import forumService from '@/services/forumService';
import moment from 'moment';
import SingleReply from './SingleReply.vue';
import axios from 'axios';
const defaultPagintion = {
    total: 1,
    count: 1,
    per_page: 2,
    current_page: 1,
    next_page_url: null,
    previous_page_url: null,
    total_pages: 1
};
export default {
    components: {
        IconEye, IconArrowDown, IconLock, IconMenu, IconLink, IconBackArrow, IconVerify, IconCrown, IconShorting, IconCloseRound,
        TransitionChild, TransitionRoot, Dialog, DialogPanel, DialogOverlay,
        SingleReply, IconHeart, IconReply
    },
    props: {
        id: {
            required: true,
        }
    },
    data() {
        return {
            loading: true,
            ReplyModal: false,
            CreateForumDetails: false,
            question: null,
            answers: [],
            moment: null,
            pagination: defaultPagintion,
            replyData: {
                detail: ""
            }
        }
    },
    methods: {
        onEditorChange(data) {
            this.replyData = { ...this.replyData, detail: data.html };
            console.log(data)
        },
        async sendReply(id) {
            console.log(this.replyData.detail)
            try {
                const formData = new FormData();
                formData.append('user_id', this.user.id);
                formData.append('detail', this.replyData.detail);
                // Post the data using Axios
                axios.post(`/forum/questions/${id}/answer`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                    .then(response => {
                        console.log('Success:', response.data);
                        if (response.data.status_code == 200) {
                            this.$toastr.success('Reply submitted successfully');
                            // this.isModalVisible = false; // Close the modal after submission
                            // Optionally reset proposal message
                        } else if (response.data.status_code == 422) {
                            this.$toastr.error(response.data.message);
                        } else if (response.data.status_code == 400) {
                            this.$toastr.error(response.data.message);
                        } else {
                            this.$toastr.error('Something went wrong. Please try again later');
                        }
                        this.CreateForumDetails = false
                    })
                    .catch(error => {
                        console.log(error)
                        console.error('Error:', error.response ? error.response.data : error.message);
                    });
            } catch (error) {
                this.$toastr.error('Error submitting forum');
            }
        },
    },

    created() {
        this.moment = moment;
        forumService.getQuestionDetail(this.id).then(res => {
            this.loading = false;
            console.log(res.data);
            if (res.status_code == 200) {
                this.question = res.data.question;
                this.answers = res.data.answers.answers;
                this.pagination = res.data.answers.pagination;
            } else {
                this.$router.push('/forum');
            }
        })
    },
    computed: {
        user() {
            return this.$store.getters.user;
        },
    }
}
</script>
<style scoped>
.btn-hover:hover svg {
    color: white
}
</style>

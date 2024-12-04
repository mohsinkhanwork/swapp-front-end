<template>
    <div class="divide-y divide-gray-100">
        <div class="mx-5 space-y-4 py-5">
            <div class="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-5">
                <div class="flex grow items-center gap-2">
                    <div class="h-10 w-10 shrink-0 overflow-hidden rounded-lg bg-gray-100">
                        <img :src="answer.user.avatar" class="h-full w-full object-cover" alt="Profile" />
                    </div>
                    <div class="space-y-1.5">
                        <div class="flex items-center gap-1.5">
                            <h6 class="text-black">{{ answer.user.name }}</h6>
                            <icon-verify class="size-4 shrink-0 text-success" />
                        </div>
                        <div class="text-xs">{{ answer.user.profession }}</div>
                    </div>
                </div>
                <div class="flex items-center gap-2.5">
                    <div v-if="answer.best_answer"
                        class="inline-flex shrink-0 items-center gap-2 rounded-lg bg-[#DCFCE7] px-2 py-1.5 text-xs font-semibold text-black">
                        <icon-check class="size-4" />
                        <span>Best answer</span>
                    </div>
                    <button @click="likeAnswer(answer.id)" type="button" class="btn btn-linear px-2 text-black">
                        <span>{{ answer.likes }}</span>
                        <icon-heart class="size-5 text-danger" />
                    </button>
                </div>
            </div>
            <div class="space-y-4">
                <div v-html="answer.detail"></div>
            </div>
            <div class="flex flex-wrap items-center justify-between gap-4">
                <button @click="CommentModal = true" class="btn btn-linear group px-3">
                    <icon-back-arrow class="text-black transition group-hover:text-white" />
                    <span>Replies</span>
                    <span class="h-[18px] w-0.5 rounded-full bg-primary"></span>
                    <span class="text-black transition group-hover:text-white">{{ answer.comments_count }}</span>
                </button>
                <div class="text-xs font-semibold text-gray-300">{{ moment(answer.date).format("DD MMM, YYYY HH:mm a")
                    }}
                </div>
            </div>
        </div>
        <div v-if="answer.comments_count > 0" class="divide-y divide-gray-100 py-5 pl-10">
            <single-comment v-for="comment in answer.comments" :key="comment.id" :comment="comment" />
            <div v-if="loading" class="p-4">
                <span class="spinner"></span>
            </div>
            <template v-else>
                <div class="pt-2.5" v-if="!comments_loaded">
                    <button @click="getComments()" type="button" class="btn btn-linear group px-2 py-1.5">
                        <span>Show more comments</span>
                        <icon-shorting class="text-black group-hover:text-white" />
                    </button>
                </div>
            </template>
        </div>
        <TransitionRoot appear :show="CommentModal" as="template">
            <Dialog as="div" @close="CommentModal = false" class="relative z-50">
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
                                <h2 class="mb-[30px] text-xl/[25px] font-semibold text-black">Comment</h2>
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
                                    <button type="button" @click="sendComment(answer.id)" class="btn">Submit</button>
                                    <button type="button" @click="CommentModal = false" class="btn btn-linear">
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
import IconCheck from '@/components/icon/icon-check.vue';
import IconHeart from '@/components/icon/icon-heart.vue';
import IconBackArrow from '@/components/icon/icon-back-arrow.vue';
import SingleComment from './SingleComment.vue';
import IconVerify from '@/components/icon/icon-verify.vue';
import IconShorting from '@/components/icon/icon-shorting.vue';
import moment from 'moment';
import forumService from '@/services/forumService';
import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogOverlay, } from '@headlessui/vue';
import axios from 'axios';
export default {
    props: {
        answer: {
            required: true
        }
    },
    components: {
        IconCheck, IconHeart, IconBackArrow, IconVerify, IconShorting,
        SingleComment, TransitionChild, TransitionRoot, Dialog, DialogPanel, DialogOverlay,
    },
    data() {
        return {
            moment: null,
            loading: false,
            comments_loaded: false,
            CommentModal: false,
            replyData: {
                detail: ""
            }
        }
    },
    methods: {
        getComments() {
            this.loading = true;
            forumService.getComments(this.answer.id).then(res => {
                this.answer.comments = res.data;
                this.comments_loaded = true;
                this.loading = false;
            })
        },
        onEditorChange(data) {
            this.replyData = { ...this.replyData, detail: data.html };
        },
        async likeAnswer(id) {
            try {
                axios.post(`/forum/answers/${id}/like`)
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
                        this.CommentModal = false
                    })
                    .catch(error => {
                        console.log(error)
                        console.error('Error:', error.response ? error.response.data : error.message);
                    });
            } catch (error) {
                this.$toastr.error('Error submitting forum');
            }

        },
        async sendComment(id) {
            console.log(this.replyData.detail)
            try {
                const formData = new FormData();
                formData.append('user_id', this.user.id);
                formData.append('detail', this.replyData.detail);
                // Post the data using Axios
                axios.post(`/forum/answers/${id}/comment`, formData, {
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
                        this.CommentModal = false
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
        this.moment = moment
    },
    computed: {
        user() {
            return this.$store.getters.user;
        },
    }
}
</script>

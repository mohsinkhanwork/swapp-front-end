<template>
    <div class="border-t-[1px] border-[#E2E4E9] w-full pt-5 space-y-4">
        <div class="flex justify-between w-full">
            <div class="flex gap-[10px]">
                <img src="/assets/images/profile.png" class="h-10 w-10" alt="profile">
                <div class="space-y-[6px]">
                    <div class="flex gap-[6px] items-center">
                        <router-link :to="`/${postUser.username}`">
                            <div class="text-[#18181B] text-[14px]"> {{ localData.user.name }}
                            </div>
                        </router-link>
                        <img src="/assets/images/verify-Icon.jpg" alt="profile">
                        <div class="text-[#A1A1AA] text-[12px]">{{ formattedDate }}</div>
                    </div>
                    <div class="text-[#525866] text-[12px] font-medium">{{ localData.user.profession }}</div>
                </div>
            </div>
            <vue-popper placement="bottom-end" offsetDistance="0" class="relative !m-0 !border-0">
                <button type="button" class="grid place-content-center">
                    <icon-more class="size-5" />
                </button>
                <template #content>
                    <div class="flex flex-col h-auto w-auto p-[6px]">
                        <div
                            class="my-2.5 space-y-1.5 rounded-lg bg-white p-1.5 shadow-[0_0_0_1px_rgba(18,43,105,0.08),0_1px_2px_0_rgba(18,43,105,0.08)]">
                            <div @click="editPost"
                                class="flex items-center gap-2 cursor-pointer rounded-lg px-2.5 py-2 transition hover:bg-gray-200 hover:text-black">
                                <icon-delete class="size-4 text-[#EF4444]" />
                                <span>{{ $t('edit') }}</span>
                            </div>
                            <div @click="deletePost(localData.id)"
                                class="flex items-center gap-2 cursor-pointer rounded-lg px-2.5 py-2 transition hover:bg-gray-200 hover:text-black">
                                <icon-delete class="size-4 text-[#EF4444]" />
                                <span>{{ $t('delete') }}</span>
                            </div>
                        </div>
                    </div>
                </template>
            </vue-popper>
        </div>
        <div class="pl-[50px] space-y-2">
            <div class="text-[14px] leading-[22px] text-[#525866] mb-3" ref="myRef"></div>
            <div class="flex justify-between items-center">
                <div class="flex gap-[10px]">
                    <button type="button" @click="toggleReply"
                        class="flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-left shadow-3xl ring-1 ring-inset ring-gray-100">
                        <icon-reply class="size-4 shrink-0 text-black" />
                        <span>{{ localData.comments_count }}</span>
                    </button>
                    <button type="button" @click="likeFeed(localData.id)"
                        class="flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-left shadow-3xl ring-1 ring-inset ring-gray-100">
                        <icon-heart class="size-4 shrink-0 text-[#EF4444]" />
                        <span>{{ localData.likes_count }}</span>
                    </button>
                </div>
                <div class="text-[#A1A1AA] text-[12px]">{{ formattedDate }}</div>
            </div>
            <div class="space-y-5 transition-all" v-if="toggle">
                <ReplyWysiwyg :feedId="localData.id" @updateCommentList="updateCommentList" />
                <template v-if="commentLists.length > 0">
                    <single-comment v-for="comment in commentLists" @deleteComment="deleteComment" :key="comment.id" :comment="comment" />
                </template>
            </div>
            <TransitionRoot appear :show="updatePost" as="template">
                <Dialog as="div" @close="updatePost = false" class="relative z-50">
                    <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0"
                        enter-to="opacity-100" leave="duration-200 ease-in" leave-from="opacity-100"
                        leave-to="opacity-0">
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
                                        $t('edit_post_details') }}
                                    </h2>
                                    <div class="space-y-5">
                                        <EditWysiwyg :feedId="localData.id" @updatedPost="updatedPost"
                                            :content="post.description" />
                                    </div>
                                </DialogPanel>
                            </TransitionChild>
                        </div>
                    </div>
                </Dialog>
            </TransitionRoot>
        </div>
    </div>
</template>
<script>
import IconMore from '@/components/icon/icon-more.vue';
import IconHeart from '@/components/icon/icon-heart.vue';
import IconShare from '@/components/icon/icon-share.vue';
import IconReply from '@/components/icon/icon-reply.vue';
import IconEdit from '@/components/icon/icon-edit.vue'
import iconDelete from '@/components/icon/icon-delete.vue';
import axios from 'axios';
import EditWysiwyg from '@/components/editor/EditWysiwyg.vue';
import ReplyWysiwyg from '@/components/editor/ReplyWysiwyg.vue';
import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogOverlay } from '@headlessui/vue';
import SingleComment from './SingleCom.vue';
export default {
    components: {
        IconMore,
        IconHeart,
        IconShare,
        IconReply,
        IconEdit,
        iconDelete,
        EditWysiwyg,
        ReplyWysiwyg,
        TransitionChild, TransitionRoot, Dialog, DialogPanel, DialogOverlay,
        SingleComment
    },
    props: {
        post: {
            required: true
        }
    },
    data() {
        return {
            localData: this.post,
            toggle: false,
            updatePost: false,
            content: "",
            commentLists: [],
            pagination: null
        }
    },
    methods: {
        async getCommentLists() {
            // this.loading = true;
            try {
                const response = await axios.get(`/feeds/${this.post.id}/comments`);
                this.commentLists = response.data.data.comments;
                this.pagination = response.data.data.pagination;
            } catch (error) {
                console.log(error)
                this.error = 'Failed to load feeds';
            }
        },
        toggleReply() {
            this.toggle = !this.toggle
        },
        editPost() {
            // this.content = this.post.description;
            this.updatePost = true
        },
        updateContent(content) {
            console.log(content)
        },
        updateCommentList(newList) {
            console.log(newList)
            // this.localData.unshift(newList)
            this.commentLists.unshift(newList)
            this.post.comments_count = this.post.comments_count + 1;
            // this.CreateForumDetails = newValue;  // Update the parent's value
        },
        async likeFeed(id) {
            try {
                const response = await axios.post(`/feeds/${id}/like`);
                this.localData = response.data.data;
            } catch (error) {
                this.$toasted.show('An error occurred while liking the post.', { type: 'error' });
            }
        },
        async deletePost(id) {
            try {
                const response = await axios.delete(`/feeds/${id}`);
                this.$emit('postDeleted', id);
            } catch (error) {
                this.$toasted.show('An error occurred while liking the post.', { type: 'error' });
            }
        },
        deleteComment(id) {
            this.commentLists = this.commentLists.filter(item => item.id !== id);
            this.$toastr.success('Comment deleted successfully');
        },
        updatedPost(content) {
            this.updatePost = false;
            this.$refs.myRef.innerHTML = content;
            this.post.description = content
        }
    },
    computed: {
        user() {
            return this.$store.getters.user;
        },
        postUser() {
            return this.post.user;
        },
        formattedDate() {
            const userLanguageData = localStorage.getItem('i18n_locale');
            const date = new Date(this.post.created_at);
            const options = {
                day: '2-digit',
                month: 'short',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                hour12: true,
                ...(this.user.timezone && {timeZone: this.user.timezone})
            };
            return date.toLocaleDateString(userLanguageData == 'tr' ? 'tr' : 'en', options);
        },

    },
    mounted() {
        this.$refs.myRef.innerHTML = this.post.description;
        console.log("Now its mounted");
    },
    watch: {
        // Watch for changes to the prop and update local data accordingly
        post(newFeed) {
            this.localData = newFeed;
        }
    },
    created() {
        this.getCommentLists();
    }
}
</script>

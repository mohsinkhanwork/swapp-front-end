<template>
    <div class="border-t-[1px] border-[#E2E4E9] w-full pt-5 space-y-4">
        <div class="flex justify-between w-full">
            <div class="flex gap-[10px]">
                <img src="/assets/images/profile.png" class="h-10 w-10" alt="profile">
                <div class="space-y-[6px]">
                    <div class="flex gap-[6px] items-center">
                        <router-link :to="`/${user.username}/${user.id}`">
                            <div class="text-[#18181B] text-[14px]"> {{ localData.user.name }}
                            </div>
                        </router-link>
                        <img src="/assets/images/verify-Icon.jpg" alt="profile">
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
                            <div @click="deleteComment(localData.id)"
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
    },
    props: {
        comment: {
            required: true
        }
    },
    data() {
        return {
            localData: this.comment,
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
                console.log(this.post.id)
                const response = await axios.get(`/feeds/${this.post.id}/comments`);
                this.commentLists = response.data.data.comments;
                this.pagination = response.data.data.pagination;
                console.log(response)

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
        updateValue(newValue) {
            this.CreateForumDetails = newValue;  // Update the parent's value
        },
        async likeFeed(id) {
            try {
                const response = await axios.post(`/feeds/${id}/like`);
                this.localData = response.data.data;


            } catch (error) {
                this.$toasted.show('An error occurred while liking the post.', { type: 'error' });
            }
        },
        async deleteComment(id) {
            try {
                const response = await axios.delete(`/feeds/comments/${id}`);
                // this.localData = response.data.data;
                console.log(response)
                this.$emit('deleteComment', id);


            } catch (error) {
                this.$toasted.show('An error occurred while liking the post.', { type: 'error' });
            }
        },

    },
    computed: {
        user() {
            return this.$store.getters.user;
        },
        formattedDate() {
            const userLanguageData = localStorage.getItem('i18n_locale');

            const date = new Date(this.comment.created_at);
            const options = {
                day: '2-digit',
                month: 'short',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                hour12: true,
                timeZone: this.user.timezone ? this.user.timezone : ''
            };

            return date.toLocaleDateString(userLanguageData == 'tr' ? 'tr' : 'en', options);
        },

    },
    mounted() {
        this.$refs.myRef.innerHTML = this.comment.detail;
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

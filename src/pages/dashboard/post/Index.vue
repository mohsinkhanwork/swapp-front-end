<template>
    <div class="space-y-5">
        <div class="rounded-lg bg-white px-5 py-[23px] shadow-3xl">
            <div class="shrink-0 text-base/5 font-semibold text-black">{{ $t('post') }}</div>
        </div>
        <div class="flex justify-center w-full">
            <div class="max-[850px]:w-full w-[777px] bg-white p-5 rounded-lg shadow-3xl space-y-5">
                <div class="rounded-lg object-cover shrink-0 relative flex gap-5 w-full">
                    <img src="/assets/images/profile.png" class="h-10 w-10" alt="profile">
                    <CustomWysiwyg @postSent="addNewPost" />
                </div>

                <template v-if="!loading">
                    <template v-if="postLists.length > 0">
                        <single-post v-for="post in postLists" :key="post.id" :post="post" @postDeleted="removePost" />
                    </template>
                    <div v-else>
                        <h2 class="text-center p-6 text-lg">{{ $t('no_record_found') }}</h2>
                    </div>

                </template>
                <div v-else class="p-4 text-center">
                    <span class="spinner !h-14 !w-14"></span>
                </div>
            </div>
        </div>

    </div>
</template>
<script>

import IconArrowDown from '@/components/icon/icon-arrow-down.vue';
import IconSearch from '@/components/icon/icon-search.vue';
import IconFilter from '@/components/icon/icon-filter.vue';
import IconMore from '@/components/icon/icon-more.vue';
import IconHeart from '@/components/icon/icon-heart.vue';
import IconShare from '@/components/icon/icon-share.vue';
import IconReply from '@/components/icon/icon-reply.vue';
import IconEdit from '@/components/icon/icon-edit.vue'
import iconDelete from '@/components/icon/icon-delete.vue';
import CustomWysiwyg from '@/components/editor/CustomWysiwyg.vue';
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue';
import SinglePost from './SinglePost.vue';
import axios from 'axios';
export default {
    components: {
        IconArrowDown,
        IconSearch,
        IconFilter,
        TabGroup,
        TabList,
        Tab,
        TabPanels,
        TabPanel,
        IconMore,
        IconHeart,
        IconShare,
        IconReply,
        IconEdit,
        iconDelete,
        CustomWysiwyg,
        SinglePost
    },
    data() {
        return {
            postLists: [],
            pagination: {},
            loading: false,
        };
    },
    computed: {

    },
    methods: {

        async getPostLists() {
            this.loading = true;
            try {
                const response = await axios.get('/feeds');
                this.postLists = response.data.data.feeds;
                this.pagination = response.data.pagination;
                this.loading = false;
                console.log(this.postLists)

            } catch (error) {
                this.error = 'Failed to load feeds';
                console.error('Error fetching feeds:', error);
                this.loading = false;

            }
        },
        addNewPost(newPost) {
            // Add the newly created feed to the feeds array
            this.postLists.unshift(newPost); // Add to the start of the array
        },
        removePost(deletedFeedId) {
            // Filter out the deleted feed
            this.postLists = this.postLists.filter(feed => feed.id !== deletedFeedId);
        }
    },
    created() {
        this.getPostLists();
    }
};
</script>

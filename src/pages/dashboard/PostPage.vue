<template>
    <div class="space-y-5">
        <div class="rounded-lg bg-white px-5 py-[23px] shadow-3xl">
            <div class="shrink-0 text-base/5 font-semibold text-black">{{ $t('post') }}</div>
        </div>
        <div class="flex justify-center w-full">
            <div class="max-[850px]:w-full w-[777px] bg-white p-5 rounded-lg shadow-3xl space-y-5">
                <div class="rounded-lg object-cover shrink-0 relative flex gap-5 w-full">
                    <img src="/assets/images/profile.png" class="h-10 w-10" alt="profile">
                    <CustomWysiwyg />
                </div>

                <div class="border-t-[1px] border-[#E2E4E9] w-full pt-5 space-y-4">
                    <div class="flex justify-between w-full">
                        <div class="flex gap-[10px]">
                            <img src="/assets/images/profile.png" class="h-10 w-10" alt="profile">
                            <div class="space-y-[6px]">
                                <div class="flex gap-[6px]">
                                    <div class="text-[#18181B] text-[14px]">Guy Hawkins</div>
                                    <img src="/assets/images/verify-Icon.jpg" alt="profile">
                                </div>
                                <div class="text-[#525866] text-[12px] font-medium">Musical artiest</div>
                            </div>
                        </div>
                        
                        <!-- <icon-more class="size-5" /> -->
                    </div>
                    <div class="pl-[50px] space-y-2">
                        <div class="text-[14px] leading-[22px] text-[#525866] mb-3"> It is a long established fact that
                            a reader will be distracted by the readable content of a page when looking at its layout. 
                        </div>
                        <div class="grid grid-cols-2 gap-[15px]">
                            <img src="/assets/images/image 4.jpg" class="rounded-lg" alt="profile">
                            <img src="/assets/images/2.jpg" alt="profile">
                        </div>
                        <div class="flex justify-between items-center">
                            <div class="flex gap-[10px]">
                                <button type="button"
                                    class="flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-left shadow-3xl ring-1 ring-inset ring-gray-100">
                                    <icon-reply class="size-4 shrink-0 text-black" />
                                    <span>15</span>
                                </button>
                                <button type="button"
                                    class="flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-left shadow-3xl ring-1 ring-inset ring-gray-100">
                                    <icon-heart class="size-4 shrink-0 text-[#EF4444]" />
                                    <span>15</span>
                                </button>
                                <button type="button"
                                    class="flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-left shadow-3xl ring-1 ring-inset ring-gray-100">
                                    <icon-share class="size-4 shrink-0 text-[#18181B]" />
                                    <span>15</span>
                                </button>
                            </div>
                            <div class="text-[#A1A1AA] text-[12px]">20 May 2023, 10:05 pm</div>
                        </div>

                    </div>
                </div>
                <div class="border-t-[1px] border-[#E2E4E9] w-full pt-5 space-y-4">
                    <div class="flex justify-between w-full">
                        <div class="flex gap-[10px]">
                            <img src="/assets/images/profile.png" class="h-10 w-10" alt="profile">
                            <div class="space-y-[6px]">
                                <div class="flex gap-[6px]">
                                    <div class="text-[#18181B] text-[14px]">Annette Black</div>
                                    <img src="/assets/images/verify-Icon.jpg" alt="profile">
                                </div>
                                <div class="text-[#525866] text-[12px] font-medium">Crane Operator</div>
                            </div>
                        </div>
                        <icon-more class="size-5" />
                    </div>
                    <div class="pl-[50px] space-y-2">
                        <div class="text-[14px] leading-[22px] text-[#525866] mb-3">Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. </div>
                        <div class="flex justify-between items-center">
                            <div class="flex gap-[10px]">
                                <button type="button"
                                    class="flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-left shadow-3xl ring-1 ring-inset ring-gray-100">
                                    <icon-reply class="size-4 shrink-0 text-black" />
                                    <span>15</span>
                                </button>
                                <button type="button"
                                    class="flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-left shadow-3xl ring-1 ring-inset ring-gray-100">
                                    <icon-heart class="size-4 shrink-0 text-[#EF4444]" />
                                    <span>15</span>
                                </button>
                                <button type="button"
                                    class="flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-left shadow-3xl ring-1 ring-inset ring-gray-100">
                                    <icon-share class="size-4 shrink-0 text-[#18181B]" />
                                    <span>15</span>
                                </button>
                            </div>
                            <div class="text-[#A1A1AA] text-[12px]">20 May 2023, 10:05 pm</div>
                        </div>

                    </div>
                </div>
                <div class="border-t-[1px] border-[#E2E4E9] w-full pt-5 space-y-4">
                    <div class="flex justify-between w-full">
                        <div class="flex gap-[10px]">
                            <img src="/assets/images/profile.png" class="h-10 w-10" alt="profile">
                            <div class="space-y-[6px]">
                                <div class="flex gap-[6px]">
                                    <div class="text-[#18181B] text-[14px]">Cameron Williamson</div>
                                    <img src="/assets/images/verify-Icon.jpg" alt="profile">
                                </div>
                                <div class="text-[#525866] text-[12px] font-medium">HVAC Technician</div>
                            </div>
                        </div>
                        <icon-more class="size-5" />
                    </div>
                    <div class="pl-[50px] space-y-2">
                        <div class="text-[14px] leading-[22px] text-[#525866] mb-3">Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                            irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </div>
                        <div class="flex justify-between items-center">
                            <div class="flex gap-[10px]">
                                <button type="button"
                                    class="flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-left shadow-3xl ring-1 ring-inset ring-gray-100">
                                    <icon-reply class="size-4 shrink-0 text-black" />
                                    <span>15</span>
                                </button>
                                <button type="button"
                                    class="flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-left shadow-3xl ring-1 ring-inset ring-gray-100">
                                    <icon-heart class="size-4 shrink-0 text-[#EF4444]" />
                                    <span>15</span>
                                </button>
                                <button type="button"
                                    class="flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-left shadow-3xl ring-1 ring-inset ring-gray-100">
                                    <icon-share class="size-4 shrink-0 text-[#18181B]" />
                                    <span>15</span>
                                </button>
                            </div>
                            <div class="text-[#A1A1AA] text-[12px]">20 May 2023, 10:05 pm</div>
                        </div>

                    </div>
                </div>
                <div class="border-t-[1px] border-[#E2E4E9] w-full pt-5 space-y-4">
                    <div class="flex justify-between w-full">
                        <div class="flex gap-[10px]">
                            <img src="/assets/images/profile.png" class="h-10 w-10" alt="profile">
                            <div class="space-y-[6px]">
                                <div class="flex gap-[6px]">
                                    <div class="text-[#18181B] text-[14px]">Robert Fox</div>
                                    <img src="/assets/images/verify-Icon.jpg" alt="profile">
                                </div>
                                <div class="text-[#525866] text-[12px] font-medium">Glazier</div>
                            </div>
                        </div>
                        <icon-more class="size-5" />
                    </div>
                    <div class="pl-[50px] space-y-2">
                        <div class="text-[14px] leading-[22px] text-[#525866] mb-3">Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                            occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                            laborum. </div>
                        <div class="flex justify-between items-center">
                            <div class="flex gap-[10px]">
                                <button type="button"
                                    class="flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-left shadow-3xl ring-1 ring-inset ring-gray-100">
                                    <icon-reply class="size-4 shrink-0 text-black" />
                                    <span>15</span>
                                </button>
                                <button type="button"
                                    class="flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-left shadow-3xl ring-1 ring-inset ring-gray-100">
                                    <icon-heart class="size-4 shrink-0 text-[#EF4444]" />
                                    <span>15</span>
                                </button>
                                <button type="button"
                                    class="flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-left shadow-3xl ring-1 ring-inset ring-gray-100">
                                    <icon-share class="size-4 shrink-0 text-[#18181B]" />
                                    <span>15</span>
                                </button>
                            </div>
                            <div class="text-[#A1A1AA] text-[12px]">20 May 2023, 10:05 pm</div>
                        </div>

                    </div>
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
        CustomWysiwyg
    },
    data() {
        return {
            postLists: [],
            pagination: {}
        };
    },
    computed: {

    },
    methods: {
        async getPostLists() {
            try {
                const response = await axios.get('/feeds');
                this.postLists = response.data.data.feeds;
                this.pagination = response.data.pagination;
                console.log(this.postLists)
            } catch (error) {
                this.error = 'Failed to load feeds';
                console.error('Error fetching feeds:', error);
            }
        },
        async sendPost() {
            try {
                const response = await axios.post('/feeds');
            } catch (error) {
                this.error = 'Failed to load feeds';
                console.error('Error fetching feeds:', error);
            }
        },
        async submitProposal() {
            try {
                const formData = new FormData();
                formData.append('skill_id', this.selectedSkill.id);
                formData.append('proposal', this.proposalMessage);

                const response = await axios.post('/feed', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
                console.log('post submitted successfully:', response.data);
                // if (response.data.status_code == 200) {
                //     this.$toastr.success('Proposal submitted successfully');
                //     this.isModalVisible = false; // Close the modal after submission
                //     // Optionally reset proposal message
                //     this.proposalMessage = '';
                // } else if (response.data.status_code == 422) {
                //     this.$toastr.error(response.data.message);
                // } else if (response.data.status_code == 400) {
                //     this.$toastr.error(response.data.message);
                // } else {
                //     this.$toastr.error('Something went wrong. Please try again later');
                // }
            } catch (error) {
                this.$toastr.error('Error submitting post');
                // console.error('Error submitting proposal:', error);
            }
        },
    },
    created() {
        this.getPostLists();
    }
};
</script>

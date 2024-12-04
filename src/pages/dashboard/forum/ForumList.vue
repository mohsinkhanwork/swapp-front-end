<template>
    <div class="space-y-5">
        <div
            class="flex flex-col justify-between gap-3 rounded-lg bg-white px-5 py-[15px] shadow-3xl md:flex-row md:items-center">
            <div class="shrink-0 text-base/5 font-semibold text-black">Forum list</div>

            <div class="shrink-0 text-base/5 font-semibold text-black">{{ $t('Forum_list') }}</div>

            <div class="flex items-center gap-4">
                <button type="button" @click="toggleSidebar" class="lg:hidden">
                    <icon-menu class="size-7" />
                </button>
                <button type="button" @click="CreateForumDetails = true" class="btn">
                    <icon-close-round class="size-4 rotate-45" />
                    <span>Post Question</span>
                </button>
            </div>
        </div>
        <div class="flex items-start gap-4">
            <div class="fixed -left-64 top-[75px] h-dvh w-64 shrink-0 overflow-y-auto bg-white p-5 shadow-3xl transition-all lg:sticky lg:top-[88px] lg:h-auto lg:rounded-lg"
                :class="{ 'left-0': isSidebarOpen }">
                <div class="relative mb-5">
                    <icon-search class="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-black" />
                    <input v-model="search" @keyup="searchData" type="text" :placeholder="$t('search')"
                        class="form-input py-[7px] pl-9" />
                </div>
                <div>
                    <h5 class="text-xs font-semibold uppercase">
                        tags
                    </h5>
                    <div class="mt-2.5">
                        <label v-for="tag in forumTags" :key="tag.id"
                            class="mb-3 flex flex-wrap items-center justify-between gap-3 text-sm">
                            <span class="peer flex cursor-pointer items-center gap-2">
                                <input type="checkbox" class="peer form-checkbox size-3" v-model="tags" :value="tag.id"
                                    @change="getQuestions" />
                                <span class="leading-[18px] peer-checked:text-black">{{ tag.name }}</span>
                            </span>
                            <span class="text-xs font-semibold peer-has-[:checked]:text-black">{{ tag.questions_count
                                }}</span>
                        </label>
                    </div>
                </div>
                <div class="relative mt-4">
                    <span
                        class="absolute -top-px right-4 rounded-b-lg bg-danger px-1.5 py-1 text-[10px]/none font-bold uppercase text-white">Ads</span>
                    <img src="/assets/images/ad-one.png" alt="ads" class="h-full w-full object-cover" />
                </div>
            </div>
            <div class="grow overflow-hidden rounded-lg bg-white shadow-3xl">
                <div class="space-y-2 border-b border-gray-100 bg-gray-200 p-4">
                    <h4 class="text-lg/[22px] font-semibold text-black">{{ $t('questions') }}</h4>
                    <p>
                        Engage in discussions, share information, and exchange ideas within our vibrant community
                        forums.
                    </p>
                </div>
                <div class="divide-y divide-gray-100 px-4">
                    <template v-if="!loading">
                        <template v-if="questions.length > 0">
                            <single-question v-for="question in questions" :key="question.id" :question="question" />
                        </template>
                        <div v-else>
                            <h2 class="text-center p-6 text-lg">{{ $t('no_record_found') }}</h2>
                        </div>
                    </template>
                    <div v-else class="text-center p-4">
                        <span class="spinner !h-14 !w-14"></span>
                    </div>
                </div>
            </div>
        </div>

        <TransitionRoot appear :show="CreateForumDetails" as="template">
            <Dialog as="div" @close="CreateForumDetails = false" class="relative z-50">
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
                                    $t('create_forum_details') }}
                                </h2>
                                <div class="space-y-5">
                                    <div>
                                        <h3 class="mb-1.5 text-black">{{ $t('title') }}</h3>
                                        <p class="mb-2.5 text-xs">
                                            {{ $t('be_specific') }}
                                        </p>
                                        <input type="text" class="form-input" v-model="forumData.title"
                                            placeholder="Ex. software engineer, ect.." />
                                    </div>
                                    <div class="flex gap-5">
                                        <label class="flex items-center gap-2 rounded-lg px-3 py-[9px] shadow-4xl">
                                            <input type="checkbox" v-model="forumData.isPublic"
                                                class="peer form-checkbox size-3" />
                                            <span class="peer-checked:text-black">Public</span>
                                        </label>
                                        <label class="flex items-center gap-2 rounded-lg px-3 py-[9px] shadow-4xl">
                                            <input type="checkbox" v-model="forumData.isMembers"
                                                class="peer form-checkbox size-3" />
                                            <span class="peer-checked:text-black">Members</span>
                                        </label>
                                    </div>
                                    <div class="mb-5">
                                        <h3 class="mb-2.5 text-black">{{ $t('details') }}</h3>
                                        <div class="text-editor rounded-lg shadow-4xl">
                                            <quill-editor @change="onEditorChange" ref="quillEditor" contentType="html"
                                                class="!h-[84px] !border-none" :options="{
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
                                        <h3 class="mb-1.5 text-black">{{ $t('title') }}</h3>
                                        <p class="mb-2.5 text-xs">
                                            {{ $t('be_specific') }}
                                        </p>
                                        <div class="relative">
                                            <VueMultiselect v-model="forumData.selectedTag" :multiple="true"
                                                :taggable="true" :options="options">
                                            </VueMultiselect>
                                            <!-- <select class="form-select" v-model="forumData.selectedTag">
                                                <option>tags</option>
                                                <option>Software engineer</option>
                                                <option>Advocate</option>
                                                <option>CA</option>
                                                <option>Business Analytics</option>
                                            </select> -->
                                            <!-- <icon-arrow-down
                                                class="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-black" /> -->
                                        </div>
                                    </div>
                                </div>
                                <div class="mt-[30px] flex gap-4">
                                    <button type="button" class="btn" @click="sendForum">Submit</button>
                                    <button type="button" @click="CreateForumDetails = false" class="btn btn-linear">
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
import IconArrowDownFill from '@/components/icon/icon-arrow-down-fill.vue';
import IconMenu from '@/components/icon/icon-menu.vue';
import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogOverlay } from '@headlessui/vue';
import IconCloseRound from '@/components/icon/icon-close-round.vue';
import IconArrowDown from '@/components/icon/icon-arrow-down.vue';
import forumService from '@/services/forumService';
import SingleQuestion from './SingleQuestion.vue'
import IconSearch from '@/components/icon/icon-search.vue';
import VueMultiselect from 'vue-multiselect'
import axios from 'axios';
export default {
    components: {
        TransitionChild, TransitionRoot, Dialog, DialogPanel, DialogOverlay,
        IconArrowDownFill, IconMenu, IconCloseRound, IconArrowDown, IconSearch,
        SingleQuestion, VueMultiselect,
    },
    data() {
        return {
            CreateForumDetails: false,
            isSidebarOpen: false,
            loading: false,
            search: '',
            search_timer: null,
            questions: [],
            tags: [],
            forumData: {
                title: '',
                isPublic: false,
                isMembers: false,
                details: '',
                selectedTag: ''
            },
            options: ['Software engineer', 'Advocate', 'CA', 'Business Analytics']
        }
    },
    computed: {
        forumTags() {
            return this.$store.getters.forum_tags;
        },
        user() {
            return this.$store.getters.user;
        },
    },
    methods: {
        toggleSidebar() {
            this.isSidebarOpen = !this.isSidebarOpen;
        },
        getQuestions() {
            this.loading = true;
            forumService.getQuestions({ search: this.search, tags: this.tags }).then(res => {
                this.questions = res.data.questions;
                this.loading = false
            });
        },
        searchData() {
            const SEARCH_DELAY = 600;
            if (this.timer) clearTimeout(this.timer);
            this.timer = null;
            this.timer = setTimeout(() => this.getQuestions(), SEARCH_DELAY);
        },
        onEditorChange(data) {
            this.forumData = { ...this.forumData, details: data.html };
        },
        async sendForum() {
            try {
                const formData = new FormData();
                formData.append('title', this.forumData.title);
                formData.append('detail', this.forumData.details);
                formData.append('privacy', 'public');
                this.forumData.selectedTag.forEach(tag => {
                    formData.append('tags[]', tag);
                });
                // Post the data using Axios
                axios.post('/forum/question', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                    .then(response => {
                        console.log('Success:', response.data);
                        if (response.data.status_code == 200) {
                            this.$toastr.success('Forum submitted successfully');
                            this.getQuestions();
                            this.isModalVisible = false; // Close the modal after submission
                            // Optionally reset proposal message
                            this.acceptedMessage = '';
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
        this.getQuestions();
    }
}
</script>
<style src="vue-multiselect/dist/vue-multiselect.css"></style>

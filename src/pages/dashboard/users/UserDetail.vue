<template>
    <div class="flex h-full flex-col items-center gap-4" id="infinite-list">
        <div class="-mt-4 max-w-[728px]">
            <img src="/assets/images/ad-two.png" alt="Ads" class="w-full" />
        </div>
        <div v-if="loading" class="p-5 text-center">
            <span class="spinner !h-16 !w-16"></span>
        </div>
        <div v-else class="flex w-full max-w-[977px] grow items-center">
            <div v-if="user" class="relative w-full overflow-hidden rounded-lg bg-white p-5 pb-16 shadow-3xl md:pb-8">
                <div class="absolute left-0 top-0 h-[70px] w-full overflow-hidden bg-primary/10">
                    <div
                        class="absolute -bottom-16 left-1/2 grid size-72 -translate-x-1/2 place-content-center rounded-full border border-primary"
                    >
                        <div class="grid size-56 place-content-center rounded-full border border-primary">
                            <div class="size-36 rounded-full border border-primary"></div>
                        </div>
                    </div>
                </div>
                <div class="relative flex flex-col items-start justify-between gap-3 md:flex-row md:gap-[18px]">
                    <div class="grow">
                        <div class="space-y-4">
                            <div class="size-20 overflow-hidden rounded-lg">
                                <img :src="user.avatar" alt="User Profile" />
                            </div>
                            <div class="space-y-1.5">
                                <div class="flex gap-1.5">
                                    <h4 class="text-base/5 font-semibold text-black">{{ user.name }} </h4>
                                    <img src="/assets/images/crown.svg" alt="Crown" class="size-[18px]" />
                                </div>
                                <div class="flex flex-wrap items-center gap-2.5">
                                    <span>{{ user.profession }}</span>
                                    <span class="size-1 rounded-full bg-primary"></span>
                                    <div class="flex items-center gap-2">
                                        <icon-calendar class="size-4 text-black" />
                                        <span>{{ $t('joined') }} {{ moment(user.created_at).format('MMM, YYYY') }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mt-5 space-y-5 border-t border-gray-100 pt-5">
                            <div class="space-y-2.5">
                                <h5 class="font-semibold text-black">{{ $t('about') }}</h5>
                                <p>
                                    {{ user.bio }}
                                </p>
                            </div>
                            <div class="flex flex-wrap items-center gap-2.5">
                                <a
                                    :href="`tel:${user.phone}`"
                                    class="flex items-center gap-2 rounded-lg p-1.5 ring-1 ring-inset ring-gray-100 transition hover:text-black"
                                >
                                    <icon-call class="size-4 shrink-0 text-black" />
                                    <span>{{ user.phone }}</span>
                                </a>
                                <a
                                    :href="`mailto:${user.email}`"
                                    class="flex items-center gap-2 rounded-lg p-1.5 ring-1 ring-inset ring-gray-100 transition hover:text-black"
                                >
                                    <icon-email class="size-4 shrink-0 text-black" />
                                    <span>{{ user.email }}</span>
                                </a>
                            </div>
                            <div
                                class="flex flex-wrap items-center gap-2.5 text-[11px]/[14px] font-bold uppercase text-black"
                            >
                                <div v-for="skill in user.skills" class="rounded-lg bg-[#FEE2E2] p-1.5">
                                    {{ skill.name }}
                                </div>
                            </div>
                            <div class="flex flex-wrap items-center justify-between">
                                <div class="flex flex-wrap items-center gap-2.5">
                                    <a
                                        v-if="user.facebook_link"
                                        :href="user.facebook_link"
                                        target="_blank"
                                        class="grid size-8 place-content-center rounded-lg bg-[#316FF6]/5 transition hover:opacity-70"
                                    >
                                        <icon-facebook class="size-[18px]" />
                                    </a>
                                    <a
                                        v-if="user.linkedin_link"
                                        :href="user.linkedin_link"
                                        target="_blank"
                                        class="grid size-8 place-content-center rounded-lg bg-[#0077B5]/5 transition hover:opacity-70"
                                    >
                                        <icon-linkedin class="size-[18px]" />
                                    </a>
                                    <a
                                        v-if="user.instagram_link"
                                        :href="user.instagram_link"
                                        target="_blank"
                                        class="grid size-8 place-content-center rounded-lg bg-[#d62976]/5 transition hover:opacity-70"
                                    >
                                        <icon-instagram class="size-[18px]" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex shrink-0 flex-col gap-2 md:mt-20 md:flex-row md:gap-4">
                        <div v-if="!currentUser">
                            <button
                                v-if="!isFollowing"
                                type="button"
                                class="rounded-lg bg-primary px-3.5 py-1.5 text-black hover:opacity-70"
                                @click="toggleFollow"
                            >
                                {{ $t('follow') }}
                            </button>
                            <button
                                v-else
                                type="button"
                                class="rounded-lg bg-primary px-3.5 py-1.5 text-black hover:opacity-70"
                                @click="toggleFollow"
                            >
                                Unfollow
                            </button>
                        </div>
                        <CommonRequestDropdown :userId="userid" v-if="!currentUser"/>
                    </div>
                    <div class="absolute bottom-5 left-5 md:left-auto md:right-5" v-if="!currentUser">
                        <button
                            v-if="!isBlock"
                            type="button"
                            class="btn btn-linear px-1.5 py-[5px] text-black"
                            @click="toggleBlockUser"
                        >
                            <icon-block class="size-4" />
                            <span>{{ $t('block_user') }}</span>
                        </button>
                        <button
                            v-else
                            type="button"
                            class="btn btn-linear px-1.5 py-[5px] text-black"
                            @click="toggleBlockUser"
                        >
                            <!-- <icon-block class="size-4" /> -->
                            <span>Unblock user</span>
                        </button>
                    </div>
                </div>
                <div class="mt-5 space-y-5 border-t border-gray-100 pt-5"  >
                    <div class="space-y-2.5">
                        <h5 class="font-semibold text-black">{{ $t('posts') }}</h5>
                    </div>
                    <template v-if="!loading" >
                        <template v-if="postLists.length > 0">
                            <single-post class="mb-3" v-for="post in postLists" :key="post.id" :post="post" @postDeleted="removePost" />
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
        <div class="-mb-4 w-full max-w-[970px]">
            <img src="/assets/images/ad-two.png" alt="Ads" class="w-full" />
        </div>
    </div>
</template>
<script>
import { defineAsyncComponent } from 'vue'
import IconCalendar from '@/components/icon/icon-calendar.vue';
import IconCall from '@/components/icon/icon-call.vue';
import IconEmail from '@/components/icon/icon-email.vue';
import IconFacebook from '@/components/icon/icon-facebook.vue';
import IconLinkedin from '@/components/icon/icon-linkedin.vue';
import IconBlock from '@/components/icon/icon-block.vue';
import CommonRequestDropdown from '@/components/common/common-request-dropdown.vue';
import userService from '@/services/userService';
import moment from 'moment';
import IconInstagram from '@/components/icon/icon-instagram.vue';
import axios from 'axios';
import CommonPagination from '@/components/common/common-pagination.vue';
const SinglePost = defineAsyncComponent(() =>
    import('./../post/SinglePost.vue')
)
export default {
    components: {
        IconCalendar,
        IconCall,
        IconEmail,
        IconFacebook,
        IconLinkedin,
        IconInstagram,
        IconBlock,
        CommonRequestDropdown,
        SinglePost,
        CommonPagination,
    },
    props: {
        username: {
            required: true,
        },
        userid: {
            required: true,
        },
    },
    data() {
        return {
            user: null,
            loading: true,
            moment: null,
            isFollowing: false,
            isBlock: false,
            currentUser: false,
            postLists: [],
            pagination: {},
            page: 1
        };
    },
    created() {
        this.getUserDetail();
        this.getUserPostLists();
    },
    methods: {
        toggleFollow() {
            let userID = {
                user_id: this.user.id,
            };
            if (!this.isFollowing) {
                // follow user serive
                userService.followUser(userID).then((res) => {
                    this.loading = false;
                    if (res.status_code == 200) {
                        this.isFollowing = !this.isFollowing;
                        this.$toastr.success(res.message);
                    } else {
                        this.$toastr.success(res.message);
                    }
                });
            } else {
                // unfollow user service
                userService.unfollowUser(userID).then((res) => {
                    this.loading = false;
                    if (res.status_code == 200) {
                        this.isFollowing = !this.isFollowing;
                        this.$toastr.success(res.message);
                    } else {
                        this.$toastr.success(res.message);
                    }
                });
            }
        },
        toggleBlockUser() {
            let userID = {
                user_id: this.user.id,
            };
            if (!this.isBlock) {
                // block user serive
                userService.blockUser(userID).then((res) => {
                    this.loading = false;
                    if (res.status_code == 200) {
                        this.isBlock = !this.isBlock;
                        this.$toastr.success(res.message);
                    } else {
                        this.$toastr.success(res.message);
                    }
                });
            } else {
                userService.unblockUser(userID).then((res) => {
                    this.loading = false;
                    if (res.status_code == 200) {
                        this.isBlock = !this.isBlock;
                        this.$toastr.success(res.message);
                    } else {
                        this.$toastr.success(res.message);
                    }
                });
            }
        },
        getUserDetail() {
            this.moment = moment;
            let loggedInUser = this.$store.getters.user;
            if (loggedInUser.username === this.username) {
                this.currentUser = true;
            }
            userService.getUserDetail(this.username).then((res) => {
                this.loading = false;
                if (res.status_code == 200) {
                    this.user = res.data;
                    this.isFollowing = this.user.is_following;
                } else {
                    this.$router.push('/users');
                }
            });
        },
        async getUserPostLists() {
            // this.loading = true;
            try {
                const response = await axios.get('/posts/'+this.username+'?page='+this.page);
                response.data.data.feeds.forEach((feed) => {
                    this.postLists.push(feed)
                });
                this.pagination = response.data.data.pagination;
                this.loading = false;
            } catch (error) {
                this.error = 'Failed to load feeds';
                console.error('Error fetching feeds:', error);
                this.loading = false;
            }
        },
        removePost(deletedFeedId) {
            // Filter out the deleted feed
            this.postLists = this.postLists.filter(feed => feed.id !== deletedFeedId);
            this.$toastr.success('Post deleted successfully');
        },
        loadMore() {
            this.page= this.page + 1;
            this.getUserPostLists();
        },
        onScroll() {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const clientHeight = window.clientHeight || document.documentElement.clientHeight;
            const scrollHeight = window.scrollHeight || document.documentElement.scrollHeight;

            if(scrollTop + clientHeight >= scrollHeight) {
                this.loadMore();
            }
        }
    },
    mounted() {
        window.addEventListener('scroll', this.onScroll);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.onScroll);
    },
};
</script>

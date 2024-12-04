<template>
    <div class="space-y-5">
        <div class="rounded-lg bg-white px-5 py-[23px] shadow-3xl">
            <div class="shrink-0 text-base/5 font-semibold text-black">{{ $t('followers_and_following') }}</div>
        </div>
        <div class="overflow-hidden rounded-lg bg-white shadow-3xl">
            <TabGroup as="div" class="relative bg-white shadow-3xl">
                <div
                    class="flex flex-col-reverse justify-between border-b border-gray-100 px-5 pt-5 md:flex-row md:gap-3 md:pt-0"
                >
                    <TabList class="flex w-max items-center gap-5">
                        <Tab as="template" v-slot="{ selected }">
                            <button
                                @click="getData('followers')"
                                type="button"
                                class="border-b-2 border-transparent pb-3.5 pt-4 font-semibold transition hover:border-primary hover:text-black"
                                :class="{ '!border-primary !text-black': selected }"
                            >
                                Followers
                            </button>
                        </Tab>
                        <Tab as="template" v-slot="{ selected }">
                            <button
                                @click="getData('following')"
                                type="button"
                                class="border-b-2 border-transparent pb-3.5 pt-4 font-semibold transition hover:border-primary hover:text-black"
                                :class="{ '!border-primary !text-black': selected }"
                            >
                                {{ $t('following') }}
                            </button>
                        </Tab>
                        <Tab as="template" v-slot="{ selected }">
                            <button
                                @click="getData('blocklist')"
                                type="button"
                                class="border-b-2 border-transparent pb-3.5 pt-4 font-semibold transition hover:border-primary hover:text-black"
                                :class="{ '!border-primary !text-black': selected }"
                            >
                                {{ $t('blocklist') }}
                            </button>
                        </Tab>
                    </TabList>

                    <div class="flex items-center gap-4">
                        <div class="relative w-full lg:min-w-[300px]">
                            <icon-search class="absolute left-3 top-1/2 -translate-y-1/2 text-black" />
                            <input
                                v-model="search"
                                @keyup="searchData"
                                type="text"
                                :placeholder="$t('search')" class="form-input py-[7px] pl-9" />
                        </div>

                    </div>
                </div>
                <TabPanels class="overflow-x-auto">
                    <TabPanel>
                        <followers-list :followers="followers" :loading="loading" @unfollow="unfollowUser" @sort="sortBy"></followers-list>
                    </TabPanel>
                    <TabPanel>
                        <following-list :following="following" :loading="loading"></following-list>
                    </TabPanel>
                    <TabPanel>
                        <blocked-list :users="blocked_users" :loading="loading"></blocked-list>
                    </TabPanel>
                </TabPanels>
            </TabGroup>
        </div>

        <div class="!mt-2.5 flex flex-wrap justify-end gap-3 sm:gap-5">
            <button
                type="button"
                class="rounded-lg bg-white px-3 py-2.5 text-xs shadow-4xl transition hover:bg-gray-200"
            >
                {{ $t('showing') }} <span class="text-black">{{ paginationFrom }}</span> - <span class="text-black"> {{ paginationTo }} </span> of <span
                    class="text-black"
                >
                    {{pagination.total}}
                </span>
                {{ $t('entries') }}
            </button>
            <div class="flex overflow-hidden rounded-lg bg-white shadow-4xl">
                <button
                    type="button"
                    :disabled="pagination.current_page==1"
                    @click="updatePagination(pagination.current_page-1)"
                    class="grid size-9 shrink-0 place-content-center text-[#28282B] transition hover:bg-gray-200"
                >
                    <icon-arrow-down class="size-[18px] rotate-90" />
                </button>
                <div class="flex border-x border-gray-100 text-xs font-semibold text-gray">
                    <button
                        v-for="page in pagination.total_pages"
                        :key="page"
                        :class="pagination.current_page==page?'bg-[#d3d3d3]':''"
                        :disabled="pagination.current_page==page"
                        type="button"
                        @click="updatePagination(page)"
                        class="grid size-9 shrink-0 place-content-center border-r border-transparent transition hover:border-gray-100 hover:bg-gray-200"
                    >
                        {{ page }}
                    </button>
                </div>
                <button
                    type="button"
                    :disabled="!pagination.next_page_url"
                    @click="updatePagination(pagination.current_page+1)"
                    class="grid size-9 shrink-0 place-content-center text-[#28282B] transition hover:bg-gray-200"
                >
                    <icon-arrow-down class="size-[18px] -rotate-90" />
                </button>
            </div>
        </div>
    </div>
</template>
<script>
import IconArrowDown from '@/components/icon/icon-arrow-down.vue';
import IconSearch from '@/components/icon/icon-search.vue';
import IconFilter from '@/components/icon/icon-filter.vue';
import FollowersList from './FollowersList.vue';
import FollowingList from './FollowingList.vue';
import BlockedList from './BlockedList.vue';
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue';
import userService from '@/services/userService';

const defaultPagintion={
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
        IconArrowDown,
        IconSearch,
        IconFilter,
        TabGroup,
        TabList,
        Tab,
        TabPanels,
        TabPanel,
        FollowersList,
        FollowingList,
        BlockedList
    },
    data(){
        return {
            active_tab:'followers',
            followers:[],
            following:[],
            blocked_users:[],
            loading:false,
            search:'',
            active_page:1,
            pagination:defaultPagintion,
            timer:null,
            order: {
                column: '',
                sort: ''
            }
        }
    },
    computed:{
        paginationFrom(){
            let count=(this.pagination.current_page * this.pagination.per_page) - this.pagination.per_page;
            if(this.pagination.count==0){
                return 0;
            }
            return count>0?count:1;
        },
        paginationTo(){
            let count=((this.pagination.current_page-1) * this.pagination.per_page) + this.pagination.count;
            return count;
        }
    },
    methods:{
        updatePagination(page){
            this.active_page=page
            this.getData(this.active_tab,false);
        },
        getData(tab,resetFilter=true){
            if(resetFilter){
                this.resetFilter()
            }
            this.active_tab=tab;
            if(tab=='followers'){
                this.getFollowers()
            }
            else if(tab=='following'){
                this.getFollowing()
            }else{
                this.getBlockedUsers()
            }
        },
        getFollowers(){
            this.loading=true;
            userService.getFollowers({search:this.search,page:this.active_page,order:this.order}).then(res=>{
                this.followers=res.data.users;
                this.pagination=res.data.pagination
                this.loading=false;
            });
        },
        getFollowing(){
            this.loading=true;
            userService.getFollowing({search:this.search,page:this.active_page}).then(res=>{
                this.following=res.data.users;
                this.pagination=res.data.pagination
                this.loading=false;
            });
        },
        getBlockedUsers(){
            this.loading=true;
            userService.getBlockedUsers({search:this.search,page:this.active_page}).then(res=>{
                this.blocked_users=res.data.users;
                this.pagination=res.data.pagination
                this.loading=false;
            });
        },
        unfollowUser(userId) {
            userService.unfollowUser(userId).then(this.getFollowers).catch((err) => {
                console.log(err);
            });
        },
        searchData(){
            const SEARCH_DELAY = 600;
            if (this.timer) clearTimeout(this.timer);
            this.timer = null;

            this.timer = setTimeout(() => this.getData(this.active_tab,false), SEARCH_DELAY);
        },
        resetFilter(){
            this.active_page=1
            this.search=''
        },
        sortBy(value) {
            this.order.column=value.column;
            this.order.sort=value.sort;
            if (value.tab == 'followers') {
                this.getFollowers();
            }
        }
    },
    created(){
        this.getFollowers()
    }
};
</script>

<template>
    <div>
        <div class="mb-4 text-right lg:hidden">
            <button type="button">
                <icon-menu class="size-7" />
            </button>
        </div>
        <div class="space-y-5">
            <div class="flex flex-col gap-4 rounded-lg bg-white px-5 py-4 shadow-3xl md:flex-row md:items-center">
                <div class="shrink-0 text-base/5 font-semibold text-black">{{ $t('profile_list') }}</div>
                <div class="flex flex-wrap items-center gap-4 md:ml-auto">
                    <vue-popper placement="bottom-start" offsetDistance="0" class="relative !m-0 !border-0 *:w-full">
                        <button
                            type="button"
                            class="flex w-48 items-center gap-2 rounded-lg bg-white px-3 py-2 text-left shadow-3xl ring-1 ring-inset ring-gray-100"
                        >
                            <span class="truncate" @click="toggleProfessionDropdown">{{ !filters.profession ?  $t('select_profession') : professionName }}</span>
                            <icon-close-round v-if="filters.profession" @click="resetProfessionFilter" class="ml-auto size-4 shrink-0 text-black" />
                            <div @click="toggleProfessionDropdown" class="ml-auto">
                                <icon-arrow-down class="ml-auto size-4 shrink-0 text-black" />
                            </div>
                        </button>
                        <template #content v-if="isActive">
                            <div
                                class="my-2.5 space-y-1.5 rounded-lg bg-white p-1.5 shadow-[0_0_0_1px_rgba(18,43,105,0.08),0_1px_2px_0_rgba(18,43,105,0.08)]"
                            >
                                <div
                                    v-for="(profession, i) in userProfessionList"
                                    :key="{ i }"
                                >
                                    <span class="text-left text-xs font-extrabold px-1 py-2 bg-gray-200 w-full grid">{{ profession.category }}</span>
                                    <div
                                        v-for="(_profession, i) in profession.professions"
                                        :key="{ i }"
                                        class="rounded-lg px-2.5 py-2 transition hover:bg-gray-200 hover:text-black cursor-pointer"
                                        @click="addProfession(_profession.id, _profession.title)"
                                    >
                                        {{ _profession.title }}
                                    </div>
                                </div>
                            </div>
                        </template>
                    </vue-popper>
                    <div class="relative">
                        <icon-search class="absolute left-3 top-1/2 -translate-y-1/2 text-black" />
                        <input 
                            v-model="filters.search"
                            v-on:keyup="searchData"
                            type="text" :placeholder="$t('search')" class="form-input py-[7px] pl-9" />
                    </div>
                    <button
                        type="button"
                        class="items-center gap-2 rounded-lg bg-white px-3 py-2 text-left shadow-3xl ring-1 ring-inset ring-gray-100 hidden"
                    >
                        <icon-filter class="size-4 shrink-0 text-black" />
                        <span>{{ $t('filter') }}</span>
                    </button>
                </div>
            </div>
            <div class="flex items-start gap-4">
                <div class="sticky top-[88px] hidden w-64 shrink-0 rounded-lg bg-white p-5 shadow-3xl lg:block">
                    <div class="space-y-5">
                        <div class="flex items-center justify-between gap-2">
                            <h3 class="font-semibold text-black">{{ $t('filter') }}</h3>
                            <button
                                @click="clearFilter"
                                class="flex items-center gap-2 rounded-lg bg-gray-200 p-1 px-1.5 transition hover:text-black"
                            >
                                <span class="text-xs/4">{{ $t('clear_all_filter') }}</span>
                                <icon-close-round class="size-4" />
                            </button>
                        </div>
                        <div class="relative">
                            <icon-search class="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-black" />
                            <input
                                v-model="filters.search"
                                v-on:keyup="searchData"
                                type="text"
                                :placeholder="$t('search')"
                                class="form-input py-[7px] pl-9"
                            />
                        </div>
                        <div class="border-t border-gray-200 pt-5">
                            <h3 class="mb-2.5 text-xs font-semibold uppercase text-gray">{{ $t('location') }}</h3>
                            <div class="relative">
                                <select v-model="filters.location" @change="loadUsers" class="form-select" required>
                                    <option value="" selected>--{{ $t('all_countries') }}--</option>
                                    <option
                                        v-for="country in countries"
                                        :key="country.id"
                                        :value="country.id"
                                    >
                                        {{ country.name }}
                                    </option>
                                </select>
                            </div>
                        </div>
                        <div class="border-t border-gray-200 pt-5">
                            <h3 class="mb-2.5 text-xs font-semibold uppercase text-gray">{{ $t('skills') }}</h3>
                            <label
                                v-for="skill in userSkills"
                                :key="skill.id"
                                class="mt-3 flex flex-wrap items-center justify-between gap-3 text-sm"
                            >
                                <span class="peer flex cursor-pointer items-center gap-2">
                                    <input
                                        v-model="filters.skills"
                                        :value="skill.id"
                                        type="checkbox"
                                        @change="loadUsers"
                                        class="peer form-checkbox size-3"
                                    />
                                    <span class="leading-[18px] peer-checked:text-black">{{ skill.title }}</span>
                                </span>
                                <span class="text-xs font-semibold peer-has-[:checked]:text-black">{{
                                    skill.users_count
                                }}</span>
                            </label>
                        </div>
                        {{ filters.ratings }}
                        <div class="border-t border-gray-200 pt-5">
                            <h3 class="mb-2.5 text-xs font-semibold uppercase text-gray">{{ $t('rating') }}</h3>
                            <label class="flex flex-wrap items-center justify-between gap-3 text-sm">
                                <span class="peer flex cursor-pointer items-center gap-2">
                                    <input v-model="filters.rating" type="checkbox" value="5" class="peer form-checkbox size-3" @change="loadUsers" />
                                    <icon-star-border-bg class="size-4 text-success" />
                                    <span class="leading-[18px] peer-checked:text-black">5 {{ $t('star') }}</span>
                                </span>
                                <p class="text-xs font-semibold peer-has-[:checked]:text-black">423</p>
                            </label>
                            <label class="mt-4 flex flex-wrap items-center justify-between gap-3 text-sm">
                                <span class="peer flex cursor-pointer items-center gap-2">
                                    <input v-model="filters.rating" type="checkbox" value="4" class="peer form-checkbox size-3" @change="loadUsers" />
                                    <icon-star-border-bg class="size-4 text-primary" />
                                    <span class="leading-[18px] peer-checked:text-black">4 {{ $t('star') }}</span>
                                </span>
                                <p class="text-xs font-semibold peer-has-[:checked]:text-black">540</p>
                            </label>
                            <label class="mt-4 flex flex-wrap items-center justify-between gap-3 text-sm">
                                <span class="peer flex cursor-pointer items-center gap-2">
                                    <input v-model="filters.rating" type="checkbox" value="3" class="peer form-checkbox size-3" @change="loadUsers" />
                                    <icon-star-border-bg class="size-4 text-yellow" />
                                    <span class="leading-[18px] peer-checked:text-black">3 {{ $t('star') }}</span>
                                </span>
                                <p class="text-xs font-semibold peer-has-[:checked]:text-black">426</p>
                            </label>
                            <label class="mt-4 flex flex-wrap items-center justify-between gap-3 text-sm">
                                <span class="peer flex cursor-pointer items-center gap-2">
                                    <input v-model="filters.rating" type="checkbox" value="2" class="peer form-checkbox size-3" @change="loadUsers" />
                                    <icon-star-border-bg class="size-4 text-orange" />
                                    <span class="leading-[18px] peer-checked:text-black">2 {{ $t('star') }}</span>
                                </span>
                                <p class="text-xs font-semibold peer-has-[:checked]:text-black">447</p>
                            </label>
                            <label class="mt-4 flex flex-wrap items-center justify-between gap-3 text-sm">
                                <span class="peer flex cursor-pointer items-center gap-2">
                                    <input v-model="filters.rating" type="checkbox" value="1" class="peer form-checkbox size-3" @change="loadUsers" />
                                    <icon-star-border-bg class="size-4 text-danger" />
                                    <span class="leading-[18px] peer-checked:text-black">1 {{ $t('star') }}</span>
                                </span>
                                <p class="text-xs font-semibold peer-has-[:checked]:text-black">816</p>
                            </label>
                        </div>
                    </div>
                    <div class="relative mt-4">
                        <span
                            class="absolute -top-px right-4 rounded-b-lg bg-danger px-2 py-1.5 text-[10px]/none font-bold uppercase text-white"
                            >Ads</span
                        >
                        <img src="/assets/images/ad-one.png" alt="ads" class="h-full w-full object-cover" />
                    </div>
                </div>
                <div class="grow space-y-4">
                    <template v-if="!loading">
                        <template v-if="users.length > 0">
                            <single-user v-for="user in users" :key="user.username" :user="user" />
                        </template>
                        <div v-else>
                            <h2 class="p-6 text-center text-lg">{{ $t('no_record_found') }}</h2>
                        </div>
                    </template>
                    <div v-else class="p-4 text-center">
                        <span class="spinner !h-14 !w-14"></span>
                    </div>
                    <!-- <common-pagination
                        :currentPage="currentPage"
                        :totalPages="10"
                        :dataLength="100"
                        :perPage="10"
                        @changePage="(page) => (currentPage = page)"
                    /> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import IconArrowDown from '@/components/icon/icon-arrow-down.vue';
import IconClose from '@/components/icon/icon-close.vue';
import IconCheckRoundGray from '@/components/icon/icon-check-round-gray.vue';
import IconCheckRoundGreen from '@/components/icon/icon-check-round-green.vue';
import IconFilter from '@/components/icon/icon-filter.vue';
import IconSearch from '@/components/icon/icon-search.vue';
import IconCloseRound from '@/components/icon/icon-close-round.vue';
import IconLocation from '@/components/icon/icon-location.vue';
import IconMenu from '@/components/icon/icon-menu.vue';
import IconStarBorderBg from '@/components/icon/icon-star-border-bg.vue';
import CommonPagination from '@/components/common/common-pagination.vue';
import SingleUser from './SingleUser.vue';
import userService from '@/services/userService';
import axios from 'axios';
import i18n from '@/i18n';

export default {
    components: {
        SingleUser,
        CommonPagination,
        IconStarBorderBg,
        IconMenu,
        IconLocation,
        IconCloseRound,
        IconSearch,
        IconFilter,
        IconCheckRoundGreen,
        IconCheckRoundGray,
        IconArrowDown,
    },
    data() {
        return {
            users: [],
            filters: {
                search: '',
                skills: [],
                location: '',
                rating: [],
                profession: '',
                language:`${i18n.global.locale.value === 'en' ? 'english' : 'turkish'}`
            },
            loading: false,
            professionList: [],
            timer: null,
            countries: [],
            isActive: false,
            professionName: '',
        };
    },
    computed: {
        userSkills() {
            return this.$store.getters.user_skills;
        },
        userProfessionList() {
            return this.$store.getters.professionList;
        },
    },
    methods: {
        toggleProfessionDropdown() {
          this.isActive = !this.isActive;
        },
        loadUsers() {
            this.loading = true;
            userService.getUsers(this.filters).then((res) => {
                this.users = res.data.users;
                this.loading = false;
            });
        },
        searchData() {
            const SEARCH_DELAY = 600;
            if (this.timer) clearTimeout(this.timer);
            this.timer = null;
            this.timer = setTimeout(() => this.loadUsers(), SEARCH_DELAY);
        },
        clearFilter() {
            this.filters = {
                search: '',
                skills: [],
                location: '',
                rating: [],
                profession: '',
            };
            this.loadUsers();
        },
        addProfession(professionId, professionTitle) {
            this.filters.profession = professionId;
            this.professionName = professionTitle;
            this.isActive = !this.isActive;
            this.loadUsers();
        },
        resetProfessionFilter() {
            this.filters.profession = '';
            this.loadUsers();
        },
        async getCountries() {
            try {
                const response = await axios.get('/countries');
                console.log('response',response.data);
                this.countries = response.data?.countries;
            } catch (error) {
                this.error = 'Failed to load country';
                console.error('Error fetching country:', error);
            }
        },
        async getSkills () {
             console.log('response');
            // const response = await axios.get('/skills');
            // console.log('response',response.data, 'skills');
        },
    },
    created() {
        this.loadUsers();
        this.getCountries();
        this.getSkills();
    },
};
</script>

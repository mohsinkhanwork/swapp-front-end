<template>
    <header class="sticky top-0 z-30 flex items-center gap-2 bg-white px-5 py-4 shadow-3xl">
        <div class="d-flex items-center">
            <button type="button" @click="toggleSidebar" class="transition hover:opacity-70 lg:hidden mr-3">
                <icon-menu class="size-6" />
            </button>
            <a href="/" class="inline-flex shrink-0 items-center gap-2 text-xl/6 font-semibold text-black">
                <img class="mt-0.5 size-[22px]" src="/assets/images/logo.svg" alt="Logo" />
                <span>SwapGoal</span>
            </a>
        </div>

        <div class="flex grow items-center justify-end gap-2 md:gap-5 text-black">
            <div class="flex items-center gap-5 border-gray-200 md:border-r-2 md:pr-5">
                <!-- <div
                    v-if="isShowSearch"
                    class="absolute inset-x-0 top-1/2 z-10 -translate-y-1/2 bg-white px-5 py-4 lg:relative lg:top-0 lg:translate-y-0 lg:p-0"
                >
                    <div class="relative">
                        <input type="text" placeholder="Search" class="form-input pr-10" />
                        <button
                            type="button"
                            class="absolute right-3 top-1/2 -translate-y-1/2"
                            @click="isShowSearch = !isShowSearch"
                        >
                            <icon-close class="size-5" />
                        </button>
                    </div>
                </div>
                <button v-else type="button" class="transition hover:opacity-70" @click="isShowSearch = !isShowSearch">
                    <icon-search />
                </button> -->
                <div class="relative hidden md:block">
                    <vue-popper>
                        <button
                            type="button"
                            class="flex min-w-16 items-center justify-center gap-2 rounded-md border border-gray-100 p-2 uppercase transition hover:opacity-70"
                        >
                            {{ i18n.locale }}
                            <icon-arrow-down />
                        </button>
                        <template #content="{ close }">
                            <div
                                class="absolute -right-1/4 top-full z-10 translate-x-1/4 overflow-auto rounded-lg bg-white shadow-[0_0_0_1px_rgba(18,43,105,0.08),0_1px_2px_0_rgba(18,43,105,0.08)]"
                            >
                                <div
                                    class="relative flex gap-3 rounded-lg p-2.5 transition hover:bg-gray-200"
                                    v-for="lang in languages"
                                    :key="lang"
                                    @click="
                                        changeLanguage(lang.code);
                                        close();
                                    "
                                >
                                    {{ lang.label }}
                                </div>
                            </div>
                        </template>
                    </vue-popper>
                </div>

                <header-notifications />
            </div>
            <div class="relative">
                <vue-popper>
                    <button type="button" class="flex items-center gap-2">
                        <span class="grid size-10 place-content-center overflow-hidden rounded-lg bg-gray-100">
                            <img
                                v-if="user"
                                :src="user.avatarUrl? user.avatarUrl: user.avatar"
                                alt="profile"
                                class="w-8 h-18 object-cover"
                                @error="setFallbackImage"
                            />
                        </span>
                        <icon-arrow-down />
                    </button>
                    <template #content="{ close }">
                        <div
                            class="absolute -bottom-5 right-0 z-10 mt-1.5 size-6 rotate-[40deg] skew-y-12 rounded bg-white shadow-[0_0_0_1px_rgba(18,43,105,0.08),0_1px_2px_0_rgba(18,43,105,0.08)]"
                        ></div>
                        <div
                            class="absolute -right-1/4 top-full z-10 w-[190px] translate-x-1/4 space-y-1.5 rounded-lg bg-white p-1.5 shadow-[0_0_0_1px_rgba(18,43,105,0.08),0_1px_2px_0_rgba(18,43,105,0.08)]"
                        >
                            <router-link
                                to="/settings"
                                class="flex w-full items-center gap-2 rounded-lg px-3 py-[12px] text-gray transition hover:bg-gray-200 hover:text-black"
                            >
                                <icon-home class="size-[18px]" />
                                <span>{{ $t('view_profile') }}</span>
                            </router-link>
                            <router-link
                                to="/settings"
                                class="flex w-full items-center gap-2 rounded-lg px-3 py-[12px] text-gray transition hover:bg-gray-200 hover:text-black"
                                @click="close"
                            >
                                <icon-settings class="size-4" />
                                <span>{{ $t('settings') }}</span>
                            </router-link>
                            <button
                                type="button"
                                class="flex w-full items-center gap-2 rounded-lg px-3 py-[12px] text-gray transition hover:bg-gray-200 hover:text-black"
                            >
                                <icon-support class="size-4" />
                                <span>Support</span>
                            </button>
                            <div class="h-[1px] w-full bg-gray-100"></div>
                            <button
                                type="button"
                                class="flex w-full items-center gap-2 rounded-lg px-3 py-[12px] text-danger transition hover:bg-danger/10"
                                @click="logout"
                            >
                                <icon-logout class="size-4" />
                                <span>{{$t('log_out')}}</span>
                            </button>
                        </div>
                    </template>
                </vue-popper>
            </div>
        </div>

        <!-- User avatar dropdown -->
        <div class="relative hidden md:block" v-if="user">
            <button class="flex items-center focus:outline-none">
                <!-- User name -->
                <span class="ml-2">{{ user.name }}</span>
            </button>
            <!-- Dropdown menu -->
        </div>
    </header>
</template>
<script setup>
import { reactive } from 'vue';
import { useI18n } from 'vue-i18n';

const i18n = reactive(useI18n());

const changeLanguage = (e) => {
    i18n.locale = e;
    localStorage.setItem('i18n_locale', e);
    // TODO:have to refresh all components
    window.location.reload();
};
</script>
<script>
import iconArrowDown from '@/components/icon/icon-arrow-down.vue';
import iconMenu from '@/components/icon/icon-menu.vue';
import iconSearch from '@/components/icon/icon-search.vue';
import iconSettings from '@/components/icon/icon-settings.vue';
import iconSupport from '@/components/icon/icon-support.vue';
import iconLogout from '@/components/icon/icon-logout.vue';
import iconHome from '@/components/icon/icon-home.vue';
import iconClose from '@/components/icon/icon-close.vue';
import authService from '@/services/authService';
import HeaderNotifications from './HeaderNotifications.vue';

const languages = [
    { code: 'en', label: 'English' },
    { code: 'tr', label: 'Türkiye' },
];
export default {
    components: {
        iconSearch,
        iconArrowDown,
        iconMenu,
        iconHome,
        iconSettings,
        iconSupport,
        iconLogout,
        iconClose,
        HeaderNotifications
    },
    data() {
        return {
            isShowSearch: false,
        };
    },
    computed: {
        user() {
            console.log(this.$store.getters.user)
            return this.$store.getters.user;
        },
    },
    methods: {
        logout() {
            authService.logout();
        },
        toggleSidebar() {
            this.$emit('toggleSidebar');
        },
        setFallbackImage(event) {
            event.target.src = '/assets/images/profile.png';
        },
    },
};
</script>

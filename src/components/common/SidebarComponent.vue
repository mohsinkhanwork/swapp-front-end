<template>
    <div>
        <div
            class="sidebar fixed -left-64 top-0 z-50 flex h-screen w-64 shrink-0 flex-col overflow-y-auto bg-white p-5 pl-3 shadow-3xl transition-all lg:left-0 lg:top-[74px] lg:h-[calc(100vh_-_72px)]"
            :class="{ open: isOpen }"
        >
            <div class="pb-8">
                <div>
                    <div class="inline-flex md:hidden border border-[#d3d3d3] mb-4">
                        <button
                            v-for="lang in languages"
                            :key="lang.code"
                            @click="changeLanguage(lang.code)"
                            :class="i18n.locale==lang.code?'bg-primary':''"
                            class="font-bold py-2 px-4 hover:bg-primary/50 uppercase">
                            {{lang.code}}
                        </button>
                    </div>
                    <h5 class="mb-2.5 pl-1 text-xs font-semibold uppercase">{{ $t('main_menu') }}</h5>
                    <ul class="space-y-1">
                        <li>
                            <router-link to="/" class="nav-item">
                                <icon-home class="size-[18px] shrink-0" />
                                <span class="grow truncate">{{ $t('home_page') }}</span>
                            </router-link>
                        </li>
                        <!-- <li>
                            <button
                                type="button"
                                class="nav-item"
                                :class="{ active: activeDropdown === 'home' }"
                                @click="activeDropdown === 'home' ? (activeDropdown = null) : (activeDropdown = 'home')"
                            >
                                <icon-home class="size-[18px] shrink-0" />
                                <span class="grow truncate">{{ $t('home_page') }}</span>
                                <icon-arrow-down
                                    class="size-[18px] shrink-0 duration-300"
                                    :class="{ '-rotate-90': activeDropdown !== 'home' }"
                                />
                            </button>
                            <vue-collapsible :isOpen="activeDropdown === 'home'" class="duration-300">
                                <ul class="mt-1">
                                    <li>
                                        <a href="/" class="nav-item">Home 1</a>
                                    </li>
                                    <li>
                                        <a href="/" class="nav-item">Home 2</a>
                                    </li>
                                    <li>
                                        <a href="/" class="nav-item">Home 3</a>
                                    </li>
                                    <li>
                                        <a href="/" class="nav-item">Home 4</a>
                                    </li>
                                </ul>
                            </vue-collapsible>
                        </li> -->
                        <li>
                            <router-link to="/messaging-system" class="nav-item">
                                <icon-inbox class="size-[18px] shrink-0" />
                                <span class="grow truncate">{{ $t('message') }}</span>
                                <span
                                    class="grid h-5 w-fit min-w-5 shrink-0 place-content-center rounded-lg bg-primary/30 text-[11px]/none font-bold ring-1 ring-inset ring-primary"
                                    >10</span
                                >
                            </router-link>
                        </li>
                        <li>
                            <button type="button" @click="PlanModal = true" class="nav-item">
                                <icon-premium class="size-[18px] shrink-0 text-orange" />
                                <div>
                                    <span class="mb-1 block grow truncate">{{ $t('premium') }}</span>
                                    <p class="grow truncate text-xs text-gray">{{ $t('try_it_free_for_week') }}</p>
                                </div>
                            </button>
                        </li>
                        <li>
                            <router-link to="/users" class="nav-item">
                                <icon-clients class="size-[18px] shrink-0" />
                                <span class="grow truncate">{{ $t('users') }}</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/quiz-list" class="nav-item">
                                <icon-sport-quiz class="size-[18px] shrink-0" />
                                <span class="grow truncate">{{ $t('quiz_list') }}</span>
                            </router-link>
                        </li>
                        <li>
                            <a href="#" class="nav-item">
                                <icon-transaction class="size-[18px] shrink-0" />
                                <span class="grow truncate">{{ $t('transaction') }}</span>
                            </a>
                        </li>
                        <li>
                            <router-link to="/followers" class="nav-item">
                                <icon-followers class="size-[18px] shrink-0" />
                                <span class="grow truncate">{{ $t('followers') }}</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/event-workshop" class="nav-item">
                                <icon-calendar class="size-[18px] shrink-0" />
                                <span class="grow truncate">{{ $t('calendar') }}</span>
                            </router-link>
                        </li>
                        <li>
                            <button
                                type="button"
                                class="nav-item"
                                :class="{ active: activeDropdown === 'swap' }"
                                @click="activeDropdown === 'swap' ? (activeDropdown = null) : (activeDropdown = 'swap')"
                            >
                                <icon-swaps class="size-[18px] shrink-0" />
                                <span class="grow truncate">{{ $t('Swaps') }}</span>
                                <icon-arrow-down
                                    class="size-[18px] shrink-0 duration-300"
                                    :class="{ '-rotate-90': activeDropdown !== 'swap' }"
                                />
                            </button>
                            <vue-collapsible :isOpen="activeDropdown === 'swap'" class="duration-300">
                                <ul class="mt-1">
                                   <div class="relative space-y-2 pl-10 pr-7">
                                        <span class="absolute left-[21.5px] top-[15px] h-[calc(100%-30px)] w-[1px] bg-gray-100"></span>
                                        <div class="relative">
                                            <span class="absolute -left-6 top-1/2 size-3 shrink-0 -translate-y-1/2 rounded-full border-4 border-white bg-gray-300"></span>
                                            <!-- <a href="#" class="nav-item !px-2 !py-1.5 !text-gray hover:!bg-gray-500">
                                                <span class="grow truncate">My swaps</span>
                                            </a> -->
                                            <router-link to="/my-swaps" class="nav-item">
                                                <span class="grow truncate">{{ $t('My Swaps') }}</span>
                                            </router-link>
                                        </div>
                                        <div class="relative">
                                            <span class="absolute -left-6 top-1/2 size-3 shrink-0 -translate-y-1/2 rounded-full border-4 border-white bg-gray-300">

                                            </span>
                                            <!-- <a href="#" class="nav-item !px-2 !py-1.5 !text-gray hover:!bg-gray-500">
                                                <span class="grow truncate">Swap List</span>
                                            </a> -->
                                             <router-link to="/swap-requests" class="nav-item">
                                                <span class="grow truncate">{{ $t('Received Requests') }}</span>
                                            </router-link>
                                        </div>
                                        <div class="relative">
                                            <span class="absolute -left-6 top-1/2 size-3 shrink-0 -translate-y-1/2 rounded-full border-4 border-white bg-gray-300"></span>
                                            <router-link to="/swap-sent-requests" class="nav-item">
                                                <span class="grow truncate">{{ $t('Sent Requests') }}</span>
                                            </router-link>
                                        </div>
                                    </div>
                                </ul>
                            </vue-collapsible>
                        </li>
                        <!-- <li>
                            <router-link to="/my-swaps" class="nav-item">
                                <icon-swaps class="size-[18px] shrink-0" />
                                <span class="grow truncate">{{ $t('swaps') }}</span>
                            </router-link>
                        </li> -->
                        
                    </ul>
                </div>
                <div class="my-4 h-px bg-gray-100"></div>
                <div>
                    <h5 class="mb-2.5 pl-1 text-xs font-semibold uppercase">{{ $t('account_management') }}</h5>
                    <ul class="space-y-1">
                        <li>
                            <button
                                type="button"
                                class="nav-item"
                                :class="{ active: activeDropdown === 'activity' }"
                                @click="
                                    activeDropdown === 'activity'
                                        ? (activeDropdown = null)
                                        : (activeDropdown = 'activity')
                                "
                            >
                                <icon-activity class="size-[18px] shrink-0" />
                                <span class="grow truncate">{{ $t('activity') }}</span>
                                <icon-arrow-down
                                    class="size-[18px] shrink-0 duration-300"
                                    :class="{ '-rotate-90': activeDropdown !== 'activity' }"
                                />
                            </button>
                            <vue-collapsible :isOpen="activeDropdown === 'activity'" class="duration-300">
                                <ul class="mt-1">
                                    <li>
                                        <a href="#" class="nav-item">Activity 1</a>
                                    </li>
                                    <li>
                                        <a href="#" class="nav-item">Activity 2</a>
                                    </li>
                                    <li>
                                        <a href="#" class="nav-item">Activity 3</a>
                                    </li>
                                    <li>
                                        <a href="#" class="nav-item">Activity 4</a>
                                    </li>
                                </ul>
                            </vue-collapsible>
                        </li>
                        <li>
                            <a href="#" class="nav-item">
                                <icon-balance class="size-[18px] shrink-0" />
                                <span class="grow truncate">{{ $t('balance') }}</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="nav-item">
                                <icon-spending class="size-[18px] shrink-0" />
                                <span class="grow truncate">{{ $t('spending') }}</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="nav-item">
                                <icon-refund class="size-[18px] shrink-0" />
                                <span class="grow truncate">{{ $t('refund') }}</span>
                            </a>
                            <div class="relative space-y-2 pl-10 pr-7">
                                <span
                                    class="absolute left-[21.5px] top-[15px] h-[calc(100%-30px)] w-[1px] bg-gray-100"
                                ></span>
                                <div class="relative">
                                    <span
                                        class="absolute -left-6 top-1/2 size-3 shrink-0 -translate-y-1/2 rounded-full border-4 border-white bg-gray-300"
                                    ></span>
                                    <a href="#" class="nav-item !px-2 !py-1.5 !text-gray hover:!bg-gray-500">
                                        <span class="grow truncate">{{ $t('refund') }}</span>
                                    </a>
                                </div>
                                <div class="relative">
                                    <span
                                        class="absolute -left-6 top-1/2 size-3 shrink-0 -translate-y-1/2 rounded-full border-4 border-white bg-gray-300"
                                    ></span>
                                    <a href="#" class="nav-item !px-2 !py-1.5 !text-gray hover:!bg-gray-500">
                                        <span class="grow truncate">{{ $t('history') }}</span>
                                    </a>
                                </div>
                                <div class="relative">
                                    <span
                                        class="absolute -left-6 top-1/2 size-3 shrink-0 -translate-y-1/2 rounded-full border-4 border-white bg-gray-300"
                                    ></span>
                                    <a href="#" class="nav-item !px-2 !py-1.5 !text-gray hover:!bg-gray-500">
                                        <span class="grow truncate">{{ $t('reports') }}</span>
                                    </a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="my-4 h-px bg-gray-100"></div>
                <div>
                    <h5 class="mb-2.5 pl-1 text-xs font-semibold uppercase">{{ $t('support') }}</h5>
                    <ul class="space-y-1">
                        <li>
                            <router-link to="/settings" class="nav-item">
                                <icon-settings class="size-[18px] shrink-0" />
                                <span class="grow truncate">{{ $t('settings') }}</span>
                            </router-link>
                        </li>
                        <li>
                            <a href="#" class="nav-item">
                                <icon-security class="size-[18px] shrink-0" />
                                <span class="grow truncate">{{ $t('security') }}</span>
                            </a>
                        </li>
                        <li>
                            <router-link to="/support" class="nav-item">
                                <icon-help class="size-[18px] shrink-0" />
                                <span class="grow truncate">{{ $t('help') }}</span>
                            </router-link>
                        </li>
                    </ul>
                </div>
                <div class="my-4 h-px bg-gray-100"></div>
                <div>
                    <h5 class="mb-2.5 pl-1 text-xs font-semibold uppercase">{{ $t('community') }}</h5>
                    <ul class="space-y-1">
                        <li>
                            <router-link to="/blog" class="nav-item">
                                <icon-forum class="size-[18px] shrink-0" />
                                <span class="grow truncate">{{ $t('blog') }}</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/post" class="nav-item">
                                <icon-post class="size-[18px] shrink-0" />
                                <span class="grow truncate">{{ $t('post') }}</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/forum" class="nav-item">
                                <icon-forum class="size-[18px] shrink-0" />
                                <span class="grow truncate">{{ $t('forum') }}</span>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="relative">
                <span
                    class="absolute -top-px right-4 rounded-b-lg bg-danger px-1.5 py-1 text-[10px]/none font-bold uppercase text-white"
                    >{{ $t('ads') }}</span
                >
                <img src="/assets/images/ad-one.png" alt="ads" class="h-full w-full object-cover" />
            </div>
            <div
                v-if="user"
                class="mt-auto flex items-center gap-2 px-3 pt-8">
                <div class="grid size-10 shrink-0 place-content-center overflow-hidden rounded-lg bg-gray-100">
                    <img :src="user.avatar" alt="profile" class="h-full w-full object-cover" />
                </div>
                <div class="grow space-y-1 truncate">
                    <div class="truncate text-black">{{user.name}}</div>
                    <div class="truncate text-xs">{{user.email}}</div>
                </div>
            </div>
            <!-- <ul>
                <li v-for="(item, index) in menu_items" :key="index">
                    <router-link :to="item.path" class="block py-2 px-4 hover:bg-[#f6f8fa] rounded">

                        {{ item.title }}
                    </router-link>
                </li>
            </ul> -->
        </div>
        <div
            @click="$emit('toggleSidebar')"
            class="fixed inset-0 z-40 hidden bg-black/60"
            :class="{ '!block': isOpen }"
        ></div>
        <TransitionRoot appear :show="PlanModal" as="template">
            <Dialog as="div" @close="PlanModal = false" class="relative z-50">
                <TransitionChild
                    as="template"
                    enter="duration-300 ease-out"
                    enter-from="opacity-0"
                    enter-to="opacity-100"
                    leave="duration-200 ease-in"
                    leave-from="opacity-100"
                    leave-to="opacity-0"
                >
                    <DialogOverlay class="fixed inset-0 bg-[black]/60" />
                </TransitionChild>

                <div class="fixed inset-0 overflow-y-auto">
                    <div class="flex min-h-full items-center justify-center px-4 py-8">
                        <TransitionChild
                            as="template"
                            enter="duration-300 ease-out"
                            enter-from="opacity-0 scale-95"
                            enter-to="opacity-100 scale-100"
                            leave="duration-200 ease-in"
                            leave-from="opacity-100 scale-100"
                            leave-to="opacity-0 scale-95"
                        >
                            <DialogPanel
                                class="relative mx-auto w-full max-w-[406px] overflow-hidden rounded-lg bg-white text-sm/[18px] font-medium text-gray"
                            >
                                <button
                                    type="button"
                                    @click="PlanModal = false"
                                    class="absolute right-5 top-4 z-[1] grid size-8 place-content-center rounded-lg bg-white/[0.08] text-white hover:opacity-80"
                                >
                                    <icon-close class="size-5" />
                                </button>
                                <div
                                    class="relative bg-[url(/public/assets/images/premium-plan-bg.png)] bg-bottom bg-no-repeat py-[35px]"
                                >
                                    <img
                                        src="/assets/images/premium-plan.png"
                                        alt="Premium plan"
                                        class="relative z-10 m-auto w-[218px]"
                                    />
                                    <span
                                        class="absolute left-1/2 top-1/2 size-[200px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/30 blur-[50px]"
                                    ></span>
                                </div>
                                <div class="relative p-5">
                                    <div class="mb-2.5 flex justify-between gap-3">
                                        <h2 class="mb-2.5 text-[30px]/[38px] font-extrabold text-black">
                                            $19.99 <span class="text-sm font-medium text-danger">{{ $t('save') }} 30%</span>
                                        </h2>
                                        <label class="inline-flex cursor-pointer items-center gap-2.5">
                                            <input type="checkbox" value="" class="peer sr-only" checked />
                                            <div
                                                class="peer relative h-5 w-9 rounded-full bg-white shadow-3xl ring-1 ring-gray-100 after:absolute after:start-[1.5px] after:top-1/2 after:h-4 after:w-4 after:-translate-y-1/2 after:rounded-full after:bg-gray-100 after:transition-all after:content-[''] peer-checked:bg-success peer-checked:ring-transparent peer-checked:after:translate-x-full peer-checked:after:bg-white"
                                            ></div>
                                            <span class="text-black">Monthly</span>
                                        </label>
                                    </div>
                                    <p class="mb-[30px] leading-[22px]">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    </p>
                                    <h3 class="mb-4">Plan includes:</h3>
                                    <div class="mb-[30px] w-full max-w-[330px] space-y-2.5">
                                        <div class="flex gap-1.5 rounded-lg bg-gray-200 p-1.5">
                                            <icon-check class="mt-0.5 size-4 shrink-0 text-success" />
                                            <span>{{ $t('start_a_blog_to_reach_your_creative_peak') }}</span>
                                        </div>
                                        <div class="flex gap-1.5 rounded-lg bg-gray-200 p-1.5">
                                            <icon-check class="mt-0.5 size-4 shrink-0 text-success" />
                                            <span>{{ $t('starting_your_traveling_blog_with_vasco') }}</span>
                                        </div>
                                        <div class="flex gap-1.5 rounded-lg bg-gray-200 p-1.5">
                                            <icon-check class="mt-0.5 size-4 shrink-0 text-success" />
                                            <span>{{ $t('donec_faucibus_nisi_sed_ultricies_ultricies') }}</span>
                                        </div>
                                        <div class="flex gap-1.5 rounded-lg bg-gray-200 p-1.5">
                                            <icon-check class="mt-0.5 size-4 shrink-0 text-success" />
                                            <span>{{ $t('nulla_convallis_nulla_sit_amet_mattis_faucibus') }}</span>
                                        </div>
                                    </div>
                                    <button type="button" class="btn w-full">
                                        <icon-diamond />
                                        Purchase plan
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
<script setup>
import { ref, defineProps } from 'vue';
import VueCollapsible from 'vue-height-collapsible/vue3';
import IconHome from '@/components/icon/icon-home.vue';
import IconArrowDown from '@/components/icon/icon-arrow-down.vue';
import IconInbox from '@/components/icon/icon-inbox.vue';
import IconTransaction from '@/components/icon/icon-transaction.vue';
import IconClients from '@/components/icon/icon-clients.vue';
import IconActivity from '@/components/icon/icon-activity.vue';
import IconBalance from '@/components/icon/icon-balance.vue';
import IconSpending from '@/components/icon/icon-spending.vue';
import IconRefund from '@/components/icon/icon-refund.vue';
import IconSettings from '@/components/icon/icon-settings.vue';
import IconSecurity from '@/components/icon/icon-security.vue';
import IconHelp from '@/components/icon/icon-help.vue';
import IconFollowers from '@/components/icon/icon-followers.vue';
import IconCalendar from '@/components/icon/icon-calendar.vue';
import IconSwaps from '@/components/icon/icon-swaps.vue';
import IconPremium from '@/components/icon/icon-premium.vue';
import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogOverlay } from '@headlessui/vue';
import IconClose from '@/components/icon/icon-close.vue';
import IconCheck from '@/components/icon/icon-check.vue';
import IconDiamond from '@/components/icon/icon-diamond.vue';
import IconForum from '@/components/icon/icon-forum.vue';
import IconPost from '@/components/icon/icon-edit.vue'
import IconSportQuiz from '@/components/icon/icon-question-round.vue'
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useI18n } from 'vue-i18n';
import { reactive } from 'vue';

const i18n = reactive(useI18n());

const changeLanguage = (e) => {
    i18n.locale = e;
    localStorage.setItem('i18n_locale', e);
};
const languages = [
    { code: 'en', label: 'English' },
    { code: 'tr', label: 'Türkçe' },
];
defineProps({
    isOpen: {
        type: Boolean,
        default: false,
    },
});
const store = useStore()
const user = computed(() => {
      return store.getters.user
    });
const PlanModal = ref(false);
const activeDropdown = ref('');
</script>

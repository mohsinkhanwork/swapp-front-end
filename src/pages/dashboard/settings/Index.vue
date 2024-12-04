<template>
    <div class="space-y-5">
        <div class="rounded-lg bg-white px-5 py-[23px] shadow-3xl">
            <div class="shrink-0 text-base/5 font-semibold text-black">{{ $t('settings') }}</div>
        </div>
        <TabGroup as="div" class="overflow-hidden rounded-lg bg-white shadow-3xl">
            <div class="overflow-x-auto border-b border-gray-100">
                <TabList class="flex w-max items-center gap-5 px-5">
                    <Tab as="template" v-slot="{ selected }">
                        <button
                            type="button"
                            class="border-b-2 border-transparent pb-3.5 pt-4 font-semibold transition hover:border-primary hover:text-black"
                            :class="{ '!border-primary !text-black': selected }"
                        >
                           {{ $t('my_profile') }}
                        </button>
                    </Tab>
                    <Tab as="template" v-slot="{ selected }">
                        <button
                            type="button"
                            class="border-b-2 border-transparent pb-3.5 pt-4 font-semibold transition hover:border-primary hover:text-black"
                            :class="{ '!border-primary !text-black': selected }"
                        >
                            {{ $t('social_profile') }}
                        </button>
                    </Tab>
                    <Tab as="template" v-slot="{ selected }">
                        <button
                            type="button"
                            class="border-b-2 border-transparent pb-3.5 pt-4 font-semibold transition hover:border-primary hover:text-black"
                            :class="{ '!border-primary !text-black': selected }"
                        >
                            {{ $t('billing') }}
                        </button>
                    </Tab>
                    <Tab as="template" v-slot="{ selected }">
                        <button
                            type="button"
                            class="border-b-2 border-transparent pb-3.5 pt-4 font-semibold transition hover:border-primary hover:text-black"
                            :class="{ '!border-primary !text-black': selected }"
                        >
                            {{ $t('privacy_and_security') }}
                        </button>
                    </Tab>
                </TabList>
            </div>
            <TabPanels>
                <TabPanel>
                    <!-- profile component -->
                    <profile />
                </TabPanel>
                <TabPanel>
                    <!-- social profile -->
                    <social-profile />
                </TabPanel>
                <TabPanel>
                    <div class="space-y-5 p-5">
                        <div>
                            <h3 class="mb-2.5 font-semibold text-black">{{ $t('billing') }}</h3>
                            <p>{{ $t('manage_your_billing_and_payment_details') }}</p>
                        </div>
                        <div class="overflow-hidden rounded-lg bg-white shadow-4xl">
                            <div
                                class="flex flex-wrap items-center justify-between gap-3 border-b border-gray-100 bg-gray-200 px-5 py-2.5"
                            >
                                <div class="flex justify-between gap-2">
                                    <icon-rocket class="text-blue" />
                                    <span class="text-base/5 font-semibold text-black">{{ $t('business_plan') }}</span>
                                </div>
                                <div class="flex flex-wrap items-center gap-5">
                                    <label class="inline-flex cursor-pointer items-center gap-2.5">
                                        <input
                                            type="checkbox"
                                            class="peer sr-only"
                                            checked
                                            v-model="togglePrice"
                                        />
                                        <div
                                            class="peer relative h-5 w-9 rounded-full bg-white shadow-3xl ring-1 ring-gray-100 after:absolute after:start-[1.5px] after:top-1/2 after:h-4 after:w-4 after:-translate-y-1/2 after:rounded-full after:bg-gray-100 after:transition-all after:content-[''] peer-checked:bg-success peer-checked:ring-transparent peer-checked:after:translate-x-full peer-checked:after:bg-white"
                                        ></div>
                                        <span class="text-black">Yearly</span>
                                    </label>
                                    <div
                                        class="inline-flex items-center gap-2 rounded-lg bg-danger/[0.08] px-2 py-1.5 text-danger"
                                    >
                                        <p>{{ $t('save') }} 30%</p>
                                    </div>
                                    <div
                                        class="inline-flex items-center gap-2 rounded-lg bg-white px-2 py-1.5 shadow-4xl"
                                    >
                                        <span class="size-1.5 shrink-0 rounded-full bg-success"></span>
                                        <p>{{  $t('limited_time_only') }}</p>
                                    </div>
                                </div>
                            </div>
                            <div
                                class="flex flex-col justify-between gap-5 p-5 lg:flex-row lg:items-center xl:gap-[49px]"
                            >
                                <div class="shrink-0 lg:w-[310px]">
                                    <h2 class="mb-2.5 text-[30px]/[38px] font-extrabold text-black">
                                        {{ togglePrice ? '$199.99' : '$19.99' }}
                                        <span class="text-sm font-semibold italic text-orange"
                                            >Per {{ togglePrice ? 'year' : 'month' }}</span
                                        >
                                    </h2>
                                    <p class="mb-5">Integer ultricies nunc hendrerit arcu accumsan ultricies.</p>
                                    <button type="button" class="btn">Subscribe</button>
                                </div>
                                <span
                                    class="h-[1px] w-36 shrink-0 rounded-full bg-gray-100 lg:h-[90px] lg:w-[1px]"
                                ></span>
                                <div class="grow">
                                    <h3 class="mb-4 text-black">Plan includes:</h3>
                                    <div class="grid gap-2 xl:grid-cols-2 xl:gap-4">
                                        <div class="flex gap-1.5 rounded-lg bg-gray-200 p-1.5">
                                            <icon-check class="mt-0.5 shrink-0 text-success" />
                                            <span>{{ $t('start_a_blog_to_reach_your_creative_peak') }}</span>
                                        </div>
                                        <div class="flex gap-1.5 rounded-lg bg-gray-200 p-1.5">
                                            <icon-check class="mt-0.5 shrink-0 text-success" />
                                            <span>{{ $t('starting_your_traveling_blog_with_vasco') }}</span>
                                        </div>
                                        <div class="flex gap-1.5 rounded-lg bg-gray-200 p-1.5">
                                            <icon-check class="mt-0.5 shrink-0 text-success" />
                                            <span>{{ $t('donec_faucibus_nisi_sed_ultricies_ultricies') }}</span>
                                        </div>
                                        <div class="flex gap-1.5 rounded-lg bg-gray-200 p-1.5">
                                            <icon-check class="mt-0.5 shrink-0 text-success" />
                                            <span>{{ $t('nulla_convallis_nulla_sit_amet_mattis_faucibus') }}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="overflow-hidden rounded-lg bg-white shadow-4xl">
                            <div
                                class="flex flex-col flex-wrap justify-between gap-5 border-b border-gray-100 px-5 py-2.5 sm:flex-row sm:items-center"
                            >
                                <div class="flex justify-between gap-2">
                                    <h3 class="text-base/5 font-semibold text-black">{{ $t('billing_history') }}</h3>
                                </div>
                                <div class="flex flex-col justify-between gap-3 sm:flex-row sm:gap-5">
                                    <div>
                                        <button type="button" class="btn btn-linear shrink-0 px-2 py-1.5 text-xs">
                                            <p>All</p>
                                        </button>
                                    </div>
                                    <div class="flex items-center gap-2.5">
                                        <button
                                            type="button"
                                            class="btn btn-linear shrink-0 px-2 py-1.5 text-xs text-black"
                                        >
                                            <icon-calender />
                                            <p>15 May 2023</p>
                                        </button>
                                        <span class="-m-0.5">To</span>
                                        <button
                                            type="button"
                                            class="btn btn-linear shrink-0 px-2 py-1.5 text-xs text-black"
                                        >
                                            <icon-calender />
                                            <p>10 Jan 2023</p>
                                        </button>
                                    </div>
                                    <div>
                                        <button
                                            type="button"
                                            class="btn btn-linear shrink-0 px-2 py-1.5 text-xs text-black"
                                        >
                                            <icon-download />
                                            <p>Download all</p>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="overflow-x-auto">
                                <table
                                    class="billing-history w-full border-separate border-spacing-y-0 whitespace-nowrap"
                                >
                                    <thead>
                                        <tr>
                                            <th>
                                                <div class="inline-flex items-center gap-2">
                                                    <div>
                                                        <label
                                                            class="mr-3 flex flex-wrap items-center justify-between gap-3 text-sm"
                                                        >
                                                            <span class="peer flex cursor-pointer items-center gap-2">
                                                                <input
                                                                    type="checkbox"
                                                                    class="peer form-checkbox size-3"
                                                                />
                                                            </span>
                                                        </label>
                                                    </div>
                                                    <icon-shorted class="shrink-0" />
                                                    <span>{{ $t('invoice') }}</span>
                                                </div>
                                            </th>
                                            <th>
                                                <div class="inline-flex items-center gap-2">
                                                    <icon-lower-shorted class="shrink-0" />
                                                    <span>{{ $t('invoice') }}</span>
                                                </div>
                                            </th>
                                            <th>
                                                <div class="inline-flex items-center gap-2">
                                                    <icon-lower-shorted class="shrink-0 rotate-180" />
                                                    <span>{{$t('date')}}</span>
                                                </div>
                                            </th>
                                            <th>
                                                <div class="ml-auto inline-flex items-center gap-2">
                                                    <icon-lower-shorted class="shrink-0 rotate-180" />
                                                    <span>{{ $t('status') }}</span>
                                                </div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div class="inline-flex items-center gap-5">
                                                    <div>
                                                        <label
                                                            class="flex flex-wrap items-center justify-between gap-3 text-sm"
                                                        >
                                                            <span class="peer flex cursor-pointer items-center gap-2">
                                                                <input
                                                                    type="checkbox"
                                                                    class="peer form-checkbox size-3"
                                                                />
                                                            </span>
                                                        </label>
                                                    </div>
                                                    <span>WEST1000342597-001</span>
                                                </div>
                                            </td>
                                            <td>$5,932.32</td>
                                            <td>Feb 21, 2023</td>
                                            <td>
                                                <div
                                                    class="inline-flex items-center gap-2 rounded-lg bg-white px-2 py-1.5 shadow-5xl"
                                                >
                                                    <icon-verify class="size-3.5 text-success" />
                                                    <span class="text-xs">Successful</span>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="inline-flex items-center gap-5">
                                                    <div>
                                                        <label
                                                            class="flex flex-wrap items-center justify-between gap-3 text-sm"
                                                        >
                                                            <span class="peer flex cursor-pointer items-center gap-2">
                                                                <input
                                                                    type="checkbox"
                                                                    class="peer form-checkbox size-3"
                                                                />
                                                            </span>
                                                        </label>
                                                    </div>
                                                    <span>WEST1000342597-001</span>
                                                </div>
                                            </td>
                                            <td>$12,023.12</td>
                                            <td>Aug 3, 2023</td>
                                            <td>
                                                <div
                                                    class="inline-flex items-center gap-2 rounded-lg bg-white px-2 py-1.5 shadow-5xl"
                                                >
                                                    <icon-Close-bg class="size-3.5 text-success" />
                                                    <span class="text-xs">Failed</span>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="inline-flex items-center gap-5">
                                                    <div>
                                                        <label
                                                            class="flex flex-wrap items-center justify-between gap-3 text-sm"
                                                        >
                                                            <span class="peer flex cursor-pointer items-center gap-2">
                                                                <input
                                                                    type="checkbox"
                                                                    class="peer form-checkbox size-3"
                                                                />
                                                            </span>
                                                        </label>
                                                    </div>
                                                    <span>WEST1000342597-001</span>
                                                </div>
                                            </td>
                                            <td>$12,023.12</td>
                                            <td>Aug 3, 2023</td>
                                            <td>
                                                <div
                                                    class="inline-flex items-center gap-2 rounded-lg bg-white px-2 py-1.5 shadow-5xl"
                                                >
                                                    <icon-pending class="size-3.5 text-yellow" />
                                                    <span class="text-xs">Pending</span>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="inline-flex items-center gap-5">
                                                    <div>
                                                        <label
                                                            class="flex flex-wrap items-center justify-between gap-3 text-sm"
                                                        >
                                                            <span class="peer flex cursor-pointer items-center gap-2">
                                                                <input
                                                                    type="checkbox"
                                                                    class="peer form-checkbox size-3"
                                                                />
                                                            </span>
                                                        </label>
                                                    </div>
                                                    <span>WEST1000342597-001</span>
                                                </div>
                                            </td>
                                            <td>$5,932.32</td>
                                            <td>Feb 21, 2023</td>
                                            <td>
                                                <div
                                                    class="inline-flex items-center gap-2 rounded-lg bg-white px-2 py-1.5 shadow-5xl"
                                                >
                                                    <icon-verify class="size-3.5 text-success" />
                                                    <span class="text-xs">Successful</span>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="inline-flex items-center gap-5">
                                                    <div>
                                                        <label
                                                            class="flex flex-wrap items-center justify-between gap-3 text-sm"
                                                        >
                                                            <span class="peer flex cursor-pointer items-center gap-2">
                                                                <input
                                                                    type="checkbox"
                                                                    class="peer form-checkbox size-3"
                                                                />
                                                            </span>
                                                        </label>
                                                    </div>
                                                    <span>WEST1000342597-001</span>
                                                </div>
                                            </td>
                                            <td>$5,932.32</td>
                                            <td>Feb 21, 2023</td>
                                            <td>
                                                <div
                                                    class="inline-flex items-center gap-2 rounded-lg bg-white px-2 py-1.5 shadow-5xl"
                                                >
                                                    <icon-verify class="size-3.5 text-success" />
                                                    <span class="text-xs">Successful</span>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="inline-flex items-center gap-5">
                                                    <div>
                                                        <label
                                                            class="flex flex-wrap items-center justify-between gap-3 text-sm"
                                                        >
                                                            <span class="peer flex cursor-pointer items-center gap-2">
                                                                <input
                                                                    type="checkbox"
                                                                    class="peer form-checkbox size-3"
                                                                />
                                                            </span>
                                                        </label>
                                                    </div>
                                                    <span>WEST1000342597-001</span>
                                                </div>
                                            </td>
                                            <td>$5,932.32</td>
                                            <td>Feb 21, 2023</td>
                                            <td>
                                                <div
                                                    class="inline-flex items-center gap-2 rounded-lg bg-white px-2 py-1.5 shadow-5xl"
                                                >
                                                    <icon-verify class="size-3.5 text-success" />
                                                    <span class="text-xs">Successful</span>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <!-- pagination Design -->
                        <div class="flex flex-wrap justify-end gap-3 sm:gap-5">
                            <button
                                type="button"
                                class="rounded-lg bg-white px-3 py-2.5 text-xs shadow-4xl transition hover:bg-gray-200"
                            >
                                {{ $t('showing') }} <span class="text-black">1</span> - <span class="text-black">10 </span>of<span
                                    class="text-black"
                                >
                                    100
                                </span>
                                {{ $t('entries') }}
                            </button>
                            <div class="flex overflow-hidden rounded-lg bg-white shadow-4xl">
                                <button
                                    type="button"
                                    class="grid size-9 shrink-0 place-content-center text-[#28282B] transition hover:bg-gray-200"
                                >
                                    <icon-arrow-down class="size-[18px] rotate-90" />
                                </button>
                                <div class="flex border-x border-gray-100 text-xs font-semibold text-gray">
                                    <button
                                        type="button"
                                        class="grid size-9 shrink-0 place-content-center border-r border-transparent transition hover:border-gray-100 hover:bg-gray-200"
                                    >
                                        1
                                    </button>
                                    <button
                                        type="button"
                                        class="grid size-9 shrink-0 place-content-center border-x border-transparent transition hover:border-gray-100 hover:bg-gray-200"
                                    >
                                        2
                                    </button>
                                    <button
                                        type="button"
                                        class="grid size-9 shrink-0 place-content-center border-x border-transparent transition hover:border-gray-100 hover:bg-gray-200"
                                    >
                                        3
                                    </button>
                                    <button
                                        type="button"
                                        class="grid size-9 shrink-0 place-content-center border-x border-transparent transition hover:border-gray-100 hover:bg-gray-200"
                                    >
                                        4
                                    </button>
                                    <button
                                        type="button"
                                        class="grid size-9 shrink-0 place-content-center border-l border-transparent transition hover:border-gray-100 hover:bg-gray-200"
                                    >
                                        5
                                    </button>
                                </div>
                                <button
                                    type="button"
                                    class="grid size-9 shrink-0 place-content-center text-[#28282B] transition hover:bg-gray-200"
                                >
                                    <icon-arrow-down class="size-[18px] -rotate-90" />
                                </button>
                            </div>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div class="relative bg-white p-5">
                        <div class="divide-y divide-gray-100">
                            <!-- update password component -->
                            <update-password />

                            <!-- deactivate account component -->
                            <deactivate-account />

                        </div>
                    </div>
                </TabPanel>
            </TabPanels>
        </TabGroup>
    </div>
</template>
<script>
    import IconVerify from '@/components/icon/icon-verify.vue';
    import IconArrowDown from '@/components/icon/icon-arrow-down.vue';
    import IconCheck from '@/components/icon/icon-check.vue';
    import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue';
    import IconRocket from '@/components/icon/icon-rocket.vue';
    import IconCalender from '@/components/icon/icon-calendar.vue';
    import IconDownload from '@/components/icon/icon-download.vue';
    import IconShorted from '@/components/icon/icon-shorted.vue';
    import IconLowerShorted from '@/components/icon/icon-lower-shorted.vue';
    import IconCloseBg from '@/components/icon/icon-close-bg.vue';
    import IconPending from '@/components/icon/icon-pending.vue';
    import IconEye from '@/components/icon/icon-eye.vue';
    import IconEyeSlash from '@/components/icon/icon-eye-slash.vue';
    import IconInfo from '@/components/icon/icon-info.vue';
    import IconInfoBorder from '@/components/icon/icon-info-border.vue';
    import SocialProfile from './SocialProfile.vue';
    import UpdatePassword from './UpdatePassword.vue';
    import DeactivateAccount from './DeactivateAccount.vue';
    import Profile from './Profile.vue';
    export default {
        components:{
            IconVerify,IconArrowDown,IconCheck,TabGroup,TabList,Tab,TabPanels,TabPanel,
            IconRocket,IconCalender,IconDownload,IconShorted,IconLowerShorted,IconCloseBg,IconPending,
            IconEye,IconEyeSlash,IconInfo,IconInfoBorder,
            SocialProfile,
            UpdatePassword,
            DeactivateAccount,
            Profile
        },
        data(){
            return {
                togglePrice:false
            }
        }
    }
</script>

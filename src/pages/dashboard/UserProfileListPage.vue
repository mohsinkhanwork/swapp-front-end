<template>
    <div class="space-y-5">
        <div class="flex flex-col gap-4 rounded-lg bg-white px-5 py-4 shadow-3xl md:flex-row md:items-center">
            <div class="shrink-0 text-base/5 font-semibold text-black">{{ $t('profile_list') }}</div>
            <div class="flex flex-wrap items-center gap-4 md:ml-auto">
                <vue-popper placement="bottom-start" offsetDistance="0" class="relative !m-0 !border-0 *:w-full">
                    <button
                        type="button"
                        class="flex w-48 items-center gap-2 rounded-lg bg-white px-3 py-2 text-left shadow-3xl ring-1 ring-inset ring-gray-100"
                    >
                        <span class="truncate">Software developer</span>
                        <icon-arrow-down class="ml-auto size-4 shrink-0 text-black" />
                    </button>
                    <template #content>
                        <div
                            class="my-2.5 space-y-1.5 rounded-lg bg-white p-1.5 shadow-[0_0_0_1px_rgba(18,43,105,0.08),0_1px_2px_0_rgba(18,43,105,0.08)]"
                        >
                            <div class="rounded-lg px-2.5 py-2 transition hover:bg-gray-200 hover:text-black">
                                Software Engineer
                            </div>
                            <div class="rounded-lg px-2.5 py-2 transition hover:bg-gray-200 hover:text-black">
                                Tester
                            </div>
                            <div class="rounded-lg px-2.5 py-2 transition hover:bg-gray-200 hover:text-black">
                                Project Manager
                            </div>
                        </div>
                    </template>
                </vue-popper>
                <div class="relative">
                    <icon-search class="absolute left-3 top-1/2 -translate-y-1/2 text-black" />
                    <input type="text" :placeholder="$t('search')" class="form-input py-[7px] pl-9" />
                </div>
                <button
                    type="button"
                    class="flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-left shadow-3xl ring-1 ring-inset ring-gray-100"
                >
                    <icon-filter class="size-4 shrink-0 text-black" />
                    <span>{{ $t('filter') }}</span>
                </button>
            </div>
        </div>
        <div class="space-y-4">
            <div class="space-y-5 rounded-lg bg-white p-5 shadow-3xl">
                <div class="flex flex-wrap items-center justify-between gap-6">
                    <div class="flex flex-wrap items-center gap-5">
                        <div class="flex items-center gap-2.5">
                            <div class="size-10 overflow-hidden rounded-lg">
                                <img
                                    src="/assets/images/profile.png"
                                    class="h-full w-full object-cover"
                                    alt="Profile"
                                />
                            </div>
                            <div class="space-y-1.5">
                                <h3 class="text-base/5 font-semibold text-black">Darlene Robertson</h3>
                                <div>Software Engineer</div>
                            </div>
                        </div>
                        <div
                            class="flex flex-wrap items-center gap-2.5 text-[11px]/[14px] font-bold uppercase text-black"
                        >
                            <div class="relative rounded-lg bg-gray-200 pr-7">
                                <div class="rounded-lg bg-[#F3E8FF] px-2 py-1.5">Pharmacist</div>
                                <icon-check-round-green class="absolute right-1.5 top-1/2 -translate-y-1/2" />
                            </div>
                            <div class="relative rounded-lg bg-gray-200 pr-7">
                                <div class="rounded-lg bg-[#DCFCE7] px-2 py-1.5">Psychologist</div>
                                <icon-check-round-gray class="absolute right-1.5 top-1/2 -translate-y-1/2" />
                            </div>
                        </div>
                    </div>

                    <div class="flex flex-wrap items-center gap-4">
                        <a href="#" class="btn py-[5px]">{{ $t('view_profile') }}</a>
                        <CommonRequestDropdown />
                    </div>
                </div>
                <div class="space-y-2.5">
                    <h6 class="font-semibold text-black">{{ $t('about') }}</h6>
                    <p class="leading-[22px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
                <a
                    href="#"
                    class="inline-flex items-center gap-2 rounded-lg px-2 py-1.5 text-black shadow-3xl ring-1 ring-inset ring-gray-100"
                >
                    <icon-star-border-bg class="size-4 text-yellow" />
                    <span>4.5</span>
                    <span class="h-3 w-0.5 bg-gray-100"></span>
                    <span>1K {{ $t('reviews') }}</span>
                </a>
            </div>
            <div class="space-y-5 rounded-lg bg-white p-5 shadow-3xl">
                <div class="flex flex-wrap items-center justify-between gap-6">
                    <div class="flex flex-wrap items-center gap-5">
                        <div class="flex items-center gap-2.5">
                            <div class="size-10 overflow-hidden rounded-lg">
                                <img
                                    src="/assets/images/profile.png"
                                    class="h-full w-full object-cover"
                                    alt="Profile"
                                />
                            </div>
                            <div class="space-y-1.5">
                                <h3 class="text-base/5 font-semibold text-black">Darlene Robertson</h3>
                                <div>Software Engineer</div>
                            </div>
                        </div>
                        <div
                            class="flex flex-wrap items-center gap-2.5 text-[11px]/[14px] font-bold uppercase text-black"
                        >
                            <div class="relative rounded-lg bg-gray-200 pr-7">
                                <div class="rounded-lg bg-[#F3E8FF] px-2 py-1.5">Pharmacist</div>
                                <icon-check-round-green class="absolute right-1.5 top-1/2 -translate-y-1/2" />
                            </div>
                            <div class="relative rounded-lg bg-gray-200 pr-7">
                                <div class="rounded-lg bg-[#DCFCE7] px-2 py-1.5">Psychologist</div>
                                <icon-check-round-gray class="absolute right-1.5 top-1/2 -translate-y-1/2" />
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-wrap items-center gap-4">
                        <a href="#" class="btn py-[5px]">{{ $t('view_profile') }}</a>
                        <CommonRequestDropdown />
                    </div>
                </div>
                <div class="space-y-2.5">
                    <h6 class="font-semibold text-black">{{ $t('about') }}</h6>
                    <p class="leading-[22px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.
                    </p>
                </div>
                <a
                    href="#"
                    class="inline-flex items-center gap-2 rounded-lg px-2 py-1.5 text-black shadow-3xl ring-1 ring-inset ring-gray-100"
                >
                    <icon-star-border-bg class="size-4 text-yellow" />
                    <span>4.5</span>
                    <span class="h-3 w-0.5 bg-gray-100"></span>
                    <span>1K {{ $t('reviews') }}</span>
                </a>
            </div>
            <div class="space-y-5 rounded-lg bg-white p-5 shadow-3xl">
                <div class="flex flex-wrap items-center justify-between gap-6">
                    <div class="flex flex-wrap items-center gap-5">
                        <div class="flex items-center gap-2.5">
                            <div class="size-10 overflow-hidden rounded-lg">
                                <img
                                    src="/assets/images/profile.png"
                                    class="h-full w-full object-cover"
                                    alt="Profile"
                                />
                            </div>
                            <div class="space-y-1.5">
                                <h3 class="text-base/5 font-semibold text-black">Darlene Robertson</h3>
                                <div>Software Engineer</div>
                            </div>
                        </div>
                        <div
                            class="flex flex-wrap items-center gap-2.5 text-[11px]/[14px] font-bold uppercase text-black"
                        >
                            <div class="relative rounded-lg bg-gray-200 pr-7">
                                <div class="rounded-lg bg-[#F3E8FF] px-2 py-1.5">Pharmacist</div>
                                <icon-check-round-green class="absolute right-1.5 top-1/2 -translate-y-1/2" />
                            </div>
                            <div class="relative rounded-lg bg-gray-200 pr-7">
                                <div class="rounded-lg bg-[#DCFCE7] px-2 py-1.5">Psychologist</div>
                                <icon-check-round-gray class="absolute right-1.5 top-1/2 -translate-y-1/2" />
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-wrap items-center gap-4">
                        <a href="#" class="btn py-[5px]">{{ $t('view_profile') }}</a>
                        <CommonRequestDropdown />
                    </div>
                </div>
                <div class="space-y-2.5">
                    <h6 class="font-semibold text-black">{{ $t('about') }}</h6>
                    <p class="leading-[22px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
                <a
                    href="#"
                    class="inline-flex items-center gap-2 rounded-lg px-2 py-1.5 text-black shadow-3xl ring-1 ring-inset ring-gray-100"
                >
                    <icon-star-border-bg class="size-4 text-yellow" />
                    <span>4.5</span>
                    <span class="h-3 w-0.5 bg-gray-100"></span>
                    <span>1K {{ $t('reviews') }}</span>
                </a>
            </div>
            <div class="mx-auto w-full max-w-4xl">
                <img alt="ads" src="/assets/images/ad-two.png" class="w-full" />
            </div>
            <div class="space-y-5 rounded-lg bg-white p-5 shadow-3xl">
                <div class="flex flex-wrap items-center justify-between gap-6">
                    <div class="flex flex-wrap items-center gap-5">
                        <div class="flex items-center gap-2.5">
                            <div class="size-10 overflow-hidden rounded-lg">
                                <img
                                    src="/assets/images/profile.png"
                                    class="h-full w-full object-cover"
                                    alt="Profile"
                                />
                            </div>
                            <div class="space-y-1.5">
                                <h3 class="text-base/5 font-semibold text-black">Darlene Robertson</h3>
                                <div>Software Engineer</div>
                            </div>
                        </div>
                        <div
                            class="flex flex-wrap items-center gap-2.5 text-[11px]/[14px] font-bold uppercase text-black"
                        >
                            <div class="relative rounded-lg bg-gray-200 pr-7">
                                <div class="rounded-lg bg-[#F3E8FF] px-2 py-1.5">Pharmacist</div>
                                <icon-check-round-green class="absolute right-1.5 top-1/2 -translate-y-1/2" />
                            </div>
                            <div class="relative rounded-lg bg-gray-200 pr-7">
                                <div class="rounded-lg bg-[#DCFCE7] px-2 py-1.5">Psychologist</div>
                                <icon-check-round-gray class="absolute right-1.5 top-1/2 -translate-y-1/2" />
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-wrap items-center gap-4">
                        <a href="#" class="btn py-[5px]">{{ $t('view_profile') }}</a>
                        <CommonRequestDropdown />
                    </div>
                </div>
                <div class="space-y-2.5">
                    <h6 class="font-semibold text-black">{{ $t('about') }}</h6>
                    <p class="leading-[22px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
                <a
                    href="#"
                    class="inline-flex items-center gap-2 rounded-lg px-2 py-1.5 text-black shadow-3xl ring-1 ring-inset ring-gray-100"
                >
                    <icon-star-border-bg class="size-4 text-yellow" />
                    <span>4.5</span>
                    <span class="h-3 w-0.5 bg-gray-100"></span>
                    <span>1K {{ $t('reviews') }}</span>
                </a>
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
    </div>
</template>
<script>
import IconArrowDown from '@/components/icon/icon-arrow-down.vue';
import IconFilter from '@/components/icon/icon-filter.vue';
import IconSearch from '@/components/icon/icon-search.vue';
import IconCheckRoundGreen from '@/components/icon/icon-check-round-green.vue';
import IconCheckRoundGray from '@/components/icon/icon-check-round-gray.vue';
import IconStarBorderBg from '@/components/icon/icon-star-border-bg.vue';
import CommonRequestDropdown from '@/components/common/common-request-dropdown.vue';
export default {
    components: {
        IconArrowDown,
        IconFilter,
        IconSearch,
        IconStarBorderBg,
        IconCheckRoundGreen,
        IconCheckRoundGray,
        CommonRequestDropdown,
    },
};
</script>

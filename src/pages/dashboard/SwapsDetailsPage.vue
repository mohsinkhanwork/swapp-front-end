<template>
    <div class="flex h-full">
        <div class="m-auto w-full max-w-[977px] space-y-4">
            <div class="relative overflow-hidden overflow-y-auto rounded-lg bg-white p-5 shadow-3xl">
                <div class="absolute left-0 top-0 h-[70px] w-full overflow-hidden bg-primary/10">
                    <div
                        class="absolute -bottom-16 left-1/2 grid size-72 -translate-x-1/2 place-content-center rounded-full border border-primary"
                    >
                        <div class="grid size-56 place-content-center rounded-full border border-primary">
                            <div class="size-36 rounded-full border border-primary"></div>
                        </div>
                    </div>
                </div>
                <div class="relative flex flex-col items-start gap-5 md:flex-row md:gap-16 xl:gap-28">
                    <div class="grow">
                        <div class="flex flex-col justify-between gap-3 md:flex-row">
                            <div class="space-y-4">
                                <div class="size-20 overflow-hidden rounded-lg">
                                    <img src="/assets/images/profile.png" alt="User Profile" />
                                </div>
                                <div class="space-y-1.5">
                                    <h4 class="text-base/5 font-semibold text-black">Annie Easley</h4>
                                    <div class="flex flex-wrap items-center gap-2.5">
                                        <span>Software Engineer</span>
                                        <span class="size-1 rounded-full bg-primary"></span>
                                        <div class="flex items-center gap-2">
                                            <icon-calendar class="size-4 text-black" />
                                            <span>{{ $t('joined') }} Mar, 2015</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex w-fit shrink-0 flex-col gap-2 md:mt-[70px] md:flex-row md:gap-4">
                                <div>
                                    <button
                                        type="button"
                                        class="rounded-lg bg-primary px-3.5 py-1.5 text-black hover:opacity-70"
                                    >
                                        {{ $t('following') }}
                                    </button>
                                </div>
                                <CommonRequestDropdown />
                            </div>
                        </div>
                        <div class="mt-5 space-y-5 border-t border-gray-100 pt-5">
                            <div class="space-y-2.5">
                                <h5 class="font-semibold text-black">{{ $t('about') }}</h5>
                                <p>I'm Annie Easley - Software Engineer</p>
                                <p>
                                    Experienced Software Engineer with a passion for crafting innovative solutions
                                    through cutting-edge technology and a dedication to delivering high-quality code
                                    that meets both functional and non-functional requirements.
                                </p>
                            </div>
                            <div class="flex flex-wrap gap-5">
                                <div class="flex flex-wrap items-center gap-2.5">
                                    <a
                                        href="tel:+17039065820"
                                        class="flex items-center gap-2 rounded-lg p-1.5 ring-1 ring-inset ring-gray-100 transition hover:text-black"
                                    >
                                        <icon-call class="size-4 shrink-0 text-black" />
                                        <span>+1 703-906-5820</span>
                                    </a>
                                    <a
                                        href="mailto:JohnBLarson@armyspy.com"
                                        class="flex items-center gap-2 rounded-lg p-1.5 ring-1 ring-inset ring-gray-100 transition hover:text-black"
                                    >
                                        <icon-email class="size-4 shrink-0 text-black" />
                                        <span>JohnBLarson@armyspy.com</span>
                                    </a>
                                </div>
                                <div class="flex flex-wrap items-center gap-2.5">
                                    <a
                                        href="#"
                                        class="grid size-8 place-content-center rounded-lg bg-[#316FF6]/5 transition hover:opacity-70"
                                    >
                                        <icon-facebook class="size-[18px]" />
                                    </a>
                                    <a
                                        href="#"
                                        class="grid size-8 place-content-center rounded-lg bg-[#0077B5]/5 transition hover:opacity-70"
                                    >
                                        <icon-linkedin class="size-[18px]" />
                                    </a>
                                    <a
                                        href="#"
                                        class="grid size-8 place-content-center rounded-lg bg-[#9059F6]/5 transition hover:opacity-70"
                                    >
                                        <icon-twitch class="size-[18px]" />
                                    </a>
                                    <a
                                        href="#"
                                        class="grid size-8 place-content-center rounded-lg bg-[#1B1F23]/5 transition hover:opacity-70"
                                    >
                                        <icon-github class="size-[18px]" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="space-y-5 rounded-lg bg-white p-5 shadow-3xl sm:w-[273px]">
                <div>
                    <h2 class="mb-2.5 text-black">Skills</h2>
                    <div class="inline-flex shrink-0 items-center gap-2 rounded-lg bg-[#FEE2E2] px-2 py-1.5 text-black">
                        <icon-check />
                        <span class="text-[11px]/[14px] font-bold uppercase">{{ $t('teacher') }}</span>
                    </div>
                </div>
                <div class="flex flex-wrap gap-5">
                    <div>
                        <h2 class="mb-2.5 text-black">{{ $t('status') }}</h2>
                        <div
                            class="flex items-center gap-2 rounded-lg bg-white px-3 py-[7px] text-left text-xs shadow-3xl ring-1 ring-inset ring-gray-100"
                        >
                            <icon-check-round-border class="size-4 text-success" />
                            Completed
                        </div>
                    </div>
                    <div>
                        <h2 class="mb-2.5 text-black">Start date</h2>
                        <div
                            class="rounded-lg bg-white px-3 py-[7px] text-left text-xs shadow-3xl ring-1 ring-inset ring-gray-100"
                        >
                            15 May 2020
                        </div>
                    </div>
                </div>
                <button type="button" class="btn p-1.5">
                    <icon-check-mark class="size-4" />
                    <span>Mark as learned</span>
                </button>
            </div>
            <div class="inline-flex w-full flex-wrap gap-5 rounded-lg bg-white p-5 shadow-3xl sm:w-auto">
                <button type="button" class="btn btn-linear p-1.5 text-black">
                    <icon-edit class="size-4" />
                    <span>Add review</span>
                </button>
                <button type="button" class="btn btn-linear p-1.5 text-black">
                    <span>Show rate & reviews</span>
                    <icon-arrow-down class="size-4 -rotate-90" />
                </button>
            </div>
        </div>
    </div>
</template>
<script>
import IconCalendar from '@/components/icon/icon-calendar.vue';
import IconCall from '@/components/icon/icon-call.vue';
import IconEmail from '@/components/icon/icon-email.vue';
import IconFacebook from '@/components/icon/icon-facebook.vue';
import IconGithub from '@/components/icon/icon-github.vue';
import IconLinkedin from '@/components/icon/icon-linkedin.vue';
import IconTwitch from '@/components/icon/icon-twitch.vue';
import IconCheck from '@/components/icon/icon-check.vue';
import IconCheckRoundBorder from '@/components/icon/icon-check-round-border.vue';
import IconCheckMark from '@/components/icon/icon-check-mark.vue';
import IconEdit from '@/components/icon/icon-edit.vue';
import IconArrowDown from '@/components/icon/icon-arrow-down.vue';
import CommonRequestDropdown from '@/components/common/common-request-dropdown.vue';

export default {
    components: {
        IconCalendar,
        IconCall,
        IconEmail,
        IconFacebook,
        IconLinkedin,
        IconTwitch,
        IconGithub,
        IconCheck,
        IconCheckRoundBorder,
        IconCheckMark,
        IconEdit,
        IconArrowDown,
        CommonRequestDropdown,
    },
};
</script>

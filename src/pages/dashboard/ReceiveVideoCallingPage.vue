<template>
    <div>
        <div class="mb-4 text-right lg:hidden">
            <button type="button">
                <icon-menu class="size-7" />
            </button>
        </div>
        <div class="flex items-start gap-4 h-[calc(100vh-151px)] lg:h-[calc(100vh-104px)]">
            <div class="hidden w-[314px] h-full shrink-0 rounded-lg bg-white shadow-3xl md:flex flex-col">
                <div class=" sticky top-0 bg-white rounded-lg px-5 pt-5 pb-2">
                    <div class="relative mb-5">
                        <icon-search class="absolute left-3 top-1/2 -translate-y-1/2 text-black" />
                        <input type="text" :placeholder="$t('search')" class="form-input py-[7px] pl-9" />
                    </div>
                    <div class="flex items-center gap-2">
                        <h2 class="font-semibold text-black">Messages</h2>
                        <div
                            class="h-[19px] bg-primary rounded-full min-w-[19px] grid place-content-center text-xs font-semibold text-black px-1">
                            2</div>
                    </div>
                </div>
                <div class="grow overflow-auto px-2.5 pb-4 pt-2 space-y-2">
                    <button type="button"
                        class="w-full flex gap-2.5 p-2.5 rounded-lg hover:ring-1 hover:ring-primary/30 hover:bg-primary/5 transition">
                        <div class="size-10 rounded-lg object-cover shrink-0 relative">
                            <img src="/assets/images/profile.png" alt="profile">
                            <div class="absolute -top-0.5 -right-0.5 size-[9px] rounded-full bg-success border-2"></div>
                        </div>
                        <div class="grow">
                            <div class="flex items-center justify-between gap-1">
                                <h3 class="text-black line-clamp-1">Marvin McKinney</h3>
                                <span class="text-xs/[15px] font-semibold text-gray-300 shrink-0">11:27 pm</span>
                            </div>
                            <div class="flex items-center justify-between gap-3 mt-1.5">
                                <p class="text-gray text-xs line-clamp-1">How do you stay inspired</p>
                                <div
                                    class="h-4 bg-danger rounded-full min-w-[16px] grid place-content-center text-xs font-bold text-white px-1">
                                    2</div>
                            </div>
                        </div>
                    </button>
                    <button type="button"
                        class="w-full flex gap-2.5 p-2.5 rounded-lg hover:ring-1 hover:ring-primary/30 hover:bg-primary/5 transition">
                        <div class="size-10 rounded-lg object-cover shrink-0 relative">
                            <img src="/assets/images/profile.png" alt="profile">
                            <div class="absolute -top-0.5 -right-0.5 size-[9px] rounded-full bg-success border-2"></div>
                        </div>
                        <div class="grow">
                            <div class="flex items-center justify-between gap-1">
                                <h3 class="text-black line-clamp-1">Annie Easley</h3>
                                <span class="text-xs/[15px] font-semibold text-gray-300 shrink-0">11:27 pm</span>
                            </div>
                            <div class="flex items-center justify-between gap-3 mt-1.5">
                                <p class="text-danger text-xs line-clamp-1">Typing...</p>
                                <div
                                    class="h-4 bg-danger rounded-full min-w-[16px] grid place-content-center text-xs font-bold text-white px-1">
                                    8</div>
                            </div>
                        </div>
                    </button>
                    <button type="button"
                        class="w-full flex gap-2.5 p-2.5 rounded-lg ring-1 ring-primary/30 bg-primary/5">
                        <div class="size-10 rounded-lg object-cover shrink-0 relative">
                            <img src="/assets/images/profile.png" alt="profile">
                            <div class="absolute -top-0.5 -right-0.5 size-[9px] rounded-full bg-success border-2"></div>
                        </div>
                        <div class="grow">
                            <div class="flex items-center justify-between gap-1">
                                <h3 class="text-black line-clamp-1">Courtney Henry</h3>
                                <span class="text-xs/[15px] font-semibold text-gray-300 shrink-0">11:27 pm</span>
                            </div>
                            <div class="flex items-center justify-between gap-3 mt-1.5">
                                <p class="text-gray text-xs line-clamp-1">How do you stay inspired</p>
                                <div
                                    class="h-4 bg-danger rounded-full min-w-[16px] grid place-content-center text-xs font-bold text-white px-1">
                                    2</div>
                            </div>
                        </div>
                    </button>
                    <button type="button"
                        class="w-full flex gap-2.5 p-2.5 rounded-lg hover:ring-1 hover:ring-primary/30 hover:bg-primary/5 transition">
                        <div class="size-10 rounded-lg object-cover shrink-0 relative">
                            <img src="/assets/images/profile.png" alt="profile">
                            <div class="absolute -top-0.5 -right-0.5 size-[9px] rounded-full bg-gray-300 border-2">
                            </div>
                        </div>
                        <div class="grow">
                            <div class="flex items-center justify-between gap-1">
                                <h3 class="text-black line-clamp-1">Marvin McKinney</h3>
                                <span class="text-xs/[15px] font-semibold text-gray-300 shrink-0">11:27 pm</span>
                            </div>
                            <div class="flex items-center justify-between gap-3 mt-1.5">
                                <p class="text-gray text-xs line-clamp-1">It's really nice working with you</p>
                                <div
                                    class="h-4 bg-danger rounded-full min-w-[16px] grid place-content-center text-xs font-bold text-white px-1">
                                    109</div>
                            </div>
                        </div>
                    </button>
                    <button type="button"
                        class="w-full flex gap-2.5 p-2.5 rounded-lg hover:ring-1 hover:ring-primary/30 hover:bg-primary/5 transition">
                        <div class="size-10 rounded-lg object-cover shrink-0 relative">
                            <img src="/assets/images/profile.png" alt="profile">
                            <div class="absolute -top-0.5 -right-0.5 size-[9px] rounded-full bg-gray-300 border-2">
                            </div>
                        </div>
                        <div class="grow">
                            <div class="flex items-center justify-between gap-1">
                                <h3 class="text-black line-clamp-1">Marvin McKinney</h3>
                                <span class="text-xs/[15px] font-semibold text-gray-300 shrink-0">11:27 pm</span>
                            </div>
                            <div class="flex items-center justify-between gap-3 mt-1.5">
                                <p class="text-gray text-xs line-clamp-1">How do you stay inspired</p>
                                <icon-attachment class="size-4 text-gray" />
                            </div>
                        </div>
                    </button>
                    <button type="button"
                        class="w-full flex gap-2.5 p-2.5 rounded-lg hover:ring-1 hover:ring-primary/30 hover:bg-primary/5 transition">
                        <div class="size-10 rounded-lg object-cover shrink-0 relative">
                            <img src="/assets/images/profile.png" alt="profile">
                            <div class="absolute -top-0.5 -right-0.5 size-[9px] rounded-full bg-success border-2">
                            </div>
                        </div>
                        <div class="grow">
                            <div class="flex items-center justify-between gap-1">
                                <h3 class="text-black line-clamp-1">Guy Hawkins</h3>
                                <span class="text-xs/[15px] font-semibold text-gray-300 shrink-0">11:27 pm</span>
                            </div>
                            <div class="flex items-center justify-between gap-3 mt-1.5">
                                <p class="text-gray text-xs line-clamp-1">Then make a deal</p>
                                <icon-check class="size-4 text-gray-300" />
                            </div>
                        </div>
                    </button>
                    <button type="button"
                        class="w-full flex gap-2.5 p-2.5 rounded-lg hover:ring-1 hover:ring-primary/30 hover:bg-primary/5 transition">
                        <div class="size-10 rounded-lg object-cover shrink-0 relative">
                            <img src="/assets/images/profile.png" alt="profile">
                            <div class="absolute -top-0.5 -right-0.5 size-[9px] rounded-full bg-gray-300 border-2">
                            </div>
                        </div>
                        <div class="grow">
                            <div class="flex items-center justify-between gap-1">
                                <h3 class="text-black line-clamp-1">Guy Hawkins</h3>
                                <span class="text-xs/[15px] font-semibold text-gray-300 shrink-0">11:27 pm</span>
                            </div>
                            <div class="flex items-center justify-between gap-3 mt-1.5">
                                <p class="text-gray text-xs line-clamp-1">Then make a deal</p>
                                <icon-double-check class="size-4 text-success" />
                            </div>
                        </div>
                    </button>
                    <button type="button"
                        class="w-full flex gap-2.5 p-2.5 rounded-lg hover:ring-1 hover:ring-primary/30 hover:bg-primary/5 transition">
                        <div class="size-10 rounded-lg object-cover shrink-0 relative">
                            <img src="/assets/images/profile.png" alt="profile">
                            <div class="absolute -top-0.5 -right-0.5 size-[9px] rounded-full bg-gray-300 border-2">
                            </div>
                        </div>
                        <div class="grow">
                            <div class="flex items-center justify-between gap-1">
                                <h3 class="text-black line-clamp-1">Guy Hawkins</h3>
                                <span class="text-xs/[15px] font-semibold text-gray-300 shrink-0">11:27 pm</span>
                            </div>
                            <div class="flex items-center justify-between gap-3 mt-1.5">
                                <p class="text-gray text-xs line-clamp-1">Then make a deal</p>
                            </div>
                        </div>
                    </button>
                </div>
            </div>
            <div class="grow overflow-hidden rounded-lg bg-white shadow-3xl h-full p-3 lg:p-5">
                <div class="rounded-lg relative overflow-hidden h-full w-full">
                    <img src="/assets/images/vcall-profile.jpg" alt="image" class="h-full w-full object-cover">
                    <div class="absolute top-5 right-5 lg:top-[30px] lg:right-[30px] w-24 h-32 sm:h-[170px] sm:w-[140px] rounded-lg ring-4 ring-white overflow-hidden z-[2]">
                         <img src="/assets/images/vcall-profile.jpg" alt="image" class="h-full w-full object-cover">
                    </div>
                    <div class="absolute bottom-0 inset-x-0 h-[300px] bg-gradient-to-t from-black to-black/0"></div>
                    <div
                        class="absolute bottom-5 lg:bottom-[30px] left-1/2 -translate-x-1/2 w-full flex justify-center gap-2 xl:gap-5 z-[2] flex-wrap px-20">
                        <button type="button"
                            class="size-10 grid place-content-center rounded-lg bg-white/10 text-white hover:opacity-85 transition">
                            <icon-rotate-camera class="size-[22px]" />
                        </button>
                        <button type="button"
                            class="size-10 grid place-content-center rounded-lg bg-white/10 text-white hover:opacity-85 transition">
                            <icon-unmute class="size-[22px]" />
                        </button>
                        <button type="button"
                            class="size-10 grid place-content-center rounded-lg bg-white/10 text-white hover:opacity-85 transition">
                            <icon-video class="size-[22px]" />
                        </button>
                        <button type="button"
                            class="size-10 grid place-content-center rounded-lg bg-white/10 text-white hover:opacity-85 transition">
                            <icon-smile-emoji class="size-[22px]" />
                        </button>
                        <button type="button"
                            class="size-10 grid place-content-center rounded-lg bg-white/10 text-white hover:opacity-85 transition">
                            <icon-hand-raise class="size-[22px]" />
                        </button>
                        <button type="button"
                            class="size-10 grid place-content-center rounded-lg bg-white/10 text-white hover:opacity-85 transition">
                            <icon-More class="size-[22px]" />
                        </button>
                        <button type="button"
                            class="size-10 grid place-content-center rounded-lg bg-danger text-white hover:opacity-85 transition">
                            <icon-call class="size-[22px] rotate-[136deg]" />
                        </button>



                    </div>

                    <div class="absolute bottom-5 left-5 lg:bottom-[30px] lg:left-[30px] flex gap-2 sm:gap-5 z-[2]">
                        <button type="button"
                            class="size-10 grid place-content-center rounded-lg bg-white/10 text-white hover:opacity-85 transition">
                            <icon-message class="size-[22px]" />
                        </button>
                    </div>
                    <div class="absolute left-5 top-5 lg:top-[30px] lg:left-[30px] flex gap-2 sm:gap-5 z-[2]">
                        <button type="button"
                            class="size-10 grid place-content-center rounded-lg bg-white/10 text-white hover:opacity-85 transition">
                            <icon-expend class="size-[22px]" />
                        </button>
                    </div>
                    <div class="absolute bottom-5 right-5 lg:bottom-[30px] lg:right-[30px] flex gap-2 sm:gap-5 z-[2]">
                        <button type="button"
                            class="size-10 grid place-content-center rounded-lg bg-white/10 text-white hover:opacity-85 transition">
                            <icon-add-people class="size-[22px]" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

import IconSearch from '@/components/icon/icon-search.vue';
import IconAttachment from '@/components/icon/icon-attachment.vue';
import IconCheck from '@/components/icon/icon-check.vue';
import IconDoubleCheck from '@/components/icon/icon-double-check.vue';
import IconMenu from '@/components/icon/icon-menu.vue';
import IconRotateCamera from '@/components/icon/icon-rotate-camera.vue';
import IconUnmute from '@/components/icon/icon-unmute.vue';
import IconMore from '@/components/icon/icon-more.vue';
import IconCall from '@/components/icon/icon-call.vue';
import IconAddPeople from '@/components/icon/icon-add-people.vue';
import IconMessage from '@/components/icon/icon-message.vue';
import IconVideo from '@/components/icon/icon-video.vue';
import IconExpend from '@/components/icon/icon-expend.vue';
import IconSmileEmoji from '@/components/icon/icon-smile-emoji.vue';
import IconHandRaise from '@/components/icon/icon-hand-raise.vue';

export default {
    components: { IconSearch, IconAttachment, IconCheck, IconDoubleCheck, IconMenu, IconRotateCamera, IconUnmute, IconMore, IconCall, IconAddPeople, IconMessage, IconVideo, IconExpend, IconSmileEmoji, IconHandRaise },
    data() {
        return {
            activeDropdown: '',
        };
    },
};
</script>

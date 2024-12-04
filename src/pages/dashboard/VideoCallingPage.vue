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
                    <img src="/assets/images/vcall-bg.jpg" alt="image" class="h-full w-full object-cover">
                    <div
                        class="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex items-center flex-col z-[1]">
                        <div class="text-white text-center mb-[30px]">
                            <h1 class="text-xl/6 font-semibold mb-1.5">Annie Easley</h1>
                            <p class="text-base/5">Video call</p>
                        </div>
                        <div class="grid place-content-center size-44 lg:size-[220px] rounded-full bg-white/10">
                            <div class="grid place-content-center size-36 lg:size-[190px] rounded-full bg-white/20">
                                <div class="size-28 lg:size-40 rounded-full ring-[3px] ring-white overflow-hidden ">
                                    <img src="/assets/images/vcall-profile.jpg" alt="profile"
                                        class="w-full h-full object-cover">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="absolute bottom-0 inset-x-0 h-[300px] bg-gradient-to-t from-black to-black/0"></div>
                    <div
                        class="absolute bottom-[30px] left-1/2 -translate-x-1/2 w-full flex justify-center gap-2 xl:gap-5 z-[2] flex-wrap px-5 xl:px-20">
                        <button type="button"
                            class="size-10 grid place-content-center rounded-lg bg-white/10 text-white hover:opacity-85 transition">
                            <icon-rotate-camera class="size-[22px]" />
                        </button>
                        <button type="button"
                            class="size-10 grid place-content-center rounded-lg bg-white/10 text-white hover:opacity-85 transition">
                            <icon-mute class="size-[22px]" />
                        </button>
                        <button type="button"
                            class="size-10 grid place-content-center rounded-lg bg-white/10 text-white hover:opacity-85 transition">
                            <icon-video-off class="size-[22px]" />
                        </button>
                        <button type="button"
                            class="size-10 grid place-content-center rounded-lg bg-white/10 text-white hover:opacity-85 transition">
                            <icon-More class="size-[22px]" />
                        </button>
                        <button type="button"
                            class="size-10 grid place-content-center rounded-lg bg-danger text-white hover:opacity-85 transition">
                            <icon-call class="size-[22px] rotate-[136deg]" />
                        </button>
                        <button type="button"
                            class="size-10 grid place-content-center rounded-lg bg-success text-white hover:opacity-85 transition">
                            <icon-call class="size-[22px] rotate-[2detailsdeg]" />
                        </button>
                        <!-- Video Call Not Receive --- Icons -->
                        <button type="button"
                            class="size-10 grid place-content-center rounded-lg bg-danger text-white hover:opacity-85 transition">
                            <icon-close class="size-[22px]" />
                        </button>
                        <button type="button"
                            class="size-10 grid place-content-center rounded-lg bg-white/10 text-white hover:opacity-85 transition">
                            <icon-message class="size-[22px]" />
                        </button>
                        <button type="button"
                            class="size-10 grid place-content-center rounded-lg bg-success text-white hover:opacity-85 transition">
                            <icon-video class="size-[22px]" />
                        </button>
                    </div>
                    <div
                        class="absolute top-5 right-5 xl:top-auto xl:bottom-[30px] xl:right-[30px] flex gap-2 sm:gap-5 z-[2]">
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
import IconMute from '@/components/icon/icon-mute.vue';
import IconVideoOff from '@/components/icon/icon-video-off.vue';
import IconMore from '@/components/icon/icon-more.vue';
import IconCall from '@/components/icon/icon-call.vue';
import IconAddPeople from '@/components/icon/icon-add-people.vue';
import IconClose from '@/components/icon/icon-close.vue';
import IconMessage from '@/components/icon/icon-message.vue';
import IconVideo from '@/components/icon/icon-video.vue';

export default {
    components: { IconSearch, IconAttachment, IconCheck, IconDoubleCheck, IconMenu, IconRotateCamera, IconMute, IconVideoOff, IconMore, IconCall, IconAddPeople, IconClose, IconMessage, IconVideo },
    data() {
        return {
            activeDropdown: '',
        };
    },
};
</script>

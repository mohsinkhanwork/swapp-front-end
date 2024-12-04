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
                        <h2 class="font-semibold text-black">{{ $t('message') }}</h2>
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
            <div class="grow overflow-hidden rounded-lg bg-white shadow-3xl flex flex-col h-full">
                <!-- Chat with swap -->
                <!-- <div class="m-auto space-y-5">
                    <div>
                        <img src="/assets/images/chat-swap.svg" alt="chat swap" class="size-40 mx-auto">
                    </div>
                    <div class="max-w-[448px] w-full text-center">
                        <h2 class="mb-2 text-lg/6 font-semibold text-black">Chat with swap</h2>
                        <p class="leading-[22px]">This is a space where you can ask questions, seek advice, share
                            thoughts, or simply
                            have a friendly conversation.</p>
                    </div>
                </div> -->

                <div class="sticky top-0 p-3 sm:p-4 bg-gray-200">
                    <div class="flex gap-2.5 justify-between items-center">
                        <div class="flex gap-2.5">
                            <button type="button" class="btn btn-linear p-[7px] text-black size-8 sm:size-9 md:hidden">
                                <icon-menu class="size-5" />
                            </button>
                            <div class="size-10 rounded-lg object-cover shrink-0 relative">
                                <img src="/assets/images/profile.png" alt="profile">
                                <div class="absolute -top-0.5 -right-0.5 size-[9px] rounded-full bg-success border-2">
                                </div>
                            </div>
                            <div>
                                <h3 class="text-black line-clamp-1 font-semibold">Courtney Henry</h3>
                                <p class="mt-1.5 text-gray text-xs line-clamp-1">Online</p>

                            </div>
                        </div>
                        <div class="flex gap-2.5">
                            <button type="button" class="btn btn-linear p-[7px] text-black size-8 sm:size-9">
                                <router-link to="/call" class="nav-item">
                                    <icon-video class="size-5" />
                            </router-link>
                            </button>
                            <button type="button" class="btn btn-linear p-[7px] text-black size-8 sm:size-9">
                                <icon-call class="size-4" />
                            </button>
                            <button type="button" class="btn btn-linear p-[7px] text-black size-8 sm:size-9">
                                <icon-more class="size-5" />
                            </button>
                        </div>
                    </div>

                </div>
                <div class="grow p-5 space-y-2.5 overflow-auto">
                    <div>
                        <div
                            class="max-w-[600px] w-full px-4 py-2.5 rounded-r-lg rounded-bl-lg bg-gray-400 text-[13px]/[22px] text-black relative mb-6">
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt
                                ut labore et dolore magna aliqua.</span>
                            <div
                                class="h-[22px] bg-white rounded-full min-w-[22px] grid place-content-center text-xs font-semibold text-black px-1 absolute left-2.5 -bottom-3.5">
                                ❤️
                            </div>
                        </div>
                        <p class="text-xs font-semibold text-gray-300">01:09 am</p>
                    </div>
                    <div>
                        <div
                            class="max-w-[600px] ml-auto w-full px-4 py-2.5 rounded-l-lg rounded-br-lg bg-primary/30 ring-1 ring-primary text-[13px]/[22px] text-black relative mb-6">
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt
                                ut labore et dolore magna aliqua.</span>
                            <div
                                class="h-[22px] bg-white rounded-full min-w-[22px] grid place-content-center text-xs font-semibold text-black px-1 absolute right-2.5 -bottom-3.5">
                                ❤️
                            </div>
                        </div>
                        <p class="text-xs font-semibold text-right text-gray-300">01:09 am</p>
                    </div>
                    <div>
                        <div
                            class="max-w-[600px] w-full px-4 py-2.5 rounded-r-lg rounded-bl-lg bg-gray-400 text-[13px]/[22px] text-black relative mb-6">
                            <span>LUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                                ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                cillum dolore eu fugiat nulla pariatur.</span>
                            <div
                                class="h-[22px] bg-white rounded-full min-w-[22px] grid place-content-center text-xs font-semibold text-black px-1 absolute left-2.5 -bottom-3.5">
                                🔥
                            </div>
                        </div>
                        <div class="mb-2.5 w-[200px] rounded-lg overflow-hidden">
                            <img src="/assets/images/chat-image.jpg" alt="images">
                        </div>
                        <p class="text-xs font-semibold text-gray-300">01:09 am</p>
                    </div>
                    <div>
                        <div
                            class="max-w-[600px] ml-auto w-full px-4 py-2.5 rounded-l-lg rounded-br-lg bg-primary/30 ring-1 ring-primary text-[13px]/[22px] text-black relative mb-2.5">
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                            anim id est laborum.
                        </div>
                        <p class="text-xs font-semibold text-right text-gray-300">01:09 am</p>
                    </div>
                    <div>
                        <div
                            class="max-w-[600px] w-full px-4 py-2.5 rounded-r-lg rounded-bl-lg bg-gray-400 text-[13px]/[22px] text-black relative mb-2.5">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur.

                        </div>
                        <p class="text-xs font-semibold text-gray-300">01:09 am</p>
                    </div>
                </div>
                <div class="sticky bottom-0 p-3 sm:p-4 bg-gray-200">
                    <div class="relative">
                        <input type="text" class="form-input py-4 pr-[165px]" placeholder="Write your message!">
                        <div class="flex items-center gap-2 sm:gap-4 absolute right-3 top-1/2 -translate-y-1/2">
                            <button type="button">
                                <icon-camera class="size-5 text-gray-300 hover:text-black transition" />
                            </button>
                            <button type="button">
                                <icon-smile-emoji class="size-5 text-gray-300 hover:text-black transition" />
                            </button>
                            <button type="button">
                                <icon-attachment class="size-5 text-gray-300 hover:text-black transition" />
                            </button>
                            <span class="h-3.5 w-0.5 bg-primary rounded-full"></span>
                            <button type="button">
                                <icon-send class="size-5 text-black hover:opacity-90 transition" />
                            </button>
                        </div>
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
import IconVideo from '@/components/icon/icon-video.vue';
import IconCall from '@/components/icon/icon-call.vue';
import IconMore from '@/components/icon/icon-more.vue';
import IconCamera from '@/components/icon/icon-camera.vue';
import IconSmileEmoji from '@/components/icon/icon-smile-emoji.vue';
import IconSend from '@/components/icon/icon-send.vue';
import IconMenu from '@/components/icon/icon-menu.vue';
import axios from 'axios';

export default {
    components: {
        IconSearch, IconAttachment, IconCheck, IconDoubleCheck,
        IconVideo, IconCall, IconMore, IconCamera, IconSmileEmoji, IconSend,
        IconMenu
    },
    data() {
        return {
            activeDropdown: '',
        };
    },
};
</script>

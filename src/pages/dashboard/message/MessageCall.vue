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
            <div class="relative grow overflow-hidden rounded-lg bg-white shadow-3xl flex flex-col h-full p-5">
                <img src="/assets/images/vcall-bg.jpg" class="object-cover h-full rounded-lg" alt="profile">
                <div class=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 space-y-[30px]">
                    <div class="text-center space-y-[6px]">
                        <div class="text-center text-white text-[20px]">Annie Easley</div>
                        <div class="text-center text-[#E2E4E9] text-[16px]">Video call</div>
                    </div>
                    <div class="rounded-full border-[15px] border-[transparent]">
                        <div class="rounded-full border-[15px] border-[transparent]">
                            <img
                                src="/assets/images/vcall-profile.jpg"
                                alt="Profile Image"
                                class="rounded-full w-40 h-40  object-cover border-[3px] border-white"
                                />
                        </div>
                    </div>
                </div>
                <div class="flex justify-between">
                     <button type="button" class="hidden justify-center items-center w-10 h-10 rounded-lg bg-white/10">
                <icon-callmessage class="size-[22px] text-white"  />
            </button>
                    <div class="flex justify-center items-center gap-5 absolute bottom-[30px] left-1/2 -translate-x-1/2">
                    <button type="button" class="flex justify-center items-center w-10 h-10 rounded-lg bg-white/10">
                <icon-callmessage class="size-[22px] text-white"  />
            </button>
            <button type="button" class="flex justify-center items-center w-10 h-10 rounded-lg bg-white/10">
                <icon-call-camera-switch class="size-[22px] text-white" />
            </button>
            <button type="button" class="flex justify-center items-center w-10 h-10 rounded-lg bg-white/10">
             <icon-call-voice class="size-[22px] text-white" />
            </button>
            <button type="button" class="flex justify-center items-center w-10 h-10 rounded-lg bg-white/10">
             <icon-call-camera class="size-[22px] text-white" />
            </button>
            <button type="button" class="flex justify-center items-center w-10 h-10 rounded-lg bg-white/10">
             <icon-more class="size-[22px] text-white" />
            </button>
                </div>
                   <button type="button" class="flex justify-center items-center w-10 h-10 rounded-lg bg-white/10">
                <icon-call-add-member class="size-[22px] text-white"  />
                </button>
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
import IconCallmessage from '@/components/icon/icon-call-message.vue';
import IconCallCameraSwitch from '@/components/icon/icon-call-camera-switch.vue';
import IconCallVoice from '@/components/icon/icon-call-voice.vue';
import IconCallCamera from '@/components/icon/icon-call-camera.vue';
import IconCallAddMember from '@/components/icon/icon-call-add-member.vue';

export default {
    components: {
        IconSearch, IconAttachment, IconCheck, IconDoubleCheck,
        IconVideo, IconCall, IconMore, IconCamera, IconSmileEmoji, IconSend,
        IconMenu,IconCallmessage,IconCallCameraSwitch, IconCallVoice, IconCallCamera,IconCallAddMember
    },
    data() {
        return {
            activeDropdown: '',
        };
    },
};
</script>

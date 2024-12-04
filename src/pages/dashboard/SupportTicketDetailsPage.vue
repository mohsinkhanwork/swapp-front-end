<template>
    <div>
        <div class="space-y-5">
            <div
                class="flex flex-col justify-between gap-3 rounded-lg bg-white px-5 py-[15px] shadow-3xl md:flex-row md:items-center"
            >
                <div class="shrink-0 text-base/5 font-semibold text-black">Support ticket detail</div>
                <button type="button" @click="CreateTicket = true" class="btn">
                    <icon-close-round class="size-4 rotate-45" />
                    <span>{{ $t('create_ticket') }}</span>
                </button>
            </div>
            <div class="space-y-4">
                <div class="divide-y divide-gray-100 rounded-lg bg-white p-5 shadow-3xl">
                    <div class="border-b pb-4">
                        <div class="mb-5 space-y-2.5">
                            <div
                                class="inline-flex items-center gap-2 rounded-lg bg-orange/[0.08] px-2 py-1.5 text-[11px]/[14px] font-bold uppercase text-orange"
                            >
                                <span class="size-1.5 shrink-0 rounded-full bg-orange"></span>
                                <p>Normal</p>
                            </div>
                            <h3 class="font-semibold text-black">How to design your site footer like we did</h3>
                            <p class="leading-[22px]">
                                Duis aute irure dolor in reprehenderit in voluptate
                                <a
                                    href="#"
                                    class="border-b border-black font-bold text-black transition hover:opacity-70"
                                    >velit esse</a
                                >
                                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>

                        <a
                            href="#"
                            class="inline-flex items-center gap-1.5 rounded-lg bg-gray-500 p-2 text-xs text-black transition hover:opacity-80"
                        >
                            <icon-file class="text-danger" />
                            <span>Multi_Test01.ags</span>
                        </a>
                    </div>
                    <div class="space-y-4 py-4">
                        <div class="flex grow items-center gap-2">
                            <div class="h-10 w-10 shrink-0 overflow-hidden rounded-lg bg-gray-100">
                                <img
                                    src="/assets/images/profile.png"
                                    class="h-full w-full object-cover"
                                    alt="Profile"
                                />
                            </div>
                            <div class="space-y-1.5">
                                <div class="flex items-center gap-1.5">
                                    <h6 class="text-black">Marvin McKinney</h6>
                                    <icon-verify class="size-4 shrink-0 text-success" />
                                </div>
                                <div class="text-xs">Author Engagement Team</div>
                            </div>
                        </div>
                        <p class="leading-[22px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <p class="text-gray-300">20 May 2023, 10:05 pm</p>
                    </div>
                    <div class="space-y-4 pl-3 sm:pl-5">
                        <div class="divide-y divide-gray-100 border-b border-gray-100">
                            <div class="py-4">
                                <p class="pb-2.5">
                                    There are many variations of passages of Lorem Ipsum available, but the majority
                                    have suffered alteration in some form, by injected humour, or randomised words which
                                    don't look even slightly believable.
                                </p>
                                <div class="flex items-center gap-2.5 text-xs font-semibold">
                                    <div class="flex items-center gap-2 text-black">
                                        <icon-profile class="size-4 shrink-0" />
                                        <span>Darrell Steward</span>
                                    </div>
                                    <span class="h-3 w-0.5 shrink-0 rounded-full bg-primary"></span>
                                    <p class="text-gray-300">15 May 2020 9:00 pm</p>
                                </div>
                            </div>
                            <div class="py-4">
                                <p class="pb-2.5">
                                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
                                    piece of classical Latin literature from 45 BC, making it over 2000 years old.
                                </p>
                                <div class="flex items-center gap-2.5 text-xs font-semibold">
                                    <div class="flex items-center gap-2 text-black">
                                        <icon-profile class="size-4 shrink-0" />
                                        <span>Zoe Cook</span>
                                    </div>
                                    <span class="h-3 w-0.5 shrink-0 rounded-full bg-primary"></span>
                                    <p class="text-gray-300">27 Oct 2022 2:48 pm</p>
                                </div>
                            </div>
                        </div>
                        <div class="flex gap-2.5">
                            <div class="h-10 w-10 shrink-0 overflow-hidden rounded-lg bg-gray-100">
                                <img
                                    src="/assets/images/profile.png"
                                    class="h-full w-full object-cover"
                                    alt="Profile"
                                />
                            </div>
                            <button class="btn btn-linear group px-3">
                                <icon-back-arrow class="text-black transition group-hover:text-white" />
                                <span>Replies</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <TransitionRoot appear :show="CreateTicket" as="template">
            <Dialog as="div" @close="CreateTicket = false" class="relative z-50">
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
                                class="mx-auto w-full max-w-[777px] rounded-lg bg-white p-5 text-sm/[18px] font-medium text-gray shadow-3xl"
                            >
                                <div class="space-y-5">
                                    <div>
                                        <h3 class="mb-1.5 text-black">{{ $t('title') }}</h3>
                                        <input
                                            type="text"
                                            class="form-input"
                                            placeholder="Ex. software engineer, ect.."
                                        />
                                    </div>
                                    <div class="mb-5">
                                        <h3 class="mb-2.5 text-black">{{ $t('details') }}</h3>
                                        <div class="text-editor rounded-lg shadow-4xl">
                                            <quill-editor
                                                class="!border-none !h-[84px]"
                                                :options="{
                                                    modules: {
                                                        toolbar: [
                                                            [{ size: ['small', false, 'large', 'huge'] }],
                                                            [{ color: [] }, { background: [] }],
                                                            [{ header: [1, 2, 3, 4, 5, 6] }],
                                                            ['bold', 'italic', 'underline', 'strike'],
                                                            [{ align: [] }],
                                                            [{ list: 'ordered' }, { list: 'bullet' }],
                                                            ['image', 'link'],
                                                        ],
                                                    },
                                                    placeholder: '',
                                                }"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 class="mb-1.5 text-black">{{ $t('file') }}</h3>
                                        <div class="rounded-lg border-2 border-dashed border-gray-100 px-5 py-[25px]">
                                            <button
                                                type="button"
                                                class="btn btn-linear relative mx-auto px-2.5 py-2 text-black"
                                            >
                                                <input type="file" class="absolute inset-0 cursor-pointer opacity-0" />
                                                <icon-Close-round class="size-[18px] rotate-45" />
                                                <span>Add file</span>
                                            </button>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 class="mb-1.5 text-black">{{ $t('priority') }}</h3>
                                        <div class="relative mb-2.5">
                                            <select class="form-select">
                                                <option>Normal</option>
                                                <option>1</option>
                                                <option>0</option>
                                                <option>3</option>
                                                <option>4</option>
                                            </select>
                                            <icon-arrow-down
                                                class="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-black"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div class="mt-[30px] flex gap-4">
                                    <button type="button" class="btn">Submit</button>
                                    <button type="button" @click="CreateTicket = false" class="btn btn-linear">
                                        {{ $t('cancel') }}
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
import { ref } from 'vue';
import IconFile from '@/components/icon/icon-file.vue';
import IconVerify from '@/components/icon/icon-verify.vue';
import IconProfile from '@/components/icon/icon-profile.vue';
import IconBackArrow from '@/components/icon/icon-back-arrow.vue';
import IconArrowDown from '@/components/icon/icon-arrow-down.vue';
import IconCloseRound from '@/components/icon/icon-close-round.vue';
import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogOverlay } from '@headlessui/vue';
const CreateTicket = ref(false);
</script>

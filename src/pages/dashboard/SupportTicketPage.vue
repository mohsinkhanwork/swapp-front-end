<template>
    <div>
        <div class="space-y-5">
            <div class="rounded-lg bg-white px-5 py-[23px] shadow-3xl">
                <div class="shrink-0 text-base/5 font-semibold text-black">Support ticket</div>
            </div>
            <div class="space-y-5 rounded-lg bg-white px-5 py-24 shadow-3xl lg:py-36">
                <img src="/assets/images/support-ticket.svg" alt="Support ticket" class="mx-auto size-40" />
                <div class="mx-auto w-full max-w-[354px] text-center">
                    <h2 class="mb-2 text-lg/[22px] font-semibold text-black">
                        {{ $t('no_active_support_tickets_at_the_moment') }}.
                    </h2>
                    <p class="w-full max-w-[350px] leading-[22px]">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                </div>
                <button type="button" @click="CreateTicket = true" class="btn mx-auto">
                    <icon-close-round class="size-4 rotate-45" />
                    <span>{{ $t('create_ticket') }}</span>
                </button>
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
                                                class="!border-none h-[84px]"
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
import IconCloseRound from '@/components/icon/icon-close-round.vue';
import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogOverlay } from '@headlessui/vue';
const CreateTicket = ref(false);
</script>

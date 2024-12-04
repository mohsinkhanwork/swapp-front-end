<template>
    <div class="absolute left-1/2 top-4 w-full max-w-[460px] -translate-x-1/2 px-4">
        <div class="flex items-center gap-2 rounded-lg bg-white p-5 shadow-3xl sm:gap-5">
            <div class="flex shrink-0 items-center gap-1.5 text-black">
                <icon-check-round-green class="shrink-0" />
                <span>Register</span>
            </div>
            <div class="h-px grow bg-gray-100"></div>
            <div class="flex shrink-0 items-center gap-1.5 text-black">
                <icon-check-round-green class="shrink-0" />
                <span>Basic information</span>
            </div>
        </div>
    </div>
    <div class="w-full max-w-[780px] py-16">
        <div class="relative z-10 overflow-hidden rounded-lg shadow-3xl">
            <div class="flex bg-primary p-5">
                <a href="/" class="inline-flex items-center gap-2 text-lg/5 font-bold text-black">
                    <img class="mt-0.5 size-4" src="/assets/images/logo.svg" alt="Logo" />
                    <span>SwapGoal</span>
                </a>
            </div>
            <div class="space-y-7 bg-white p-5">
                <h4 class="text-xl/6 font-semibold text-black">Let’s create your account</h4>
                <div class="flex items-center gap-2.5">
                    <div class="grid size-20 place-content-center overflow-hidden rounded-lg bg-white">
                        <img alt="Profile" src="/assets/images/profile.png" class="h-full w-full object-cover" />
                    </div>
                    <button type="button" class="btn btn-linear relative px-2.5 py-1.5 text-black">
                        <input type="file" class="absolute inset-0 cursor-pointer opacity-0" />
                        <icon-upload />
                        <span>Upload</span>
                    </button>
                </div>
                <div class="grid gap-x-4 gap-y-4 sm:grid-cols-2 sm:gap-y-5">
                    <div>
                        <label class="mb-2.5 inline-block text-black"
                            >Professions<span class="text-primary">*</span></label
                        >
                        <div class="relative">
                            <select class="form-select">
                                <option>Professions</option>
                                <option>Software engineer</option>
                                <option>Advocate</option>
                                <option>CA</option>
                                <option>Business Analytics</option>
                            </select>
                            <icon-arrow-down
                                class="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-black"
                            />
                        </div>
                    </div>
                    <div>
                        <label class="mb-2.5 inline-block text-black">Skills<span class="text-primary">*</span></label>
                        <div class="relative">
                            <select class="form-select">
                                <option>Skills</option>
                                <option>Developing</option>
                                <option>Designing</option>
                                <option>Graphics</option>
                                <option>Application</option>
                            </select>
                            <icon-arrow-down
                                class="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-black"
                            />
                        </div>
                        <div class="flex gap-2 flex-wrap mt-2.5">
                            <button type="button" class="py-1 px-1.5 rounded-lg bg-gray-500 flex items-center gap-1.5 shrink-0 ring-1 ring-gray-100 hover:opacity-80 transition">
                                <span class="leading-4">design</span>
                                <icon-close class="size-4 text-danger"/>
                            </button>
                            <button type="button" class="py-1 px-1.5 rounded-lg bg-gray-500 flex items-center gap-1.5 shrink-0 ring-1 ring-gray-100 hover:opacity-80 transition">
                                <span class="leading-4">developing</span>
                                <icon-close class="size-4 text-danger"/>
                            </button>
                        </div>
                    </div>
                    <div class="sm:col-span-2">
                        <label class="mb-2.5 inline-block text-black">Bio<span class="text-primary">*</span></label>
                        <textarea placeholder="Bio" rows="5" class="form-textarea resize-none"></textarea>
                    </div>
                </div>
                <div class="flex flex-wrap items-center gap-4">
                    <button type="button" class="btn btn-linear">Previous</button>
                    <button type="button" class="btn">Register</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import IconArrowDown from '@/components/icon/icon-arrow-down.vue';
import IconUpload from '@/components/icon/icon-upload.vue';
import IconClose from '@/components/icon/icon-close.vue';
import IconCheckRoundGreen from '@/components/icon/icon-check-round-green.vue';

export default {
    components: {
        IconCheckRoundGreen,
        IconUpload,
        IconArrowDown,
        IconClose
    },
};
</script>

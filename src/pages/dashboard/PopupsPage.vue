<template>
    <div class="space-y-4">
        <!-- Add Forums Page -->
        <div class="mx-auto w-full max-w-[777px] rounded-lg bg-white p-5 shadow-3xl">
            <h2 class="mb-[30px] text-xl/[25px] font-semibold text-black">Add forum details</h2>
            <div class="space-y-5">
                <div>
                    <h3 class="mb-1.5 text-black">{{ $t('title') }}</h3>
                    <p class="mb-2.5 text-xs">{{ $t('be_specific') }}</p>
                    <input type="text" class="form-input" placeholder="Ex. software engineer, ect.." />
                </div>
                <div class="flex gap-5">
                    <label class="flex items-center gap-2 rounded-lg px-3 py-[9px] shadow-4xl">
                        <input type="checkbox" class="peer form-checkbox size-3" />
                        <span class="peer-checked:text-black">Public</span>
                    </label>
                    <label class="flex items-center gap-2 rounded-lg px-3 py-[9px] shadow-4xl">
                        <input type="checkbox" class="peer form-checkbox size-3" />
                        <span class="peer-checked:text-black">Members</span>
                    </label>
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
                    <h3 class="mb-1.5 text-black">{{ $t('title') }}</h3>
                    <p class="mb-2.5 text-xs">{{ $t('be_specific') }}</p>
                    <div class="relative">
                        <select class="form-select">
                            <option>tags</option>
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
            </div>
            <div class="mt-[30px] flex gap-4">
                <button type="button" class="btn">Submit</button>
                <button type="button" class="btn btn-linear">{{ $t('cancel') }}</button>
            </div>
        </div>
        <!-- Forums Replay Page -->
        <div class="mx-auto w-full max-w-[777px] rounded-lg bg-white p-5 shadow-3xl">
            <h2 class="mb-[30px] text-xl/[25px] font-semibold text-black">{{ $t('reply') }}</h2>
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
            <div class="mt-[30px] flex gap-4">
                <button type="button" class="btn">{{ $t('submit') }}</button>
                <button type="button" class="btn btn-linear">{{ $t('cancel') }}</button>
            </div>
        </div>
        <!-- Premium plan -->
        <div class="relative mx-auto w-full max-w-[406px] overflow-hidden rounded-lg bg-white">
            <button
                type="button"
                class="absolute right-5 top-4 z-[1] grid size-8 place-content-center rounded-lg bg-white/[0.08] text-white hover:opacity-80"
            >
                <Icon-close class="size-5" />
            </button>
            <div class="relative bg-[url(/public/assets/images/premium-plan-bg.png)] bg-bottom bg-no-repeat py-[35px]">
                <img src="/assets/images/premium-plan.png" alt="Premium plan" class="relative z-10 m-auto w-[218px]" />
                <span
                    class="absolute left-1/2 top-1/2 size-[200px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/30 blur-[50px]"
                ></span>
            </div>
            <div class="relative p-5">
                <div class="mb-2.5 flex justify-between gap-3">
                    <h2 class="mb-2.5 text-[30px]/[38px] font-extrabold text-black">
                        $19.99 <span class="text-sm font-medium text-danger">{{ $t('save') }} 30%</span>
                    </h2>
                    <label class="inline-flex cursor-pointer items-center gap-2.5">
                        <input type="checkbox" value="" class="peer sr-only" checked />
                        <div
                            class="peer relative h-5 w-9 rounded-full bg-white shadow-3xl ring-1 ring-gray-100 after:absolute after:start-[1.5px] after:top-1/2 after:h-4 after:w-4 after:-translate-y-1/2 after:rounded-full after:bg-gray-100 after:transition-all after:content-[''] peer-checked:bg-success peer-checked:ring-transparent peer-checked:after:translate-x-full peer-checked:after:bg-white"
                        ></div>
                        <span class="text-black">Monthly</span>
                    </label>
                </div>
                <p class="mb-[30px] leading-[22px]">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
                <h3 class="mb-4">Plan includes:</h3>
                <div class="mb-[30px] w-full max-w-[330px] space-y-2.5">
                    <div class="flex gap-1.5 rounded-lg bg-gray-200 p-1.5">
                        <icon-check class="mt-0.5 size-4 shrink-0 text-success" />
                        <span>{{ $t('start_a_blog_to_reach_your_creative_peak') }}</span>
                    </div>
                    <div class="flex gap-1.5 rounded-lg bg-gray-200 p-1.5">
                        <icon-check class="mt-0.5 size-4 shrink-0 text-success" />
                        <span>{{ $t('starting_your_traveling_blog_with_vasco') }}</span>
                    </div>
                    <div class="flex gap-1.5 rounded-lg bg-gray-200 p-1.5">
                        <icon-check class="mt-0.5 size-4 shrink-0 text-success" />
                        <span>{{ $t('donec_faucibus_nisi_sed_ultricies_ultricies') }}</span>
                    </div>
                    <div class="flex gap-1.5 rounded-lg bg-gray-200 p-1.5">
                        <icon-check class="mt-0.5 size-4 shrink-0 text-success" />
                        <span>{{ $t('nulla_convallis_nulla_sit_amet_mattis_faucibus') }}</span>
                    </div>
                </div>
                <button type="button" class="btn w-full">
                    <icon-diamond />
                    Purchase plan
                </button>
            </div>
        </div>
    </div>
</template>
<script>
import IconArrowDown from '@/components/icon/icon-arrow-down.vue';
import IconCheck from '@/components/icon/icon-check.vue';
import IconClose from '@/components/icon/icon-close.vue';
import IconDiamond from '@/components/icon/icon-diamond.vue';

export default {
    components: {
        IconArrowDown,
        IconClose,
        IconCheck,
        IconDiamond,
    },
};
</script>

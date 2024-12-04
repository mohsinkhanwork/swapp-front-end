<template>
    <div class="space-y-5">
        <div class="shadow-3xl rounded-lg bg-white px-5 py-[23px]">
            <div class="shrink-0 text-base/5 font-semibold text-black">Create support ticket</div>
        </div>
        <div class="w-full max-w-[777px] mx-auto p-5 bg-white shadow-3xl rounded-lg">
            <div class="space-y-5">
                <div>
                    <h3 class="mb-1.5 text-black">{{ $t('title') }}</h3>
                    <input type="text" class="form-input" placeholder="Ex. software engineer, ect..">
                </div>
                <div class="mb-5">
                    <h3 class="mb-2.5 text-black">{{ $t('details') }}</h3>
                    <div class="text-editor rounded-lg  shadow-4xl
                ">
                        <quill-editor class="!border-none !h-[84px]" :options="{
                            modules: {
                                toolbar: [[{ size: ['small', false, 'large', 'huge'] }], [{ color: [] }, { background: [] }], [{ header: [1, 2, 3, 4, 5, 6] }], ['bold', 'italic', 'underline', 'strike'], [{ align: [] }], [{ list: 'ordered' }, { list: 'bullet' }], ['image', 'link']],
                            },
                            placeholder: '',
                        }" />
                    </div>
                </div>
                <div>
                    <h3 class="mb-1.5 text-black">{{ $t('file') }}</h3>
                    <div class="border-2 border-gray-100 border-dashed rounded-lg py-[25px] px-5">
                        <button type="button" class="btn btn-linear relative px-2.5 py-2 text-black mx-auto">
                            <input type="file" class="absolute inset-0 cursor-pointer opacity-0" />
                            <icon-Close-round  class="rotate-45 size-[18px]"/>
                            <span>Add file</span>
                        </button>
                    </div>
                </div>

                <div>
                    <h3 class="mb-1.5 text-black">{{ $t('priority') }}</h3>
                    <div class="mb-2.5 relative">
                        <select class="form-select">
                            <option>Normal</option>
                            <option>1</option>
                            <option>0</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                        <icon-arrow-down
                            class="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-black" />
                    </div>
                </div>
            </div>
            <div class="flex gap-4 mt-[30px]">
                <button type="button" class="btn">Submit</button>
                <button type="button" class="btn btn-linear">{{ $t('cancel') }}</button>
            </div>
        </div>
    </div>
</template>
<script>

import IconArrowDown from '@/components/icon/icon-arrow-down.vue';
import IconCloseRound from '@/components/icon/icon-close-round.vue';

export default {
    components: {
        IconArrowDown,
        IconCloseRound
    },
};
</script>

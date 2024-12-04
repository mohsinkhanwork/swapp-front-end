<template>
    <div class="space-y-5">
        <div class="mb-4 text-right lg:hidden">
            <button type="button">
                <icon-menu class="size-7" />
            </button>
        </div>
        <div class="shadow-3xl rounded-lg bg-white px-5 py-[23px]">
            <div class="shrink-0 text-base/5 font-semibold text-black">Forums list</div>
        </div>
        <div class="flex items-start gap-4">
            <div class="sticky top-[88px] hidden w-64 shrink-0 rounded-lg bg-white p-5 shadow-3xl lg:block">
                <div>
                    <button type="button"
                        class="flex w-full items-center justify-between gap-1 text-left text-xs font-semibold uppercase"
                        :class="{ active: activeDropdown === 'categories' }" @click="
                            activeDropdown === 'categories' ? (activeDropdown = null) : (activeDropdown = 'categories')
                            ">
                        <span>Categories</span>
                        <icon-arrow-down-fill class="size-4 shrink-0 text-black duration-300"
                            :class="{ '-rotate-90': activeDropdown !== 'categories' }" />
                    </button>
                    <vue-collapsible :isOpen="activeDropdown === 'categories'" class="duration-300">
                        <div class="mt-2.5 space-y-1 text-black">
                            <button type="button"
                                class="flex w-full items-center gap-2 rounded-lg border border-primary/30 bg-primary/5 px-3 py-2 text-left font-semibold transition">
                                <span class="size-1 shrink-0 rounded-full bg-primary"></span>
                                <span class="truncate">SkillSwap Announcements</span>
                            </button>
                            <button type="button"
                                class="flex w-full items-center gap-2 rounded-lg border border-transparent px-3 py-2 text-left transition hover:border-primary/30 hover:bg-primary/5 hover:font-semibold">
                                <span class="size-1 shrink-0 rounded-full bg-primary"></span>
                                <span class="truncate">SkillSwap Authors</span>
                            </button>
                            <button type="button"
                                class="flex w-full items-center gap-2 rounded-lg border border-transparent px-3 py-2 text-left transition hover:border-primary/30 hover:bg-primary/5 hover:font-semibold">
                                <span class="size-1 shrink-0 rounded-full bg-primary"></span>
                                <span class="truncate">SkillSwap Customers</span>
                            </button>
                            <button type="button"
                                class="flex w-full items-center gap-2 rounded-lg border border-transparent px-3 py-2 text-left transition hover:border-primary/30 hover:bg-primary/5 hover:font-semibold">
                                <span class="size-1 shrink-0 rounded-full bg-primary"></span>
                                <span class="truncate">All Categories</span>
                            </button>
                        </div>
                    </vue-collapsible>
                </div>
                <div class="my-4 h-px bg-gray-200"></div>
                <div>
                    <button type="button"
                        class="flex w-full items-center justify-between gap-1 text-left text-xs font-semibold uppercase"
                        :class="{ active: activeDropdown === 'tags' }"
                        @click="activeDropdown === 'tags' ? (activeDropdown = null) : (activeDropdown = 'tags')">
                        <span>Tags</span>
                        <icon-arrow-down-fill class="size-4 shrink-0 text-black duration-300"
                            :class="{ '-rotate-90': activeDropdown !== 'tags' }" />
                    </button>
                    <vue-collapsible :isOpen="activeDropdown === 'tags'" class="duration-300">
                        <div class="mt-2.5 space-y-1 text-black">
                            <button type="button"
                                class="flex w-full items-center gap-2 rounded-lg border border-transparent px-3 py-2 text-left transition hover:border-primary/30 hover:bg-primary/5 hover:font-semibold">
                                <span class="size-1 shrink-0 rounded-full bg-primary"></span>
                                <span class="truncate">Time management</span>
                            </button>
                            <button type="button"
                                class="flex w-full items-center gap-2 rounded-lg border border-transparent px-3 py-2 text-left transition hover:border-primary/30 hover:bg-primary/5 hover:font-semibold">
                                <span class="size-1 shrink-0 rounded-full bg-primary"></span>
                                <span class="truncate">Decision making</span>
                            </button>
                            <button type="button"
                                class="flex w-full items-center gap-2 rounded-lg border border-transparent px-3 py-2 text-left transition hover:border-primary/30 hover:bg-primary/5 hover:font-semibold">
                                <span class="size-1 shrink-0 rounded-full bg-primary"></span>
                                <span class="truncate">Communication skills</span>
                            </button>
                            <button type="button"
                                class="flex w-full items-center gap-2 rounded-lg border border-transparent px-3 py-2 text-left transition hover:border-primary/30 hover:bg-primary/5 hover:font-semibold">
                                <span class="size-1 shrink-0 rounded-full bg-primary"></span>
                                <span class="truncate">Problem solving</span>
                            </button>
                        </div>
                    </vue-collapsible>
                </div>
                <div class="relative mt-4">
                    <span
                        class="absolute -top-px right-4 rounded-b-lg bg-danger px-1.5 py-1 text-[10px]/none font-bold uppercase text-white">Ads</span>
                    <img src="/assets/images/ad-one.png" alt="ads" class="h-full w-full object-cover" />
                </div>
            </div>
            <div class="w-full max-w-[777px] p-5 bg-white shadow-3xl rounded-lg">
                <h2 class="mb-[30px] text-xl/[25px] font-semibold text-black">Edit forum</h2>
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
                        <h3 class="mb-1.5 text-black">{{ $t('title') }}</h3>
                        <div class="mb-2.5 relative">
                            <select class="form-select">
                                <option>tags</option>
                                <option>Software engineer</option>
                                <option>Advocate</option>
                                <option>CA</option>
                                <option>Business Analytics</option>
                            </select>
                            <icon-arrow-down
                                class="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-black" />
                        </div>
                        <div class="flex gap-2 flex-wrap">
                            <button type="button" class="py-1 px-1.5 rounded-lg bg-gray-500 flex items-center gap-1.5 shrink-0 ring-1 ring-gray-100 hover:opacity-80 transition">
                                <span class="leading-[15px]">designing</span>
                                <icon-close class="size-3.5 text-danger"/>
                            </button>
                            <button type="button" class="py-1 px-1.5 rounded-lg bg-gray-500 flex items-center gap-1.5 shrink-0 ring-1 ring-gray-100 hover:opacity-80 transition">
                                <span class="leading-[15px]">music</span>
                                <icon-close class="size-3.5 text-danger"/>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="flex gap-4 mt-[30px]">
                    <button type="button" class="btn">Update changes</button>
                    <button type="button" class="btn btn-linear">{{ $t('cancel') }}</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import VueCollapsible from 'vue-height-collapsible/vue3';
import IconArrowDownFill from '@/components/icon/icon-arrow-down-fill.vue';
import IconMenu from '@/components/icon/icon-menu.vue';
import IconClose from '@/components/icon/icon-close.vue';
import IconArrowDown from '@/components/icon/icon-arrow-down.vue';

export default {
    components: { IconArrowDownFill, IconMenu, VueCollapsible,IconArrowDown, IconClose },
    data() {
        return {
            activeDropdown: '',
        };
    },
};
</script>

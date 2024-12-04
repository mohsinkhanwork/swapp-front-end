<template>
    <div class="!mt-2.5 flex flex-wrap justify-end gap-3 sm:gap-5">
        <button type="button" class="rounded-lg bg-white px-3 py-2.5 text-xs shadow-4xl transition hover:bg-gray-200">
            {{ $t('showing') }} <span class="text-black">1</span> - <span class="text-black">{{ perPage }} </span> of
            <span class="text-black">
                {{ dataLength }}
            </span>
            {{ $t('entries') }}
        </button>

        <div v-if="isShowLimit">
            <select className="form-select">
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
                <option value="100">100</option>
                <option value="200">200</option>
            </select>
        </div>
        <div v-if="dataLength" class="flex overflow-hidden rounded-lg bg-white shadow-4xl">
            <button
                type="button"
                class="grid size-9 shrink-0 place-content-center text-[#28282B] transition hover:bg-gray-200"
                @click="changePage(currentPage - 1)"
                :disabled="currentPage === 1"
            >
                <icon-arrow-down class="size-[18px] rotate-90" />
            </button>
            <div class="flex border-x border-gray-100 text-xs font-semibold text-gray">
                <template v-if="totalPages <= 5">
                    <button
                        v-for="page in totalPages"
                        :key="{ page }"
                        type="button"
                        class="grid size-9 shrink-0 place-content-center border-x border-transparent transition first:border-l-0 last:border-r-0 hover:border-gray-100 hover:bg-gray-200"
                        :class="{ '!border-gray-100 bg-gray-200': currentPage === page }"
                        @click="changePage(page)"
                    >
                        {{ page }}
                    </button>
                </template>
                <template v-else>
                    <button
                        v-if="getPages !== 0"
                        type="button"
                        class="pointer-events-none px-3 py-2 text-sm/4 opacity-50 transition"
                    >
                        ...
                    </button>

                    <button
                        v-for="i in 5"
                        :key="{ i }"
                        type="button"
                        class="grid size-9 shrink-0 place-content-center border-x border-transparent transition first:border-l-0 last:border-r-0 hover:border-gray-100 hover:bg-gray-200"
                        @click="changePage(getPages + i)"
                        :class="{ '!border-gray-100 bg-gray-200': currentPage === getPages + i }"
                    >
                        {{ getPages + i }}
                    </button>

                    <button
                        v-if="getPages + 5 !== totalPages"
                        type="button"
                        class="pointer-events-none px-3 py-2 text-sm/4 opacity-50 transition"
                    >
                        ...
                    </button>
                </template>
            </div>
            <button
                type="button"
                class="grid size-9 shrink-0 place-content-center text-[#28282B] transition hover:bg-gray-200"
                @click="changePage(currentPage + 1)"
                :disabled="currentPage === totalPages"
            >
                <icon-arrow-down class="size-[18px] -rotate-90" />
            </button>
        </div>
    </div>
</template>
<script setup>
import { defineProps, defineEmits } from 'vue';
import IconArrowDown from '@/components/icon/icon-arrow-down.vue';
import { computed } from 'vue';

const props = defineProps({
    totalPages: {
        type: Number,
    },
    currentPage: {
        type: Number,
        default: 1,
    },
    dataLength: {
        type: Number,
        default: 100,
    },
    perPage: {
        type: Number,
        default: 10,
    },
    isShowLimit: {
        type: Boolean,
        default: false,
    },
    changePage: {
        type: Function,
    },
});

const emit = defineEmits(['changePage']);

const getPages = computed(() => {
    let startPage = 0;
    if (props.currentPage <= 3) {
        startPage = 0;
    } else if (props.currentPage >= props.totalPages - 2) {
        startPage = props.totalPages - 5;
    } else {
        startPage = props.currentPage - 2;
    }
    return startPage;
});

const changePage = (page) => {
    emit('changePage', page);
};
</script>

<template>
    <div class="space-y-5 rounded-lg bg-white p-5 shadow-3xl">
        <div class="flex flex-wrap items-center justify-between gap-6">
            <div class="flex flex-wrap items-center gap-5">
                <div class="flex items-center gap-2.5">
                    <div class="size-10 overflow-hidden rounded-lg">
                        <img :src="user.avatar" class="h-full w-full object-cover" alt="Profile" />
                    </div>
                    <div class="space-y-1.5">
                        <h3 class="text-base/5 font-semibold text-black">{{ user.name }}</h3>
                        <div>{{ user.profession }}</div>
                    </div>
                </div>
            </div>
            <div class="flex flex-wrap items-center gap-4">
                <router-link :to="`/${user.username}`" class="btn py-[5px]">{{ $t('view_profile') }}</router-link>
                <!-- <CommonRequestDropdown /> -->
                <CommonRequestDropdown :userId="user.id" />
            </div>
        </div>
        <div class="space-y-2.5">
            <div class="flex flex-wrap items-center gap-2.5 text-[11px]/[14px] font-bold uppercase text-black">
                <div v-for="skill in user.skills" :key="skill.id" class="relative rounded-lg bg-gray-200 pr-7">
                    <div class="rounded-lg bg-[#DCFCE7] px-2 py-1.5">{{ skill.name }}</div>
                    <icon-check-round-green
                        v-if="skill.status == 1"
                        class="absolute right-1.5 top-1/2 -translate-y-1/2"
                    />
                    <icon-check-round-gray v-else class="absolute right-1.5 top-1/2 -translate-y-1/2" />
                </div>
            </div>
            <h6 class="font-semibold text-black">{{ $t('about') }}</h6>
            <p>
                {{ user.bio }}
            </p>
        </div>
        <a
            href="#"
            class="inline-flex items-center gap-2 rounded-lg px-2 py-1.5 text-black shadow-3xl ring-1 ring-inset ring-gray-100"
        >
            <icon-star-border-bg class="size-4 text-yellow" />
            <span>{{ user.avg_rating }}</span>
            <span class="h-3 w-0.5 bg-gray-100"></span>
            <span>{{ user.rating_count }} {{ $t('reviews') }}</span>
        </a>
    </div>
</template>
<script>
import IconCheckRoundGray from '@/components/icon/icon-check-round-gray.vue';
import IconCheckRoundGreen from '@/components/icon/icon-check-round-green.vue';
import IconStarBorderBg from '@/components/icon/icon-star-border-bg.vue';
import CommonRequestDropdown from '@/components/common/common-request-dropdown.vue';
export default {
    components: {
        IconCheckRoundGray,
        IconCheckRoundGreen,
        IconStarBorderBg,
        CommonRequestDropdown,
    },
    props: {
        user: {
            required: true,
            type: Object,
        },
    },
};
</script>

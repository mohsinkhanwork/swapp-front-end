<template>
    <div class="space-y-5">
        <div class="flex flex-col gap-4 rounded-lg bg-white px-5 py-4 shadow-3xl md:flex-row md:items-center">
            <div class="shrink-0 text-base/5 font-semibold text-black">{{ $t('profile_list') }}</div>
            <div class="flex flex-wrap items-center gap-4 md:ml-auto">
                <vue-popper placement="bottom-start" offsetDistance="0" class="relative !m-0 !border-0 *:w-full">
                    <button
                        type="button"
                        class="flex w-48 items-center gap-2 rounded-lg bg-white px-3 py-2 text-left shadow-3xl ring-1 ring-inset ring-gray-100"
                    >
                        <span class="truncate">Software developer</span>
                        <icon-arrow-down class="ml-auto size-4 shrink-0 text-black" />
                    </button>
                    <template #content>
                        <div
                            class="my-2.5 space-y-1.5 rounded-lg bg-white p-1.5 shadow-[0_0_0_1px_rgba(18,43,105,0.08),0_1px_2px_0_rgba(18,43,105,0.08)]"
                        >
                            <div class="rounded-lg px-2.5 py-2 transition hover:bg-gray-200 hover:text-black">
                                Software Engineer
                            </div>
                            <div class="rounded-lg px-2.5 py-2 transition hover:bg-gray-200 hover:text-black">
                                Tester
                            </div>
                            <div class="rounded-lg px-2.5 py-2 transition hover:bg-gray-200 hover:text-black">
                                Project Manager
                            </div>
                        </div>
                    </template>
                </vue-popper>
                <button
                    type="button"
                    class="flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-left shadow-3xl ring-1 ring-inset ring-gray-100"
                >
                    <icon-filter class="size-4 shrink-0 text-black" />
                    <span>{{ $t('filter') }}</span>
                </button>
                <div class="relative">
                    <icon-search class="absolute left-3 top-1/2 -translate-y-1/2 text-black" />
                    <input type="text" :placeholder="$t('search')" class="form-input py-[7px] pl-9" />
                </div>
            </div>
        </div>
        <div class="space-y-4">
            <div
                v-for="receivedswap in receivedSwaps"
                :key="receivedswap.id"
                class="space-y-5 rounded-lg bg-white p-5 shadow-3xl"
            >
                <div class="flex flex-wrap items-center justify-between gap-6">
                    <div class="flex flex-wrap items-center gap-5">
                        <div class="flex items-center gap-2.5">
                            <div class="size-10 overflow-hidden rounded-lg">
                                <img
                                    src="/assets/images/profile.png"
                                    class="h-full w-full object-cover"
                                    alt="Profile"
                                />
                            </div>
                            <div class="space-y-1.5">
                                <h3 class="text-base/5 font-semibold text-black">
                                    {{ receivedswap.user.first_name }} {{ receivedswap.user.last_name }}
                                </h3>
                                <div>Software Engineer</div>
                            </div>
                        </div>
                        <div
                            class="flex flex-wrap items-center gap-2.5 text-[11px]/[14px] font-bold uppercase text-black"
                        >
                            <div class="relative rounded-lg bg-gray-200 pr-7">
                                <div class="rounded-lg bg-[#FEE2E2] px-2 py-1.5">{{ receivedswap.skill.title_en }}</div>
                                <icon-check-round-green class="absolute right-1.5 top-1/2 -translate-y-1/2" />
                            </div>
                            <CommonRequestDropdown :userId="receivedswap.user.id" />
                        </div>
                    </div>
                    <div v-if="receivedswap.status == 'pending'" class="flex flex-wrap items-center gap-4">
                        <div
                            @click="
                                showModal(
                                    receivedswap.skill,
                                    receivedswap.swap_id,
                                    receivedswap.skill_id,
                                    (status = 'accepted'),
                                )
                            "
                            class="flex items-center gap-2 rounded-lg bg-[#E0F2FE] px-3 py-[7px] text-left text-xs text-black shadow-3xl ring-1 ring-inset ring-gray-100"
                        >
                            <icon-check class="size-4 text-black" />
                            <p>Accept</p>
                        </div>
                        <div
                            @click="
                                showModal(
                                    receivedswap.skill,
                                    receivedswap.swap_id,
                                    receivedswap.skill_id,
                                    (status = 'rejected'),
                                )
                            "
                            class="flex items-center gap-2 rounded-lg bg-[#FEE2E2] px-3 py-[7px] text-left text-xs text-black ring-inset ring-gray-100"
                        >
                            <icon-close class="size-4 text-black" />
                            <p>Reject</p>
                        </div>
                        <!-- <a
                            href="/swaps-details"
                            class="btn py-[5px] shadow-[0_2px_1px_0_rgba(0,0,0,0.08),0_3px_4px_0_rgba(0,0,0,0.08)]"
                            >{{ $t('view_profile') }}</a
                        > -->
                        <router-link
                            :to="`/users/${receivedswap.user.username}/${receivedswap.user.id}`"
                            class="btn py-[5px]"
                            >{{ $t('view_profile') }}</router-link
                        >
                    </div>
                    <div v-else-if="receivedswap.status == 'accepted'" class="flex flex-wrap items-center gap-4">
                        <div
                            class="flex items-center gap-2 rounded-lg bg-success px-3 py-[7px] text-left text-xs text-white shadow-3xl ring-1 ring-inset ring-gray-100"
                        >
                            <span class="size-[7px] shrink-0 rounded-full bg-white"></span>
                            <p>Active</p>
                        </div>
                         <router-link
                            :to="`/users/${receivedswap.user.username}/${receivedswap.user.id}`"
                            class="btn py-[5px]"
                            >{{ $t('view_profile') }}</router-link
                        >
                    </div>
                    <div v-else-if="receivedswap.status == 'completed'" class="flex flex-wrap items-center gap-4">
                        <div
                            class="flex items-center gap-2 rounded-lg bg-white px-3 py-[7px] text-left text-xs shadow-3xl ring-1 ring-inset ring-gray-100"
                        >
                            <icon-check-round-border class="size-4 text-success" />
                            Completed
                        </div>
                         <router-link
                            :to="`/users/${receivedswap.user.username}/${receivedswap.user.id}`"
                            class="btn py-[5px]"
                            >{{ $t('view_profile') }}</router-link
                        >
                    </div>
                    <div v-else-if="receivedswap.status == 'rejected'" class="flex flex-wrap items-center gap-4">
                        <div
                            class="flex items-center gap-2 rounded-lg bg-white px-3 py-[7px] text-left text-xs shadow-3xl ring-1 ring-inset ring-gray-100"
                        >
                            <icon-close-round class="size-4 text-danger" />
                            Rejected
                        </div>
                         <router-link
                            :to="`/users/${receivedswap.user.username}/${receivedswap.user.id}`"
                            class="btn py-[5px]"
                            >{{ $t('view_profile') }}</router-link
                        >
                    </div>
                    <div v-else-if="receivedswap.status == 'progress'" class="flex flex-wrap items-center gap-4">
                        <div
                            class="flex items-center gap-2 rounded-lg bg-white px-3 py-[7px] text-left text-xs shadow-3xl ring-1 ring-inset ring-gray-100"
                        >
                            <icon-clock class="size-4 text-orange" />
                            Progress
                        </div>
                         <router-link
                            :to="`/users/${receivedswap.user.username}/${receivedswap.user.id}`"
                            class="btn py-[5px]"
                            >{{ $t('view_profile') }}</router-link
                        >

                        <ChatRoomModal :swapId="receivedswap.id" :userId="receivedswap.user.id"></ChatRoomModal>
                        <!-- <div>{{ receivedswap.id }}</div> -->
                    </div>
                    <div class="space-y-2.5 w-full">
                        <h6 class="font-semibold text-black">{{ $t('about') }}</h6>
                        <p>
                            {{ receivedswap.user.bio }}
                        </p>
                    </div>
                    <a
                    href="#"
                    class="inline-flex items-center gap-2 rounded-lg px-2 py-1.5 text-black shadow-3xl ring-1 ring-inset ring-gray-100"
                >
                    <icon-star-border-bg class="size-4 text-yellow" />
                    <span>4.5</span>
                    <span class="h-3 w-0.5 bg-gray-100"></span>
                    <span>1K {{ $t('reviews') }}</span>
                </a>
                </div>
            </div>
            <div v-for="sentswap in sentSwaps" :key="sentswap.id" class="space-y-5 rounded-lg bg-white p-5 shadow-3xl">
                <div class="flex flex-wrap items-center justify-between gap-6">
                    <div class="flex flex-wrap items-center gap-5">
                        <div class="flex items-center gap-2.5">
                            <div class="size-10 overflow-hidden rounded-lg">
                                <img
                                    src="/assets/images/profile.png"
                                    class="h-full w-full object-cover"
                                    alt="Profile"
                                />
                            </div>
                            <div class="space-y-1.5">
                                <h3 class="text-base/5 font-semibold text-black">
                                    {{ sentswap.user.first_name }} {{ sentswap.user.last_name }}
                                </h3>
                                <div>Software Engineer</div>
                            </div>
                        </div>
                        <div
                            class="flex flex-wrap items-center gap-2.5 text-[11px]/[14px] font-bold uppercase text-black"
                        >
                            <div class="relative rounded-lg bg-gray-200 pr-7">
                                <div class="rounded-lg bg-[#FEE2E2] px-2 py-1.5">{{ sentswap.skill.title_en }}</div>
                                <icon-check-round-green class="absolute right-1.5 top-1/2 -translate-y-1/2" />
                            </div>
                            <CommonRequestDropdown :userId="sentswap.user.id" />
                        </div>
                    </div>
                    <div v-if="sentswap.status == 'pending'" class="flex flex-wrap items-center gap-4">
                        <div
                            class="flex items-center gap-2 rounded-lg bg-white px-3 py-[7px] text-left text-xs shadow-3xl ring-1 ring-inset ring-gray-100"
                        >
                            <icon-clock class="size-4 text-orange" />
                            Pending
                        </div>
                        <router-link :to="`/users/${sentswap.user.username}/${sentswap.user.id}`" class="btn py-[5px]"
                            >{{ $t('view_profile') }}</router-link
                        >
                        <!-- <a
                            href="/swaps-details"
                            class="btn py-[5px] shadow-[0_2px_1px_0_rgba(0,0,0,0.08),0_3px_4px_0_rgba(0,0,0,0.08)]"
                            >{{ $t('view_profile') }}</a
                        > -->

                        <ChatRoomModal :swapId="sentswap.swap_id" :userId="sentswap.user.id"></ChatRoomModal>
                        <!-- <div>{{ sentswap.swap_id }}</div> -->
                    </div>
                    <div v-else-if="sentswap.status == 'accepted'" class="flex flex-wrap items-center gap-4">
                        <div
                            class="flex items-center gap-2 rounded-lg bg-success px-3 py-[7px] text-left text-xs text-white shadow-3xl ring-1 ring-inset ring-gray-100"
                        >
                            <span class="size-[7px] shrink-0 rounded-full bg-white"></span>
                            <p>Active</p>
                        </div>
                        <router-link :to="`/users/${sentswap.user.username}/${sentswap.user.id}`" class="btn py-[5px]"
                            >{{ $t('view_profile') }}</router-link
                        >
                    </div>
                    <div v-else-if="sentswap.status == 'completed'" class="flex flex-wrap items-center gap-4">
                        <div
                            class="flex items-center gap-2 rounded-lg bg-white px-3 py-[7px] text-left text-xs shadow-3xl ring-1 ring-inset ring-gray-100"
                        >
                            <icon-check-round-border class="size-4 text-success" />
                            Completed
                        </div>
                        <router-link :to="`/users/${sentswap.user.username}/${sentswap.user.id}`" class="btn py-[5px]"
                            >{{ $t('view_profile') }}</router-link
                        >
                    </div>
                    <div v-else-if="sentswap.status == 'rejected'" class="flex flex-wrap items-center gap-4">
                        <div
                            class="flex items-center gap-2 rounded-lg bg-white px-3 py-[7px] text-left text-xs shadow-3xl ring-1 ring-inset ring-gray-100"
                        >
                            <icon-close-round class="size-4 text-danger" />
                            Rejected
                        </div>
                        <router-link :to="`/users/${sentswap.user.username}/${sentswap.user.id}`" class="btn py-[5px]"
                            >{{ $t('view_profile') }}</router-link
                        >
                    </div>
                    <div class="space-y-2.5 w-full">
                        <h6 class="font-semibold text-black">{{ $t('about') }}</h6>
                        <p>
                            {{ sentswap.user.bio }}
                        </p>
                    </div>
                    <a
                    href="#"
                    class="inline-flex items-center gap-2 rounded-lg px-2 py-1.5 text-black shadow-3xl ring-1 ring-inset ring-gray-100"
                >
                    <icon-star-border-bg class="size-4 text-yellow" />
                    <span>4.5</span>
                    <span class="h-3 w-0.5 bg-gray-100"></span>
                    <span>1K {{ $t('reviews') }}</span>
                </a>
                </div>
            </div>
        </div>
        <!-- Start modal to request skill swap -->
        <div v-if="isModalVisible" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div class="w-full max-w-lg rounded-lg bg-white p-6 shadow-lg">
                <div class="mb-4 flex items-center justify-between">
                    <h2 class="text-xl font-semibold">Respond SkillSwap</h2>
                    <button @click="isModalVisible = false" class="text-gray-600 hover:text-gray-800 modal-close-btn">
                        &times;
                    </button>
                </div>
                <div v-if="status == 'accepted'" class="common-skill-detail">
                    <p>Are you sure to Accept this request?</p>
                    <label for="acceptedMessage" class="text-gray-700 mt-4 block text-sm font-medium"
                        >Description Message</label
                    >
                    <textarea
                        id="acceptedMessage"
                        v-model="acceptedMessage"
                        class="focus:border-indigo-500 focus:ring-indigo-500 mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm"
                        rows="4"
                        required
                    ></textarea>
                </div>
                <div v-if="status == 'rejected'" class="common-skill-detail">
                    <p>Are you sure to Reject this request?</p>
                    <label for="rejectedMessage" class="text-gray-700 mt-4 block text-sm font-medium"
                        >Rejection Message</label
                    >
                    <textarea
                        id="rejectedReason"
                        v-model="rejectedReason"
                        class="focus:border-indigo-500 focus:ring-indigo-500 mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm"
                        rows="4"
                        required
                    ></textarea>
                    <label for="rejectedMessage" class="text-gray-700 mt-4 block text-sm font-medium"
                        >Description Message</label
                    >
                    <textarea
                        id="rejectedMessage"
                        v-model="rejectedMessage"
                        class="focus:border-indigo-500 focus:ring-indigo-500 mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm"
                        rows="4"
                        required
                    ></textarea>
                </div>
                <div class="common-skill-btn mt-4 flex justify-end">
                    <button
                        @click="submitRequest"
                        class="bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2"
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import IconArrowDown from '@/components/icon/icon-arrow-down.vue';
import IconFilter from '@/components/icon/icon-filter.vue';
import IconSearch from '@/components/icon/icon-search.vue';
import IconCheckRoundGreen from '@/components/icon/icon-check-round-green.vue';
import IconCheck from '@/components/icon/icon-check.vue';
import IconCheckRoundBorder from '@/components/icon/icon-check-round-border.vue';
import IconClose from '@/components/icon/icon-close.vue';
import IconCloseRound from '@/components/icon/icon-close-round.vue';
import IconClock from '@/components/icon/icon-clock.vue';
import CommonRequestDropdown from '@/components/common/common-request-dropdown.vue';
import IconStarBorderBg from '@/components/icon/icon-star-border-bg.vue';
import axios from 'axios';
import ChatRoomModal from '@/components/auth/ChatRoomModal.vue';
export default {
    components: {
        IconArrowDown,
        IconFilter,
        IconSearch,
        IconCheckRoundBorder,
        IconCheckRoundGreen,
        CommonRequestDropdown,
        IconStarBorderBg,
        IconClose,
        IconCloseRound,
        IconClock,
        IconCheck,
        ChatRoomModal,
    },
    data() {
        return {
            requests: [],
            sentSwaps: [],
            receivedSwaps: [],
            search: '',
            selectedSkillInput: '',
            acceptedMessage: '',
            rejectedMessage: '',
            rejectedReason: '',
            isModalVisible: false,
            selectedSkill: null,
            status: '',
        };
    },
    created() {
        this.swapRequests();
    },
    methods: {

        async swapRequests() {
            try {
                const response = await axios.get(`/skill/all-swap-requests`);
                this.requests = response.data.data;
                const sentSwaps = this.requests.sentSwaps;
                const receivedSwaps = this.requests.receivedSwaps;

                console.log('Sent swap requests:', sentSwaps);
                console.log('Received swap requests:', receivedSwaps);

                // If you need to store them separately
                this.sentSwaps = sentSwaps;
                this.receivedSwaps = receivedSwaps;
            } catch (error) {
                this.error = 'Failed to load users';
                console.error('Error fetching users:', error);
            }
        },
        showModal(skill, swapId, skillId, status) {
            this.status = status;
            this.swapId = swapId;
            this.skillId = skillId;
            this.selectedSkill = skill;
            this.selectedSkillInput = skill.title_en;
            this.isModalVisible = true;
        },
        async submitRequest() {
            try {
                if (this.status == 'accepted') {
                    const formData = new FormData();
                    formData.append('swap_id', this.swapId);
                    formData.append('skill_id', this.skillId);
                    formData.append('description', this.acceptedMessage);
                    console.log('FormData', formData);
                    const response = await axios.post('/skill/swap-request/accept', formData, {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                        },
                    });
                    if (response.data.status_code == 200) {
                        this.$toastr.success('Feedback submitted successfully');
                        this.isModalVisible = false; // Close the modal after submission
                        // Optionally reset proposal message
                        this.acceptedMessage = '';
                    } else if (response.data.status_code == 422) {
                        this.$toastr.error(response.data.message);
                    } else if (response.data.status_code == 400) {
                        this.$toastr.error(response.data.message);
                    } else {
                        this.$toastr.error('Something went wrong. Please try again later');
                    }
                } else if (this.status == 'rejected') {
                    const formData = new FormData();
                    formData.append('swap_id', this.swapId);
                    formData.append('skill_id', this.swapId);
                    formData.append('description', this.rejectedMessage);
                    formData.append('reject_reason', this.rejectedReason);
                    console.log('FormData', formData);
                    const response = await axios.post('/skill/swap-request/reject', formData, {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                        },
                    });
                    if (response.data.status_code == 200) {
                        this.$toastr.success('Feedback submitted successfully');
                        this.isModalVisible = false; // Close the modal after submission
                        // Optionally reset proposal message
                        this.proposalMessage = '';
                    } else if (response.data.status_code == 422) {
                        this.$toastr.error(response.data.message);
                    } else if (response.data.status_code == 400) {
                        this.$toastr.error(response.data.message);
                    } else {
                        this.$toastr.error('Something went wrong. Please try again later');
                    }
                }
            } catch (error) {
                this.$toastr.error('Error submitting proposal');
                // console.error('Error submitting proposal:', error);
            }
        },
    },
};
</script>

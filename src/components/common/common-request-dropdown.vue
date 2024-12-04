<template>
    <vue-popper placement="bottom-start" offsetDistance="0" class="relative !m-0 !border-0 *:w-full">
        <button
            type="button"
            class="flex w-full items-center gap-2 rounded-lg bg-white p-1.5 text-left text-black shadow-[0_0_0_1px_rgba(18,43,105,0.08),0_1px_2px_0_rgba(18,43,105,0.08)]"
        >
            <icon-transaction class="size-4 shrink-0" />
            <span class="line-clamp-1">{{ $t('skillswap_request') }}</span>
            <div class="shrink-0 border-l-2 border-primary pl-2">
                <icon-arrow-down class="size-4" />
            </div>
        </button>
        <template #content>
            <div
                class="my-2.5 space-y-1.5 rounded-lg bg-white p-1.5 shadow-[0_0_0_1px_rgba(18,43,105,0.08),0_1px_2px_0_rgba(18,43,105,0.08)]"
            >
                <div
                    v-for="skill in skills"
                    :key="skill.id"
                    @click="showModal(skill)"
                    class="cursor-pointer rounded-lg px-2.5 py-2 transition hover:bg-gray-200 hover:text-black"
                >
                    {{ skill.title_en }}
                </div>
            </div>
        </template>
    </vue-popper>
<!-- Model to submit Request -->
    <div v-if="isModalVisible" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div class="w-full max-w-lg rounded-lg bg-white p-6 shadow-lg">
            <div class="mb-4 flex items-center justify-between">
                <h2 class="text-xl font-semibold">Request SkillSwap</h2>
                <button @click="isModalVisible = false" class="text-gray-600 hover:text-gray-800 modal-close-btn">
                    &times;
                </button>
            </div>
            <div class="common-skill-detail">
                <p>{{ selectedSkill?.description }}</p>
                <label for="selectedSkillInput" class="text-gray-700 block text-sm font-medium">Selected Skill</label>
                <input
                    id="selectedSkillInput"
                    type="text"
                    v-model="selectedSkillInput"
                    class="focus:border-indigo-500 focus:ring-indigo-500 mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm"
                    readOnly
                />
                <label for="proposalMessage" class="text-gray-700 mt-4 block text-sm font-medium"
                    >Proposal Message</label
                >
                <textarea
                    id="proposalMessage"
                    v-model="proposalMessage"
                    class="focus:border-indigo-500 focus:ring-indigo-500 mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm"
                    rows="4"
                    required
                ></textarea>
            </div>
            <div class="common-skill-btn mt-4 flex justify-end">
                <button
                    @click="submitProposal"
                    class="bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2"
                >
                    Submit
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import IconArrowDown from '@/components/icon/icon-arrow-down.vue';
import IconTransaction from '@/components/icon/icon-transaction.vue';
import axios from 'axios';

export default {
    components: {
        IconTransaction,
        IconArrowDown,
    },
    props: {
        userId: {
            type: Number,
            required: true,
        },
    },
    data() {
        return {
            skills: [],
            error: '',
            isModalVisible: false,
            selectedSkill: null,
            selectedSkillInput: '',
            proposalMessage: '',
        };
    },
    created() {
        this.getAllUsers();
    },
    methods: {
        async getAllUsers() {
            try {
                const response = await axios.get(`/skill/common-swap-skills/${this.userId}`);
                this.skills = response.data.data;
            } catch (error) {
                this.error = 'Failed to load users';
                console.error('Error fetching users:', error);
            }
        },
        showModal(skill) {
            this.selectedSkill = skill;
            this.selectedSkillInput = skill.title_en;
            this.isModalVisible = true;
        },
        async submitProposal() {
            try {
                const formData = new FormData();
                formData.append('user_id', this.userId);
                formData.append('skill_id', this.selectedSkill.id);
                formData.append('proposal', this.proposalMessage);

                const response = await axios.post('/skill/swap-request', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
                console.log('Proposal submitted successfully:', response.data);
                if (response.data.status_code == 200) {
                    this.$toastr.success('Proposal submitted successfully');
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
            } catch (error) {
                this.$toastr.error('Error submitting proposal');
                // console.error('Error submitting proposal:', error);
            }
        },
    },
};
</script>



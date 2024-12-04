<template>
    <div class="space-y-5">
        <div class="flex items-center justify-between gap-2 rounded-lg bg-white px-5 py-[15px] shadow-3xl">
            <div class="shrink-0 text-base/5 font-semibold text-black">{{ $t('quiz') }}</div>
            <div
                class="flex items-center gap-1.5 rounded-lg bg-success/10 p-2 text-sm font-semibold text-black ring-1 ring-success/20">
                <icon-trophy class="size-5 text-success" />
                <!-- <span>5480</span> -->
            </div>
        </div>
        <div class="flex flex-col gap-4 lg:flex-row">
            <div v-if="quizLists?.length > 0" class="grow rounded-lg bg-white shadow-3xl">
                <div class="p-5">
                    <div class="mb-[30px] flex gap-2.5">
                        <!-- <div
                            class="flex items-center gap-1.5 rounded-lg bg-[#FFE4E6]/30 p-2 text-sm font-semibold text-black ring-1 ring-danger/10"
                        >
                            <icon-timer-clock class="size-5 text-danger" />
                            <span>01:00</span>
                        </div> -->
                        <div class="flex gap-1.5 items-center text-black font-semibold text-sm p-2 rounded-lg ring-1 ring-danger/10 bg-[#FFE4E6]/30">
                            <icon-timer-clock class="size-5 text-danger" />
                            <span>{{ formatTime(remainingTime) }}</span>
                        </div>
                        <div class="flex items-center gap-1.5 rounded-lg bg-gray-400 p-2 text-sm font-semibold">
                            <icon-question-round class="size-5" />
                            <span>{{ currentQuestionIndex + 1 }}/{{ quizLists.length }}</span>
                        </div>
                    </div>
                    <p class="mb-2.5 text-sm font-semibold text-gray-300">Question {{ currentQuestionIndex + 1 }}</p>
                    <h3 class="mb-4 text-black">{{ quizLists[currentQuestionIndex].question }}</h3>

                    <div class="my-[30px] flex flex-col gap-4">
                        <div v-for="option in quizLists[currentQuestionIndex].options" :key="option.id">
                            <label :for="'option-' + option.id"
                                class="flex items-center gap-2.5 rounded-lg p-3 shadow-[0px_2px_1px_0px_rgba(113,116,152,0.1)] ring-1 ring-gray-100">
                                <input type="radio" :id="'option-' + option.id"
                                    :name="'question-' + quizLists[currentQuestionIndex].id" :value="option.id"
                                    v-model="selectedAnswers[quizLists[currentQuestionIndex].id]" class="mr-3" />
                                <div
                                    class="grid shrink-0 place-content-center rounded-lg font-semibold text-black ring-1 ring-gray-100">
                                    {{ String.fromCharCode(65 + index) }}
                                </div>
                                <span class="h-3.5 w-0.5 shrink-0 rounded-full"></span>
                                <p>{{ option.text }}</p>
                            </label>
                        </div>
                    </div>
                    <div class="flex justify-between">
                        <button @click="previousQuestion" :disabled="currentQuestionIndex === 0"
                            class="btn py-2 shadow-[0_2px_1px_0_rgba(0,0,0,0.08),0_3px_4px_0_rgba(0,0,0,0.08)]">
                            Previous
                        </button>
                        <button @click="nextQuestion" :disabled="currentQuestionIndex === quizLists.length - 1"
                            class="btn py-2 shadow-[0_2px_1px_0_rgba(0,0,0,0.08),0_3px_4px_0_rgba(0,0,0,0.08)]">
                            Next
                        </button>
                    </div>
                    <div v-if="currentQuestionIndex === quizLists.length - 1" class="mt-4">
                        <button @click="submitQuiz"
                            class="btn w-full py-2 shadow-[0_2px_1px_0_rgba(0,0,0,0.08),0_3px_4px_0_rgba(0,0,0,0.08)]">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
            <div class="grow rounded-lg bg-white shadow-3xl" v-else>
                <h1 class="p-5"> {{ message }}</h1>
            </div>
            <div class="h-fit rounded-lg bg-white p-5 shadow-3xl lg:w-[399px]">
                <h2 class="mb-5 shrink-0 text-sm font-semibold text-black">{{ $t('quiz_details') }}</h2>
                <div
                    class="mb-4 flex items-center gap-2.5 rounded-lg bg-gray-500 px-3 py-2.5 text-sm font-semibold text-black">
                    <icon-qualify class="" />
                    <span>{{ $t('mininum_qualify_pr', { minPercentage }) }}</span>

                </div>
                <div class="flex flex-wrap gap-2.5">
                    <div v-for="skill in user.skills" :key="skill.name"
                        class="rounded-lg bg-[#FEE2E2] p-1.5 text-[11px]/[14px] font-bold uppercase text-black">
                        {{ skill.name }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import IconTimerClock from '@/components/icon/icon-timer-clock.vue';
import IconTrophy from '@/components/icon/icon-trophy.vue';
import IconQualify from '@/components/icon/icon-qualify.vue';
import IconQuestionRound from '@/components/icon/icon-question-round.vue';
import axios from 'axios';

export default {
    components: {
        IconTimerClock,
        IconTrophy,
        IconQualify,
        IconQuestionRound,
    },
    data() {
        return {
            quizLists: [],
            selectedAnswers: {}, 
            currentQuestionIndex: 0,
            loading: false,
            skillId: null,
            remainingTime: 600, 
            timerInterval: null, 
            message: '',
            minPercentage: 0
        };
    },
    computed: {
        user() {
            return this.$store.getters.user;
        },
        currentQuestion() {
            return this.quizLists[this.currentQuestionIndex];
        },
    },
    methods: {
        async getQuizLists() {
            const skillId = this.$route.params.skillId;
            this.skillId = skillId;
            if (!skillId) {
                this.$router.push('/quiz-list');
            }
            this.loading = true;
            try {
                const response = await axios.get(`/skills/${skillId}/quiz`);
                this.quizLists = response.data.data ? response.data.data.questions : [];
                this.minPercentage = response.data.data ? response.data.data.passing_percentage : 0;
                this.message = response.data.message;
                if (!this.quizLists) {
                    this.$toastr.warning(response.data.message);
                    this.$router.push('/quiz-list');
                    return;
                }
                const initialTimeForEachQuestion = 30;
                const time = parseInt(this.quizLists.length) * parseInt(initialTimeForEachQuestion);
                const finalTime = time !== 0 ? time : 600;
                this.remainingTime = finalTime;
                this.startTimer(); 
                this.selectedAnswers = this.quizLists.reduce((acc, quiz) => {
                    acc[quiz.id] = null;
                    return acc;
                }, {});
                this.loading = false;
            } catch (error) {
                console.error('Error fetching Quiz:', error);
                this.loading = false;
            }
        },
        startTimer() {
            this.timerInterval = setInterval(() => {
                if (this.remainingTime > 0) {
                    this.remainingTime--;
                } else {
                    this.timeUp();
                }
            }, 1000);
        },
        formatTime(seconds) {
            const minutes = Math.floor(seconds / 60);
            const secs = seconds % 60;
            return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
        },
        timeUp() {
            clearInterval(this.timerInterval);
            this.$toastr.warning('Time is up! Submitting your quiz.');
            this.submitQuiz();
        },
        nextQuestion() {
            if (this.currentQuestionIndex < this.quizLists.length - 1) {
                this.currentQuestionIndex++;
            }
        },
        previousQuestion() {
            if (this.currentQuestionIndex > 0) {
                this.currentQuestionIndex--;
            }
        },
        submitQuiz() {
            const answers = Object.values(this.selectedAnswers);

            console.log('Selected Answers:', answers);
            axios
                .post(`/skills/${this.skillId}/quiz`, { answers })
                .then((response) => {
                    console.log('Quiz submitted successfully:', response.data);
                    if (response.data?.data?.passed === 1) {
                        this.$toastr.success('Congratulation ! You have passed this test');
                        setTimeout(() => {
                            this.$router.push('/quiz-list');
                        }, 1000);
                    } else {
                        this.$toastr.warning('Sorry ! You have failed this test');
                        setTimeout(() => {
                            this.$router.push('/quiz-list');
                        }, 1000);
                        
                    }
                })
                .catch((error) => {
                    console.error('Error submitting quiz:', error);
                });
        },
    },
    created() {
        this.getQuizLists();
    },
};
</script>

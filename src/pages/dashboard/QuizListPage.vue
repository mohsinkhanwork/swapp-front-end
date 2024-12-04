<template>
    <div>
        <div class="space-y-5">
            <div class="shadow-3xl rounded-lg bg-white px-5 py-[23px]">
                <div class="shrink-0 text-base/5 font-semibold text-black">{{ $t('quiz_list') }}</div>
            </div>
            <div class="shadow-3xl rounded-lg bg-white p-5 space-y-4">
                <div v-for="(quiz, key) in quizLists" :key="key"
                    class="shadow-[0_0_0_1px_rgba(18,43,105,0.08),0_1px_2px_0_rgba(18,43,105,0.08)] text-black bg-white py-3 px-4 rounded-lg flex flex-col md:flex-row justify-between gap-2">
                    <div class="flex items-center gap-3.5">
                        <icon-math-quiz class="size-9" />
                        <div>
                            <h2 class="font-semibold mb-1.5">{{ quizLan == 'tr' ? quiz.skill_name_tr : quiz.skill_name_en}}</h2>
                            <p class="text-xs text-gray">{{ quiz.total_questions_for_skill }} {{ $t('questions') }}</p>
                        </div>
                    </div>
                    <div class="flex items-center gap-3">
                        <template v-if="quiz.passed">
                            
                            <div
                                v-if="quiz.passed == 'Passed'"
                                class="bg-success rounded-lg p-1.5 flex items-center gap-1.5 text-white text-xs font-semibold">
                                <icon-check-round-border class="size-4" />
                                <p v-if="quiz.passed == 'Passed'"> Passed </p>
                            </div>
                            
                        </template>
                        <div
                                v-if="quiz.passed == 'Failed'"
                                class="bg-danger rounded-lg p-1.5 flex items-center gap-1.5 text-white text-xs font-semibold">
                                <icon-close-round class="size-4" />
                                <p > Failed </p>
                            </div>
                        <div
                            v-if="quiz.result"
                            class="bg-gray-500 rounded-lg p-1.5 flex items-center gap-1.5 text-black text-xs font-semibold">
                            <icon-check-round-border class="size-4" />
                            <p> {{ quiz.result }} %</p>
                        </div>
                        <div
                            class="bg-gray-500 rounded-lg p-1.5 flex items-center gap-1.5 text-black text-xs font-semibold">
                            <icon-clock class="size-4" />
                            <p> {{ examTimeCalculate(quiz) }} mins</p>
                        </div>
                        <span v-if="quiz.passed !== 1" class="w-0.5 h-3.5 bg-primary rounded-full"></span>
                        <a v-if="quiz.passed !== 1" :href="`/quiz/${quiz.skill_id}`"
                            class="btn shadow-[0_2px_1px_0_rgba(0,0,0,0.08),0_3px_4px_0_rgba(0,0,0,0.08)] px-3 py-1.5 border-none">Start
                            quiz</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>


import IconMathQuiz from '@/components/icon/icon-math-quiz.vue';
import IconSportQuiz from '@/components/icon/icon-sport-quiz.vue';
import IconScienceQuiz from '@/components/icon/icon-science-quiz.vue';
import IconEnglishQuiz from '@/components/icon/icon-english-quiz.vue';
import IconComputerQuiz from '@/components/icon/icon-computer-quiz.vue';
import IconMusicQuiz from '@/components/icon/icon-music-quiz.vue';
import IconArtificialIntelligenceQuiz from '@/components/icon/icon-artificial-Intelligence-quiz.vue';
import IconCheckRoundBorder from '@/components/icon/icon-check-round-border.vue';
import IconCloseRound from '@/components/icon/icon-close-round.vue';
import IconClock from '@/components/icon/icon-clock.vue';
import axios from 'axios';
export default {
    components: {
        IconMathQuiz,
        IconSportQuiz,
        IconComputerQuiz,
        IconArtificialIntelligenceQuiz,
        IconMusicQuiz,
        IconScienceQuiz,
        IconEnglishQuiz,
        IconCheckRoundBorder,
        IconClock,
        IconCloseRound
    },
    data() {
        return {
            quizLists: [],
            pagination: {},
            loading: false,
        };
    },
    computed: {
        user() {
            return this.$store.getters.user;
        },
        quizLan() {
            const language = localStorage.getItem('i18n_locale');
            const lan = language === 'tr' ? 'tr' : 'en';
            return lan;

        },
    },
    methods: {
        async getSkillLists() {
            this.loading = true;
            try {
                const response = await axios.get('/skills/quiz-list');
                this.quizLists = response.data.data;
                this.pagination = response.data.pagination;
                this.loading = false;
                console.log(this.quizLists)

            } catch (error) {
                this.error = 'Failed to load feeds';
                console.error('Error fetching feeds:', error);
                this.loading = false;
            }
        },
        examTimeCalculate(totalQuestion) {
            console.log(totalQuestion.total_questions_for_skill)
            const initialTimeForEachQuestion = 5;
            const time = parseInt(totalQuestion.total_questions_for_skill) * parseInt(initialTimeForEachQuestion);
            const finalTime = time !== 0 ? time / 10 : 0;
            return finalTime;
        }
    },
    created() {
        this.getSkillLists();
    }

};
</script>

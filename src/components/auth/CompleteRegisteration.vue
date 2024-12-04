<template>
    <div class="w-full max-w-[780px] py-4">
        <div class="relative z-10 overflow-hidden rounded-lg shadow-3xl">
            <div class="flex bg-primary p-5">
                <a href="/" class="inline-flex items-center gap-2 text-lg/5 font-bold text-black">
                    <img class="mt-0.5 size-4" src="/assets/images/logo.svg" alt="Logo" />

                    <span>SwapGoal</span>
                </a>
            </div>
            <div class="space-y-7 bg-white p-5">
                <div class="flex flex-wrap items-center justify-between gap-4">
                    <h4 class="text-xl/6 font-semibold text-black">Complete Account Information</h4>
                </div>

                <div v-if="formError" class="error">
                    {{ formError }}
                </div>

                <form @submit.prevent="register" class="space-y-7">
                    <div class="grid gap-x-4 gap-y-4 sm:grid-cols-2 sm:gap-y-5">
                        <div class="sm:col-span-2">
                            <label class="mb-2.5 inline-block text-black"
                                >User name<span class="text-primary">*</span></label
                            >
                            <input
                                type="text"
                                placeholder="User name"
                                class="form-input"
                                v-model="user.username"
                                required
                            />
                        </div>
                        <div>
                            <label class="mb-2.5 inline-block text-black"
                                >Professions<span class="text-primary">*</span></label
                            >
                            <div class="relative">
                                <select class="form-select" v-model="user.profession_id" required>
                                    <option value="" disabled selected>--select--</option>
                                    <optgroup
                                        v-for="(professions, i) in professionList"
                                        :key="i"
                                        :label="professions.category"
                                    >
                                        <option
                                            v-for="profession in professions.professions"
                                            :key="profession.id"
                                            :value="profession.id"
                                        >
                                            {{ profession.title }}
                                        </option>
                                    </optgroup>
                                </select>
                                <icon-arrow-down
                                    class="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-black"
                                />
                            </div>
                        </div>
                        <div>
                            <label class="mb-2.5 inline-block text-black"
                                >Skills<span class="text-primary">*</span></label
                            >
                            <vue-popper
                                class="relative !mx-0 !block w-full !border-x-0 *:w-full"
                                placement="bottom-end"
                            >
                                <button
                                    type="button"
                                    class="flex w-full items-center justify-between gap-2 rounded-md border border-gray-100 p-2 transition hover:opacity-70"
                                >
                                    Skills
                                    <icon-arrow-down />
                                </button>
                                <template #content="{ close }">
                                    <div
                                        class="z-10 max-h-[200px] w-full overflow-auto rounded-lg bg-white shadow-[0_0_0_1px_rgba(18,43,105,0.08),0_1px_2px_0_rgba(18,43,105,0.08)]"
                                    >
                                        <div v-for="(skills, i) in skillList" :key="i">
                                            <h6 class="bg-gray-200 p-2.5 font-bold">{{ skills.category }}</h6>
                                            <div
                                                class="relative flex cursor-pointer gap-3 rounded-lg p-2.5 pl-4 transition hover:bg-gray-200"
                                                v-for="skill in skills.skills"
                                                :key="skill.id"
                                                @click="
                                                    if (user_skills.includes(skill))
                                                        user_skills = user_skills.filter((d) => d !== skill);
                                                    else user_skills = [...user_skills, skill];
                                                    close();
                                                "
                                                :class="{ 'bg-gray-200': user_skills.includes(skill) }"
                                            >
                                                {{ skill.title }}
                                            </div>
                                        </div>
                                    </div>
                                </template>
                            </vue-popper>
                            <div class="mt-2.5 flex flex-wrap gap-2">
                                <button
                                    v-for="(skill, i) in user_skills"
                                    :key="i"
                                    type="button"
                                    class="flex shrink-0 items-center gap-1.5 rounded-lg bg-gray-500 px-1.5 py-1 ring-1 ring-gray-100 transition hover:opacity-80"
                                >
                                    <span class="leading-4">{{ skill.title }}</span>
                                    <icon-close
                                        class="size-4 text-danger"
                                        @click="user_skills = user_skills.filter((d) => d.id !== skill.id)"
                                    />
                                </button>
                            </div>
                        </div>
                        <div class="sm:col-span-2">
                            <label class="mb-2.5 inline-block text-black"
                                >Bio<span class="text-primary">*</span></label
                            >
                            <textarea
                                placeholder="Bio"
                                rows="5"
                                class="form-textarea resize-none"
                                v-model="user.bio"
                                required
                            ></textarea>
                        </div>
                    </div>
                    <div class="flex flex-wrap items-center gap-4">
                        <button type="submit" class="btn" :disabled="isSubmitting">
                            <div class="flex items-center justify-center gap-3" v-if="isSubmitting">
                                <span class="spinner"></span>
                                Loading...
                            </div>
                            <span v-else> Register</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import IconClose from '@/components/icon/icon-close.vue';
import IconArrowDown from '@/components/icon/icon-arrow-down.vue';
import authService from '@/services/authService';
import { mapGetters } from 'vuex';
const defaultParams = {
    provider:'',
    provider_id:'',
    name: '',
    email: '',
    avatar: '',
    username: '',
    skills: [],
    profession_id: '',
    bio: ''
};
export default {
    components: {
        IconArrowDown,
        IconClose
    },
    data() {
        return {
            user: defaultParams,
            isSubmitting: false,
            formError: '',
            user_skills:[]
        };
    },
    computed: {
        ...mapGetters(['skillList', 'professionList']),
    },
    methods: {
        async register() {
            this.isSubmitting = true;
            this.user.skills=[];
            this.user_skills.forEach((skill, i) => this.user.skills.push(skill.id));
            const data = await authService.socialLogin(this.user);
            if (data.status_code == 200) {
                localStorage.removeItem('social_login');
                this.$store.dispatch('login', data.data.user);
                this.$router.push('/');
                this.$toastr.success('Account Created Successfully');
            } else {
                this.formError = data.message;
            }
            this.isSubmitting = false;
        },
    },
    created(){
        let social_user=localStorage.getItem('social_user');
        if(typeof(social_user)!='string'){
            this.$router.push('/login');
            return;
        }
        social_user=JSON.parse(social_user);
        if(!social_user.provider_id){
            this.$router.push('/login');
            return;
        }
        this.user.provider=social_user.provider;
        this.user.provider_id=social_user.provider_id;
        this.user.name=social_user.name;
        this.user.email=social_user.email;
        this.user.avatar=social_user.avatar;
    }
};
</script>

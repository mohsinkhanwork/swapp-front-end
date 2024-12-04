<template>
    <div class="absolute left-1/2 top-4 w-full max-w-[460px] -translate-x-1/2 px-4">
        <div class="flex items-center gap-2 rounded-lg bg-white p-5 shadow-3xl sm:gap-5">
            <div class="flex shrink-0 items-center gap-1.5 text-black">
                <icon-check-round-green class="shrink-0" />
                <span>{{ $t('register') }}</span>
            </div>
            <div class="h-px grow bg-gray-100"></div>
            <div class="flex shrink-0 items-center gap-1.5" :class="{ 'text-black': currentStep === 'account' }">
                <icon-check-round-blank v-if="currentStep === 'register'" class="shrink-0" />
                <icon-check-round-green v-else class="shrink-0" />
                <span>{{ $t('basic_information') }}</span>
            </div>
        </div>
    </div>
    <div class="w-full max-w-[780px] py-16">
        <div class="relative z-10 overflow-hidden rounded-lg shadow-3xl">
            <div class="flex bg-primary p-5">
                <a href="/" class="inline-flex items-center gap-2 text-lg/5 font-bold text-black">
                    <img class="mt-0.5 size-4" src="/assets/images/logo.svg" alt="Logo" />

                    <span>SwapGoal</span>
                </a>
            </div>
            <div class="space-y-7 bg-white p-5">
                <div class="flex flex-wrap items-center justify-between gap-4">
                    <h4 class="text-xl/6 font-semibold text-black">{{ $t('lets_create_your_account') }}</h4>
                    <div v-if="currentStep === 'register'" class="flex items-center gap-4">
                        <google-login />
                        <facebook-login />
                    </div>
                </div>

                <div v-if="formError" class="error">
                    {{ formError }}
                </div>

                <form @submit.prevent="register" class="space-y-7">
                    <template v-if="currentStep === 'register'">
                        <div>
                            <div class="grid gap-x-4 gap-y-4 sm:grid-cols-2 sm:gap-y-5">
                                <div>
                                    <label class="mb-2.5 inline-block text-black"
                                        >{{ $t('first_name') }}<span class="text-primary">*</span></label
                                    >
                                    <input
                                        type="text"
                                        :placeholder="$t('first_name')"
                                        class="form-input"
                                        v-model="user.first_name"
                                        required
                                    />
                                </div>
                                <div>
                                    <label class="mb-2.5 inline-block text-black"
                                        >{{ $t('last_name') }}<span class="text-primary">*</span></label
                                    >
                                    <input
                                        type="text"
                                        :placeholder="$t('last_name')"
                                        class="form-input"
                                        v-model="user.last_name"
                                        required
                                    />
                                </div>
                                <div>
                                    <label class="mb-2.5 inline-block text-black"
                                        >{{ $t('email_address') }}<span class="text-primary">*</span></label
                                    >
                                    <input
                                        type="email"
                                        :placeholder="$t('email_address')"
                                        class="form-input"
                                        v-model="user.email"
                                        required
                                    />
                                </div>
                                <div>
                                    <label class="mb-2.5 inline-block text-black"
                                        >{{ $t('phone_number') }}<span class="text-primary">*</span></label
                                    >
                                    <input
                                        type="text"
                                        :placeholder="$t('phone_number')"
                                        class="form-input"
                                        v-model="user.phone"
                                        required
                                    />
                                </div>
                                <div>
                                    <label class="mb-2.5 inline-block text-black"
                                        >{{ $t('password') }}<span class="text-primary">*</span></label
                                    >
                                    <div class="relative">
                                        <input
                                            :type="showPassword ? 'text' : 'password'"
                                            :placeholder="$t('password')"
                                            class="form-input pr-10"
                                            v-model="user.password"
                                            required
                                        />
                                        <button
                                            type="button"
                                            class="absolute right-3 top-1/2 -translate-y-1/2 text-black transition hover:opacity-80"
                                            @click="showPassword = !showPassword"
                                        >
                                            <icon-eye-slash v-if="showPassword" />
                                            <icon-eye v-else />
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <label class="mb-2.5 inline-block text-black"
                                        >{{ $t('confirm_password') }}<span class="text-primary">*</span></label
                                    >
                                    <div class="relative">
                                        <input
                                            :type="showConfirmPassword ? 'text' : 'password'"
                                            :placeholder="$t('confirm_password')"
                                            class="form-input pr-10"
                                            v-model="user.password_confirmation"
                                            required
                                        />
                                        <button
                                            type="button"
                                            class="absolute right-3 top-1/2 -translate-y-1/2 text-black transition hover:opacity-80"
                                            @click="showConfirmPassword = !showConfirmPassword"
                                        >
                                            <icon-eye-slash v-if="showConfirmPassword" />
                                            <icon-eye v-else />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <label class="mt-5 flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    class="form-checkbox size-3"
                                    v-model="user.terms_condition"
                                    required
                                />
                                <div>
                                   {{ $t('i_accept_and_agree_to_the') }}
                                    <a
                                        href="#"
                                        class="border-b border-success font-semibold text-success transition hover:border-black hover:text-black"
                                        >{{ $t('terms_of_use') }}</a
                                    >.
                                </div>
                            </label>
                        </div>
                        <div class="flex flex-wrap items-center gap-4">
                            <p>
                                {{ $t('already_have_an_account') }}?
                                <router-link
                                    to="login"
                                    class="border-b font-bold text-black underline transition hover:no-underline hover:opacity-80"
                                    >{{ $t('sign_in') }}</router-link
                                >
                            </p>
                            <button type="submit" class="btn ml-auto"> {{ $t('next') }}</button>
                        </div>
                    </template>

                    <template v-else>
                        <div class="flex items-center gap-2.5">
                            <div class="size-20 overflow-hidden rounded-lg bg-white">
                                <img
                                    alt="Profile"
                                    :src="profileImage ? profileImage : '/assets/images/profile.png'"
                                    class="h-full w-full object-cover"
                                />
                            </div>
                            <button type="button" class="btn btn-linear relative px-2.5 py-1.5 text-black">
                                <input
                                    type="file"
                                    class="absolute inset-0 cursor-pointer opacity-0"
                                    @change="uploadProfileImage"
                                />
                                <icon-upload />
                                <span>{{ $t('upload') }}</span>
                            </button>
                        </div>

                        <div class="grid gap-x-4 gap-y-4 sm:grid-cols-2 sm:gap-y-5">
                            <div class="sm:col-span-1">
                                <label class="mb-2.5 inline-block text-black"
                                    >{{ $t('user_name') }}<span class="text-primary">*</span></label
                                >
                                <input
                                    type="text"
                                    :placeholder="$t('user_name')"
                                    class="form-input"
                                    v-model="user.username"
                                    required
                                />
                            </div>
                            <div>
                                <label class="mb-2.5 inline-block text-black"
                                    > {{ $t('country') }}<span class="text-primary">*</span></label
                                >
                                <div class="relative">
                                    <select class="form-select" v-model="user.country_id" required>
                                        <option value="" disabled selected>-- {{ $t('select')}} --</option>

                                            <option
                                                v-for="country in countries"
                                                :key="country.id"
                                                :value="country.id"
                                            >
                                                {{ country.name }}
                                            </option>
                                    </select>
                                    <icon-arrow-down
                                        class="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-black"
                                    />
                                </div>
                            </div>
                            <div>
                                <label class="mb-2.5 inline-block text-black"
                                    >{{ $t('professions') }}<span class="text-primary">*</span></label
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
                                    > {{ $t('skills') }}<span class="text-primary">*</span></label
                                >
                                <vue-popper
                                    class="relative !mx-0 !block w-full !border-x-0 *:w-full"
                                    placement="bottom-end"
                                >
                                    <button
                                        type="button"
                                        class="flex w-full items-center justify-between gap-2 rounded-md border border-gray-100 p-2 transition hover:opacity-70"
                                    >
                                        {{ $t('skills') }}
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
                                                        if (user.skills.includes(skill))
                                                            user.skills = user.skills.filter((d) => d !== skill);
                                                        else user.skills = [...user.skills, skill];
                                                        close();
                                                    "
                                                    :class="{ 'bg-gray-200': user.skills.includes(skill) }"
                                                >
                                                    {{ skill.title }}
                                                </div>
                                            </div>
                                        </div>
                                    </template>
                                </vue-popper>
                                <div class="mt-2.5 flex flex-wrap gap-2">
                                    <button
                                        v-for="(skill, i) in user.skills"
                                        :key="i"
                                        type="button"
                                        class="flex shrink-0 items-center gap-1.5 rounded-lg bg-gray-500 px-1.5 py-1 ring-1 ring-gray-100 transition hover:opacity-80"
                                    >
                                        <span class="leading-4">{{ skill.title }}</span>
                                        <icon-close
                                            class="size-4 text-danger"
                                            @click="user.skills = user.skills.filter((d) => d.id !== skill.id)"
                                        />
                                    </button>
                                </div>
                            </div>
                            <div class="sm:col-span-2">
                                <label class="mb-2.5 inline-block text-black"
                                    >{{ $t('bio') }}<span class="text-primary">*</span></label
                                >
                                <textarea
                                    :placeholder="$t('bio')"
                                    rows="5"
                                    class="form-textarea resize-none"
                                    v-model="user.bio"
                                    required
                                ></textarea>
                            </div>
                        </div>
                        <div class="flex flex-wrap items-center gap-4">
                            <button type="button" class="btn btn-linear" @click="currentStep = 'register'">
                                {{ $t('previous') }}
                            </button>
                            <button type="submit" class="btn" :disabled="isSubmitting">
                                <div class="flex items-center justify-center gap-3" v-if="isSubmitting">
                                    <span class="spinner"></span>
                                    Loading...
                                </div>
                                <span v-else> {{ $t('register') }}</span>
                            </button>
                        </div>
                    </template>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import IconCheckRoundBlank from '@/components/icon/icon-check-round-blank.vue';
import IconEyeSlash from '@/components/icon/icon-eye-slash.vue';
import IconEye from '@/components/icon/icon-eye.vue';
import IconCheckRoundGreen from '@/components/icon/icon-check-round-green.vue';
import IconUpload from '@/components/icon/icon-upload.vue';
import IconClose from '@/components/icon/icon-close.vue';
import IconArrowDown from '@/components/icon/icon-arrow-down.vue';
import authService from '@/services/authService';
import FacebookLogin from './social/FacebookLogin';
import GoogleLogin from './social/GoogleLogin';
import { mapGetters } from 'vuex';
import axios from 'axios';
const defaultParams = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    password_confirmation: '',
    phone: '',
    avatar: '',
    username: '',
    skills: [],
    profession_id: '',
    bio: '',
    terms_condition: false,
    country_id: '',
};
export default {
    components: {
        IconArrowDown,
        IconCheckRoundBlank,
        IconEyeSlash,
        IconEye,
        IconCheckRoundGreen,
        IconUpload,
        IconClose,
        GoogleLogin,
        FacebookLogin
    },
    data() {
        return {
            currentStep: 'register',
            user: defaultParams,
            isSubmitting: false,
            profileImage: null,
            formError: '',
            showPassword: false,
            showConfirmPassword: false,
            countries: []
        };
    },
    computed: {
        ...mapGetters(['skillList', 'professionList']),
        selectedCountryId() {
            const storedIp = localStorage.getItem('user_country');
            console.log(storedIp, " storedIp name ");
            if (storedIp) {
                const selectedCountry = this.countries.find(
                    (country) => country.country_code.toUpperCase() === storedIp
                );
                return selectedCountry ? selectedCountry.id : null;
            }
            return selectedCountry ? selectedCountry.id : null;
        },
    },
    created() {
        this.getCountries();
    },
    watch: {
        countries(newCountries) {
            if (!this.user.country_id) {
                this.user.country_id = this.selectedCountryId;
            }
        },
    },
    methods: {
        async register() {
            if (this.currentStep == 'register') {
                if (this.user.password != this.user.password_confirmation) {
                    this.formError = 'Şifre Doğrulaması eşleşmiyor.';
                    return;
                }
                this.formError = '';
                this.currentStep = 'account';
                return;
            }
            this.isSubmitting = true;
            const formData = new FormData();
            formData.append('first_name', this.user.first_name);
            formData.append('last_name', this.user.last_name);
            formData.append('email', this.user.email);
            formData.append('password', this.user.password);
            formData.append('password_confirmation', this.user.password_confirmation);
            formData.append('phone', this.user.phone);
            formData.append('avatar', this.user.avatar);
            formData.append('username', this.user.username);
            this.user.skills.forEach((skill, i) => formData.append(`skills[${i}]`, skill.id));
            formData.append('profession_id', this.user.profession_id);
            formData.append('country_id', this.user.country_id);
            formData.append('bio', this.user.bio);

            const data = await authService.register(formData);
            if (data.status_code == 200) {
                localStorage.setItem('user_email', this.user.email);
                this.$store.dispatch('setUserWithoutAuth', data.data.user);
                this.$router.push('/confirm-email');
            } else {
                this.formError = data.message;
                console.log(data.message);
            }
            this.isSubmitting = false;
        },
        uploadProfileImage(e) {
            const file = e.target.files[0];
            if (file) {
                this.profileImage = URL.createObjectURL(file);
                this.user.avatar = file;
            }
        },
        async getCountries() {
            try {
                const response = await axios.get('/country');
                this.countries = response.data?.countries;
                this.user.country_id = this.selectedCountryId;
            } catch (error) {
                this.error = 'Failed to load country';
                console.error('Error fetching country:', error);
            }
        }
    },
};
</script>

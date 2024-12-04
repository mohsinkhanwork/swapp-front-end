<template>
    <div v-if="formError" class="error">
        {{ formError }}
    </div>
    <form @submit.prevent="updateProfile" method="post">
        <div class="relative bg-white p-5 pt-[69px] shadow-3xl">
            <div class="absolute left-0 top-0 h-[100px] w-full overflow-hidden bg-[#E0F2FE]">
                <div class="absolute left-5 top-1/2 -translate-y-1/2">
                    <img src="/assets/images/skillswap.png" alt="SkillSwap" class="w-[416px]" />
                </div>
            </div>
            <div class="relative flex flex-col items-start justify-between gap-3 md:flex-row md:gap-[18px]">
                <div class="w-full grow">
                    <div class="divide-y divide-gray-100">
                        <div class="flex gap-4 pb-4">
                            <div class="size-20 shrink-0 overflow-hidden rounded-lg ring-2 ring-white sm:size-[100px]">
                                <img :src="user.avatarUrl ? user.avatarUrl : user.avatar" alt="User Profile"
                                    class="h-full w-full object-cover" />
                            </div>
                            <div
                                class="mt-[31px] flex grow flex-col flex-wrap justify-between gap-2 sm:flex-row sm:items-end sm:gap-5">
                                <div class="py-3 sm:py-4">
                                    <div class="flex items-center gap-2 pb-1">
                                        <h4 class="text-black">{{ user.username }}</h4>
                                        <icon-verify class="shrink-0 text-success" />
                                    </div>
                                    <p class="text-xs">{{ user.name }}</p>
                                </div>
                                <div class="flex gap-5">
                                    <div>
                                        <p class="pb-1 text-sm/[18px] font-semibold"> {{ $t('followers') }} </p>
                                        <span class="text-lg/[23px] font-bold text-black">{{ user.followers }}</span>
                                    </div>
                                    <div>
                                        <p class="pb-1 text-sm/[18px] font-semibold"> {{ $t('following') }} </p>
                                        <span class="text-lg/[23px] font-bold text-black">{{ user.following }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex w-full flex-col gap-5 py-5 xl:flex-row">
                            <div class="shrink-0 xl:w-[331px]">
                                <h3 class="mb-2.5 font-semibold text-black">{{ $t('personal_info') }}</h3>
                                <p>{{ $t('update_your_photo_and_personal_details') }}</p>
                            </div>
                            <div class="grow space-y-5">
                                <div class="grid gap-x-[30px] gap-y-3.5 sm:grid-cols-2 sm:gap-y-5">
                                    <div>
                                        <label class="mb-2.5 inline-block text-black">{{ $t('username') }}</label>
                                        <input v-model="user.username" readonly type="text" class="form-input"
                                            :placeholder="$t('username')" />
                                    </div>
                                    <div class="hidden sm:block"></div>
                                    <div>
                                        <label class="mb-2.5 inline-block text-black">{{ $t('first_name') }}</label>
                                        <input v-model="user.first_name" type="text" class="form-input"
                                            :placeholder="$t('first_name')" />
                                    </div>
                                    <div>
                                        <label class="mb-2.5 inline-block text-black">{{ $t('last_name') }}</label>
                                        <input v-model="user.last_name" type="text" class="form-input"
                                            :placeholder="$t('last_name')" />
                                    </div>
                                    <div>
                                        <label class="mb-2.5 inline-block text-black">{{ $t('email_address') }}</label>
                                        <div class="relative">
                                            <input v-model="user.email" type="text" readonly
                                                class="form-input pr-[70px]" :placeholder="$t('email_address')" />
                                            <!-- <button
                                                    type="button"
                                                    class="absolute right-0 top-1/2 h-full -translate-y-1/2 rounded-r-lg px-3 text-xs font-bold text-blue hover:opacity-80"
                                                >
                                                    Change
                                                </button> -->
                                        </div>
                                    </div>
                                    <div>
                                        <label class="mb-2.5 inline-block text-black">{{ $t('phone_number') }}</label>
                                        <div class="relative">
                                            <input v-model="user.phone" type="text" class="form-input pr-[70px]"
                                                :placeholder="$t('phone_number')" />
                                            <button type="button"
                                                class="absolute right-0 top-1/2 h-full -translate-y-1/2 rounded-r-lg px-3 text-xs font-bold text-blue hover:opacity-80">
                                                {{ $t('change') }}
                                            </button>
                                        </div>
                                    </div>
                                    <div>
                                        <label class="mb-2.5 inline-block text-black">{{ $t('language') }}</label>
                                        <div class="relative">
                                            <select v-model="user.language" @change="changeLanguage(user.language)"
                                                class="form-select">
                                                <option v-for="language in languages" :key="language" :value="language">
                                                    {{ language }}</option>

                                            </select>
                                            <icon-arrow-down
                                                class="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-black" />
                                        </div>
                                    </div>
                                    <div>
                                        <label class="mb-2.5 inline-block text-black">{{ $t('timezone') }}</label>
                                        {{ user.timezone }}
                                        <div class="relative">
                                            <select v-model="user.timezone" class="form-select">
                                                <option v-for="timezone in timezones" :key="timezone" :value="timezone">
                                                    {{ timezone }}</option>
                                            </select>
                                            <icon-arrow-down
                                                class="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-black" />
                                        </div>
                                    </div>
                                </div>
                                <div class="flex gap-4 pb-4">
                                    <div class="size-[50px] shrink-0 overflow-hidden rounded-lg">
                                        <img src="/assets/images/profile.png" alt="User Profile"
                                            class="h-full w-full" />
                                    </div>
                                    <div
                                        class="relative flex grow flex-col items-center justify-center gap-2.5 rounded-lg border-2 border-dashed border-gray-100 px-2 py-6 text-center sm:flex-row sm:text-left">
                                        <input type="file" @change="onFileChange"
                                            class="absolute inset-0 cursor-pointer opacity-0" />
                                        <div class="grid size-[30px] place-content-center rounded-lg shadow-4xl">
                                            <icon-upload class="text-black" />
                                        </div>
                                        <div class="space-y-2 text-xs">
                                            <h3 class="font-semibold text-black">
                                                {{ $t('click_to_upload') }}
                                                <span class="font-normal text-gray"> {{ $t('or_drag_and_drop') }} </span>
                                            </h3>
                                            <p>SVG, PNG or JPG (max. 800x400px)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex w-full flex-col gap-5 py-5 xl:flex-row">
                            <div class="shrink-0 xl:w-[331px]">
                                <h3 class="mb-2.5 font-semibold text-black">{{ $t('profile_details') }}</h3>
                                <p>{{ $t('this_will_be_displayed_on_your_profile') }}</p>
                            </div>
                            <div class="grow space-y-5">
                                <div class="grid gap-x-[30px] gap-y-3.5 sm:grid-cols-2 sm:gap-y-5">
                                    <!-- <div>
                                            <label class="mb-2.5 inline-block text-black"
                                                >Areas of interest</label
                                            >
                                            <div class="relative">
                                                <select class="form-select">
                                                    <option>Singing, learning</option>
                                                    <option>Singing</option>
                                                    <option>Singing, learning</option>
                                                </select>
                                                <icon-arrow-down
                                                    class="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-black"
                                                />
                                            </div>
                                        </div> -->
                                    <!-- <div class="hidden sm:block"></div> -->
                                    <div>
                                        <label class="mb-2.5 inline-block text-black">{{ $t('professions') }}<span
                                                class="text-primary">*</span></label>
                                        <div class="relative">
                                            <select class="form-select" v-model="user.profession_id" required>
                                                <option value="" disabled selected>--select--</option>
                                                <optgroup v-for="(professions, i) in professionList" :key="i"
                                                    :label="professions.category">
                                                    <option v-for="profession in professions.professions"
                                                        :key="profession.id" :value="profession.id">
                                                        {{ profession.title }}
                                                    </option>
                                                </optgroup>
                                            </select>
                                            <icon-arrow-down
                                                class="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-black" />
                                        </div>
                                    </div>
                                    <!-- <div>
                                            <label class="mb-2.5 inline-block text-black">Professions</label>
                                        <div class="relative">
                                            <select class="form-select">
                                                    <option>Ex. software engineer, ect..</option>
                                                    <option>diploma</option>
                                                </select>
                                            <icon-arrow-down class="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-black" />
                                        </div>
                                    </div> -->

                                    <div>
                                        <label class="mb-2.5 inline-block text-black">{{ $t('skills') }} <span
                                                class="text-primary">*</span></label>
                                        <vue-popper class="relative !mx-0 !block w-full !border-x-0 *:w-full"
                                            placement="bottom-end">
                                            <button type="button"
                                                class="flex w-full items-center justify-between gap-2 rounded-md border border-gray-100 p-2 transition hover:opacity-70">
                                                {{ $t('skills') }}
                                                <icon-arrow-down />
                                            </button>
                                            <template #content="{ close }">
                                                <div
                                                    class="z-10 max-h-[200px] w-full overflow-auto rounded-lg bg-white shadow-[0_0_0_1px_rgba(18,43,105,0.08),0_1px_2px_0_rgba(18,43,105,0.08)]">
                                                    <div v-for="(skills, i) in skillList" :key="i">
                                                        <h6 class="bg-gray-200 p-2.5 font-bold">
                                                            {{ skills.category }}
                                                        </h6>
                                                        <div class="relative flex cursor-pointer gap-3 rounded-lg p-2.5 pl-4 transition hover:bg-gray-200"
                                                            v-for="skill in skills.skills" :key="skill.id" @click="
                                                                if (user.skills.includes(skill))
                                                                user.skills = user.skills.filter(
                                                                    (d) => d !== skill,
                                                                );
                                                            else user.skills = [...user.skills, skill];
                                                                close();
                                                                "
                                                            :class="{ 'bg-gray-200': user.skills.includes(skill) }">
                                                            {{ skill.title }}
                                                        </div>
                                                    </div>
                                                </div>
                                            </template>
                                        </vue-popper>
                                        <div class="mt-2.5 flex flex-wrap gap-2">
                                            <!-- {{ user.skills}} -->
                                            <button v-for="(skill, i) in user.skills" :key="i" type="button"
                                                class="flex shrink-0 items-center gap-1.5 rounded-lg bg-gray-500 px-1.5 py-1 ring-1 ring-gray-100 transition hover:opacity-80">
                                                <span class="leading-4">{{ skill.title }}</span>
                                                <span class="leading-4">{{ skill.name }}</span>
                                                <icon-close class="size-4 text-danger"
                                                    @click="user.skills = user.skills.filter((d) => d.id !== skill.id)" />
                                            </button>
                                        </div>
                                    </div>
                                    <div class="sm:col-span-2">
                                        <label class="mb-2.5 inline-block text-black">{{ $t('bio') }}</label>
                                        <textarea v-model="user.bio" :placeholder="$t('bio')" rows="5"
                                            class="form-textarea resize-none"></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="w-full py-5">
                            <h3 class="mb-5 font-semibold text-black">{{ $t('profile_details') }}</h3>
                            <div>
                                <label class="flex shrink-0 gap-2 text-black">
                                    <input v-model="user.newsletter_subscribed" type="checkbox"
                                        class="peer form-checkbox m-0.5 size-3" />
                                    <span class="peer-checked:text-black">{{ $t('manage_newsletter_preferences')
                                        }}</span>
                                </label>
                            </div>
                        </div>
                        <div class="flex justify-end gap-4 pt-5">
                            <button type="button" class="btn btn-linear">{{ $t('cancel') }}</button>
                            <button class="btn" :disabled="isSubmitting">
                                <div class="flex items-center justify-center" v-if="isSubmitting">
                                    <span class="spinner"></span>
                                    {{ $t('loading') }}
                                </div>
                                <span v-else> {{ $t('update_profile') }}</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </form>
</template>

<script setup>
import { reactive, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { mapGetters } from 'vuex';

const i18n = reactive(useI18n());

const changeLanguage = (e) => {
    const language = e === 'turkish' ? 'tr' : 'en';
    i18n.locale = language;
    localStorage.setItem('i18n_locale', language);
};

</script>
<script>
import IconUpload from '@/components/icon/icon-upload.vue';
import IconVerify from '@/components/icon/icon-verify.vue';
import IconArrowDown from '@/components/icon/icon-arrow-down.vue';
import IconClose from '@/components/icon/icon-close.vue';
// import userService from '@/services/userService';
import axios from 'axios';
import { mapGetters } from 'vuex';
export default {
    components: {
        IconUpload,
        IconVerify,
        IconArrowDown,
        IconClose,
    },
    data() {
        return {
            isSubmitting: false,
            formError: '',
            avatar: null,
            avatarUrl: null,
        };
    },
    computed: {
        ...mapGetters(['skillList', 'professionList', 'languages', 'timezones']),
        user() {
            return this.$store.getters.user;
        },
    },
    watch: {
        'user.language': function (newVal) {
            this.changeTimezone(newVal)
        },
    },
    created() {
        this.changeInitialTimezone();
    },
    methods: {
        onFileChange(event) {
            const file = event.target.files[0];
            if (file) {
                this.user.avatar = file;
                this.user.avatarUrl = URL.createObjectURL(file);
            }
        },
        changeTimezone(lang) {
            const languageCode = lang === 'turkish' ? 'tr' : 'en';
            if (languageCode === 'tr') {
                const zoneName = this.timezones.filter(tz => tz.startsWith('Europe/Istanbul'));
                this.user.timezone = zoneName[0]
                localStorage.setItem('time_zone', zoneName[0]);
            } else {
                const zoneName = this.timezones.filter(tz => tz.startsWith('UTC'));
                this.user.timezone = zoneName[0]
                localStorage.setItem('time_zone', zoneName[0]);
            }
        },
        changeInitialTimezone() {
            const lastTimeZone = this.user.timezone ? this.user.timezone : null;
            if (lastTimeZone) {
                this.user.timezone = lastTimeZone;
            } else {
                const languageCode = localStorage.getItem('i18n_locale');
                if (languageCode === 'tr') {
                    const zoneName = this.timezones.filter(tz => tz.startsWith('Europe/Istanbul'));
                    this.user.timezone = zoneName[0];
                } else {
                    const zoneName = this.timezones.filter(tz => tz.startsWith('UTC'));
                    this.user.timezone = zoneName[0];
                }
            }

        },
        async updateProfile() {
            this.isSubmitting = false;
            const formData = new FormData();
            formData.append('first_name', this.user.first_name);
            formData.append('last_name', this.user.last_name);
            // formData.append('email', this.user.email);
            // formData.append('password', this.user.password);
            // formData.append('password_confirmation', this.user.password_confirmation);
            formData.append('phone', this.user.phone);
            formData.append('timezone', this.user.timezone);
            if (this.user.avatar) {
                formData.append('avatar', this.user.avatar);
            }
            formData.append('newsletter_subscribed', this.user.newsletter_subscribed);
            formData.append('language', this.user.language);
            this.user.skills.forEach((skill, i) => formData.append(`skills[${i}]`, skill.id));
            formData.append('profession_id', this.user.profession_id);
            formData.append('bio', this.user.bio);
            //return true;
            try {
                const response = await axios.post('/profile', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
                this.profile = response.data.data;
                if (this.profile?.avatar) {
                    this.user.avatar = this.profile.avatar;
                }
                this.$toastr.success('Profile Updated successfully');
            } catch (error) {
                this.error = 'Failed to load users';
                this.$toastr.error('Error fetching users:', error);
                console.error('Error fetching users:', error);
            }
            this.isSubmitting = false;
        },
    },
};
</script>

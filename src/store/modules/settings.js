import i18n from '@/i18n';
import axios from 'axios';

const state = {
    professionList: [""],
    skillList:[""],
    user_skills:[],
    forum_tags:[],
    languages: [],
    timezones: []
};

const actions = {
    async getSettingData({ commit }) {
        const { data } = await axios.get(`/data?language=${i18n.global.locale.value === 'en' ? 'english' : 'turkish'}`);
        commit("SET_PROFESSION_LIST",data.data.professions);
        commit("SET_SKILL_LIST",data.data.skills);
        commit("SET_FORUM_TAGS",data.data.forum_tags);
        commit("SET_USER_SKILLS",data.data.user_skills);
        commit("SET_USER_LANGUAGES",data.data.languages);
        commit("SET_USER_TIMEZONES",data.data.timezones);
    },
};

const mutations = {
    SET_PROFESSION_LIST(state, list) {
        state.professionList = list;
    },
    SET_SKILL_LIST(state, list) {
        state.skillList = list;
    },
    SET_FORUM_TAGS(state, tags) {
        state.forum_tags = tags;
    },
    SET_USER_SKILLS(state, skills) {
        state.user_skills = skills;
    },
    SET_USER_LANGUAGES(state, languages) {
        state.languages = languages;
    },
    SET_USER_TIMEZONES(state, timezones) {
        state.timezones = timezones;
    },
};

const getters = {
    professionList: state => state.professionList,
    skillList: state => state.skillList,
    user_skills: state => state.user_skills,
    forum_tags: state => state.forum_tags,
    languages: state => state.languages,
    timezones: state => state.timezones,
};

export default {
    state,
    actions,
    mutations,
    getters,
};

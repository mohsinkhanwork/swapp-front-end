const state={
    user:null,
    isLoggedIn:false,
}

const actions={
    login({commit},user){
        commit('SET_USER',{user,status:true})
    },
    setUserWithoutAuth({commit},user){
        commit('SET_USER',{user,status:false})
    },
    logout({commit}){
        commit('SET_USER',{user:null,status:false});
    }
}

const mutations={
    'SET_USER' (state,payload){
        state.user=payload.user
        state.isLoggedIn=payload.status
    },
}

const getters={
    user:state=>{
        return state.user
    },
    isLoggedIn:state=>{
        return state.isLoggedIn
    },
}

export default {
    state,
    actions,
    mutations,
    getters
}

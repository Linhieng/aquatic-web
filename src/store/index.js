import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    isLogin:false
  },
  
  getters:{
    // getToken(state){
    //     if(!state.token){
    //         state.token=token
    //         localStorage.token = token
    //     }
    // }
    isLogin:state => state.isLogin
  },

  mutations: {
    // 修改token，并将token存入localStorage
    userStatus(state,flag){
        state.isLogin = flag
    }
  },
  actions: {
    userLogin({commit},flag){
        commit("userStatus",flag)
    }
  }
});

export default store;
import { createStore } from 'vuex'

export default createStore({
  state: {
    isLogin: false
  },
  mutations: {
    changeLogin(state, status) {
      state.isLogin = status
    }
  },
  actions: {
  },
  modules: {
  }
})

import Vue from 'vue'
import Vuex from 'vuex'
import profile from './collaborator-management'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchForm: '',
    totalFound: 0
  },
  mutations: {
    setSearchForm(state, payload) {
      state.searchForm = payload
    },
    setTotalFound(state, payload) {
      state.totalFound = payload;
    }
  },
  actions: {
  },
  modules: {
    profile
  }
})

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    meditationType: 0
  },
  mutations: {
    setType: (state) => state.meditationType = 7,
  },
  actions: {
  },
  modules: {
  }
})

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  getters: {
    myCount: state => {
      return `my state is ${state.count}`
    },
    whoCount: state => who => {
      return `${who} state is ${state.count}`
    }
  }
})

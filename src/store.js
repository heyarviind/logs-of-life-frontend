import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    logs: []
  },
  mutations: {
    ADD_LOG(state, log) {
      state.logs.unshift(log)
    },
    SET_LOGS(state, logs) {
      console.log(logs)
      state.logs = logs
    }
  },
  actions: {
    addLog({
      commit
    }, log) {
      commit('ADD_LOG', log)
    },
    setLogs({
      commit
    }, logs) {
      commit('SET_LOGS', logs)
    }
  }
})
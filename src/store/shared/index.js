export default {
  state: {
    textoPesquisa: '',
    sidebar: false
  },
  mutations: {
    setTextoPesquisa: (state, payload) => {
      state.textoPesquisa = payload
    },
    setSidebar: (state, payload) => {
      state.sidebar = payload
    }
  },
  actions: {
    setTextoPesquisa: function ({ commit, state }, payload) {
      commit('setTextoPesquisa', '')
    }
  },
  getters: {
    sidebar (state) {
      return state.sidebar
    }
  }
}

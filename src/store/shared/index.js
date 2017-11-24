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
    pesquisar: function ({ commit, state }, payload) {
      this.dispatch(payload.action, payload.search)
    },
    remover: function ({ commit, state }, payload) {
      this.dispatch(payload.action, payload.id)
    },
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

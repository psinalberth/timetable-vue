export default {
  state: {
    textoPesquisa: ''
  },
  mutations: {
    FILTER_LIST: (state, payload) => {
      state.filteredList = payload
    },
    setTextoPesquisa: (state, payload) => {
      state.textoPesquisa = payload
    }
  },
  actions: {
    pesquisar: function ({ commit, state }, payload) {
      this.dispatch(payload.action, payload.search)
    },
    remover: function ({ commit, state }, payload) {
      this.dispatch(payload.action, payload.id)
    },
    SET_PESQUISA: function ({ commit, state }, payload) {
      commit('SET_TEXTO_PESQUISA', null)
    }
  },
  getters: {}
}

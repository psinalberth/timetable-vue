export default {
  state: {
    filteredList: [],
    textoPesquisa: ''
  },
  mutations: {
    FILTER_LIST: (state, payload) => {
      state.filteredList = payload
    },
    SET_TEXTO_PESQUISA: (state, payload) => {
      state.textoPesquisa = payload
    }
  },
  actions: {
    SET_TEXTO_PESQUISA: function ({ commit, state }, payload) {
      this.dispatch(payload.action, payload.search)
    }
  },
  getters: {}
}

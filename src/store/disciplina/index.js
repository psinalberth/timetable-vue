import Http from '@/services/shared/Http'

export default {
  state: {
    disciplinas: [],
    disciplina: {},
    filteredList: []
  },
  mutations: {
    SET_ALL_DISCIPLINAS: (state, payload) => {
      state.disciplinas = payload
    },
    SET_FILTERED_LIST: (state, payload) => {
      state.filteredList = payload
    }
  },
  actions: {
    LOAD_ALL_DISCIPLINAS: function ({ commit }) {
      Http.get('disciplinas/').then((response) => {
        commit('SET_ALL_DISCIPLINAS', response.data)
      }, (err) => {
        console.log(err)
      })
    },
    SAVE_DISCIPLINA: function ({ commit }, disciplina) {
      console.log(disciplina)
    },
    FILTRAR_DISCIPLINAS: function ({ commit, state }, textoPesquisa) {
      let list = state.disciplinas.filter((disciplina) => {
        return disciplina.descricao.toUpperCase().indexOf(textoPesquisa.toUpperCase()) > -1
      })
      commit('SET_FILTERED_LIST', list)
    }
  },
  getters: {
    disciplinas (state) {
      if (state.filteredList.length > 0 || (state.textoPesquisa && state.textoPesquisa !== '')) {
        return state.filteredList
      }
      return state.disciplinas
    }
  }
}

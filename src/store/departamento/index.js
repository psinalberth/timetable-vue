import Http from '@/services/shared/Http'

export default {
  state: {
    departamentos: [],
    departamento: {},
    filteredList: []
  },
  mutations: {
    SET_ALL_DEPARTAMENTOS: (state, payload) => {
      state.departamentos = payload
    },
    SET_FILTERED_LIST: (state, payload) => {
      state.filteredList = payload
    }
  },
  actions: {
    LOAD_ALL_DEPARTAMENTOS: function ({ commit }) {
      Http.get('departamentos/').then((response) => {
        commit('SET_ALL_DEPARTAMENTOS', response.data)
      }, (err) => {
        console.log(err)
      })
    },
    SAVE_DISCIPLINA: function ({ commit }, disciplina) {
      console.log(disciplina)
    },
    FILTRAR_DEPARTAMENTOS: function ({ commit, state }, textoPesquisa) {
      let list = state.departamentos.filter((departamento) => {
        return departamento.nome.toUpperCase().indexOf(textoPesquisa.toUpperCase()) > -1
      })
      commit('SET_FILTERED_LIST', list)
    }
  },
  getters: {
    departamentos (state) {
      if (state.filteredList.length > 0 || (state.textoPesquisa && state.textoPesquisa !== '')) {
        return state.filteredList
      }
      return state.departamentos
    }
  }
}

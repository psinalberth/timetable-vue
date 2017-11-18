import Http from '@/services/shared/Http'

export default {
  state: {
    disciplinas: [],
    disciplina: {},
    disciplinasFiltradas: [],
    uri: 'disciplinas/'
  },
  mutations: {
    setDisciplinas: (state, payload) => {
      state.disciplinas = payload
    },
    setDisciplinasFiltradas: (state, payload) => {
      state.disciplinasFiltradas = payload
    },
    salvarDisciplina: (state, payload) => {
      state.disciplinas.push(payload)
    }
  },
  actions: {
    carregarDisciplinas: function ({ state, commit }) {
      Http.get(state.uri).then(response => response.data).then(disciplinas => {
        disciplinas.sort((d1, d2) => {
          if (d1.descricao > d2.descricao) {
            return 1
          } else if (d1.descricao < d2.descricao) {
            return -1
          } else {
            return 0
          }
        })
        commit('setDisciplinas', disciplinas)
      })
    },
    salvarDisciplina: function ({ state, commit }, disciplina) {
      if (!disciplina.id) {
        Http.post(state.uri, disciplina)
        commit('salvarDisciplina', disciplina)
      } else {
        Http.put(state.uri, disciplina)
      }
    },
    filtrarDisciplinas: function ({ commit, state }, textoPesquisa) {
      if (textoPesquisa !== null && textoPesquisa !== '') {
        let list = state.disciplinas.filter((disciplina) => {
          return disciplina.descricao.toUpperCase().indexOf(textoPesquisa.toUpperCase()) > -1
        })
        commit('setDisciplinasFiltradas', list)
      } else {
        this.dispatch('carregarDisciplinas')
        commit('setDisciplinasFiltradas', [])
      }
    },
    removerDisciplina: function ({ state }, id) {
      Http.delete(`${state.uri}/${id}`)
      this.dispatch('carregarDisciplinas')
    }
  },
  getters: {
    disciplinas (state) {
      if ((state.disciplinasFiltradas !== null && state.disciplinasFiltradas.length > 0) || (state.textoPesquisa != null && state.textoPesquisa !== '')) {
        return state.disciplinasFiltradas
      }

      return state.disciplinas
    }
  }
}

import Http from '@/services/shared/Http'

export default {
  state: {
    disciplinas: [],
    disciplina: {
      codigo: '',
      sigla: '',
      descricao: ''
    },
    disciplinasFiltradas: [],
    codigoDisponivel: true,
    uri: 'disciplinas/'
  },
  mutations: {
    setDisciplina: (state, payload) => {
      state.disciplina = payload
    },
    setCodigoDisponivel: (state, payload) => {
      state.codigoDisponivel = payload
    },
    setDisciplinas: (state, payload) => {
      state.disciplinas = payload
    },
    setDisciplinasFiltradas: (state, payload) => {
      state.disciplinasFiltradas = payload
    },
    salvarDisciplina: (state, payload) => {
      state.disciplinas.push(payload)
    },
    removerDisciplina: (state, payload) => {
      const disciplina = state.disciplinas.find(disciplina => {
        return disciplina.id === payload
      })
      state.disciplinas.splice(state.disciplinas.indexOf(disciplina), 1)
      state.disciplinasFiltradas.splice(state.disciplinasFiltradas.indexOf(disciplina), 1)
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
      .catch(error => {
        console.log(error)
      })
    },
    salvarDisciplina: function ({ state, commit }, disciplina) {
      if (!disciplina.id) {
        Http.post(state.uri, disciplina)
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })
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
    removerDisciplina: function ({ state, commit }, id) {
      Http.delete(`${state.uri}/${id}`).then(() => {
        commit('removerDisciplina', id)
        this.dispatch('carregarDisciplinas')
      })
      .catch(error => {
        console.log(error.response)
      })
    },
    findByCodigo: function ({ state, commit }, payload) {
      Http.get(`${state.uri}${payload.id}/disponivel/${payload.codigo}`)
      .then(response => response.data)
      .then(codigoDisponivel => {
        commit('setCodigoDisponivel', codigoDisponivel)
      })
    }
  },
  getters: {
    disciplinas (state) {
      if ((state.disciplinasFiltradas !== null && state.disciplinasFiltradas.length > 0) || (state.textoPesquisa != null && state.textoPesquisa !== '')) {
        return state.disciplinasFiltradas
      }

      return state.disciplinas
    },
    disciplina (state) {
      return state.disciplina
    },
    codigoDisponivel (state) {
      return state.codigoDisponivel
    }
  }
}

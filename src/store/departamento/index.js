import Http from '@/services/shared/Http'

export default {
  state: {
    uri: 'departamentos/',
    departamentos: [],
    departamento: {
      id: 0,
      codigo: '',
      nome: '',
      descricao: ''
    },
    departamentosFiltrados: []
  },
  mutations: {
    setDepartamentos: (state, payload) => {
      state.departamentos = payload
    },
    setDepartamentosFiltrados: (state, payload) => {
      state.departamentosFiltrados = payload
    },
    salvarDepartamento: (state, payload) => {
      state.departamentos.push(payload)
    },
    setDepartamento: (state, payload) => {
      state.departamento = payload
    }
  },
  actions: {
    carregarDepartamentos: function ({ commit }) {
      Http.get('departamentos/').then((response) => {
        commit('setDepartamentos', response.data)
      }, (err) => {
        console.log(err)
      })
    },
    filtrarDepartamentos: function ({ commit, state }, textoPesquisa) {
      let list = state.departamentos.filter((departamento) => {
        return departamento.nome.toUpperCase().indexOf(textoPesquisa.toUpperCase()) > -1
      })
      commit('setDepartamentosFiltrados', list)
    },
    salvarDepartamento: function ({ state, commit }, departamento) {
      commit('salvarDepartamento', departamento)
    }
  },
  getters: {
    departamentos (state) {
      if (state.departamentosFiltrados.length > 0 || (state.textoPesquisa && state.textoPesquisa !== '')) {
        return state.departamentosFiltrados
      }
      return state.departamentos
    },
    departamento (state) {
      return state.departamento
    }
  }
}

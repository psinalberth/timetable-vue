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
    },
    removerDepartamento: (state, payload) => {
      state.departamentos.splice(state.departamentos.indexOf(payload), 1)
    }
  },
  actions: {
    listarDepartamentos: function ({ state, commit }) {
      Http.get(state.uri)
      .then(response => response.data)
      .then(departamentos => {
        departamentos.sort((d1, d2) => {
          if (d1.nome > d2.nome) return 1
          else if (d1.nome < d2.nome) return -1
          else return 0
        })
        commit('setDepartamentos', departamentos)
      })
    },
    listarDepartamento: function ({ state, commit }, id) {
      const departamento = state.departamentos.find(departamento => {
        return departamento.id === id
      })
      commit('setDepartamento', departamento)
    },
    filtrarDepartamentos: function ({ state, commit }, textoPesquisa) {
      let list = state.departamentos.filter((departamento) => {
        return departamento.nome.toUpperCase().indexOf(textoPesquisa.toUpperCase()) > -1
      })
      commit('setDepartamentosFiltrados', list)
    },
    salvarDepartamento: function ({ state, commit }, departamento) {
      if (departamento.id === 0 || !departamento.id) {
        Http.post(state.uri, departamento)
        .then(response => {
          const departamento = ''
          commit('salvarDepartamento', departamento)
        })
        .catch(error => {
          console.log(error)
        })
      } else {
        Http.put(state.uri, departamento)
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })
      }
    },
    removerDepartamento: function ({ state, commit }, id) {
      Http.delete(`${state.uri}${id}`)
      .then(response => {
        const departamento = this.dispatch('listarDepartamento', id)
        commit('removerDepartamento', departamento)
      })
      .catch(error => {
        console.log(error)
      })
    }
  },
  getters: {
    departamentos (state) {
      if (state.textoPesquisa && state.textoPesquisa !== '') return state.departamentosFiltrados
      if (state.departamentosFiltrados.length > 0 && state.textoPesquisa !== '') {
        return state.departamentosFiltrados
      }
      return state.departamentos
    },
    departamento (state) {
      return state.departamento
    }
  }
}

import Http from '@/services/shared/Http'

export default {
  state: {
    uri: 'professores/',
    professores: [],
    professor: {
      id: 0,
      nome: '',
      categoria: {},
      departamento: {},
      disciplinasLecionaveis: [],
      horariosIndisponiveis: []
    }
  },
  mutations: {
    setProfessor (state, payload) {
      state.professor = payload
    },
    setProfessores (state, payload) {
      state.professores = payload
    },
    salvarProfessor (state, payload) {}
  },
  actions: {
    listarProfessores ({ state, commit }) {
      Http.get(state.uri)
      .then(response => response.data)
      .then(professores => {
        professores.sort((p1, p2) => {
          if (p1.nome > p2.nome) return 1
          else if (p1.nome < p2.nome) return -1
          else return 0
        })
        commit('setProfessores', professores)
      })
      .catch(error => console.log(error))
    }
  },
  getters: {
    professores (state) {
      return state.professores
    }
  }
}

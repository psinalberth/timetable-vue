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
    setDisciplinasLecionaveis (state, payload) {
      state.professor.disciplinasLecionaveis = payload
    },
    salvarProfessor (state, payload) {},
    removerProfessor (state, payload) {}
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
    },
    listarDisciplinasProfessor ({ state, commit }, id) {
      Http.get(`${state.uri}${id}/disciplinas`)
      .then(response => response.data)
      .then(disciplinasLecionaveis => {
        disciplinasLecionaveis.sort((d1, d2) => {
          if (d1.descricao > d2.descricao) return 1
          else if (d1.descricao < d2.descricao) return -1
          else return 0
        })
        commit('setDisciplinasLecionaveis', disciplinasLecionaveis)
      })
      .catch(error => console.log(error))
    }
  },
  getters: {
    professores (state) {
      return state.professores
    },
    professor (state) {
      return state.professor
    },
    disciplinasLecionaveis (state) {
      return state.professor.disciplinasLecionaveis
    }
  }
}

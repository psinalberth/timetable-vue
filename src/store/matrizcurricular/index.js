import Http from '@/services/shared/Http'

export default {
  state: {
    uri: 'matrizes/',
    matriz: {
      id: 0,
      ano: '',
      curso: {},
      turno: {},
      semestres: '',
      periodos: []
    },
    periodo: {
      id: 0,
      codigo: '',
      matriz: {},
      detalhes: []
    },
    detalhe: {
      id: 0,
      cargaHoraria: '',
      disciplina: {},
      periodo: {},
      obrigatoria: true,
      preRequisitos: []
    },
    matrizes: []
  },
  mutations: {
    setMatrizesCurriculares: (state, payload) => {
      state.matrizes = payload
    },
    setDetalheDisciplina: (state, payload) => {
      state.detalhe = payload
    }
  },
  actions: {
    listarMatrizesCurriculares: function ({ state, commit }) {
      Http.get(state.uri)
      .then(response => response.data)
      .then(matrizes => {
        commit('setMatrizesCurriculares', matrizes)
        console.log(matrizes)
      })
    },
    listarDetalhe: function ({ state, commit }, payload) {
      Http.get(`${state.uri}${payload.matriz}/periodos/${payload.periodo}/detalhes/${payload.detalhe}`)
      .then(response => commit('setDetalheDisciplina', response.data))
      .catch(error => console.log(error))
    }
  },
  getters: {
    matrizes (state) {
      return state.matrizes
    },
    detalheDisciplina (state) {
      return state.detalhe
    }
  }
}

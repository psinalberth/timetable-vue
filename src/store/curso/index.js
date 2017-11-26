import Http from '@/services/shared/Http'

export default {
  state: {
    uri: 'cursos/',
    cursos: [],
    curso: {
      id: 0,
      codigo: '',
      nome: '',
      descricao: '',
      departamento: {}
    }
  },
  mutations: {
    setCurso: (state, payload) => {
      state.curso = payload
    },
    setCursos: (state, payload) => {
      state.cursos = payload
    },
    salvarCurso: (state, payload) => {
      state.cursos.push(payload)
    },
    removerCurso: (state, payload) => {
      state.cursos.splice(state.cursos.indexOf(payload), 1)
    }
  },
  actions: {
    listarCurso ({ state, commit }, id) {
      const curso = state.cursos.find(curso => {
        return curso.id === id
      })
      commit('setCurso', curso)
    },
    listarCursos ({ state, commit }) {
      Http.get(state.uri)
      .then(response => response.data)
      .then(cursos => {
        cursos.sort((c1, c2) => {
          if (c1.nome > c2.nome) return 1
          else if (c1.nome < c2.nome) return -1
          else return 0
        })
        commit('setCursos', cursos)
      })
      .catch(error => {
        console.log(error)
      })
    },
    salvarCurso ({ state, commit }, curso) {
      if (!curso.id || curso.id === 0) {
        Http.post(state.uri, curso)
        .then(response => commit('salvarCurso', curso))
        .catch(error => {
          console.log(error)
        })
      } else {
        Http.put(state.uri, curso)
        .catch(error => {
          console.log(error)
        })
      }
    },
    removerCurso ({ state, commit }, id) {
      Http.delete(`${state.uri}${id}`)
      .then(() => {
        const curso = this.dispatch('listarCurso', id)
        commit('removerCurso', curso)
      })
      .catch(error => {
        console.log(error)
      })
    }
  },
  getters: {
    cursos (state) {
      return state.cursos
    },
    curso (state) {
      return state.curso
    }
  }
}

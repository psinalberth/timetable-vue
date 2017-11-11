import Vue from 'vue'
import Vuex from 'vuex'
import Http from '@/services/shared/Http'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    disciplina: {},
    disciplinas: [],
    filteredList: [],
    textoPesquisa: ''
  },
  mutations: {
    SET_ALL_DISCIPLINAS: (state, payload) => {
      state.disciplinas = payload
    },
    FILTER_LIST: (state, payload) => {
      state.filteredList = payload
    },
    SET_TEXTO_PESQUISA: (state, payload) => {
      state.textoPesquisa = payload
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
    DELETE_DISCIPLINA: function ({ commit }, id) {},
    SET_TEXTO_PESQUISA: function ({ commit, state, actions }, textoPesquisa) {
      store.dispatch('LOAD_ALL_DISCIPLINAS')
      commit('SET_TEXTO_PESQUISA', textoPesquisa)
      let temp = state.disciplinas.filter((disciplina) => { return disciplina.descricao.toUpperCase().indexOf(textoPesquisa.toUpperCase()) > -1 })
      commit('FILTER_LIST', temp)
    }
  },
  getters: {
    disciplinas (state) {
      if (state.filteredList.length > 0 || state.textoPesquisa !== '') {
        return state.filteredList
      }
      return state.disciplinas
    }
  }
})

import Vue from 'vue'
import Vuex from 'vuex'

import disciplina from './disciplina'
import departamento from './departamento'
import shared from './shared'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    disciplina: disciplina,
    departamento: departamento,
    shared: shared
  }
})

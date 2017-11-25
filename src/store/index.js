import Vue from 'vue'
import Vuex from 'vuex'

import curso from './curso'
import disciplina from './disciplina'
import departamento from './departamento'
import professor from './professor'
import shared from './shared'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    curso: curso,
    disciplina: disciplina,
    departamento: departamento,
    professor: professor,
    shared: shared
  }
})

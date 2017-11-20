import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'

const meta = require('./route-meta.json')
const name = require('./route-names.json')

function routeTo (path, source, component) {
  return {
    path: path,
    name: name[path].name,
    meta: meta[path],
    component: () => import(`@/components/${source}/${component}`),
    props: true
  }
}

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    routeTo('/disciplinas', 'Disciplina', 'Disciplinas'),
    routeTo('/disciplinas/:id', 'Disciplina', 'Disciplina'),
    routeTo('/professores', 'Professor', 'Professores'),
    routeTo('/professores/:id', 'Professor', 'Professor'),
    routeTo('/cursos', 'Curso', 'Cursos'),
    routeTo('/cursos/:id', 'Curso', 'Curso'),
    routeTo('/departamentos', 'Departamento', 'Departamentos'),
    routeTo('/departamentos/:id', 'Departamento', 'Departamento'),
    routeTo('/matrizes', 'MatrizCurricular', 'MatrizesCurriculares'),
    routeTo('/matrizes/:id', 'MatrizCurricular', 'MatrizCurricular'),
    routeTo('/matrizes/:id/periodos', 'MatrizCurricular', 'Periodos'),
    routeTo('/matrizes/:matriz/periodos/:periodo/detalhes', 'MatrizCurricular', 'DetalhesDisciplinas'),
    routeTo('/matrizes/:matriz/periodos/:periodo/detalhes/:detalhe', 'MatrizCurricular', 'DetalheDisciplina'),
    { path: '/', component: Home, name: 'Home', meta: { home: true } },
    { path: '*', redirect: '/' }
  ]
})

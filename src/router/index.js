import Vue from 'vue'
import Vuelidate from 'vuelidate'
import Router from 'vue-router'
import Home from '@/components/Home'
import Disciplinas from '@/components/Disciplina/Disciplinas'
import Disciplina from '@/components/Disciplina/Disciplina'
import Navegacao from '@/components/Shared/Navegacao'
import Professor from '@/components/Professor/Professor'
import Professores from '@/components/Professor/Professores'
import Cursos from '@/components/Curso/Cursos'
import Curso from '@/components/Curso/Curso'
import Departamentos from '@/components/Departamento/Departamentos'
import Departamento from '@/components/Departamento/Departamento'
import Horario from '@/components/Horario/Horario'
import Sala from '@/components/Sala/Sala'
import MatrizesCurriculares from '@/components/MatrizCurricular/MatrizesCurriculares'
import MatrizCurricular from '@/components/MatrizCurricular/MatrizCurricular'
import Periodos from '@/components/MatrizCurricular/Periodos'
import DetalhesDisciplinas from '@/components/MatrizCurricular/DetalhesDisciplinas'

Vue.use(Router)
Vue.use(Vuelidate)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'Home', component: Home, meta: { home: true } },
    { path: '/disciplinas', name: 'listar-disciplinas', component: Disciplinas, meta: { list: true } },
    { path: '/disciplina/:id', name: 'editar-disciplina', component: Disciplina, meta: { form: true } },
    { path: '/navegacao', name: 'navegacao', component: Navegacao },
    { path: '/disciplina/adicionar', name: 'nova-disciplina', component: Disciplina, meta: { form: true } },
    { path: '/professores', name: 'listar-professores', component: Professores, meta: { list: true } },
    { path: '/professores/:id', name: 'editar-professor', component: Professor, meta: { form: true } },
    { path: '/cursos', name: 'listar-cursos', component: Cursos, meta: { list: true } },
    { path: '/cursos/:id', name: 'editar-curso', component: Curso, meta: { form: true } },
    { path: '/departamentos', name: 'listar-departamentos', component: Departamentos, meta: { list: true } },
    { path: '/departamentos/:id', name: 'editar-departamento', component: Departamento, meta: { form: true } },
    { path: '/horarios', name: 'novo-horario', component: Horario },
    { path: '/salas', name: 'nova-sala', component: Sala },
    { path: '/matrizes', name: 'listar-matrizes', component: MatrizesCurriculares, meta: { list: true } },
    { path: '/matrizes/:id', name: 'editar-matriz', component: MatrizCurricular, meta: { form: true } },
    { path: '/matrizes/:id/periodos', name: 'listar-periodos', component: Periodos, meta: { list: true } },
    {
      path: '/matrizes/:matriz/periodos/:periodo/detalhes',
      name: 'listar-detalhes',
      component: DetalhesDisciplinas }
  ]
})

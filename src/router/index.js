import Vue from 'vue'
import Vuelidate from 'vuelidate'
import Router from 'vue-router'
import Home from '@/components/Home'
import Disciplinas from '@/components/Disciplina/Disciplinas'
import Disciplina from '@/components/Disciplina/Disciplina'
import Navegacao from '@/components/Navegacao'
import Professor from '@/components/Professor/Professor'
import Professores from '@/components/Professor/Professores'
import Cursos from '@/components/Curso/Cursos'
import Curso from '@/components/Curso/Curso'
import Departamento from '@/components/Departamento/Departamento'
import Horario from '@/components/Horario/Horario'
import Sala from '@/components/Sala/Sala'
import MatrizesCurriculares from '@/components/MatrizCurricular/MatrizesCurriculares'
import MatrizCurricular from '@/components/MatrizCurricular/MatrizCurricular'

Vue.use(Router)
Vue.use(Vuelidate)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/disciplinas', name: 'disciplina-list', component: Disciplinas },
    { path: '/disciplina/:id', name: 'disciplina-detalhe', component: Disciplina },
    { path: '/navegacao', name: 'navegacao', component: Navegacao },
    { path: '/disciplina/adicionar', name: 'nova-disciplina', component: Disciplina },
    { path: '/professores', name: 'listar-professores', component: Professores },
    { path: '/professores/:id', name: 'novo-professor', component: Professor },
    { path: '/cursos', name: 'listar-cursos', component: Cursos },
    { path: '/cursos/:id', name: 'editar-curso', component: Curso },
    { path: '/departamentos', name: 'novo-departamento', component: Departamento },
    { path: '/horarios', name: 'novo-horario', component: Horario },
    { path: '/salas', name: 'nova-sala', component: Sala },
    { path: '/matrizes', name: 'listar-matrizes', component: MatrizesCurriculares },
    { path: '/matrizes/:id', name: 'editar-matriz', component: MatrizCurricular }
  ]
})

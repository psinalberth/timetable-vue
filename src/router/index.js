import Vue from 'vue'
import Vuelidate from 'vuelidate'
import Router from 'vue-router'
import Home from '@/components/Home'
import DisciplinaList from '@/components/disciplina-list/DisciplinaList'
import DisciplinaDetail from '@/components/disciplina-detail/DisciplinaDetail'
import Navegacao from '@/components/Navegacao'

Vue.use(Router)
Vue.use(Vuelidate)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/disciplina',
      name: 'disciplina-list',
      component: DisciplinaList
    },
    {
      path: '/disciplina/:id',
      name: 'disciplina-detalhe',
      component: DisciplinaDetail
    },
    {
      path: '/navegacao',
      name: 'navegacao',
      component: Navegacao
    },
    {
      path: '/disciplina/adicionar',
      name: 'nova-disciplina',
      component: DisciplinaDetail
    }
  ]
})

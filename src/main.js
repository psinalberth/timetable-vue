// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import router from './router'
import DisciplinaDetail from './components/disciplina/DisciplinaDetail'

Vue.config.productionTip = false

Vue.use(Vuetify)
Vue.component('disciplina-detalhe', DisciplinaDetail)

import('../node_modules/vuetify/dist/vuetify.min.js')
import('../node_modules/vuetify/dist/vuetify.min.css')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

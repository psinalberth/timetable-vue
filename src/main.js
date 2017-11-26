// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import router from './router'
import { store } from './store'
import DeleteModal from '@/components/Shared/DeleteModal'
Vue.config.productionTip = false

Vue.use(Vuetify)

Vue.component('v-modal', DeleteModal)

import('../node_modules/vuetify/dist/vuetify.min.js')
import('../node_modules/vuetify/dist/vuetify.min.css')
import('../node_modules/line-awesome/dist/css/line-awesome.css')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

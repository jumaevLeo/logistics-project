import '@/assets/styles/main.scss'

import Vue from 'vue'
import App from './App.vue'
import store from './store'

import platon from '@realsoft/platon-core/dist/platon'
import {SERVER_ENDPOINT} from "@realsoft/platon-core/src/const";

import router from './router'

Vue.use(platon, {
  store,
  router,
  axiosOptions: {
    baseURL: SERVER_ENDPOINT,
  }
})

import PlatonUI from 'platon-ui'
Vue.use(PlatonUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

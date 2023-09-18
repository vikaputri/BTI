import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { VBToggle } from 'bootstrap-vue'
Vue.directive('b-toggle', VBToggle)

import { BCollapse } from 'bootstrap-vue'
Vue.component('b-collapse', BCollapse)

import { BButton } from 'bootstrap-vue'
Vue.component('b-button', BButton)

import { BCard } from 'bootstrap-vue'
Vue.component('b-card', BCard)

Vue.config.productionTip = false

new Vue({
  BootstrapVue,
  router,
  render: h => h(App)
}).$mount('#app')

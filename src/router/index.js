import Vue from 'vue'
import VueRouter from 'vue-router'
import ListJob from '../views/ListJob.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'joblist',
    component: ListJob
  },
  {
    path: '/soal1',
    name: 'css',
    component: () => import(/* webpackChunkName: "about" */ '../views/CSS.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

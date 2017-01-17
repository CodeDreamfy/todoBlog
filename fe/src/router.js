import Vue from 'vue'
import VueRouter from 'vue-router'

import index from './App'
import error from './components/error'

Vue.use(VueRouter);

const routes = [
  { path: '/', component: index},
  { path: '*', component: error}
]

const router = new VueRouter({
  // mode: 'history',
	routes
})

export default router

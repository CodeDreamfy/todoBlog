import Vue from 'vue'
import VueRouter from 'vue-router'

import index from './App'
import hello from './components/hello'

Vue.use(VueRouter);

const routes = [
  { path: '/', component: index},
  { path: '/hello', component: hello}
]

const router = new VueRouter({
	routes
})

export default router

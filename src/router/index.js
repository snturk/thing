import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Type from '../views/Type.vue'
import Meditation from '../views/Meditation.vue'
import Sound from '../views/Sound.vue'

Vue.use(VueRouter)

const routes = [
  {path: '/', name: 'home',component: Home},
  {path: '/type', name: 'type', component: Type},
  {path: '/meditation', name: 'meditation', component: Meditation},
  {path: '/sound', name: 'sound', component: Sound},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import GlbalFeedView from '@/views/GlbalFeedView'
import RegisterView from '@/views/RegisterView.vue'
import LoginView from '@/views/LoginView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'globalFeed',
    component: GlbalFeedView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  }
]

const router = new VueRouter({
  routes
})

export default router

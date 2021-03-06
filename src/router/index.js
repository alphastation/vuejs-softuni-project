import Vue from 'vue'
import VueRouter from 'vue-router'

import GlobalFeedView from '@/views/GlobalFeedView'
import YourFeedView from '@/views/YourFeedView.vue'
import RegisterView from '@/views/RegisterView.vue'
import LoginView from '@/views/LoginView.vue'
import ArticleView from '@/views/ArticleView.vue'
import CreateArticleView from '@/views/CreateArticleView.vue'
import EditArticleView from '@/views/EditArticleView.vue'
Vue.use(VueRouter)

const routes = [

  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/',
    name: 'globalFeed',
    component: GlobalFeedView
  },
  {
    path: '/feed',
    name: 'yourFeed',
    component: YourFeedView
  },
  {
    path: '/tags/:slug',
    name: 'tag',
    component: GlobalFeedView
  },
  {
    path: '/articles/new',
    name: 'createArticle',
    component: CreateArticleView
  },
  {
    path: '/articles/:slug',
    name: 'article',
    component: ArticleView
  },
  {
    path: '/articles/:slug/edit',
    name: 'editArticle',
    component: EditArticleView
  },
  {
    path: '/settings',
    name: 'settings',
    component: GlobalFeedView
  },
  {
    path: '/profiles/:slug',
    name: 'userProfile',
    component: GlobalFeedView
  },
  {
    path: '/profiles/:slug/favorites',
    name: 'userProfileFavorites',
    component: GlobalFeedView
  },
]

const router = new VueRouter({
  routes
})

export default router

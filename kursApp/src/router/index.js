import { createWebHistory, createRouter } from 'vue-router'
import Home from '@/components/Home.vue'
import SignIn from '@/components/User/SignIn.vue'
import MainPage from '@/components/User/Dashboard/MainPage.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/sign-in', name: 'signin', component: SignIn },
  { path: '/user/dashboard', name: 'mainpage', component: MainPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

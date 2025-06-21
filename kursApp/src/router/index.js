import { createMemoryHistory, createRouter } from 'vue-router'
import Home from '@/components/Home.vue'
import SignIn from '@/components/User/SignIn.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/sign-in', component: SignIn },
]

const router = createRouter({ 
  history: createMemoryHistory(),
  routes,
})

export default router
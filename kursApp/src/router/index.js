import { createMemoryHistory, createRouter, onBeforeRouteLeave } from 'vue-router'
import Home from '@/components/Home.vue'
import SignIn from '@/components/User/SignIn.vue'
import MainPage from '@/components/User/Dashboard/MainPage.vue'
import Dashboard from '@/components/User/Dashboard/Dashboard.vue'
import Profile from '@/components/User/Dashboard/Profile.vue'
import AddCourse from '@/components/User/Dashboard/admin/AddCourse.vue'
import Courses from '@/components/User/Dashboard/admin/Courses.vue'
import EditCourse from '@/components/User/Dashboard/admin/EditCourse.vue'
import { isAuth, isLoggedIn } from '@/composables/auth'


const routes = [
  { path: '/', name: 'home', component: Home },
  {
    path: '/sign-in',
    name: 'signin',
    beforeEnter: () => {
      if (isLoggedIn) {
        return ('/user/dashboard')
      }
    },
    component: SignIn
  },
  {
    path: '/user/dashboard',
    name: 'mainpage',
    beforeEnter: () => {
      if (!isAuth) {
        return ('/sign-in')
      }
    },
    component: MainPage,
    children: [
      { path: '', component: Dashboard, name: 'dashboard' },
      { path: 'profile', component: Profile, name: 'profile' },
      { path: 'courses', component: Courses, name: 'courses' },
      { path: 'courses/add', component: AddCourse, name: 'add-course' },
      { path: 'courses/edit/:id', component: EditCourse, name: 'edit-course' }
    ]
  },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import LandingPage from '../views/LandingPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage
  },
  {
    path: '/admin',
    name: 'AdminDashboard',
    component: () => import( /* webpackChunkName: "admin" */ '../views/AdminDashboard.vue')
  },
  {
    path: '/editbooking',
    name: 'AdminBookingEdit',
    component: () => import( /* webpackChunkName: "editbooking" */ '../views/AdminBookingEdit.vue')
  },
  {
    path: '/createbooking',
    name: 'AdminBookingCreate',
    component: () => import( /* webpackChunkName: "createbooking" */ '../views/AdminBookingCreate.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router

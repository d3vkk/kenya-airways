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
    path: '/privacy-policy',
    name: 'PrivacyPolicy',
    component: () => import( /* webpackChunkName: "privacy-policy" */ '../views/PrivacyPolicy.vue')
  },
  {
    path: '/selectflight',
    name: 'SelectFlight',
    component: () => import( /* webpackChunkName: "selectflight" */ '../views/SelectFlight.vue')
  },
  {
    path: '/pay',
    name: 'PassPay',
    component: () => import( /* webpackChunkName: "pay" */ '../views/PassPay.vue')
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
  },
  {
    path: '/dashboard',
    name: 'PassDashboard',
    component: () => import( /* webpackChunkName: "dashboard" */ '../views/PassDashboard.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router

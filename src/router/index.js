import Vue from 'vue'
import VueRouter from 'vue-router'
import AdminDashboard from '../views/AdminDashboard.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/admin',
    name: 'AdminDashboard',
    component: AdminDashboard
  },
  {
    path: '/editbooking',
    name: 'AdminBookingEdit',
    component: () => import( /* webpackChunkName: "editbooking" */ '../views/AdminBookingEdit.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router

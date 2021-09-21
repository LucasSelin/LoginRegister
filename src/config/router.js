import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../components/views/Login.vue'
import Cadastro from '../components/views/Cadastro.vue'

Vue.use(VueRouter)

const router = [{
    name: Login,
    path: '/login',
    component: Login,
    beforeEnter: function (to, from, next) {
      const token = localStorage.getItem('token')
      if (token) {
        localStorage.setItem('token', "")
        next()
      } else {
        next()
      }
    },
}, {
    name: Cadastro,
    path: '/saveuser',
    component: Cadastro,
    beforeEnter: function (to, from, next) {
        const token = localStorage.getItem('token')
        if (!token) {
          next('/login')
        } else {
          next()
        }
    },
}]

export default new VueRouter({
    mode: 'history',
    routes: router
})


import Vue from 'vue'
import Router from 'vue-router'
import Thanks from '@/components/Thanks'
import Signup from '@/components/Signup'
import Login from '@/components/Login'
import List from '@/components/List'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      alias: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/thanks',
      name: 'Thanks',
      component: Thanks
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/list/:userId',
      name: 'List',
      component: List
    }
  ]
})

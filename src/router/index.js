import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/components/Home'),
    },
    {
      path: '/create',
      name: 'create',
      component: () => import('@/components/create/index'),
      children: [
        {
          path: '/create/info',
          name: 'create.info',
          component: () => import('@/components/create/Info'),
        },
        {
          path: '/create/confirm',
          name: 'create.confirm',
          component: () => import('@/components/create/Confirmation')
        },
      ]
    },
  ]
})

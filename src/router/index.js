import Vue from 'vue'
import Router from 'vue-router'
import references from '@/components/references'
import home from '@/components/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'references',
      component: references
    },
    {
      path: '/home',
      name: 'home',
      component: home
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Parent from '@/components/Parent'
import ModalParent from '@/components/ModalParent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Parent',
      component: Parent
    },
    {
      path: '/modal',
      name: 'ModalParent',
      component: ModalParent
    }
  ]
})

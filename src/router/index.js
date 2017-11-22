import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Parent from '@/components/Parent'
import ModalParent from '@/components/ModalParent'
import DynamicComponent from '@/components/DynamicComponent'
import ModalSample from '@/components/ModalSample'

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
    },
    {
      path: '/dynamic',
      name: 'DynamicComponent',
      component: DynamicComponent
    },
    {
      path: '/modal_sample',
      name: 'ModalSample',
      component: ModalSample
    }
  ]
})

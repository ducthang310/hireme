import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Requests from '@/components/Requests'
import Intro from '@/components/Intro'
import CreateRequest from '@/components/CreateRequest'
import DetailRequest from '@/components/DetailRequest'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/intro',
      name: 'intro',
      component: Intro
    },
    {
      path: '/requests',
      name: 'requests',
      component: Requests
    },
    {
      path: '/create-request',
      name: 'create_request',
      component: CreateRequest
    },
    {
      path: '/request/:id',
      name: 'request_detail',
      component: DetailRequest
    }
  ]
})

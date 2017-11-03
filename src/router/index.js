import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import newsDetail from '@/pages/newsdetail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/newsdetail/:newsId/',
      name: 'detail',
      component: newsDetail
    }
  ]
})

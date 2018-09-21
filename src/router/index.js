import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/city',
      name: 'City',
      component: City
    }, {
      path: '/detail/:id', // id是变量
      name: 'Detail',
      component: Detail
    }
  ],
  scrollBehavior (to, from, savedPosition) { // 解决新跳转页面不会顶部显示，见vue-router滚动解释
    return { x: 0, y: 0 }
  }
})

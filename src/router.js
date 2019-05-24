import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

import dangxiaozuhui from './components/shyk/dangxiaozuhui.vue'
import zhiweihui from './components/shyk/zhiweihui.vue'
import dangyuandahui from './components/shyk/dangyuandahui.vue'
import dangke from './components/shyk/dangke.vue'

import newList from './components/newList.vue'

import zhibujiaoliu from './components/ztdr/zhibujiaoliu.vue'
import zhutishijian from './components/ztdr/zhutishijian.vue'
import lilunxuexi from './components/ztdr/lilunxuexi.vue'

import sizhengkezhanshi from './components/pxxx/sizhengkezhanshi.vue'
import dangkexuexi from './components/pxxx/dangkexuexi.vue'
import shangjiwenjian from './components/pxxx/shangjiwenjian.vue'

import minzhushenghuohui from './components/dyjl/minzhushenghuohui.vue'
import luntan from './components/dyjl/luntan.vue'

import bannerDetail from './components/bannerDetail'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // 首页
    {
      path: '/',
      name: 'home',
      component: Home
    },
    // 三会一课
    {
      path:'/dangxiaozuhui',
      component: dangxiaozuhui
    },
    {
      path:'/zhiweihui',
      component:zhiweihui
    },
    {
      path:'/dangyuandahui',
      component:dangyuandahui
    },
    {
      path:'/dangke',
      component:dangke
    },
    // 主题党日
    {
      path:'/zhibujiaoliu',
      component:zhibujiaoliu
    },
    {
      path:'/zhutishijian',
      component:zhutishijian
    },
    {
      path:'/lilunxuexi',
      component:lilunxuexi
    },
    // 培训学习
    {
      path:'/sizhengkezhanshi',
      component:sizhengkezhanshi
    },
    {
      path:'/dangkexuexi',
      component:dangkexuexi
    },
    {
      path:'/shangjiwenjian',
      component:shangjiwenjian
    },
    // 党员交流
    {
      path:'/minzhushenghuohui',
      component:minzhushenghuohui
    },
    {
      path:'/luntan',
      component:luntan
    },
    {
      path:'/newList',
      component: newList
    },
    // 点击第二个轮播图的详情页
    {
      path:'/bannerDetail',
      name:'bannerDetail',
      component:bannerDetail
    }
  ]
})

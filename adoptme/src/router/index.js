import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import MainPage from '@/components/MainPage'
import AdvertPage from '@/components/AdvertPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/main',
      name: 'Main',
      component: MainPage
    },
    {
      path: '/advert/:advertId',
      name: 'Advert',
      component: AdvertPage
    }
  ]
})

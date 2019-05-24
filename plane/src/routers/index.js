import Vue from 'vue'
import Router from 'vue-router'
import homeRouter from './home'
import mineRouter from './mine'
import orderRouter from './order'
import resultRouter from './result'
import detailRouter from './detail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
      homeRouter,
      mineRouter,
      orderRouter,
      resultRouter,
      detailRouter,
      {
          path:'/*',
          redirect:'home'
      }

  ]
})

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      redirect:'/homepage',
      children: [{
        path: '/homepage',
        name: 'homepage',
        component: () => import('../views/homepage.vue'),
      },{
        path: '/classify',
        name: 'classify',
        component: () => import('../views/classify.vue'),
      },{
        path: '/shopcar',
        name: 'shopcar',
        component: () => import('../views/shopcar.vue'),
      },{
        path: '/mycenter',
        name: 'mycenter',
        component: () => import('../views/mycenter.vue'),
      }]
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/Register.vue')
    },
    {
      path: '/detail',
      name: 'detail',
      component: () => import('../views/detail.vue')
    },
  ]
})
// router.beforeEach((to,from,next)=>{
//   let token=localStorage.getItem('token')

// })
export default router

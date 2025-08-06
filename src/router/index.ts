import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import ShopView from '@/views/ShopView.vue'
import Register from '@/components/Register.vue'
import AuthView from '@/views/AuthView.vue'
import Carrito from '@/components/carrito.vue'




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
    },


    {
      path: '/authview',
      name: 'authview',
      component: AuthView ,
    },


     {
      path: '/shopview',
      name: 'shopview',
      component:ShopView,
    },

    {
       path: '/carrito',
       name: 'carrito',
       component: Carrito,
     },
  
  ],
})









export default router

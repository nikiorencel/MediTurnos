import { createRouter, createWebHistory } from 'vue-router'
import Home from '../view/Home.View.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
   
    component: () => import('../view/Login.View.vue') 
  },
    {
        path: '/register',
        name: 'Register',
        component: () => import('../view/Register.View.vue')
    },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../view/NotFound.View.vue')
    },
   {
    path: '/usuario',
    name: 'Usuario',
    component: () => import('../view/Usuario.View.vue'),
    meta: { requiresAuth: true }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')
  if (to.meta.requiresAuth && !token) {
    next('/login')
  } else {
    next()
  }
})

export default router
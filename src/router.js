import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '',
      component: () => import('./views/pages/Login.vue')
    },
    {
      path: '/admin',
      component: () => import('./layouts/main/Main.vue'),
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import('./views/Home.vue')
        },
        {
          path: '/page2',
          name: 'page-2',
          component: () => import('./views/Page2.vue')
        },
        {
          path: '/page3',
          name: 'page-3',
          component: () => import('./views/Page3.vue')
        }
      ]
    },
    {
      path: '',
      component: () => import('@/layouts/full-page/FullPage.vue'),
      children: [
        {
          path: '/pages/login',
          name: 'page-login',
          component: () => import('@/views/pages/Login.vue')
        },
        {
          path: '/pages/error-404',
          name: 'page-error-404',
          component: () => import('@/views/pages/Error404.vue')
        }
      ]
    },
    // Redirect to 404 page, if no match found
    {
      path: '*',
      redirect: '/pages/error-404'
    }
  ]
})

router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById('loading-bg')
  if (appLoading) {
    appLoading.style.display = 'none'
  }
})

export default router

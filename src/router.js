/*=========================================================================================
  File Name: router.js
  Description: Routes for vue-router. Lazy loading is enabled.
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


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
            component: () => import('./layouts/main/Main.vue'),
            children: [
              {
                path: '/',
                name: 'home',
                component: () => import('./views/Home.vue'),
                meta: {
                  rule: "admin"
                },
              },

              // CONTA
              {
                path: '/conta',
                name: 'conta-lista',
                component: () => import('./views/pages/contas/ContaLista.vue'),
                meta: {
                  rule: "admin"
                },
              },
              {
                path: '/conta/cadastro',
                name: 'conta-cadastro',
                component: () => import('./views/pages/contas/ContaForm.vue'),
                meta: {
                  rule: "admin"
                },
              },
            ],
        },
        {
            path: '',
            component: () => import('@/layouts/full-page/FullPage.vue'),
            children: [
              {
                path: '/login',
                name: 'usuario-login',
                component: () => import('@/views/pages/usuario/Login.vue'),
                meta: {
                  rule: "public"
                },
              },
              {
                path: '/cadastro',
                name: 'usuario-cadastro',
                component: () => import('@/views/pages/usuario/Cadastro.vue'),
                meta: {
                  rule: "public"
                },
              },
              {
                path: '/404',
                name: '404',
                component: () => import('@/views/pages/404.vue')
              },
            ]
        },
        // Redirect to 404 page, if no match found
        {
            path: '*',
            redirect: '404'
        }
    ],
})

router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById('loading-bg')
    if (appLoading) {
        appLoading.style.display = "none";
    }
})

export default router

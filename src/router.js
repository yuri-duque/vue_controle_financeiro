import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: "/",
      component: () => import("./views/pages/Login.vue"),
      meta: {
        rule: "public"
      }
    },

    // PAGINAS
    {
      path: "/board",
      component: () => import("./layouts/main/Main.vue"),
      children: [
        {
          path: "",
          name: "home",
          component: () => import("./views/Home.vue")
        },
        {
          path: "page2",
          name: "page-2",
          component: () => import("./views/Page2.vue")
        }
      ]
    },

    // DEMAIS PAGINAS
    {
      path: "",
      component: () => import("@/layouts/full-page/FullPage.vue"),
      children: [
        {
          path: "/login",
          name: "login",
          component: () => import("@/views/pages/Login.vue")
        },
        {
          path: "404",
          name: "404",
          component: () => import("@/views/pages/Error404.vue")
        },
        {
          path: "/signup",
          name: "signup",
          component: () => import("@/views/pages/SignUp.vue")
        }
      ]
    },

    {
      path: "*",
      redirect: "/pages/error-404"
    }
  ]
});

router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById("loading-bg");
  if (appLoading) {
    appLoading.style.display = "none";
  }
});

export default router;

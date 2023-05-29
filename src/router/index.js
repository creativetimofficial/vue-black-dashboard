import VueRouter from "vue-router";
import routes from "./routes";
import { isAuthenticated } from "../plugins/authService";

// configure router
const router = new VueRouter({
  routes, // short for routes: routes
  linkExactActiveClass: "active",
  mode: "history",
  scrollBehavior: (to) => {
    if (to.hash) {
      return {selector: to.hash}
    } else {
      return { x: 0, y: 0 }
    }
  }
});

router.beforeEach((to, from, next) => {
    isAuthenticated().then(() => {
        if (from.path === "/login") {
            return next({ path: "/dashboard" });
        }
        return next();
    }).catch(() => {
        if (from.path !== "/login") {
            return next({ path: "/login" });
        }
    });
    return next();
})

export default router;

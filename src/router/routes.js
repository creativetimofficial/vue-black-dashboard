import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";
import Login from "@/pages/Login.vue";
// GeneralViews
import NotFound from "@/pages/NotFoundPage.vue";

// Admin pages
const Dashboard = () => import(/* webpackChunkName: "dashboard" */"@/pages/Dashboard.vue");
const GroupsList = () => import("@/pages/Groups/List.vue");
const GroupCurrent = () => import("@/pages/Groups/Index.vue");
const AccountsList = () => import("@/pages/Accounts/Add.vue");
const Websites = () => import("@/pages/Websites.vue");
const Settings = () => import("@/pages/Settings.vue");

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: Dashboard
      },
      {
        path: "groups",
        name: "Groups List",
        component: GroupsList,
      },
      {
        path: "accounts",
        name: "Accounts List",
        component: AccountsList,
      },
      {
        path: "groups/:group_id",
        name: "Group Detail",
        component: GroupCurrent,
      },
      {
        path: "group/new",
        name: "Create New Group",
        component: GroupCurrent,
      },
      {
        path: "settings",
        name: "Settings",
        component: Settings
      },
      {
        path: "websites",
        name: "Websites List",
        component: Websites
      }
    ]
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    
  },
  { path: "*", component: NotFound },
];

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes;

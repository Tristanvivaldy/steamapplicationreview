import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Admin from "../views/Admin.vue";
import AdminManage from "../views/Manage.vue";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: Home,
  },
  {
    path: "/login",
    name: "LoginPage",
    component: Login,
  },
  {
    path: "/admin",
    name: "AdminPage",
    component: Admin,
    children: [
      {
        path: "",
        name: "AdminDashboard",
        component: Home,
      },
      {
        path: "manage",
        name: "AdminManagePage",
        component: AdminManage,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;

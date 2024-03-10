import { createRouter, createWebHistory } from "vue-router";

import AdminPage from "@/pages/AdminPage";
import LoginForm from "@/pages/LoginForm";

const routes = [
    {
        path: '/',
        component: LoginForm
    },
    {
        path: '/admin',
        component: AdminPage
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
});

export default router;
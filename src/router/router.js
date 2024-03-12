import { createRouter, createWebHistory } from "vue-router";

import AdminPage from "@/pages/AdminPage";
import LoginForm from "@/pages/LoginForm";
import PriceMatrix from "@/pages/PriceMatrix";
import ControlPrices from "@/pages/ControlPrices.vue";
import Analytics from "@/pages/Analytics.vue";

const routes = [
    {
        path: '/',
        component: LoginForm
    },
    {
        path: '/admin',
        component: AdminPage
    },
    {
        path: '/priceMatrix',
        component: PriceMatrix
    },
    {
        path: '/controlPrices',
        component: ControlPrices
    },
    {
        path: '/analytics',
        component: Analytics
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
});

export default router;
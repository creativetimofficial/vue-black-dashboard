import { createRouter, createWebHistory } from "vue-router";

import AdminPage from "@/pages/AdminPage";
import LoginForm from "@/pages/LoginForm";
import PriceMatrix from "@/pages/PriceMatrix";
import ControlPrices from "@/pages/ControlPrices.vue";
import Analitics from "@/pages/Analitics.vue";

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
        path: '/pricematrix',
        component: PriceMatrix
    },
    {
        path: '/controlPrices',
        component: ControlPrices
    },
    {
        path: '/analitics',
        component: Analitics
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
});

export default router;
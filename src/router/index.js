import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '@/views/Home'
import VehiclesList from '@/views/VehiclesList'
import OrdersList from '@/views/OrdersList'
import Page404 from '@/views/404'
import SearchOrders from '@/views/SearchOrders'
import SettingsMain from "@/views/SettingsMain"
import OrderDetails from "@/views/OrderDetails";

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        meta: {auth: false},
    },
    {
        path: '/portal/orders/find',
        name: 'portal.orders.find',
        component: SearchOrders,
        meta: {auth: false}, // @todo
    },
    {
        path: '/portal/orders',
        name: 'portal.orders',
        component: OrdersList,
        meta: {auth: false}, // @todo
    },
    {
        path: '/portal/orders/details',  // -> /:id
        name: 'portal.orders.details',
        meta: {auth: false}, // @todo
        component: OrderDetails,
    },
    {
        path: '/portal/vehicles',
        name: 'portal.vehicles',
        component: VehiclesList,
        meta: {auth: false}, // @todo
    },
    {
        path: '/settings/main',
        name: 'settings.main',
        component: SettingsMain,
        meta: {auth: false}, // @todo
    },
    {
        path: '*',
        name: 'not-found',
        component: Page404,
        meta: {auth: false},
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router

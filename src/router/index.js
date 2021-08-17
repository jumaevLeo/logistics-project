import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '@/views/Home'
import VehiclesList from '@/views/VehiclesList'
import OrdersList from '@/views/OrdersList'
import Page404 from '@/views/404'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        meta: {auth: false},
    },
    {
        path: '/portal/orders',
        name: 'portal.orders.list',
        component: OrdersList,
        meta: {auth: false}, // @todo
    },
    {
        path: '/portal/vehicles',
        name: 'portal.vehicles.list',
        component: VehiclesList,
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

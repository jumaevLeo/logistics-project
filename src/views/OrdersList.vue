<template>
    <AuthedUserLayout>
        <div class="px-4 pt-4">
            <navbar title="Сделки"></navbar>
            <div class="d-flex justify-content-between align-items-center">
                <span>
                    <p-icon icon="mdi mdi-swap-vertical"/>
                    <span class="d-inline-block mr-2">Сортировка:</span>
                    <span class="is-secondary">Сначала новые <p-icon icon="mdi mdi-chevron-down"/></span>
                </span>
                <grid-type-toggler v-model="gridView"/>
            </div>
            <div class="col py-3">
                <order-list-item v-for="(order, key) in orders" :key="key" :item="order"/>
            </div>
        </div>
    </AuthedUserLayout>
</template>

<script>
    import AuthedUserLayout from '@/views/layouts/AuthedUser'
    import OrderListItem from '@/components/order/item'
    import Navbar from '@/components/layout/Navbar'
    import GridTypeToggler from '@/components/layout/GridTypeToggler'

    export default {
        name: 'orders-list',
        data() {
            return {
                gridView: true,
            }
        },

        computed: {
            orders: function () {
                return [
                    {
                        id: 3,
                        name: 'Помидоры',
                        types: ['Тентованный прицеп', 'Рефрежератор',],
                        volume: 12,
                        lifting_capacity: 400,
                        state: 'waiting',
                        confirmed: true,
                        origin: 'UZB, Ташкент',
                        destination: 'RUS, Москва',
                        customer: 'ООО “Realsoft”',
                        vehicle: 'Mercedes-Benz Actors',
                        date_from: '2021-09-18',
                        date_to: '2021-09-28',
                        extra_days: 4,
                        signed_at: '2021-09-11 20:12:45',

                        title: 'Перевезти помидоры из Узбекистана в Россию',
                        description: 'Лобортис индоцтум делицатиссими сед ех, те еум хабео вереар. Убияуе волутпат ат при, еи меа хинц цонституто. Ид бонорум легимус хонестатис еос, хис те иллум долоре. Ут еум сонет витуператорибус, ин аеяуе аппетере цонцлусионемяуе сед, еу сед цасе инструцтиор.',
                    },
                    {
                        id: 3,
                        name: 'Огурцы',
                        volume: 12,
                        lifting_capacity: 400,
                        state: 'waiting',
                        types: ['Тентованный прицеп', 'Рефрежератор',],
                        origin: 'UZB, Ташкент',
                        destination: 'RUS, Москва',
                        customer: 'ООО “Realsoft”',
                        vehicle: 'Mercedes-Benz Actors',
                        date_from: '2021-09-18',
                        date_to: '2021-09-28',
                        extra_days: 4,
                        signed_at: '2021-09-11 20:12:45',
                        confirmed: false,

                        title: 'Перевезти помидоры из Узбекистана в Россию',
                        description: 'Лобортис индоцтум делицатиссими сед ех, те еум хабео вереар. Убияуе волутпат ат при, еи меа хинц цонституто. Ид бонорум легимус хонестатис еос, хис те иллум долоре. Ут еум сонет витуператорибус, ин аеяуе аппетере цонцлусионемяуе сед, еу сед цасе инструцтиор.',
                    },
                ]
            },
        },

        components: {
            AuthedUserLayout,
            OrderListItem,
            GridTypeToggler,
            Navbar,
        }
    }
</script>

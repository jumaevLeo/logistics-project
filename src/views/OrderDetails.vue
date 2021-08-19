<template>
    <AuthedUserLayout>
        <div class="px-4 pt-4">
            <navbar :title="order.customer"></navbar>
            <div class="col py-3">
                <order-list-item :item="order" type="deal"/>
            </div>
        </div>
        <div class="row mx-2 mt-2 mb-4">
            <div class="col-4">
                <order-history :items="history"></order-history>
            </div>
            <div class="col-8">
                <chat entity-type="order" :entity-id="order.id"></chat>
            </div>
        </div>
    </AuthedUserLayout>
</template>

<script>
    import AuthedUserLayout from '@/views/layouts/AuthedUser'
    import OrderListItem from '@/components/order/item'
    import OrderHistory from '@/components/order/history'
    import Navbar from '@/components/layout/Navbar'
    import Chat from '@/components/chat/layout'

    export default {
        name: 'orders-list',
        data() {
            return {
                gridView: true,
            }
        },

        computed: {
            order() {
                return {
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
                }
            },

            history() {
                return [
                    {id: 1, description: 'Предложение отправлено', attachments: [], updated_at: '2021-09-11 22:30:03'},
                    {id: 2, description: 'Исполнитель выбран', attachments: [], updated_at: '2021-09-12 12:48:02'},
                    {id: 3, description: 'Контракт составлен', attachments: [{id: 1, type: 'file', name: 'Контракт OOO “Realsoft”', url: 'https://realsoft.uz'}], updated_at: '2021-09-16 11:08:02'},
                    {id: 4, description: 'Контракт утвержден', attachments: [], updated_at: '2021-09-16 14:12:04'},
                    {id: 4, description: 'Ожидание погрузки', attachments: []},
                ];
            }
        },

        components: {
            AuthedUserLayout,
            OrderListItem,
            OrderHistory,
            Navbar,
            Chat,
        }
    }
</script>

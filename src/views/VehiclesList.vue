<template>
    <AuthedUserLayout>
        <div class="px-4 pt-4">
            <Navbar title="Мои машины"></Navbar>
            <div class="d-flex justify-content-between align-items-center">
                <p-button size="is-middle" type="is-success">Добавить машину</p-button>
                <grid-type-toggler v-model="gridView"/>
            </div>
            <div class="col py-3">
                <vehicle-list-item v-for="(vehicle, key) in vehicles" :key="key" :item="vehicle"/>
            </div>
        </div>
    </AuthedUserLayout>
</template>

<script>
    import AuthedUserLayout from '@/views/layouts/AuthedUser'
    import GridTypeToggler from '@/components/layout/GridTypeToggler'
    import Navbar from '@/components/layout/Navbar'

    import VehicleListItem from '@/components/vehicle/item'

    export default {
        name: 'vehicles-list',
        data() {
            return {
                gridView: true,
            }
        },

        computed: {
            vehicles: function () {
                return [
                    {
                        id: 3,
                        name: 'Тентованный прицеп',
                        types: ['Тентованный прицеп', 'Рефрежератор',],
                        volume: 12,
                        lifting_capacity: 400,
                        service_countries: ['Узбекистан', 'Россия', 'Украина', 'Беларусь',],
                        owner: 'ООО “Realsoft”',
                        cargo_departure: true,
                        location: 'UZB, Ташкент',
                        brand: 'Mercedes-Benz Actors',
                        payment_types: ['Payme', 'Click', 'Наличными'],
                        description: 'Лобортис индоцтум делицатиссими сед ех, те еум хабео вереар. Убияуе волутпат ат при, еи меа хинц цонституто. Ид бонорум легимус хонестатис еос, хис те иллум долоре. Ут еум сонет витуператорибус, ин аеяуе аппетере цонцлусионемяуе сед, еу сед цасе инструцтиор.',
                        reviews_count: 3,
                        rating: 3.5,
                    },
                    {
                        id: 2,
                        name: 'Газовоз',
                        types: ['Тентованный прицеп', 'Рефрежератор', 'Газовоз',],
                        volume: 20,
                        lifting_capacity: 250,
                        service_countries: ['Узбекистан', 'СНГ', 'Европейский Союз',],
                        owner: 'ООО “Realsoft”',
                        cargo_departure: false,
                        location: 'UZB, Наваи',
                        brand: 'Mercedes-Benz Actors',
                        payment_types: ['Наличными', 'Перевод'],
                        description: 'Лобортис индоцтум делицатиссими сед ех, те еум хабео вереар. Убияуе волутпат ат при, еи меа хинц цонституто. Ид бонорум легимус хонестатис еос, хис те иллум долоре. Ут еум сонет витуператорибус, ин аеяуе аппетере цонцлусионемяуе сед, еу сед цасе инструцтиор.',
                        reviews_count: 3,
                        rating: 4.5,
                    },
                ]
            },
        },

        components: {
            AuthedUserLayout,
            VehicleListItem,
            GridTypeToggler,
            Navbar,
        }
    }
</script>

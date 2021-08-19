<template>
    <div class="row py-2">
        <div class="col-2 p-4 rounded-left border border-right-0 border-gray-1">
            <p class="text-lg pb-2">{{item.name}}</p>
            <div class="row pb-3">
                <div class="col-6">
                    <p-icon icon="mdi mdi-scale-balance is-hint"></p-icon>
                    {{item.lifting_capacity}} кг
                </div>
                <div class="col-6">
                    <p-icon icon="mdi mdi-cube-outline is-hint"></p-icon>
                    {{item.volume}} м<sup>3</sup>
                </div>
            </div>

            <div class="pb-2">
                <p class="is-hint">Регионы обслуживания</p>
                <span>{{item.service_countries.join(', ')}}</span>
            </div>
            <span class="is-hint">Владелец:</span> <span class="no-wrap">{{item.owner}}</span>
        </div>
        <div class="col-10 p-4 rounded-right border border-gray-1">
            <div class="row">
                <div class="col-8">
                    <p class="text-lg">
                        <span class="align-middle">{{item.brand}}</span>
                        <b-form-rating class="align-middle" :value="item.rating" variant="warning" no-border readonly size="sm" inline precision="1"></b-form-rating>
                        <a class="is-hint is-underlined text-sm align-middle">{{item.reviews_count}} отзыва</a>
                    </p>
                    <div>
                        <span class="inline-block mr-2">
                            <p-icon icon="mdi mdi-map-marker-outline is-hint"/> <span class="align-middle">{{item.location}}</span>
                        </span>
                            <span :class="item.cargo_departure ? 'is-primary' : 'is-danger'">
                                <p-icon :icon="item.cargo_departure ? 'mdi mdi-checkbox-marked-circle-outline' : 'mdi mdi-close-circle-outline'"/>
                                <span class="d-inline-block ml-1 align-middle">Выезд за грузом</span>
                        </span>
                    </div>
                    <p-tag-list class="pt-2">
                        <p-tag v-for="(type, key) in item.types" :key="key"
                               class="bg-secondary bd-secondary"
                               type="is-secondary"
                               :secondary="true"
                        >{{type}}</p-tag>
                    </p-tag-list>
                </div>
                <div class="col-4 text-right">
                    <p class="is-hint">Способы оплаты</p>
                    {{item.payment_types.join(', ')}}
                </div>
            </div>
            <div class="is-hint pt-4">{{item.description}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'vehicle-list-item',
        props: {
            item: {
                required: true,
                type: Object,
            }
        }
    }
</script>
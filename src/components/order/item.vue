<template>
    <div class="row py-2">
        <div class="col-2 p-4 rounded-left border border-right-0 border-gray-1">
            <p class="text-lg pb-2">{{item.name}}
                <p-icon icon="is-primary mdi mdi-checkbox-marked-circle-outline"/>
            </p>
            <div class="row pb-3">
                <div class="col-6">
                    <p-icon icon="mdi mdi-scale-balance is-hint"/>
                    {{item.lifting_capacity}} кг
                </div>
                <div class="col-6">
                    <p-icon icon="mdi mdi-cube-outline is-hint"/>
                    {{item.volume}} м<sup>3</sup>
                </div>
                <div class="col-12 pt-1">
                    <p-icon icon="mdi mdi-truck-outline is-hint"/>
                    {{item.vehicle}}
                </div>
            </div>

            <template v-if="type === 'order'">
                <div class="pb-3">
                    <p v-if="item.applicable" class="is-hint">Одна из ваших машин соответствует требованиям перевозки
                        данного груза</p>
                    <p v-else class="is-danger">Ваши машины не соответствуют требованиям перевозки данного груза</p>
                </div>
                <div>
                    <p-button :type="item.applicable ? 'is-warning text-white' : 'bg-hint bd-hint text-white'"
                              class="width-100p">
                        <p>откликнуться</p>
                        <span class="mt-1 d-inline-block text-lg">{{item.sum|money(false)}}</span> <span
                            class="text-md">uzs</span>
                    </p-button>
                </div>
            </template>
            <template v-else>
                <div class="pb-3">
                    <p class="is-hint">Текущий статус: </p>
                    <span>{{state}}</span>
                </div>
                <div>
                    <template v-if="type === 'deal'">
                        <p-button type="is-danger text-white" class="width-100p">
                            Служба поддержки
                        </p-button>
                    </template>
                    <template v-else>
                        <p-button @click="$router.push({name: 'portal.orders.details', params: {id: item.id}})"
                                  type="is-success" class="width-100p">Перейти к сделке
                        </p-button>
                    </template>
                </div>
            </template>
        </div>
        <div class="col-10 p-4 rounded-right border border-gray-1">
            <div class="row">
                <div class="col-8">
                    <span class="align-middle pt-1"><span class="is-hint">Заказчик:</span> {{item.customer}}</span>
                    <template v-if="type === 'order'">
                        <b-form-rating class="align-middle" :value="item.rating" variant="warning" no-border readonly
                                       size="sm" inline precision="1"></b-form-rating>
                        <a class="is-hint is-underlined text-sm align-middle">{{item.reviews_count}} отзыва</a>
                    </template>
                    <div>
                        <p class="text-lg">
                            {{item.title}}
                        </p>
                        <p-tag-list class="pt-2">
                            <p-tag v-for="(type, key) in item.types" :key="key"
                                   class="bg-secondary bd-secondary"
                                   type="is-secondary"
                                   :secondary="true"
                            >{{type}}
                            </p-tag>
                        </p-tag-list>
                        <div class="row pt-3">
                            <div class="col-2">
                                <h3 class="font-weight-normal">{{item.date_from | shortDate}}</h3>
                                {{item.origin}}
                            </div>
                            <div class="col-4 position-relative align-self-center">
                                <div class="width-100p text-center text-sm order-duration position-absolute is-hint">
                                    Срок:
                                    {{dateDiff}} дней
                                </div>
                                <div class="width-100p text-center text-sm order-extra-duration position-absolute is-primary">
                                    ±{{item.extra_days}}
                                    дня
                                </div>
                                <div>
                                    <p-icon size="is-large" icon="mdi mdi-truck-outline is-hint align-middle" left/>
                                    <span class="order-item-arrow-container d-inline-block align-middle">
                                    <i class="bd-hint d-inline-block align-middle arrow-line"></i>
                                    <i class="bd-hint d-inline-block align-middle arrow-corner right"></i>
                                </span>
                                </div>
                            </div>
                            <div class="col-2">
                                <h3 class="font-weight-normal">{{item.date_to | shortDate}}</h3>
                                {{item.destination}}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-4 text-right">
                    <p class="is-hint">{{item.signed_at|dateTime}}</p>
                </div>
            </div>
            <div class="is-hint pt-3">{{item.description}}</div>
        </div>
    </div>
</template>

<script>
    import moment from 'moment'
    import {OrderStates} from '@/store/enums'

    export default {
        name: 'order-list-item',
        props: {
            type: {
                type: String,
            },

            item: {
                required: true,
                type: Object,
            }
        },

        computed: {
            state() {
                return OrderStates.find(s => s.id === this.item.state).label
            },
            dateDiff() {
                return moment(this.item.date_to).diff(this.item.date_from, 'days')
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '@/assets/styles/_colors';

    .border {
        border-color: $hint-accent-color!important;
    }

    .order-duration {
        margin-top: -10px;
    }

    .order-extra-duration {
        margin-top: 14px;
    }

    .order-item-arrow-container {
        width: calc(100% - 32px);

        .arrow-line {
            width: 100%;
            border-style: solid;
            border-width: 1px 1px 1px 1px;
        }

        .arrow-corner {
            margin-left: -10px;
            border-style: solid;
            border-width: 0 2px 2px 0;
            padding: 4px;

            &.right {
                transform: rotate(-45deg);
            }
        }
    }
</style>
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

            <div class="pb-3">
                <p class="is-hint">Текущий статус: </p>
                <span>{{state}}</span>
            </div>
            <div>
                <p-button type="is-success" class="mx-auto width-100p">Перейти к сделке</p-button>
            </div>
        </div>
        <div class="col-10 p-4 rounded-right border border-gray-1">
            <div class="row">
                <div class="col-12">
                    <span class="is-hint">Заказчик:</span> {{item.customer}}
                </div>
                <div class="col-8">
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
                    <div class="row">
                        <div class="col-2">
                            <h3 class="font-weight-normal">{{item.date_from | shortDate}}</h3>
                            {{item.origin}}
                        </div>
                        <div class="col-4 position-relative align-self-center">
                            <div class="width-100p text-center text-sm order-duration position-absolute is-hint">Срок:
                                {{dateDiff}} дней
                            </div>
                            <div class="width-100p text-center text-sm order-extra-duration position-absolute is-primary">±{{item.extra_days}}
                                дня
                            </div>
                            <div>
                                <p-icon size="is-large" icon="mdi mdi-truck-outline is-hint align-middle" left/>
                                <span class="order-item-arrow-container d-inline-block align-middle">
                                <i class="bd-muted d-inline-block align-middle arrow-line"></i>
                                <i class="bd-muted d-inline-block align-middle arrow-corner right"></i>
                            </span>
                            </div>
                        </div>
                        <div class="col-2">
                            <h3 class="font-weight-normal">{{item.date_to | shortDate}}</h3>
                            {{item.destination}}
                        </div>
                    </div>
                </div>
                <div class="col-4 text-right">
                    <p class="is-hint">{{item.signed_at|dateTime}}</p>

                </div>
            </div>
            <div class="is-hint pt-4">{{item.description}}</div>
        </div>
    </div>
</template>

<script>
    import moment from 'moment'
    import {OrderStates} from '@/store/enums'

    export default {
        name: 'order-list-item',
        props: {
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
                return moment(this.item.date_from).diff(this.item.date_to, 'days')
            }
        }
    }
</script>

<style lang="scss" scoped>
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
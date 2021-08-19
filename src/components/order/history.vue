<template>
    <div>
        <h4 class="font-weight-normal">{{header}}</h4>
        <div id="order-history" class="ml-1 pt-3">
            <div v-for="(item, key) in items" :key="key" class="order-history-item position-relative">
                <div class="record-point position-absolute"></div>
                <div class="record-data position-relative px-3 pb-3">
                    <span v-if="item.updated_at" class="is-hint">{{item.updated_at|dateTime}}</span>
                    <p :class="{'is-hint': !item.updated_at}">{{item.description}}</p>
                    <div v-for="(attachment, k) in item.attachments" :key="k">
                        <attachment class="mt-2" :item="attachment"></attachment>
                    </div>
                    <p-button v-if="key + 1 === items.length" class="mt-2" type="is-primary text-white">Груз погружен</p-button>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import Attachment from '@/components/attachment';

    export default {
        name: 'history',

        props: {
            header: {
                type: String,
                default: 'Прогресс сделки',
            },
            items: {
                required: true,
                type: Array,
            }
        },

        components: {
            Attachment,
        }
    }
</script>

<style lang="scss" scoped>
    @import '@/assets/styles/_colors';

    #order-history {
        .order-history-item {
            .record-point {
                left: -4px;
                padding: 5px;
                border-radius: 50%;
                @extend .bg-hint;
            }

            &:not(:last-child) {
                border-left: 2px solid rgba($primary-color, 0.5);

                &:nth-last-child(-n+2) {
                    border-left: 2px solid rgba($hint-color, 0.5);
                }

                .record-point {
                    @extend .bg-primary;
                    left: -6px;
                    padding: 5px;
                }
            }
        }

        .record-data {
            top: -6px;
        }
    }
</style>
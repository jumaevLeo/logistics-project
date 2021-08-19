<template>
    <div id="chat-container">
        <div class="chat-body flex-grow-1 d-flex justify-content-between flex-column">
            <h4 class="font-weight-normal text-center my-3">Диалог с заказчиком</h4>
            <div id="chat-messages">
                <template v-for="(message, key) in messages">
                    <div v-if="hasDateCaption(message, key)" class="is-hint text-center py-2" :key="'t'+ key">
                        {{message.sent_at|date}}
                    </div>
                    <chat-message :item="message" :key="key"></chat-message>
                </template>

            </div>
        </div>
        <div id="message-input" class="d-flex align-items-center p-2 bg-white">
            <p-icon icon="mdi mdi-paperclip" size="is-large is-secondary px-2 py-3 cursor-pointer"></p-icon>
            <p-input class="m-1" placeholder="Введите сообщение..."></p-input>
            <p-button type="is-success">Отправить</p-button>
        </div>
    </div>
</template>

<script>
    import ChatMessage from './message'

    export default {
        name: 'chat-layout',
        props: {
            entityType: {
                type: String,
                required: true,
            },
            entityId: {
                type: Number,
                required: true,
            },
        },

        methods: {
            hasDateCaption(message, key) {
                let df = this.$options.filters.date
                return !key || df(this.messages[key].sent_at) !== df(this.messages[key - 1].sent_at)
            }
        },

        computed: {
            messages() {
                return [
                    {
                        id: 1,
                        author: {
                            id: 1,
                            name: 'OOO “Realsoft”',
                            avatar: 'https://material-ui.com/static/images/avatar/3.jpg'
                        },
                        message: 'Прошу вас ознакомиться и подписать контракт',
                        sent_at: '2021-09-16 11:08:02',
                        attachments: [],
                    },
                    {
                        id: 2,
                        author: {
                            id: 2,
                            name: 'OOO “Softreal”',
                            avatar: 'https://material-ui.com/static/images/avatar/2.jpg'
                        },
                        message: 'Контракт подписан',
                        sent_at: '2021-09-16 11:09:02',
                        attachments: [
                            {id: 1, type: 'file', name: 'Контракт OOO “Realsoft”', url: 'https://realsoft.uz'},
                        ],
                    },
                    {
                        id: 3,
                        author: {
                            id: 1,
                            name: 'OOO “Realsoft”',
                            avatar: 'https://material-ui.com/static/images/avatar/3.jpg'
                        },
                        message: 'Заказ оплачен. Сумма зарезервирована и будет переданна после доставки груза по месту назначения.',
                        sent_at: '2021-09-16 21:58:02',
                        attachments: [],
                    },

                    {
                        id: 4,
                        author: {
                            id: 2,
                            name: 'OOO “Softreal”',
                            avatar: 'https://material-ui.com/static/images/avatar/2.jpg'
                        },
                        message: 'Доброго времени суток!\nКогда я смогу забрать груз?',
                        sent_at: '2021-09-18 22:18:02',
                        attachments: [],
                    },
                ]
            }
        },

        components: {
            ChatMessage,
        }
    }
</script>

<style lang="scss">
    @import '@/assets/styles/_colors';

    #chat-container {
        background: $hint-border-color;
        border: 1px solid $hint-accent-color;
        border-radius: 8px;
        height: 600px;
        overflow: hidden;

        .chat-body {
            max-height: 540px;
        }

        #chat-messages {
            overflow-y: scroll;
        }

        #message-input {
            border-top: 1px solid $hint-accent-color;

            .pui-input {
                border: none;
            }
        }
    }
</style>
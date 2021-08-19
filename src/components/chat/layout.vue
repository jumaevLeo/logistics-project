<template>
    <div id="chat-container" class="d-flex flex-column">
        <div class="flex-grow-1 d-flex height-100p justify-content-between flex-column">
            <h4 class="font-weight-normal text-center my-3">Диалог с заказчиком</h4>
            <ul id="chat-messages">
                <li>11 сентябрь</li>
                <li>1</li>
                <li>2</li>
                <li>4</li>
                <li>5</li>
            </ul>
        </div>
        <div id="message-input" class="d-flex align-items-center p-2 bg-white">
            <p-icon icon="mdi mdi-paperclip" size="is-large is-secondary px-2 py-3 cursor-pointer"></p-icon>
            <p-input class="m-1" placeholder="Введите сообщение..."></p-input>
            <p-button type="is-success">Отправить</p-button>
        </div>
    </div>
</template>

<script>
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
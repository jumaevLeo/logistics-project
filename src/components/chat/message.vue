<template>
    <div class="chat-message px-3 py-2">
        <div class="d-flex">
            <div>
                <div class="mt-1 chat-avatar rounded rounded-circle"
                     :style="`background-image: url(${item.author.avatar})`"></div>
            </div>
            <div class="chat-text ml-2 px-3 pt-2 pb-3 bd-hint-accent" :class="{'my': item.author.id === 2}">
                <div class="chat-text-header pb-2 d-flex justify-content-between">
                    <span class="author-name" v-text="item.author.id === 2 ? 'Вы' : item.author.name"></span>
                    <span>{{item.sent_at|time}}</span>
                </div>
                {{item.message}}

                <div v-for="(attachment, k) in item.attachments" :key="k">
                    <attachment class="mt-2" :item="attachment"></attachment>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import attachment from '@/components/attachment'

    export default {
        name: 'chat-message',
        props: {
            item: {
                type: Object,
                required: true,
            },
        },

        components: {
            attachment,
        }
    }
</script>

<style lang="scss">
    @import '@/assets/styles/_colors';

    .chat-message {
        max-width: 70%;

        .chat-avatar {
            padding: 21px;
            background-size: cover;
        }

        .chat-text {
            background: white;
            border-radius: 8px;
            border-width: 1px;
            border-style: solid;
            position: relative;

            &::before {
                position: absolute;
                content: '';
                border: 8px solid transparent;
                border-top-color: $hint-accent-color;
                left: -8px;
                top: -1px;
            }

            &::after {
                position: absolute;
                content: '';
                border: 7px solid transparent;
                border-top-color: white;
                left: -6px;
                top: 0;
            }

            &-header {
                color: $link-primary-color;

                .author-name {
                    font-weight: 500;
                }
            }

            &.my {
                background: $secondary-color;
                border-color: $secondary-color !important;
                color: white;

                .chat-text-header {
                    color: $secondary-accent-color;
                }

                &.chat-text {
                    &::before, &::after {
                        border-top-color: $secondary-color !important;
                    }
                }

            }
        }
    }
</style>
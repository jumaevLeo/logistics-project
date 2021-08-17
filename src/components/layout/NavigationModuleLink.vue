<template>
    <li class="p-3 position-relative" @click="showModuleItems">
        <a href="#" class="p-3" :class="{active, [`is-${type}`]: true}">
            <p-icon size="is-large" :icon="item.icon"></p-icon>
        </a>
        <span v-if="active" class="active-link-pipe position-absolute"></span>
    </li>
</template>

<script>
    export default {
        name: 'navigation-module-link',

        props: {
            item: {
                required: true,
                type: Object,
            },
            type: {},

            chosenModule: {
                type: Number,
            }
        },

        methods: {
            showModuleItems() {
                this.$emit('module:show', this.item.id)
            }
        },

        computed: {
            active() {
                if (this.chosenModule) {
                    return this.item.id === this.chosenModule
                }

                return this.$route.name.startsWith(this.item.route)
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '@/assets/styles/_colors';
    @import '@/assets/styles/_spacings';

    .modules-menu-container li {
        a {
            display: block;
            border-radius: $iconBorderRadius;
            transition: all 0.5s ease;
            color: $hint-color;

            &.is-danger {
                color: $danger-color;
            }

            &.active, &:hover {
                background: #DAD0FF;
                color: $secondary-color;

                &.is-danger {
                    background: $danger-accent-color;
                    color: $danger-color;
                }
            }

            &:hover {
                opacity: .7;
            }
        }

        .active-link-pipe {
            background: $secondary-color;
            border-radius: 5px;
            height: 30px;
            width: 4px;
            right: -2px;
            top: calc(50% - 15px);
        }
    }
</style>
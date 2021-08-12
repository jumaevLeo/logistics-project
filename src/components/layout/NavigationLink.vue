<template>
    <li class="py-2">
        <a class="d-flex" :class="{
            'justify-content-around': miniDrawer,
            'justify-content-between': !miniDrawer,
            active: isActive,
        }"
           @click="!isActive && $router.push({name: item.route})"
        >
            <span>
                <p-icon :icon="item.icon"></p-icon>
                <span :class="miniDrawer ? 'd-none' : 'd-inline-block'" class="menu-label pl-2">{{item.label}}</span>
            </span>
            <span v-if="!miniDrawer && item.count" class="counter bg-danger text-white">{{item.count}}</span>
        </a>
    </li>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: 'NavigationLink',

        props: {
            item: {
                required: true,
                type: Object,
            }
        },

        computed: {
            isActive() {
                return this.$route.name === this.item.route
            },

            ...mapState(['miniDrawer']),
        }
    }
</script>

<style lang="scss" scoped>
    @import '@/assets/styles/_colors';

    a {
        font-size: 1.2em;
        text-decoration: none;
        .menu-label {
            transition: display 0.1s ease;
        }

        &:hover, &:active, &.active {
            color: $secondary-color;
        }

        & .counter {
            align-self: center;
            font-size: 14px;
            padding: 3px 7px;
            border-radius: 6px;
        }
    }
</style>
<template>
    <div class="d-flex">
        <NavigationDrawer></NavigationDrawer>
        <div class="width-100p">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import NavigationDrawer from '@/components/layout/NavigationDrawer'

    export default {
        name: 'authed-user-layout',

        components: {
            NavigationDrawer,
        }
    }
</script>
<template>
    <div>
        <NavigationDrawer></NavigationDrawer>
        <div>
            <Navbar></Navbar>
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import NavigationDrawer from '@/components/layout/NavigationDrawer'
    import Navbar from '@/components/layout/Navbar'

    export default {
        name: 'authed-user-layout',

        components: {
            NavigationDrawer,
            Navbar,
        }
    }
</script>

<style scoped>

</style>
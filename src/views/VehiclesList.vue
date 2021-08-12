<template>
    <AuthedUserLayout>
        Мои машины
    </AuthedUserLayout>
</template>

<script>
    import AuthedUserLayout from '@/views/layouts/AuthedUser'

    export default {
        name: 'Home',
        data() {
            return {

            }
        },

        components: {
            AuthedUserLayout,
        }
    }
</script>

<style lang="scss">

</style>
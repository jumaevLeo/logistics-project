<template>
    <AuthedUserLayout>
        <div class="alert alert-warning">Whoops!</div>
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
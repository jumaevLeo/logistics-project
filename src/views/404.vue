<template>
    <AuthedUserLayout>
        <div class="alert alert-warning">Whoops!</div>
    </AuthedUserLayout>
</template>

<script>
    import AuthedUserLayout from '@/views/layouts/AuthedUser'

    export default {
        name: 'page-404',
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
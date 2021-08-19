<template>
    <AuthedUserLayout>
        <div class="d-flex flex-column height-100p justify-content-center text-center">
            <h1>Что-то пошло не так!</h1>
            <div class="mt-5">
                <p-button icon-left="mdi mdi-chevron-left" @click="$router.push({name: 'portal.orders.find'})">На главную</p-button>
            </div>
        </div>
    </AuthedUserLayout>
</template>

<script>
    import AuthedUserLayout from '@/views/layouts/AuthedUser'

    export default {
        name: 'page-404',
        components: {
            AuthedUserLayout,
        }
    }
</script>

<style lang="scss">

</style>
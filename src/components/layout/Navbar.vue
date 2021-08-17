<template>
    <div id="main-navbar" class="d-flex justify-content-between align-items-center py-3">
        <h3>{{title}}</h3>
        <ul class="d-flex align-items-center">
            <li class="is-warning">
                <p-icon icon="mdi mdi-crown-outline"/>
                Premium
            </li>
            <li class="position-relative px-4">
                <p-icon size="is-large" icon="is-hint mdi mdi-bell-outline"/>
                <i class="has-new-notifications"></i>
            </li>
            <li id="profile-menu" class="position-relative">
                <img width="26px" height="26px" src="https://material-ui.com/static/images/avatar/2.jpg"
                     class="rounded-circle" alt="Саломов Азиз">
                <span class="px-2">Саломов Азиз</span>
                <p-icon icon="is-hint mdi mdi-chevron-down"/>
            </li>

        </ul>
    </div>
</template>

<script>
    export default {
        name: 'navbar',

        props: {
            title: {
                required: true,
                type: String,
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '@/assets/styles/_colors';

    #main-navbar {
        #profile-menu {
            > *:not(:last-child) {
                vertical-align: middle;
            }

            > :last-child {
                vertical-align: sub;
            }
        }

        .has-new-notifications {
            background-color: $danger-color;
            position: absolute;
            font-size: 8px;
            bottom: 2px;
            left: calc(50% + 2px);
            width: 8px;
            height: 8px;
            border-radius: 50%;
            border: 2px solid white;
        }
    }</style>
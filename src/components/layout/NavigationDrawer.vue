<template>
    <div id="navigation-drawer-container" class="d-flex" :class="{minified: miniDrawer}">
        <div id="modules-menu" class="d-flex flex-column justify-content-between">
            <div class="px-4 pt-5">
                <img src="@/assets/img/menu-logo.svg" alt="$appName" class="width-100p">
            </div>

            <ul class="modules-menu-container d-flex flex-column text-center">
                <NavigationModuleLink v-for="(module, key) in modules" :item="module" :key="key"
                                      :chosen-module="activeModuleId"
                                      @module:show="showModuleItems"
                ></NavigationModuleLink>
            </ul>

            <ul class="modules-menu-container d-flex flex-column text-center">
                <NavigationModuleLink :item="{icon: 'mdi mdi-exit-to-app'}" type="danger"></NavigationModuleLink>
            </ul>
        </div>
        <div id="chapters-menu" class="px-4 pt-4">
            <h3 class="d-flex justify-content-between align-items-center py-3">
                <span v-show="!miniDrawer">Главная</span>
                <a @click="setDrawer(!miniDrawer)" id="minimize-menu-button" class="px-2">
                    <p-icon size="is-large" :icon="`mdi mdi-chevron-${miniDrawer ? 'right' : 'left'}`"></p-icon>
                </a>
            </h3>
            <ul>
                <NavigationLink v-for="(item, key) in menuItems" :item="item" :key="key"></NavigationLink>
            </ul>
        </div>
    </div>
</template>

<script>
    import NavigationLink from '@/components/layout/NavigationLink'
    import NavigationModuleLink from '@/components/layout/NavigationModuleLink'
    import {mapState, mapMutations} from 'vuex'

    export default {
        name: 'navigation-drawer',

        data() {
            return {
                activeModuleId: null,
                menus: [
                    {id: 1, parent_id: 1, route: 'portal.orders.find', icon: 'mdi mdi-layers-outline', label: 'Найти груз', count: 8,},
                    {id: 2, parent_id: 1, route: 'portal.vehicles.list', icon: 'mdi mdi-truck-outline', label: 'Мои машины', count: 0,},
                    {id: 3, parent_id: 1, route: 'portal.reviews.list', icon: 'mdi mdi-thumb-up-outline', label: 'Отклики', count: 0,},
                    {id: 4, parent_id: 1, route: 'portal.orders.list', icon: 'mdi mdi-checkbox-marked-circle-outline', label: 'Сделки', count: 0,},
                    {id: 5, parent_id: 1, route: 'portal.reports', icon: 'mdi mdi-chart-donut', label: 'Статистика', count: 0,},
                    {id: 6, parent_id: 1, route: 'portal.orders.archive', icon: 'mdi mdi-package-down', label: 'Архивные сделки', count: 0,},
                    {id: 8, parent_id: 3, route: 'settings.notifications', icon: 'mdi mdi-notification', label: 'Оповещения', count: 0,},
                    {id: 7, parent_id: 2, route: 'settings.cards', icon: 'mdi mdi-card', label: 'Карточки', count: 0,},
                ],
            }
        },

        computed: {
            ...mapState(['miniDrawer']),

            modules() {
                return [
                    {id: 1, route: 'portal', label: 'Главная', icon: 'mdi mdi-view-dashboard-outline'},
                    {id: 2, route: 'profile', label: 'Профиль', icon: 'mdi mdi-calendar-account-outline'},
                    {id: 3, route: 'settings', label: 'Настройки', icon: 'mdi mdi-cog-outline'},
                ]
            },

            menuItems() {
                return this.menus.filter(m => m.parent_id === this.activeModuleId)
            },
        },

        methods: {
            ...mapMutations(['setDrawer']),

            showModuleItems(val) {
                this.activeModuleId = val
            },
        },

        created() {
            this.activeModuleId = this.menus.find(m => m.route === (this.$route.name || 'portal.orders.find')).parent_id
        },

        components: {
            NavigationLink,
            NavigationModuleLink,
        },
    }
</script>

<style lang="scss">
    @import '@/assets/styles/_colors';
    @import '@/assets/styles/_spacings';

    #navigation-drawer-container {
        transition: width 0.3s ease-in-out;
        background: #F5F7FB;
        height: 100vh;
        border-right: 1px solid $hint-accent-color;
        width: 350px;

        &.minified {
            width: 160px;
        }

        & #modules-menu {
            width: 80px;
            height: inherit;
            border-right: 1px solid $hint-accent-color;

        }

        & #chapters-menu {
            width: 270px;
            height: inherit;

            #minimize-menu-button {
                background: $hint-accent-color;
                color: $hint-color;
                border-radius: $iconBorderRadius;
            }
        }
    }
</style>
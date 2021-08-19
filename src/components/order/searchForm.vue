<template>
    <div id="search-columns-container" class="row">
        <div class="px-2" :class="showAdvancedFilters ? 'col-2' : 'col-3'">
            <p-select v-model="search.from" label='Откуда' :options="fromOptions"/>
        </div>
        <div class="px-2" :class="showAdvancedFilters ? 'col-2' : 'col-3'">
            <p-select v-model="search.to" label='Куда' :options="toOptions"/>
        </div>
        <div v-if="wrapped" class="px-2 position-relative" :class="showAdvancedFilters ? 'col-3' : 'col-5'">
            <p-input v-model="search.query" label='Ключевые слова' placeholder="Помидоры ..."/>
            <span id="showAdvancedFilters" v-show="!showAdvancedFilters"
                  @click="showAllFilters" class="is-secondary position-absolute cursor-pointer">все фильтры</span>
        </div>
        <div v-if="!wrapped || showAdvancedFilters" class="col-2 px-2">
            <p-select v-model="search.type" label='Тип груза' :options="cargoTypes"/>
        </div>
        <div v-if="!wrapped || showAdvancedFilters" class="px-2" :class="showAdvancedFilters ? 'col-2' : 'col-2'">
            <p-select v-model="search.weight_category" label='Вес' :options="weightCategories"/>
        </div>
        <div class="px-2" :class="wrapped ? 'col-1' : 'col-2'">
            <p-button class="width-100p" style="height: 3.5rem;">{{searchText}}</p-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'order-form',

        props: {
            wrapped: {
                type: Boolean,
                default: true,
            },
            searchText: {
                type: String,
                default: 'Найти',
            }
        },

        data() {
            return {
                showAdvancedFilters: false,
                search: {
                    query: 'Малогаборит',
                    from: 'TASH',
                    to: 'SAM',
                    type: 1,
                    weight_category: 1,
                },
                fromOptions: [
                    {key: 'UZB, Ташкент', value: 'TASH'},
                    {key: 'UZB, Самарканд', value: 'SAM'},
                    {key: 'UZB, Бухара', value: 'BHK'},
                ],
                toOptions: [
                    {key: 'UZB, Ташкент', value: 'TASH'},
                    {key: 'UZB, Самарканд', value: 'SAM'},
                    {key: 'UZB, Бухара', value: 'BHK'},
                ],
                cargoTypes: [
                    {key: 'Крупногабаритный', value: 1},
                    {key: 'Малогабаритный', value: 2},
                    {key: 'Прочее', value: 3},
                ],
                weightCategories: [
                    {key: '10-20т', value: 1},
                    {key: '20-50т', value: 2},
                    {key: 'больше 50т', value: 3},
                ],
            }
        },
        methods: {
            showAllFilters() {
                this.showAdvancedFilters = true
            }
        }
    }
</script>

<style scoped>
    /*#search-columns-container > div {*/
    /*    transition: all .05s ease-in-out;*/
    /*}*/

    #showAdvancedFilters {
        right: 28px;
        top: calc(50% - 13px);
    }
</style>
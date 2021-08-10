<template>
    <div class="app">
        <div class="p-toolbar container">
            <ul class="p-toolbar-list">
                <li>
                    <a class="brand-logo" href="/">
                        <img src="@/assets/img/logo.svg" :alt="$appName">
                    </a>
                </li>
                <li>Заказчику
                    <p-icon icon="mdi mdi-chevron-down"/>
                </li>
                <li>Исполнителю
                    <p-icon icon="mdi mdi-chevron-down"/>
                </li>
                <li class="text-orange">
                    <p-icon icon="mdi mdi-crown-outline"/>
                    Premium
                </li>
            </ul>
            <ul class="p-toolbar-list">
                <li>
                    <p-icon icon="mdi mdi-web"/>
                    Русский
                    <p-icon icon="mdi mdi-chevron-down"/>
                </li>
                <li>Вход</li>
                <li>
                    <p-button size="is-small" type="is-primary">Регистрация</p-button>
                </li>
            </ul>
        </div>
        <div class="call-to-action-bar">
            <div class="fader">
                <div class="container">
                    <h1 class="text-white">Тысячи грузовых машин в вашем распоряжении</h1>
                    <p-button class="mt-5 mb-3" type="is-success" size="is-large">Разместить объявление о грузе
                    </p-button>
                    <p class="text-white">
                        Нужна работа? <a class="text-white link-underlined" href="#">Зарегистрируйтесь исполнителем</a>
                    </p>
                </div>
            </div>
        </div>
        <div class="container" style="position: relative">
            <div class="mx-5 form-container px-5 pt- width-100p">
                <h4 class="mb-2">Рассчитать стоимость перевозки</h4>
                <div style="display: flex">
                    <div class="width-25p pr-2">
                        <p-select v-model='from' label='Откуда' :options="fromOptions"/>
                    </div>
                    <div class="width-25p px-2">
                        <p-select v-model='to' label='Откуда' :options="toOptions"/>
                    </div>
                    <div class="width-20p px-2">
                        <p-select v-model='type' label='Тип груза' :options="cargoTypes"/>
                    </div>
                    <div class="width-10p px-2">
                        <p-select v-model='type' label='Вес' :options="weightCategories"/>
                    </div>
                    <div class="width-20p pl-2">
                        <p-button class="width-100p">Рассчитать</p-button>
                    </div>
                </div>
                <p class="text-hint">
                    <span class="text-danger b-toaster-top-right">*</span>
                    Стоимость перевозки рассчитывается исходя из средних показателей предложенния на рынке исполнителей.
                    Конечная сумма может сильно разнится с указанной в зависимости от груза, даты перевозки и других
                    факторов.
                </p>
            </div>
        </div>
        <!-- @todo-->
        <div class="container" style="margin-top: 250px">
            <h4 class="mb-2">Каталог грузовых машин</h4>
            <div style="display: flex">
                <ul>
                    <li>Тентованный полуприцеп</li>
                    <li>"Jumbo"</li>
                    <li>"Автосцепка"</li>
                </ul>
                <ul>
                    <li>Платформа грузов</li>
                    <li>Автовоз</li>
                    <li>Трал для спецтехники</li>
                </ul>
                <ul>
                    <li>Изотермический фургон</li>
                    <li>Контейнеровоз</li>
                    <li>Строительная</li>
                </ul>
                <ul>
                    <li>Рефрижераторный фургон</li>
                    <li>Автоцистерна</li>
                    <li>Спецтехника</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Home',
        data() {
            return {
                search: {
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
        }
    }
</script>

<style lang="scss">
    .call-to-action-bar {
        min-height: 450px;
        position: relative;
        background-repeat: no-repeat;
        background-size: cover;
        background-image: url('~@/assets/img/main-bg.png');

        & .container {
            padding: 100px 200px;
            text-align: center;
        }

        h1 {
            line-height: 56px;
        }
    }

    .form-container {
        background: #F6F6F6;
        border-radius: 12px;
        padding: 36px;
        position: absolute;
        top: -56px;
    }

    .pui-select {
        background: white !important;
    }
</style>
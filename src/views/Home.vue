<template>
    <div class="app">
        <div class="p-toolbar container">
            <ul class="p-toolbar-list">
                <li>
                    <a class="brand-logo" href="/">
                        <img src="@/assets/img/logo.svg" :alt="$appName">
                    </a>
                </li>
                <li>
                    <p-dropdown class="cursor-pointer">
                        <template #trigger>
                            Исполнителю <p-icon icon="mdi mdi-chevron-down"/>
                        </template>
                        <p-dropdown-item v-for="(execMenu, i) in executorMenus" :key="i"
                                         @click="$router.push({name: execMenu.route})"
                        >{{execMenu.name}}</p-dropdown-item>
                    </p-dropdown>
                </li>
                <li>
                    <p-dropdown class="cursor-pointer">
                        <template #trigger>
                            Исполнителю <p-icon icon="mdi mdi-chevron-down"/>
                        </template>
                        <p-dropdown-item v-for="(execMenu, i) in executorMenus" :key="i"
                                         @click="$router.push({name: execMenu.route})"
                        >{{execMenu.name}}</p-dropdown-item>
                    </p-dropdown>
                </li>
                <li class="is-warning">
                    <p-icon icon="mdi mdi-crown-outline"/>
                    Premium
                </li>
            </ul>


            <ul class="p-toolbar-list">
                <li>
                    <p-dropdown class="cursor-pointer">
                        <template #trigger>
                            <p-icon icon="mdi mdi-web"/> {{langs.find(l => l.id = lng).name}} <p-icon icon="mdi mdi-chevron-down"/>
                        </template>
                        <p-dropdown-item v-for="(lng, i) in langs" :key="i" @click="setLang(lng.id)">{{lng.name}}</p-dropdown-item>
                    </p-dropdown>
                </li>
                <li><a @click="$router.push({name: 'portal.vehicles'})">Вход</a></li>
                <li>
                    <p-button size="is-small" @click="isChecked=!isChecked">Регистрация</p-button>
                </li>
            </ul>
        </div>
        <div class="call-to-action-bar">
            <div class="fader">
                <div class="container">
                    <h1 class="text-white">Тысячи грузовых машин в вашем распоряжении</h1>
                    <p-button class="mt-5 mb-3" type="is-success" size="is-medium">
                        Разместить объявление о грузе
                    </p-button>
                    <p class="text-white">
                        Нужна работа? <a class="text-white link-underlined" href="#">Зарегистрируйтесь исполнителем</a>
                    </p>
                </div>
            </div>
        </div>
        <div class="position-relative container-small form-container px-5 width-100p">
            <h4 class="mb-2">Рассчитать стоимость перевозки <span class="is-danger">*</span></h4>

            <order-search-form search-text="Рассчитать" :wrapped="false"></order-search-form>

            <p class="is-hint mt-3">
                <span class="text-danger b-toaster-top-right">*</span>
                Стоимость перевозки рассчитывается исходя из средних показателей предложенния на рынке исполнителей.
                Конечная сумма может сильно разнится с указанной в зависимости от груза, даты перевозки и других
                факторов.
            </p>
        </div>
        <!-- @todo-->
        <div class="container-small mb-5">
            <h3 class="mb-4">Каталог грузовых машин</h3>
            <div class="row">
                <ul class="col-3">
                    <li class="mb-3"><a href="#" class="is-underlined">Тентованный полуприцеп</a></li>
                    <li class="mb-3"><a href="#" class="is-underlined">"Jumbo"</a></li>
                    <li class="mb-3"><a href="#" class="is-underlined">"Автосцепка"</a></li>
                </ul>
                <ul class="col-3">
                    <li class="mb-3"><a href="#" class="is-underlined">Платформа грузов</a></li>
                    <li class="mb-3"><a href="#" class="is-underlined">Автовоз</a></li>
                    <li class="mb-3"><a href="#" class="is-underlined">Трал для спецтехники</a></li>
                </ul>
                <ul class="col-3">
                    <li class="mb-3"><a href="#" class="is-underlined">Изотермический фургон</a></li>
                    <li class="mb-3"><a href="#" class="is-underlined">Контейнеровоз</a></li>
                    <li class="mb-3"><a href="#" class="is-underlined">Строительная</a></li>
                </ul>
                <ul class="col-3">
                    <li class="mb-3"><a href="#" class="is-underlined">Рефрижераторный фургон</a></li>
                    <li class="mb-3"><a href="#" class="is-underlined">Автоцистерна</a></li>
                    <li class="mb-3"><a href="#" class="is-underlined">Спецтехника</a></li>
                </ul>
            </div>
        </div>
        <div class="mobile-app-info-container container-fluid overflow-hidden">
            <div class="container-small mx-auto">
                <div class="row">
                    <div class="col-6">
                        <span class="text-white download-text">
                            Загрузите приложение Carting,<br>
                            и получите Premium на 1 месяц бесплатно
                        </span>
                        <div class="row mt-4">
                            <div class="col-4">
                                <a href="#"><img src="@/assets/img/appstore.svg" alt=""></a>
                            </div>
                            <div class="col-4">
                                <a href="#"><img src="@/assets/img/googleplay.svg" alt=""></a>
                            </div>
                            <div class="col-4">
                                <a href="#"><img src="@/assets/img/appgallery.svg" alt=""></a>
                            </div>

                        </div>
                    </div>
                    <div class="col-6 position-relative">
                        <div class="position-absolute phone-mock">
                            <img src="@/assets/img/phone.svg" alt="Cargting mobile app QR">
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <footer class="container-small my-5">
            <div class="row">
                <div class="col-3">
                    <h4 class="mb-2">Заказчикам</h4>
                    <ul>
                        <li class="mb-2"><a href="#" class="is-hint">Пользовательское соглашение</a></li>
                        <li class="mb-2"><a href="#" class="is-hint">Как выбрать исполнителя</a></li>
                        <li class="mb-2"><a href="#" class="is-hint">Оплата и доставка</a></li>
                        <li class="mb-2"><a href="#" class="is-hint">Обратная связь</a></li>
                        <li class="mb-2"><a href="#" class="is-hint">О сервисе</a></li>
                        <li class="mb-2"><a href="#" class="is-hint">Возвраты</a></li>
                    </ul>
                </div>
                <div class="col-3">
                    <h4 class="mb-2">Исполнителям</h4>
                    <ul>
                        <li class="mb-2"><a href="#" class="is-hint">Личный кабинет исполнителя</a></li>
                        <li class="mb-2"><a href="#" class="is-hint">Регистрация исполнителя</a></li>
                        <li class="mb-2"><a href="#" class="is-hint">Справка для исполнителей</a></li>
                        <li class="mb-2"><a href="#" class="is-hint">Сайт для партнёров</a></li>
                    </ul>
                </div>
                <div class="col-3">
                    <h4 class="mb-2">Сотрудничество</h4>
                    <ul>
                        <li class="mb-2"><a href="#" class="is-hint">Новости компании</a></li>
                        <li class="mb-2"><a href="#" class="is-hint">Партнёрская программа</a></li>
                        <li class="mb-2"><a href="#" class="is-hint">Работа с брендом</a></li>
                    </ul>
                </div>
                <div class="col-3">
                    <h4 class="mb-2">Мы в социальных сетях</h4>
                    <a href="#" class="is-primary-text">
                        <p-icon class="mr-3" size="is-medium" icon="mdi mdi-facebook"></p-icon>
                    </a>
                    <a href="#" class="is-primary-text">
                        <p-icon class="mr-3" size="is-medium" icon="mdi mdi-youtube"></p-icon>
                    </a>
                    <a href="#" class="is-primary-text">
                        <p-icon class="mr-3" size="is-medium" icon="mdi mdi-instagram"></p-icon>
                    </a>
                    <a href="#" class="is-primary-text">
                        <p-icon class="mr-3" size="is-medium" icon="mdi mdi-telegram"></p-icon>
                    </a>
                    <p class="is-hint mt-3">Разработано</p>
                    <a href="https://realsoft.uz"><img src="@/assets/img/vendor.svg" alt="$appName"></a>
                </div>
            </div>
            <div class="my-4 is-hint">
                © {{year}} — OOO «Carting»
            </div>
        </footer>
        <p-modal 
            :active.sync="isChecked"
            title="Регистрация"
            class="registr_from"
        >
            <template>
                <div><p-input 
                        v-model="user_phone" 
                        label="Введите номер телефона"
                        icon="mdi mdi-phone"
                        maxlength="13"
                        style="font-size:18px;"
                    />
                </div>
                <div style="display:flex;flex-firection:row;">
                    <p-checkbox v-model="user_agree" type="is-success"/>
                    <span style="margin-top:20px;margin-left:10px;">Я согласен с <a style="color:#2979FF;">правилами использования личных данных</a></span>
                </div>
            </template>
            <template v-slot:footer class="registr_footer">
                <div class="pui-button is-primary registr_btn" :disabled='isDisabled' v-on:click="goSms()"><span class="text">Продолжить</span></div>
            </template>
        </p-modal>
        <p-modal 
            :active.sync="isNinja"
            title="Регистрация"
            class="registr_from"
        >
            <template>
                <div style="text-align:center;">Код потверждения был выслан на номер</div>
                <div style="text-align:center;">+998 93 652 45 65 (<a v-on:click="goRegistr()" style="color:#2979FF;">изменить</a>)</div>
            </template>
            <template>
                <div style="text-align:center;margin-top:15px;letter-spacing: 12px !important;">
                    <p-input 
                        v-model="user_phone_sms"
                        maxlength="4"
                        id="sms_input"
                    />
                </div>
            </template>
            <template v-slot:footer class="registr_footer">
                <div class="pui-button is-primary registr_btn"><span class="text">Продолжить</span></div>
            </template>
        </p-modal>
    </div>
</template>

<script>
    import OrderSearchForm from '@/components/order/searchForm'

    export default {
        name: 'home',

        data() {
            return {
                isChecked:false,
                user_phone:null,
                user_phone_sms:null,
                user_agree:false,
                isNinja:false,
                year: (new Date).getFullYear(),
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
                lng: 'ru',
                langs: [
                    {id: 'ru', name: 'Русский'},
                    {id: 'uz', name: 'O\'zbekcha'},
                    {id: 'uz-cyr', name: 'Ўзбекча'},
                    {id: 'en', name: 'English'},
                ],
                executorMenus: [
                    {route: 'portal.vehicles', name: 'Исполнителью 1'},
                    {route: 'portal.vehicles', name: 'Исполнителью 2'},
                    {route: 'portal.vehicles', name: 'Исполнителью 3'},
                ],
                customerMenus: [
                    {route: 'portal.vehicles', name: 'Заказчику 1'},
                    {route: 'portal.vehicles', name: 'Заказчику 2'},
                    {route: 'portal.vehicles', name: 'Заказчику 3'},
                ]
            }
        },

        computed: {
            isDisabled: function(){
                return !this.user_agree;
            }
        },

        methods: {
            setLang(l) {
                // @todo
                console.log('lang is set to ' + l)
            },
            goSms() {
                this.isChecked = false;
                this.isNinja = true;
            },
            goRegistr() {
                this.isChecked = true;
                this.isNinja = false;
                document.getElementById('sms_input').value = '';
            }
        },

        components: {
            OrderSearchForm,
        }
    }
</script>

<style lang="scss">
    @import '@/assets/styles/_colors';

    .pui-modal {
        width: 400px;

        & .header {
            margin-left: 110px;
            border-bottom-width:0;
        }
        & .footer {
            justify-content: center !important;
        }
    }

    .registr_btn {
        width: 92%;
        text-align: center;
    }

    .disabledbutton {
        pointer-events: none;
        opacity: 0.4;
    }   

    #sms_input {
        width: 150px;
        font-size:24px;
        letter-spacing: 13px !important;
        padding-left: 28px !important;
    }

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
        top: -56px;
    }

    .pui-select {
        background: white !important;
    }

    .mobile-app-info-container {
        background: $primary-color;
        padding: 48px;

        & .download-text {
            font-size: 22px;
        }

        & .phone-mock {
            right: 0;
        }
    }
</style>
<template>
    <AuthedUserLayout>
        <div class="px-4 pt-4">
            <navbar title="Завершение регистрации"></navbar>
            <div class="d-flex align-items-center p-3" style="background-color:#F6F6F6;color:#989898;width:630px;border-radius:5px;">
                <div><p-icon style="font-size:30px;" icon="mdi mdi-alert-circle-outline"></p-icon></div>
                <div class="ml-3">
                    Заполните все поля ниже, чтобы пользоваться всеми функциями платформы без<br>
                    органичений. Вводя свои данные в форму ниже вы подтверждаете, что<br> ознакомились с 
                    <a href="#" style="color:#2979FF;">Условиями использования личных данных</a>
                </div>
            </div>
            <div class="mt-5">
                <div style="font-size:20px;">Основные</div>
                <div>
                    <p-select 
                        v-model="userType"
                        class="editInput"
                        label="Род деятельности" 
                        icon="mdi mdi-briefcase"
                        :options="[
                            {key: 'Юридическое лицо', value: 'org_person'}
                        ]"
                    />
                </div>
            </div>
            <div class="mt-5">
                <div style="font-size:20px;">Реквизиты</div>
                <div style="display:flex; flex-direction:column;">
                    <p-input 
                        v-model="user_company"
                        class="editInput"
                        label="Наименование организации"
                        icon="mdi mdi-domain"
                    />
                    <p-input 
                        v-model="user_pinfl"
                        class="editInput"
                        label="ПИНФЛ"
                        icon="mdi mdi-passport"
                    />
                    <p-input 
                        v-model="user_address"
                        class="editInput"
                        label="Адрес"
                        icon="mdi mdi-map-marker"
                    />
                </div>
            </div>
            <div class="mt-5">
                <div style="font-size:20px;">Пароль</div>
                <div style="display:flex;flex-direction:row;">
                    <div style="display:flex; flex-direction:column;">
                        <p-input 
                            v-model="user_password"
                            type="password"
                            class="editInput"
                            label="Придумайте пароль"
                            icon="mdi mdi-lock-outline"
                            @input="checkPassword"
                            id="user_password"
                            :state="focusedColor"
                            password-reveal="false"
                        />
                        <p-input 
                            v-model="user_password_repeat"
                            type="password"
                            class="editInput"
                            label="Повторите пароль"
                            icon="mdi mdi-lock-outline"
                            password-reveal="false"
                        />
                    </div>
                    <div style="margin-left:12px;" v-show="pswShow">
                        <div :style="pswColor" style="font-size:18px;margin-top:7px;">
                            <p-icon :icon="`mdi ${password_notice_icon}`" />
                            <span>{{password_notice}}</span>
                        </div>
                        <div style="color:#989898;margin-left:3px;" v-show="pswShowNotice">
                            Пароль должен содержать от 8 до 16<br>
                            символов, включая как минимум одну<br>
                            строчную букву, одну заглавную букву и<br>
                            одну цифру.
                        </div>
                    </div>
                </div>
                <div class="mt-3 mb-5">
                    <p-button :disabled="isDisabled" @click="saveData" type="is-success" label="Продолжить" />
                    <p-button class="ml-2" type="outline-secondary" label="Отменить" />
                </div>
            </div>
        </div>
    </AuthedUserLayout>
</template>

<script>
    import AuthedUserLayout from '@/views/layouts/AuthedUser'
    import Navbar from '@/components/layout/Navbar'

    export default {
        name: 'orders-list',
        data() {
            return {
                focusedColor:'',
                gridView: true,
                userType:null,
                user_company:null,
                user_pinfl:null,
                user_address:null,
                user_password:null,
                user_password_repeat:null,
                pswShow:false,
                pswShowNotice:false,
                pswColor:'color:red;',
                password_notice_icon:'mdi-battery-30',
                password_notice:'Очень слабый пароль'
            }
        },

        computed: {
            orders: function () {
                return [
                    
                ]
            },
            isDisabled: function(){
                return (!this.userType || !this.user_company || !this.user_pinfl || !this.user_address || !this.user_password_repeat || !this.user_password);
            }
        },
        methods: {
            checkPassword() {
                if (/[A-Z]/.test(this.user_password) && /[a-z]/.test(this.user_password) && /[0-9]/.test(this.user_password) && this.user_password.length>=8 && !/[!@#$%^&*()-+=/:''?><;""]/.test(this.user_password)) {
                    this.focusedColor = "is-warning";
                    this.pswShow = true;
                    this.pswShowNotice = true;
                    this.pswColor = 'color:#FF8A00;';
                    this.password_notice = 'Хороший пароль';
                    this.password_notice_icon = 'mdi-battery-70';
                }else if(/[!@#$%^&*()-+=/:''?><;""]/.test(this.user_password) && /[A-Z]/.test(this.user_password) && /[a-z]/.test(this.user_password) && /[0-9]/.test(this.user_password) && this.user_password.length>=8){
                    this.focusedColor = "is-primary";
                    this.pswShow = true;
                    this.pswShowNotice = false;
                    this.pswColor = 'color:green;';
                    this.password_notice = 'Отличный пароль';
                    this.password_notice_icon = 'mdi-battery';
                }else {
                    this.focusedColor = "is-danger";
                    this.pswShow = true;
                    this.pswShowNotice = true;
                    this.pswColor = 'color:red;';
                    this.password_notice = 'Очень слабый пароль';
                    this.password_notice_icon = 'mdi-battery-30';
                }
            },
            saveData() {
                if(this.user_password == this.user_password_repeat) {
                    console.log('yes');
                }else {
                    console.log('no');
                }
            }
        },
        components: {
            AuthedUserLayout,
            Navbar,
        }
    }
</script>

<style scoped>
.editInput {
    width: 500px !important;
    margin-top: 10px;
}
</style>
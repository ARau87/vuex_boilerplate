import Vue from 'vue';
import { ACTION_TOGGLE_MENU } from '../../vuex/modules/menuModule';

export default Vue.component('app-header',{
    template: 
    `
    <header class="app-header flex-row-container">
        <div class="logo-container">QRContacts</div>
        <div class="menu-button-container">
            <div class="menu-button" @click="toggleMenu" v-show="!menuActive">MENU</div>
            <div class="close-button" @click="toggleMenu" v-show="menuActive">X</div>
        </div>
    </header>
    `,
    props: ['menuActive'],
    methods: {

        toggleMenu: function () {

            this.$store.dispatch(ACTION_TOGGLE_MENU);

        }

    }
});
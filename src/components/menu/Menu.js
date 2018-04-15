import Vue from 'vue';
import {ACTION_TOGGLE_MENU } from '../../vuex/modules/menuModule';

export default Vue.component('app-menu',{

    props: ['isActive'],
    template: 
    `
    <div class="app-menu" v-show="isActive">
        <div class="app-menu-header flex-row-container">
            <div class="app-menu-headline">MENU</div>
        </div>
        <div class="app-menu-body">

            <div class="app-submenu app-submenu-navigation">
                
                <h4>Navigation</h4>
                <nav>
                    <div class="nav-item"><a class="nav-link" @click.prevent="$router.push('/')">Home</a></div>
                    <div class="nav-item"><a class="nav-link" @click.prevent="$router.push('/login')">Login</a></div>
                    <div class="nav-item"><a class="nav-link" @click.prevent="$router.push('/register')">Register</a></div>
                </nav>

            </div>

        </div>

        <div class="close-button" @click.prevent="toggleMenu">CLOSE</div>
    </div>
    `,
    methods: {

        toggleMenu: function () {

            this.$store.dispatch(ACTION_TOGGLE_MENU);

        }

    }


});
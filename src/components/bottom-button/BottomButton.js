import Vue from 'vue';
import { ACTION_TOGGLE_MENU } from '../../vuex/modules/menuModule';

export const BottomButton =  Vue.component('bottom-button', {

    template: 
    `
    <div class="buttom-button button--purpose-close-menu" v-if="purpose === 'CLOSE_MENU'" @click.prevent="toggleMenu">
        x
    </div>
    <div class="buttom-button" v-else>
    <!-- Instead of + add scanner icon here -->
        +
    </div>
    `,
    props: ['purpose'],
    methods: {

        toggleMenu: function () {

            this.$store.dispatch(ACTION_TOGGLE_MENU);

        }

    }

});

export const purposes = {

    CLOSE_MENU : 'CLOSE_MENU'

};
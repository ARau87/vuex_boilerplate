import Vue from 'vue';
import Vuex from 'vuex';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/functions';

import config from './config/firebase';
import Router from './config/router';

import Header from './components/header/Header';
import Menu from './components/menu/Menu';
import {BottomButton, purposes} from './components/bottom-button/BottomButton';

import Store from './vuex/store';

// Start the App

new Vue({

    el: '#app',
    mounted(){
        firebase.initializeApp(config);
    },
    components: {
        Header, 
        Menu,
        BottomButton
    },
    router: Router,
    store: Store,
    template: 
    `
    <div class="app-container" v-bind:class="{'shift-right': menuActive}">
        <app-header :menuActive="menuActive"></app-header>
        <app-menu :isActive="menuActive" ></app-menu>
        <router-view></router-view>
        <bottom-button :purpose="bottomButtonPurpose" ></bottom-button>
        <div class="app-overlay-dark" :class="{'app-overlay--active': menuActive }"></div>
    </div>
    `,
    data(){
        return {

        }
    },
    computed: {

        menuActive: function(){

            return this.$store.state.menu.menuToggled;

        },

        bottomButtonPurpose: function(){

            return this.$store.state.menu.bottomButtonPurpose;

        }


    }
});




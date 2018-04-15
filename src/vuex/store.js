import Vue from 'vue';
import Vuex from 'vuex';

import menuModule from './modules/menuModule';
import registerModule from './modules/registerModule';
import loginModule from './modules/loginModule';

Vue.use(Vuex);

const store = new Vuex.Store({

    modules: {

        menu: menuModule,
        register: registerModule,
        login: loginModule

    }

});

export default store;


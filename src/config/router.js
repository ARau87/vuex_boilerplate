import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../pages/Home';
import Register from '../pages/Register';
import Login from '../pages/Login';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: 
    [
            { path: '/', component: Home },
            { path: '/register', component: Register},
            { path: '/login', component: Login}
    ]
});
import Vue from 'vue';

import {
            MUTATION_SET_USERNAME, 
            MUTATION_SET_PASSWORD_REPEAT, 
            ACTION_REGISTER,
            MUTATION_SET_PASSWORD
        } from '../vuex/modules/registerModule';

const Register = {

    template:
    `
        <div class="page-register page-container">

            <div class="page-message" :class="messageClass">{{registerMessage}}</div>

            <div class="form-container form-registration">
            
                <input class="form-input" placeholder="E-Mail Address" type="email" @change="setUsername" />
                <input class="form-input" placeholder="Password" type="password" @change="setPassword" />
                <input class="form-input" placeholder="Password Repeat" type="password" @change="setPasswordRepeat" />
                <button class="form-submit" @click.prevent="submit">Submit</button>
            </div>

        </div>
    `,
    computed: {

        registerMessage(){

            return this.$store.state.register.message.text;

        },
        messageClass(){

            if (this.$store.state.register.message.type === 100){

                return {
                    'page-message--info': true
                }

            }
            if (this.$store.state.register.message.type === 400) {

                return {
                    'page-message--error': true
                }

            }

        }

    },
    methods: {

        setUsername(event){

            this.$store.commit(MUTATION_SET_USERNAME, event.target.value);

        },
        setPassword(event) {

            this.$store.commit(MUTATION_SET_PASSWORD, event.target.value);

        },
        setPasswordRepeat(event) {

            this.$store.commit(MUTATION_SET_PASSWORD_REPEAT, event.target.value);

        },
        submit(event){

            this.$store.dispatch(ACTION_REGISTER);

        }

    }

};

export default Register;
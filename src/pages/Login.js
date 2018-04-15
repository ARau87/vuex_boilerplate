import Vue from 'vue';
import {
    ACTION_LOGIN,
    MUTATION_SET_PASSWORD,
    MUTATION_SET_USERNAME
} from '../vuex/modules/loginModule';

const Login = {

    template:
        `
        <div class="page-login page-container">
            <div class="page-message" :class="messageClass">{{loginMessage}}</div>

            <div class="form-container form-login">
            
                <input class="form-input" placeholder="E-Mail Address" type="email" @change="setUsername" />
                <input class="form-input" placeholder="Password" type="password" @change="setPassword" />
                <button class="form-submit" @click.prevent="submit">Submit</button>
            </div>
        </div>
    `,
    computed: {

        loginMessage() {

            return this.$store.state.login.message.text;

        },
        messageClass() {

            if (this.$store.state.login.message.type === 100) {

                return {
                    'page-message--info': true
                }

            }
            if (this.$store.state.login.message.type === 400) {

                return {
                    'page-message--error': true
                }

            }

        }

    },
    methods: {

        setUsername(event) {

            this.$store.commit(MUTATION_SET_USERNAME, event.target.value);

        },
        setPassword(event) {

            this.$store.commit(MUTATION_SET_PASSWORD, event.target.value);

        },
        submit(event) {

            this.$store.dispatch(ACTION_LOGIN);

        }

    }

};

export default Login;
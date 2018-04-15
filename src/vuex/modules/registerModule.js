import firebase from 'firebase/app';
import 'firebase/auth';

const registerModule = {

    state: {

        usernameInput: '',
        passwordInput: '',
        passwordRepeatInput: '',
        message: {
            type: 100,
            text: 'Please register with a valid email address and a 8 digit password!'
        }

    },

    mutations: {

        setMessage(state, message){
            state.message = message;
        },
        setUsername(state, username){
            state.usernameInput = username;
        },
        setPassword(state, password){
            state.passwordInput = password;
        },
        setPasswordRepeat(state, passwordRepeat){
            state.passwordRepeatInput = passwordRepeat;
        }

    },


    actions: {

        register({ state, commit }) {

            if(state.passwordInput !== state.passwordRepeatInput){

                    commit(MUTATION_SET_MESSAGE, {type: 400, text:'Password and password repeat are not equal!'});

            }
            else {

                const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                const passwordRegex = /([A-Za-z0-9]){8,14}/;

                if(emailRegex.test(state.usernameInput) && passwordRegex.test(state.passwordInput)){

                    firebase.auth().createUserWithEmailAndPassword(state.usernameInput, state.passwordInput)
                            .then(() => {
                                commit(MUTATION_SET_MESSAGE, { type: 200, text: 'Registered successfully! Login to use the service!!!' });
                            })
                            .catch((err) => {
                                commit(MUTATION_SET_MESSAGE, { type: 500, text: 'An internal error occured please try again later!' });
                            })

                }

                else {

                    commit(MUTATION_SET_MESSAGE, { type: 400, text: 'You either entered an invalid email address or your password does not match the required password policy (8-14 digits)!' });

                }
            }
        }

    }




}

export default registerModule;

export const ACTION_REGISTER = 'register';
export const MUTATION_SET_USERNAME = 'setUsername';
export const MUTATION_SET_PASSWORD = 'setPassword';
export const MUTATION_SET_PASSWORD_REPEAT = 'setPasswordRepeat';
export const MUTATION_SET_MESSAGE = 'setMessage';
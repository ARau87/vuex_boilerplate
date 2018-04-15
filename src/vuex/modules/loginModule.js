import firebase from 'firebase/app';
import 'firebase/auth';

const loginModule = {

    state: {

        isLoggedIn: false,
        usernameInput: '',
        passwordInput: '',
        passwordRepeatInput: '',
        message: {
            type: 100,
            text: 'Please login with your credentials!'
        }

    },

    mutations: {

        setMessage(state, message) {
            state.message = message;
        },
        setUsername(state, username) {
            state.usernameInput = username;
        },
        setPassword(state, password) {
            state.passwordInput = password;
        },
        setLoggedIn(state, isLoggedIn){
            state.isLoggedIn = isLoggedIn;
        }

    },


    actions: {

        login({state, commit}){

            firebase.auth().signInWithEmailAndPassword(state.usernameInput, state.passwordInput)
                           .then(() => {

                                commit(MUTATION_SET_MESSAGE, { type: 200, text: 'You have logged in successfully!' });
                                commit(MUTATION_SET_LOGGEDIN, true);

                           })
                           .catch((err) => {

                                commit(MUTATION_SET_MESSAGE, {type: 400, text: 'The credentials you provided are incorrect! Please try again!!!'});
                           });

        }
    }




}

export default loginModule;

export const ACTION_LOGIN = 'login';
export const MUTATION_SET_LOGGEDIN = 'setLoggedIn';
export const MUTATION_SET_MESSAGE = 'setMessage';
export const MUTATION_SET_USERNAME = 'setUsername';
export const MUTATION_SET_PASSWORD = 'setPassword';
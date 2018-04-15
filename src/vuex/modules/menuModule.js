import {purposes} from '../../components/bottom-button/BottomButton';

const menuModule = {

    state: {

        menuToggled: false,
        bottomButtonPurpose: null

    },
    mutations: {

        setButtonPurpose(state, purpose) {
            state.bottomButtonPurpose = purpose;
        }

    },
    actions: {

        toggleMenu({state, commit}){
            state.menuToggled = !state.menuToggled;

            if(state.menuToggled){
                commit(MUTATION_SET_PURPOSE, purposes.CLOSE_MENU);
            }
            else {
                commit(MUTATION_SET_PURPOSE, null);
            }
        }

    }

};

export const ACTION_TOGGLE_MENU = 'toggleMenu';
export const MUTATION_SET_PURPOSE = 'setButtonPurpose';
export default menuModule;
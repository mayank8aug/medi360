import { actions } from '../actions/notifications';

const initialState = {
    message: '',
    timeout: null,
    severity: ''
};

function notifications(prevState = initialState, action) {
    switch(action.type) {
        case actions.SET_NOTIFICATION:
            return Object.assign({}, prevState, {
                ...action.payload
            });
        case actions.CLEAR_NOTIFICATION:
            return initialState;
        default:
            return prevState;
    }
}

export default notifications;
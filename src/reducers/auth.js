import { actions } from '../actions/auth';

const initialState = {
    loading: false,
    loggedIn: false,
    userDetails: null
};

function auth(prevState = initialState, action) {
    switch (action.type) {
        case actions.REGISTER_USER:
            return Object.assign({}, prevState, {
                loading: true,
                userDetails: null
            });
        case actions.REGISTER_USER_SUCCESS:
            return Object.assign({}, prevState, {
                loading: false,
                loggedIn: true,
                userDetails: action.data
            });
        case actions.REGISTER_USER_FAIL:
            return Object.assign({}, prevState, {
                loading: false,
                loggedIn: false
            });
        case actions.LOGIN_USER:
            return Object.assign({}, prevState, {
                loading: true,
                userDetails: null
            });
        case actions.LOGIN_USER_SUCCESS:
            return Object.assign({}, prevState, {
                loading: false,
                loggedIn: true,
                userDetails: action.data
            });
        case actions.LOGIN_USER_FAIL:
            return Object.assign({}, prevState, {
                loading: false,
                loggedIn: false,
            });
        case actions.LOGOUT_USER:
            return Object.assign({}, prevState, {
                loggedIn: false,
                userDetails: null
            });
        default:
            return prevState;
    }
}

export default auth;
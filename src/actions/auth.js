export const actions = {
    REGISTER_USER: 'REGISTER_USER',
    REGISTER_USER_SUCCESS: 'REGISTER_USER_SUCCESS',
    REGISTER_USER_FAIL: 'REGISTER_USER_FAIL',
    LOGIN_USER: 'LOGIN_USER',
    LOGIN_USER_SUCCESS: 'LOGIN_USER_SUCCESS',
    LOGIN_USER_FAIL: 'LOGIN_USER_FAIL',
    LOGOUT_USER: 'LOGOUT_USER',
};

export function register(payload) {
    return {
        type: actions.REGISTER_USER,
        payload
    };
}

export function login(payload) {
    return {
        type: actions.LOGIN_USER,
        payload
    };
}

export function logout() {
    return {
        type: actions.LOGOUT_USER
    };
}
export const actions = {
    SET_NOTIFICATION: 'SET_NOTIFICATION',
    CLEAR_NOTIFICATION: 'CLEAR_NOTIFICATION'
};

export function setNotification(payload) {
    return {
        type: actions.SET_NOTIFICATION,
        payload
    };
}

export function clearNotification() {
    return {
        type: actions.CLEAR_NOTIFICATION
    };
}
export const actions = {
    GET_PROFILE: 'GET_PROFILE',
    GET_PROFILE_SUCCESS: 'GET_PROFILE_SUCCESS',
    GET_PROFILE_FAIL: 'GET_PROFILE_FAIL'
};

export function getProfile(payload) {
    return {
        type: actions.GET_PROFILE,
        payload
    };
}
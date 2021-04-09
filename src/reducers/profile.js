import { actions } from '../actions/profile';

const initialState = {
    loading: false,
    profile: null
};

function profile(prevState = initialState, action) {
    switch (action.type) {
        case actions.GET_PROFILE:
            return Object.assign({}, prevState, {
                loading: true,
                profile: null
            });
        case actions.GET_PROFILE_SUCCESS:
            return Object.assign({}, prevState, {
                loading: false,
                profile: action.data
            });
        case actions.GET_PROFILE_FAIL:
            return Object.assign({}, prevState, {
                loading: false,
                profile: null
            });
        default:
            return prevState;
    }
}

export default profile;
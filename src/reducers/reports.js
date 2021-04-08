import { actions } from '../actions/reports';

const initialState = {
    loading: false,
    created: false,
    reports: null
};

function reports(prevState = initialState, action) {
    switch (action.type) {
        case actions.CREATE_REPORT:
            return Object.assign({}, prevState, {
                loading: true,
                created: false
            });
        case actions.CREATE_REPORT_SUCCESS:
            return Object.assign({}, prevState, {
                loading: false,
                created: true
            });
        case actions.CREATE_REPORT_FAIL:
            return Object.assign({}, prevState, {
                loading: false,
                created: false
            });
        case actions.GET_REPORTS:
            return Object.assign({}, prevState, {
                loading: true,
                created: false
            });
        case actions.GET_REPORTS_SUCCESS:
            return Object.assign({}, prevState, {
                loading: false,
                reports: action.data
            });
        case actions.GET_REPORTS_FAIL:
            return Object.assign({}, prevState, {
                loading: false
            });
        default:
            return prevState;
    }
}

export default reports;
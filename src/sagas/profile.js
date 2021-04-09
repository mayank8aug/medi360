import { actions } from '../actions/profile';
import { actions as notificationActions } from '../actions/notifications';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { apiService } from '../api';

const SERVICE_API = 'https://api.backendless.com/84171686-6F45-01B0-FFBC-D588F51A6500/4DF9D9C0-E2F9-4EE2-A3A4-A896B3897C7F';
const api = apiService();

export function* getProfile({ payload }) {
    try {
        const url = `${SERVICE_API}/services/putprofile/getprofile`;
        let response = yield call(api.get, url, payload);
        yield put({
            type: actions.GET_PROFILE_SUCCESS,
            data: response.data[0]
        });
    } catch (error) {
        yield put({
            type: actions.GET_PROFILE_FAIL,
            error
        });
        yield put({
            type: notificationActions.SET_NOTIFICATION,
            payload: {
                message: error.message,
                severity: 'error',
                timeout: 5000
            }
        })
    }
}

export function* profile() {
    yield all([
        takeLatest(actions.GET_PROFILE, getProfile)
    ]);
}

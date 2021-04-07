import { actions } from '../actions/auth';
import { actions as notificationActions } from '../actions/notifications';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { apiService } from '../api';

const SERVICE_API = 'https://api.backendless.com/84171686-6F45-01B0-FFBC-D588F51A6500/4DF9D9C0-E2F9-4EE2-A3A4-A896B3897C7F';
const api = apiService();

export function* registerUser({ payload }) {
    try {
        const url = `${SERVICE_API}/services/login/putlogin`;
        const response = yield call(api.post, url, payload);
        yield put({
            type: actions.REGISTER_USER_SUCCESS,
            data: response.data
        });
    } catch (error) {
        yield put({
            type: actions.REGISTER_USER_FAIL,
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

export function* loginUser({ payload }) {
    try {
        const url = `${SERVICE_API}/services/login/getlogin`;
        const response = yield call(api.post, url, payload);
        yield put({
            type: actions.LOGIN_USER_SUCCESS,
            data: response.data
        });
    } catch (error) {
        yield put({
            type: actions.LOGIN_USER_FAIL,
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

export function* auth() {
    yield all([
        takeLatest(actions.REGISTER_USER, registerUser),
        takeLatest(actions.LOGIN_USER, loginUser)
    ]);
}

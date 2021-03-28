import { actions } from '../actions/auth';
import { actions as notificationActions } from '../actions/notifications';
import axios from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';

export function* registerUser({ payload }) {
    try {
        const url = '/register';
        const response = yield call(axios.post, url, payload);
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
        const url = '/login';
        const response = yield call(axios.post, url, payload);
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

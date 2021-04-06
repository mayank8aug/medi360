import { actions } from '../actions/reports';
import { actions as notificationActions } from '../actions/notifications';
import axios from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';

export function* createReport({ payload }) {
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }
    try {
        const url = '/reports/create';
        const response = yield call(axios.post, url, payload, config);
        yield put({
            type: actions.CREATE_REPORT_SUCCESS,
            data: response.data
        });
    } catch (error) {
        yield put({
            type: actions.CREATE_REPORT_FAIL,
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

export function* reports() {
    yield all([
        takeLatest(actions.CREATE_REPORT, createReport)
    ]);
}

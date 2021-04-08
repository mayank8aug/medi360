import { actions } from '../actions/reports';
import { actions as notificationActions } from '../actions/notifications';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { apiService } from '../api';

const SERVICE_API = 'https://api.backendless.com/84171686-6F45-01B0-FFBC-D588F51A6500/4DF9D9C0-E2F9-4EE2-A3A4-A896B3897C7F';
const api = apiService();

export function* createReport({ payload }) {
    try {
        const url = `${SERVICE_API}/services/fileapi/fileapi`;
        const filename = `file_${new Date().getTime()}.png`;
        let response = yield call(api.put, url, { filename, filecontent: payload.report });
        const reportPayload = payload.values;
        reportPayload.filepath = response.data;
        reportPayload.filename = filename;
        response = yield call(api.put, `${SERVICE_API}/services/putreport/putreport`, payload);
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

export function* getReports({ payload }) {
    try {
        const url = `${SERVICE_API}/services/getreport/getreport`;
        let response = yield call(api.get, url, payload);
        yield put({
            type: actions.GET_REPORTS_SUCCESS,
            data: response.data
        });
    } catch (error) {
        yield put({
            type: actions.GET_REPORTS_FAIL,
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
        takeLatest(actions.CREATE_REPORT, createReport),
        takeLatest(actions.GET_REPORTS, getReports)
    ]);
}

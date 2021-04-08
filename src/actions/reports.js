export const actions = {
    CREATE_REPORT: 'CREATE_REPORT',
    CREATE_REPORT_SUCCESS: 'CREATE_REPORT_SUCCESS',
    CREATE_REPORT_FAIL: 'CREATE_REPORT_FAIL',
    GET_REPORTS: 'GET_REPORTS',
    GET_REPORTS_SUCCESS: 'GET_REPORTS_SUCCESS',
    GET_REPORTS_FAIL: 'GET_REPORTS_FAIL'
};

export function createReport(payload) {
    return {
        type: actions.CREATE_REPORT,
        payload
    };
}

export function getReports(payload) {
    return {
        type: actions.GET_REPORTS,
        payload
    };
}
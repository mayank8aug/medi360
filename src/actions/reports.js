export const actions = {
    CREATE_REPORT: 'CREATE_REPORT',
    CREATE_REPORT_SUCCESS: 'CREATE_REPORT_SUCCESS',
    CREATE_REPORT_FAIL: 'CREATE_REPORT_FAIL'
};

export function createReport(payload) {
    return {
        type: actions.CREATE_REPORT,
        payload
    };
}
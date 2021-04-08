import { combineReducers } from 'redux';
import sidebar from './sidebar';
import notifications from './notifications';
import auth from './auth';
import reports from './reports';

export default combineReducers({
    sidebar,
    notifications,
    auth,
    reports
})
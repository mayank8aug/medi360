import { combineReducers } from 'redux';
import sidebar from './sidebar';
import notifications from './notifications';
import auth from './auth';
import reports from './reports';
import profile from './profile';

export default combineReducers({
    sidebar,
    notifications,
    auth,
    reports,
    profile
})
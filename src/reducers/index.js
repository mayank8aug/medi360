import { combineReducers } from 'redux';
import sidebar from './sidebar';
import notifications from './notifications';
import auth from './auth';

export default combineReducers({
    sidebar,
    notifications,
    auth
})
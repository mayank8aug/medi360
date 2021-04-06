import { all } from 'redux-saga/effects';
import { auth } from './auth'
import { reports } from './reports';

export default function* rootSaga() {
  yield all([
    auth(),
    reports()
  ]);
}
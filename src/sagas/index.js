import { call, all } from 'redux-saga/effects';
import initSaga from './initSaga';
import canteensSaga from './canteensSaga';
import dishesSaga from './dishesSaga';

export default function*() {
  yield all([canteensSaga, dishesSaga, initSaga].map(call));
}

import { call, all } from 'redux-saga/effects';
import counterSaga from './counterSaga';
import canteensSaga from './canteensSaga';

export default function*() {
  yield all([counterSaga, canteensSaga].map(call));
}

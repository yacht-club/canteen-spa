import { put, takeLatest, call } from 'redux-saga/effects';
import * as canteens from 'modules/canteens';
import { fetchCanteens } from 'api/canteens';

function* getCanteensStart() {
  try {
    const result = yield call(fetchCanteens);

    yield put(
      canteens.getCanteensSucceeded({
        items: result,
      })
    );
  } catch (e) {
    console.error(e);
  }
}

export default function*() {
  yield takeLatest(canteens.GET_CANTEENS_START, getCanteensStart);
}

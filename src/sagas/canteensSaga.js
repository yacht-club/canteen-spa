import { put, takeLatest, call } from 'redux-saga/effects';
import * as canteens from 'modules/canteens';
import * as dishes from 'modules/dishes';
import { fetchCanteens } from 'api/canteens';
import { fetchDishes } from 'api/dishes';

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

function* getDishes(action) {
  try {
    const result = yield call(fetchDishes, { canteenUid: action.value });

    yield put(
      dishes.getDishesSucceeded({
        items: result,
      })
    );
  } catch (e) {
    console.error(e);
  }
}

export default function*() {
  yield takeLatest(canteens.GET_CANTEENS_START, getCanteensStart);
  yield takeLatest(canteens.SET_SELECTED_CANTEEN, getDishes);
}

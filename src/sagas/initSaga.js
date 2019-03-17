import { put, takeLatest, select, call } from 'redux-saga/effects';
import * as canteens from 'modules/canteens';
import * as dishes from 'modules/dishes';
import * as filters from 'modules/filters';
import * as selectors from 'modules/selectors';

function* initApp() {
  yield put(canteens.getCanteensStart());
  yield put(filters.getFiltersStart());
}

function* fetchCanteenDishes() {
  const selectedCanteenUid = yield select(canteens.currentCanteenUidSelector);
  const dishesForCanteenUid = yield select(state => state.dishes.canteenUid);
  if (selectedCanteenUid && selectedCanteenUid !== dishesForCanteenUid) {
    yield put(dishes.getDishesStart({ canteenUid: selectedCanteenUid }));
  }

  const isCartPage = yield select(selectors.isCartPage);
  const canteenUid = yield select(state => state.cart.canteenUid);
  if (isCartPage && dishesForCanteenUid !== canteenUid) {
    yield put(dishes.getDishesStart({ canteenUid }));
  }
}

export default function*() {
  yield call(initApp);
  yield takeLatest('@@router/LOCATION_CHANGE', fetchCanteenDishes);
}

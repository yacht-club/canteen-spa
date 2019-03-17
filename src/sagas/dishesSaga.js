import { put, takeLatest, call } from 'redux-saga/effects';
import * as dishes from 'modules/dishes';
import { fetchDishes } from 'api/dishes';

function* getDishesStart(action) {
  try {
    const result = yield call(fetchDishes, {
      canteenUid: action.canteenUid,
    });

    yield put(
      dishes.getDishesSucceeded({
        items: result,
        canteenUid: action.canteenUid,
      })
    );
  } catch (e) {
    yield put(dishes.getDishesFailed());
  }
}

export default function*() {
  yield takeLatest(dishes.GET_DISHES_START, getDishesStart);
}

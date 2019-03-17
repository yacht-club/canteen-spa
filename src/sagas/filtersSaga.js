import { put, takeLatest, call } from 'redux-saga/effects';
import * as filters from 'modules/filters';
import { fetchFilters } from 'api/filters';

function* getFiltersStart() {
  try {
    const result = yield call(fetchFilters);

    yield put(
      filters.getFiltersSucceeded({
        items: result,
      })
    );
  } catch (e) {
    yield put(filters.getFiltersFailed());
  }
}

export default function*() {
  yield takeLatest(filters.GET_FILTERS_START, getFiltersStart);
}

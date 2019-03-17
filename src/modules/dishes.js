import update from 'immutability-helper';

import createReducer from 'utils/createReducer';
import status from 'constants/status';
import { currentCanteenUidSelector } from './canteens';

const defaultState = {
  items: [],
  status: status.WAITING,
  canteenUid: null,
};

export const GET_DISHES_START = 'DISHES/GET_DISHES/START';
export const getDishesStart = ({ canteenUid }) => ({ type: GET_DISHES_START, canteenUid });

export const GET_DISHES_SUCCEEDED = 'DISHES/GET_DISHES/SUCCEEDED';
export const getDishesSucceeded = ({ items, canteenUid }) => ({ type: GET_DISHES_SUCCEEDED, items, canteenUid });

export const GET_DISHES_FAILED = 'DISHES/GET_DISHES/FAILED';
export const getDishesFailed = () => ({ type: GET_DISHES_FAILED });

export const reducer = createReducer(defaultState, {
  [GET_DISHES_START]: state =>
    update(state, {
      status: { $set: status.LOADING },
    }),

  [GET_DISHES_SUCCEEDED]: (state, payload) =>
    update(state, {
      status: { $set: status.SUCCEEDED },
      items: { $set: payload.items },
      canteenUid: { $set: payload.canteenUid },
    }),

  [GET_DISHES_FAILED]: state =>
    update(state, {
      status: { $set: status.FAILED },
      items: { $set: [] },
      canteenUid: { $set: null },
    }),

  '@@router/LOCATION_CHANGE': state =>
    currentCanteenUidSelector(state) && currentCanteenUidSelector(state) !== state.canteenUid
      ? update(state, { items: { $set: [] }, status: { $set: status.WAITING } })
      : state,
});

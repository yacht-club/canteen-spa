import update from 'immutability-helper';

import createReducer from 'utils/createReducer';
import status from 'constants/status';

const defaultState = {
  items: [],
  status: status.WAITING,
};

export const GET_DISHES_START = 'DISHES/GET_DISHES/START';
export const getDishesStart = () => ({ type: GET_DISHES_START });

export const GET_DISHES_SUCCEEDED = 'DISHES/GET_DISHES/SUCCEEDED';
export const getDishesSucceeded = ({ items }) => ({ type: GET_DISHES_SUCCEEDED, items });

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
    }),

  [GET_DISHES_FAILED]: state =>
    update(state, {
      status: { $set: status.FAILED },
    }),
});

import update from 'immutability-helper';

import createReducer from 'utils/createReducer';
import status from 'constants/status';

const defaultState = {
  items: [],
  status: status.WAITING,
};

export const GET_CANTEENS_START = 'CANTEENS/GET_CANTEENS/START';
export const getCanteensStart = () => ({ type: GET_CANTEENS_START });

export const GET_CANTEENS_SUCCEEDED = 'CANTEENS/GET_CANTEENS/SUCCEEDED';
export const getCanteensSucceeded = ({ items }) => ({ type: GET_CANTEENS_SUCCEEDED, items });

export const GET_CANTEENS_FAILED = 'CANTEENS/GET_CANTEENS/FAILED';
export const getCanteensFailed = () => ({ type: GET_CANTEENS_FAILED });

export const reducer = createReducer(defaultState, {
  [GET_CANTEENS_START]: state =>
    update(state, {
      status: { $set: status.LOADING },
    }),

  [GET_CANTEENS_SUCCEEDED]: (state, payload) =>
    update(state, {
      status: { $set: status.SUCCEEDED },
      items: { $set: payload.items },
    }),

  [GET_CANTEENS_FAILED]: state =>
    update(state, {
      status: { $set: status.FAILED },
    }),
});

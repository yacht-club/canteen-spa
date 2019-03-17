import update from 'immutability-helper';

import createReducer from 'utils/createReducer';
import status from 'constants/status';

const defaultState = {
  availableCategories: [],
  selectedCategory: null,
  status: status.WAITING,
};

export const GET_FILTERS_START = 'DISHES/GET_FILTERS/START';
export const getFiltersStart = () => ({ type: GET_FILTERS_START });

export const GET_FILTERS_SUCCEEDED = 'DISHES/GET_FILTERS/SUCCEEDED';
export const getFiltersSucceeded = ({ items }) => ({ type: GET_FILTERS_SUCCEEDED, items });

export const GET_FILTERS_FAILED = 'DISHES/GET_FILTERS/FAILED';
export const getFiltersFailed = () => ({ type: GET_FILTERS_FAILED });

export const SET_SELECTED_CATEGORY = 'FILTER/SET_SELECTED_CATEGORY';
export const setSelectedCategory = ({ value }) => ({ type: SET_SELECTED_CATEGORY, value });

export const RESET_SELECTED_CATEGORY = 'FILTER/RESET_SELECTED_CATEGORY';
export const resetSelectedCategory = () => ({ type: RESET_SELECTED_CATEGORY });

export const reducer = createReducer(defaultState, {
  [GET_FILTERS_START]: state =>
    update(state, {
      status: { $set: status.LOADING },
      availableCategories: { $set: [] },
    }),

  [GET_FILTERS_SUCCEEDED]: (state, payload) =>
    update(state, {
      status: { $set: status.SUCCEEDED },
      availableCategories: { $set: payload.items },
    }),

  [GET_FILTERS_FAILED]: state =>
    update(state, {
      status: { $set: status.FAILED },
      availableCategories: { $set: [] },
    }),
  [SET_SELECTED_CATEGORY]: (state, payload) =>
    update(state, {
      selectedCategory: { $set: payload.value },
    }),
  [RESET_SELECTED_CATEGORY]: state =>
    update(state, {
      selectedCategory: { $set: null },
    }),
});

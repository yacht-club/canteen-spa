import update from 'immutability-helper';

import createReducer from 'utils/createReducer';

const defaultState = {
  selectedCategory: null,
};

export const SET_SELECTED_CATEGORY = 'FILTER/SET_SELECTED_CATEGORY';
export const setSelectedCanteen = ({ value }) => ({ type: SET_SELECTED_CATEGORY, value });

export const reducer = createReducer(defaultState, {
  [SET_SELECTED_CATEGORY]: (state, payload) =>
    update(state, {
      selectedCategory: { $set: payload.value },
    }),
});

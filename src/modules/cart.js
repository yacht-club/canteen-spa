import update from 'immutability-helper';

import createReducer from 'utils/createReducer';

const defaultState = {
  items: [],
  canteenUid: null,
};

export const ADD_TO_CART = 'CART/ADD_TO_CART';
export const addToCart = ({ dishUid, canteenUid }) => ({ type: ADD_TO_CART, dishUid, canteenUid });

export const reducer = createReducer(defaultState, {
  [ADD_TO_CART]: (state, payload) =>
    payload.canteenUid === state.canteenUid
      ? update(state, {
          items: { $push: [payload.dishUid] },
        })
      : update(state, {
          items: { $set: [payload.dishUid] },
          canteenUid: { $set: payload.canteenUid },
        }),
});

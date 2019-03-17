export default function createReducer(initialState, handlers) {
  return function reducer(state = initialState, action, globalState) {
    if (Object.prototype.hasOwnProperty.call(handlers, action.type)) {
      return handlers[action.type](state, action, globalState);
    }

    return state;
  };
}

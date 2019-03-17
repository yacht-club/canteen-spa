/* eslint no-restricted-syntax: ["error"] */

export default function combineReducers(reducers) {
  const finalReducers: MappedReducers = {};
  for (const key of Object.keys(reducers)) {
    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }

  const finalReducerKeys = Object.keys(finalReducers);

  return function combination(state = {}, action, globalState = state) {
    let hasChanged: boolean = false;
    const nextState: State = {};
    for (const key of finalReducerKeys) {
      const reducer = finalReducers[key];
      const previousStateForKey = state[key];
      const nextStateForKey = reducer(previousStateForKey, action, globalState);
      nextState[key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }
    return hasChanged ? nextState : state;
  };
}

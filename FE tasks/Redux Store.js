const INCREMENT = 'increment';
const DECREMENT = 'decrement';

const createStore = (reducer) => {
  // implement store
  let state = {
    counter: 0
  }

  let listeners = [];

  // returns store object
  return {
    getState: () => {
      return state;
    },
    subscribe: (callback) => {
      listeners.push(callback);

      return () => {
        listeners = listeners.filter(cb => cb !== callback);
      }
    },
    dispatch: (action) => {
      state = reducer(action, state);

      for (const cb of listeners) {
        cb();
      }
    }
  }
}

const CounterReducer = (action, state) => {
  // implement reducer
  switch (action) {
    case INCREMENT: {
      return {
        ...state,
        counter: state.counter + 1,
      }
    }
    case DECREMENT: {
      return {
        ...state,
        counter: state.counter - 1,
      }
    }
    default: {
      return state;
    }
  }
}

const store = createStore(CounterReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(INCREMENT); // dispatch increment
store.dispatch(INCREMENT); // dispatch increment
store.dispatch(DECREMENT); // dispatch decrement
store.dispatch(DECREMENT); // dispatch decrement
store.dispatch(DECREMENT); // dispatch decrement

unsubscribe();

store.dispatch(INCREMENT); // dispatch increment

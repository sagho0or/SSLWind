import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import rootSaga from './saga';
import rootReducer from './rootReducer';

const sagaMiddleware = createSagaMiddleware();

const makeStore = () => {
  const store = configureStore({
    reducer: (state, action) => {
      if (action.type === HYDRATE) {
        return {
          ...state,
          ...action.payload as any,
        };
      } else {
        return rootReducer(state, action);
      }
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
  });

  (store as any).sagaTask = sagaMiddleware.run(rootSaga); 
  return store;
};

export const wrapper = createWrapper(makeStore);

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

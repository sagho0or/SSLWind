import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { createWrapper, HYDRATE, Context, MakeStore } from 'next-redux-wrapper';
import rootSaga from './saga';
import rootReducer from './rootReducer';
import { useMemo } from 'react';

const sagaMiddleware = createSagaMiddleware();

const makeStore: MakeStore<any> = (context: Context) => {
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

export const wrapper = createWrapper<ReturnType<typeof makeStore>>(makeStore);

export function useStore(initialState: any) {
  const store = useMemo(() => makeStore(initialState), [initialState]);
  return store;
}

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;

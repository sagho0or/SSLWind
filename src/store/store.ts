// store.ts
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import rootSaga from './saga';
import { HYDRATE } from 'next-redux-wrapper';

const sagaMiddleware = createSagaMiddleware();

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

sagaMiddleware.run(rootSaga);

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

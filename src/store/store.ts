import createSagaMiddleware from "redux-saga";
import {configureStore} from "@reduxjs/toolkit";
import rootSaga from "@/store/saga";
import rootReducer from "@/store/rootReducer";

const sagaMiddleware = createSagaMiddleware();
const store =configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware),
})
sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;

export default store;
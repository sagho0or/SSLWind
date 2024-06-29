"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.useStore = exports.wrapper = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var redux_saga_1 = require("redux-saga");
var next_redux_wrapper_1 = require("next-redux-wrapper");
var saga_1 = require("./saga");
var rootReducer_1 = require("./rootReducer");
var react_1 = require("react");
var sagaMiddleware = redux_saga_1["default"]();
var makeStore = function (context) {
    var store = toolkit_1.configureStore({
        reducer: function (state, action) {
            if (action.type === next_redux_wrapper_1.HYDRATE) {
                return __assign(__assign({}, state), action.payload);
            }
            else {
                return rootReducer_1["default"](state, action);
            }
        },
        middleware: function (getDefaultMiddleware) {
            return getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware);
        }
    });
    store.sagaTask = sagaMiddleware.run(saga_1["default"]);
    return store;
};
exports.wrapper = next_redux_wrapper_1.createWrapper(makeStore);
function useStore(initialState) {
    var store = react_1.useMemo(function () { return makeStore(initialState); }, [initialState]);
    return store;
}
exports.useStore = useStore;

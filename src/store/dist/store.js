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
// store.ts
var toolkit_1 = require("@reduxjs/toolkit");
var redux_saga_1 = require("redux-saga");
var rootReducer_1 = require("./rootReducer");
var saga_1 = require("./saga");
var next_redux_wrapper_1 = require("next-redux-wrapper");
var sagaMiddleware = redux_saga_1["default"]();
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
sagaMiddleware.run(saga_1["default"]);
exports["default"] = store;

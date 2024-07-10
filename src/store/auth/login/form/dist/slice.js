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
var _a;
exports.__esModule = true;
exports.loginFailure = exports.loginSuccess = exports.loginLoading = void 0;
// slice.ts
var toolkit_1 = require("@reduxjs/toolkit");
var next_redux_wrapper_1 = require("next-redux-wrapper");
var initialState = {
    isLoading: false,
    isDone: false,
    hasError: false,
    response: '',
    data: null
};
var loginSlice = toolkit_1.createSlice({
    name: 'login',
    initialState: initialState,
    reducers: {
        loginLoading: function (state, action) {
            state.isLoading = true;
            state.isDone = false;
            state.hasError = false;
            state.data = action.payload;
        },
        loginSuccess: function (state, action) {
            state.isLoading = false;
            state.isDone = true;
            state.hasError = false;
            state.response = action.payload;
        },
        loginFailure: function (state) {
            state.isLoading = false;
            state.isDone = false;
            state.hasError = true;
        }
    },
    extraReducers: function (builder) {
        builder.addCase(next_redux_wrapper_1.HYDRATE, function (state, action) {
            return __assign(__assign({}, state), action.payload.login);
        });
    }
});
exports.loginLoading = (_a = loginSlice.actions, _a.loginLoading), exports.loginSuccess = _a.loginSuccess, exports.loginFailure = _a.loginFailure;
exports["default"] = loginSlice.reducer;

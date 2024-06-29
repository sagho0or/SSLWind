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
exports.loginOtpFailure = exports.loginOtpSuccess = exports.loginOtpLoading = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var next_redux_wrapper_1 = require("next-redux-wrapper");
var initialState = {
    isLoading: false,
    isDone: false,
    hasError: false,
    response: null,
    data: null
};
var loginOtpSlice = toolkit_1.createSlice({
    name: 'loginOtp',
    initialState: initialState,
    reducers: {
        loginOtpLoading: function (state, action) {
            state.isLoading = true;
            state.isDone = false;
            state.hasError = false;
            state.data = action.payload;
        },
        loginOtpSuccess: function (state, action) {
            state.isLoading = false;
            state.isDone = true;
            state.hasError = false;
            state.response = action.payload;
        },
        loginOtpFailure: function (state) {
            state.isLoading = false;
            state.isDone = false;
            state.hasError = true;
        }
    },
    extraReducers: function (builder) {
        builder.addCase(next_redux_wrapper_1.HYDRATE, function (state, action) {
            return __assign(__assign({}, state), action.payload.loginOtp);
        });
    }
});
exports.loginOtpLoading = (_a = loginOtpSlice.actions, _a.loginOtpLoading), exports.loginOtpSuccess = _a.loginOtpSuccess, exports.loginOtpFailure = _a.loginOtpFailure;
exports["default"] = loginOtpSlice.reducer;

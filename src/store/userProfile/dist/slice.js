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
exports.getUserProfileFailure = exports.getUserProfileSuccess = exports.getUserProfileLoading = void 0;
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
var getUserProfileSlice = toolkit_1.createSlice({
    name: 'userProfile',
    initialState: initialState,
    reducers: {
        getUserProfileLoading: function (state) {
            state.isLoading = true;
            state.isDone = false;
            state.hasError = false;
        },
        getUserProfileSuccess: function (state, action) {
            state.isLoading = false;
            state.isDone = true;
            state.hasError = false;
            state.data = action.payload;
        },
        getUserProfileFailure: function (state) {
            state.isLoading = false;
            state.isDone = false;
            state.hasError = true;
        }
    },
    extraReducers: function (builder) {
        builder.addCase(next_redux_wrapper_1.HYDRATE, function (state, action) {
            return __assign(__assign({}, state), action.payload.userProfile);
        });
    }
});
exports.getUserProfileLoading = (_a = getUserProfileSlice.actions, _a.getUserProfileLoading), exports.getUserProfileSuccess = _a.getUserProfileSuccess, exports.getUserProfileFailure = _a.getUserProfileFailure;
exports["default"] = getUserProfileSlice.reducer;

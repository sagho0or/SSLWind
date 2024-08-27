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
exports.fetchChatResponseFailure = exports.fetchChatResponseSuccess = exports.fetchChatResponse = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var next_redux_wrapper_1 = require("next-redux-wrapper");
var initialState = {
    isLoading: false,
    isDone: false,
    hasError: false,
    response: null
};
var chatSlice = toolkit_1.createSlice({
    name: 'chat',
    initialState: initialState,
    reducers: {
        fetchChatResponse: function (state, action) {
            state.isLoading = true;
            state.isDone = false;
            state.hasError = false;
        },
        fetchChatResponseSuccess: function (state, action) {
            state.isLoading = false;
            state.isDone = true;
            state.response = action.payload;
        },
        fetchChatResponseFailure: function (state) {
            state.isLoading = false;
            state.isDone = false;
            state.hasError = true;
        }
    },
    extraReducers: function (builder) {
        builder.addCase(next_redux_wrapper_1.HYDRATE, function (state, action) {
            return __assign(__assign({}, state), action.payload.chat);
        });
    }
});
exports.fetchChatResponse = (_a = chatSlice.actions, _a.fetchChatResponse), exports.fetchChatResponseSuccess = _a.fetchChatResponseSuccess, exports.fetchChatResponseFailure = _a.fetchChatResponseFailure;
exports["default"] = chatSlice.reducer;

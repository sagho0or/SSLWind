"use strict";
exports.__esModule = true;
var toolkit_1 = require("@reduxjs/toolkit");
var slice_1 = require("@/store/auth/login/form/slice");
var slice_2 = require("@/store/auth/login/otp/slice");
var rootReducer = toolkit_1.combineReducers({
    // userProfile: getUserProfileReducer,
    // refreshToken: refreshTokenReducer,
    login: slice_1["default"],
    loginOtp: slice_2["default"]
});
exports["default"] = rootReducer;

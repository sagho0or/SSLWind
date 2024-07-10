"use strict";
exports.__esModule = true;
var toolkit_1 = require("@reduxjs/toolkit");
var slice_1 = require("@/store/auth/login/form/slice");
var reducer_1 = require("@/store/auth/register/registerMobile/reducer");
var slice_2 = require("@/store/auth/login/otp/slice");
var reducer_2 = require("./auth/register/registerOtp/reducer");
var reducer_3 = require("./auth/register/registerIdentity/reducer");
var reducer_4 = require("@/store/auth/register/registerPassword/reducer");
var reducer_5 = require("@/store/auth/otp/resendOtpSms/reducer");
var reducer_6 = require("@/store/userProfile/reducer");
var reducer_7 = require("@/store/security/verify/reducer");
var reducer_8 = require("@/store/security/activeGA/reducer");
var reducer_9 = require("@/store/security/editPassword/reducer");
var reducer_10 = require("@/store/security/authHistory/reducer");
var reducer_11 = require("@/store/security/change2FA/reducer");
var reducer_12 = require("@/store/history/reducer");
var reducer_13 = require("@/store/auth/refreshToken/reducer");
var rootReducer = toolkit_1.combineReducers({
    userProfile: reducer_6["default"],
    refreshToken: reducer_13["default"],
    login: slice_1["default"],
    loginOtp: slice_2["default"],
    resendOtpSms: reducer_5["default"],
    registerMobile: reducer_1["default"],
    registerOtp: reducer_2["default"],
    registerIdentity: reducer_3["default"],
    registerPassword: reducer_4["default"],
    activeGA: reducer_8["default"],
    change2FA: reducer_11["default"],
    verifyTwoFactorAuthentication: reducer_7["default"],
    editPassword: reducer_9["default"],
    authHistory: reducer_10["default"],
    orderHistory: reducer_12["default"]
});
exports["default"] = rootReducer;

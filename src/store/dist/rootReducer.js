"use strict";
exports.__esModule = true;
var toolkit_1 = require("@reduxjs/toolkit");
var reducer_1 = require("@/store/auth/login/form/reducer");
var reducer_2 = require("@/store/auth/register/registerMobile/reducer");
var reducer_3 = require("@/store/auth/login/otp/reducer");
var reducer_4 = require("./auth/register/registerOtp/reducer");
var reducer_5 = require("./auth/register/registerIdentity/reducer");
var reducer_6 = require("@/store/auth/register/registerPassword/reducer");
var reducer_7 = require("@/store/auth/otp/resendOtpSms/reducer");
var reducer_8 = require("@/store/userProfile/reducer");
var reducer_9 = require("@/store/security/verify/reducer");
var reducer_10 = require("@/store/security/activeGA/reducer");
var reducer_11 = require("@/store/security/editPassword/reducer");
var reducer_12 = require("@/store/security/authHistory/reducer");
var reducer_13 = require("@/store/security/change2FA/reducer");
var reducer_14 = require("@/store/history/reducer");
var reducer_15 = require("@/store/auth/refreshToken/reducer");
var rootReducer = toolkit_1.combineReducers({
    userProfile: reducer_8["default"],
    refreshToken: reducer_15["default"],
    login: reducer_1["default"],
    loginOtp: reducer_3["default"],
    resendOtpSms: reducer_7["default"],
    registerMobile: reducer_2["default"],
    registerOtp: reducer_4["default"],
    registerIdentity: reducer_5["default"],
    registerPassword: reducer_6["default"],
    activeGA: reducer_10["default"],
    change2FA: reducer_13["default"],
    verifyTwoFactorAuthentication: reducer_9["default"],
    editPassword: reducer_11["default"],
    authHistory: reducer_12["default"],
    orderHistory: reducer_14["default"]
});
exports["default"] = rootReducer;

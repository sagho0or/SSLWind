"use strict";
exports.__esModule = true;
var toolkit_1 = require("@reduxjs/toolkit");
var slice_1 = require("@/store/auth/login/form/slice");
var rootReducer = toolkit_1.combineReducers({
    login: slice_1["default"]
});
exports["default"] = rootReducer;

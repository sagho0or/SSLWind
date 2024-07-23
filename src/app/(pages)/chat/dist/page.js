'use client';
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var isMobileView_1 = require("@/app/utils/isMobileView");
var mobileMenu_1 = require("@/app/components/Header/mobileMenu");
var MobileChat_1 = require("@/app/components/Chat/MobileChat");
var WebChat_1 = require("@/app/components/Chat/WebChat");
function Chat() {
    return (react_1["default"].createElement(react_1["default"].Fragment, null, isMobileView_1["default"] ?
        react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement(MobileChat_1["default"], null),
            react_1["default"].createElement(mobileMenu_1["default"], null))
        :
            react_1["default"].createElement(WebChat_1["default"], null)));
}
exports["default"] = Chat;

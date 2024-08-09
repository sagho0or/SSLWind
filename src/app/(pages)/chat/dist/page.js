'use client';
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var isMobileView_1 = require("@/app/utils/isMobileView");
var MobileChat_1 = require("@/app/components/Chat/MobileChat");
var WebChat_1 = require("@/app/components/Chat/WebChat");
var ShowInnerComponentContext_1 = require("@/app/ShowInnerComponentContext");
function Chat() {
    var setShowInnerComponent = ShowInnerComponentContext_1.useShowInnerComponent().setShowInnerComponent;
    return (react_1["default"].createElement(react_1["default"].Fragment, null, isMobileView_1["default"] ? (react_1["default"].createElement(MobileChat_1["default"], { setShowInnerComponent: setShowInnerComponent })) : (react_1["default"].createElement(WebChat_1["default"], null))));
}
exports["default"] = Chat;

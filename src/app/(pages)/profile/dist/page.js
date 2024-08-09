'use client';
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var isMobileView_1 = require("@/app/utils/isMobileView");
var MobileProfile_1 = require("@/app/components/Profile/MobileProfile");
var WebProfile_1 = require("@/app/components/Profile/WebProfile");
var ShowInnerComponentContext_1 = require("@/app/ShowInnerComponentContext");
function Profile() {
    var setShowInnerComponent = ShowInnerComponentContext_1.useShowInnerComponent().setShowInnerComponent;
    return (react_1["default"].createElement(react_1["default"].Fragment, null, isMobileView_1["default"] ?
        react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement(MobileProfile_1["default"], { setShowInnerComponent: setShowInnerComponent }))
        :
            react_1["default"].createElement(WebProfile_1["default"], null)));
}
exports["default"] = Profile;

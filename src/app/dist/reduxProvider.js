// ReduxProvider.tsx
"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var store_1 = require("@/store/store"); // Adjust the path as needed
var ReduxProvider = function (_a) {
    var children = _a.children;
    return react_1["default"].createElement(react_redux_1.Provider, { store: store_1["default"] }, children);
};
exports["default"] = ReduxProvider;

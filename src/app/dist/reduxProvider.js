"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var store_1 = require("@/store/store");
var ReduxProvider = function (_a) {
    var children = _a.children, initialProps = _a.initialProps;
    var store = store_1.useStore(initialProps);
    return react_1["default"].createElement(react_redux_1.Provider, { store: store }, children);
};
exports["default"] = ReduxProvider;

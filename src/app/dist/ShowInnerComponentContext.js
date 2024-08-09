'use client';
"use strict";
exports.__esModule = true;
exports.useShowInnerComponent = exports.ShowInnerComponentProvider = void 0;
var react_1 = require("react");
//Create Context
var ShowInnerComponentContext = react_1.createContext(null);
//Create a Provider
exports.ShowInnerComponentProvider = function (_a) {
    var children = _a.children;
    var _b = react_1.useState(true), showInnerComponent = _b[0], setShowInnerComponent = _b[1];
    return (react_1["default"].createElement(ShowInnerComponentContext.Provider, { value: { showInnerComponent: showInnerComponent, setShowInnerComponent: setShowInnerComponent } }, children));
};
// Custom Hook to use the context
exports.useShowInnerComponent = function () {
    return react_1.useContext(ShowInnerComponentContext);
};

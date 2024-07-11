'use client';
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Footer_1 = require("../Footer");
function DefaultLayer(props) {
    return (react_1["default"].createElement("div", null,
        props.children,
        react_1["default"].createElement(Footer_1["default"], null)));
}
exports["default"] = DefaultLayer;

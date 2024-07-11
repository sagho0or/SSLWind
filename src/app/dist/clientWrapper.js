'use client';
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var isMobileView_1 = require("@/app/utils/isMobileView");
var webHeader_1 = require("@/app/components/Header/webHeader");
function ClientWrapper(_a) {
    var children = _a.children;
    var _b = react_1.useState(false), load = _b[0], setLoad = _b[1];
    react_1.useEffect(function () {
        setLoad(true);
    }, []);
    return (react_1["default"].createElement(react_1["default"].Fragment, null, load &&
        react_1["default"].createElement(react_1["default"].Fragment, null, isMobileView_1["default"] ?
            react_1["default"].createElement("div", { className: 'min-h-screen' }, children)
            :
                react_1["default"].createElement(react_1["default"].Fragment, null,
                    react_1["default"].createElement(webHeader_1["default"], null),
                    react_1["default"].createElement("div", { className: "pt-20 h-screen " }, children)))));
}
exports["default"] = ClientWrapper;

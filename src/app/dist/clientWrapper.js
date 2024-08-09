'use client';
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var isMobileView_1 = require("@/app/utils/isMobileView");
var webHeader_1 = require("@/app/components/Header/webHeader");
var navigation_1 = require("next/navigation");
var Menu_1 = require("./components/SafeLLM/Menu");
var ShowInnerComponentContext_1 = require("./ShowInnerComponentContext");
var pages = {
    '/dashboard': 'Dashboard',
    '/profile': 'Profile',
    '/chat': 'Chat',
    '/settings': 'Settings'
};
function ClientWrapper(_a) {
    var children = _a.children;
    var _b = react_1.useState(false), load = _b[0], setLoad = _b[1];
    var currentPath = navigation_1.usePathname();
    var pageTitle = pages[currentPath] || 'SSLM Dashboard';
    var _c = ShowInnerComponentContext_1.useShowInnerComponent(), showInnerComponent = _c.showInnerComponent, setShowInnerComponent = _c.setShowInnerComponent;
    react_1.useEffect(function () {
        setLoad(true);
        document.title = pageTitle;
    }, [pageTitle]);
    return (react_1["default"].createElement(react_1["default"].Fragment, null, load && (react_1["default"].createElement(react_1["default"].Fragment, null, isMobileView_1["default"] ? (react_1["default"].createElement("div", { className: "min-h-screen flex flex-col" }, !showInnerComponent ? (react_1["default"].createElement(Menu_1["default"], { currentPath: currentPath, setShowInnerComponent: setShowInnerComponent })) : (children))) : (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(webHeader_1["default"], null),
        react_1["default"].createElement("div", { className: "pt-20 h-screen" }, children)))))));
}
exports["default"] = ClientWrapper;

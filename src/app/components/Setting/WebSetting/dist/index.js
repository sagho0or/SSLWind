"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Sidebar_1 = require("@/app/components/Sidebar");
function WebSettingComponent() {
    var _a = react_1.useState(true), isSidebarOpen = _a[0], setIsSidebarOpen = _a[1];
    return (react_1["default"].createElement(Sidebar_1["default"], { isSidebarOpen: isSidebarOpen, setIsSidebarOpen: setIsSidebarOpen },
        react_1["default"].createElement("div", { className: "flex flex-col" })));
}
exports["default"] = WebSettingComponent;

'use client';
"use strict";
exports.__esModule = true;
var Icons_1 = require("../../../../public/Icons");
var navigation_1 = require("next/navigation");
var isMobileView_1 = require("@/app/utils/isMobileView");
var react_1 = require("react");
var Sidebar_1 = require("@/app/components/Sidebar");
var defaultSidebarStatus_1 = require("@/app/utils/defaultSidebarStatus");
var EditPassword_1 = require("@/app/components/Security/EditPassword");
var AuthHistory_1 = require("@/app/components/Security/AuthHistory");
function Security() {
    var _a = react_1.useState(defaultSidebarStatus_1["default"]), isSidebarOpen = _a[0], setIsSidebarOpen = _a[1];
    var _b = react_1.useState(false), isEditPasswordOpen = _b[0], setIsEditPasswordOpen = _b[1];
    var router = navigation_1.useRouter();
    return (React.createElement(Sidebar_1["default"], { isSidebarOpen: isSidebarOpen, setIsSidebarOpen: setIsSidebarOpen, children: React.createElement(React.Fragment, null,
            React.createElement("div", { className: 'text-secondary-17 bg-secondary-02 space-y-5' + ("" + (isMobileView_1["default"] ? ' w-screen h-screen' : '')) },
                React.createElement("div", { className: 'bg-secondary-01 px-3 py-9' + (" " + (isMobileView_1["default"] ? 'space-y-3' : 'rounded-xl')) }, isMobileView_1["default"] &&
                    React.createElement("div", { className: 'mb-8' },
                        React.createElement("button", { onClick: router.back, className: 'absolute' },
                            React.createElement(Icons_1["default"], { name: 'right-arrow-key' })),
                        React.createElement("h1", { className: 'font-bold w-fit m-auto' }, "Profile"))),
                React.createElement(EditPassword_1["default"], { setIsEditPasswordOpen: setIsEditPasswordOpen, isEditPasswordOpen: isEditPasswordOpen }),
                React.createElement(AuthHistory_1["default"], null))) }));
}
exports["default"] = Security;

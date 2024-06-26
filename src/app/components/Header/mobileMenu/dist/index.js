'use client';
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Icons_1 = require("../../../../../public/Icons");
var navigation_1 = require("next/navigation");
function BottomMenu() {
    var pathname = navigation_1.usePathname();
    var menuItems = [
        {
            name: 'chat',
            title: 'Chat Bot',
            path: '/',
            iconName: 'chart',
            selectedIconName: 'chart-twoTone'
        },
        {
            name: 'profile',
            title: 'Profile',
            path: '/profile',
            iconName: 'user-disable',
            selectedIconName: 'user-twoTone'
        },
    ];
    return (react_1["default"].createElement("ul", { className: "fixed w-full b-0 p-4 bg-white bottom-0" },
        react_1["default"].createElement("li", { className: "flex list-none place-content-between text-xs text-secondary font-semibold cursor-pointer" }, menuItems.map(function (item) { return (react_1["default"].createElement("a", { key: item.name, className: "" + ((pathname === item.path) ? 'selected text-primary' : ''), href: item.path },
            react_1["default"].createElement("div", { className: 'w-fit m-auto' }, pathname === item.path ?
                react_1["default"].createElement(Icons_1["default"], { name: item.selectedIconName })
                : react_1["default"].createElement(Icons_1["default"], { name: item.iconName })),
            react_1["default"].createElement("p", null, item.title))); }))));
}
exports["default"] = BottomMenu;

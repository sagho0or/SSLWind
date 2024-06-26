'use client';
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var isMobileView_1 = require("@/app/utils/isMobileView");
var Login_1 = require("@/app/components/Login");
function Login() {
    return (react_1["default"].createElement(react_1["default"].Fragment, null, isMobileView_1["default"] ?
        react_1["default"].createElement(Login_1["default"], null)
        :
            react_1["default"].createElement("div", { className: "w-full h-screen bg-primary-00 flex items-center justify-between relative overflow-hidden" },
                react_1["default"].createElement("div", { className: "absolute inset-0" },
                    react_1["default"].createElement("img", { src: "/images/login-promotion.png", alt: "Background", className: "w-full h-full object-cover blur-2px" })),
                react_1["default"].createElement("div", { className: "flex w-3/6 justify-center relative z-10" },
                    react_1["default"].createElement("div", { className: 'bg-white max-w-xl rounded-3xl overflow-hidden h-[35rem] w-[500px]' },
                        react_1["default"].createElement(Login_1["default"], null))))));
}
exports["default"] = Login;

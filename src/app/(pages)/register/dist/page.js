'use client';
"use strict";
exports.__esModule = true;
var isMobileView_1 = require("@/app/utils/isMobileView");
var Register_1 = require("@/app/components/Register");
function RegisterPage() {
    return (React.createElement(React.Fragment, null, isMobileView_1["default"] ?
        React.createElement(Register_1["default"], null)
        :
            React.createElement("div", { className: "w-full h-screen bg-primary-00 flex items-center justify-between" },
                React.createElement("div", { className: "flex w-3/6 justify-center" },
                    React.createElement("div", { className: 'bg-white max-w-xl rounded-3xl flex-1  flex' },
                        " ",
                        React.createElement(Register_1["default"], null))))));
}
exports["default"] = RegisterPage;

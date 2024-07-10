"use client";
"use strict";
exports.__esModule = true;
var headerItems_1 = require("@/app/components/Header/webHeader/headerItems");
var link_1 = require("next/link");
var react_cookie_1 = require("react-cookie");
var react_1 = require("react");
var Button_1 = require("@/app/components/Common/Button");
var getUserProfile_service_1 = require("@/app/services/getUserProfile.service");
function Header() {
    var _a = react_1.useState(), userProfile = _a[0], setUserProfile = _a[1];
    var cookie = react_cookie_1.useCookies()[0];
    var isLogin = !!cookie['auth-token'];
    react_1.useEffect(function () {
        if (isLogin) {
            getUserProfile_service_1["default"](false).then(function (res) {
                setUserProfile(res);
            });
        }
    }, [isLogin]);
    react_1.useEffect(function () {
        if (isLogin) {
            getUserProfile_service_1["default"](false).then(function (res) {
                setUserProfile(res);
            });
        }
    }, []);
    return (react_1["default"].createElement("div", { className: "fixed w-full z-50" },
        react_1["default"].createElement("div", { className: "flex justify-between items-center h-18 bg-white px-16" },
            react_1["default"].createElement(link_1["default"], { href: "/", className: 'h-full flex' },
                react_1["default"].createElement("img", { src: "/safellm.svg", alt: "SafeLLM" })),
            react_1["default"].createElement(headerItems_1["default"], null),
            isLogin ?
                react_1["default"].createElement("div", { className: 'flex gap-6 items-center justify-center' },
                    react_1["default"].createElement(link_1["default"], { href: "/profile" },
                        react_1["default"].createElement("h5", null, "Profile")),
                    react_1["default"].createElement("div", { className: 'flex items-center' },
                        react_1["default"].createElement("div", { className: 'rounded-full w-9 h-9' },
                            react_1["default"].createElement(link_1["default"], { href: "/profile" },
                                react_1["default"].createElement("img", { src: (userProfile === null || userProfile === void 0 ? void 0 : userProfile.avatar_id) || '/images/avatar.svg', alt: userProfile === null || userProfile === void 0 ? void 0 : userProfile.first_name, width: 36, height: 36 })))))
                : react_1["default"].createElement(link_1["default"], { href: "/login" },
                    react_1["default"].createElement(Button_1["default"], { style: 'primarySimple' },
                        react_1["default"].createElement("p", null, "Login | Register"))))));
}
exports["default"] = Header;

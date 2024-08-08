'use client';
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var isMobileView_1 = require("@/app/utils/isMobileView");
var mobileMenu_1 = require("@/app/components/Header/mobileMenu");
var MobileSetting_1 = require("@/app/components/Setting/MobileSetting");
var WebSetting_1 = require("@/app/components/Setting/WebSetting");
var user_class_1 = require("@/app/components/Login/user.class");
var router_1 = require("next/router");
function Setting() {
    var user = user_class_1.User.getInstance();
    var router = router_1.useRouter();
    react_1.useEffect(function () {
        var userRole = user.role;
        if (![user_class_1.UserRole.Management, user_class_1.UserRole.Admin, user_class_1.UserRole.Developer].includes(userRole)) {
            router.push('/chat');
        }
    }, [router]);
    if (!user || !['management', 'admin', 'developer'].includes(user.role)) {
        return null; // Optionally, display a loading spinner or message
    }
    return (react_1["default"].createElement(react_1["default"].Fragment, null, isMobileView_1["default"] ?
        react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement(MobileSetting_1["default"], null),
            react_1["default"].createElement(mobileMenu_1["default"], null))
        :
            react_1["default"].createElement(WebSetting_1["default"], null)));
}
exports["default"] = Setting;

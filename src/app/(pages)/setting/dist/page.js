'use client';
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var isMobileView_1 = require("@/app/utils/isMobileView");
var mobileMenu_1 = require("@/app/components/Header/mobileMenu");
var MobileSetting_1 = require("@/app/components/Setting/MobileSetting");
var WebSetting_1 = require("@/app/components/Setting/WebSetting");
var router_1 = require("next/router");
var react_redux_1 = require("react-redux");
var interface_1 = require("@/store/userProfile/interface");
function Setting() {
    var router = router_1.useRouter();
    var userProfile = react_redux_1.useSelector(function (state) { return state.userProfile.data; });
    react_1.useEffect(function () {
        var userRole = userProfile.role;
        if (![interface_1.UserRole.Management, interface_1.UserRole.Admin, interface_1.UserRole.Developer].includes(userRole)) {
            router.push('/chat');
        }
    }, [router]);
    if (!userProfile || !['management', 'admin', 'developer'].includes(userProfile.role)) {
        return null;
    }
    return (react_1["default"].createElement(react_1["default"].Fragment, null, isMobileView_1["default"] ?
        react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement(MobileSetting_1["default"], null),
            react_1["default"].createElement(mobileMenu_1["default"], null))
        :
            react_1["default"].createElement(WebSetting_1["default"], null)));
}
exports["default"] = Setting;

"use strict";
exports.__esModule = true;
var react_cookie_1 = require("react-cookie");
var user_class_1 = require("../components/Login/user.class");
function logout() {
    var cookies = new react_cookie_1.Cookies();
    var b = cookies.get("auth-token");
    debugger;
    cookies.remove("auth-token");
    cookies.remove("auth-refresh");
    localStorage.removeItem("userProfile");
    var a = cookies.get("auth-token");
    debugger;
    var user = user_class_1.User.getInstance();
    user.clearUser();
}
exports["default"] = logout;

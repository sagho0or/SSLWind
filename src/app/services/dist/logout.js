"use strict";
exports.__esModule = true;
var react_cookie_1 = require("react-cookie");
function logout() {
    var cookies = new react_cookie_1.Cookies();
    var b = cookies.get("auth-token");
    debugger;
    cookies.remove("auth-token");
    cookies.remove("auth-refresh");
    localStorage.removeItem("userProfile");
    var a = cookies.get("auth-token");
}
exports["default"] = logout;

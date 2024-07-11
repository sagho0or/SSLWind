"use strict";
exports.__esModule = true;
var store_1 = require("@/store/store");
var action_1 = require("@/store/userProfile/action");
var react_cookie_1 = require("react-cookie");
function getUserProfileService(reload) {
    return new Promise(function (resolve, reject) {
        var cookies = new react_cookie_1.Cookies();
        var isLogin = !!cookies.get('auth-token');
        if (typeof window == 'undefined') {
            reject('localhost is not defined');
        }
        var localItem = localStorage.getItem('userProfile') || "";
        function getUserProfileFunc() {
            store_1["default"].dispatch(action_1.getUserProfileLoading());
            store_1["default"].subscribe(function () {
                var value = store_1["default"].getState().userProfile;
                if (value && value.isDone && value.response) {
                    localStorage.setItem('userProfile', JSON.stringify(value.response));
                    resolve(value.response);
                }
            });
        }
        if (reload) {
            localStorage.removeItem('userProfile');
            getUserProfileFunc();
        }
        else if (localItem && Object.keys(localItem).length !== 0 && isLogin) {
            var userProfile = JSON.parse(localItem);
            if (userProfile) {
                resolve(userProfile);
            }
            else {
                getUserProfileFunc();
            }
        }
        else if (!localItem || Object.keys(localItem).length === 0 && isLogin) {
            getUserProfileFunc();
        }
        else if (localItem && !isLogin) {
            localStorage.removeItem('userProfile');
        }
        else {
            reject('not login and no userProfile');
        }
    });
}
exports["default"] = getUserProfileService;

"use strict";
exports.__esModule = true;
var action_1 = require("@/store/userProfile/action");
var react_cookie_1 = require("react-cookie");
var toolkit_1 = require("@reduxjs/toolkit");
var saga_1 = require("@/store/saga");
var rootReducer_1 = require("@/store/rootReducer");
var redux_saga_1 = require("redux-saga");
var sagaMiddleware = redux_saga_1["default"]();
var store = toolkit_1.configureStore({
    reducer: rootReducer_1["default"],
    middleware: function (getDefaultMiddleware) { return getDefaultMiddleware().concat(sagaMiddleware); }
});
sagaMiddleware.run(saga_1["default"]);
function getUserProfileService(reload) {
    return new Promise(function (resolve, reject) {
        var cookies = new react_cookie_1.Cookies();
        var isLogin = !!cookies.get('auth-token');
        if (typeof window == 'undefined') {
            reject('localhost is not defined');
        }
        var localItem = localStorage.getItem('userProfile') || "";
        function getUserProfileFunc() {
            store.dispatch(action_1.getUserProfileLoading());
            store.subscribe(function () {
                var value = store.getState().userProfile;
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

"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var react_cookie_1 = require("react-cookie");
var errorHandling_1 = require("@/store/_utils/errorHandling");
var axiosInterceptorInstance = axios_1["default"].create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL
});
axiosInterceptorInstance.interceptors.response.use(function (response) { return response; }, function (error) {
    debugger;
    var status = error.response ? error.response.status : null;
    var cookies = new react_cookie_1.Cookies();
    var originalRequest = error.config;
    var isLogged = cookies.get('auth-refresh');
    if (status === 401 && !originalRequest._retry && isLogged) {
        debugger;
        // Handle unauthorized access
        originalRequest._retry = true;
        cookies.remove('auth-token');
        try {
            axios_1["default"].post(process.env.NEXT_PUBLIC_BASE_URL + "auth/login/refresh/token/", {
                refresh_token: cookies.get('auth-refresh')
            }, {
                timeout: Number(process.env.API_TIME_OUT)
            }).then(function (response) {
                var _a, _b, _c, _d, _e, _f;
                cookies.set('auth-token', (_b = (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.message) === null || _b === void 0 ? void 0 : _b.token);
                cookies.set('auth-refresh', (_d = (_c = response === null || response === void 0 ? void 0 : response.data) === null || _c === void 0 ? void 0 : _c.message) === null || _d === void 0 ? void 0 : _d.refresh_token);
                originalRequest.headers['Authorization'] = 'Bearer ' + ((_f = (_e = response === null || response === void 0 ? void 0 : response.data) === null || _e === void 0 ? void 0 : _e.message) === null || _f === void 0 ? void 0 : _f.token);
                return axios_1["default"](originalRequest);
            });
        }
        catch (error) {
        }
    }
    else if (status === 404) {
        // Handle not found errors
    }
    else if (status !== 401) {
        debugger;
        // Handle other errors
        errorHandling_1["default"](error);
    }
    return Promise.reject(error);
});
exports["default"] = axiosInterceptorInstance;

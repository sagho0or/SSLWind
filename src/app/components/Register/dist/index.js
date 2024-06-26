'use client';
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_cookie_1 = require("react-cookie");
var react_redux_1 = require("react-redux");
var navigation_1 = require("next/navigation");
var isMobileView_1 = require("@/app/utils/isMobileView");
var MobileRegisterForm_1 = require("@/app/components/Register/Forms/MobileRegisterForm");
var PasswordRegisterForm_1 = require("@/app/components/Register/Forms/PasswordRegisterForm");
var mobileMenu_1 = require("@/app/components/Header/mobileMenu");
function RegisterComponent() {
    var _a = react_1.useState(0), step = _a[0], setStep = _a[1];
    var _b = react_1.useState(''), mobile = _b[0], setMobile = _b[1];
    var _c = react_1.useState({
        TFA: false,
        token: '',
        ttl: 0
    }), registerMobileResponse = _c[0], setRegisterMobileResponse = _c[1];
    var _d = react_1.useState({ token: '' }), registerIdentityResponse = _d[0], setRegisterIdentityResponse = _d[1];
    var registerMobileStates = react_redux_1.useSelector(function (state) { return state.registerMobile; });
    var passwordStates = react_redux_1.useSelector(function (state) { return state.registerPassword; });
    var router = navigation_1.useRouter();
    var queryParams = navigation_1.useSearchParams();
    var _e = react_cookie_1.useCookies(['auth-token', 'auth-refresh']), cookies = _e[0], setCookie = _e[1], removeCookie = _e[2];
    //step 0
    react_1.useEffect(function () {
        if (registerMobileStates.isDone) {
            setStep(1);
            setRegisterMobileResponse(registerMobileStates.response);
        }
    }, [registerMobileStates]);
    //step 1
    react_1.useEffect(function () {
        if (passwordStates.isDone) {
            setCookie("auth-token", passwordStates.response.token);
            setCookie("auth-refresh", passwordStates.response.refresh_token);
            router.push('/');
        }
    }, [passwordStates]);
    function backFunc() {
        if (step == 0)
            return;
        setStep(step - 1);
    }
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: 'w-full m-auto p-10 bg-white' },
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("h1", { className: "text-xl font-bold  " + (isMobileView_1["default"] ? 'text-center' : '') }, "Register"),
                react_1["default"].createElement("p", { className: (isMobileView_1["default"] ? 'text-center' : '') + " text-secondary-10 mt-4" }, "description")),
            step == 0 ?
                react_1["default"].createElement(MobileRegisterForm_1["default"], { mobile: mobile, setMobile: setMobile }) :
                step == 1 ?
                    react_1["default"].createElement(PasswordRegisterForm_1["default"], { mobile: mobile, backFunc: backFunc, registerIdentityResponse: registerIdentityResponse })
                    : ''),
        (step == 0 && isMobileView_1["default"]) ?
            react_1["default"].createElement(mobileMenu_1["default"], null)
            : ''));
}
exports["default"] = RegisterComponent;

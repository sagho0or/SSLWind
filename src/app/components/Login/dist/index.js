"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
/*
* For Login Responsive and WebProfile was really like each other so we dont have 2 files for them
* */
var react_1 = require("react");
var isMobileView_1 = require("@/app/utils/isMobileView");
var LoginForm_1 = require("@/app/components/Login/Forms/LoginForm");
var OtpForm_1 = require("@/app/components/Login/Forms/OtpForm");
var react_redux_1 = require("react-redux");
var mobileMenu_1 = require("@/app/components/Header/mobileMenu");
var next_recaptcha_v3_1 = require("next-recaptcha-v3");
var base_64_1 = require("base-64");
var react_cookie_1 = require("react-cookie");
var navigation_1 = require("next/navigation");
var slice_1 = require("@/store/auth/login/form/slice");
var user_class_1 = require("./user.class");
function LoginComponent() {
    var _a = react_1.useState(0), step = _a[0], setStep = _a[1];
    var _b = react_1.useState(''), email = _b[0], setEmail = _b[1];
    var _c = react_1.useState(''), password = _c[0], setPassword = _c[1];
    var _d = react_1.useState(), loginResponse = _d[0], setLoginResponse = _d[1];
    var _e = react_cookie_1.useCookies(['auth-token', 'auth-refresh']), cookies = _e[0], setCookie = _e[1], removeCookie = _e[2];
    var loginStates = react_redux_1.useSelector(function (state) { return state.login; });
    var loginOtpStates = react_redux_1.useSelector(function (state) { return state.loginOtp; });
    var dispatch = react_redux_1.useDispatch();
    var executeRecaptcha = next_recaptcha_v3_1.useReCaptcha().executeRecaptcha;
    var router = navigation_1.useRouter();
    react_1.useEffect(function () {
        if (loginStates.isDone) {
            setLoginResponse(loginStates.response.data);
            setStep(1);
        }
    }, [loginStates]);
    react_1.useEffect(function () {
        if (loginOtpStates.isDone) {
            var user = user_class_1.User.getInstance();
            debugger;
            user.updateUser(loginOtpStates.response.data);
            setCookie("auth-token", loginOtpStates.response.data.token);
            setCookie("auth-refresh", loginOtpStates.response.data.refresh_token);
            router.push('/');
        }
    }, [loginOtpStates]);
    function acceptMobileForm(email, password) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                //api call for mobile number & password
                console.log('email', email);
                console.log('password', password);
                dispatch(slice_1.loginLoading({
                    email: email,
                    password: base_64_1.encode(password)
                    // TODO
                    //recaptcha_response: await executeRecaptcha("form_submit"),
                }));
                setEmail(email);
                setPassword(password);
                return [2 /*return*/];
            });
        });
    }
    function backFunc() {
        if (step == 0)
            return;
        setStep(step - 1);
    }
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: 'w-full m-auto p-10 bg-white' },
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("h1", { className: "text-xl font-bold  " + (isMobileView_1["default"] ? 'text-center' : '') }, "Login to SafeLLMWind ")),
            step == 0 ?
                react_1["default"].createElement(LoginForm_1["default"], { confirmFunction: acceptMobileForm }) :
                step == 1 && loginResponse ?
                    react_1["default"].createElement(OtpForm_1["default"], { email: email, backFunc: backFunc, password: password, loginResponse: loginResponse }) :
                    ''),
        (step == 0 && isMobileView_1["default"]) ?
            react_1["default"].createElement(mobileMenu_1["default"], null)
            : ''));
}
exports["default"] = LoginComponent;

"use strict";
exports.__esModule = true;
var react_1 = require("react");
var link_1 = require("next/link");
var Input_1 = require("@/app/components/Common/Input");
var Button_1 = require("@/app/components/Common/Button");
var Icons_1 = require("../../../../../../public/Icons");
var google_1 = require("@react-oauth/google");
function MobileLoginForm(props) {
    var _a = react_1.useState(''), mobileNumber = _a[0], setMobileNumber = _a[1];
    var _b = react_1.useState(), isValid = _b[0], setIsValid = _b[1];
    var _c = react_1.useState(''), password = _c[0], setPassword = _c[1];
    var _d = react_1.useState('password'), inputType = _d[0], setInputType = _d[1];
    function handleInputChange(e) {
        var value = e.target.value;
        setMobileNumber(value);
        var mobileRegex = /^(\+98|0)?9\d{9}$/;
        setIsValid(mobileRegex.test(value));
    }
    function loginFunc(event) {
        event.preventDefault();
        props.confirmFunction(mobileNumber, password);
    }
    return (react_1["default"].createElement("form", { autoComplete: 'off' },
        react_1["default"].createElement("div", { className: 'mt-10' },
            react_1["default"].createElement(Input_1["default"], { inputId: 'mobileNumber', label: 'Email', value: mobileNumber, onChange: handleInputChange, style: 'secondaryOutline', type: 'number' })),
        react_1["default"].createElement("div", { className: 'my-10 relative' },
            react_1["default"].createElement("span", { className: 'text-primary absolute right-0 text-xs cursor-pointer' }, "Forgot password?"),
            react_1["default"].createElement(Input_1["default"], { inputId: 'password', label: 'password', value: password, onChange: function (e) {
                    return setPassword(e.target.value);
                }, style: 'secondaryOutline', type: inputType }),
            react_1["default"].createElement("div", { className: 'absolute top-10 left-2 cursor-pointer', onClick: function () { return setInputType(inputType == 'password' ? 'text' : 'password'); } },
                react_1["default"].createElement(Icons_1["default"], { name: 'password' }))),
        react_1["default"].createElement("div", { className: 'mt-10' },
            react_1["default"].createElement(Button_1["default"], { style: 'primarySimple', disabled: !isValid || !password, onClick: loginFunc },
                react_1["default"].createElement("span", { className: 'text-center' }, "Login")),
            react_1["default"].createElement("div", { className: 'mt-5' },
                react_1["default"].createElement("span", null, "Don't have an account?"),
                react_1["default"].createElement(link_1["default"], { href: '/register', className: 'text-primary mr-2 cursor-pointer' }, "Register")),
            react_1["default"].createElement("div", { className: "mt-5" },
                react_1["default"].createElement(google_1.GoogleOAuthProvider, { clientId: "385994786159-cdn5f72dqkuhjoc1p6ibiv8kpg0vb2jm.apps.googleusercontent.com" },
                    react_1["default"].createElement(google_1.GoogleLogin, { onSuccess: function (credentialResponse) {
                            console.log(credentialResponse);
                        }, onError: function () {
                            console.log('Login Failed');
                        } }))))));
}
exports["default"] = MobileLoginForm;

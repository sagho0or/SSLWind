"use strict";

exports.__esModule = true;

var Icons_1 = require("../../../../../../public/Icons");

var RegisterStepProgress_1 = require("../../RegisterStepProgress");

var Input_1 = require("@/app/components/Common/Input");

var react_1 = require("react");

var Button_1 = require("@/app/components/Common/Button");

var react_redux_1 = require("react-redux");

var action_1 = require("@/store/auth/register/registerPassword/action");

var isMobileView_1 = require("@/app/utils/isMobileView");

var checkPasswordFormat_1 = require("@/app/utils/checkPasswordFormat");

function PasswordRegisterForm(props) {
  var _a = react_1.useState(''),
      password = _a[0],
      setPassword = _a[1];

  var _b = react_1.useState(''),
      confirmPassword = _b[0],
      setConfirmPassword = _b[1];

  var _c = react_1.useState('password'),
      passwordType = _c[0],
      setPasswordType = _c[1];

  var _d = react_1.useState('password'),
      confirmPasswordType = _d[0],
      setConfirmPasswordType = _d[1];

  var dispatch = react_redux_1.useDispatch();

  function passwordChange(e) {
    setPassword(e.target.value);
  }

  function sendPasswordFunc() {
    dispatch(action_1.registerPasswordLoading({
      password: btoa(password),
      re_password: btoa(confirmPassword),
      mobile: props.mobile,
      trackingId: props.registerIdentityResponse.token
    }));
  }

  return react_1["default"].createElement(react_1["default"].Fragment, null, isMobileView_1["default"] && react_1["default"].createElement("div", {
    className: 'absolute top-10 cursor-pointer',
    onClick: props.backFunc
  }, react_1["default"].createElement(Icons_1["default"], {
    name: 'left-arrow-key'
  })), react_1["default"].createElement("div", {
    className: "relative " + (isMobileView_1["default"] ? 'h-screen-190' : '')
  }, react_1["default"].createElement(RegisterStepProgress_1["default"], {
    step: 3
  }), react_1["default"].createElement("div", {
    className: 'my-10 relative'
  }, react_1["default"].createElement(Input_1["default"], {
    inputId: 'password',
    label: "password",
    type: passwordType,
    value: password,
    onChange: passwordChange,
    style: 'secondaryOutline'
  }), react_1["default"].createElement("div", {
    className: 'absolute top-11 left-2 cursor-pointer',
    onClick: function onClick() {
      return setPasswordType(passwordType == 'password' ? 'text' : 'password');
    }
  }, react_1["default"].createElement(Icons_1["default"], {
    name: 'password'
  }))), react_1["default"].createElement("div", {
    className: 'my-10 relative'
  }, react_1["default"].createElement(Input_1["default"], {
    inputId: 'confirmPassword',
    label: "Repeat Password",
    type: confirmPasswordType,
    value: confirmPassword,
    onChange: function onChange(e) {
      return setConfirmPassword(e.target.value);
    },
    style: 'secondaryOutline'
  }), react_1["default"].createElement("div", {
    className: 'absolute top-11 left-2 cursor-pointer',
    onClick: function onClick() {
      return setConfirmPasswordType(confirmPasswordType == 'password' ? 'text' : 'password');
    }
  }, react_1["default"].createElement(Icons_1["default"], {
    name: 'password'
  }))), react_1["default"].createElement("div", null, react_1["default"].createElement("div", {
    className: 'flex mb-2'
  }, react_1["default"].createElement(Icons_1["default"], {
    name: checkPasswordFormat_1["default"](password).hasCapitalAndSmall ? 'register-password-check' : 'register-password-close'
  }), react_1["default"].createElement("p", {
    className: 'mr-2' + ' ' + ("" + (checkPasswordFormat_1["default"](password).hasCapitalAndSmall ? 'text-success' : 'text-error'))
  }, "At least one uppercase and one lowercase letter ")), react_1["default"].createElement("div", {
    className: 'flex mb-2'
  }, react_1["default"].createElement(Icons_1["default"], {
    name: checkPasswordFormat_1["default"](password).hasSpecialCharacters ? 'register-password-check' : 'register-password-close'
  }), react_1["default"].createElement("p", {
    className: 'mr-2' + ' ' + ("" + (checkPasswordFormat_1["default"](password).hasSpecialCharacters ? 'text-success' : 'text-error'))
  }, "At least one special character, allowed characters: !@#$%^&*")), react_1["default"].createElement("div", {
    className: 'flex mb-2'
  }, react_1["default"].createElement(Icons_1["default"], {
    name: checkPasswordFormat_1["default"](password).hasNumber ? 'register-password-check' : 'register-password-close'
  }), react_1["default"].createElement("p", {
    className: 'mr-2' + ' ' + ("" + (checkPasswordFormat_1["default"](password).hasNumber ? 'text-success' : 'text-error'))
  }, "At least one number")), react_1["default"].createElement("div", {
    className: 'flex mb-2'
  }, react_1["default"].createElement(Icons_1["default"], {
    name: checkPasswordFormat_1["default"](password).hasMinimumCharacterRequired ? 'register-password-check' : 'register-password-close'
  }), react_1["default"].createElement("p", {
    className: 'mr-2' + ' ' + ("" + (checkPasswordFormat_1["default"](password).hasMinimumCharacterRequired ? 'text-success' : 'text-error'))
  }, "At least 8 characters"))), react_1["default"].createElement("div", {
    className: (isMobileView_1["default"] ? 'absolute bottom-0' : 'mt-4') + " w-full"
  }, react_1["default"].createElement(Button_1["default"], {
    style: 'primarySimple',
    disabled: !password || !confirmPassword || password !== confirmPassword || Object.values(checkPasswordFormat_1["default"](password)).includes(false),
    onClick: sendPasswordFunc
  }, react_1["default"].createElement("span", {
    className: 'text-center'
  }, "Submit")))));
}

exports["default"] = PasswordRegisterForm;
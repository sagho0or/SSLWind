"use strict";
exports.__esModule = true;
var Icons_1 = require("../../../../../public/Icons");
var Input_1 = require("@/app/components/Common/Input");
var react_1 = require("react");
var Button_1 = require("@/app/components/Common/Button");
var checkPasswordFormat_1 = require("@/app/utils/checkPasswordFormat");
var react_redux_1 = require("react-redux");
var action_1 = require("@/store/security/editPassword/action");
var react_hot_toast_1 = require("react-hot-toast");
var Modal_1 = require("@/app/components/Common/Modal");
var isMobileView_1 = require("@/app/utils/isMobileView");
function EditPassword(_a) {
    var setIsEditPasswordOpen = _a.setIsEditPasswordOpen, isEditPasswordOpen = _a.isEditPasswordOpen;
    var _b = react_1.useState('password'), passwordType = _b[0], setPasswordType = _b[1];
    var _c = react_1.useState(''), currentPassword = _c[0], setCurrentPassword = _c[1];
    var _d = react_1.useState(''), newPassword = _d[0], setNewPassword = _d[1];
    var _e = react_1.useState(''), confirmPassword = _e[0], setConfirmPassword = _e[1];
    var _f = react_1.useState(1), step = _f[0], setStep = _f[1];
    var dispatch = react_redux_1.useDispatch();
    var editPasswordStates = react_redux_1.useSelector(function (state) { return state.editPassword; });
    var isAcceptable = function () {
        var arrayOfResponseValues = Object.values(checkPasswordFormat_1["default"](newPassword));
        if (!arrayOfResponseValues.includes(false)) {
            return confirmPassword === newPassword;
        }
    };
    function postNewPassword() {
        setIsEditPasswordOpen(false);
        dispatch(action_1.editPasswordLoading({
            current_password: btoa(currentPassword),
            new_password: btoa(newPassword),
            re_password: btoa(confirmPassword)
        }));
    }
    react_1.useEffect(function () {
        if (editPasswordStates.isDone) {
            react_hot_toast_1["default"].success('Password has been changed successfully');
        }
    }, [editPasswordStates]);
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: 'bg-secondary-01 px-3 py-9' + (" " + (isMobileView_1["default"] ? 'space-y-3' : 'rounded-xl')) },
            react_1["default"].createElement("h4", { className: 'font-semibold' }, "Password"),
            react_1["default"].createElement("div", { className: 'flex w-full flex-wrap items-end gap-5' },
                react_1["default"].createElement("p", { className: 'font-medium text-sm text-secondary w-162' }, "You can change your password by clicking the edit button."),
                react_1["default"].createElement("div", { className: 'w-28' },
                    react_1["default"].createElement(Button_1["default"], { style: 'primaryOutline', onClick: function () { return setIsEditPasswordOpen(true); } },
                        react_1["default"].createElement("p", { className: 'font-medium' }, "Edit"))))),
        isEditPasswordOpen &&
            react_1["default"].createElement(Modal_1["default"], { setIsModalOpen: setIsEditPasswordOpen, hasCloseButton: true, backGroundStyle: "bg-secondary-17 bg-opacity-40", customStyle: "relative w-screen p-4 m-auto py-7" + ' ' + ("" + (isMobileView_1["default"] ? 'bottom-0 !absolute ' : 'rounded-b-2xl top-1/4')) },
                react_1["default"].createElement("div", { className: 'font-semibold space-y-5' },
                    react_1["default"].createElement("div", { className: 'bg-secondary-02 w-fit mx-auto p-3 rounded-xl' },
                        react_1["default"].createElement(Icons_1["default"], { name: 'lock' })),
                    react_1["default"].createElement("h3", { className: 'w-fit mx-auto' }, "Change Password"),
                    step === 1 &&
                        react_1["default"].createElement(react_1["default"].Fragment, null,
                            react_1["default"].createElement(Input_1["default"], { label: 'Current Password', inputId: 'currentPassword', type: passwordType, onChange: function (e) { return setCurrentPassword(e.target.value); }, suffix: react_1["default"].createElement("div", { className: 'cursor-pointer', onClick: function () { return setPasswordType(passwordType == 'password' ? 'text' : 'password'); } },
                                    react_1["default"].createElement(Icons_1["default"], { name: 'password' })), value: currentPassword }),
                            react_1["default"].createElement(Button_1["default"], { disabled: currentPassword === '', onClick: function () { return setStep(2); } }, "Next")),
                    step === 2 &&
                        react_1["default"].createElement(react_1["default"].Fragment, null,
                            react_1["default"].createElement(Input_1["default"], { label: 'New password', inputId: 'newPassword', type: passwordType, onChange: function (e) { return setNewPassword(e.target.value); }, suffix: react_1["default"].createElement("div", { className: 'cursor-pointer', onClick: function () { return setPasswordType(passwordType == 'password' ? 'text' : 'password'); } },
                                    react_1["default"].createElement(Icons_1["default"], { name: 'password' })), value: newPassword }),
                            react_1["default"].createElement(Input_1["default"], { label: 'Repeat new password', inputId: 'confirmPassword', type: passwordType, onChange: function (e) {
                                    return setConfirmPassword(e.target.value);
                                }, suffix: react_1["default"].createElement("div", { className: 'cursor-pointer', onClick: function () { return setPasswordType(passwordType == 'password' ? 'text' : 'password'); } },
                                    react_1["default"].createElement(Icons_1["default"], { name: 'password' })), value: confirmPassword, helper: react_1["default"].createElement("div", null,
                                    react_1["default"].createElement("div", { className: 'flex mb-2' },
                                        react_1["default"].createElement(Icons_1["default"], { name: checkPasswordFormat_1["default"](newPassword).hasCapitalAndSmall ? 'register-identity-done' : 'register-password-close' }),
                                        react_1["default"].createElement("p", { className: 'mr-2' + ' ' +
                                                ("" + (checkPasswordFormat_1["default"](newPassword).hasCapitalAndSmall ? 'text-success' : 'text-error')) }, "At least One capital letter and one small letter")),
                                    react_1["default"].createElement("div", { className: 'flex mb-2' },
                                        react_1["default"].createElement(Icons_1["default"], { name: checkPasswordFormat_1["default"](newPassword).hasSpecialCharacters ? 'register-identity-done' : 'register-password-close' }),
                                        react_1["default"].createElement("p", { className: 'mr-2' + ' ' + ("" + (checkPasswordFormat_1["default"](newPassword).hasSpecialCharacters ? 'text-success' : 'text-error')) }, "At least A special character, allowed characters: !@#$%^&*")),
                                    react_1["default"].createElement("div", { className: 'flex mb-2' },
                                        react_1["default"].createElement(Icons_1["default"], { name: checkPasswordFormat_1["default"](newPassword).hasNumber ? 'register-identity-done' : 'register-password-close' }),
                                        react_1["default"].createElement("p", { className: 'mr-2' + ' ' + ("" + (checkPasswordFormat_1["default"](newPassword).hasNumber ? 'text-success' : 'text-error')) }, "At least one number")),
                                    react_1["default"].createElement("div", { className: 'flex mb-2' },
                                        react_1["default"].createElement(Icons_1["default"], { name: checkPasswordFormat_1["default"](newPassword).hasMinimumCharacterRequired ? 'register-password-done' : 'register-password-close' }),
                                        react_1["default"].createElement("p", { className: 'mr-2' + ' ' + ("" + (checkPasswordFormat_1["default"](newPassword).hasMinimumCharacterRequired ? 'text-success' : 'text-error')) }, "At least 8 characters"))) }),
                            react_1["default"].createElement("div", { className: 'flex gap-x-3' },
                                react_1["default"].createElement(Button_1["default"], { style: 'primaryOutline', customStyle: 'flex-1 border-secondary-02 min-w-32', onClick: function () { return setStep(step - 1); } },
                                    react_1["default"].createElement("p", { className: "text-sm" }, "Previuse step")),
                                react_1["default"].createElement(Button_1["default"], { customStyle: 'flex-2', disabled: !isAcceptable(), onClick: postNewPassword },
                                    react_1["default"].createElement("p", null, "Submit"))))))));
}
exports["default"] = EditPassword;

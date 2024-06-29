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
var react_1 = require("react");
var react_countdown_1 = require("react-countdown");
var Icons_1 = require("../../../../../../public/Icons");
var Input_1 = require("@/app/components/Common/Input");
var Button_1 = require("@/app/components/Common/Button");
var react_redux_1 = require("react-redux");
var isMobileView_1 = require("@/app/utils/isMobileView");
var action_1 = require("@/store/auth/otp/resendOtpSms/action");
var next_recaptcha_v3_1 = require("next-recaptcha-v3");
var base_64_1 = require("base-64");
var slice_1 = require("@/store/auth/login/otp/slice");
function MobileOtpForm(props) {
    var _a = react_1.useState(''), otpCode = _a[0], setOtpCode = _a[1];
    var _b = react_1.useState(false), timerCompleted = _b[0], setTimerCompleted = _b[1];
    var timer = Date.now() + 120000;
    var dispatch = react_redux_1.useDispatch();
    var executeRecaptcha = next_recaptcha_v3_1.useReCaptcha().executeRecaptcha;
    react_1.useEffect(function () {
        if (otpCode.length === 6) {
            // send otpCode api
            dispatch(slice_1.loginOtpLoading({
                code: otpCode,
                mobile: props.mobile,
                tracking_id: props.loginResponse.token
            }));
        }
    }, [otpCode]);
    function resendOtp() {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                //resend otp api
                dispatch(action_1.resendOtpSmsLoading({
                    mobile: props.mobile,
                    password: base_64_1.encode(props.password)
                    //TODO
                    //recaptcha_response: await executeRecaptcha("form_submit"),
                }));
                setTimerCompleted(false);
                timer = Date.now() + 5000;
                return [2 /*return*/];
            });
        });
    }
    return (React.createElement("div", null,
        isMobileView_1["default"] &&
            React.createElement("div", { className: 'absolute top-10', onClick: props.backFunc },
                React.createElement(Icons_1["default"], { name: 'left-arrow-key' })),
        React.createElement("div", { className: 'my-10 relative' },
            React.createElement(Input_1["default"], { inputId: 'OtpInput', label: 'OTP Code', type: 'text', value: otpCode, onChange: function (e) {
                    return setOtpCode(e.target.value);
                }, style: 'secondaryOutline', helper: "Enter the 6-digit code sent to the email " + props.mobile + "." })),
        React.createElement(Button_1["default"], { style: 'primarySimple', disabled: !timerCompleted, onClick: resendOtp }, timerCompleted ?
            React.createElement("span", { className: 'text-center' }, "Retry ")
            :
                React.createElement("div", { className: 'flex justify-center' },
                    React.createElement("span", { className: 'text-center' }, "Retry ( "),
                    React.createElement(react_countdown_1["default"], { date: timer, className: 'ml-2', onComplete: function () { return setTimerCompleted(true); }, renderer: function (counterProps) {
                            return React.createElement("div", null,
                                " ",
                                counterProps.seconds,
                                " : ",
                                counterProps.minutes,
                                " ");
                        } }),
                    React.createElement("span", null,
                        " ",
                        ' Seconds ',
                        " )")))));
}
exports["default"] = MobileOtpForm;

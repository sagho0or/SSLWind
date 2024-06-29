"use strict";
exports.__esModule = true;
exports.ConfirmModalButtons = void 0;
var react_1 = require("react");
var react_countdown_1 = require("react-countdown");
var Button_1 = require("@/app/components/Common/Button");
var react_redux_1 = require("react-redux");
var react_cookie_1 = require("react-cookie");
var navigation_1 = require("next/navigation");
function ConfirmModalButtons(props) {
    var dispatch = react_redux_1.useDispatch();
    var orderStates = react_redux_1.useSelector(function (state) { return state.order; });
    var router = navigation_1.useRouter();
    var timer = Date.now() + 5000;
    var _a = react_1.useState(false), timerCompleted = _a[0], setTimerCompleted = _a[1];
    var cookie = react_cookie_1.useCookies()[0];
    var isLogin = !!cookie['auth-token'];
    var onUpdate = function () {
        setTimerCompleted(false);
        timer = Date.now() + 50000;
        props.getExchanges();
    };
    return (React.createElement("div", { className: 'flex' },
        React.createElement(Button_1["default"], { style: 'secondaryOutline', onClick: function () { return props.setIsConfirmModalOpen(false); }, customStyle: 'flex-1 ml-2 font-semibold' }, "Cancel"),
        isLogin && props.side === 'BID' && !timerCompleted &&
            React.createElement(Button_1["default"], { style: 'successSimple', disabled: false, customStyle: 'font-semibold flex-auto' },
                React.createElement("span", null,
                    "Ok ( ",
                    React.createElement(react_countdown_1["default"], { date: timer, className: 'ml-2', onComplete: function () { return setTimerCompleted(true); }, renderer: function (counterProps) {
                            return React.createElement("span", null, counterProps.seconds);
                        } }),
                    React.createElement("span", null, " Seconds )"))),
        isLogin && !(props.side === 'BID') && !timerCompleted &&
            React.createElement(Button_1["default"], { style: 'errorSimple', disabled: false, customStyle: 'font-semibold flex-auto' },
                React.createElement("span", null,
                    "Confirm ( ",
                    React.createElement(react_countdown_1["default"], { date: timer, className: 'ml-2', onComplete: function () { return setTimerCompleted(true); }, renderer: function (counterProps) {
                            return React.createElement("span", null, counterProps.seconds);
                        } }),
                    React.createElement("span", null, " Seconds )"))),
        !isLogin &&
            React.createElement(Button_1["default"], { style: 'primarySimple', onClick: function () { return router.push("/login"); }, disabled: false, customStyle: 'font-semibold flex-auto' },
                React.createElement("p", null, "Login | Register")),
        isLogin && timerCompleted &&
            React.createElement(Button_1["default"], { style: 'primarySimple', onClick: onUpdate, disabled: false, customStyle: 'font-semibold flex-auto' },
                React.createElement("p", null, "Update"))));
}
exports.ConfirmModalButtons = ConfirmModalButtons;

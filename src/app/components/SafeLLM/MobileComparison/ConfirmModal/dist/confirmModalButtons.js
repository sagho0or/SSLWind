"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.ConfirmModalButtons = void 0;
var react_1 = require("react");
var react_countdown_1 = require("react-countdown");
var Button_1 = require("@/app/components/Common/Button");
var react_redux_1 = require("react-redux");
var action_1 = require("@/store/comparison/postOrder/action");
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
    var onOrder = function () {
        var _a;
        var inputData = {
            exchangeId: ((_a = props.selectedExchange) === null || _a === void 0 ? void 0 : _a.id) || null,
            track_id: props.track_id,
            cookie: cookie['auth-token']
        };
        dispatch(action_1.postOrderLoading(__assign({}, inputData)));
    };
    return (React.createElement("div", { className: 'flex' },
        React.createElement(Button_1["default"], { style: 'secondaryOutline', onClick: function () { return props.setIsConfirmModalOpen(false); }, customStyle: 'flex-1 ml-2 font-semibold' }, "Cancel"),
        isLogin && props.side === 'BID' && !timerCompleted &&
            React.createElement(Button_1["default"], { style: 'successSimple', onClick: onOrder, disabled: false, customStyle: 'font-semibold flex-auto' },
                React.createElement("span", null,
                    "Ok ( ",
                    React.createElement(react_countdown_1["default"], { date: timer, className: 'ml-2', onComplete: function () { return setTimerCompleted(true); }, renderer: function (counterProps) {
                            return React.createElement("span", null, counterProps.seconds);
                        } }),
                    React.createElement("span", null, " Seconds )"))),
        isLogin && !(props.side === 'BID') && !timerCompleted &&
            React.createElement(Button_1["default"], { style: 'errorSimple', onClick: onOrder, disabled: false, customStyle: 'font-semibold flex-auto' },
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

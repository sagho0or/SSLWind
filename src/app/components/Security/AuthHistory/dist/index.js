"use strict";
exports.__esModule = true;
var isMobileView_1 = require("@/app/utils/isMobileView");
var Icons_1 = require("../../../../../public/Icons");
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var action_1 = require("@/store/security/authHistory/action");
var moment_1 = require("moment");
var navigation_1 = require("next/navigation");
var Pagination_1 = require("@/app/components/Common/Pagination");
function AuthHistory() {
    var _a = react_1.useState(), authHistoryList = _a[0], setAuthHistoryList = _a[1];
    var _b = react_1.useState(0), offset = _b[0], setOffset = _b[1];
    var limit = 5;
    var dispatch = react_redux_1.useDispatch();
    var authHistoryState = react_redux_1.useSelector(function (state) { return state.authHistory; });
    var router = navigation_1.useRouter();
    function getDeviceType(os_family) {
        var os = os_family.toLowerCase();
        if (os === 'android' || os === 'ios') {
            return 'phone';
        }
        return 'desktop';
    }
    function paginationCallBack(page) {
        setOffset(page * limit);
        dispatch(action_1.getAuthHistoryLoading({
            offset: page * limit,
            limit: limit
        }));
    }
    react_1.useEffect(function () {
        dispatch(action_1.getAuthHistoryLoading({
            offset: 0,
            limit: 5
        }));
    }, []);
    react_1.useEffect(function () {
        console.log('authHistoryState', authHistoryState.response.items);
        setAuthHistoryList(authHistoryState.response.items);
    }, [authHistoryState]);
    return (React.createElement("div", { className: "bg-secondary-01 px-3 py-6 " + (isMobileView_1["default"] ? 'flex justify-between' : 'rounded-xl space-y-6'), onClick: function () {
            if (isMobileView_1["default"]) {
                router.replace('/history');
            }
        } },
        React.createElement("h4", { className: "font-semibold " + (isMobileView_1["default"] ? '' : 'text-xl') }, "login history"),
        isMobileView_1["default"] ?
            React.createElement(Icons_1["default"], { name: 'direction-left-gray' })
            : React.createElement("table", { className: "w-full text-sm text-secondary-17 font-medium text-center" },
                React.createElement("thead", { className: "h-12 border-b text-xs text-secondary font-normal" },
                    React.createElement("tr", null,
                        React.createElement("th", { scope: "col", className: "w-1/3" }, "Device type"),
                        React.createElement("th", { scope: "col", className: "w-1/3" }, "Date"),
                        React.createElement("th", { scope: "col", className: "w-1/3" }, "IP"))),
                React.createElement("tbody", null, authHistoryList &&
                    authHistoryList.map(function (item) {
                        return React.createElement("tr", { className: "border-b h-18", key: item.created_at },
                            React.createElement("td", { className: "flex items-center h-inherit pr-4 w-max space-x-1", dir: 'ltr' },
                                React.createElement("span", null, getDeviceType(item.os_family)),
                                React.createElement("span", null,
                                    item.os_family,
                                    " X ",
                                    item.os_version,
                                    ","),
                                React.createElement("span", null,
                                    item.browser_family,
                                    " ",
                                    item.browser_version),
                                React.createElement(Icons_1["default"], { name: getDeviceType(item.os_family) })),
                            React.createElement("td", { className: "" },
                                React.createElement("p", null, moment_1["default"](item.created_at).format('HH:mm - YYYY/MM/DD'))),
                            React.createElement("td", { className: "" }, item.ip));
                    }))),
        React.createElement(Pagination_1["default"], { total: authHistoryState.response.total, limit: limit, offset: offset, callBack: paginationCallBack })));
}
exports["default"] = AuthHistory;

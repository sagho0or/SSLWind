"use strict";
exports.__esModule = true;
var Button_1 = require("@/app/components/Common/Button");
var react_cookie_1 = require("react-cookie");
function MobileComparison(props) {
    var cookie = react_cookie_1.useCookies()[0];
    var isLogin = !!cookie['auth-token'];
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { id: 'comparisonContainer', className: props.isModalOpen ? 'h-screen overflow-hidden' : '' },
            React.createElement("h1", { className: 'font-bold text-center text-secondary-17 my-10' }, "Title"),
            React.createElement(React.Fragment, null,
                React.createElement("div", { className: ' py-6 px-4 ' },
                    React.createElement(Button_1["default"], { style: 'primarySimple', customStyle: 'font-semibold', disabled: props.amountValue === 0, onClick: props.handleSearch }, props.side === 'BID' ? 'no' : 'yes'))))));
}
exports["default"] = MobileComparison;

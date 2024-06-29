'use client';
"use strict";
exports.__esModule = true;
var isMobileView_1 = require("@/app/utils/isMobileView");
var MobileComparison_1 = require("@/app/components/SafeLLM/MobileComparison");
var WebComparison_1 = require("@/app/components/SafeLLM/WebComparison");
var react_1 = require("react");
var react_redux_1 = require("react-redux");
function SafeLLM() {
    var _a = react_1.useState('BID'), side = _a[0], setSide = _a[1];
    var _b = react_1.useState(false), isModalOpen = _b[0], setIsModalOpen = _b[1];
    var dispatch = react_redux_1.useDispatch();
    var initialState = {
        selectedCoin: null,
        amountValue: undefined,
        selectedExchange: '',
        isExchangeVisible: false
    };
    var handleTabClick = function (side) {
        setSide(side);
    };
    var handleSearch = function () {
    };
    return (React.createElement(React.Fragment, null, isMobileView_1["default"] ?
        React.createElement(MobileComparison_1["default"], { side: side, handleTabClick: handleTabClick, isModalOpen: isModalOpen, setIsModalOpen: setIsModalOpen, handleSearch: handleSearch })
        : React.createElement(React.Fragment, null,
            React.createElement(WebComparison_1["default"], { side: side, handleTabClick: handleTabClick, isModalOpen: isModalOpen, setIsModalOpen: setIsModalOpen, handleSearch: handleSearch }))));
}
exports["default"] = SafeLLM;

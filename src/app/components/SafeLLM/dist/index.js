'use client';
"use strict";
exports.__esModule = true;
var isMobileView_1 = require("@/app/utils/isMobileView");
var MobileComparison_1 = require("@/app/components/SafeLLM/MobileComparison");
var WebComparison_1 = require("@/app/components/SafeLLM/WebComparison");
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var webDescription_1 = require("@/app/components/SafeLLM/webDescription");
var loading_1 = require("@/app/loading");
function SafeLLM() {
    var ExchangeTable = react_1.lazy(function () { return Promise.resolve().then(function () { return require('./ExchangeTable/exchangeTable'); }); });
    var _a = react_1.useState('BID'), side = _a[0], setSide = _a[1];
    var _b = react_1.useState(), amountValue = _b[0], setAmountValue = _b[1];
    var _c = react_1.useState(null), selectedExchange = _c[0], setSelectedExchange = _c[1];
    var _d = react_1.useState(false), isModalOpen = _d[0], setIsModalOpen = _d[1];
    var _e = react_1.useState(false), isConfirmModalOpen = _e[0], setIsConfirmModalOpen = _e[1];
    var _f = react_1.useState(false), isExchangeVisible = _f[0], setIsExchangeVisible = _f[1];
    var _g = react_1.useState(''), market = _g[0], setMarket = _g[1];
    var _h = react_1.useState([]), exchangesList = _h[0], setExchangesList = _h[1];
    var exchangesStates = react_redux_1.useSelector(function (state) { return state.exchanges; });
    var orderStates = react_redux_1.useSelector(function (state) { return state.order; });
    var dispatch = react_redux_1.useDispatch();
    var initialState = {
        selectedCoin: null,
        amountValue: undefined,
        selectedExchange: '',
        isExchangeVisible: false
    };
    var handleTabClick = function (side) {
        setSide(side);
        setAmountValue(initialState.amountValue);
        setIsExchangeVisible(initialState.isExchangeVisible);
    };
    var handleAmount = function (value) {
        if (value == amountValue)
            return;
        setAmountValue(value);
        setIsExchangeVisible(false);
    };
    var handleExchange = function (exchange) {
        setSelectedExchange(exchange);
        setIsConfirmModalOpen(true);
    };
    var handleSearch = function () {
        setIsExchangeVisible(false);
    };
    react_1.useEffect(function () {
        if (exchangesStates.isDone) {
            if (selectedExchange) {
                var newExchange = exchangesStates.data.exchanges.filter(function (exchange) { return exchange.title == (selectedExchange === null || selectedExchange === void 0 ? void 0 : selectedExchange.title); });
                setSelectedExchange(newExchange[0]);
            }
            setExchangesList(exchangesStates.data.exchanges);
            setIsExchangeVisible(true);
        }
    }, [exchangesStates.isDone]);
    return (React.createElement(React.Fragment, null,
        isMobileView_1["default"] ?
            React.createElement(MobileComparison_1["default"], { side: side, handleTabClick: handleTabClick, isModalOpen: isModalOpen, setIsModalOpen: setIsModalOpen, selectedExchange: selectedExchange, handleSearch: handleSearch, exchangesList: exchangesList })
            : React.createElement(React.Fragment, null,
                React.createElement(WebComparison_1["default"], { side: side, handleTabClick: handleTabClick, isModalOpen: isModalOpen, setIsModalOpen: setIsModalOpen, selectedExchange: selectedExchange, handleSearch: handleSearch, exchangesList: exchangesList }),
                !isExchangeVisible &&
                    React.createElement(webDescription_1["default"], null)),
        isExchangeVisible && exchangesStates.isDone ?
            React.createElement("div", { className: isMobileView_1["default"] ? '' : 'm-auto w-3/4 mt-20' },
                React.createElement(react_1.Suspense, { fallback: React.createElement(loading_1["default"], null) },
                    React.createElement(ExchangeTable, { onClick: handleExchange, exchangeList: exchangesList, side: side }))) : ''));
}
exports["default"] = SafeLLM;

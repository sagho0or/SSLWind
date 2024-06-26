"use strict";
exports.__esModule = true;
var Icons_1 = require("../../../../../public/Icons");
var isMobileView_1 = require("@/app/utils/isMobileView");
function ExchangeTable(props) {
    var _a;
    return (React.createElement("div", { className: isMobileView_1["default"] ? "p-3 border-t-3 border-secondary-02" : '' }, ((_a = props.exchangeList) === null || _a === void 0 ? void 0 : _a.length) ?
        React.createElement("table", { className: "w-full text-sm text-secondary-17 font-medium text-right" },
            React.createElement("thead", { className: "h-12 text-xs text-secondary-10 " + (isMobileView_1["default"] ? '' : 'bg-secondary-02 rounded-xl') },
                React.createElement(React.Fragment, null,
                    React.createElement("th", { scope: "col", className: "rounded-r-xl pr-4" }, "#"),
                    React.createElement("th", { scope: "col", className: "" }, "Name"),
                    React.createElement("th", { scope: "col", className: "" }, "Access Level"),
                    React.createElement("th", { scope: "col", className: "" }, "Id"),
                    React.createElement("th", { scope: "col", className: "rounded-l-xl" },
                        React.createElement("span", { className: "sr-only" }, "Continue")))),
            React.createElement("tbody", null, props.exchangeList.map(function (exchange, index) {
                return React.createElement("tr", { className: "border-b h-18", key: exchange.id },
                    React.createElement("td", { className: 'pr-4' },
                        React.createElement("p", { className: 'text-secondary-10' }, index + 1)),
                    React.createElement("td", { className: "flex items-center h-inherit" },
                        React.createElement("span", { className: 'ml-2' }),
                        React.createElement("span", { className: '' }, exchange.title)),
                    React.createElement("td", { className: "" }),
                    React.createElement("td", { className: "" }),
                    React.createElement("td", { className: "" },
                        React.createElement("a", { href: "#", className: "inline-flex", onClick: function () { return props.onClick(exchange); } },
                            React.createElement("p", { className: 'text-primary' },
                                " ",
                                props.side === 'BID' ? 'خرید' : 'فروش',
                                " "),
                            React.createElement(Icons_1["default"], { name: 'direction-left-blue' }))));
            })))
        : React.createElement("p", { className: 'my-8 text-center' }, "No record !")));
}
exports["default"] = ExchangeTable;

'use client';
"use strict";
exports.__esModule = true;
var Button_1 = require("@/app/components/Common/Button");
function WebComparison(props) {
    function handleKeyDownEvent(event) {
        if (event.key === "Enter" &&
            props.amountValue) {
            props.handleSearch();
        }
    }
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "bg-gradient-to-b from-primary-002 from-0% to-white to-75% ... h-130\n                " },
            React.createElement("div", { className: "h-full w-full bg-[url('/images/comparison-bg-pattern.svg')] bg-no-repeat" },
                React.createElement("div", { className: "w-8/12 max-w-275 mx-auto pt-8" },
                    React.createElement("div", { className: "w-1/2" },
                        React.createElement("h1", { className: 'text-5xl font-bold my-5 text-primary' }, "Safe LLM"),
                        React.createElement("h4", { className: 'text-xl font-medium ' }, "Lorem Ipsum"),
                        React.createElement("p", { className: "text-secondary-10 mt-5" }, "description alaki"))))),
        React.createElement("div", { className: "absolute w-full top-[505px] " },
            React.createElement("div", { className: 'flex gap-x-5 items-center justify-between relative bottom-16 bg-white ' +
                    'h-44 w-3/4 max-w-275 mx-auto px-8 rounded-2xl rounded-t-none rounded-l-2xl shadow-2xl' },
                React.createElement(Button_1["default"], { style: 'primarySimple', customStyle: 'font-semibold max-w-44 flex items-center justify-center', disabled: props.amountValue === 0 || typeof (props.amountValue) !== 'string', onClick: props.handleSearch },
                    "Submit ",
                    props.side === 'BID' ? 'get' : 'post')))));
}
exports["default"] = WebComparison;

'use client';
"use strict";
exports.__esModule = true;
var Icons_1 = require("../../../../public/Icons");
// @ts-ignore
var react_faq_component_1 = require("react-faq-component");
var FAQ_Data = require("./FAQ.json");
var isMobileView_1 = require("@/app/utils/isMobileView");
function FAQ() {
    var data = FAQ_Data;
    var styles = {
        bgColor: 'white',
        titleTextColor: '#787878',
        titleTextSize: '16px',
        rowTitleColor: '#787878',
        rowTitleTextSize: '16px',
        rowContentColor: '#787878',
        rowContentTextSize: '16px',
        rowContentPaddingTop: '20px',
        rowContentPaddingBottom: '20px',
        rowContentPaddingLeft: '40px',
        rowContentPaddingRight: '40px',
        arrowColor: "#787878"
    };
    var config = {
        animate: true
    };
    return (React.createElement("div", { className: 'bg-secondary-02 space-y-3 py-12' },
        React.createElement("div", { className: 'w-fit m-auto' },
            React.createElement(Icons_1["default"], { name: 'question' })),
        React.createElement("h2", { className: 'text-primary-10 text-center font-normal' }, "FAQ"),
        React.createElement("div", { className: isMobileView_1["default"] ? '' : 'w-10/12 m-auto' },
            React.createElement(react_faq_component_1["default"], { data: data, styles: styles, config: config }))));
}
exports["default"] = FAQ;

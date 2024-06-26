"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
var react_1 = require("react");
var Icons_1 = require("../../../../public/Icons");
function Footer() {
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("div", { className: "grid grid-cols-2 p-20 " },
            react_1["default"].createElement("div", { className: "col-span-1 " },
                react_1["default"].createElement("h3", { className: 'font-bold py-5' }, "About Us"),
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement("p", { className: "text-secondary-10" },
                        react_1["default"].createElement(link_1["default"], { href: '/about' }, "About Us")),
                    react_1["default"].createElement("p", { className: "text-secondary-10" },
                        react_1["default"].createElement(link_1["default"], { href: '/about' }, "Contact Us")),
                    react_1["default"].createElement("p", { className: "text-secondary-10" },
                        react_1["default"].createElement(link_1["default"], { href: '/about' }, "Rules")))),
            react_1["default"].createElement("div", { className: "col-span-1 " },
                react_1["default"].createElement("h3", { className: 'font-bold py-5' }, "More Information"),
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement("p", { className: "text-secondary-10" },
                        react_1["default"].createElement(link_1["default"], { href: '/about' }, "How to register")),
                    react_1["default"].createElement("p", { className: "text-secondary-10" },
                        react_1["default"].createElement(link_1["default"], { href: '/faq' }, "Faq"))))),
        react_1["default"].createElement("div", { className: "grid grid-cols-3 p-20" },
            react_1["default"].createElement("div", { className: 'bg-secondary-002 py-5' },
                react_1["default"].createElement("p", { className: 'text-secondary-10 text-xs' }, "Copy Right!")),
            react_1["default"].createElement("div", { className: 'flex' },
                react_1["default"].createElement("div", { className: "p-2 max-h-40 max-w-40" },
                    react_1["default"].createElement(link_1["default"], { href: 'https://linkedin.com' },
                        react_1["default"].createElement(Icons_1["default"], { name: 'Linkedin' }))),
                react_1["default"].createElement("div", { className: "p-2 max-h-40 max-w-40" },
                    react_1["default"].createElement(link_1["default"], { href: 'https://linkedin.com' },
                        react_1["default"].createElement(Icons_1["default"], { name: 'Telegram' }))),
                react_1["default"].createElement("div", { className: "p-2 max-h-40 max-w-40" },
                    react_1["default"].createElement(link_1["default"], { href: 'https://linkedin.com' },
                        react_1["default"].createElement(Icons_1["default"], { name: 'Twitter' }))),
                react_1["default"].createElement("div", { className: "p-2 max-h-40 max-w-40" },
                    react_1["default"].createElement(link_1["default"], { href: 'https://linkedin.com' },
                        react_1["default"].createElement(Icons_1["default"], { name: 'Instagram' })))),
            react_1["default"].createElement("div", { className: 'm-auto' },
                react_1["default"].createElement(link_1["default"], { href: 'https://linkedin.com' },
                    react_1["default"].createElement(Icons_1["default"], { name: 'AzkiBit' }))))));
}
exports["default"] = Footer;

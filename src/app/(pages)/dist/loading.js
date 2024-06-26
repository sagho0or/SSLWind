"use strict";
exports.__esModule = true;
var Icons_1 = require("../public/Icons");
function Loading() {
    return (React.createElement("div", { className: 'flex items-center flex-col mt-6' },
        React.createElement(Icons_1["default"], { name: 'loading' }),
        React.createElement("p", { className: 'mt-6' }, "Loading...")));
}
exports["default"] = Loading;

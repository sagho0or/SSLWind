"use strict";
exports.__esModule = true;
var Icons_1 = require("../../../../../public/Icons");
var react_1 = require("react");
function MobileInnerSetting(_a) {
    var setShowInnerProfile = _a.setShowInnerProfile;
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { onClick: function () { return setShowInnerProfile(false); }, className: 'absolute top-10 cursor-pointer' },
            react_1["default"].createElement(Icons_1["default"], { name: 'left-arrow-key' })),
        react_1["default"].createElement("div", { className: "mt-12" },
            react_1["default"].createElement("h3", { className: "font-semibold text-xl text-center" }, "Chat"))));
}
exports["default"] = MobileInnerSetting;

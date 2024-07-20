"use strict";
exports.__esModule = true;
var Icons_1 = require("../../../../../public/Icons");
var react_1 = require("react");
var moment_1 = require("moment");
function MobileInnerProfile(_a) {
    var userProfile = _a.userProfile, setShowInnerProfile = _a.setShowInnerProfile;
    react_1.useEffect(function () {
        console.log(userProfile);
        debugger;
    }, []);
    var personalData = [
        { title: "Full name", desc: userProfile === null || userProfile === void 0 ? void 0 : userProfile.full_name },
        { title: "Birth Date", desc: (userProfile === null || userProfile === void 0 ? void 0 : userProfile.birth_date) ? moment_1["default"](userProfile === null || userProfile === void 0 ? void 0 : userProfile.birth_date).format('YYYY/MM/DD') : '' },
        { title: "PhoneNumber", desc: userProfile === null || userProfile === void 0 ? void 0 : userProfile.mobile_number },
        { title: "Email", desc: userProfile === null || userProfile === void 0 ? void 0 : userProfile.email }
    ];
    var additionalData = [
        { title: "Postal code", desc: "" + ((userProfile === null || userProfile === void 0 ? void 0 : userProfile.postal_code) ? userProfile === null || userProfile === void 0 ? void 0 : userProfile.postal_code : "------------") },
        { title: "Address", desc: "" + ((userProfile === null || userProfile === void 0 ? void 0 : userProfile.address) ? userProfile === null || userProfile === void 0 ? void 0 : userProfile.address : "------------") },
    ];
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { onClick: function () { return setShowInnerProfile(false); }, className: 'absolute top-10 cursor-pointer' },
            react_1["default"].createElement(Icons_1["default"], { name: 'left-arrow-key' })),
        react_1["default"].createElement("div", { className: "mt-12" },
            react_1["default"].createElement("h3", { className: "font-semibold text-xl text-center" }, "Account"),
            react_1["default"].createElement("ul", { className: "mt-4 " },
                react_1["default"].createElement("li", { className: 'flex justify-between items-center p-4 border-b-2 border-secondary-02 cursor-pointer' },
                    react_1["default"].createElement("p", null, "Photo"),
                    react_1["default"].createElement("div", { className: 'rounded-full w-12 h-12' },
                        react_1["default"].createElement("img", { src: (userProfile === null || userProfile === void 0 ? void 0 : userProfile.avatar_id) || '/images/avatar.svg', alt: userProfile === null || userProfile === void 0 ? void 0 : userProfile.full_name, width: 48, height: 48 }))),
                personalData.map(function (_a, index) {
                    var title = _a.title, desc = _a.desc;
                    return (react_1["default"].createElement("li", { key: "personal-data-" + index, className: "flex justify-between p-4 border-b-2 border-secondary-02" },
                        react_1["default"].createElement("p", { className: " mb-2" }, title),
                        react_1["default"].createElement("p", { className: "text-secondary" }, desc)));
                }))),
        react_1["default"].createElement("div", { className: 'w-full h-3 bg-secondary-02' }),
        react_1["default"].createElement("div", { className: "pt-4" },
            react_1["default"].createElement("h3", { className: "font-semibold text-xl" }, "Information"),
            react_1["default"].createElement("ul", null, additionalData.map(function (_a, index) {
                var title = _a.title, desc = _a.desc;
                return (react_1["default"].createElement("li", { key: "add-data-" + index, className: (additionalData.length - 1 !== index ? "border-secondary-02 border-b-2" : "") + " \n                                 flex justify-between p-4" },
                    react_1["default"].createElement("p", { className: "" }, title),
                    react_1["default"].createElement("p", { className: "text-secondary flex" },
                        desc,
                        react_1["default"].createElement(Icons_1["default"], { name: 'direction-left-gray' }))));
            })))));
}
exports["default"] = MobileInnerProfile;

"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Sidebar_1 = require("@/app/components/Sidebar");
var getUserProfile_service_1 = require("@/app/services/getUserProfile.service");
var Button_1 = require("@/app/components/Common/Button");
var moment_1 = require("moment");
function WebProfileComponent() {
    var _a = react_1.useState(true), isSidebarOpen = _a[0], setIsSidebarOpen = _a[1];
    var _b = react_1.useState(), userProfile = _b[0], setUserProfile = _b[1];
    var personalData = [
        { title: "Full Name", desc: userProfile === null || userProfile === void 0 ? void 0 : userProfile.full_name },
        { title: "Date of Birth", desc: (userProfile === null || userProfile === void 0 ? void 0 : userProfile.birth_date) ? moment_1["default"](userProfile === null || userProfile === void 0 ? void 0 : userProfile.birth_date).format('YYYY/MM/DD') : '' },
        { title: "Phone Number", desc: userProfile === null || userProfile === void 0 ? void 0 : userProfile.mobile_number },
        { title: "Email", desc: userProfile === null || userProfile === void 0 ? void 0 : userProfile.email }
    ];
    var additionalData = [
        { title: "Postal Code", desc: "" + ((userProfile === null || userProfile === void 0 ? void 0 : userProfile.postal_code) ? userProfile === null || userProfile === void 0 ? void 0 : userProfile.postal_code : "------------") },
        { title: "Address", desc: "" + ((userProfile === null || userProfile === void 0 ? void 0 : userProfile.address) ? userProfile === null || userProfile === void 0 ? void 0 : userProfile.address : "------------") },
    ];
    react_1.useEffect(function () {
        getUserProfile_service_1["default"](true).then(function (res) {
            setUserProfile(res);
        });
    }, []);
    return (react_1["default"].createElement(Sidebar_1["default"], { isSidebarOpen: isSidebarOpen, setIsSidebarOpen: setIsSidebarOpen },
        react_1["default"].createElement("div", null,
            react_1["default"].createElement("div", { className: 'bg-secondary-01 rounded-xl flex p-8' },
                react_1["default"].createElement("div", { className: 'rounded-full w-18 h-18' },
                    react_1["default"].createElement("img", { src: (userProfile === null || userProfile === void 0 ? void 0 : userProfile.imageUrl) || '/images/avatar.svg', alt: userProfile === null || userProfile === void 0 ? void 0 : userProfile.first_name, width: 72, height: 72 })),
                react_1["default"].createElement("ul", { className: "flex flex-row justify-between items-center w-full ml-4" }, personalData.map(function (_a, index) {
                    var title = _a.title, desc = _a.desc;
                    return (react_1["default"].createElement("li", { key: "personal-data-" + index },
                        react_1["default"].createElement("p", { className: "text-secondary mb-2" }, title),
                        react_1["default"].createElement("p", null, desc)));
                }))),
            react_1["default"].createElement("div", { className: "mt-4 flex " },
                react_1["default"].createElement("div", { className: 'bg-secondary-01 rounded-xl px-8 pt-8 w-2/3' },
                    react_1["default"].createElement("h3", { className: "font-semibold text-xl" }, "More Information"),
                    react_1["default"].createElement("table", { className: "table-auto w-full" },
                        react_1["default"].createElement("tbody", null, additionalData.map(function (_a, index) {
                            var title = _a.title, desc = _a.desc;
                            return (react_1["default"].createElement("tr", { key: "add-data-" + index, className: "" + (additionalData.length - 1 !== index ? "border-secondary-02 border-b-2" : "") },
                                react_1["default"].createElement("td", { className: "py-8 w-36" }, title),
                                react_1["default"].createElement("td", { className: "text-secondary" }, desc),
                                react_1["default"].createElement("td", { className: "w-24 " },
                                    react_1["default"].createElement(Button_1["default"], { style: "primarySimple", customStyle: "h-10", onClick: function () {
                                        } }, "Save"))));
                        })))),
                react_1["default"].createElement("div", { className: "ml-4 w-1/3" },
                    react_1["default"].createElement("div", { className: "bg-secondary-01 rounded-xl  p-8" },
                        react_1["default"].createElement("h3", { className: "font-semibold text-xl" }, "Role"),
                        react_1["default"].createElement("div", { className: "inline-flex items-center justify-center px-2 py-1.5 ms-3 text-error bg-error-01 rounded-lg font-semibold text-sm" }, "Access Level")))))));
}
exports["default"] = WebProfileComponent;

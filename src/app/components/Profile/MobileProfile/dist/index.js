"use strict";
exports.__esModule = true;
var Icons_1 = require("../../../../../public/Icons");
var react_1 = require("react");
var moment_1 = require("moment");
var getUserProfile_service_1 = require("@/app/services/getUserProfile.service");
function MobileProfileComponent(_a) {
    var setShowInnerComponent = _a.setShowInnerComponent;
    var _b = react_1.useState(null), userProfile = _b[0], setUserProfile = _b[1];
    var _c = react_1.useState(null), error = _c[0], setError = _c[1];
    react_1.useEffect(function () {
        getUserProfile_service_1["default"](false).then(function (res) {
            setUserProfile(res);
            console.log(userProfile);
        })["catch"](function (error) {
            console.error("Error fetching user profile:", error);
        });
    }, []);
    var personalData = react_1.useMemo(function () { return [
        { title: "Full name", desc: (userProfile === null || userProfile === void 0 ? void 0 : userProfile.firstName) + " " + (userProfile === null || userProfile === void 0 ? void 0 : userProfile.lastName) },
        { title: "Birth Date", desc: (userProfile === null || userProfile === void 0 ? void 0 : userProfile.birthDate) ? moment_1["default"](userProfile === null || userProfile === void 0 ? void 0 : userProfile.birthDate).format('YYYY/MM/DD') : '' },
        { title: "Phone Number", desc: userProfile === null || userProfile === void 0 ? void 0 : userProfile.mobileNumber },
        { title: "Email", desc: userProfile === null || userProfile === void 0 ? void 0 : userProfile.email }
    ]; }, [userProfile]);
    var additionalData = react_1.useMemo(function () { return [
        { title: "Postal code", desc: (userProfile === null || userProfile === void 0 ? void 0 : userProfile.postalCode) || "------------" },
        { title: "Address", desc: (userProfile === null || userProfile === void 0 ? void 0 : userProfile.address) || "------------" },
    ]; }, [userProfile]);
    if (error) {
        return react_1["default"].createElement("div", { className: "text-red-500 text-center mt-4" }, error);
    }
    if (!userProfile) {
        return react_1["default"].createElement("div", { className: "text-center mt-4" }, "Loading...");
    }
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: "fixed pt-3 pb-3 w-full bg-white" },
            react_1["default"].createElement("h3", { className: "font-semibold text-xl text-center" }, "Profle"),
            react_1["default"].createElement("div", { onClick: function () { return setShowInnerComponent(false); }, className: 'absolute top-4 left-2 cursor-pointer' },
                react_1["default"].createElement(Icons_1["default"], { name: 'right-arrow-key' }))),
        react_1["default"].createElement("div", { className: "mt-8" },
            react_1["default"].createElement("ul", { className: "mt-4 " },
                react_1["default"].createElement("li", { className: 'flex justify-between items-center p-4 border-b-2 border-secondary-02 cursor-pointer' },
                    react_1["default"].createElement("p", null, "Photo"),
                    react_1["default"].createElement("div", { className: 'rounded-full w-12 h-12' },
                        react_1["default"].createElement("img", { src: (userProfile === null || userProfile === void 0 ? void 0 : userProfile.imageUrl) || '/images/avatar.svg', alt: (userProfile === null || userProfile === void 0 ? void 0 : userProfile.firstName) + '' + (userProfile === null || userProfile === void 0 ? void 0 : userProfile.lastName), width: 48, height: 48 }))),
                personalData.map(function (_a, index) {
                    var title = _a.title, desc = _a.desc;
                    return (react_1["default"].createElement("li", { key: "personal-data-" + index, className: "flex justify-between p-4 border-b-2 border-secondary-02" },
                        react_1["default"].createElement("p", { className: " mb-2" }, title),
                        react_1["default"].createElement("p", { className: "text-secondary" }, desc)));
                }))),
        react_1["default"].createElement("div", { className: 'w-full h-3 bg-secondary-02' }),
        react_1["default"].createElement("div", { className: "p-4" },
            react_1["default"].createElement("h3", { className: "font-semibold text-xl text-center pb-2" }, "Information"),
            react_1["default"].createElement("ul", null, additionalData.map(function (_a, index) {
                var title = _a.title, desc = _a.desc;
                return (react_1["default"].createElement("li", { key: "add-data-" + index, className: (additionalData.length - 1 !== index ? "border-secondary-02 border-b-2" : "") + " \n                                 flex justify-between p-4" },
                    react_1["default"].createElement("p", { className: "" }, title),
                    react_1["default"].createElement("p", { className: "text-secondary flex" },
                        desc,
                        react_1["default"].createElement(Icons_1["default"], { name: 'direction-left-gray' }))));
            })))));
}
exports["default"] = MobileProfileComponent;

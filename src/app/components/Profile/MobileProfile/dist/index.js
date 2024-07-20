'use client';
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Icons_1 = require("../../../../../public/Icons");
var getUserProfile_service_1 = require("@/app/services/getUserProfile.service");
var logout_1 = require("@/app/services/logout");
var navigation_1 = require("next/navigation");
var MobileInnerProfile_1 = require("@/app/components/Profile/MobileInnerProfile");
function MobileProfileComponent() {
    var _a = react_1.useState(), userProfile = _a[0], setUserProfile = _a[1];
    var _b = react_1.useState(false), showInnerProfile = _b[0], setShowInnerProfile = _b[1];
    var Router = navigation_1.useRouter();
    react_1.useEffect(function () {
        getUserProfile_service_1["default"](false).then(function (res) {
            setUserProfile(res);
            console.log(userProfile);
        })["catch"](function (error) {
            console.error("Error fetching user profile:", error);
            debugger;
        });
    }, []);
    function logoutFuc() {
        logout_1["default"]();
        Router.push('/');
    }
    return (react_1["default"].createElement(react_1["default"].Fragment, null, !showInnerProfile ?
        react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement("div", { className: 'h-40 flex flex-col justify-center items-center' },
                react_1["default"].createElement("div", { className: 'rounded-full w-12 h-12' },
                    react_1["default"].createElement("img", { src: (userProfile === null || userProfile === void 0 ? void 0 : userProfile.avatar_id) || '/images/avatar.svg', alt: userProfile === null || userProfile === void 0 ? void 0 : userProfile.full_name, width: 48, height: 48 })),
                react_1["default"].createElement("p", { className: 'text-md font-semibold mt-4' }, userProfile === null || userProfile === void 0 ? void 0 : userProfile.full_name)),
            react_1["default"].createElement("div", { className: 'w-full h-3 bg-secondary-02' }),
            react_1["default"].createElement("ul", null,
                react_1["default"].createElement("li", { className: 'flex justify-between p-4 border-b-2 border-secondary-02 cursor-pointer' },
                    react_1["default"].createElement("a", { className: 'flex flex-1', onClick: function () { return setShowInnerProfile(true); } },
                        react_1["default"].createElement(Icons_1["default"], { name: 'profile-account' }),
                        react_1["default"].createElement("p", { className: 'ml-3' }, "Profle")),
                    react_1["default"].createElement(Icons_1["default"], { name: 'direction-left-gray' }))),
            react_1["default"].createElement("div", { className: 'w-full h-3 bg-secondary-02' }),
            react_1["default"].createElement("div", { className: 'w-full h-3 bg-secondary-02' }),
            react_1["default"].createElement("ul", null,
                react_1["default"].createElement("li", { className: 'flex justify-between p-4 border-b-2 border-secondary-02 cursor-pointer' },
                    react_1["default"].createElement("a", { className: 'flex flex-1', href: '/security' },
                        react_1["default"].createElement(Icons_1["default"], { name: 'profile-security' }),
                        react_1["default"].createElement("p", { className: 'ml-3' }, "Security")),
                    react_1["default"].createElement(Icons_1["default"], { name: 'direction-left-gray' })),
                react_1["default"].createElement("li", { className: 'flex justify-between p-4 border-b-2 border-secondary-02 cursor-pointer' },
                    react_1["default"].createElement("a", { className: 'flex flex-1', href: '' },
                        react_1["default"].createElement(Icons_1["default"], { name: 'profile-support' }),
                        react_1["default"].createElement("p", { className: 'ml-3' }, "Support")),
                    react_1["default"].createElement(Icons_1["default"], { name: 'direction-left-gray' })),
                react_1["default"].createElement("li", { className: 'flex justify-between p-4 border-b-2 border-secondary-02 cursor-pointer' },
                    react_1["default"].createElement("a", { className: 'flex flex-1', href: '/faq' },
                        react_1["default"].createElement(Icons_1["default"], { name: 'profile-faq' }),
                        react_1["default"].createElement("p", { className: 'ml-3' }, "FAQ")),
                    react_1["default"].createElement(Icons_1["default"], { name: 'direction-left-gray' })),
                react_1["default"].createElement("li", { className: 'flex p-4 cursor-pointer', onClick: logoutFuc },
                    react_1["default"].createElement(Icons_1["default"], { name: 'profile-logout' }),
                    react_1["default"].createElement("p", { className: 'ml-3' }, "Logout"))))
        :
            userProfile &&
                react_1["default"].createElement(MobileInnerProfile_1["default"], { userProfile: userProfile, setShowInnerProfile: setShowInnerProfile })));
}
exports["default"] = MobileProfileComponent;

"use strict";
exports.__esModule = true;
var react_1 = require("react");
var navigation_1 = require("next/navigation");
var Icons_1 = require("../../../../public/Icons");
var getUserProfile_service_1 = require("@/app/services/getUserProfile.service");
var logout_1 = require("@/app/services/logout");
var react_redux_1 = require("react-redux");
var Menu = function (_a) {
    var currentPath = _a.currentPath, setShowInnerComponent = _a.setShowInnerComponent;
    var _b = react_1.useState(), userProfile = _b[0], setUserProfile = _b[1];
    var userProfileState = react_redux_1.useSelector(function (state) { return state.userProfile.data; });
    var Router = navigation_1.useRouter();
    react_1.useEffect(function () {
        if (!userProfileState) {
            getUserProfile_service_1["default"](false).then(function (res) {
                setUserProfile(res);
                console.log("User Profile:", userProfile);
            })["catch"](function (error) {
                console.error("Error fetching user profile:", error);
            });
        }
        else {
            setUserProfile(userProfileState);
        }
    }, []);
    function handleChatClick(path) {
        if (currentPath == path)
            setShowInnerComponent(true);
        else
            setShowInnerComponent(true);
        Router.push(path);
    }
    function logoutFuc() {
        logout_1["default"]();
        Router.push('/');
    }
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: 'h-40 flex flex-col justify-center items-center' },
            react_1["default"].createElement("div", { className: 'rounded-full w-12 h-12' },
                react_1["default"].createElement("img", { src: (userProfile === null || userProfile === void 0 ? void 0 : userProfile.imageUrl) || '/images/avatar.svg', alt: (userProfile === null || userProfile === void 0 ? void 0 : userProfile.firstName) + ' ' + (userProfile === null || userProfile === void 0 ? void 0 : userProfile.lastName) || 'User Avatar', width: 48, height: 48, onError: function (e) { e.currentTarget.src = '/images/avatar.svg'; }, loading: "lazy" })),
            react_1["default"].createElement("p", { className: 'text-md font-semibold mt-4' }, (userProfile === null || userProfile === void 0 ? void 0 : userProfile.firstName) + ' ' + (userProfile === null || userProfile === void 0 ? void 0 : userProfile.lastName))),
        react_1["default"].createElement("div", { className: 'w-full h-3 bg-secondary-02' }),
        react_1["default"].createElement("ul", null,
            react_1["default"].createElement("li", { className: 'flex justify-between p-4 border-b-2 border-secondary-02 cursor-pointer' },
                react_1["default"].createElement("a", { className: 'flex flex-1', onClick: function () { return handleChatClick('/profile'); } },
                    react_1["default"].createElement(Icons_1["default"], { name: 'profile-account' }),
                    react_1["default"].createElement("p", { className: 'ml-3' }, "Profle")),
                react_1["default"].createElement(Icons_1["default"], { name: 'direction-left-gray' })),
            react_1["default"].createElement("li", { className: 'flex justify-between p-4 border-b-2 border-secondary-02 cursor-pointer' },
                react_1["default"].createElement("a", { className: 'flex flex-1', onClick: function () { return handleChatClick('/security'); } },
                    react_1["default"].createElement(Icons_1["default"], { name: 'profile-security' }),
                    react_1["default"].createElement("p", { className: 'ml-3' }, "Security")),
                react_1["default"].createElement(Icons_1["default"], { name: 'direction-left-gray' })),
            react_1["default"].createElement("li", { className: 'flex justify-between p-4 border-b-2 border-secondary-02 cursor-pointer' },
                react_1["default"].createElement("a", { className: 'flex flex-1', onClick: function () { return handleChatClick('/support'); } },
                    react_1["default"].createElement(Icons_1["default"], { name: 'profile-support' }),
                    react_1["default"].createElement("p", { className: 'ml-3' }, "Support")),
                react_1["default"].createElement(Icons_1["default"], { name: 'direction-left-gray' })),
            react_1["default"].createElement("li", { className: 'flex justify-between p-4 border-b-2 border-secondary-02 cursor-pointer' },
                react_1["default"].createElement("a", { className: 'flex flex-1', onClick: function () { return handleChatClick('/chat'); } },
                    react_1["default"].createElement(Icons_1["default"], { name: 'profile-faq' }),
                    react_1["default"].createElement("p", { className: 'ml-3' }, "chat")),
                react_1["default"].createElement(Icons_1["default"], { name: 'direction-left-gray' })),
            react_1["default"].createElement("li", { className: 'flex p-4 cursor-pointer', onClick: logoutFuc },
                react_1["default"].createElement(Icons_1["default"], { name: 'profile-logout' }),
                react_1["default"].createElement("p", { className: 'ml-3' }, "Logout")))));
};
exports["default"] = Menu;

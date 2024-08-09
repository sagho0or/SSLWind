'use client';
"use strict";
exports.__esModule = true;
var Icons_1 = require("../../../../public/Icons");
var isMobileView_1 = require("@/app/utils/isMobileView");
var react_1 = require("react");
var react_cookie_1 = require("react-cookie");
var navigation_1 = require("next/navigation");
var getUserProfile_service_1 = require("@/app/services/getUserProfile.service");
var logout_1 = require("@/app/services/logout");
function Sidebar(props) {
    var _a = react_1.useState(), userProfile = _a[0], setUserProfile = _a[1];
    var _b = react_cookie_1.useCookies(['auth-token', 'auth-refresh']), cookie = _b[0], setCookie = _b[1], removeCookie = _b[2];
    var pathname = navigation_1.usePathname();
    var isLogin = !!cookie['auth-token'];
    var Router = navigation_1.useRouter();
    var itemsStyle = 'flex items-center px-6 py-4 ' +
        'hover:bg-primary-01 hover:text-primary hover:border-r hover:border-r-2 hover:border-primary group ' +
        'active:text-primary active:border-r active:border-r-2 active:border-primary';
    var borderBottomStyle = 'border-b-2 border-b-secondary-02';
    react_1.useEffect(function () {
        getUserProfile_service_1["default"](false).then(function (res) {
            setUserProfile(res);
        });
    }, []);
    function logoutFunc() {
        logout_1["default"]();
        Router.push('/');
    }
    var items = [
        {
            label: 'History',
            path: '/history',
            iconName: 'history',
            hoverIconName: 'history-filled',
            hasDivider: true,
            badge: null
        },
        {
            label: 'chatbot',
            path: '/chat',
            iconName: 'chat',
            hoverIconName: 'chat-filled',
            hasDivider: false,
            badge: null
        },
        {
            label: 'Support',
            path: '/',
            iconName: 'headphones',
            hoverIconName: 'headphones-filled',
            hasDivider: false,
            badge: null
        },
        {
            label: 'Secutiry',
            path: '/security',
            iconName: 'lock',
            hoverIconName: 'lock-filled',
            hasDivider: true,
            badge: null
        },
        {
            label: 'Profile',
            path: '/profile',
            iconName: 'user',
            hoverIconName: 'user-filled',
            hasDivider: false,
            badge: null
        }
    ];
    var handleModalOverlayClick = function (val) {
        props.setIsSidebarOpen(val);
    };
    return (react_1["default"].createElement("div", { className: isMobileView_1["default"] ? '' : 'bg-secondary-02 p-5 min-h-full w-full relative flex flex-col' },
        props.isSidebarOpen ?
            react_1["default"].createElement("div", { className: 'flex flex-col flex-1 fixed z-40 w-80 bg-white overflow-y-scroll scrollable-content hide-scrollbar' },
                react_1["default"].createElement("div", { className: "h-full " + (isMobileView_1["default"] ?
                        'relative'
                        : 'bg-secondary-01 rounded-xl') },
                    react_1["default"].createElement("div", { className: "w-8 h-8 cursor-pointer text-primary border border-black hover:bg-primary hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-sm p-1.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500", onClick: function () { return handleModalOverlayClick(false); } },
                        react_1["default"].createElement(Icons_1["default"], { name: 'close' })),
                    react_1["default"].createElement("aside", { id: "separator-sidebar", className: "h-full z-40 transition-transform sm:translate-x-0 \n                           " + (isMobileView_1["default"] ? 'bg-secondary-01 overflow-scroll w-7/12 min-w-60 max-w-80' : ' '), "aria-label": "Sidebar" },
                        react_1["default"].createElement("div", { className: "py-4 overflow-y-auto text-secondary-17 divide-y-2" },
                            react_1["default"].createElement("ul", { className: "h-screen-120 space-y-2 font-medium snap-start snap-y touch-pan-y overflow-y-scroll" + ' ' +
                                    isMobileView_1["default"] ? '' : 'scrollbar-hide"' },
                                items.map(function (item) { return (react_1["default"].createElement("li", { className: "group " + (item.hasDivider ? borderBottomStyle : ''), key: item.label },
                                    react_1["default"].createElement("a", { href: "" + item.path, className: itemsStyle + ' ' +
                                            (" " + (pathname === item.path ? 'bg-primary-01 text-primary border-r-2 border-primary ' : '')) },
                                        react_1["default"].createElement("div", { className: 'group-hover:hidden' },
                                            react_1["default"].createElement(Icons_1["default"], { name: item.iconName })),
                                        react_1["default"].createElement("div", { className: 'hidden group-hover:block' },
                                            react_1["default"].createElement(Icons_1["default"], { name: item.hoverIconName })),
                                        react_1["default"].createElement("span", { className: "ms-3 group-hover:font-semibold" }, item.label)))); }),
                                isLogin &&
                                    react_1["default"].createElement("li", { className: "mt-auto bottom-0 w-full pb-8 cursor-pointer " + itemsStyle, onClick: function () { return logoutFunc(); } },
                                        react_1["default"].createElement(Icons_1["default"], { name: 'logout' }),
                                        react_1["default"].createElement("span", { className: "ms-3" }, "Logout")))))))
            :
                react_1["default"].createElement("div", { onClick: function () { return handleModalOverlayClick(true); }, className: "absolute w-8 h-8 cursor-pointer text-primary border border-black hover:bg-primary hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-sm p-1.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500" },
                    react_1["default"].createElement(Icons_1["default"], { name: 'menu' })),
        react_1["default"].createElement("div", { className: !isMobileView_1["default"] ?
                props.isSidebarOpen ? "sm:w-screen-390 flex flex-1 self-end w-full" : 'w-full self-end'
                : 'w-full' }, props.children)));
}
exports["default"] = Sidebar;

"use strict";
exports.__esModule = true;
exports.metadata = void 0;
var react_1 = require("react");
require("@/styles/globals.css");
var reduxProvider_1 = require("./reduxProvider");
var next_recaptcha_v3_1 = require("next-recaptcha-v3");
var toast_notif_1 = require("@/app/utils/toast-notif");
var clientWrapper_1 = require("./clientWrapper");
require("react-tooltip/dist/react-tooltip.css");
exports.metadata = {
    title: 'SafeLLM Wind',
    description: 'SafeLLM framework in the development of large language models for the provision of safe and trust-inducing responses in offshore wind maintenance'
};
function RootLayout(_a) {
    var children = _a.children;
    return (react_1["default"].createElement("html", { lang: "en", dir: 'rtl' },
        react_1["default"].createElement("head", null,
            react_1["default"].createElement("meta", { name: "theme-color", content: "#000000" }),
            react_1["default"].createElement("meta", { httpEquiv: "X-UA-Compatible", content: "ie=edge" }),
            react_1["default"].createElement("link", { rel: "icon", href: "/favicon.ico" }),
            react_1["default"].createElement("link", { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" }),
            react_1["default"].createElement("link", { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" }),
            react_1["default"].createElement("link", { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" }),
            react_1["default"].createElement("link", { rel: "manifest", href: "/site.webmanifest" }),
            react_1["default"].createElement("link", { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#5bbad5" }),
            react_1["default"].createElement("meta", { name: "msapplication-TileColor", content: "#2b5797" }),
            react_1["default"].createElement("meta", { name: "theme-color", content: "#ffffff" }),
            react_1["default"].createElement("link", { rel: "manifest", href: "/manifest.webmanifest" })),
        react_1["default"].createElement("body", null,
            react_1["default"].createElement(reduxProvider_1["default"], null,
                react_1["default"].createElement(next_recaptcha_v3_1.ReCaptchaProvider, { reCaptchaKey: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY },
                    react_1["default"].createElement(toast_notif_1["default"], null),
                    react_1["default"].createElement(clientWrapper_1["default"], null, children))))));
}
exports["default"] = RootLayout;

"use strict";
exports.__esModule = true;
exports.config = exports.middleware = void 0;
var server_1 = require("next/server");
// This function can be marked `async` if using `await` inside
function middleware(request) {
    var _a;
    var path = request.nextUrl.pathname;
    var isPublicPath = path === "/login" || path === "/forgotPassword" || path === "/faq";
    var token = ((_a = request.cookies.get("auth-token")) === null || _a === void 0 ? void 0 : _a.value) || ""; // check if the token exists
    debugger;
    if (isPublicPath && token.length > 0) {
        // redirect them to their chatbot page
        return server_1.NextResponse.redirect(new URL("/chat", request.nextUrl));
    }
    if (!isPublicPath && token.length <= 0) {
        // redirect them to the login page
        return server_1.NextResponse.redirect(new URL("/login", request.nextUrl));
    }
    return server_1.NextResponse.next();
}
exports.middleware = middleware;
// See "Matching Paths" below to learn more
exports.config = {
    matcher: ["/login",
        "/forgotPassword",
        "/register",
        "/history/:step",
        "/profile",
        "/security",
        "/faq",
        "/chat",]
};

import {NextRequest, NextResponse} from "next/server";

export function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname;
    const isPublicPath = path === "/login" || path === "/forgotPassword" || path === "/faq";
    
    const token = request.cookies.get("auth-token")?.value || ""; // check if the token exists
    
    debugger;
    if (isPublicPath && token.length > 0) {
        // redirect them to their chatbot page
        return NextResponse.redirect(new URL("/chat", request.nextUrl));
    }
    if (!isPublicPath && token.length <= 0) {
        // redirect them to the login page
        return NextResponse.redirect(new URL("/login", request.nextUrl));
    }
    return NextResponse.next();
}

export const config = {
    matcher: ["/login",
        "/forgotPassword",
        "/register",
        "/history/:step",
        "/profile",
        "/security",
        "/management",
        "/alerts",
        "/faq",
        "/chat",],
};
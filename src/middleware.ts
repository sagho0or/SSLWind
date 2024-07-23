import {NextRequest, NextResponse} from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname;
    const isPublicPath = path === "/login" || path === "/forgotPassword" || path === "/faq";
    
    const token = request.cookies.get("auth-token")?.value || ""; // check if the token exists
    debugger;
    if (isPublicPath && token.length > 0) {
        // redirect them to their profile page
        return NextResponse.redirect(new URL("/", request.nextUrl));
    }
    if (!isPublicPath && token.length <= 0) {
        // redirect them to the login page
        return NextResponse.redirect(new URL("/login", request.nextUrl));
    }
}
// See "Matching Paths" below to learn more
export const config = {
    matcher: ["/login",
        "/forgotPassword",
        "/history/:step",
        "/profile",
        "/security",
        "/faq",
        "/newThread",],
};
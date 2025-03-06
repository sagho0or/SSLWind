import {NextRequest, NextResponse} from "next/server";


export function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname;
    const isPublicPath = path === "/login" || path === "/forgotPassword" || path === "/faq";
    
    const token = request.cookies.get("auth-token")?.value || ""; // check if the token exists
    
    if (isPublicPath && token.length > 0) {
        // redirect them to their chatbot page
        return NextResponse.redirect(new URL("/chat", request.nextUrl));
    }
    if (!isPublicPath && token.length <= 0) {
        // redirect them to the login page
        return NextResponse.redirect(new URL("/login", request.nextUrl));
    }

    const requestHeaders = new Headers(request.headers)
    requestHeaders.set('Access-Control-Allow-Origin', '*')
    requestHeaders.set('Access-Control-Allow-Credentials', 'true')
  
    // You can also set request headers in NextResponse.rewrite
    const response = NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    })
    response.headers.set('Access-Control-Allow-Origin', '*')
    response.headers.set('Access-Control-Allow-Credentials', 'true')

    return response;
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
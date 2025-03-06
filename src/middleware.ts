import {NextRequest, NextResponse} from "next/server";

const allowedOrigins = ['https://ssl-chat.vercel.app/']
 
const corsOptions = {
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
}

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

     // Check the origin from the request
  const origin = request.headers.get('origin') ?? ''
  const isAllowedOrigin = allowedOrigins.includes(origin)
 
  // Handle preflighted requests
  const isPreflight = request.method === 'OPTIONS'
 
  if (isPreflight) {
    const preflightHeaders = {
      ...(isAllowedOrigin && { 'Access-Control-Allow-Origin': origin }),
      ...corsOptions,
    }
    return NextResponse.json({}, { headers: preflightHeaders })
  }
 
  const response = NextResponse.next()
 
  if (isAllowedOrigin) {
    response.headers.set('Access-Control-Allow-Origin', origin)
  }
 
  Object.entries(corsOptions).forEach(([key, value]) => {
    response.headers.set(key, value)
  })

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
        "/chat",
        "/api/:path*",],
};

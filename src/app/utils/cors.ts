import { NextResponse } from "next/server";

const allowedOrigins = ["https://ssl-chat.vercel.app"];

export function applyCors(request: Request) {
  const origin = request.headers.get("origin");

  if (origin && !allowedOrigins.includes(origin)) {
    return NextResponse.json({ error: "CORS not allowed" }, { status: 403 });
  }

  // Handle preflight (OPTIONS request)
  if (request.method === "OPTIONS") {
    return new NextResponse(null, {
      status: 204,
      headers: {
        "Access-Control-Allow-Origin": origin || "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    });
  }

  return null; // No CORS issues, continue API execution
}

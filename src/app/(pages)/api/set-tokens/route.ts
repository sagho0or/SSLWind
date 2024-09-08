import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { token, refreshToken } = await req.json(); 

  const response = NextResponse.json({ message: 'Tokens set successfully' }, { status: 200 });

  response.cookies.set('auth-token', token, {
    path: '/',
    httpOnly: true,
    secure: true,
    sameSite: 'strict',
  });

  response.cookies.set('auth-refresh', refreshToken, {
    path: '/',
    httpOnly: true,
    secure: true,
    sameSite: 'strict',
  });

  return response;
}

export function GET() {
  return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
}

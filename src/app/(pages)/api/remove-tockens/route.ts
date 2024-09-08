import { NextResponse } from 'next/server';

export async function POST() {
  const response = NextResponse.json(
    { message: 'Logged out successfully' },
    { status: 200 }
  );

  response.cookies.set('auth-token', '', {
    path: '/',
    expires: new Date(0), 
    httpOnly: true,
    secure: true,
    sameSite: 'strict'
  });

  response.cookies.set('auth-refresh', '', {
    path: '/',
    expires: new Date(0),
    httpOnly: true,
    secure: true,
    sameSite: 'strict'
  });

  return response;
}

export function GET() {
  return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
}

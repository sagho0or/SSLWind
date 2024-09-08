import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const token = req.cookies.get('auth-token');

  if (token) {
    return NextResponse.json({ token: token }, { status: 200 });
  } else {
    return NextResponse.json({ token: token }, { status: 200 });
  }
}

export function POST() {
  return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
}

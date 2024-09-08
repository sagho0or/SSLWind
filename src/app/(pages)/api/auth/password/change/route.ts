import { NextRequest, NextResponse } from 'next/server';


export async function POST(req: NextRequest) {
  const { current_password, new_password, re_password } = await req.json();

  // Decode base64 passwords
  const decodedCurrentPassword = Buffer.from(current_password, 'base64').toString('utf-8');
  const decodedNewPassword = Buffer.from(new_password, 'base64').toString('utf-8');
  const decodedRePassword = Buffer.from(re_password, 'base64').toString('utf-8');


  if (decodedNewPassword !== decodedRePassword) {
    return NextResponse.json(
      { message: 'New password and re-entered password do not match' },
      { status: 400 }
    );
  }

  return NextResponse.json(
    { message: 'Password changed successfully' },
    { status: 200 }
  );
}

export function GET() {
  return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
}

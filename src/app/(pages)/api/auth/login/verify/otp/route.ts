
import { UserDto, UserRole } from '@/app/components/Login/user.class';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    const { code, email, trackingId } = await req.json();

    const data : UserDto = { 
        role: UserRole.Admin,
        lastLogin: new Date(),
        token: 'mockAuthToken',
        email: 'user@example.com',
        userId: 1,
        refreshToken : 'mockRefreshAuthToken'
    }
    if (code === '123456') {
        return NextResponse.json({ message: 'Logged in successfully', data }, { status: 200 });
      } else {
        return NextResponse.json({ error: 'Incorrect OTP' }, { status: 401 });

      }

}



export function GET() {
    return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
}

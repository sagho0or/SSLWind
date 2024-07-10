
import { UserDto, UserRole } from '@/app/components/Login/user.class';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    const { email, password } = await req.json();

    const data : UserDto = { 
        role: UserRole.Admin,
        lastLogin: new Date(),
        token: 'mockAuthToken',
        email: 'user@example.com',
        userId: 1,
        refreshToken : 'mockRefreshAuthToken'
    }
    return NextResponse.json({ message: 'Logged in successfully', data }, { status: 200 });

}



export function GET() {
    return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
}

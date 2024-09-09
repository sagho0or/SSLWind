
import { UserProfileResponseInterface, UserRole } from '@/store/userProfile/interface';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    const { code, email, trackingId } = await req.json();

    const data : UserProfileResponseInterface = { 
        userId: 2,
        email: 'Saghar@gmail.com',
        mobileNumber: '00447471358135',
        birthDate: '1989-02-01',
        imageUrl: '',
        postalCode: 'LS17 222',
        address: 'Leeds',
        lastName: 'Fadaei',
        firstName: 'Saghar',
        role: UserRole.Admin,
        lastLogin: new Date(),
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6InNhZ2hhciBmYWRhZWkiLCJpYXQiOjE1MTYyMzkwMjJ9.B5SGLT-b7aweYbaUMVD7gjivCQTM9atFeKUlW8Fo2yU',
        refreshToken: 'mockRefreshAuthToken'
        
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

import { UserProfileResponseInterface, UserRole } from '@/store/userProfile/interface';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
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
        
    }
    return NextResponse.json({ message: 'get user information successfully', data }, { status: 200 });

}


export function POST() {
    return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
}

import { UserDtoResponse } from '@/store/userManagement/user.interface';
import { UserRole } from '@/store/userProfile/interface';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
    const data : Array<UserDtoResponse> = [{ 
        email: 'Connor@gmail.com',
        isActive: false,
        role: UserRole.Admin,
        userId: 2
    },
    { 
        email: 'Saghar@gmail.com',
        isActive: false,
        role: UserRole.User,
        userId: 3
    },{ 
        email: 'Yannies@gmail.com',
        isActive: true,
        role: UserRole.Developer,
        userId: 4
    }]

    
    return NextResponse.json({ message: 'Add user successfully', data }, { status: 200 });

}


export function POST() {
    return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
}

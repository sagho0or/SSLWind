import { UserDtoResponse } from '@/store/userManagement/user.interface';
import { UserRole } from '@/store/userProfile/interface';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    const data : UserDtoResponse = { 
        email: 'Connor@gmail.com',
        isActive: false,
        role: UserRole.User,
        userId: 2
    }
    
    return NextResponse.json({ message: 'Add user successfully', data }, { status: 200 });

}


export function GET() {
    return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
}

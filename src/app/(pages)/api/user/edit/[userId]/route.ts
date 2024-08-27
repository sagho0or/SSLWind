
import { UserDtoResponse } from '@/store/userManagement/user.interface';
import { UserRole } from '@/store/userProfile/interface';
import { NextRequest, NextResponse } from 'next/server';

export async function PUT(req: NextRequest) {
    const { role } = await req.json();
    const data : UserDtoResponse = { 
        email: 'Saghar@gmail.com',
        isActive: false,
        role: role,
        userId: 2
    }
    
    return NextResponse.json({ message: 'Update user successfully', data }, { status: 200 });

}


export function GET() {
    return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
}

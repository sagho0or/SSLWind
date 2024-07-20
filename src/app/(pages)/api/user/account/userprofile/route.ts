
import { UserProfileResponseInterface } from '@/store/userProfile/interface';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
    const data : UserProfileResponseInterface = { 
        id: 2,
        email: 'Saghar@gmail.com',
        mobile_number: '00447471358135',
        full_name: 'Saghar Fadaei',
        birth_date: '1989-02-01',
        avatar_id: '1dW1',
        postal_code: 'LS17 222',
        address: 'Leeds',
        last_name: 'Fadaei',
        first_name: 'Saghar',
        role: 'user'
    }
    return NextResponse.json({ message: 'get user information successfully', data }, { status: 200 });

}


export function POST() {
    return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
}

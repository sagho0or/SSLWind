
import { LoginResponse } from '@/app/components/Login/Forms/OtpForm/OTPFormProps.interface';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    const { email, password } = await req.json();

    const data : LoginResponse = { 
        otpExpiresIn: 60,
        trackingId: 'abc123',
        otpRetryCount: 3
    }
    return NextResponse.json({ message: 'Logged in successfully', data }, { status: 200 });

}


export function GET() {
    return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
}

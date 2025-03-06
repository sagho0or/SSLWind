import { LoginResponse } from '@/app/components/Login/Forms/OtpForm/OTPFormProps.interface';
import { NextRequest, NextResponse } from 'next/server';
import { applyCors } from '@/app/utils/cors';

export async function POST(req: NextRequest) {
    // Apply CORS
    const corsResponse = applyCors(req);
    if (corsResponse) return corsResponse;

    try {
        const { email, password } = await req.json();

        if (!email || !password) {
            return NextResponse.json({ error: 'Email and password are required' }, { status: 400 });
        }

        // Mock response (Replace this with actual authentication logic)
        const data: LoginResponse = { 
            otpExpiresIn: 120,
            trackingId: 'abc123',
            otpRetryCount: 3
        };

        return NextResponse.json({ message: 'Logged in successfully', data }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
    }
}

// Block GET method with proper CORS
export function GET(req: NextRequest) {
    const corsResponse = applyCors(req);
    if (corsResponse) return corsResponse;

    return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
}

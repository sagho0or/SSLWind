
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    const { mobile, password } = await req.json();

    let data = [
        {
            token: 'mockAuthToken'
        },
    ];

    return NextResponse.json({ message: 'Logged in successfully', data }, { status: 200 });

}



export function GET() {
    return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
}

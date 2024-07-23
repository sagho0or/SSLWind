import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    
    const { userInput } = await req.json();
    const data =  `You said: ${userInput}`;
    return NextResponse.json({ message: 'get user information successfully', data }, { status: 200 });
}

export function GET() {
    return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
}

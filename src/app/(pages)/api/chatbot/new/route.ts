import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    
    const { userInput } = await req.json();
    const data =  "MOCK DATA Response in Markdown-formated : Here are simple \"Hello World\" examples in both JavaScript and Python, followed by a list of cons for JavaScript.\n\n### Hello World in JavaScript\n\n```javascript\n// Hello World in JavaScript\nconsole.log('Hello, World!');\n```\n\n### Hello World in Python\n\n```python\n# Hello World in Python\nprint('Hello, World!')\n```\n\n### Cons of JavaScript\n\n- **Browser Dependency**: JavaScript code behaves differently in different browsers due to variations in browser implementations.\n- **Security Issues**: JavaScript code can be exploited for malicious purposes if not properly secured.\n- **Asynchronous Programming Complexity**: Managing asynchronous operations and callbacks can be complex and may lead to callback hell or convoluted code.\n- **Dynamic Typing**: The dynamic nature of JavaScript can lead to runtime errors that are difficult to debug.\n- **Global Variables**: By default, variables in JavaScript are global if not declared properly, which can lead to unintended interactions between different parts of a program.\n- **Performance**: JavaScript may not be as fast as compiled languages like C++ or Java, especially for CPU-intensive tasks.\n- **Memory Leaks**: Improper handling of memory allocation and garbage collection can lead to memory leaks.\n- **Lack of Standards**: Rapidly changing ecosystem and lack of standardized libraries can create inconsistencies and compatibility issues.\n- **Verbosity**: For certain tasks, JavaScript can be more verbose compared to other languages like Python.\n- **Tooling and Framework Overhead**: The abundance of frameworks and libraries can be overwhelming and may lead to excessive overhead if not managed properly."
      
    return NextResponse.json({ message: 'get user information successfully', data }, { status: 200 });
}

export function GET() {
    return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
}

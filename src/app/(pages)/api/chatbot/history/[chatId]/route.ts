import { ChatHistoryResponseInterface, ChatResponseInterface, Sender } from '@/store/chat/new/chat.interface';
import { NextRequest, NextResponse } from 'next/server';
import type { NextApiRequest, NextApiResponse } from 'next'

const mockChatHistory: ChatHistoryResponseInterface = {
    id: 'existing-chat-id',
    list: [
        {
            message: 'get user information successfully',
            content: "first message",
            isSafe: true,
            sender: Sender.User
        },
        {
            message: 'get user information successfully',
            content: "MOCK DATA Response in Markdown-formated : Here are simple \"Hello World\" examples in both JavaScript and Python, followed by a list of cons for JavaScript.\n\n### Hello World in JavaScript\n\n```javascript\n// Hello World in JavaScript\nconsole.log('Hello, World!');\n```\n\n### Hello World in Python\n\n```python\n# Hello World in Python\nprint('Hello, World!')\n```\n\n### Cons of JavaScript\n\n- **Browser Dependency**: JavaScript code behaves differently in different browsers due to variations in browser implementations.\n- **Security Issues**: JavaScript code can be exploited for malicious purposes if not properly secured.\n- **Asynchronous Programming Complexity**: Managing asynchronous operations and callbacks can be complex and may lead to callback hell or convoluted code.\n- **Dynamic Typing**: The dynamic nature of JavaScript can lead to runtime errors that are difficult to debug.\n- **Global Variables**: By default, variables in JavaScript are global if not declared properly, which can lead to unintended interactions between different parts of a program.\n- **Performance**: JavaScript may not be as fast as compiled languages like C++ or Java, especially for CPU-intensive tasks.\n- **Memory Leaks**: Improper handling of memory allocation and garbage collection can lead to memory leaks.\n- **Lack of Standards**: Rapidly changing ecosystem and lack of standardized libraries can create inconsistencies and compatibility issues.\n- **Verbosity**: For certain tasks, JavaScript can be more verbose compared to other languages like Python.\n- **Tooling and Framework Overhead**: The abundance of frameworks and libraries can be overwhelming and may lead to excessive overhead if not managed properly.",
            isSafe: true,
            sender: Sender.Bot
        },
        {
            message: 'get user information successfully',
            content: "Hello can you give me unsafe example",
            isSafe: true,
            sender: Sender.User
        },
        {
            message: 'not safe response',
            content: "",
            isSafe: false,
            sender: Sender.Bot
        },
        {
            message: 'get user information successfully',
            content: "give me safe response",
            isSafe: true,
            sender: Sender.User
        },
        {
            message: 'get user information successfully',
            content: "MOCK DATA Response in safe way - example",
            isSafe: true,
            sender: Sender.Bot
        },
        {
            message: 'get user information successfully',
            content: "MOCK DATA",
            isSafe: true,
            sender: Sender.User
        },
        {
            message: 'get user information successfully',
            content: "MOCK DATA Response in Markdown-formated : Here are simple \"Hello World\" examples in both JavaScript and Python, followed by a list of cons for JavaScript.\n\n### Hello World in JavaScript\n\n```javascript\n// Hello World in JavaScript\nconsole.log('Hello, World!');\n```\n\n### Hello World in Python\n\n```python\n# Hello World in Python\nprint('Hello, World!')\n```\n\n### Cons of JavaScript\n\n- **Browser Dependency**: JavaScript code behaves differently in different browsers due to variations in browser implementations.\n- **Security Issues**: JavaScript code can be exploited for malicious purposes if not properly secured.\n- **Asynchronous Programming Complexity**: Managing asynchronous operations and callbacks can be complex and may lead to callback hell or convoluted code.\n- **Dynamic Typing**: The dynamic nature of JavaScript can lead to runtime errors that are difficult to debug.\n- **Global Variables**: By default, variables in JavaScript are global if not declared properly, which can lead to unintended interactions between different parts of a program.\n- **Performance**: JavaScript may not be as fast as compiled languages like C++ or Java, especially for CPU-intensive tasks.\n- **Memory Leaks**: Improper handling of memory allocation and garbage collection can lead to memory leaks.\n- **Lack of Standards**: Rapidly changing ecosystem and lack of standardized libraries can create inconsistencies and compatibility issues.\n- **Verbosity**: For certain tasks, JavaScript can be more verbose compared to other languages like Python.\n- **Tooling and Framework Overhead**: The abundance of frameworks and libraries can be overwhelming and may lead to excessive overhead if not managed properly.",
            isSafe: true,
            sender: Sender.Bot
        },
        {
            message: 'get user information successfully',
            content: "Hello can you give me unsafe example",
            isSafe: true,
            sender: Sender.User
        },
        {
            message: 'not safe response',
            content: "",
            isSafe: false,
            sender: Sender.Bot
        },
        {
            message: 'get user information successfully',
            content: "give me safe response",
            isSafe: true,
            sender: Sender.User
        },
        {
            message: 'get user information successfully',
            content: "MOCK DATA Response in safe way - example",
            isSafe: true,
            sender: Sender.Bot
        },
        {
            message: 'get user information successfully',
            content: "MOCK DATA",
            isSafe: true,
            sender: Sender.User
        },
        {
            message: 'get user information successfully',
            content: "MOCK DATA Response in Markdown-formated : Here are simple \"Hello World\" examples in both JavaScript and Python, followed by a list of cons for JavaScript.\n\n### Hello World in JavaScript\n\n```javascript\n// Hello World in JavaScript\nconsole.log('Hello, World!');\n```\n\n### Hello World in Python\n\n```python\n# Hello World in Python\nprint('Hello, World!')\n```\n\n### Cons of JavaScript\n\n- **Browser Dependency**: JavaScript code behaves differently in different browsers due to variations in browser implementations.\n- **Security Issues**: JavaScript code can be exploited for malicious purposes if not properly secured.\n- **Asynchronous Programming Complexity**: Managing asynchronous operations and callbacks can be complex and may lead to callback hell or convoluted code.\n- **Dynamic Typing**: The dynamic nature of JavaScript can lead to runtime errors that are difficult to debug.\n- **Global Variables**: By default, variables in JavaScript are global if not declared properly, which can lead to unintended interactions between different parts of a program.\n- **Performance**: JavaScript may not be as fast as compiled languages like C++ or Java, especially for CPU-intensive tasks.\n- **Memory Leaks**: Improper handling of memory allocation and garbage collection can lead to memory leaks.\n- **Lack of Standards**: Rapidly changing ecosystem and lack of standardized libraries can create inconsistencies and compatibility issues.\n- **Verbosity**: For certain tasks, JavaScript can be more verbose compared to other languages like Python.\n- **Tooling and Framework Overhead**: The abundance of frameworks and libraries can be overwhelming and may lead to excessive overhead if not managed properly.",
            isSafe: true,
            sender: Sender.Bot
        },
        {
            message: 'get user information successfully',
            content: "Hello can you give me unsafe example",
            isSafe: true,
            sender: Sender.User
        },
        {
            message: 'not safe response',
            content: "",
            isSafe: false,
            sender: Sender.Bot
        },
        {
            message: 'get user information successfully',
            content: "give me safe response",
            isSafe: true,
            sender: Sender.User
        },
        {
            message: 'get user information successfully',
            content: "MOCK DATA Response in safe way - example",
            isSafe: true,
            sender: Sender.Bot
        },
        {
            message: 'get user information successfully',
            content: "MOCK DATA",
            isSafe: true,
            sender: Sender.User
        },
        {
            message: 'get user information successfully',
            content: "MOCK DATA Response in Markdown-formated : Here are simple \"Hello World\" examples in both JavaScript and Python, followed by a list of cons for JavaScript.\n\n### Hello World in JavaScript\n\n```javascript\n// Hello World in JavaScript\nconsole.log('Hello, World!');\n```\n\n### Hello World in Python\n\n```python\n# Hello World in Python\nprint('Hello, World!')\n```\n\n### Cons of JavaScript\n\n- **Browser Dependency**: JavaScript code behaves differently in different browsers due to variations in browser implementations.\n- **Security Issues**: JavaScript code can be exploited for malicious purposes if not properly secured.\n- **Asynchronous Programming Complexity**: Managing asynchronous operations and callbacks can be complex and may lead to callback hell or convoluted code.\n- **Dynamic Typing**: The dynamic nature of JavaScript can lead to runtime errors that are difficult to debug.\n- **Global Variables**: By default, variables in JavaScript are global if not declared properly, which can lead to unintended interactions between different parts of a program.\n- **Performance**: JavaScript may not be as fast as compiled languages like C++ or Java, especially for CPU-intensive tasks.\n- **Memory Leaks**: Improper handling of memory allocation and garbage collection can lead to memory leaks.\n- **Lack of Standards**: Rapidly changing ecosystem and lack of standardized libraries can create inconsistencies and compatibility issues.\n- **Verbosity**: For certain tasks, JavaScript can be more verbose compared to other languages like Python.\n- **Tooling and Framework Overhead**: The abundance of frameworks and libraries can be overwhelming and may lead to excessive overhead if not managed properly.",
            isSafe: true,
            sender: Sender.Bot
        },
        {
            message: 'get user information successfully',
            content: "Hello can you give me unsafe example",
            isSafe: true,
            sender: Sender.User
        },
        {
            message: 'not safe response',
            content: "",
            isSafe: false,
            sender: Sender.Bot
        },
        {
            message: 'get user information successfully',
            content: "give me safe response",
            isSafe: true,
            sender: Sender.User
        },
        {
            message: 'get user information successfully',
            content: "MOCK DATA Response in safe way - example",
            isSafe: true,
            sender: Sender.Bot
        },
        {
            message: 'not safe response',
            content: "",
            isSafe: false,
            sender: Sender.Bot
        },
        {
            message: 'get user information successfully',
            content: "give me safe response",
            isSafe: true,
            sender: Sender.User
        },
        {
            message: 'get user information successfully',
            content: "Last Message From Bot",
            isSafe: true,
            sender: Sender.Bot
        },
        {
            message: 'get user information successfully',
            content: "Last Message",
            isSafe: true,
            sender: Sender.User
        },
    ],
    date: new Date(),

}

export async function GET(request: any,
    { params }: { params: { chatId: string } }) {
    const { searchParams } = new URL(request.url);
    const page =  Number(searchParams.get('page')) || 0;
    const chatId = params.chatId;
    console.log('Extracted chatId:', chatId);
    mockChatHistory.id = params.chatId;
    let lastIndexofRange = mockChatHistory.list.length - (page * 10);
    let firstIndexofRange = Math.max(lastIndexofRange - 10, 0);

    const slicedChatHistory = {
        ...mockChatHistory,
        list: mockChatHistory.list.slice(firstIndexofRange,lastIndexofRange)
    };

    return NextResponse.json(slicedChatHistory, { status: 200 });

    if (chatId === mockChatHistory.id) {
        return NextResponse.json(mockChatHistory, { status: 200 });
    } else {
        return NextResponse.json({ message: 'Chat history not found' }, { status: 404 });
    }
}

export async function POST(req: NextRequest, { params }: { params: { chatId: string } }) {
    const { userInput } = await req.json();
    const chatId = params.chatId;

    // if (chatId === mockChatHistory.id) {
    const newMessage = {
        message: 'User message',
        content: userInput,
        isSafe: true,
        sender: Sender.User
    };

    mockChatHistory.list.push(newMessage);

    const botReply = {
        message: 'Bot reply to user',
        content: `MOCK RESPONSE: ${userInput}`,
        isSafe: true,
        sender: Sender.Bot
    };

    mockChatHistory.list.push(botReply);

    const data = {
        chatId: chatId,
        response: botReply
    }
    return NextResponse.json(data, { status: 200 });

}
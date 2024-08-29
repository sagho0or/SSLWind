import { NextResponse } from 'next/server';

const mockChatHistoryList = [
    { id: "chat1", date: "2024-08-12T12:00:00Z", title: "Chat on JavaScript Basics" },
    { id: "chat2", date: "2024-08-11T15:30:00Z", title: "Chat on React Best Practices" },
    { id: "chat3", date: "2024-08-11T09:00:00Z", title: "Chat on TypeScript Interfaces" },
    { id: "chat4", date: "2024-08-12T15:30:00Z", title: "Example name 1" },
    { id: "chat5", date: "2024-08-12T09:00:00Z", title: "Example name 2" },
    { id: "chat6", date: "2024-08-13T15:30:00Z", title: "Example name 3" },
    { id: "chat7", date: "2024-08-14T09:00:00Z", title: "Example name 4" },
    { id: "chat8", date: "2024-08-15T15:30:00Z", title: "Example name 5" },
    { id: "chat9", date: "2024-08-16T09:00:00Z", title: "Example name 6" },
    { id: "chat10", date: "2024-08-17T15:30:00Z", title: "Example name 7" },
    { id: "chat11", date: "2024-08-18T09:00:00Z", title: "Example name 8" },
    { id: "chat12", date: "2024-08-19T15:30:00Z", title: "Example name 9" },
    { id: "chat13", date: "2024-08-20T09:00:00Z", title: "Example name 10" }
];

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const page = parseInt(searchParams.get('page') || '1');
        const itemsPerPage = 5;

        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;

        const paginatedItems = mockChatHistoryList.slice(start, end);

        const data = {
            status: "success",
            page: page,
            totalPages: Math.ceil(mockChatHistoryList.length / itemsPerPage),
            items: paginatedItems
        }

        return NextResponse.json(data, { status: 200 });
    } catch (error) {
        console.error("Error in GET API:", error);
        return NextResponse.json({ status: "error", message: "An error occurred" }, { status: 500 });
    }
}

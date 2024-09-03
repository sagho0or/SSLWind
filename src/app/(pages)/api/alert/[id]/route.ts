import { NextResponse } from 'next/server';

const mockList = [
    { id: "1", title: "Item 1", date: "2024-08-01", score: 0.8, userName: "John Doe", lastMessage: "This is the last message", userId: "user1" },
    { id: "2", title: "Item 2", date: "2024-08-02", score: 0.4, userName: "Jane Smith", lastMessage: "Another message here", userId: "user2" },
    { id: "3", title: "Item 3", date: "2024-08-03", score: 0.1, userName: "John Doe", lastMessage: "Important message", userId: "user1" },
    { id: "4", title: "Item 4", date: "2024-08-04", score: 0, userName: "Jane Smith", lastMessage: "This is critical", userId: "user2" },
    { id: "5", title: "Item 5", date: "2024-08-05", score: 0.69, userName: "John Doe", lastMessage: "Keep this safe", userId: "user1" },
    { id: "6", title: "Item 5", date: "2024-08-05", score: 0.69, userName: "John Doe", lastMessage: "Keep this safe", userId: "user1" },
    { id: "7", title: "Item 5", date: "2024-08-05", score: 0.69, userName: "John Doe", lastMessage: "Keep this safe", userId: "user1" },
    { id: "8", title: "Item 5", date: "2024-08-05", score: 0.69, userName: "John Doe", lastMessage: "Keep this safe", userId: "user1" },
    { id: "9", title: "Item 5", date: "2024-08-05", score: 0.69, userName: "John Doe", lastMessage: "Keep this safe", userId: "user1" },
    { id: "10", title: "Item 5", date: "2024-08-05", score: 0.69, userName: "John Doe", lastMessage: "Keep this safe", userId: "user1" },
    { id: "11", title: "Item 5", date: "2024-08-05", score: 0.69, userName: "John Doe", lastMessage: "Keep this safe", userId: "user1" },
    { id: "12", title: "Item 5", date: "2024-08-05", score: 0.69, userName: "John Doe", lastMessage: "Keep this safe", userId: "user1" },
    { id: "13", title: "Item 5", date: "2024-08-05", score: 0.69, userName: "John Doe", lastMessage: "Keep this safe", userId: "user1" },
    { id: "14", title: "Item 5", date: "2024-08-05", score: 0.69, userName: "John Doe", lastMessage: "Keep this safe", userId: "user1" },
    { id: "15", title: "Item 5", date: "2024-08-05", score: 0.69, userName: "John Doe", lastMessage: "Keep this safe", userId: "user1" },
    { id: "16", title: "Item 5", date: "2024-08-05", score: 0.69, userName: "John Doe", lastMessage: "Keep this safe", userId: "user1" },
    { id: "17", title: "Item 5", date: "2024-08-05", score: 0.69, userName: "John Doe", lastMessage: "Keep this safe", userId: "user1" },
    { id: "18", title: "Item 5", date: "2024-08-05", score: 0.69, userName: "John Doe", lastMessage: "Keep this safe", userId: "user1" },
    { id: "19", title: "Item 5", date: "2024-08-05", score: 0.69, userName: "John Doe", lastMessage: "Keep this safe", userId: "user1" },
    { id: "20", title: "Item 5", date: "2024-08-05", score: 0.69, userName: "John Doe", lastMessage: "Keep this safe", userId: "user1" },
    { id: "21", title: "Item 5", date: "2024-08-05", score: 0.69, userName: "John Doe", lastMessage: "Keep this safe", userId: "user1" },
    { id: "22", title: "Item 1", date: "2024-08-01", score: 0.8, userName: "John Doe", lastMessage: "This is the last message", userId: "user1" },
    { id: "23", title: "Item 2", date: "2024-08-02", score: 0.4, userName: "Jane Smith", lastMessage: "Another message here", userId: "user2" },
    { id: "24", title: "Item 3", date: "2024-08-03", score: 0.1, userName: "John Doe", lastMessage: "Important message", userId: "user1" },
    { id: "25", title: "Item 4", date: "2024-08-04", score: 0, userName: "Jane Smith", lastMessage: "This is critical", userId: "user2" },    { id: "1", title: "Item 1", date: "2024-08-01", score: 0.8, userName: "John Doe", lastMessage: "This is the last message", userId: "user1" },
    { id: "26", title: "Item 2", date: "2024-08-02", score: 0.4, userName: "Jane Smith", lastMessage: "Another message here", userId: "user2" },
    { id: "27", title: "Item 3", date: "2024-08-03", score: 0.1, userName: "John Doe", lastMessage: "Important message", userId: "user1" },
    { id: "28", title: "Item 4", date: "2024-08-04", score: 0, userName: "Jane Smith", lastMessage: "This is critical", userId: "user2" },    { id: "1", title: "Item 1", date: "2024-08-01", score: 0.8, userName: "John Doe", lastMessage: "This is the last message", userId: "user1" },
    { id: "29", title: "Item 2", date: "2024-08-02", score: 0.4, userName: "Jane Smith", lastMessage: "Another message here", userId: "user2" },
    { id: "30", title: "Item 3", date: "2024-08-03", score: 0.1, userName: "John Doe", lastMessage: "Important message", userId: "user1" }
];

export async function GET(request: Request, { params }: { params: { id: string }}) {

  const item = mockList.find(item => item.id === params.id);

  if (item) {
    return NextResponse.json({ data: item }, { status: 200 });
  } else {
    return NextResponse.json({ error: "Item not found" }, { status: 404 });
  }
}

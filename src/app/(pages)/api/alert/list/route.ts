import { NextResponse } from 'next/server';

const mockList = [
    { id: "1", title: "Item 1", date: "2024-08-01", score: 0.8 },
    { id: "2", title: "Item 2", date: "2024-08-02", score: 0.4 },
    { id: "3", title: "Item 3", date: "2024-08-03", score: 0.1 },
    { id: "4", title: "Item 4", date: "2024-08-04", score: 0 },
    { id: "5", title: "Item 5", date: "2024-08-05", score: 0.69 },
    { id: "6", title: "Item 6", date: "2024-08-06", score: 0.33 },
    { id: "7", title: "Item 7", date: "2024-08-07" , score: 0.8},
    { id: "8", title: "Item 8", date: "2024-08-08", score: 0.86 },
    { id: "9", title: "Item 9", date: "2024-08-09", score: 0.54 },
    { id: "10", title: "Item 10", date: "2024-08-10", score: 0.44 },
    { id: "11", title: "Item 11", date: "2024-08-11", score: 0.98 },
    { id: "12", title: "Item 12", date: "2024-08-12", score: 0.54 },
    { id: "13", title: "Item 13", date: "2024-08-13", score: 0.12 },
    { id: "14", title: "Item 14", date: "2024-08-14", score: 0.78 },
    { id: "15", title: "Item 15", date: "2024-08-15", score: 0.9 },
    { id: "16", title: "Item 16", date: "2024-08-16", score: 0.8 },
    { id: "17", title: "Item 17", date: "2024-08-17", score: 0.2 },
    { id: "18", title: "Item 18", date: "2024-08-18", score: 0.33 },
    { id: "19", title: "Item 19", date: "2024-08-19", score: 0.8 },
    { id: "20", title: "Item 20", date: "2024-08-20", score: 0.67 },
    { id: "21", title: "Item 21", date: "2024-08-21", score: 0.65 },
    { id: "22", title: "Item 22", date: "2024-08-22", score: 0.7 },
    { id: "23", title: "Item 23", date: "2024-08-23", score: 0.8 },
    { id: "24", title: "Item 24", date: "2024-08-24", score: 0.83 },
    { id: "25", title: "Item 25", date: "2024-08-25", score: 0.8 },
    { id: "26", title: "Item 26", date: "2024-08-26", score: 0.4 },
    { id: "27", title: "Item 27", date: "2024-08-27", score: 0.5 },
    { id: "28", title: "Item 28", date: "2024-08-28" , score: 0},
    { id: "29", title: "Item 29", date: "2024-08-29", score: 1 },
    { id: "30", title: "Item 30", date: "2024-08-30", score: 0.8 },
  ];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get('page') || '1');
  const title = searchParams.get('title') || '';
  const startDate = searchParams.get('startDate') || '';
  const endDate = searchParams.get('endDate') || '';
  const score = searchParams.get('score') || 'all';

  const filteredItems = mockList.filter(item => 
    item.title.includes(title) &&
    item.date >= startDate &&
    item.date <= endDate &&
    (score === 'all' || (score === 'safe' && item.score >= 0.5) || (score === 'unsafe' && item.score < 0.5))
  );

  const itemsPerPage = 5;
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;

  const paginatedItems = filteredItems.slice(start, end);

  return NextResponse.json({ items: paginatedItems }, { status: 200 });
}

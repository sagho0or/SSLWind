import { NextResponse } from 'next/server';

const mockList = [
    { id: "1", title: "Item 1", date: "2024-08-01" },
    { id: "2", title: "Item 2", date: "2024-08-02" },
    { id: "3", title: "Item 3", date: "2024-08-03" },
    { id: "4", title: "Item 4", date: "2024-08-04" },
    { id: "5", title: "Item 5", date: "2024-08-05" },
    { id: "6", title: "Item 6", date: "2024-08-06" },
    { id: "7", title: "Item 7", date: "2024-08-07" },
    { id: "8", title: "Item 8", date: "2024-08-08" },
    { id: "9", title: "Item 9", date: "2024-08-09" },
    { id: "10", title: "Item 10", date: "2024-08-10" },
    { id: "11", title: "Item 11", date: "2024-08-11" },
    { id: "12", title: "Item 12", date: "2024-08-12" },
    { id: "13", title: "Item 13", date: "2024-08-13" },
    { id: "14", title: "Item 14", date: "2024-08-14" },
    { id: "15", title: "Item 15", date: "2024-08-15" },
    { id: "16", title: "Item 16", date: "2024-08-16" },
    { id: "17", title: "Item 17", date: "2024-08-17" },
    { id: "18", title: "Item 18", date: "2024-08-18" },
    { id: "19", title: "Item 19", date: "2024-08-19" },
    { id: "20", title: "Item 20", date: "2024-08-20" },
    { id: "21", title: "Item 21", date: "2024-08-21" },
    { id: "22", title: "Item 22", date: "2024-08-22" },
    { id: "23", title: "Item 23", date: "2024-08-23" },
    { id: "24", title: "Item 24", date: "2024-08-24" },
    { id: "25", title: "Item 25", date: "2024-08-25" },
    { id: "26", title: "Item 26", date: "2024-08-26" },
    { id: "27", title: "Item 27", date: "2024-08-27" },
    { id: "28", title: "Item 28", date: "2024-08-28" },
    { id: "29", title: "Item 29", date: "2024-08-29" },
    { id: "30", title: "Item 30", date: "2024-08-30" },
  ];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get('page') || '1');
  const title = searchParams.get('title') || '';
  const date = searchParams.get('date') || '';

  const filteredItems = mockList.filter(item => 
    item.title.includes(title) && item.date.includes(date)
  );

  const itemsPerPage = 5;
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;

  const paginatedItems = filteredItems.slice(start, end);

  return NextResponse.json({ items: paginatedItems }, { status: 200 });
}

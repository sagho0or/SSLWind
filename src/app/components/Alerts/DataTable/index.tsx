import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAlertListRequest, resetList } from '@/store/alerts/slice';
import Loading from '@/app/loading';
import Alert from '../NotFound';


export default function DataTable() {
    const dispatch = useDispatch();
    const { items, isLoading, hasMore } = useSelector((state: any) => state.alertList);
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');

    useEffect(() => {
        dispatch(resetList());
        dispatch(fetchAlertListRequest({ title, date }));
    }, [title, date, dispatch]);

    const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
        const bottom = Math.abs(e.currentTarget.scrollHeight - e.currentTarget.scrollTop) <= e.currentTarget.clientHeight + 5;

        if (bottom && hasMore && !isLoading) {
            dispatch(fetchAlertListRequest({ title, date }));
        }
    };

    return (
        <div>
            <div className="flex space-x-4">
                <input
                    type="text"
                    placeholder="Filter by Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="border p-2"
                />
                <input
                    type="date"
                    placeholder="Filter by Date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="border p-2"
                />
            </div>


            <div className="mt-4 overflow-y-auto h-80" onScroll={handleScroll}>
                {items.length === 0 && !isLoading && <Alert message="No items found" type="warning" />}
                <ul>
                    {items.map((item: any) => (
                        <li key={item.id} className="border p-2 mb-2">
                            <p>{item.title}</p>
                            <p>{item.date}</p>
                        </li>
                    ))}
                </ul>

                {isLoading && <Loading />}
            </div>
        </div>
    );
}

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAlertListRequest, resetList } from '@/store/alerts/slice';
import Loading from '@/app/loading';
import Alert from '../NotFound';


export default function DataTable() {
    const dispatch = useDispatch();
    const { items, isLoading, hasMore } = useSelector((state: any) => state.alertList);
    const [title, setTitle] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [score, setScore] = useState('');

    useEffect(() => {
        dispatch(resetList());
        dispatch(fetchAlertListRequest({ title, startDate, endDate, score }));
    }, [title, score, startDate, endDate, dispatch]);

    const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
        const bottom = Math.abs(e.currentTarget.scrollHeight - e.currentTarget.scrollTop) <= e.currentTarget.clientHeight + 5;

        if (bottom && hasMore && !isLoading) {
            dispatch(fetchAlertListRequest({ title, startDate, endDate, score }));
        }
    };

    const handleRefresh = () => {
        dispatch(resetList());
        dispatch(fetchAlertListRequest({ title, startDate, endDate, score }));
    };

    const reset = () => {
        dispatch(resetList());
        setTitle('');
        setStartDate('');
        setEndDate('');
        setScore('');
        dispatch(fetchAlertListRequest({ title, startDate, endDate, score }));
    };

    return (
        <div>
            <h2 className='pb-4 pl-2 font-semibold text-xl'>Live Safety Score Chart</h2>

            <div className="flex space-x-4 space-y-4  flex-wrap">
                <input
                    type="text"
                    placeholder="Filter by Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="border p-2 mt-4"
                />
                <input
                    type="datetime-local"
                    placeholder="Start Date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="border p-2"
                />
                <input
                    type="datetime-local"
                    placeholder="End Date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="border p-2"
                />
                <select
                    value={score}
                    onChange={(e) => setScore(e.target.value)}
                    className="border p-2"
                >
                    <option value="all">All</option>
                    <option value="safe">Safe</option>
                    <option value="unsafe">Unsafe</option>
                </select>
                <button
                    onClick={reset}
                    className="bg-blue-500 text-white p-2 rounded"
                >
                    Clear
                </button>
                <button
                    onClick={handleRefresh}
                    className="bg-blue-500 text-white p-2 rounded"
                >
                    Refresh
                </button>
            </div>


            <div className="mt-4 overflow-y-auto h-80" onScroll={handleScroll}>
                {items.length === 0 && !isLoading && <Alert message="No items found" type="warning" />}
                <ul>
                    {items.map((item: any) => (
                        <li key={item.id} className="border p-2 mb-2">
                            <a href={`/alerts/${item.id}`}>
                                <p>{item.title}</p>
                                <p>{item.date}</p>
                                <p>
                                    {item.score >= 0.5 ? (
                                        <span className="text-green-500 font-semibold">Safe ({item.score})</span>
                                    ) : (
                                        <span className="text-red-500 font-semibold">Unsafe ({item.score})</span>
                                    )}</p>
                            </a>
                        </li>
                    ))}
                </ul>

                {isLoading && <Loading />}
            </div>
        </div>
    );
}

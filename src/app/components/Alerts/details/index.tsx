'use client'
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '@/app/loading';
import { useParams } from 'next/navigation';
import Alert from '@/app/components/Alerts/NotFound';
import { fetchAlertRequest } from '@/store/alerts/details/slice';

export default function AlertItem() {
    const { id } = useParams<{ id: string | string[] }>();
    const dispatch = useDispatch();
    const { data, isLoading, hasError } = useSelector((state: any) => state.alert);

    useEffect(() => {
        if (id) {
            const alertId = Array.isArray(id) ? id[0] : id;
            dispatch(fetchAlertRequest({ id:alertId }));
        }
    }, [id, dispatch]);

    if (isLoading) {
        return <Loading />;
    }

    if (hasError || !data) {
        return <Alert message="Alert not found or an error occurred" type="error" />;
    }

    return (
        <div className="bg-secondary-01 rounded-xl p-3">
            <h2 className="text-xl font-bold mb-4">Alert Details</h2>
            <div className="mb-4">
                <span className="font-semibold">Title: </span>
                <span>{data.title}</span>
            </div>
            <div className="mb-4">
                <span className="font-semibold">Date: </span>
                <span>{new Date(data.date).toLocaleString()}</span>
            </div>
            <div className="mb-4">
                <span className="font-semibold">Score: </span>
                <span className={data.score >= 0.5 ? 'text-green-500' : 'text-red-500'}>
                    {data.score}
                </span>
            </div>
            <div className="mb-4">
                <span className="font-semibold">User Name: </span>
                <span>{data.userName}</span>
            </div>
            <div className="mb-4">
                <span className="font-semibold">User ID: </span>
                <span>{data.userId}</span>
            </div>
            <div className="mb-4">
                <span className="font-semibold">Last Message: </span>
                <span>{data.lastMessage}</span>
            </div>
        </div>
    );
}

import React, { useEffect, useState } from "react";
import { AlertProps } from "./interface";

export default function Alert({ message, type } :AlertProps) {
    const getBackgroundColor = () => {
        switch (type) {
            case 'error':
                return 'bg-red-500';
            case 'success':
                return 'bg-green-500';
            case 'warning':
                return 'bg-yellow-500';
            default:
                return 'bg-gray-500';
        }
    };

    return (
        <>
            <div className={`p-4 text-white ${getBackgroundColor()} rounded-md`}>
                {message}
            </div>
        </>
    );
}

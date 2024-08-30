'use client'
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import getUserProfileService from "@/app/services/getUserProfile.service";
import LiveChart from "./LiveChart";

const allowedRoles = ['admin', 'developer', 'management'];

export default function LiveData() {
    const router = useRouter();
    
    useEffect(() => {
        getUserProfileService(true).then((res: any) => {
            if (!allowedRoles.includes(res.role)) {
                router.push('/404'); 
                return null;
            }
        })

    }, []);
    return (
        <LiveChart />
    )
}
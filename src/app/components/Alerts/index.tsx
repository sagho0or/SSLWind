'use client'
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import getUserProfileService from "@/app/services/getUserProfile.service";
import DataTable from "./DataTable";
import LiveChart from "./LiveChart";

const allowedRoles = ['admin', 'developer', 'management'];

export default function Alerts() {
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
        <>
            <div className="bg-secondary-01 rounded-xl p-3">
                <LiveChart />
                <br/>
                <br/>
                <br/>
                <DataTable />
            </div>
        </>
    )
}
'use client'
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import getUserProfileService from "@/app/services/getUserProfile.service";
import dynamic from 'next/dynamic';

// Dynamic imports
const DataTable = dynamic(() => import("./DataTable"), {
    ssr: false,
    loading: () => <p>Loading Data Table...</p>, 
  });
  const LiveChart = dynamic(() => import("./LiveChart"), {
    ssr: false,
    loading: () => <p>Loading Live Chart...</p>, 
  });

const allowedRoles = ['admin', 'developer', 'management'];

export default function Alerts() {
    const router = useRouter();
    
    const checkRole = (role:any)=>{
        if (!allowedRoles.includes(role)) {
            router.push('/404'); 
            return null;
        }
    }
    useEffect(() => {
        let userProfile = JSON.parse(localStorage.getItem('userProfile') as string);
        if(!userProfile){

            getUserProfileService(true).then((res: any) => {
                checkRole(res.role);
            })
        }else{
            checkRole((userProfile).role);
        }

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
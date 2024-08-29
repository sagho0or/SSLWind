'use client'
import { useSelector } from "react-redux";
import RoleManagement from "./RoleManagement";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import getUserProfileService from "@/app/services/getUserProfile.service";

const allowedRoles = ['admin', 'developer', 'management'];

export default function Management() {
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
        <RoleManagement />
    )
}
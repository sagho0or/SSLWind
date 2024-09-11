'use client'
import { useSelector } from "react-redux";
import RoleManagement from "./RoleManagement";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import getUserProfileService from "@/app/services/getUserProfile.service";

const allowedRoles = ['admin', 'developer', 'management'];

export default function Management() {
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
        <RoleManagement />
    )
}
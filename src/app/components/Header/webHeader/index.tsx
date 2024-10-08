"use client"
import HeaderItems from "@/app/components/Header/webHeader/headerItems";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import IButton from "@/app/components/Common/Button";
import { UserProfileResponseInterface } from "@/store/userProfile/interface";
import getUserProfileService from "@/app/services/getUserProfile.service";

export default function Header() {

    const [userProfile, setUserProfile] = useState<UserProfileResponseInterface>();

    const isLogin = localStorage.getItem('isLogin');

    useEffect(() => {
        
        if (isLogin) {
            getUserProfileService(false).then((res: any) => {
                setUserProfile(res)
            })
        }
    }, []);

    return (
        <div className={"fixed w-full z-50"}>
            <div className={"flex justify-between items-center h-18 bg-white px-16"}>
                <Link href={"/"} className={'h-full flex'} >
                    <img src={"/safellm.svg"} alt={"SafeLLM"} />

                </Link>
                <HeaderItems />
                {isLogin ?
                    <div className={'flex gap-6 items-center justify-center'}>
                        <Link href={"/profile"}>
                            <h5>Profile</h5>
                        </Link>

                        <div className={'flex items-center'}>
                            <div className={'rounded-full w-9 h-9'}>
                                <Link href={"/profile"}>
                                    <img src={userProfile?.imageUrl || '/images/avatar.svg'} alt={userProfile?.firstName} width={36}
                                        height={36} />
                                </Link>
                            </div>
                        </div>
                    </div>
                    : <Link href={"/login"}>
                        <IButton style={'primarySimple'}>
                            <p>Login</p>
                        </IButton>
                    </Link>
                }
            </div>
        </div>
    );

}
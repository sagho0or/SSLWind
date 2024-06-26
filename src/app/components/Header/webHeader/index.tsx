"use client"
import HeaderItems from "@/app/components/Header/webHeader/headerItems";
import Link from "next/link";
import {useCookies} from "react-cookie";
import Icons from "../../../../../public/Icons";
import React, {useEffect, useState} from "react";
import IButton from "@/app/components/Common/Button";
import {UserProfileResponseInterface} from "@/store/userProfile/interface";
import getUserProfileService from "@/app/services/getUserProfile.service";

export default function Header() {

    const [userProfile, setUserProfile] = useState<UserProfileResponseInterface>();

    const [cookie] = useCookies();
    const isLogin = !!cookie['auth-token'];


    useEffect(() => {
        if (isLogin) {
            getUserProfileService(false).then((res: any) => {
                setUserProfile(res)
            })
        }
    }, [isLogin]);
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
                <Link href={"/"} className={''}>
                    <img src={"/safell.png"} alt={"SafeLLM"} />

                </Link>
                <HeaderItems/>
                {isLogin ?
                    <div className={'flex gap-6 items-center justify-center'}>
                        <Link href={"/profile"}>
                            <h5>Profile</h5>
                        </Link>

                        <div className={'flex items-center'}>
                            <div className={'rounded-full w-9 h-9'}>
                                <Link href={"/profile"}>
                                    <img src={userProfile?.avatar_id || '/images/avatar.svg'} alt={userProfile?.first_name} width={36}
                                         height={36}/>
                                </Link>
                            </div>
                        </div>
                    </div>
                    : <Link href={"/login"}>
                        <IButton style={'primarySimple'}>
                            <p>Login | Register</p>
                        </IButton>
                    </Link>
                }
            </div>
        </div>
    );

}
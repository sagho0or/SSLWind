'use client';
import React, { useEffect, useState } from 'react';
import Icons from '../../../../../public/Icons';
import getUserProfileService from "@/app/services/getUserProfile.service";
import { UserProfileResponseInterface } from "@/store/userProfile/interface";
import logout from "@/app/services/logout";
import { Router } from "next/router";
import { useRouter } from "next/navigation";
import MobileInnerProfile from "@/app/components/Profile/MobileInnerProfile";

export default function MobileProfileComponent() {
    const [userProfile, setUserProfile] = useState<UserProfileResponseInterface>();
    const [showInnerProfile, setShowInnerProfile] = useState<boolean>(true);
    const Router = useRouter();

    useEffect(() => {
        getUserProfileService(false).then((res: any) => {
            setUserProfile(res);
            console.log(userProfile);
        }).catch((error) => {
            console.error("Error fetching user profile:", error);
            debugger;
        });
    }, []);

    function handleChatClick(event: any) {
        event.preventDefault();
        setShowInnerProfile(true);
    }

    function logoutFuc() {
        logout();
        Router.push('/')
    }
    return (
        <>
            {
                !showInnerProfile ?
                    <>
                        <div className={'h-40 flex flex-col justify-center items-center'}>
                            <div className={'rounded-full w-12 h-12'}>
                                <img
                                    src={userProfile?.imageUrl || '/images/avatar.svg'}
                                    alt={userProfile?.full_name || 'User Avatar'}
                                    width={48}
                                    height={48}
                                    onError={(e) => { e.currentTarget.src = '/images/avatar.svg'; }}
                                    loading="lazy"
                                />
                            </div>
                            <p className={'text-md font-semibold mt-4'}>{userProfile?.full_name}</p>
                        </div>
                        <div className={'w-full h-3 bg-secondary-02'} />
                       
                        <ul>
                            
                            <li className={'flex justify-between p-4 border-b-2 border-secondary-02 cursor-pointer'}>
                                <a className={'flex flex-1'} href={'/profile'} onClick={handleChatClick}>
                                    <Icons name={'profile-account'} />
                                    <p className={'ml-3'}>Profle</p>
                                </a>
                                <Icons name={'direction-left-gray'} />
                            </li>
                            <li className={'flex justify-between p-4 border-b-2 border-secondary-02 cursor-pointer'}>
                                <a className={'flex flex-1'} href={'/security'}>
                                    <Icons name={'profile-security'} />
                                    <p className={'ml-3'}>Security</p>
                                </a>
                                <Icons name={'direction-left-gray'} />
                            </li>
                            <li className={'flex justify-between p-4 border-b-2 border-secondary-02 cursor-pointer'}>
                                <a className={'flex flex-1'} href={''}>
                                    <Icons name={'profile-support'} />
                                    <p className={'ml-3'}>Support</p>
                                </a>
                                <Icons name={'direction-left-gray'} />
                            </li>
                            <li className={'flex justify-between p-4 border-b-2 border-secondary-02 cursor-pointer'}>
                                <a className={'flex flex-1'} href={'/chat'}>
                                    <Icons name={'profile-faq'} />
                                    <p className={'ml-3'}>Chat</p>
                                </a>
                                <Icons name={'direction-left-gray'} />
                            </li>
                            <li className={'flex p-4 cursor-pointer'} onClick={logoutFuc}>
                                <Icons name={'profile-logout'} />
                                <p className={'ml-3'}>Logout</p>
                            </li>
                        </ul>
                    </>
                    :
                    userProfile &&
                    <MobileInnerProfile userProfile={userProfile} setShowInnerProfile={setShowInnerProfile} />
            }


        </>
    );
}
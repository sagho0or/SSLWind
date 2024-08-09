'use client';
import React, { useEffect, useState } from 'react';
import Icons from '../../../../../public/Icons';
import getUserProfileService from "@/app/services/getUserProfile.service";
import { UserProfileResponseInterface } from "@/store/userProfile/interface";
import logout from "@/app/services/logout";
import { Router } from "next/router";
import { useRouter } from "next/navigation";
import MobileInnerSetting from '../MobileInnerSetting';

export default function MobileSettingComponent() {
    const [userProfile, setUserProfile] = useState<UserProfileResponseInterface>();
    const [showInnerProfile, setShowInnerProfile] = useState<boolean>(false);
    const Router = useRouter();

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
                                    alt={userProfile?.firstName +' '+ userProfile?.lastName || 'User Avatar'}
                                    width={48}
                                    height={48}
                                    onError={(e) => { e.currentTarget.src = '/images/avatar.svg'; }}
                                    loading="lazy"
                                />
                            </div>
                            <p className={'text-md font-semibold mt-4'}>{userProfile?.firstName +' '+ userProfile?.lastName}</p>
                        </div>
                        <div className={'w-full h-3 bg-secondary-02'} />
                        <ul>
                            <li className={'flex justify-between p-4 border-b-2 border-secondary-02 cursor-pointer'}>
                                <a className={'flex flex-1'} onClick={() => setShowInnerProfile(true)}>
                                    <Icons name={'profile-account'} />
                                    <p className={'ml-3'}>Profle</p>
                                </a>
                                <Icons name={'direction-left-gray'} />
                            </li>
                        </ul>
                        <div className={'w-full h-3 bg-secondary-02'} />
                        <div className={'w-full h-3 bg-secondary-02'} />
                        <ul>
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
                                <a className={'flex flex-1'} href={'/faq'}>
                                    <Icons name={'profile-faq'} />
                                    <p className={'ml-3'}>FAQ</p>
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
                    <MobileInnerSetting setShowInnerProfile={setShowInnerProfile} />
            }


        </>
    );
}
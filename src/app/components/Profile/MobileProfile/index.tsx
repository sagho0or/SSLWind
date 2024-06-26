'use client';
import React, {useEffect, useState} from 'react';
import Icons from '../../../../../public/Icons';
import getUserProfileService from "@/app/services/getUserProfile.service";
import {UserProfileResponseInterface} from "@/store/userProfile/interface";
import logout from "@/app/services/logout";
import {Router} from "next/router";
import {useRouter} from "next/navigation";
import MobileInnerProfile from "@/app/components/Profile/MobileInnerProfile";

export default function MobileProfileComponent() {
    const [userProfile, setUserProfile] = useState<UserProfileResponseInterface>();
    const [showInnerProfile, setShowInnerProfile] = useState<boolean>(false);
    const Router = useRouter();

    useEffect(() => {
        getUserProfileService(false).then((res: any) => {
            setUserProfile(res);
        })
    }, []);

    function logoutFuc(){
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
                                <img src={userProfile?.avatar_id || '/images/avatar.svg'} alt={'maryam'} width={48}
                                     height={48}/>
                            </div>
                            <p className={'text-md font-semibold mt-4'}>{userProfile?.full_name}</p>
                        </div>
                        <div className={'w-full h-3 bg-secondary-02'}/>
                        <ul>
                            <li className={'flex justify-between p-4 border-b-2 border-secondary-02 cursor-pointer'}>
                                <a className={'flex flex-1'} onClick={() => setShowInnerProfile(true)}>
                                    <Icons name={'profile-account'}/>
                                    <p className={'mr-3'}>حساب کاربری</p>
                                </a>
                                <Icons name={'direction-left-gray'}/>
                            </li>
                            <li className={'flex justify-between p-4 border-b-2 border-secondary-02 cursor-pointer'}>
                                <a className={'flex flex-1'} href={'/addCard'}>
                                    <Icons name={'profile-bank-card'}/>
                                    <p className={'mr-3'}>کارت بانکی</p>
                                </a>
                                <Icons name={'direction-left-gray'}/>
                            </li>
                            <li className={'flex justify-between p-4 border-b-2 border-secondary-02 cursor-pointer'}>
                                <a className={'flex flex-1'}
                                   href={`/KYC/${userProfile?.kyc_level ? userProfile?.kyc_level + 1 : 0}`}>
                                    <Icons name={'profile-KYC'}/>
                                    <p className={'mr-3'}>احراز هویت</p>
                                </a>
                                <a className={'flex'} href={''}>
                                    <div className={'text-error bg-error-01 py-1 px-2 rounded-lg ml-2'}>
                            <span
                                className={'text-xs'}>سطح {
                                userProfile?.kyc_level == 1 ? 'یک' :
                                    userProfile?.kyc_level == 2 ? 'دو' :
                                        userProfile?.kyc_level == 3 ? 'سه' : ''}</span>
                                    </div>
                                    <Icons name={'direction-left-gray'}/>
                                </a>
                            </li>
                            <li className={'flex justify-between p-4 border-b-2 border-secondary-02 cursor-pointer'}>
                                <a className={'flex flex-1'} href={'/referral'}>
                                    <Icons name={'profile-Referral'}/>
                                    <p className={'mr-3'}>دعوت از دوستان</p>
                                </a>
                                <Icons name={'direction-left-gray'}/>
                            </li>
                        </ul>
                        <div className={'w-full h-3 bg-secondary-02'}/>
                        {/*<ul>*/}
                        {/*    <li className={'flex justify-between p-4 border-b-2 border-secondary-02'}>*/}
                        {/*        <a className={'flex flex-1'} href={''}>*/}
                        {/*            <Icons name={'profile-dark-mode'}/>*/}
                        {/*            <p className={'mr-3'}>صفحه نمایش تاریک</p>*/}
                        {/*        </a>*/}
                        {/*        <input type="checkbox" value="" className="sr-only peer" disabled/>*/}
                        {/*        <div*/}
                        {/*            className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>*/}
                        {/*    </li>*/}
                        {/*</ul>*/}
                        <div className={'w-full h-3 bg-secondary-02'}/>
                        <ul>
                            <li className={'flex justify-between p-4 border-b-2 border-secondary-02 cursor-pointer'}>
                                <a className={'flex flex-1'} href={'/security'}>
                                    <Icons name={'profile-security'}/>
                                    <p className={'mr-3'}>امنیت</p>
                                </a>
                                <Icons name={'direction-left-gray'}/>
                            </li>
                            <li className={'flex justify-between p-4 border-b-2 border-secondary-02 cursor-pointer'}>
                                <a className={'flex flex-1'} href={''}>
                                    <Icons name={'profile-support'}/>
                                    <p className={'mr-3'}>پشتیبانی</p>
                                </a>
                                <Icons name={'direction-left-gray'}/>
                            </li>
                            <li className={'flex justify-between p-4 border-b-2 border-secondary-02 cursor-pointer'}>
                                <a className={'flex flex-1'} href={'/faq'}>
                                    <Icons name={'profile-faq'}/>
                                    <p className={'mr-3'}>سوالات متداول</p>
                                </a>
                                <Icons name={'direction-left-gray'}/>
                            </li>
                            <li className={'flex p-4 cursor-pointer'} onClick={logoutFuc}>
                                <Icons name={'profile-logout'}/>
                                <p className={'mr-3'}>خروج</p>
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
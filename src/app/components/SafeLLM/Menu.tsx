import React, { useEffect, useState } from 'react';
import { useRouter } from "next/navigation";
import Link from 'next/link';
import Icons from '../../../../public/Icons';
import getUserProfileService from '@/app/services/getUserProfile.service';
import { UserProfileResponseInterface } from '@/store/userProfile/interface';
import logout from '@/app/services/logout';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

const Menu = ({ currentPath, setShowInnerComponent }:
    { currentPath: string, setShowInnerComponent: any }) => {
    const [userProfile, setUserProfile] = useState<UserProfileResponseInterface>();
    const userProfileState = useSelector((state: RootState) => state.userProfile.data);
    const Router = useRouter();

    useEffect(() => {
        if (!userProfileState) {
            getUserProfileService(false).then((res: any) => {
                setUserProfile(res);
                console.log("User Profile:", userProfile);
            }).catch((error) => {
                console.error("Error fetching user profile:", error);
            });
        } else {
            setUserProfile(userProfileState);
        }

    }, []);

    function handleClick(path: string) {
        if (currentPath as any == path)
            setShowInnerComponent(true);
        else
            setShowInnerComponent(true);
            Router.push(path);
    }

    function logoutFuc() {
        
        logout();
        Router.push('/')
    }

    return (
        <>
            <div className={'h-40 flex flex-col justify-center items-center'}>
                <div className={'rounded-full w-12 h-12'}>
                    <img
                        src={userProfile?.imageUrl || '/images/avatar.svg'}
                        alt={userProfile?.firstName + ' ' + userProfile?.lastName || 'User Avatar'}
                        width={48}
                        height={48}
                        onError={(e) => { e.currentTarget.src = '/images/avatar.svg'; }}
                        loading="lazy"
                    />
                </div>
                <p className={'text-md font-semibold mt-4'}>{userProfile?.firstName + ' ' + userProfile?.lastName}</p>
            </div>
            <div className={'w-full h-3 bg-secondary-02'} />
            <ul>
                <li className={'flex justify-between p-4 border-b-2 border-secondary-02 cursor-pointer'}>
                    <a className={'flex flex-1'} onClick={() => handleClick('/chat')}>
                        <Icons name={'profile-faq'} />
                        <p className={'ml-3'}>chat</p>
                    </a>
                    <Icons name={'direction-left-gray'} />
                </li>
                <li className={'flex justify-between p-4 border-b-2 border-secondary-02 cursor-pointer'}>
                    <a className={'flex flex-1'} onClick={() => handleClick('/management')}>
                        <Icons name={'management'} />
                        <p className={'ml-3'}>management</p>
                    </a>
                    <Icons name={'direction-left-gray'} />
                </li>
                <li className={'flex justify-between p-4 border-b-2 border-secondary-02 cursor-pointer'}>
                    <a className={'flex flex-1'} onClick={() => handleClick('/profile')}>
                        <Icons name={'profile-account'} />
                        <p className={'ml-3'}>Profle</p>
                    </a>
                    <Icons name={'direction-left-gray'} />
                </li>
                <li className={'flex justify-between p-4 border-b-2 border-secondary-02 cursor-pointer'}>
                    <a className={'flex flex-1'} onClick={() => handleClick('/security')}>
                        <Icons name={'profile-security'} />
                        <p className={'ml-3'}>Security</p>
                    </a>
                    <Icons name={'direction-left-gray'} />
                </li>
                <li className={'flex justify-between p-4 border-b-2 border-secondary-02 cursor-pointer'}>
                    <a className={'flex flex-1'} onClick={() => handleClick('/support')}>
                        <Icons name={'profile-support'} />
                        <p className={'ml-3'}>Support</p>
                    </a>
                    <Icons name={'direction-left-gray'} />
                </li>
                <li className={'flex p-4 cursor-pointer'} onClick={logoutFuc}>
                    <Icons name={'profile-logout'} />
                    <p className={'ml-3'}>Logout</p>
                </li>
            </ul>
        </>
    );
};

export default Menu;

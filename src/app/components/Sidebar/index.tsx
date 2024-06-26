'use client'
import Icons from "../../../../public/Icons";
import isMobileView from "@/app/utils/isMobileView";
import React, {useEffect, useState} from "react";
import {useCookies} from "react-cookie";
import {SidebarInterface} from "@/app/components/Sidebar/sidebar.interface";
import {usePathname, useRouter} from "next/navigation";
import {UserProfileResponseInterface} from "@/store/userProfile/interface";
import getUserProfileService from "@/app/services/getUserProfile.service";
import logout from "@/app/services/logout";

export default function Sidebar(props: SidebarInterface) {

    const [userProfile, setUserProfile] = useState<UserProfileResponseInterface>()

    const [cookie, setCookie, removeCookie] = useCookies(['auth-token', 'auth-refresh']);
    const pathname = usePathname();
    const isLogin = !!cookie['auth-token'];
    const Router = useRouter();

    const itemsStyle: string = 'flex items-center px-6 py-4 ' +
        'hover:bg-primary-01 hover:text-primary hover:border-r hover:border-r-2 hover:border-primary group ' +
        'active:text-primary active:border-r active:border-r-2 active:border-primary';
    const borderBottomStyle: string = 'border-b-2 border-b-secondary-02';

    useEffect(() => {
        getUserProfileService(false).then((res: any) => {
            setUserProfile(res);
        })
    }, []);

    function logoutFunc (){
        logout();
        Router.push('/')
    }

    const items = [
        {
            label: 'پورتفولیو',
            path: '/',
            iconName: 'portfolio',
            hoverIconName: 'portfolio-filled',
            hasDivider: false,
            badge: null
        },
        {
            label: 'واریز',
            path: '/deposit',
            iconName: 'deposit',
            hoverIconName: 'deposit-filled',
            hasDivider: false,
            badge: null
        },
        {
            label: 'برداشت',
            path: '/withdraw',
            iconName: 'withdraw',
            hoverIconName: 'withdraw-filled',
            hasDivider: false,
            badge: null
        },
        {
            label: 'تاریخچه',
            path: '/history',
            iconName: 'history',
            hoverIconName: 'history-filled',
            hasDivider: true,
            badge: null
        },
        {
            label: 'پشتیبانی',
            path: '/',
            iconName: 'headphones',
            hoverIconName: 'headphones-filled',
            hasDivider: false,
            badge: null
        },
        {
            label: 'امنیت',
            path: '/security',
            iconName: 'lock',
            hoverIconName: 'lock-filled',
            hasDivider: true,
            badge: null
        },
        {
            label: 'حساب کاربری',
            path: '/profile',
            iconName: 'user',
            hoverIconName: 'user-filled',
            hasDivider: false,
            badge: null
        },
        {
            label: 'کارت بانکی',
            path: '/addCard',
            iconName: 'card',
            hoverIconName: 'card-filled',
            hasDivider: false,
            badge: null
        },
        {
            label: 'احراز هویت',
            path: `/KYC/${userProfile?.kyc_level ? (userProfile?.kyc_level < 4 ? userProfile?.kyc_level + 1 : 4) : "1"}`,
            iconName: 'KYC',
            hoverIconName: 'KYC-filled',
            hasDivider: false,
            badge: {
                label: `سطح ${
                    userProfile?.kyc_level == 1 ? 'یک' :
                        userProfile?.kyc_level == 2 ? 'دو' :
                            userProfile?.kyc_level == 3 ? 'سه' : ''}`,
                style: 'inline-flex items-center justify-center px-2 py-1.5 ms-3 text-xs font-medium text-error bg-error-01 rounded-lg'
            }
        },
        {
            label: 'دعوت از دوستان',
            path: '/referral',
            iconName: 'add-user',
            hoverIconName: 'add-user-filled',
            hasDivider: false,
            badge: null
        },
    ]

    const handleModalOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        //check if the clickTarget is the modal overlay itself(not its children)
        if (e.target === e.currentTarget && isMobileView) {
            // Close modal when clicking outside
            props.setIsSidebarOpen(false);
        }
    };

    return (
        <div className={isMobileView ? '' : 'bg-secondary-02 p-5 min-h-full w-full '}>
            <div className={isMobileView ? '' : 'fixed w-80 h-screen-120 overflow-y-scroll'}>
                {
                    props.isSidebarOpen &&
                    <div className={`min-h-[660px] h-full  ${isMobileView ?
                        'absolute z-40 top-0 right-0 min-h-200 w-screen bg-secondary-17 bg-opacity-40'
                        : 'bg-secondary-01 rounded-xl'}`}
                         onClick={handleModalOverlayClick}>
                        <aside id="separator-sidebar"
                               className={`h-full min-h-[660px] z-40 transition-transform sm:translate-x-0 
                           ${isMobileView ? 'bg-secondary-01 overflow-scroll w-7/12 min-w-60 max-w-80' : '-translate-x-full '}`}
                               aria-label="Sidebar">
                            <div className="py-4 overflow-y-auto text-secondary-17 divide-y-2">
                                <ul className={"h-screen-120 space-y-2 font-medium snap-start snap-y touch-pan-y overflow-y-scroll" + ' ' +
                                isMobileView ? '' : 'scrollbar-hide"'}>
                                    {
                                        items.map(item => (
                                            <li className={`group ${item.hasDivider ? borderBottomStyle : ''}`}
                                                key={item.label}>
                                                <a href={`${item.path}`}
                                                   className={itemsStyle + ' ' +
                                                       ` ${pathname === item.path ? 'bg-primary-01 text-primary border-r-2 border-primary ' : ''}`}>
                                                    <div className={'group-hover:hidden'}>
                                                        <Icons name={item.iconName}/>
                                                    </div>
                                                    <div className={'hidden group-hover:block'}>
                                                        <Icons name={item.hoverIconName}/>
                                                    </div>
                                                    <span className="ms-3 group-hover:font-semibold">{item.label}</span>
                                                    {
                                                        item.badge &&
                                                        <span className={item.badge.style}>{item.badge.label}</span>
                                                    }
                                                </a>
                                            </li>
                                        ))
                                    }
                                    {isLogin &&
                                        <li className={`fixed bottom-0 w-full pb-8 cursor-pointer ${itemsStyle}`}
                                            onClick={() => logoutFunc()}>
                                            <Icons name={'logout'}/>
                                            <span className="ms-3">خروج از حساب</span>
                                        </li>
                                    }
                                </ul>
                            </div>
                        </aside>
                    </div>
                }
            </div>
            <div className={!isMobileView ? "w-screen-390 float-left" : ''}>
                {props.children}
            </div>
        </div>


    )
}
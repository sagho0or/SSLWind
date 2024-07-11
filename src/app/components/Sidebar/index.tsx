'use client'
import Icons from "../../../../public/Icons";
import isMobileView from "@/app/utils/isMobileView";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { SidebarInterface } from "@/app/components/Sidebar/sidebar.interface";
import { usePathname, useRouter } from "next/navigation";
import { UserProfileResponseInterface } from "@/store/userProfile/interface";
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

    function logoutFunc() {
        logout();
        Router.push('/')
    }

    const items = [
        {
            label: 'History',
            path: '/history',
            iconName: 'history',
            hoverIconName: 'history-filled',
            hasDivider: true,
            badge: null
        },
        {
            label: 'Support',
            path: '/',
            iconName: 'headphones',
            hoverIconName: 'headphones-filled',
            hasDivider: false,
            badge: null
        },
        {
            label: 'Secutiry',
            path: '/security',
            iconName: 'lock',
            hoverIconName: 'lock-filled',
            hasDivider: true,
            badge: null
        },
        {
            label: 'Profile',
            path: '/profile',
            iconName: 'user',
            hoverIconName: 'user-filled',
            hasDivider: false,
            badge: null
        }
    ]

    const handleModalOverlayClick = (val: boolean) => {
        props.setIsSidebarOpen(val);
    };

    return (
        <div className={isMobileView ? '' : 'bg-secondary-02 p-5 min-h-full w-full '}>

            {
                props.isSidebarOpen ?
                    <div className={isMobileView ? 'absolute z-40 top-0 right-0 min-h-200 w-screen bg-secondary-17 bg-opacity-40' : 'fixed w-80 h-screen-120 bg-white overflow-y-scroll scrollable-content hide-scrollbar'}>
                        <div className={`min-h-[660px] h-full  ${isMobileView ?
                            ''
                            : 'bg-secondary-01 rounded-xl'}`}
                        >
                            <div className="w-8 h-8 cursor-pointer text-primary border border-black hover:bg-primary hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-sm p-1.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
                                onClick={() => handleModalOverlayClick(false)}>
                                <Icons name='close' />
                            </div>

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
                                                            <Icons name={item.iconName} />
                                                        </div>
                                                        <div className={'hidden group-hover:block'}>
                                                            <Icons name={item.hoverIconName} />
                                                        </div>
                                                        <span className="ms-3 group-hover:font-semibold">{item.label}</span>
                                                    </a>
                                                </li>
                                            ))
                                        }

                                        {isLogin &&
                                            <li className={`fixed bottom-0 w-full pb-8 cursor-pointer ${itemsStyle}`}
                                                onClick={() => logoutFunc()}>
                                                <Icons name={'logout'} />
                                                <span className="ms-3">Logout</span>
                                            </li>
                                        }
                                    </ul>
                                </div>
                            </aside>
                        </div>
                    </div>
                    :

                    <div onClick={() => handleModalOverlayClick(true)}
                        className="absolute w-8 h-8 cursor-pointer text-primary border border-black hover:bg-primary hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-sm p-1.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500">
                        <Icons name='menu' />
                    </div>
            }
            <div className={!isMobileView ? props.isSidebarOpen ? "w-screen-390 float-right" : 'w-full float-right' : ''}>
                {props.children}
            </div>
        </div>


    )
}
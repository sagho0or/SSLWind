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
    const [isHistoryOpen, setIsHistoryOpen] = useState(false);

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
    const chatHistory = [
        {
            "id": "chat1",
            "date": "2024-08-12T12:00:00Z",
            "title": "Chat on JavaScript Basics"
        },
        {
            "id": "chat2",
            "date": "2024-08-11T15:30:00Z",
            "title": "Chat on React Best Practices"
        },
        {
            "id": "chat2",
            "date": "2024-09-11T15:30:00Z",
            "title": "Cactices"
        },
        {
            "id": "chat2",
            "date": "2024-08-11T15:30:00Z",
            "title": "Chat on React Best Practices"
        },
        {
            "id": "chat2",
            "date": "2024-10-11T15:30:00Z",
            "title": "Chat  Best Practices"
        },
        {
            "id": "chat2",
            "date": "2024-11-11T15:30:00Z",
            "title": "Chat on React Best Practices"
        }
    ]
    const items = [
        {
            label: 'History',
            path: null,
            iconName: 'history',
            hoverIconName: 'history-filled',
            hasDivider: true,
            badge: null,
            subItems: chatHistory.map(chat => ({
                label: `${chat.title} - ${new Date(chat.date).toLocaleDateString()}`,
                path: `/chat/history/${chat.id}`
            }))
        },
        {
            label: 'chatbot',
            path: '/chat',
            iconName: 'chat',
            hoverIconName: 'chat-filled',
            hasDivider: false,
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
            label: 'Management',
            path: '/management',
            iconName: 'management',
            hoverIconName: 'management-filled',
            hasDivider: true,
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
        <div className={isMobileView ? '' : 'rounded-xl bg-secondary-02 p-5 min-h-full w-full relative flex flex-col'}>

            {
                props.isSidebarOpen ?
                    <div className={'rounded-xl flex flex-col flex-1 fixed z-40 w-80 bg-white overflow-y-scroll scrollable-content hide-scrollbar'
                    }>
                        <div className={`h-full ${isMobileView ?
                            'relative'
                            : 'bg-secondary-01 rounded-xl'}`}
                        >
                            <div className={`w-8 h-8 cursor-pointer text-primary border border-black hover:bg-primary hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-sm p-1.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500`}
                                onClick={() => handleModalOverlayClick(false)}>
                                <Icons name='close' />
                            </div>

                            <aside id="separator-sidebar"
                                className={`h-full z-40 transition-transform sm:translate-x-0 
                           ${isMobileView ? 'bg-secondary-01 overflow-scroll w-7/12 min-w-60 max-w-80' : ' '}`}
                                aria-label="Sidebar">
                                <div className="py-4 overflow-y-auto text-secondary-17 divide-y-2">
                                    <ul className={"h-screen-120 space-y-2 font-medium snap-start snap-y touch-pan-y overflow-y-scroll" + ' ' +
                                        isMobileView ? '' : 'scrollbar-hide"'}>
                                        {
                                            items.map(item => (
                                                <li className={`group ${item.hasDivider ? borderBottomStyle : ''}`}
                                                    key={item.label}>
                                                    {item.path ?
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

                                                            {item.label === 'History' && !isHistoryOpen && (
                                                                <div onClick={() => { setIsHistoryOpen(true) }}
                                                                    className={'absolute top-8 right-2 cursor-pointer'}>
                                                                    <Icons name={'direction-down'} />
                                                                </div>
                                                            )}

                                                        </a> :
                                                        <a onClick={() => { setIsHistoryOpen(!isHistoryOpen) }}
                                                            className={itemsStyle + ' ' +
                                                                ` ${pathname === item.path ? 'bg-primary-01 text-primary border-r-2 border-primary ' : 'cursor-pointer'}`}>
                                                            <div className={'group-hover:hidden'}>
                                                                <Icons name={item.iconName} />
                                                            </div>
                                                            <div className={'hidden group-hover:block'}>
                                                                <Icons name={item.hoverIconName} />
                                                            </div>
                                                            <span className="ms-3 group-hover:font-semibold">{item.label}</span>

                                                            <div
                                                                className={'absolute top-8 right-2 cursor-pointer'}>
                                                                <Icons name={'direction-down'} />
                                                            </div>


                                                        </a>
                                                    }

                                                    {item.label === 'History' && isHistoryOpen && (
                                                        <ul className="pl-8 space-y-1 max-h-40 overflow-y-auto">
                                                            {item.subItems && item.subItems.map(subItem => (
                                                                <li key={subItem.label} >
                                                                    <a href={subItem.path} className="block px-4 py-2 hover:bg-primary-02 hover:text-primary">
                                                                        {subItem.label}
                                                                    </a>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    )}

                                                </li>
                                            ))
                                        }

                                        {isLogin &&
                                            <li className={`mt-auto bottom-0 w-full pb-8 cursor-pointer ${itemsStyle}`}
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
            <div className={!isMobileView ?
                props.isSidebarOpen ? "sm:w-screen-390 flex flex-1 self-end w-full flex-col" : 'w-full pl-10 self-end flex flex-1 flex-col'
                : 'w-full'}>
                {props.children}
            </div>
        </div >


    )
}
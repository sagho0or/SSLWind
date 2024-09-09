'use client'
import Icons from "../../../../public/Icons";
import isMobileView from "@/app/utils/isMobileView";
import React, { useEffect, useState } from "react";
import { SidebarInterface } from "@/app/components/Sidebar/sidebar.interface";
import { usePathname, useRouter } from "next/navigation";
import { UserProfileResponseInterface } from "@/store/userProfile/interface";
import getUserProfileService from "@/app/services/getUserProfile.service";
import logout from "@/app/services/logout";
import { useDispatch, useSelector } from "react-redux";
import { fetchChatHistoryListRequest } from "@/store/chat/history/list/slice";
import { useParams } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import { resetLoginOtpState } from "@/store/auth/login/otp/slice";
import { loginReset } from "@/store/auth/login/form/slice";
const allowedRolesManagement = ['admin', 'developer', 'management'];


export default function Sidebar(props: SidebarInterface) {

    const [userProfile, setUserProfile] = useState<UserProfileResponseInterface>()
    const pathname = usePathname();
    const Router = useRouter();
    const [isHistoryOpen, setIsHistoryOpen] = useState(false);
    const [role, setRole] = useState<string>('user');
    const dispatch = useDispatch();
    const chatHistory = useSelector((state: any) => state.chatHistoryList.items);
    const hasMore = useSelector((state: any) => state.chatHistoryList.hasMore);
    const isLoading = useSelector((state: any) => state.chatHistoryList.isLoading);
    const params = useParams();
    const notificationCount = useSelector((state: any) => state.notifications.count);
    const lastNotification = useSelector((state: any) => state.notifications.lastNotification);
    const id = params.id;

    const itemsStyle: string = 'flex items-center px-6 py-4 ' +
        'hover:bg-primary-01 hover:text-primary hover:border-r hover:border-r-2 hover:border-primary group ' +
        'active:text-primary active:border-r active:border-r-2 active:border-primary';
    const borderBottomStyle: string = 'border-b-2 border-b-secondary-02';

    useEffect(() => {

        getUserProfileService(true).then((res: any) => {
            setRole(res.role);
        })

        getUserProfileService(false).then((res: any) => {
            setUserProfile(res);
        })

        dispatch(fetchChatHistoryListRequest());

    }, [dispatch]);
    useEffect(() => {


        if (lastNotification) {
            toast(
                <div className="flex items-center text-white bg-red-600">
                    <Icons name="warning" />
                    <div className="ml-2">
                        <p className="font-semibold">Alert: Unsafe Response Detected!</p>
                        <p>{lastNotification.message}</p>
                        <a href={`/alerts/${lastNotification.id}`} className="text-white underline">View More</a>
                    </div>
                </div>,
                {
                    position: 'top-left',
                    duration: 5000,
                    style: {
                        background: '#dc2626',
                        color: '#ffffff',
                    },
                }
            );
        }

    }, [dispatch, lastNotification]);

    useEffect(() => {
        if (chatHistory) {
            if (id) setIsHistoryOpen(true);
        }

    }, [chatHistory]);

    const logoutFunc = async () => {
        await logout();
        dispatch(resetLoginOtpState());
        dispatch(loginReset());
        
        localStorage.removeItem('isLogin');
        localStorage.removeItem('userProfile');
        Router.push('/');
    }
      
    const handleScroll = (e: React.UIEvent<HTMLUListElement>) => {
        const bottom = e.currentTarget.scrollHeight - e.currentTarget.scrollTop === e.currentTarget.clientHeight;
        if (bottom && hasMore && !isLoading) {
            dispatch(fetchChatHistoryListRequest());
        }
    };

    const items = [
        {
            label: 'chatbot',
            path: '/chat',
            iconName: 'chat',
            hoverIconName: 'chat-filled',
            hasDivider: false,
            badge: null
        },
        {
            label: 'Management',
            path: '/management',
            iconName: 'management',
            hoverIconName: 'management-filled',
            hasDivider: false,
            badge: null
        },
        {
            label: 'Alerts',
            path: '/alerts',
            iconName: 'chart-live',
            hoverIconName: 'chart-live-filled',
            hasDivider: true,
            badge: notificationCount > 0 ? notificationCount.toString() : null,
        },
        {
            label: 'Secutiry',
            path: '/security',
            iconName: 'lock',
            hoverIconName: 'lock-filled',
            hasDivider: false,
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

    if (chatHistory.length > 0) {
        (items as any).splice(1, 0, {
            label: 'History',
            path: null,
            iconName: 'history',
            hoverIconName: 'history-filled',
            hasDivider: true,
            badge: null,
            subItems: chatHistory.map((chat: any) => ({
                label: `${chat.title} - ${new Date(chat.date).toLocaleDateString()}`,
                path: `/chat/history/${chat.id}`,
                chatId: chat.id
            }))
        });
    }
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
                            <div className={`w-full h-8 cursor-pointer text-primary border-bottom border-black hover:bg-primary hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm p-1.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500`}
                                onClick={() => handleModalOverlayClick(false)}>
                                <Icons name='close' />
                                <span>Hide SideBar</span>
                            </div>

                            <aside id="separator-sidebar "
                                className={`h-full z-40 transition-transform sm:translate-x-0 
                           ${isMobileView ? 'bg-secondary-01 overflow-scroll w-7/12 min-w-60 max-w-80' : ' '}`}
                                aria-label="Sidebar">
                                <div className="pb-4 overflow-y-auto text-secondary-17 divide-y-2">
                                    <ul className={"h-screen-120 space-y-2 font-medium snap-start snap-y touch-pan-y overflow-y-scroll" +
                                        (isMobileView ? '' : ' scrollbar-hide')}>
                                        {
                                            items.map(item => (
                                                ((item.label == 'Management' || item.label == 'Alerts') && !allowedRolesManagement.includes(role)) ? '' :
                                                    <li className={`relative group ${item.hasDivider ? borderBottomStyle : ''}`}
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
                                                                {item.badge && (
                                                                    <span className="absolute top-4 right-3 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">{item.badge}</span>
                                                                )}
                                                            </a> :
                                                            <a onClick={() => { setIsHistoryOpen(!isHistoryOpen) }}
                                                                className={itemsStyle + ' ' +
                                                                    ` ${pathname === item.path ? 'relative bg-primary-01 text-primary border-r-2 border-primary ' : 'relative cursor-pointer'}`}>
                                                                <div className={'group-hover:hidden'}>
                                                                    <Icons name={item.iconName} />
                                                                </div>
                                                                <div className={'hidden group-hover:block'}>
                                                                    <Icons name={item.hoverIconName} />
                                                                </div>
                                                                <span className="ms-3 group-hover:font-semibold">{item.label}</span>

                                                                <div
                                                                    className={'absolute top-4 right-2 cursor-pointer'}>
                                                                    <Icons name={'direction-down'} />
                                                                </div>


                                                            </a>
                                                        }

                                                        {item.label === 'History' && isHistoryOpen && (
                                                            <ul className="pl-8 space-y-1 max-h-40 overflow-y-auto" onScroll={handleScroll}>
                                                                {(item as any).subItems && (item as any).subItems.map((subItem: any) => (
                                                                    <li key={subItem.label} >
                                                                        <a href={subItem.path} className={`block px-4 py-2 hover:bg-primary-02 hover:text-primary ${id && id == subItem.chatId ? 'bg-primary-01 text-primary' : ''
                                                                            }`}>
                                                                            {subItem.label}
                                                                            {item.badge && (
                                                                                <span className="absolute top-4 right-3 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">{item.badge}</span>
                                                                            )}
                                                                        </a>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        )}

                                                    </li>

                                            ))
                                        }

                                        <li className={`mt-auto bottom-0 w-full pb-8 cursor-pointer ${itemsStyle}`}
                                            onClick={() => logoutFunc()}>
                                            <Icons name={'logout'} />
                                            <span className="ms-3">Logout</span>
                                        </li>
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



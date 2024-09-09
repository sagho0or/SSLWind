import React, { useEffect, useState } from 'react';
import { useRouter } from "next/navigation";
import Link from 'next/link';
import Icons from '../../../../public/Icons';
import getUserProfileService from '@/app/services/getUserProfile.service';
import { UserProfileResponseInterface } from '@/store/userProfile/interface';
import logout from '@/app/services/logout';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { fetchChatHistoryListRequest } from '@/store/chat/history/list/slice';
import { resetLoginOtpState } from '@/store/auth/login/otp/slice';
import { loginReset } from '@/store/auth/login/form/slice';

const allowedRolesManagement = ['admin', 'developer', 'management'];

const Menu = ({ currentPath, setShowInnerComponent }: { currentPath: string, setShowInnerComponent: any }) => {
    const [userProfile, setUserProfile] = useState<UserProfileResponseInterface>();
    const userProfileState = useSelector((state: RootState) => state.userProfile.data);
    const Router = useRouter();
    const [role, setRole] = useState<string>('user');
    const dispatch = useDispatch();
    const chatHistory = useSelector((state: any) => state.chatHistoryList.items);
    const hasMore = useSelector((state: any) => state.chatHistoryList.hasMore);
    const isLoading = useSelector((state: any) => state.chatHistoryList.isLoading);
    const [isHistoryOpen, setIsHistoryOpen] = useState(false);

    useEffect(() => {
        if (!userProfileState) {
            getUserProfileService(false).then((res: any) => {
                setUserProfile(res);
            }).catch((error) => {
                console.error("Error fetching user profile:", error);
            });
        } else {
            setUserProfile(userProfileState);
        }

        getUserProfileService(true).then((res: any) => {
            setRole(res.role);
        });

        // Fetch chat history
        dispatch(fetchChatHistoryListRequest());
    }, [dispatch]);


    function handleClick(path: string) {
        setShowInnerComponent(true);
        Router.push(path);
    }

    const logoutFuc = async () => {
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
                    {currentPath === '/chat' ?
                        <a className={'flex flex-1'} onClick={() => handleClick('/chat')}>
                            <Icons name={'profile-faq'} />
                            <p className={'ml-3'}>Chat</p>
                        </a>
                        :
                        <Link href="/chat">
                            <span className={'flex flex-1'}>
                                <Icons name={'profile-faq'} />
                                <p className={'ml-3'}>Chat</p>
                            </span>
                        </Link>
                    }
                    <Icons name={'direction-left-gray'} />
                </li>

                {chatHistory.length > 0 &&
                    <li className={'flex justify-between p-4 border-b-2 border-secondary-02 cursor-pointer'}>
                        <a onClick={() => setIsHistoryOpen(!isHistoryOpen)} className={'flex flex-1'}>
                            <Icons name={'history'} />
                            <p className={'ml-3'}>History</p>
                        </a>
                        <Icons name={isHistoryOpen ? 'direction-up-gray' : 'direction-down-gray'} />
                    </li>
                }

                {isHistoryOpen && (
                    <ul className="pl-8 space-y-1 max-h-40 overflow-y-auto" onScroll={handleScroll}>
                        {chatHistory.map((chat: any) => (
                            <li key={chat.id}>

                                <a
                                    href={`/chat/history/${chat.id}`}
                                    className={`block px-4 py-2 hover:bg-primary-02 hover:text-primary ${currentPath.includes(chat.id) ? 'bg-primary-01 text-primary' : ''}`}
                                >
                                    {chat.title} - {new Date(chat.date).toLocaleDateString()}
                                </a>

                            </li>
                        ))}
                    </ul>
                )}

                {allowedRolesManagement.includes(role) && (
                    <>
                        <li className={'flex justify-between p-4 border-b-2 border-secondary-02 cursor-pointer'}>
                            {currentPath === '/management' ?
                                <a className={'flex flex-1'} onClick={() => handleClick('/management')}>
                                    <Icons name={'management'} />
                                    <p className={'ml-3'}>Management</p>
                                </a>
                                :
                                <Link href="/management">
                                    <span className={'flex flex-1'}>
                                        <Icons name={'management'} />
                                        <p className={'ml-3'}>Management</p>
                                    </span>
                                </Link>
                            }

                            <Icons name={'direction-left-gray'} />
                        </li>
                        <li className={'flex justify-between p-4 border-b-2 border-secondary-02 cursor-pointer'}>

                            {currentPath === '/alerts' ?
                                <a className={'flex flex-1'} onClick={() => handleClick('/alerts')}>
                                    <Icons name={'chart-live'} />
                                    <p className={'ml-3'}>Alerts</p>
                                </a>
                                :
                                <Link href="/alerts">
                                    <span className={'flex flex-1'}>
                                        <Icons name={'chart-live'} />
                                        <p className={'ml-3'}>Alerts</p>
                                    </span>
                                </Link>
                            }
                            <Icons name={'direction-left-gray'} />
                        </li>
                    </>
                )}
                <li className={'flex justify-between p-4 border-b-2 border-secondary-02 cursor-pointer'}>


                    {currentPath === '/profile' ?
                        <a className={'flex flex-1'} onClick={() => handleClick('/profile')}>
                            <Icons name={'profile-account'} />
                            <p className={'ml-3'}>Profle</p>
                        </a>
                        :
                        <Link href="/profile">
                            <span className={'flex flex-1'}>
                                <Icons name={'profile-account'} />
                                <p className={'ml-3'}>Profile</p>
                            </span>
                        </Link>
                    }
                    <Icons name={'direction-left-gray'} />
                </li>
                <li className={'flex justify-between p-4 border-b-2 border-secondary-02 cursor-pointer'}>


                    {currentPath === '/security' ?
                        <a className={'flex flex-1'} onClick={() => handleClick('/security')}>
                            <Icons name={'profile-security'} />
                            <p className={'ml-3'}>Security</p>
                        </a>
                        :
                        <Link href="/security">
                            <span className={'flex flex-1'}>
                                <Icons name={'profile-security'} />
                                <p className={'ml-3'}>Security</p>
                            </span>
                        </Link>
                    }
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

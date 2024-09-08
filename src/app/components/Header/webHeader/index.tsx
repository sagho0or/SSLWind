import { GetServerSideProps } from 'next';
import { parseCookies } from 'nookies';
import HeaderItems from "@/app/components/Header/webHeader/headerItems";
import Link from "next/link";
import React from "react";
import IButton from "@/app/components/Common/Button";
import { UserProfileResponseInterface } from "@/store/userProfile/interface";
import getUserProfileService from "@/app/services/getUserProfile.service";

// SSR function to check login status
export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const cookies = parseCookies(ctx);
    const token = cookies['auth-token']; // Get the auth-token from cookies
    
    if (!token) {
        // If the user is not logged in, redirect to login page
        return {
            redirect: {
                destination: '/login',
                permanent: false,
            },
        };
    }

    // Fetch user profile if token exists
    const userProfile = await getUserProfileService(false);

    return {
        props: { userProfile },
    };
}

export default function Header({ userProfile }: { userProfile: UserProfileResponseInterface }) {
    return (
        <div className={"fixed w-full z-50"}>
            <div className={"flex justify-between items-center h-18 bg-white px-16"}>
                <Link href={"/"} className={'h-full flex'}>
                    <img src={"/safellm.svg"} alt={"SafeLLM"} />
                </Link>
                <HeaderItems />
                {userProfile ?
                    <div className={'flex gap-6 items-center justify-center'}>
                        <Link href={"/profile"}>
                            <h5>Profile</h5>
                        </Link>

                        <div className={'flex items-center'}>
                            <div className={'rounded-full w-9 h-9'}>
                                <Link href={"/profile"}>
                                    <img src={userProfile?.imageUrl || '/images/avatar.svg'} alt={userProfile?.firstName} width={36}
                                        height={36} />
                                </Link>
                            </div>
                        </div>
                    </div>
                    : <Link href={"/login"}>
                        <IButton style={'primarySimple'}>
                            <p>Login</p>
                        </IButton>
                    </Link>
                }
            </div>
        </div>
    );
}

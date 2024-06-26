'use client';
import React, {useEffect, useState} from 'react';
import {useCookies} from 'react-cookie';
import {useSelector} from 'react-redux';
import {useRouter, useSearchParams} from 'next/navigation';
import isMobileView from '@/app/utils/isMobileView';
import MobileRegisterForm from '@/app/components/Register/Forms/MobileRegisterForm';
import PasswordRegisterForm from '@/app/components/Register/Forms/PasswordRegisterForm';
import BottomMenu from '@/app/components/Header/mobileMenu';
import {registerMobileResponseInterface} from '@/store/auth/register/registerMobile/registerMobile.interface';
import {registerOtpResponseInterface} from '@/store/auth/register/registerOtp/registerOtp.interface';
import {registerIdentityResponseInterface} from '@/store/auth/register/registerIdentity/registerIdentity.interface';

export default function RegisterComponent() {
    const [step, setStep] = useState<number>(0);
    const [mobile, setMobile] = useState<string>('');
    const [registerMobileResponse, setRegisterMobileResponse] = useState<registerMobileResponseInterface>({
        TFA: false,
        token: '',
        ttl: 0
    });
    const [registerIdentityResponse, setRegisterIdentityResponse] = useState<registerIdentityResponseInterface>({token: ''})

    const registerMobileStates = useSelector((state: any) => state.registerMobile);
    const passwordStates = useSelector((state: any) => state.registerPassword)

    const router = useRouter();
    const queryParams = useSearchParams();
    const [cookies, setCookie, removeCookie] = useCookies(['auth-token', 'auth-refresh']);

    //step 0
    useEffect(() => {
        if (registerMobileStates.isDone) {
            setStep(1);
            setRegisterMobileResponse(registerMobileStates.response)
        }
    }, [registerMobileStates]);

    //step 1
    useEffect(() => {
        if (passwordStates.isDone) {
            setCookie("auth-token", passwordStates.response.token);
            setCookie("auth-refresh", passwordStates.response.refresh_token);
            router.push('/');
        }
    }, [passwordStates]);


    function backFunc() {
        if (step == 0) return;
        setStep(step - 1);
    }

    return (
        <>
            <div className={'w-full m-auto p-10 bg-white'}>
                <div>
                    <h1 className={`text-xl font-bold  ${isMobileView ? 'text-center' : ''}`}>Register</h1>
                    <p className={`${isMobileView ? 'text-center' : ''} text-secondary-10 mt-4`}>description</p>
                </div>
                {
                    step == 0 ?
                        <MobileRegisterForm mobile={mobile} setMobile={setMobile}/> :
                        step == 1 ?
                            <PasswordRegisterForm mobile={mobile} backFunc={backFunc}
                                                    registerIdentityResponse={registerIdentityResponse}/>
                            : ''
                }
            </div>
            {
                (step == 0 && isMobileView) ?
                    <BottomMenu/>
                    : ''
            }
        </>
    );
}
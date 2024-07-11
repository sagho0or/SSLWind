import React, {useState} from 'react';
import {
    MobileRegisterFormInterface,
} from '@/app/components/Register/Forms/MobileRegisterForm/MobileRegisterForm.interface';
import IInput from '@/app/components/Common/Input';
import IButton from '@/app/components/Common/Button';
import Icons from '../../../../../../public/Icons';
import Link from 'next/link';
import {useDispatch} from 'react-redux';
import {registerMobileLoading} from '@/store/auth/register/registerMobile/action';
import {useReCaptcha} from 'next-recaptcha-v3';
import ILoading from "@/app/utils/loading";
import {GoogleLogin, GoogleOAuthProvider} from "@react-oauth/google";

export default function MobileRegisterForm(props: MobileRegisterFormInterface) {
    const [mobileNumber, setMobileNumber] = useState<string>(props.mobile);
    const [isValid, setIsValid] = useState<boolean>(!!props.mobile);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const dispatch = useDispatch();
    const {executeRecaptcha} = useReCaptcha();

    function handleInputChange(e: any) {
        const value = e.target.value;
        setMobileNumber(value);
        const mobileRegex = /^(\+98|0)?9\d{9}$/;
        setIsValid(mobileRegex.test(value));
        setIsLoading(false);
    }

    function registerWithGoogle() {

    }

    async function confirmFunc(event: React.MouseEvent) {
        event.preventDefault();
        //api call for mobile number & password
        setIsLoading(true);
        dispatch(registerMobileLoading({
            mobile: mobileNumber,
            //TODO
            //recaptcha_response: await executeRecaptcha("form_submit"),
        }))
        props.setMobile(mobileNumber);
    }

    return (
        <form autoComplete={'off'}>
            <div className={'mt-10'}>
                <IInput inputId={'mobileNumber'}
                        label={'Mobile Number'}
                        value={mobileNumber}
                        onChange={handleInputChange}
                        style={'secondaryOutline'}
                        type={'number'}/>
            </div>
            <div className={'mt-10'}>
                <IButton style={'primarySimple'}
                         disabled={!isValid || isLoading}
                         onClick={confirmFunc}>
                    {
                        isLoading ?
                            <ILoading />
                            :
                            <span className={'text-center'}>{'Submit'}</span>
                    }

                </IButton>
                <div className={'mt-5'}>
                    <Link href={'/login'}
                          className={'text-primary ml-2 cursor-pointer'}>Login</Link>
                </div>
            </div>
        </form>
    );

}
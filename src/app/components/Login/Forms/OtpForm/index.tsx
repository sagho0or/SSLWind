import {ChangeEvent, useEffect, useState} from 'react';
import Countdown from 'react-countdown';
import {OTPFormProps} from '@/app/components/Login/Forms/OtpForm/OTPFormProps.interface';
import Icons from '../../../../../../public/Icons';
import IInput from '@/app/components/Common/Input';
import IButton from '@/app/components/Common/Button';
import {useDispatch} from 'react-redux';
import isMobileView from "@/app/utils/isMobileView";
import {useReCaptcha} from "next-recaptcha-v3";
import { encode } from 'base-64';
import { loginOtpLoading } from '@/store/auth/login/otp/slice';
import { loginLoading } from '@/store/auth/login/form/slice';

export default function MobileOtpForm(props: OTPFormProps) {
    const [otpCode, setOtpCode] = useState<string>('');
    const [timerCompleted, setTimerCompleted] = useState<boolean>(false);
    let timer = Date.now() + 120000;

    const dispatch = useDispatch();
    const {executeRecaptcha} = useReCaptcha();

    useEffect(() => {
        if (otpCode.length === 6) {
            // send otpCode api
            dispatch(loginOtpLoading({
                code: otpCode,
                email: props.email,
                trackingId: props.loginResponse.trackingId
            }))
        }
    }, [otpCode]);

    async function resendOtp() {
        //resend otp api
        dispatch(loginLoading({
            email: props.email,
            password:encode(props.password)
            //TODO
            //recaptcha_response: await executeRecaptcha("form_submit"),
        }))
        setTimerCompleted(false);
        timer = Date.now() + 5000;
    }

    return (
        <div>
            {isMobileView &&
                <div className={'absolute top-10'} onClick={props.backFunc}>
                    <Icons name={'left-arrow-key'}/>
                </div>}
            <div className={'my-10 relative'}>
                <IInput inputId={'OtpInput'}
                        label={'OTP Code'}
                        type={'text'}
                        value={otpCode}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setOtpCode(e.target.value)}
                        style={'secondaryOutline'}
                        helper={`Enter the 6-digit code sent to the email ${props.email}.`}/>
            </div>
            <IButton style={'primarySimple'}
                     disabled={!timerCompleted} onClick={resendOtp}>
                {timerCompleted ?
                    <span className={'text-center'}>Retry </span>
                    :
                    <div className={'flex justify-center'}>
                        <span className={'text-center'}>Retry ( </span>
                        <Countdown date={timer}
                                   className={'ml-2'}
                                   onComplete={() => setTimerCompleted(true)}
                                   renderer={counterProps =>
                                       <div> {counterProps.seconds} : {counterProps.minutes} </div>}/>
                        <span> {' Seconds '} )</span>
                    </div>
                }
            </IButton>
        </div>
    );
}
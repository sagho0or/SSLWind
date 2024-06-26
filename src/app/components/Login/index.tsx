/*
* For Login Responsive and WebProfile was really like each other so we dont have 2 files for them
* */
import React, { useEffect, useState } from 'react';
import { loginLoading } from '@/store/auth/login/form/actions';
import isMobileView from '@/app/utils/isMobileView';
import MobileLoginForm from '@/app/components/Login/Forms/LoginForm';
import MobileOtpForm from '@/app/components/Login/Forms/OtpForm';
import { useDispatch, useSelector } from 'react-redux';
import BottomMenu from '@/app/components/Header/mobileMenu';
import { useReCaptcha } from 'next-recaptcha-v3';
import { encode } from 'base-64';
import { useCookies } from 'react-cookie';
import { useRouter } from 'next/navigation';

export default function LoginComponent() {
  const [step, setStep] = useState<number>(0);
  const [mobile, setMobile] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loginResponse, setLoginResponse] = useState<any>({});
  const [cookies, setCookie, removeCookie] = useCookies(['auth-token','auth-refresh']);

  const loginStates = useSelector((state: any) => state.login);
  const loginOtpStates = useSelector((state: any) => state.loginOtp);
  const dispatch = useDispatch();
  const {executeRecaptcha} = useReCaptcha();
  const router = useRouter();

  useEffect(() => {
    if(loginStates.isDone){
      setLoginResponse(loginStates.response);
      setStep(1)
    }
  }, [loginStates]);
  useEffect(() => {
    if(loginOtpStates.isDone){
      setCookie("auth-token", loginOtpStates.response.token);
      setCookie("auth-refresh", loginOtpStates.response.refresh_token);
      router.push('/');
    }
  }, [loginOtpStates]);

  async function acceptMobileForm(mobileNumber: string, password: string) {
    //api call for mobile number & password
    dispatch(loginLoading({
      mobile: mobileNumber,
      password: encode(password)
      // TODO
      //recaptcha_response: await executeRecaptcha("form_submit"),
    }));
    setMobile(mobileNumber);
    setPassword(password)
  }

  function backFunc() {
    if (step == 0) return;
    setStep(step - 1);
  }

  return (
    <>
      <div className={'w-full m-auto p-10 bg-white'}>
        <div>
          <h1 className={`text-xl font-bold  ${isMobileView ? 'text-center' : ''}`}>Login to SafeLLMWind </h1>
        </div>
        {
          step == 0 ?
            <MobileLoginForm confirmFunction={acceptMobileForm} /> :
            step == 1 ?
              <MobileOtpForm mobile={mobile}
                             backFunc={backFunc}
                             password = {password}
                             loginResponse={loginResponse}  /> :
              ''
        }
      </div>
      {
        (step == 0 && isMobileView) ?
          <BottomMenu />
          : ''
      }
    </>
  );
}
/*
* For Login Responsive and WebProfile was really like each other so we dont have 2 files for them
* */
import React, { useEffect, useState } from 'react';
import isMobileView from '@/app/utils/isMobileView';
import MobileLoginForm from '@/app/components/Login/Forms/LoginForm';
import MobileOtpForm from '@/app/components/Login/Forms/OtpForm';
import { useDispatch, useSelector } from 'react-redux';
import { useReCaptcha } from 'next-recaptcha-v3';
import { encode } from 'base-64';
import { useCookies } from 'react-cookie';
import { useRouter } from 'next/navigation';
import { loginLoading } from '@/store/auth/login/form/slice';
import { LoginResponse } from './Forms/OtpForm/OTPFormProps.interface';
import { RootState } from '@/store/store';
import { UserProfileResponseInterface } from '@/store/userProfile/interface';

export default function LoginComponent() {
  const [step, setStep] = useState<number>(0);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loginResponse, setLoginResponse] = useState<LoginResponse>();
  const [cookies, setCookie, removeCookie] = useCookies(['auth-token', 'auth-refresh']);

  const loginStates = useSelector((state: any) => state.login);
  const loginOtpStates = useSelector((state: any) => state.loginOtp);
  const dispatch = useDispatch();
  const { executeRecaptcha } = useReCaptcha();
  const router = useRouter();

  const [userProfile, setUserProfile] = useState<UserProfileResponseInterface>();

  useEffect(() => {
    if (loginStates.isDone) {
      setLoginResponse(loginStates.response.data);
      setStep(1)
    }
  }, [loginStates.isDone]);

  useEffect(() => {
    if (loginOtpStates.isDone) {
      debugger;
      setUserProfile(loginOtpStates.response.data);
      setCookie("auth-token", loginOtpStates.response.data.token);
      setCookie("auth-refresh", loginOtpStates.response.data.refresh_token);
      router.push('/');
    }
  }, [loginOtpStates.isDone]);

  async function acceptMobileForm(email: string, password: string) {
    //api call for mobile number & password
    console.log('email', email);
    console.log('password', password);
    dispatch(loginLoading({
      email: email,
      password: encode(password)
      // TODO
      //recaptcha_response: await executeRecaptcha("form_submit"),
    }));
    setEmail(email);
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
            step == 1 && loginResponse ?
              <MobileOtpForm email={email}
                backFunc={backFunc}
                password={password}
                loginResponse={loginResponse} /> :
              ''
        }
      </div>
    </>
  );
}
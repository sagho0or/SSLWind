/*
* For Login Responsive and WebProfile was really like each other so we dont have 2 files for them
* */
import React, { useEffect, useState } from 'react';
import isMobileView from '@/app/utils/isMobileView';
import MobileLoginForm from '@/app/components/Login/Forms/LoginForm';
import MobileOtpForm from '@/app/components/Login/Forms/OtpForm';
import { useDispatch, useSelector } from 'react-redux';
import BottomMenu from '@/app/components/Header/mobileMenu';
import { useReCaptcha } from 'next-recaptcha-v3';
import { encode } from 'base-64';
import { useCookies } from 'react-cookie';
import { useRouter } from 'next/navigation';
import { loginLoading } from '@/store/auth/login/form/slice';
import { User, UserDto } from './user.class';
import { LoginResponse } from './Forms/OtpForm/OTPFormProps.interface';

export default function LoginComponent() {
  const [step, setStep] = useState<number>(0);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loginResponse, setLoginResponse] = useState<LoginResponse>();
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
      const user = User.getInstance();
      user.updateUser(loginOtpStates.response);
      setCookie("auth-token", loginOtpStates.response.token);
      setCookie("auth-refresh", loginOtpStates.response.refresh_token);
      router.push('/');
    }
  }, [loginOtpStates]);

  async function acceptMobileForm(email: string, password: string) {
    //api call for mobile number & password
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
            step == 1 && loginResponse?
              <MobileOtpForm email={email}
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
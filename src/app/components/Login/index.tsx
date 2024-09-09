/*
* For Login Responsive and WebProfile was really like each other so we dont have 2 files for them
* */
import React, { useEffect, useState } from 'react';
import isMobileView from '@/app/utils/isMobileView';
import MobileLoginForm from '@/app/components/Login/Forms/LoginForm';
import OtpForm from '@/app/components/Login/Forms/OtpForm';
import { useDispatch, useSelector } from 'react-redux';
import { useReCaptcha } from 'next-recaptcha-v3';
import { encode } from 'base-64';
import { useCookies } from 'react-cookie';
import { useRouter } from 'next/navigation';
import { loginLoading } from '@/store/auth/login/form/slice';
import { LoginResponse } from './Forms/OtpForm/OTPFormProps.interface';
import { UserProfileResponseInterface } from '@/store/userProfile/interface';
import axios from 'axios';

export default function LoginComponent() {
  const [step, setStep] = useState<number>(0);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loginResponse, setLoginResponse] = useState<LoginResponse>();

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
    const handleLogin = async () => {
      if (loginOtpStates.isDone) {
        try {
  
          await axios.post("/api/set-tokens", {
            token: loginOtpStates.response.data.token,
            refreshToken: loginOtpStates.response.data.refresh_token
          });
  
          setUserProfile(loginOtpStates.response.data);
          debugger;
          localStorage.setItem('isLogin', loginOtpStates.response.data.token);
  
          if (loginOtpStates.response.data.lastLogin == null) {
            router.push('/security');
          } else {
            router.push('/');
          }
        } catch (error) {
          console.error("Error setting tokens or during redirect:", error);
        }
      }
    };
  
    handleLogin();
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
              <OtpForm email={email}
                backFunc={backFunc}
                password={password}
                loginResponse={loginResponse} /> :
              ''
        }
      </div>
    </>
  );
}
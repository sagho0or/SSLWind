import React, { ChangeEvent, useState } from 'react';
import Link from 'next/link';
import { LoginFormProps } from '@/app/components/Login/Forms/LoginForm/loginForm.interface';
import IInput from '@/app/components/Common/Input';
import IButton from '@/app/components/Common/Button';
import Icons from '../../../../../../public/Icons';
import {GoogleLogin, GoogleOAuthProvider} from "@react-oauth/google";

export default function MobileLoginForm(props: LoginFormProps) {
  const [mobileNumber, setMobileNumber] = useState<string>('');
  const [isValid, setIsValid] = useState<boolean>();
  const [password, setPassword] = useState<string>('');
  const [inputType, setInputType] = useState('password');

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setMobileNumber(value);
    const mobileRegex = /^(\+98|0)?9\d{9}$/;
    setIsValid(mobileRegex.test(value));
  }
  function loginFunc(event: React.MouseEvent){
    event.preventDefault();
    props.confirmFunction(mobileNumber, password);
  }

  return (
    <form autoComplete={'off'}>
      <div className={'mt-10'}>
        <IInput inputId={'mobileNumber'}
                label={'Email'}
                value={mobileNumber}
                onChange={handleInputChange}
                style={'secondaryOutline'}
                type={'number'} />
      </div>
      <div className={'my-10 relative'}>
        <span
          className={'text-primary absolute right-0 text-xs cursor-pointer'}>Forgot password?</span>
        <IInput inputId={'password'}
                label={'password'}
                value={password}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setPassword(e.target.value)}
                style={'secondaryOutline'}
                type={inputType} />
        <div className={'absolute top-10 left-2 cursor-pointer'}
             onClick={() => setInputType(inputType == 'password' ? 'text' : 'password')}>
          <Icons name={'password'} />
        </div>
      </div>
      <div className={'mt-10'}>
        <IButton style={'primarySimple'}
                 disabled={!isValid || !password}
                 onClick={loginFunc}>
          <span className={'text-center'}>Login</span>
        </IButton>
        <div className={'mt-5'}>
          <span>Don't have an account?</span>
          <Link href={'/register'}
                className={'text-primary mr-2 cursor-pointer'}>Register</Link>
        </div>
        <div className={"mt-5"}>
          <GoogleOAuthProvider clientId="385994786159-cdn5f72dqkuhjoc1p6ibiv8kpg0vb2jm.apps.googleusercontent.com">
            <GoogleLogin
                onSuccess={credentialResponse => {
                  console.log(credentialResponse);
                }}
                onError={() => {
                  console.log('Login Failed');
                }}
            />
          </GoogleOAuthProvider>
        </div>
      </div>
    </form>
  );
}
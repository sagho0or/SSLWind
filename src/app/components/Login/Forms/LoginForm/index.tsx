import React, { ChangeEvent, useState } from 'react';
import Link from 'next/link';
import { LoginFormProps } from '@/app/components/Login/Forms/LoginForm/loginForm.interface';
import IInput from '@/app/components/Common/Input';
import IButton from '@/app/components/Common/Button';
import Icons from '../../../../../../public/Icons';
import {GoogleLogin, GoogleOAuthProvider} from "@react-oauth/google";

export default function MobileLoginForm(props: LoginFormProps) {
  const [email, setEmail] = useState<string>('');
  const [isValid, setIsValid] = useState<boolean>();
  const [password, setPassword] = useState<string>('');
  const [inputType, setInputType] = useState('password');

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setEmail(value);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValid(emailRegex.test(value));
  }
  function loginFunc(event: React.MouseEvent){
    event.preventDefault();
    props.confirmFunction(email, password);
  }

  return (
    <form autoComplete={'off'}>
      <div className={'mt-10'}>
        <IInput inputId={'email'}
                label={'Email'}
                value={email}
                onChange={handleInputChange}
                style={'secondaryOutline'}
                type={'email'} />
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
                className={'text-primary ml-2 cursor-pointer'}>Register</Link>
        </div>
      </div>
    </form>
  );
}
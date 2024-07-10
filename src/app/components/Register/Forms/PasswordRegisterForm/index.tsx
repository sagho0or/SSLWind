import Icons from '../../../../../../public/Icons';
import RegisterStepProgress from '../../RegisterStepProgress';
import IInput from '@/app/components/Common/Input';
import React, { ChangeEvent, useState } from 'react';
import IButton from '@/app/components/Common/Button';
import {
  PasswordRegisterFormInterface,
} from '@/app/components/Register/Forms/PasswordRegisterForm/passwordRegisterFormInterface';
import { useDispatch } from 'react-redux';
import { registerPasswordLoading } from '@/store/auth/register/registerPassword/action';
import isMobileView from "@/app/utils/isMobileView";
import checkPasswordFormat from "@/app/utils/checkPasswordFormat";

export default function PasswordRegisterForm(props: PasswordRegisterFormInterface) {
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [passwordType, setPasswordType] = useState<string>('password');
  const [confirmPasswordType, setConfirmPasswordType] = useState<string>('password');

  const dispatch = useDispatch();
  function passwordChange(e: ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
  }

  function sendPasswordFunc() {
    dispatch(registerPasswordLoading({
      password: btoa(password),
      re_password: btoa(confirmPassword),
      mobile: props.mobile,
      trackingId: props.registerIdentityResponse.token
    }))
  }


  return (
    <>
      {
          isMobileView &&
          <div className={'absolute top-10 cursor-pointer'} onClick={props.backFunc}>
            <Icons name={'left-arrow-key'}/>
          </div>
      }
      <div className={`relative ${isMobileView ? 'h-screen-190' : ''}` }>
        <RegisterStepProgress step={3} />
        <div className={'my-10 relative'}>
          <IInput inputId={'password'}
                  label={`password`}
                  type={passwordType}
                  value={password}
                  onChange={passwordChange}
                  style={'secondaryOutline'} />
          <div className={'absolute top-11 left-2 cursor-pointer'}
               onClick={() => setPasswordType(passwordType == 'password' ? 'text' : 'password')}>
            <Icons name={'password'} />
          </div>
        </div>
        <div className={'my-10 relative'}>
          <IInput inputId={'confirmPassword'}
                  label={`Repeat Password`}
                  type={confirmPasswordType}
                  value={confirmPassword}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setConfirmPassword(e.target.value)}
                  style={'secondaryOutline'} />
          <div className={'absolute top-11 left-2 cursor-pointer'}
               onClick={() => setConfirmPasswordType(confirmPasswordType == 'password' ? 'text' : 'password')}>
            <Icons name={'password'} />
          </div>
        </div>

        <div>
          <div className={'flex mb-2'}>
            <Icons name={checkPasswordFormat(password).hasCapitalAndSmall? 'register-password-check' : 'register-password-close'} />
            <p className={'mr-2' + ' ' +
                `${checkPasswordFormat(password).hasCapitalAndSmall? 'text-success' : 'text-error'}`}>At least one uppercase and one lowercase letter </p>
          </div>
          <div className={'flex mb-2'}>
            <Icons name={checkPasswordFormat(password).hasSpecialCharacters? 'register-password-check' : 'register-password-close'} />
            <p className={'mr-2' + ' ' + `${checkPasswordFormat(password).hasSpecialCharacters? 'text-success' : 'text-error'}`}>At least one special character, allowed characters: !@#$%^&*</p>
          </div>
          <div className={'flex mb-2'}>
            <Icons name={checkPasswordFormat(password).hasNumber? 'register-password-check' : 'register-password-close'} />
            <p className={'mr-2' + ' ' + `${checkPasswordFormat(password).hasNumber? 'text-success' : 'text-error'}`}>At least one number</p>
          </div>
          <div className={'flex mb-2'}>
            <Icons name={checkPasswordFormat(password).hasMinimumCharacterRequired? 'register-password-check' :'register-password-close'} />
            <p className={'mr-2' + ' ' + `${checkPasswordFormat(password).hasMinimumCharacterRequired? 'text-success' : 'text-error'}`}>At least 8 characters</p>
          </div>
        </div>
        
        <div className={`${isMobileView ?'absolute bottom-0': 'mt-4' } w-full`}>
          <IButton style={'primarySimple'}
                   disabled={!password || !confirmPassword || password !== confirmPassword
                       || Object.values(checkPasswordFormat(password)).includes(false)}
                   onClick={sendPasswordFunc}>
            <span className={'text-center'}>Submit</span>
          </IButton>
        </div>
      </div>
    </>
  );
}
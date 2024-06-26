import Icons from "../../../../../public/Icons";
import IInput from "@/app/components/Common/Input";
import React, {ChangeEvent, useEffect, useState} from "react";
import IButton from "@/app/components/Common/Button";
import checkPasswordFormat from "@/app/utils/checkPasswordFormat";
import {
    EditPasswordInterface
} from "@/app/components/Security/EditPassword/interface";
import {useDispatch, useSelector} from "react-redux";
import {editPasswordLoading} from "@/store/security/editPassword/action";
import toast from "react-hot-toast";
import IModal from "@/app/components/Common/Modal";
import isMobileView from "@/app/utils/isMobileView";

export default function EditPassword({setIsEditPasswordOpen, isEditPasswordOpen}: EditPasswordInterface) {
    const [passwordType, setPasswordType] = useState<string>('password');
    const [currentPassword, setCurrentPassword] = useState<string>('');
    const [newPassword, setNewPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [step, setStep] = useState<number>(1);

    const dispatch = useDispatch();
    const editPasswordStates = useSelector((state: any) => state.editPassword)

    const isAcceptable = () => {
        let arrayOfResponseValues = Object.values(checkPasswordFormat(newPassword))
        if (!arrayOfResponseValues.includes(false)) {
            return confirmPassword === newPassword
        }
    }

    function postNewPassword () {
        setIsEditPasswordOpen(false)
        dispatch(editPasswordLoading({
            current_password: btoa(currentPassword),
            new_password: btoa(newPassword),
            re_password: btoa(confirmPassword)
        }))
    }

    useEffect(() => {
        if(editPasswordStates.isDone) {
            toast.success('کلمه عبور با موفقیت تغییر کرد.')
        }
    }, [editPasswordStates]);

    return (
        <>
            <div className={'bg-secondary-01 px-3 py-9'+ ` ${isMobileView? 'space-y-3': 'rounded-xl'}`}>
                <h4 className={'font-semibold'}>کلمه عبور</h4>
                <div className={'flex w-full flex-wrap items-end gap-5'}>
                    <p className={'font-medium text-sm text-secondary w-162'}>با کلیک بر روی دکمه ویرایش می‌توانید کلمه عبور خود را تغییر دهید.</p>
                    <div className={'w-28'}>
                        <IButton style={'primaryOutline'} onClick={()=>setIsEditPasswordOpen(true)}>
                            <p className={'font-medium'}>ویرایش</p>
                        </IButton>
                    </div>
                </div>
            </div>
            {isEditPasswordOpen &&
                <IModal setIsModalOpen={setIsEditPasswordOpen}
                        hasCloseButton={true}
                        backGroundStyle={"bg-secondary-17 bg-opacity-40"}
                        customStyle={"relative w-screen p-4 m-auto py-7" + ' ' + `${isMobileView ? 'bottom-0 !absolute ' : 'rounded-b-2xl top-1/4'}`}>
                    <div className={'font-semibold space-y-5'}>
                        <div className={'bg-secondary-02 w-fit mx-auto p-3 rounded-xl'}>
                            <Icons name={'lock'}/>
                        </div>
                        <h3 className={'w-fit mx-auto'}>تغییر کلمه عبور</h3>
                        {step === 1 &&
                            <>
                                <IInput label={'کلمه عبور فعلی'}
                                        inputId={'currentPassword'}
                                        type={passwordType}
                                        onChange={(e: ChangeEvent<HTMLInputElement>) => setCurrentPassword(e.target.value)}
                                        suffix={
                                            <div className={'cursor-pointer'}
                                                 onClick={() => setPasswordType(passwordType == 'password' ? 'text' : 'password')}>
                                                <Icons name={'password'}/>
                                            </div>
                                        }
                                        value={currentPassword}
                                />
                                <IButton disabled={currentPassword === ''}
                                         onClick={() => setStep(2)}>
                                    تایید و ادامه
                                </IButton>
                            </>
                        }
                        {step === 2 &&
                            <>
                                <IInput label={'کلمه عبور جدید'}
                                        inputId={'newPassword'}
                                        type={passwordType}
                                        onChange={(e: ChangeEvent<HTMLInputElement>) => setNewPassword(e.target.value)}
                                        suffix={
                                            <div className={'cursor-pointer'}
                                                 onClick={() => setPasswordType(passwordType == 'password' ? 'text' : 'password')}>
                                                <Icons name={'password'}/>
                                            </div>
                                        }
                                        value={newPassword}
                                />
                                <IInput label={'تکرار کلمه عبور جدید'}
                                        inputId={'confirmPassword'}
                                        type={passwordType}
                                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                            setConfirmPassword(e.target.value)}
                                        suffix={
                                            <div className={'cursor-pointer'}
                                                 onClick={() => setPasswordType(passwordType == 'password' ? 'text' : 'password')}>
                                                <Icons name={'password'}/>
                                            </div>
                                        }
                                        value={confirmPassword}
                                        helper={
                                            <div>
                                                <div className={'flex mb-2'}>
                                                    <Icons
                                                        name={checkPasswordFormat(newPassword).hasCapitalAndSmall ? 'register-identity-done' : 'register-password-close'}/>
                                                    <p className={'mr-2' + ' ' +
                                                        `${checkPasswordFormat(newPassword).hasCapitalAndSmall ? 'text-success' : 'text-error'}`}>حداقل
                                                        یک حرف بزرگ و یک حرف کوچک</p>
                                                </div>
                                                <div className={'flex mb-2'}>
                                                    <Icons
                                                        name={checkPasswordFormat(newPassword).hasSpecialCharacters ? 'register-identity-done' : 'register-password-close'}/>
                                                    <p className={'mr-2' + ' ' + `${checkPasswordFormat(newPassword).hasSpecialCharacters ? 'text-success' : 'text-error'}`}>حداقل
                                                        یک کاراکتر خاص، کاراکتر‌های مجاز:
                                                        !@#$%^&*</p>
                                                </div>
                                                <div className={'flex mb-2'}>
                                                    <Icons
                                                        name={checkPasswordFormat(newPassword).hasNumber ? 'register-identity-done' : 'register-password-close'}/>
                                                    <p className={'mr-2' + ' ' + `${checkPasswordFormat(newPassword).hasNumber ? 'text-success' : 'text-error'}`}>حداقل
                                                        یک عدد</p>
                                                </div>
                                                <div className={'flex mb-2'}>
                                                    <Icons
                                                        name={checkPasswordFormat(newPassword).hasMinimumCharacterRequired ? 'register-password-done' : 'register-password-close'}/>
                                                    <p className={'mr-2' + ' ' + `${checkPasswordFormat(newPassword).hasMinimumCharacterRequired ? 'text-success' : 'text-error'}`}>حداقل
                                                        ۸ کاراکتر</p>
                                                </div>
                                            </div>
                                        }
                                />
                                <div className={'flex gap-x-3'}>
                                    <IButton style={'primaryOutline'}
                                             customStyle={'flex-1 border-secondary-02 min-w-32'}
                                             onClick={() => setStep(step - 1)}>
                                        <p className={"text-sm"}>مرحله قبل</p>
                                    </IButton>
                                    <IButton customStyle={'flex-2'}
                                             disabled={!isAcceptable()}
                                             onClick={postNewPassword}>
                                        <p>تایید و ثبت</p>
                                    </IButton>
                                </div>
                            </>
                        }
                    </div>
                </IModal>
            }
        </>
    )
}
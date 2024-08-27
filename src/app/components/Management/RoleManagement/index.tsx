import Icons from "../../../../../public/Icons";
import IInput from "@/app/components/Common/Input";
import React, { ChangeEvent, useEffect, useState } from "react";
import IButton from "@/app/components/Common/Button";
import checkPasswordFormat from "@/app/utils/checkPasswordFormat";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import IModal from "@/app/components/Common/Modal";
import isMobileView from "@/app/utils/isMobileView";
import { RoleManagementProps, User } from "./interface";
import PasswordInputWithToggle from "./PasswordInputWithToggle";

export default function RoleManagement() {
    const [users, setUsers] = useState<User[]>([
        // Initial users can be fetched from an API or predefined
        { email: "manager@example.com", password: "manager123" },
        { email: "user@example.com", password: "user123" },
    ]);
    const [newUser, setNewUser] = useState<User>({ email: '', password: '' });
    const [showPasswords, setShowPasswords] = useState<{ [key: number]: boolean }>({});
    const [passwordType, setPasswordType] = useState<string>('password');


    const handleAddUser = () => {
        if (newUser.email && newUser.password) {
            setUsers([...users, newUser]);
            setNewUser({ email: '', password: '' });
        }
    };

    const togglePasswordVisibility = (index: number) => {
        setShowPasswords({ ...showPasswords, [index]: !showPasswords[index] });
    };

    const dispatch = useDispatch();
    const editPasswordStates = useSelector((state: any) => state.editPassword)


    useEffect(() => {
        if (editPasswordStates?.isDone) {
            toast.success('Password has been changed successfully')
        }
    }, [editPasswordStates]);

    return (
        <>
            <div className={'bg-secondary-01 px-3 pb-9' + ` ${isMobileView ? 'space-y-3' : 'rounded-xl'}`}>
                <h4 className={'font-semibold center py-2 border-b-2 mb-5'}>Add New User</h4>
                <div className={'flex w-full flex-wrap items-end gap-5'}>

                    <IInput inputId={'email'}
                        label={'Email'}
                        value={newUser.email}
                        onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                        style={'secondaryOutline'}
                        type={'email'} containerCustomStyle= {'flex-1'}/>
                        
                    <IInput
                        label={'Password'}
                        inputId={'password'}
                        type={passwordType}
                        onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                        value={newUser.password}
                        containerCustomStyle= {'flex-1'}
                        suffix={
                            <div
                                className={'cursor-pointer'}
                                onClick={() => setPasswordType(passwordType === 'password' ? 'text' : 'password')}>
                                <Icons name={'password'} />
                            </div>
                        }
                    />
                    <IButton style={'primaryOutline'} onClick={handleAddUser}>
                        <p className={'font-medium'}>Add User</p>
                    </IButton>
                </div>
            </div>

            {/* List of Current Users */}
            <div className={'bg-secondary-01 px-3 py-9' + ` ${isMobileView ? 'space-y-3' : 'rounded-xl'}`}>
                <h4 className={'font-semibold center py-2 border-b-2 mb-5'}>Current Users</h4>
                <ul className="space-y-4">
                    {users.map((user, index) => (
                        <li key={index} className="flex justify-between items-center border-b border-secondary-02 py-2">
                            <span>{user.email}</span>
                            <PasswordInputWithToggle
                                password={user.password}
                                isVisible={showPasswords[index]}
                                onToggleVisibility={() => togglePasswordVisibility(index)}
                            />
                        </li>
                    ))}
                </ul>
            </div>


        </>
    )
}
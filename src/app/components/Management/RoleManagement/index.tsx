import Icons from "../../../../../public/Icons";
import IInput from "@/app/components/Common/Input";
import React, { useEffect, useState } from "react";
import IButton from "@/app/components/Common/Button";
import isMobileView from "@/app/utils/isMobileView";
import { User } from "./interface";
import PasswordInputWithToggle from "./PasswordInputWithToggle";
import { UserRole } from "@/store/userProfile/interface";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserManagementResponse } from "@/store/userManagement/new/slice";
import toast from "react-hot-toast";
import { updateUserRequest } from "@/store/userManagement/update/slice";
import { fetchUserList } from "@/store/userManagement/list/slice";
import { UserDtoResponse } from "@/store/userManagement/user.interface";

export default function RoleManagement() {
    const [users, setUsers] = useState<UserDtoResponse[]>([]);
    const [newUser, setNewUser] = useState<User>({ email: '', password: '', role: UserRole.Guest });
    const [showPasswords, setShowPasswords] = useState<{ [key: number]: boolean }>({});
    const [passwordType, setPasswordType] = useState<string>('password');
    const [isValid, setIsValid] = useState<boolean>();

    const dispatch = useDispatch();
    const userManagementState = useSelector((state: any) => state.userManagement);
    const updateUserState = useSelector((state: any) => state.updateUser);
    const userListState = useSelector((state: any) => state.userList);
    
    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setNewUser({ ...newUser, email: e.target.value })
        setIsValid(emailRegex.test(value));

    }
    useEffect(() => {
        dispatch(fetchUserList());
    }, []);

    useEffect(() => {
        if (userListState.isDone && userListState.response){
            if(userListState.response.data)
                setUsers(userListState.response.data)
        }
    }, [userListState.isDone, userListState.response]);
    
    useEffect(() => {
        if (userManagementState.isDone && userManagementState.response) {
            if (userManagementState.response.data.userId) {
                setUsers([...users, userManagementState.response.data]);
                setNewUser({ email: '', password: '', role: UserRole.Guest });
                toast.success('user has been added successfully');
            }
        }
    }, [userManagementState.isDone, userManagementState.response]);

    useEffect(() => {
        if (updateUserState.isDone && updateUserState.response) {
            toast.success('user has been updated successfully');
        }
    }, [updateUserState.isDone, updateUserState.response]);

    const handleAddUser = () => {
        if (isValid && newUser.email && newUser.password && newUser.role !== UserRole.Guest) {
            dispatch(fetchUserManagementResponse(newUser))
        }
    };

    const handleRoleChange = (index: number, newRole: UserRole) => {
        const updatedUsers = users.map((user, i) =>
            i === index ? { ...user, role: newRole } : user
        );
        setUsers(updatedUsers);
    };

    const handleUserEditSubmit = (index: number) => {
        debugger;
        const user = users[index];
        dispatch(updateUserRequest(user));

    };

    return (
        <>
            <div className={'bg-secondary-01 px-3 pb-9 mb-4' + ` ${isMobileView ? 'space-y-3' : 'rounded-xl'}`}>
                <h4 className={'font-semibold center py-2 border-b-2 mb-5'}>Add New User</h4>
                <div className={'flex w-full flex-wrap items-end gap-5'}>
                    <IInput inputId={'email'}
                        label={'Email'}
                        value={newUser.email}
                        onChange={handleInputChange}
                        style={'secondaryOutline'}
                        type={'email'} containerCustomStyle={'flex-1'} />

                    <IInput
                        label={'Password'}
                        inputId={'password'}
                        type={passwordType}
                        onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                        value={newUser.password}
                        containerCustomStyle={'flex-1'}
                        suffix={
                            <div
                                className={'cursor-pointer'}
                                onClick={() => setPasswordType(passwordType === 'password' ? 'text' : 'password')}>
                                <Icons name={'password'} />
                            </div>
                        }
                    />
                    <div className="flex-1">
                        <label className="font-semibold">
                            Role
                        </label>
                        <select
                            className="flex justify-between items-center h-12 text-sm font-bold p-2 mt-2 rounded-xl bg-transparent text-secondary-17 border border-secondary-02 focus-within:border-primary focus-within:border w-full my-4 cursor-pointer"
                            value={newUser.role}
                            onChange={(e) => setNewUser({ ...newUser, role: e.target.value as UserRole })}
                        >
                            <option value={UserRole.Guest} disabled>Select...</option>
                            <option value={UserRole.User}>User</option>
                            <option value={UserRole.Management}>Management</option>
                            <option value={UserRole.Admin}>Admin</option>
                            <option value={UserRole.Developer}>Developer</option>
                        </select>
                    </div>

                    <IButton style={'primaryOutline'}
                        disabled={!isValid || !newUser.password || !newUser.role}
                        onClick={handleAddUser}>
                        <p className={'font-medium'}>Add User</p>
                    </IButton>
                </div>
            </div>

            {/* List of Current Users */}
            <div className={'bg-secondary-01 px-3 py-9' + ` ${isMobileView ? 'space-y-3' : 'rounded-xl'}`}>
                <h4 className={'font-semibold center py-2 border-b-2 mb-5'}>Current Users</h4>
                <ul className="space-y-4">
                    {users.map((user, index) => (
                        <li key={index} className="flex md:items-center border-b border-secondary-02 py-2 md:flex-row md:justify-between	flex-col">
                            <div className="text-sm flex flex-1">
                                <Icons name={`${user.isActive ? 'active' : 'inactive'}`} />
                                <span className="ml-2">{user.email}</span>
                            </div>
                            <div className="flex flex-1  md:items-center md:flex-row flex-col">
                                {/* <PasswordInputWithToggle
                                    password={user.password}
                                    isVisible={showPasswords[index]}
                                    onToggleVisibility={() => togglePasswordVisibility(index)}
                                /> */}

                                <select
                                    className="md:my-0 my-2 border border-gray-300 rounded px-2 py-1 md:ml-2 text-xs py-2 cursor-pointer"
                                    value={user.role}
                                    onChange={(e) => handleRoleChange(index, e.target.value as UserRole)}
                                >
                                    <option value={UserRole.User}>User</option>
                                    <option value={UserRole.Management}>Management</option>
                                    <option value={UserRole.Admin}>Admin</option>
                                    <option value={UserRole.Developer}>Developer</option>
                                </select>
                                <IButton
                                    style={'primaryOutline'}
                                    onClick={() => handleUserEditSubmit(index)}
                                    customStyle={'md:ml-2 ml-0 h-auto py-1 text-xs rounded-md'}
                                >
                                    Save
                                </IButton>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

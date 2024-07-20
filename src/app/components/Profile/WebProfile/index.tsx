import React, {useEffect, useState} from "react";
import Sidebar from "@/app/components/Sidebar";
import {UserProfileResponseInterface} from "@/store/userProfile/interface";
import getUserProfileService from "@/app/services/getUserProfile.service";
import IButton from "@/app/components/Common/Button";
import Link from "next/link";
import moment from 'moment';

export default function WebProfileComponent() {
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);
    const [userProfile, setUserProfile] = useState<UserProfileResponseInterface>();

    const personalData = [
        {title: "Full Name", desc: userProfile?.full_name},
        {title: "Date of Birth", desc: userProfile?.birth_date?moment(userProfile?.birth_date).format('YYYY/MM/DD'):''},
        {title: "Phone Number", desc: userProfile?.mobile_number},
        {title: "Email", desc: userProfile?.email}
    ];
    const additionalData = [
        {title: "Postal Code", desc: `${userProfile?.postal_code ? userProfile?.postal_code : "------------"}`},
        {title: "Address", desc: `${userProfile?.address ? userProfile?.address : "------------"}`},
    ]

    useEffect(() => {
        getUserProfileService(true).then((res: any) => {
            setUserProfile(res);
        })

    }, []);

    return (
        <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}>
            <div>
                <div className={'bg-secondary-01 rounded-xl flex p-8'}>
                    <div className={'rounded-full w-18 h-18'}>
                        <img src={userProfile?.avatar_id || '/images/avatar.svg'} alt={userProfile?.first_name} width={72}
                             height={72}/>
                    </div>
                    <ul className={"flex flex-row justify-between items-center w-full ml-4"}>
                        {
                            personalData.map(({title, desc}, index) =>
                                (<li key={`personal-data-${index}`}>
                                    <p className={"text-secondary mb-2"}>{title}</p>
                                    <p>{desc}</p>
                                </li>))
                        }

                    </ul>
                </div>
                <div className={"mt-4 flex "}>
                    <div className={'bg-secondary-01 rounded-xl px-8 pt-8 w-2/3'}>
                        <h3 className={"font-semibold text-xl"}>More Information</h3>
                        <table className={"table-auto w-full"}>
                            <tbody>
                            {
                                additionalData.map(({title, desc}, index) =>
                                    (<tr key={`add-data-${index}`}
                                         className={`${additionalData.length - 1 !== index ? "border-secondary-02 border-b-2" : ""}`}>
                                        <td className={"py-8 w-36"}>{title}</td>
                                        <td className={"text-secondary"}>{desc}</td>
                                        <td className={"w-24 "}><IButton style={"primarySimple"}
                                                                         customStyle={"h-10"}
                                                                         onClick={() => {
                                                                         }}>Save</IButton></td>
                                    </tr>))
                            }
                            </tbody>
                        </table>
                    </div>
                    <div className={"ml-4 w-1/3"}>
                        <div className={"bg-secondary-01 rounded-xl  p-8"}>
                            
                                <h3 className={"font-semibold text-xl"}>Role</h3>
                                <div
                                    className={"inline-flex items-center justify-center px-2 py-1.5 ms-3 text-error bg-error-01 rounded-lg font-semibold text-sm"}>
                                    {`Access Level`}
                                </div>
                        </div>
                    </div>

                </div>
            </div>
        </Sidebar>
    )
}
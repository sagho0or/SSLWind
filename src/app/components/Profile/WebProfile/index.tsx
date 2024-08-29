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
        {title: "Full Name", desc: `${userProfile?.firstName} ${userProfile?.lastName}`},
        {title: "Date of Birth", desc: userProfile?.birthDate?moment(userProfile?.birthDate).format('YYYY/MM/DD'):''},
        {title: "Phone Number", desc: userProfile?.mobileNumber},
        {title: "Email", desc: userProfile?.email}
    ];
    const additionalData = [
        {title: "Postal Code", desc: `${userProfile?.postalCode ? userProfile?.postalCode : "------------"}`},
        {title: "Address", desc: `${userProfile?.address ? userProfile?.address : "------------"}`},
        {title: "Role", desc: userProfile?.role}
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
                        <img src={userProfile?.imageUrl || '/images/avatar.svg'} alt={userProfile?.firstName} width={72}
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
                    <div className={'bg-secondary-01 rounded-xl px-8 pt-8 w-full'}>
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

                </div>
            </div>
        </Sidebar>
    )
}
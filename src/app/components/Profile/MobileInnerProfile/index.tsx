import Icons from "../../../../../public/Icons";
import React, { useEffect } from "react";
import { UserProfileResponseInterface } from "@/store/userProfile/interface";
import moment from 'moment';
import IButton from "@/app/components/Common/Button";

export default function MobileInnerProfile({ userProfile, setShowInnerProfile }:
    { userProfile: UserProfileResponseInterface, setShowInnerProfile: (a: boolean) => void }) {

    useEffect(() => {
        console.log(userProfile);
        debugger;
    }, []);

    const personalData = [
        { title: "Full name", desc: userProfile?.full_name },
        { title: "Birth Date", desc: userProfile?.birth_date ? moment(userProfile?.birth_date).format('YYYY/MM/DD') : '' },
        { title: "PhoneNumber", desc: userProfile?.mobile_number },
        { title: "Email", desc: userProfile?.email }
    ];
    const additionalData = [
        { title: "Postal code", desc: `${userProfile?.postal_code ? userProfile?.postal_code : "------------"}` },
        { title: "Address", desc: `${userProfile?.address ? userProfile?.address : "------------"}` },
    ]


    return (
        <>

            <div className={"fixed pt-3 pb-3 w-full bg-white"}>
                <h3 className={"font-semibold text-xl text-center"}>Profle</h3>
                <div onClick={() => setShowInnerProfile(false)}
                    className={'absolute top-4 left-2 cursor-pointer'}>
                    <Icons name={'right-arrow-key'} />
                </div>
            </div>
            <div className={"mt-8"}>
                <ul className={"mt-4 "}>
                    <li className={'flex justify-between items-center p-4 border-b-2 border-secondary-02 cursor-pointer'}>
                        <p >Photo</p>
                        <div className={'rounded-full w-12 h-12'}>
                            <img src={userProfile?.imageUrl || '/images/avatar.svg'} alt={userProfile?.full_name} width={48}
                                height={48} />
                        </div>
                    </li>
                    {
                        personalData.map(({ title, desc }, index) =>
                        (<li key={`personal-data-${index}`}
                            className={"flex justify-between p-4 border-b-2 border-secondary-02"}>
                            <p className={" mb-2"}>{title}</p>
                            <p className={"text-secondary"}>{desc}</p>
                        </li>))
                    }
                </ul>
            </div>
            <div className={'w-full h-3 bg-secondary-02'} />
            <div className={"p-4"}>
                <h3 className={"font-semibold text-xl text-center pb-2"}>Information</h3>
                <ul>
                    {
                        additionalData.map(({ title, desc }, index) =>
                        (<li key={`add-data-${index}`}
                            className={`${additionalData.length - 1 !== index ? "border-secondary-02 border-b-2" : ""} 
                                 flex justify-between p-4`}>
                            <p className={""}>{title}</p>
                            <p className={"text-secondary flex"}>{desc}
                                <Icons name={'direction-left-gray'} />
                            </p>
                        </li>))
                    }
                </ul>
            </div>
        </>
    )
}
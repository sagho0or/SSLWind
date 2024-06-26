import Icons from "../../../../../public/Icons";
import React from "react";
import {UserProfileResponseInterface} from "@/store/userProfile/interface";
import moment from "jalali-moment";
import IButton from "@/app/components/Common/Button";

export default function MobileInnerProfile({userProfile, setShowInnerProfile}:
{ userProfile: UserProfileResponseInterface, setShowInnerProfile: (a:boolean)=>void }) {

    const personalData = [
        {title: "نام و نام خانوادگی", desc: userProfile?.full_name},
        {title: "تاریخ تولد", desc: userProfile?.birth_date?moment(userProfile?.birth_date).locale('fa').format('YYYY/MM/DD'):''},
        {title: "کدملی", desc: userProfile?.national_id},
        {title: "شماره تلفن", desc: userProfile?.mobile_number},
        {title: "ایمیل", desc: userProfile?.email}
    ];
    const additionalData = [
        {title: "کد پستی", desc: `${userProfile?.zip_code ? userProfile?.zip_code : "------------"}`},
        {title: "آدرس", desc: `${userProfile?.address ? userProfile?.address : "------------"}`},
        {title: "تلفن ثابت", desc: `${userProfile?.phone_number ? userProfile?.phone_number : "------------"}`},
    ]


    return (
        <>
            <div onClick={()=>setShowInnerProfile(false)}
                 className={'absolute top-10 cursor-pointer'}>
                <Icons name={'left-arrow-key'}/>
            </div>
            <div className={"mt-12"}>
                <h3 className={"font-semibold text-xl text-center"}>حساب کاربری</h3>
                <ul className={"mt-4 "}>
                    <li className={'flex justify-between items-center p-4 border-b-2 border-secondary-02 cursor-pointer'}>
                        <p >آواتار</p>
                        <div className={'rounded-full w-12 h-12'}>
                            <img src={userProfile?.avatar_id || '/images/avatar.svg'} alt={'maryam'} width={48}
                                 height={48}/>
                        </div>
                    </li>
                    {
                        personalData.map(({title, desc}, index) =>
                            (<li key={`personal-data-${index}`}
                                 className={"flex justify-between p-4 border-b-2 border-secondary-02"}>
                                <p className={" mb-2"}>{title}</p>
                                <p className={"text-secondary"}>{desc}</p>
                            </li>))
                    }
                </ul>
            </div>
            <div className={'w-full h-3 bg-secondary-02'}/>
            <div className={"pt-4"}>
                <h3 className={"font-semibold text-xl"}>اطلاعات تکمیلی</h3>
                <ul>
                    {
                        additionalData.map(({title, desc}, index) =>
                            (<li key={`add-data-${index}`}
                                 className={`${additionalData.length - 1 !== index ? "border-secondary-02 border-b-2" : ""} 
                                 flex justify-between p-4`}>
                                <p className={""}>{title}</p>
                                <p className={"text-secondary flex"}>{desc}
                                    <Icons name={'direction-left-gray'}/>
                                </p>
                            </li>))
                    }
                </ul>
            </div>
        </>
    )
}
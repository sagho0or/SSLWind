import Icons from "../../../../../public/Icons";
import React, { useEffect } from "react";
import IButton from "@/app/components/Common/Button";

export default function MobileInnerSetting({ setShowInnerProfile}:
{  setShowInnerProfile: (a:boolean)=>void }) {

    return (
        <>
            <div onClick={()=>setShowInnerProfile(false)}
                 className={'absolute top-10 cursor-pointer'}>
                <Icons name={'left-arrow-key'}/>
            </div>
            <div className={"mt-12"}>
                <h3 className={"font-semibold text-xl text-center"}>Chat</h3>
                
            </div>
            
        </>
    )
}
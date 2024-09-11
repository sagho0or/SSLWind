'use client'
import React, { useState } from "react";
import Icons from "../../../../../public/Icons";
import ReactMarkdown from "react-markdown";
import EditPassword from "../EditPassword";

export default function MobileSecurityComponent({ setShowInnerComponent }:
    { setShowInnerComponent: (a: boolean) => void }) {

    const [isEditPasswordOpen, setIsEditPasswordOpen] = useState<boolean>(false);

    return (
        <>
            <div className={"fixed pt-3 pb-3 w-full bg-white"}>
                <h3 className={"font-semibold text-xl text-center"}>Security</h3>

                <div onClick={() => { setShowInnerComponent(false) }}
                    className={'absolute top-4 left-2 cursor-pointer'}>
                    <Icons name={'right-arrow-key'} />
                </div>
            </div>
            <div className={"pt-8 h-full flex flex-1 flex-col"}>
                <EditPassword setIsEditPasswordOpen={setIsEditPasswordOpen} isEditPasswordOpen={isEditPasswordOpen} />
            </div>
        </>
    );
}

'use client'
import React, {ReactNode, useEffect, useState} from "react";
import isMobileView from "@/app/utils/isMobileView";
import Header from "@/app/components/Header/webHeader";
import Footer from "@/app/components/Footer";

export default function ClientWrapper({children}: { children: ReactNode }) {
    const [load, setLoad] = useState<boolean>(false);
    useEffect(() => {
        setLoad(true)
    }, [])
    return (
        <>{
            load &&
            <>{
                isMobileView ?
                    <div className={'min-h-screen'}>
                        {children}
                    </div>
                    :
                    <>
                        <Header/>
                        <div className={"pt-20 h-screen "}>
                            {children}
                        </div>
                    </>}
            </>

        }</>
    )
}
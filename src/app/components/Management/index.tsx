'use client'
import Icons from "../../../../public/Icons";
import { useRouter } from "next/navigation";
import isMobileView from "@/app/utils/isMobileView";
import { useState } from "react";
import Sidebar from "@/app/components/Sidebar";
import defaultSidebarStatus from "@/app/utils/defaultSidebarStatus";
import RoleManagement from "./RoleManagement";

export default function Management() {

    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(defaultSidebarStatus);
    const router = useRouter();


    return (
        <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}
            children={<>
                <div className={'text-secondary-17 bg-secondary-02 space-y-5' + `${isMobileView ? ' w-screen h-screen' : ''}`}>
                    <div className={'bg-secondary-01 px-3 py-9' + ` ${isMobileView ? 'space-y-3' : 'hidden'}`}>
                        {isMobileView &&
                            <div className={'mb-8'}>
                                <button onClick={router.back} className={'absolute'}>
                                    <Icons name={'right-arrow-key'} />
                                </button>
                                <h1 className={'font-bold w-fit m-auto'}>Management</h1>
                            </div>
                        }

                    </div>

                    <RoleManagement />

                </div>


            </>} />
    )
}
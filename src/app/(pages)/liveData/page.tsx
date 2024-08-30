'use client'
import Sidebar from "@/app/components/Sidebar";
import { useShowInnerComponent } from "@/app/ShowInnerComponentContext";
import isMobileView from "@/app/utils/isMobileView";
import Icons from "../../../../public/Icons";
import { useRouter } from "next/navigation";
import { useState } from "react";
import defaultSidebarStatus from "@/app/utils/defaultSidebarStatus";
import LiveData from "@/app/components/LiveData";

export default function LiveDataPage() {
    const { setShowInnerComponent } = useShowInnerComponent();
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(defaultSidebarStatus);
    const router = useRouter();

    return (
        <>
        {isMobileView ? (
            <div className={'text-secondary-17 bg-secondary-02' + `${isMobileView ? ' w-screen h-screen' : ''}`}>
            <div className={'bg-secondary-01 px-3 py-9' + ` ${isMobileView ? 'space-y-3' : 'hidden'}`}>
                {isMobileView &&
                    <div className={'mb-8'}>
                        <button 
                        className={'absolute'}
                        onClick={() => { setShowInnerComponent(false)}}
                        >
                            <Icons name={'right-arrow-key'} />
                        </button>
                        <h1 className={'font-bold w-fit m-auto'}>Management</h1>
                    </div>
                }

            </div>

            <LiveData/>

        </div>
          
        ) : (
            <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}
            children={<>
                
                <LiveData/>

            </>} />
        )}
      </>

        
        
    )
}
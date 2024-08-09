import React, { useEffect, useState, useRef } from "react";
import Sidebar from "@/app/components/Sidebar";


export default function WebSettingComponent() {
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);


    return (
        <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}>
            <div className="flex flex-col">
                
            </div>
        </Sidebar>
    );
}

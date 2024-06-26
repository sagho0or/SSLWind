import {ReactNode} from "react";

export interface SidebarInterface {
    isSidebarOpen: boolean;
    setIsSidebarOpen: (arg: boolean)=>void;
    children: ReactNode;
}
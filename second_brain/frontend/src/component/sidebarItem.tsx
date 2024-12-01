import { ReactElement } from "react";
import { Plus } from "../icons/plus";

interface propsSidebar{
    text:string;
    link:string;
    StartIcon:ReactElement;
}

export function SidebarItem({text,link,StartIcon}:propsSidebar){

    return <div className="text-button-beta text-2xl flex my-2 mt-3"> 
    <div className="pt-1.5 size-6 mr-4 ml-7">
    {StartIcon}
    </div>
    {text}
    </div>
}
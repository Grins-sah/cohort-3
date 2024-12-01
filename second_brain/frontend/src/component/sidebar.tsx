import { Brain } from "../icons/brain";
import { Twitter } from "../icons/twitter";
import { Youtube } from "../icons/youtube";
import { SidebarItem } from "./sidebarItem";

export function SideBar(){
    return <div className="h-screen w-72 bg-white border-r fixed left-0 top-0 ">
        <div className="flex m-2 mb-7">
        <Brain/>
        <div className="text-3xl  font-bold">
            Brainly
        </div>
        </div>
        <SidebarItem StartIcon={<Twitter/>} text="Tweets" />
        <SidebarItem StartIcon={<Youtube/>} text="Youtube"/>
    </div>
}
import { Button } from "./component/button";
import { Card } from "./component/card";
import { SideBar } from "./component/sidebar";
import { Plus } from "./icons/plus";
import { Share } from "./icons/share";
import { AppContents } from "./pages/Addcontend";


function App(){
  return<div className="bg-button-back h-screen flex w-screen">
    <SideBar/>
    <div className="w-full ml-72">
    <div className="flex justify-between w-full">
    <div className="ml-4 p-1 text-3xl  mt-5 font-bold">All Notes</div>
    <div>
    <div className="flex justify-end m-3 p-1">    
    <Button variant="secondary" text="Share Brain"  StartIcon={<Share/>} />
    <Button variant="primary" text="Add Content"
    StartIcon={<Plus/>}  />
    </div>
    </div>
    </div>
    <div className="flex m-1 ">

    <Card title="Project Idea" link="https://x.com/kirat_tw/status/1633685473821425666" type="twitter" />
    <Card title="Project Idea" link="https://www.youtube.com/embed/ofHGE-85EIA?si=KT0v3PDLDpU4FJ5s" type="youtube" />
    </div>
    <AppContents/>
  </div>
  </div>

}
export default App;

import { useRef, useState } from "react";
import { Trash } from "../icons/delete";
import { Docs } from "../icons/document";
import { Share } from "../icons/share";
import { Card } from "../component/card";
import { Button } from "../component/button";
import { Plus } from "../icons/plus";
function Display({status,typeRef,linkRef,titleRef}){
    return status?<div>
        <Card type={typeRef.current.value} link={linkRef.current.value} title={titleRef.current.value}/>
    </div>:<div>
    </div>
}

export function AppContents() {
    const typeRef = useRef();
    const linkRef = useRef();
    const titleRef = useRef();
    const[status,setStatus] = useState(false);
    return <div className="flex m-1">
        <div className="bg-white rounded-md w-fit h-fit border-gray-200 border">
            <div className="flex justify-between">
                <div className="flex m-1 my-1 py-1">
                    <button className="pr-4 pl-2"><Docs /></button>
                    <input ref={titleRef} type="text" name="" id="" defaultValue={" "}
                       className="bg-white border border-grey-200" />

                </div>
                <div className="flex m-1 my-1 py-1">
                    <button ><Share /></button>
                    <button className="px-3"><Trash /></button>
                </div>


            </div>
            
            <select ref={typeRef} multiple id="countries_multiple" className="w-full">
    <option selected>Choose Type</option>
    <option value="youtube">YouTube</option>
    <option value="twitter">Twitter</option>
  </select>
  <input  ref={linkRef} type="text" name="" id=""  className="bg-white border border-grey-200 w-full " placeholder="Link" />            {/* <Visual type={props.type} link={props.link} /> */}
    <div className="flex">
  <Button variant="primary" text="Add Post" StartIcon={<Plus/>} fn={()=>{
    setStatus(true);
  }}/>
  <Button variant="primary" text="Delete" StartIcon={<Trash/>}fn={()=>{
    setStatus(false);
  }} />
  </div>

        </div>
        <Display linkRef={linkRef} titleRef={titleRef} typeRef={typeRef} status={status} />
    </div>
}
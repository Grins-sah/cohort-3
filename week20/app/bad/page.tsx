"use client"
import { useState } from "react";
export default function (){
    const [count,setCount] = useState(0);
    return <div>
        {count}
        <br/>

        <button className="border-2 bg-orange-400 text-black rounded p-2 m-2" onClick={()=>{
            setCount(c=>c+1)
        }}>count change</button>
    </div>
}
"use client";

import axios from "axios";
import { useRef } from "react";

export default function Signup(){
    const userRef = useRef();
    const passref = useRef();
    return <div className="w-screen h-screen flex justify-center items-center bg-black">
        <input type="text" name="" id="" placeholder="name" ref={userRef} />
        <input type="text" name="" id="" placeholder="password" ref={passref} />
        <button onClick={()=>{
            axios.post('http://localhost:3000/api/signup',{
                name:userRef.current.value,
                password:passref.current.value
            })
        }}>
            Sign in
        </button>
    </div>
}
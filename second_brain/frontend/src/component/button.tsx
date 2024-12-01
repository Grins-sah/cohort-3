import { ReactElement } from "react";

interface ButtonProps {
    variant :"primary"|"secondary";
    text:string;
    StartIcon :ReactElement;
    fn:()=>void;
}
const variantClass = {
    primary:"bg-button-primary text-white",
    secondary:"bg-button-secondary text-blue-700 "
}
const defaults  = "px-4 py-2 m-2 rounded-lg text-white flex justify-items-center	";
export function Button({variant,text,StartIcon,fn}:ButtonProps){
    
    return <button onClick={fn} className={variantClass[variant]+" "+defaults}>
        <div className="px-1">

        {StartIcon }
        </div>

        
        {text}
    </button>
}
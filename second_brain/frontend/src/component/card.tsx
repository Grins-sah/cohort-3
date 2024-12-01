import { ReactElement } from "react"
import { Share } from "../icons/share";
import { Trash } from "../icons/delete";
import { Docs } from "../icons/document";

interface cardProps{
    link:string;
    title:string;
    type:"twitter"| "youtube";
}
function Visual(props:{type:"youtube"|"twitter",
    link:string
}){
    if(props.type=="youtube"){
        return  <iframe className="w-72 pt-2 px-1 rounded-lg" src={props.link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    }
    else{
        return <blockquote className="twitter-tweet">
  <a href={props.link.replace("x.com","twitter.com")}></a> 
</blockquote>    }
}


export function Card(props:cardProps){
    return <div className="bg-white rounded-md w-72 h-fit border-gray-200 border">
        <div className="flex justify-between">
            <div className="flex m-1 my-1 py-1">
                <button className="pr-4 pl-2"><Docs/></button>
                {props.title}
            </div>
            <div className="flex m-1 my-1 py-1">
            <button ><Share/></button>
            <button className="px-3"><Trash/></button>
            </div>
         
            
        </div>
        <Visual type={props.type} link={props.link}/>

    </div>

}
import { useEffect, useRef, useState } from "react";

function App(){
  const [message,setMessage] = useState([]);
  const [socket,setSocket] = useState();
  const inpuRef = useRef();
  function sendfn(){
    if(socket){
      socket.send(JSON.stringify({
        type:"chat",
        payload:{
          "message":inpuRef.current.value
        }
      }))
      inpuRef.current.value="";
    }
  }

  useEffect(()=>{
    const ws = new WebSocket("ws://localhost:8000");
    //@ts-ignore
    ws.onopen = (ev)=>{
      setSocket(ws);
      ws.send(JSON.stringify({
        "type": "join",
        "payload": {
          "roomId": "red"
        }

    }))

    console.log("Success")
    }
    ws.onmessage = (ev)=>{
      //@ts-ignore
      setMessage(e=>{
        return [...e,ev.data];
      });
      console.log(message);
    }




  },[])
  return <div className="bg-black h-screen
  flex flex-col">
    <div className="md:h-[90%]  h-[95%]  p-2 m-2 border-2 border-white	flex flex-col text-white">
      {message.map(e=>{
        return <span className="bg-purple-800 text-white p-2 m-1 w-fit rounded-lg ">
          {e}
        </span>
      })}
    </div>
    <div className="md:h-[10%]  h-[10%] border-2 border-white m-2
    p-2 flex justify-between">
      <input type="text" name="" id="" ref={inpuRef} className="w-3/4 h-full bg-black border-2 text-3xl text-white" placeholder="Write your message here" />
      <button className="bg-purple-800 mr-2 m-1 w-[20%] rounded-lg text-3xl p-1 text-white hover:border-2 border-indigo-400 active:bg-purple-900 "onClick={sendfn}  >
        Send
      </button>

    </div>
    
  </div>
}
export default App;
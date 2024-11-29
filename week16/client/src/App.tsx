import { useEffect, useRef, useState } from "react";

function App(){
  const userRef = useRef();
  const [socket,setSocket] = useState();
  const [data,setData] = useState("");

  useEffect(()=>{
    const ws = new WebSocket("ws://localhost:8000");
    setSocket(ws);
    ws.onmessage = ev=>{
      setData(ev.data);
      setTimeout(()=>{
        setData("")
      },2000);
    }
  },[])
  function sendMsg(){
    if(!socket){
      return;
    }
    //@ts-ignore
    socket.send(userRef.current.value);
  }
  return <div>
    <input type="text" name="" id="" ref={userRef} placeholder="Message..." />
    <button onClick={sendMsg} >Click me</button>
    {data}
  </div>
}

export default App;
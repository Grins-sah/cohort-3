import WebSocket,{WebSocketServer} from 'ws';
const wss = new WebSocketServer({port:8000});

//event handler
wss.on("connection",function(socket){
    console.log("User connected");
    socket.send("Hello");
    socket.on("message",(e)=>{
        const data:string=e.toString();
        if(data ==="ping"){
            socket.send("pong");
        }
    })
})

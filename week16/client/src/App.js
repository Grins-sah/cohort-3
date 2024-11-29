"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
function App() {
    const userRef = (0, react_1.useRef)();
    const [socket, setSocket] = (0, react_1.useState)();
    (0, react_1.useEffect)(() => {
        const ws = new WebSocket("ws://localhost:8000");
        setSocket(ws);
        ws.onmessage = ev => {
            alert(ev.data);
        };
    }, []);
    function sendMsg() {
        if (!socket) {
            return;
        }
        //@ts-ignore
        socket.send("ping");
    }
    return <div>
    <input type="text" name="" id="" ref={userRef} placeholder="Message..."/>
    <button onClick={sendMsg}>Click me</button>
  </div>;
}
exports.default = App;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8000 });
//event handler
wss.on("connection", function (socket) {
    console.log("User connected");
    socket.send("Hello");
    socket.on("message", (e) => {
        const data = e.toString();
        if (data === "ping") {
            socket.send("pong");
        }
    });
});

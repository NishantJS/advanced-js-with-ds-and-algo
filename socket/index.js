import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8000 });

wss.on("connection", (ws) => {
  // setInterval(() => ws.send("Hello"), 1000);

  ws.on("message", function message(data) {
    console.log("received: %s", data);
    ws.send(data?.toString()?.toUpperCase());
  });

  ws.on("close", () => {
    console.log("connection terminates");
  });
});

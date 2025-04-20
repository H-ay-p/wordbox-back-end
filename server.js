const WebSocket = require("ws");
const wss = new WebSocket.Server({ port: 3001 });

console.log("running");
wss.on("connection", function connection(ws) {
  console.log("A player connected");

  ws.on("message", function incoming(message) {
    console.log("received: %s", message);

    wss.clients.forEach((client) => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });

  ws.send("testing");
});

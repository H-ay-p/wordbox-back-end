// const WebSocket = require("ws");
// const wss = new WebSocket.Server({ port: 3001 });

// console.log("running");
// wss.on("connection", function connection(ws) {
//   console.log("A player connected");

//   ws.on("message", function incoming(message) {
//     console.log("received: %s", message);

//     wss.clients.forEach((client) => {
//       if (client !== ws && client.readyState === WebSocket.OPEN) {
//         client.send(message);
//       }
//     });
//   });

//   ws.send("testing");
// });

const WebSocket = require("ws");
const wss = new WebSocket.Server({ port: 3001 });

let players = {};
let currentTurn = 1; // Player 1 starts first

console.log("running");
wss.on("connection", function connection(ws) {
  // Assign player number (1 or 2)
  const playerNumber = Object.keys(players).length < 1 ? 1 : 2;
  players[playerNumber] = ws;

  console.log(`Player ${playerNumber} connected`);
  ws.send(
    JSON.stringify({
      type: "player_assignment",
      playerNumber: playerNumber,
      currentTurn: currentTurn,
    })
  );

  // Notify other player about new connection
  if (playerNumber === 2) {
    players[1].send(
      JSON.stringify({
        type: "opponent_connected",
      })
    );
  }

  ws.on("message", function incoming(message) {
    try {
      const data = JSON.parse(message);
      console.log("Server received:", data);

      if (data.type === "letter") {
        // Broadcast to all other clients
        wss.clients.forEach((client) => {
          if (client !== ws && client.readyState === WebSocket.OPEN) {
            console.log("Server broadcasting letter to another client");
            client.send(JSON.stringify(data));
          }
        });
      }
    } catch (error) {
      console.error("Server message error:", error);
    }
    const data = JSON.parse(message);
    // Handle turn-based logic
    if (data.type === "move" && data.playerNumber === currentTurn) {
      console.log(`Player ${currentTurn} made a move`);

      // Broadcast move to both players
      Object.entries(players).forEach(([number, client]) => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(
            JSON.stringify({
              type: "game_update",
              move: data.move,
              nextTurn: currentTurn === 1 ? 2 : 1,
            })
          );
        }
      });

      // Switch turns
      currentTurn = currentTurn === 1 ? 2 : 1;
    }
  });

  ws.on("close", () => {
    console.log(`Player ${playerNumber} disconnected`);
    delete players[playerNumber];
  });
});

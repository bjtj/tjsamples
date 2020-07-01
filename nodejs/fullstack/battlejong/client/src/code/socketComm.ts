import React from "react";

export function createSocketComm(inParentComponent: React.Component) {
  const connection: WebSocket = new WebSocket("ws://localhost:8080");

  connection.onopen = () => {
    console.log("Connection opened to server");
  };

  connection.onerror = (error) => {
    console.log(`WebSocket error: ${error}`);
  };

  connection.onmessage = function (inMessage: any) {
    console.log(`WS received: ${inMessage.data}`);

    const msgParts: string[] = inMessage.data.split("_");
    const message: string = msgParts[0];

    switch (message) {
      case "connected":
        this.state.handleMessage_connected(msgParts[1]);
        break;
      case "start":
        this.state.handleMessage_start(JSON.parse(msgParts[1]));
        break;
      case "update":
        this.state.handleMessage_update(msgParts[1], parseInt(msgParts[2]));
        break;
      case "gameOver":
        this.state.handleMessage_gameOver(msgParts[1]);
        break;
      default:
        break;
    }
  }.bind(inParentComponent);

  this.send = function(inMessage: string) {
      console.log(`WS sending: ${inMessage}`);
      connection.send(inMessage);
  };

  return this;
}

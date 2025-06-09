import openSocket from "socket.io-client";
import { getBackendUrl } from "../config";

function connectToSocket() {
  const token = localStorage.getItem("token");
  return openSocket(getBackendUrl(), {
    transports: ["websocket", "polling", "flashsocket"],
    auth: {
      token: JSON.parse(token),
    },
  });
}

export default connectToSocket;

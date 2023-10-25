// SocketContext.js
import React, { createContext, useState, useEffect, useContext } from "react";
import io from "socket.io-client";
import { socket as SC } from "../config/Api";
import { useUser } from "./UserProvider";

const SocketContext = createContext();

let socket = io(`${SC}`);

export const useSocket = () => useContext(SocketContext);

const SocketProvider = ({ children }) => {
  const { user } = useUser();
  useEffect(() => {
    socket.on("psychConnected", (data) => {
      console.log(data.message);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    if (user) {
      socket.emit("psyConnection", { psychId: user._id });
    }
  }, [user]);

  return (
    <SocketContext.Provider
      value={{
        socket,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};

export default SocketProvider;

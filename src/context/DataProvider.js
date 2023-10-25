import React, { useContext, useEffect, useState } from "react";
import chats from "../assets/constants/messages.json";
import { useSocket } from "./SocketProvider";
import { useUser } from "./UserProvider";
const DataContext = React.createContext({});

export const useData = () => useContext(DataContext);

const DataProvider = ({ children }) => {
  const [chats, setChats] = useState([]);
  const [selectedChat, setSelectedChat] = useState("");
  const { socket } = useSocket();
  const { user } = useUser();
  useEffect(() => {
    socket.on("updateAllChats", (data) => {
      console.log(data);
      setChats(data);
    });
    socket.on("updatePsychChat", (data) => {
      if (chats.length === 0) {
        setChats([data]);
      } else {
        setChats((prev) => [data, ...prev]);
      }
    });
  }, []);
  useEffect(() => {
    if (user) {
      socket.emit("psychFetchAllChats", { psychiatristId: user._id });
    } else {
      setChats([]);
    }
  }, [user]);
  return (
    <DataContext.Provider value={{ chats, setSelectedChat, selectedChat }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;

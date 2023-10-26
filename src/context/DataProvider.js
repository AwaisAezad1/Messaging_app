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
      const chatId = data["_id"];
      console.log(chats.length);
      if (chats.length) {
        const filteredChats = chats.filter(
          (element) => element["_id"] !== chatId
        );
        console.log(filteredChats);
        setChats([data, ...filteredChats]);
      } else {
        setChats([data]);
      }
    });
  }, [chats, socket]);
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

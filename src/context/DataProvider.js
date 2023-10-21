import React, { useContext, useState } from "react";
import chats from "../assets/constants/messages.json";
const DataContext = React.createContext({});

export const useData = () => useContext(DataContext);

const DataProvider = ({ children }) => {
  const [selectedChat, setSelectedChat] = useState("");
  return (
    <DataContext.Provider value={{ chats, setSelectedChat, selectedChat }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;

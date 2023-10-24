import React, { useContext, useState } from "react";
import { api } from "../config/Api";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const UserContext = React.createContext({});

export const useUser = () => useContext(UserContext);

const UserProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  console.log(api);

  async function signUp(email, password, fullName, phoneNumber, licenseNumber) {
    try {
      const response = await axios.post(`${api}/psychiatrist/signup`, {
        email: email,
        password: password,
        fullName: fullName,
        phoneNumber: phoneNumber,
        licenseNumber: licenseNumber,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  async function login(email, password) {
    try {
      const response = await axios.post(`${api}/psychiatrist/login`, {
        email: email,
        password: password,
      });
      console.log(response.data);
      setUser(response.data.psychiatrist);
      navigate("/Messages");
    } catch (error) {
      console.error(error);
    }
  }
  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ signUp, login, logout, user }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

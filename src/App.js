import React from "react";
import { Route, Routes } from "react-router-dom";
import Messages from './pages/Messages'
import SignIn  from './components/Signin';
import Auth from './components/Auth'
import color from './assets/constants/color.json'


function App() {
  return (
    <div style={{background:color.primary}} >
      <Routes>
        <Route path="/" element={<Auth/>}/>
        <Route path="/Signin" element={<SignIn/>}/>
        <Route path="/Messages" element={<Messages/>} />
      </Routes>
    </div>
  );
}

export default App;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Messages from './pages/Messages';
import SignIn from './components/Signin';
import Auth from './components/Auth';
import PrivateRoute from './context/PrivateRoute';

function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/Signin" element={<SignIn />} />
          <Route element={<PrivateRoute/>}><Route path="/Messages" element={<Messages />} /></Route>
        </Routes>
    </div>
  );
}

export default App;

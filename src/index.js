import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import DataProvider from "./context/DataProvider";
import UserProvider from "./context/UserProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <UserProvider>
      <DataProvider>
        <App />
      </DataProvider>
    </UserProvider>
  </BrowserRouter>
);

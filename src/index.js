import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import DataProvider from "./context/DataProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <DataProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </DataProvider>
);

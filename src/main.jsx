import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ItemsProvider from "./context/ItemContext.jsx";
import AkunProvider from "./context/AkunContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ItemsProvider>
        <AkunProvider>
          <App />
        </AkunProvider>
      </ItemsProvider>
    </BrowserRouter>
  </React.StrictMode>
);

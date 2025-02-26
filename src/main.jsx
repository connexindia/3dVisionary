import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
// import "./styles.css"; // Ensure this file exists for styling
import "./index.css"; // Ensure this file exists for styling

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter> {/* Router should be here in main.jsx */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

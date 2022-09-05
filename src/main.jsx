import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import DataFormProvider from "./context/DataFormContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DataFormProvider>
      <App />
    </DataFormProvider>
  </React.StrictMode>
);

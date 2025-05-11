import React from "react";
import ReactDOM from "react-dom/client";
import Semaforo from "./components/Semaforo.jsx";
//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

// index.css'
import "../styles/index.css";

// components

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Semaforo />
  </React.StrictMode>
);

import React, { useState } from "react";

const Semaforo = () => {
  const [color, setColor] = useState("rojo");
  const clickRojo = () => {
    setColor("rojo");
  };

  const clickAmbar = () => {
    setColor("ambar");
  };

  const clickVerde = () => {
    setColor("verde");
  };

  return (
    <div className="semaforo">
      <div
        className={`rojo ${color === "rojo" ? "activo" : ""}`}
        onClick={clickRojo}
      ></div>
      <div
        className={`ambar ${color === "ambar" ? "activo" : ""}`}
        onClick={clickAmbar}
      ></div>
      <div
        className={`verde ${color === "verde" ? "activo" : ""}`}
        onClick={clickVerde}
      ></div>
    </div>
  );
};
export default Semaforo;

import "./CardEmpleo.css";

import React from "react";
import imgPrueba from "../../../../public/Distribuidor Coca-Cola.jpeg";

export const CardEmpleo = () => {
  return (
    <div className="cardContainer">
      <img src={imgPrueba.src} alt="Empresa" />
      <div className="contenedorDatosEmpresa">
        <h4 className="nombreEmpresa">CocaCola</h4>
        <h5 className="profesionEmpresa">Distribuidor</h5>
        <p className="descripcion">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam,
          recusandae
        </p>
        <div className="botonContenedor">
          <button className="botonContactar">Contactar</button>
        </div>
      </div>
    </div>
  );
};

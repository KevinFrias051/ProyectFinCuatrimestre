import "./CardPersona.css";

import React from "react";
import imgPrueba from "../../../../public/Persona.jpeg"

export const CardPersona = () => {
  return (
    <div className="cardContainer">
      <img src={imgPrueba.src} alt="Persona" />
      <div className="contenedorDatosPersonales">
        <h4 className="nombrePersona">Franco Serjen</h4>
        <h5 className="profesionPersona">Empresario</h5>
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

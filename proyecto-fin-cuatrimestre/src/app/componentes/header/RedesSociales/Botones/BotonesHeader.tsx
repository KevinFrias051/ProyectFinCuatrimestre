"use client";
import React from "react";
import "./RedesHeader.css";

// Recibe desde Conteneder Redes Sociales las props para utilizar
export const BotonRedesHeader = (props: any) => {
  const { imageSrc, linkTo, altText } = props;

  // Funcion para redigir del boton seleccionado fuera de nuestra web a la red social que corresponda
  // utiliza un rooteo de tipo Linkto
  const navegarALinkTo = () => {
    window.location.href = linkTo;
  };

  // Renderiza cada boton de red social
  return (
    <>
      <div>
        <button className="BotonesHeader" onClick={() => navegarALinkTo()}>
          <img className= "img" src={imageSrc} alt={altText} />
        </button>
      </div>
    </>
  );
};